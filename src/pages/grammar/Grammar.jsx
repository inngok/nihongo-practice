import React, { useState, useEffect, useMemo, useRef } from 'react';
import { BookOpen, Brain, CheckCircle, ChevronLeft, ChevronRight, RotateCcw, HelpCircle, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { grammarData } from '../../data/grammarData';

export default function Grammar() {
  const navigate = useNavigate();
  const [activeMode, setActiveMode] = useState('menu'); // 'menu', 'flashcard', 'quiz'
  const [selectedUnit, setSelectedUnit] = useState('all'); // 1, 2, 'all'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState(null); // 'correct', 'incorrect'
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef(null);

  // Filter data based on selected unit
  const activeData = useMemo(() => {
    if (selectedUnit === 'all') return grammarData;
    return grammarData.filter(item => item.unit === selectedUnit);
  }, [selectedUnit]);

  // Reset quiz states when mode or unit changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setUserInput('');
    setFeedback(null);
    setScore(0);
    setShowHint(false);
  }, [activeMode, selectedUnit]);

  // Handle next/prev in flashcard/quiz
  const handleNext = () => {
    if (currentIndex < activeData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      setFeedback(null);
      setUserInput('');
      setShowHint(false);
    } else {
      // Completed current set
      alert(`Chúc mừng! Bạn đã hoàn thành bài luyện tập với số điểm ${score}/${activeData.length}`);
      setActiveMode('menu');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
      setFeedback(null);
      setUserInput('');
      setShowHint(false);
    }
  };

  const switchMode = (mode) => {
    if (activeData.length === 0) {
      alert("Hiện chưa có dữ liệu cho Unit này.");
      return;
    }
    setActiveMode(mode);
  };

  const checkAnswer = () => {
    const cleanInput = userInput.trim().replace(/\s/g, '').toLowerCase();
    const correctAns = activeData[currentIndex].quiz.answer.replace(/\s/g, '').toLowerCase();
    
    // Check main answer or accepts list
    const validAnswers = [correctAns];
    if (activeData[currentIndex].quiz.accepts) {
      activeData[currentIndex].quiz.accepts.forEach(acc => {
         validAnswers.push(acc.replace(/\s/g, '').toLowerCase());
      });
    }

    if (validAnswers.includes(cleanInput)) {
      setFeedback('correct');
      setScore(score + 1);
    } else {
      setFeedback('incorrect');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/30 font-sans text-slate-800 p-4 md:p-8 lg:p-12 flex flex-col items-center selection:bg-indigo-100 selection:text-indigo-900">
      {/* Background Ornaments */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-violet-100/30 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="w-full max-w-5xl mb-8 md:mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-700 to-violet-600 bg-clip-text text-transparent flex items-center justify-center md:justify-start gap-3">
             <BookOpen className="w-8 h-8 text-indigo-600" /> Ngữ Pháp N3
          </h1>
          <p className="text-slate-500 font-medium mt-1 flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            {selectedUnit === 'all' ? 'Tổng hợp 110 mẫu N3' : `Đang học theo Unit ${selectedUnit}`}
          </p>
        </div>
        <button 
          onClick={() => activeMode === 'menu' ? navigate('/') : setActiveMode('menu')}
          className="group px-6 py-2.5 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md hover:border-indigo-200 transition-all flex items-center gap-2 text-indigo-600 font-bold"
        >
          <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" /> 
          {activeMode === 'menu' ? 'Trang chủ' : 'Quay lại'}
        </button>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-white/50 min-h-[600px] flex flex-col transition-all">
        
        {/* MENU MODE */}
        {activeMode === 'menu' && (
          <div className="p-6 md:p-12 flex flex-col items-center justify-center flex-grow gap-12">
            <div className="w-full bg-slate-100/50 p-2 rounded-[2rem] flex flex-wrap items-center justify-center gap-2 border border-slate-200/50">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <button 
                  key={num}
                  onClick={() => setSelectedUnit(num)}
                  className={`py-2 px-6 rounded-2xl text-sm font-bold transition-all duration-300 ${selectedUnit === num ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 -translate-y-0.5' : 'text-slate-500 hover:bg-white hover:text-indigo-600 hover:shadow-sm'}`}
                >
                  U{num < 10 ? `0${num}` : num}
                </button>
              ))}
              <div className="w-px h-8 bg-slate-300/50 mx-2 hidden sm:block"></div>
              <button 
                onClick={() => setSelectedUnit('all')}
                className={`py-2 px-6 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${selectedUnit === 'all' ? 'bg-violet-600 text-white shadow-lg shadow-violet-200 -translate-y-0.5' : 'text-slate-500 hover:bg-white hover:text-violet-600 hover:shadow-sm'}`}
              >
                <Layers className="w-4 h-4"/> Tất cả
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              <button 
                onClick={() => switchMode('flashcard')}
                className="group p-8 bg-indigo-50/30 border border-indigo-100/50 rounded-[2rem] hover:bg-indigo-600 transition-all duration-500 flex flex-col items-center text-center gap-4 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-200"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-sm">
                  <Brain className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-extrabold text-2xl mb-2 group-hover:text-white transition-colors">Ghi nhớ</h3>
                  <p className="text-slate-500 group-hover:text-indigo-100 transition-colors text-sm">Học cấu trúc & ví dụ qua Flashcards</p>
                </div>
              </button>
              
              <button 
                onClick={() => switchMode('quiz')}
                className="group p-8 bg-emerald-50/30 border border-emerald-100/50 rounded-[2rem] hover:bg-emerald-600 transition-all duration-500 flex flex-col items-center text-center gap-4 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-200"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-sm">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-extrabold text-2xl mb-2 group-hover:text-white transition-colors">Luyện tập</h3>
                  <p className="text-slate-500 group-hover:text-emerald-100 transition-colors text-sm">Thử thách trí nhớ qua bài tập điền từ</p>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* FLASHCARD MODE */}
        {activeMode === 'flashcard' && (
          <div className="p-6 md:p-12 flex flex-col items-center justify-center flex-grow gap-8">
            <div className="flex justify-between items-center w-full max-w-lg mb-4">
              <span className="px-5 py-2 bg-indigo-50 text-indigo-600 rounded-full font-bold text-sm">
                Câu {currentIndex + 1} / {activeData.length}
              </span>
              <div className="flex gap-2">
                <button onClick={handlePrev} disabled={currentIndex === 0} className="p-3 rounded-full hover:bg-slate-100 disabled:opacity-30 transition-all">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={handleNext} className="p-3 rounded-full hover:bg-slate-100 transition-all">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div 
              className={`relative w-full h-[450px] cursor-pointer perspective-2000 transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 text-white rounded-[2rem] shadow-2xl flex flex-col items-center justify-center backface-hidden ${isFlipped ? 'invisible' : ''} p-8 text-center`}>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">～{activeData[currentIndex].pattern}</h2>
                <div className="w-16 h-1 w-full bg-white/20 rounded-full mb-8 max-w-[100px]"></div>
                <p className="text-indigo-100 text-base font-medium animate-pulse">Nhấn vào thẻ để xem giải nghĩa</p>
              </div>

              <div className={`absolute inset-0 bg-white border border-slate-100 rounded-[2rem] shadow-2xl p-8 md:p-12 flex flex-col items-center justify-start overflow-auto backface-hidden transform rotate-y-180 custom-scrollbar ${!isFlipped ? 'invisible' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-4 mt-2">{activeData[currentIndex].meaning}</h3>
                <div className="w-full h-px bg-slate-100 mb-6"></div>
                <p className="text-slate-600 text-center mb-8 text-base md:text-lg leading-relaxed max-w-2xl">{activeData[currentIndex].explanation}</p>
                <div className="w-full space-y-4 mt-auto max-w-2xl mx-auto">
                  {activeData[currentIndex].examples.map((ex, i) => (
                    <div key={i} className="bg-indigo-50/50 p-5 rounded-2xl border-l-4 border-indigo-500">
                      <p className="text-base md:text-lg font-semibold text-slate-800">{ex.jp}</p>
                      <p className="text-sm md:text-base text-slate-600 mt-2 italic">{ex.vn}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* QUIZ MODE */}
        {activeMode === 'quiz' && (
          <div className="p-6 md:p-12 flex flex-col items-center justify-center flex-grow gap-8">
            <div className="flex justify-between items-center w-full max-w-lg mb-4">
              <span className="px-5 py-2 bg-emerald-50 text-emerald-600 rounded-full font-bold text-sm">
                Điểm: {score} / {activeData.length}
              </span>
              <span className="text-slate-400 font-bold">Câu {currentIndex + 1}</span>
            </div>

            <div className="w-full bg-slate-50/80 p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-inner flex flex-col items-center gap-10">
              <div className="text-center space-y-6">
                <HelpCircle className="w-12 h-12 text-emerald-500 mx-auto opacity-50" />
                <h3 className="text-2xl md:text-4xl font-bold text-slate-800 leading-relaxed px-4">
                  {activeData[currentIndex].quiz.sentence.split('________').map((part, i) => (
                    <React.Fragment key={i}>
                      {part}
                      {i === 0 && (
                        <span className="mx-2 px-6 py-1 border-b-4 border-emerald-400 text-emerald-600 min-w-[120px] inline-block">
                          {feedback && feedback !== null ? activeData[currentIndex].quiz.answer : '...'}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </h3>
              </div>

              <div className="w-full space-y-6 max-w-2xl mt-4">
                {feedback === null ? (
                  <>
                    <input 
                      ref={inputRef}
                      type="text"
                      autoFocus
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          if (e.repeat) return;
                          checkAnswer();
                        }
                      }}
                      placeholder="Nhập mẫu ngữ pháp vào đây..."
                      className="w-full p-5 md:p-6 bg-white border-2 border-slate-200 rounded-2xl text-xl text-center focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all shadow-sm"
                    />
                    <div className="flex gap-3">
                      <button 
                        onClick={() => setShowHint(!showHint)}
                        className="p-4 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors"
                        title="Gợi ý"
                      >
                        <HelpCircle className="w-6 h-6" />
                      </button>
                      <button 
                        onClick={checkAnswer}
                        className="flex-grow py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                      >
                        {userInput ? 'Kiểm tra' : 'Xem đáp án'}
                      </button>
                    </div>
                    {showHint && (
                      <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl text-amber-700 text-sm italic animate-in slide-in-from-top-2">
                        Gợi ý: {activeData[currentIndex].quiz.hint}
                      </div>
                    )}
                  </>
                ) : (
                  <div className={`p-8 rounded-[2rem] text-center w-full animate-in zoom-in duration-300 ${feedback === 'correct' ? 'bg-emerald-50 border border-emerald-100' : 'bg-rose-50 border border-rose-100'}`}>
                    {feedback === 'correct' ? (
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                          <CheckCircle className="w-8 h-8" />
                        </div>
                        <p className="text-emerald-700 font-black text-2xl">CHÍNH XÁC!</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-rose-400 font-bold uppercase tracking-widest text-sm">Đáp án đúng là:</p>
                        <p className="text-rose-600 font-black text-4xl">{activeData[currentIndex].quiz.answer}</p>
                      </div>
                    )}
                    <p className="mt-6 text-slate-600 italic text-lg opacity-80">{activeData[currentIndex].quiz.translation}</p>
                    <button 
                      onClick={handleNext}
                      className={`mt-10 px-12 py-4 rounded-2xl font-black text-white shadow-xl transition-all hover:scale-105 active:scale-95 ${feedback === 'correct' ? 'bg-emerald-600 shadow-emerald-200 hover:bg-emerald-700' : 'bg-rose-600 shadow-rose-200 hover:bg-rose-700'}`}
                    >
                      CÂU TIẾP THEO
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
