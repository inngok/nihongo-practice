import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { examVocabData } from '../data/examData';
import { ChevronLeft, ArrowRight, List, Brain, CheckCircle, RefreshCcw } from 'lucide-react';

export default function ExamVocab({ type = 'comprehensive' }) {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('list'); // 'list', 'flashcard', 'quiz', 'summary'

  // Flashcard State
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlashcardReversed, setIsFlashcardReversed] = useState(false);

  // Quiz State
  const [quizData, setQuizData] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [quizType, setQuizType] = useState('jp-to-vn'); // 'jp-to-vn', 'vn-to-jp'
  const [isShuffle, setIsShuffle] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef(null);

  const [searchParams] = useSearchParams();
  const dayParam = searchParams.get('day');
  const weekParam = searchParams.get('week');
  const isAll = searchParams.get('all') === 'true';

  const currentData = useMemo(() => {
    const rawData = examVocabData[type] || { title: '', words: [] };
    
    if (type.includes('kanji-pc8')) {
      let filteredWords = [...rawData.words];
      
      // Filter by Week if param exists
      if (weekParam) {
        filteredWords = filteredWords.filter(w => String(w.week) === String(weekParam));
      }
      
      // Filter by Day if param exists and not showing 'all'
      if (dayParam && !isAll) {
        filteredWords = filteredWords.filter(w => String(w.day) === String(dayParam));
      }

      return {
        ...rawData,
        title: isAll 
          ? `Hán tự PC8 - Tất cả Tuần ${weekParam}`
          : weekParam && dayParam 
            ? `Hán tự PC8 - Tuần ${weekParam} Ngày ${dayParam}`
            : rawData.title,
        words: filteredWords
      };
    }
    
    return rawData;
  }, [type, dayParam, weekParam, isAll]);

  const availableDays = useMemo(() => {
    const rawData = examVocabData[type] || { words: [] };
    if (type.includes('kanji-pc8') && weekParam) {
      const weekWords = rawData.words.filter(w => String(w.week) === String(weekParam));
      return [...new Set(weekWords.map(w => w.day))].sort((a, b) => a - b);
    }
    return [];
  }, [type, weekParam]);


  // Actions
  const startQuiz = useCallback((type = 'jp-to-vn') => {
    const data = isShuffle ? [...currentData.words].sort(() => Math.random() - 0.5) : [...currentData.words];
    setQuizData(data);
    setQuizIndex(0);
    setScore(0);
    setUserInput('');
    setFeedback(null);
    setShowHint(false);
    setQuizType(type);
    setViewMode('quiz');
  }, [currentData]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (viewMode === 'flashcard') {
        if (e.code === 'ArrowRight') nextCard();
        if (e.code === 'ArrowLeft') prevCard();
        if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'ArrowDown') { 
          e.preventDefault(); 
          setIsFlipped(f => !f); 
        }
      } else if (viewMode === 'quiz' && !feedback) {
        if (e.key === 'Enter') checkAnswer();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [viewMode, cardIndex, feedback, userInput]);

  // Reset flashcard flip state when cardIndex changes
  useEffect(() => {
    setIsFlipped(false);
  }, [cardIndex]);

  // Flashcard logic
  const nextCard = () => { if (cardIndex < currentData.words.length - 1) { setCardIndex(i => i + 1); setIsFlipped(false); } };
  const prevCard = () => { if (cardIndex > 0) { setCardIndex(i => i - 1); setIsFlipped(false); } };

  // Quiz logic
  const checkAnswer = () => {
    const currentWord = quizData[quizIndex];
    const input = userInput.toLowerCase().trim();
    
    let isCorrect = false;
    if (quizType === 'jp-to-vn') {
      const answer = currentWord.meaning.toLowerCase().trim();
      isCorrect = input === answer;
    } else {
      // vn-to-jp: Allow kanji, kana or alternative accepts
      const kanji = currentWord.kanji.toLowerCase().trim();
      const kana = currentWord.kana.toLowerCase().trim();
      const accepts = (currentWord.accepts || []).map(a => a.toLowerCase().trim());
      isCorrect = input === kanji || input === kana || accepts.includes(input);
    }

    if (isCorrect) {
      setFeedback('correct');
      setScore(s => s + 1);
    } else {
      setFeedback('incorrect');
    }
  };
  const nextQuiz = () => {
    if (quizIndex < quizData.length - 1) {
      setQuizIndex(i => i + 1);
      setUserInput('');
      setFeedback(null);
      setShowHint(false);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-24 md:pt-24 pb-20 px-4 md:px-6 font-sans relative overflow-hidden text-slate-900">
      <div className="w-full max-w-4xl relative z-10 selection:bg-slate-100">

        {/* Navigation & Header */}
        <div className="mb-10">
          <button
            onClick={() => {
              if (type.includes('kanji-pc8')) {
                navigate('/exam-pc8/kanji');
              } else {
                navigate(type.includes('pc8') ? '/exam-pc8' : '/exam-pc7');
              }
            }}
            className="group flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-slate-400 hover:text-black transition-all uppercase mb-8"
          >
            <ChevronLeft className="w-3 h-3 transition-transform group-hover:-translate-x-0.5" />
            Trở về chọn tuần
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-50 pb-8">
            <div className="space-y-4">
              <div className="space-y-1">
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                  {type.includes('kanji-pc8') ? `Hán tự Tuần ${weekParam}` : currentData.title}
                </h1>
                <p className="text-sm text-slate-400 font-medium">
                  {type.includes('pc8') ? 'Lộ trình ôn thi PC8' : 'Ôn tập tổng hợp PC7'}
                </p>
              </div>

              {/* Day Selector */}
              {type.includes('kanji-pc8') && (
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {availableDays.map((d) => (
                    <button
                      key={d}
                      onClick={() => navigate(`/exam-pc8/kanji/study?week=${weekParam}&day=${d}`)}
                      className={`w-8 h-8 rounded-lg text-[10px] font-bold transition-all ${!isAll && String(dayParam) === String(d) ? 'bg-black text-white shadow-md' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                    >
                      {d}
                    </button>
                  ))}
                  <button
                    onClick={() => navigate(`/exam-pc8/kanji/study?week=${weekParam}&all=true`)}
                    className={`px-4 h-8 rounded-lg text-[10px] font-bold transition-all ${isAll ? 'bg-black text-white shadow-md' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                  >
                    Tất cả
                  </button>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4 items-start md:items-end">
              <div className="flex items-center gap-6">
                {/* Shuffle Toggle - Minimalist */}
                <button 
                  onClick={() => setIsShuffle(!isShuffle)}
                  className="flex items-center gap-2 group"
                >
                  <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors ${isShuffle ? 'text-black' : 'text-slate-300 group-hover:text-slate-400'}`}>Xáo trộn</span>
                  <div className={`w-8 h-4 rounded-full relative transition-colors ${isShuffle ? 'bg-black' : 'bg-slate-100'}`}>
                    <div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform ${isShuffle ? 'translate-x-4' : ''}`} />
                  </div>
                </button>

                {/* Mode Switcher - Text based minimalist */}
                <div className="flex flex-wrap gap-3 md:gap-4 md:border-l border-slate-100 md:pl-6">
                  <button onClick={() => setViewMode('list')} className={`text-[10px] font-bold uppercase tracking-widest transition-all ${viewMode === 'list' ? 'text-black' : 'text-slate-300 hover:text-slate-400'}`}>Danh sách</button>
                  <button onClick={() => { setViewMode('flashcard'); setCardIndex(0); setIsFlipped(false); }} className={`text-[10px] font-bold uppercase tracking-widest transition-all ${viewMode === 'flashcard' ? 'text-black' : 'text-slate-300 hover:text-slate-400'}`}>Ghi nhớ</button>
                  <button onClick={() => setViewMode('quiz')} className={`text-[10px] font-bold uppercase tracking-widest transition-all ${viewMode === 'quiz' ? 'text-black' : 'text-slate-300 hover:text-slate-400'}`}>Kiểm tra</button>
                </div>
              </div>

              {/* Quiz Selection Sub-menu */}
              {viewMode === 'quiz' && (
                <div className="flex gap-4 animate-in fade-in slide-in-from-top-1">
                  <button 
                    onClick={() => startQuiz('jp-to-vn')} 
                    className={`text-[9px] font-bold tracking-widest transition-all ${quizType === 'jp-to-vn' ? 'text-black border-b-2 border-black pb-0.5' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    NHẬT → VIỆT
                  </button>
                  <button 
                    onClick={() => startQuiz('vn-to-jp')} 
                    className={`text-[9px] font-bold tracking-widest transition-all ${quizType === 'vn-to-jp' ? 'text-black border-b-2 border-black pb-0.5' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    VIỆT → NHẬT
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* STUDY VIEWS */}

        {viewMode === 'list' && (
          <div className="w-full animate-in fade-in duration-500">
            <div className="divide-y divide-slate-50">
              {currentData.words.map((word, index) => (
                <div key={index} className="group flex flex-col md:flex-row md:items-center py-6 gap-2 md:gap-0">
                  <div className="w-8 text-[10px] font-bold text-slate-200">{(index + 1).toString().padStart(2, '0')}</div>
                  <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex md:items-center gap-4">
                      <div className="flex flex-col">
                        <span className="text-xl font-bold text-slate-900">{word.kanji}</span>
                        <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">{word.sino}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs font-medium text-slate-400 tracking-wide">{word.kana}</span>
                      </div>
                    </div>
                    <div className="flex items-center md:text-right mt-2 md:mt-0">
                      <span className="text-sm font-medium text-slate-600 group-hover:text-black transition-colors">
                        {word.meaning}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {viewMode === 'flashcard' && currentData.words.length > 0 && (
          <div className="max-w-2xl mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-2 duration-500 py-8">
            <div className="w-full flex justify-between items-center mb-10">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{cardIndex + 1} / {currentData.words.length}</span>
                <div className="h-0.5 bg-slate-100 w-32 rounded-full overflow-hidden">
                  <div className="h-full bg-black transition-all duration-300" style={{ width: `${((cardIndex + 1) / currentData.words.length) * 100}%` }}></div>
                </div>
              </div>
              
              <button 
                onClick={(e) => { e.stopPropagation(); setIsFlashcardReversed(!isFlashcardReversed); setIsFlipped(false); }}
                className={`text-[9px] font-bold uppercase tracking-widest transition-colors ${isFlashcardReversed ? 'text-black' : 'text-slate-300'}`}
              >
                Đảo chiều
              </button>
            </div>

            <div key={cardIndex} className="perspective w-full aspect-[4/3] sm:aspect-[16/10] cursor-pointer animate-in fade-in zoom-in-95 duration-300" onClick={() => setIsFlipped(!isFlipped)}>
              <div className={`relative w-full h-full duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-white border border-slate-100 rounded-3xl flex flex-col items-center justify-center p-8 active:scale-[0.98] transition-transform shadow-sm">
                  {!isFlashcardReversed ? (
                    <div className="text-6xl font-bold text-slate-900">{currentData.words[cardIndex].kanji}</div>
                  ) : (
                    <div className="text-3xl font-bold text-slate-900 text-center">{currentData.words[cardIndex].meaning}</div>
                  )}
                  <div className="absolute bottom-8 text-[9px] font-bold text-slate-200 uppercase tracking-widest">Nhấn để lật</div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 backface-hidden bg-white border border-black rounded-3xl rotate-y-180 flex flex-col items-center justify-center p-8 shadow-sm">
                  {!isFlashcardReversed ? (
                    <div className="text-center space-y-4">
                      <div className="text-2xl font-bold text-slate-900">{currentData.words[cardIndex].meaning}</div>
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-400">{currentData.words[cardIndex].sino}</span>
                        <span className="text-sm font-bold text-black font-mono">{currentData.words[cardIndex].kana}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center space-y-4">
                      <div className="text-5xl font-bold text-slate-900">{currentData.words[cardIndex].kanji}</div>
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-400">{currentData.words[cardIndex].sino}</span>
                        <span className="text-sm font-bold text-black font-mono">{currentData.words[cardIndex].kana}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <button 
                onClick={prevCard} 
                disabled={cardIndex === 0} 
                className={`p-4 rounded-full transition-all ${cardIndex === 0 ? 'opacity-10' : 'hover:bg-slate-50 active:scale-90'}`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="text-[10px] font-bold text-slate-300 tracking-widest">
                NHẤN <span className="text-black">DẤU CÁCH</span> ĐỂ LẬT
              </div>

              <button 
                onClick={nextCard} 
                disabled={cardIndex === currentData.words.length - 1}
                className={`p-4 rounded-full transition-all ${cardIndex === currentData.words.length - 1 ? 'opacity-10' : 'hover:bg-slate-50 active:scale-90'}`}
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {viewMode === 'quiz' && quizData.length > 0 && (
          <div className="max-w-xl mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-2 duration-500 py-8">
            <div className="w-full flex justify-between mb-12">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Câu {quizIndex + 1} / {quizData.length}</span>
                <div className="h-0.5 bg-slate-100 w-32 rounded-full overflow-hidden">
                  <div className="h-full bg-black transition-all" style={{ width: `${((quizIndex + 1) / quizData.length) * 100}%` }}></div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Đúng: {score}</span>
              </div>
            </div>

            <div className="w-full text-center space-y-12">
              <div className="space-y-4">
                {quizType === 'jp-to-vn' ? (
                  <>
                    <div className="text-6xl font-bold text-slate-900 tracking-tight">{quizData[quizIndex].kanji}</div>
                    <div className="text-sm font-medium text-slate-300 font-mono tracking-widest uppercase">{quizData[quizIndex].kana}</div>
                  </>
                ) : (
                  <div className="text-3xl font-bold text-slate-900 tracking-tight leading-relaxed">"{quizData[quizIndex].meaning}"</div>
                )}
              </div>

              <div className="space-y-6 w-full max-w-sm mx-auto">
                <input 
                  ref={inputRef} 
                  autoFocus
                  disabled={!!feedback} 
                  value={userInput} 
                  onChange={e => setUserInput(e.target.value)} 
                  onKeyPress={e => e.key === 'Enter' && checkAnswer()}
                  type="text" 
                  placeholder={quizType === 'jp-to-vn' ? "Nghĩa..." : "Từ..."}
                  className={`w-full text-center py-4 text-2xl font-bold border-b transition-all focus:outline-none placeholder:text-slate-100 ${feedback === 'correct' ? 'border-emerald-500 text-emerald-600 bg-emerald-50/10' : feedback === 'incorrect' ? 'border-red-500 text-red-600 bg-red-50/10' : 'border-slate-100 focus:border-black'}`} 
                />
                
                <div className="flex flex-col gap-4">
                  {!feedback ? (
                    <button onClick={checkAnswer} className="w-full py-4 text-[10px] font-bold tracking-[0.2em] bg-black text-white rounded-xl hover:bg-slate-800 transition-colors">KIỂM TRA</button>
                  ) : (
                    <button onClick={nextQuiz} className="w-full py-4 text-[10px] font-bold tracking-[0.2em] bg-black text-white rounded-xl hover:bg-slate-800 transition-colors">TIẾP THEO</button>
                  )}

                  {feedback === 'incorrect' && (
                    <div className="bg-emerald-50/50 p-6 rounded-2xl text-center animate-in zoom-in-95">
                      <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest mb-2">Đáp án đúng</p>
                      {quizType === 'jp-to-vn' ? (
                        <p className="text-xl font-bold text-emerald-700 italic">"{quizData[quizIndex].meaning}"</p>
                      ) : (
                        <div className="flex flex-col items-center">
                          <p className="text-4xl font-bold text-emerald-700">{quizData[quizIndex].kanji}</p>
                          <p className="text-xs font-medium text-emerald-600 font-mono mt-1">{quizData[quizIndex].kana}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Screen - Now even more minimalist */}
        {showResults && (
           <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6 animate-in fade-in duration-300 backdrop-blur-sm bg-white/80">
             <div className="w-full max-w-xs text-center space-y-10 animate-in zoom-in-95 duration-300">
                <div className="space-y-4">
                  <div className="inline-block p-4 bg-black rounded-3xl mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight uppercase">Xong!</h2>
                </div>

                <div className="space-y-1">
                  <div className="text-7xl font-bold text-slate-900 tabular-nums tracking-tighter">
                    {Math.round((score / quizData.length) * 100)}%
                  </div>
                  <div className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">
                    Đúng {score} trên {quizData.length}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => {
                        setShowResults(false);
                        if (viewMode === 'quiz') startQuiz(quizType);
                        else { setCardIndex(0); setIsFlipped(false); }
                    }}
                    className="w-full py-4 bg-black text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                  >
                    <RefreshCcw className="w-3.5 h-3.5" />
                    Thử lại
                  </button>
                  <button 
                    onClick={() => {
                        setShowResults(false);
                        setViewMode('list');
                    }}
                    className="w-full py-4 text-slate-400 hover:text-black transition-colors text-[10px] font-bold uppercase tracking-widest"
                  >
                    Danh sách từ
                  </button>
                </div>
             </div>
           </div>
        )}
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .perspective { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}} />
    </div>
  );
}
