import React, { useState, useMemo, useCallback, useRef, useEffect, useDeferredValue } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Search, RotateCcw, Brain, Volume2 } from 'lucide-react';
import { jpd316 } from '../data/jpd316Data';
import { jpd326 } from '../data/jpd326Data';
import { jpd336 } from '../data/jpd336Data';


const MemorizeCard = ({ item }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <div onClick={() => setRevealed(!revealed)} className="bg-white border border-slate-100 rounded-2xl p-6 hover:border-slate-300 transition-all cursor-pointer">
       <h3 className="text-2xl font-bold text-slate-900 font-kanji mb-2">{item.pattern}</h3>
       {revealed ? (
         <div className="animate-in fade-in duration-300 pt-4 border-t border-slate-50 mt-4">
           <p className="text-slate-600 font-medium italic mb-2">{item.meaning}</p>
           <p className="text-sm text-slate-400 mb-4">{item.explanation}</p>
           {item.examples && item.examples.length > 0 && (
             <div className="space-y-2 bg-slate-50 p-4 rounded-xl">
               {item.examples.slice(0,1).map((ex, i) => (
                 <div key={i}>
                   <p className="text-sm font-bold text-slate-900 font-kanji">{ex.jp}</p>
                   <p className="text-xs text-slate-500 italic">{ex.vn}</p>
                 </div>
               ))}
             </div>
           )}
         </div>
       ) : (
         <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-4 flex items-center gap-2">
           Nhấn để xem nghĩa
         </div>
       )}
    </div>
  );
};

export default function DekiruGrammar() {
  const { type } = useParams();
  const navigate = useNavigate();
  
  const [viewMode, setViewMode] = useState('list'); // 'list', 'memorize', 'flashcard', 'practice'
  const [activeMode, setActiveMode] = useState('quiz'); // 'quiz', 'practice', 'listening' (Inside Luyện tập)
  const [selectedUnit, setSelectedUnit] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearchTerm = useDeferredValue(searchTerm);

  // Flashcard State
  const [isFlipped, setIsFlipped] = useState(false);

  // Load currentIndex from localStorage
  useEffect(() => {
    const savedIndex = localStorage.getItem(`dekiru_grammar_progress_${type}_unit_${selectedUnit}`);
    if (savedIndex !== null) {
      const parsed = parseInt(savedIndex, 10);
      if (parsed >= 0 && parsed < activeData.length) {
        setCurrentIndex(parsed);
      } else {
        setCurrentIndex(0);
      }
    } else {
      setCurrentIndex(0);
    }
    setIsFlipped(false);
  }, [type, selectedUnit, activeData.length]);

  // Save currentIndex to localStorage on change
  useEffect(() => {
    if (viewMode === 'flashcard' && activeData.length > 0) {
      localStorage.setItem(`dekiru_grammar_progress_${type}_unit_${selectedUnit}`, currentIndex.toString());
    }
  }, [currentIndex, type, selectedUnit, viewMode, activeData.length]);

  // Study States
  const [quizData, setQuizData] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState(null); // 'correct' | 'incorrect'
  const [showResults, setShowResults] = useState(false);
  const [quizOptions, setQuizOptions] = useState([]);
  const inputRef = useRef(null);

  const dataMap = {
    jpd316: jpd316,
    jpd326: jpd326,
    jpd336: jpd336,
  };

  const activeData = useMemo(() => {
    if (!type) return [];
    const data = dataMap[type] || [];
    const processedData = data.map((item, index) => ({
      ...item,
      unit: item.unit || Math.floor(index / 14) + 1
    }));
    if (selectedUnit === 'all') return processedData;
    return processedData.filter(i => i.unit === parseInt(selectedUnit));
  }, [type, selectedUnit]);

  const filteredGrammar = useMemo(() => {
    if (!deferredSearchTerm.trim()) return activeData;
    const term = deferredSearchTerm.toLowerCase();
    return activeData.filter(item => 
      (item.pattern && item.pattern.toLowerCase().includes(term)) ||
      (item.meaning && item.meaning.toLowerCase().includes(term)) ||
      (item.explanation && item.explanation.toLowerCase().includes(term))
    );
  }, [activeData, deferredSearchTerm]);

  const availableUnits = useMemo(() => {
    if (!type) return [];
    const data = dataMap[type] || [];
    const units = new Set(data.map((item, index) => item.unit || Math.floor(index / 14) + 1));
    return Array.from(units).sort((a, b) => a - b);
  }, [type]);

  const currentItem = activeData[currentIndex] || {};

  // Blanking Example Logic
  const getBlankedExample = useCallback((item) => {
    if (!item || !item.examples || item.examples.length === 0) {
      return { jp: "...", vn: item ? item.meaning : "...", answer: item ? item.pattern.replace(/[~〜]/g, '') : "" };
    }
    const ex = item.examples[0];
    const bases = item.pattern.replace(/[~〜]/g, '').split('/').map(s => s.trim());
    let blanked = ex.jp;
    let answer = bases[0]; 
    let replaced = false;
    
    bases.sort((a,b) => b.length - a.length);
    for (let base of bases) {
      const cleanBase = base.replace(/\(.*?\)/g, '').replace(/（.*?）/g, '');
      if (cleanBase.length > 1 && ex.jp.includes(cleanBase)) {
         blanked = ex.jp.replace(cleanBase, ' ＿＿＿ ');
         answer = cleanBase;
         replaced = true;
         break;
      }
    }
    if (!replaced) {
       blanked = ex.jp + " (Điền: " + bases[0] + ")";
       answer = bases[0];
    }
    return { jp: blanked, vn: ex.vn, answer };
  }, []);

  const currentQuizEx = useMemo(() => {
    if (!quizData || quizData.length === 0) return null;
    return getBlankedExample(quizData[quizIndex]);
  }, [quizData, quizIndex, getBlankedExample]);

  // Audio helper
  const speakExample = useCallback((exText) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(exText);
      utterance.lang = 'ja-JP';
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const generateOptions = (dataList, correctItem) => {
    const others = dataMap[type].filter(d => d.id !== correctItem.id).sort(() => Math.random() - 0.5).slice(0, 3);
    return [correctItem, ...others].sort(() => Math.random() - 0.5);
  };

  const startMode = (modeStr) => {
    if (activeData.length === 0) return;
    const data = [...activeData].sort(() => Math.random() - 0.5);
    setQuizData(data);
    setQuizIndex(0);
    setScore(0);
    setUserInput('');
    setFeedback(null);
    setShowResults(false);
    
    if (modeStr === 'quiz' || modeStr === 'listening') {
      setQuizOptions(generateOptions(data, data[0]));
    }
    
    if (modeStr === 'listening') {
      const fullSentence = data[0].examples && data[0].examples.length > 0 ? data[0].examples[0].jp : data[0].pattern;
      setTimeout(() => speakExample(fullSentence), 500);
    }
    
    setActiveMode(modeStr);
  };

  const checkAnswer = (answer = null) => {
    if (feedback) return;
    
    const current = quizData[quizIndex];
    let isCorrect = false;

    if (activeMode === 'practice' || activeMode === 'listening') {
      const normalize = (str) => str.replace(/[~\s]/g, '').toLowerCase();
      const input = normalize(userInput);
      
      const expected = normalize(currentQuizEx.answer);
      const validAnswers = current.pattern.split('/').map(p => normalize(p));
      
      isCorrect = input === expected || validAnswers.some(v => v.includes(input) && input.length >= 2);
    } else if (answer) {
      isCorrect = answer.id === current.id;
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
      const nextIdx = quizIndex + 1;
      setQuizIndex(nextIdx);
      setUserInput('');
      setFeedback(null);
      if (activeMode === 'quiz' || activeMode === 'listening') {
        setQuizOptions(generateOptions(quizData, quizData[nextIdx]));
      }
      if (activeMode === 'listening') {
        const fullSentence = quizData[nextIdx].examples && quizData[nextIdx].examples.length > 0 ? quizData[nextIdx].examples[0].jp : quizData[nextIdx].pattern;
        speakExample(fullSentence);
      }
    } else {
      setShowResults(true);
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (viewMode === 'practice' && !showResults) {
        if (e.key === 'Enter') {
          if (feedback) nextQuiz();
          else if ((activeMode === 'practice' || activeMode === 'listening') && userInput) checkAnswer();
        }
      }
      if (viewMode === 'flashcard') {
        if (e.key === 'ArrowRight' && currentIndex < activeData.length - 1) { setCurrentIndex(i => i + 1); setIsFlipped(false); }
        if (e.key === 'ArrowLeft' && currentIndex > 0) { setCurrentIndex(i => i - 1); setIsFlipped(false); }
        if (e.key === 'Space' || e.key === 'ArrowUp' || e.key === 'ArrowDown') { e.preventDefault(); setIsFlipped(f => !f); }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [viewMode, activeMode, feedback, userInput, showResults, quizIndex, currentIndex, activeData.length]);

  useEffect(() => {
    if (viewMode === 'practice' && (activeMode === 'practice' || activeMode === 'listening') && !feedback) {
      inputRef.current?.focus();
    }
  }, [quizIndex, viewMode, activeMode, feedback]);

  if (!type) {
    return (
      <div className="min-h-screen w-full bg-white flex flex-col items-center pt-28 pb-16 px-6">
        <div className="w-full max-w-5xl relative z-10">
          <button
            onClick={() => navigate('/grammar')}
            className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors mb-8"
          >
            ← Quay lại
          </button>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Dekiru Grammar
            </h1>
            <p className="text-sm md:text-base text-slate-500 max-w-xl leading-relaxed">
              Chọn chương trình học để bắt đầu luyện tập ngữ pháp theo giáo trình Dekiru Nihongo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 'jpd316', title: 'Bài 1-5', japanese: 'Unit 1〜5', label: 'N3' },
              { id: 'jpd326', title: 'Bài 6-10', japanese: 'Unit 6〜10', label: 'N3' },
              { id: 'jpd336', title: 'Bài 11-15', japanese: 'Unit 11〜15', label: 'N3' }
            ].map((item, idx) => (
              <div
                key={item.id}
                onClick={() => navigate(`/grammar/dekiru/${item.id}`)}
                className="group relative bg-white border border-slate-200 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:border-slate-400 hover:shadow-md hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex justify-between items-center mb-10">
                  <span className="text-sm font-bold text-slate-300">0{idx + 1}</span>
                  <span className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm font-medium">{item.japanese}</p>
                </div>
                <div className="pt-5 border-t border-slate-100 mt-auto">
                  <span className="text-[10px] font-bold tracking-[0.15em] text-slate-500 uppercase">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-28 md:pt-40 pb-20 px-4 md:px-6 font-sans relative overflow-hidden text-slate-900">
      <div className="w-full max-w-5xl relative z-10">
        
        {/* Navigation & Header */}
        <div className="mb-12">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigate('/grammar/dekiru');
            }}
            className="px-6 py-2 border-2 border-slate-900 text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all font-sans relative z-[200] cursor-pointer mb-8"
          >
            Quay lại
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="space-y-6 flex-grow">
               <div className="flex flex-col gap-2 mb-4">
                <span className="text-slate-300 font-bold text-[10px] tracking-[0.3em] uppercase">Chọn bài học</span>
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => setSelectedUnit('all')}
                    className={`px-6 py-2 text-[10px] font-black tracking-widest uppercase rounded-full transition-all ${selectedUnit === 'all' ? 'bg-black text-white shadow-xl' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                  >
                    Tất cả
                  </button>
                  {availableUnits.map(unit => (
                    <button
                      key={unit}
                      onClick={() => setSelectedUnit(unit.toString())}
                      className={`px-6 py-2 text-[10px] font-black tracking-widest uppercase rounded-full transition-all ${selectedUnit === unit.toString() ? 'bg-black text-white shadow-xl' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                    >
                      Unit {unit.toString().padStart(2, '0')}
                    </button>
                  ))}
                </div>
              </div>
              <div className="border-l-4 border-black pl-6 py-2 animate-in slide-in-from-left-4 duration-500">
                <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter leading-tight italic uppercase">
                  {type === 'jpd316' ? 'Dekiru Bài 1-5' : 'Dekiru Bài 6-10'}
                </h1>
                <p className="text-xs md:text-sm text-slate-400 font-medium italic mt-1">
                  Ngữ pháp N3
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 self-start md:self-end items-start md:items-end">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                {/* Mode Switcher */}
                <div className="flex bg-slate-50 p-1 rounded-full border border-slate-100 whitespace-nowrap overflow-x-auto no-scrollbar max-w-full">
                  <button onClick={() => { setViewMode('list'); }} className={`px-5 py-2 rounded-full text-[10px] font-medium transition-all ${viewMode === 'list' ? 'bg-black text-white shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}>Danh sách</button>
                  <button onClick={() => { setViewMode('memorize'); }} className={`px-5 py-2 rounded-full text-[10px] font-medium transition-all ${viewMode === 'memorize' ? 'bg-black text-white shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}>Ghi nhớ</button>
                  <button onClick={() => { setViewMode('flashcard'); setCurrentIndex(0); setIsFlipped(false); }} className={`px-5 py-2 rounded-full text-[10px] font-medium transition-all ${viewMode === 'flashcard' ? 'bg-black text-white shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}>Flashcard</button>
                  <button onClick={() => { setViewMode('practice'); startMode('quiz'); }} className={`px-5 py-2 rounded-full text-[10px] font-medium transition-all ${viewMode === 'practice' ? 'bg-black text-white shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}>Luyện tập</button>
                </div>
              </div>
              
              {/* Quiz Mode Switcher */}
              {viewMode === 'practice' && (
                <div className="flex bg-white p-1 rounded-xl border border-dotted border-slate-200 animate-in fade-in slide-in-from-top-2 duration-300">
                  <button 
                    onClick={() => startMode('quiz')} 
                    className={`px-4 py-1.5 rounded-lg text-[9px] font-bold transition-all ${activeMode === 'quiz' ? 'bg-slate-100 text-black shadow-none' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    TRẮC NGHIỆM
                  </button>
                  <button 
                    onClick={() => startMode('practice')} 
                    className={`px-4 py-1.5 rounded-lg text-[9px] font-bold transition-all ${activeMode === 'practice' ? 'bg-slate-100 text-black shadow-none' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    TỰ LUẬN
                  </button>
                  <button 
                    onClick={() => startMode('listening')} 
                    className={`px-4 py-1.5 rounded-lg text-[9px] font-bold transition-all ${activeMode === 'listening' ? 'bg-slate-100 text-black shadow-none' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    NGHE ĐIỀN
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* STUDY VIEWS */}
        {viewMode === 'list' && (
          <div className="w-full border-t border-slate-100 pt-8 animate-in fade-in duration-700">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto w-full mb-6">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm ngữ pháp, ý nghĩa..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-300 focus:ring-4 focus:ring-slate-100 transition-all placeholder:font-normal placeholder:text-slate-400"
              />
            </div>
            
            {/* List Row Elements styled exactly like Mimikara */}
            <div className="grid grid-cols-1 gap-1">
              {filteredGrammar.map((item, index) => (
                <div key={item.id} className="group flex flex-col md:flex-row md:items-center py-4 px-4 hover:bg-slate-50 transition-all rounded-2xl border border-transparent hover:border-slate-100">
                  <div className="w-10 text-[10px] font-black text-slate-200 group-hover:text-slate-400 mb-2 md:mb-0">{(index + 1).toString().padStart(2, '0')}</div>
                  <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 items-center">
                    <div className="flex flex-col">
                      <span className="text-2xl font-medium text-slate-900 leading-tight font-kanji">{item.pattern}</span>
                      <span className="text-xs text-slate-400 mt-1">{item.explanation}</span>
                    </div>
                    <div className="flex items-center md:justify-center gap-2">
                      {item.examples && item.examples.length > 0 ? (
                        <>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              speakExample(item.examples[0].jp);
                            }}
                            className="p-2 bg-slate-100 hover:bg-slate-900 hover:text-white rounded-lg text-slate-500 transition-all flex items-center justify-center shrink-0"
                            title="Nghe câu ví dụ"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest italic font-kanji text-left md:text-center max-w-xs block truncate">
                            {item.examples[0].jp}
                          </span>
                        </>
                      ) : (
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-widest italic font-kanji text-left md:text-center">
                          ---
                        </span>
                      )}
                    </div>
                    <div className="flex items-center md:justify-end">
                      <span className="text-sm md:text-base font-bold text-slate-600 bg-slate-50/50 group-hover:bg-white group-hover:shadow-sm px-4 py-1.5 rounded-xl border border-transparent group-hover:border-slate-100 transition-all italic text-right">
                        {item.meaning}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              
              {filteredGrammar.length === 0 && (
                <div className="py-20 text-center text-slate-400 font-medium italic">Không tìm thấy kết quả phù hợp.</div>
              )}
            </div>
          </div>
        )}

        {viewMode === 'memorize' && (
          <div className="max-w-3xl mx-auto space-y-4 animate-in fade-in duration-500 pt-8">
             {activeData.map(item => (
                <MemorizeCard key={item.id} item={item} />
             ))}
          </div>
        )}

        {viewMode === 'flashcard' && activeData.length > 0 && (
          <div className="max-w-4xl mx-auto flex flex-col items-center animate-in fade-in zoom-in-95 duration-500 py-12">
            <div className="w-full flex justify-between items-center mb-10 px-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
                  Tiến trình: {currentIndex + 1} / {activeData.length}
                </span>
                {currentIndex > 0 && (
                  <button 
                    onClick={() => {
                      setCurrentIndex(0);
                      setIsFlipped(false);
                    }}
                    className="text-[9px] font-black uppercase text-red-500 hover:text-red-700 tracking-wider transition-all underline decoration-red-200 underline-offset-4"
                  >
                    Reset
                  </button>
                )}
              </div>
              <div className="h-1 bg-slate-100 w-32 md:w-64 rounded-full overflow-hidden">
                 <div className="h-full bg-black transition-all" style={{ width: `${((currentIndex + 1) / activeData.length) * 100}%` }}></div>
              </div>
            </div>
            
            <div className="group perspective w-full aspect-[4/5] sm:aspect-[16/10] md:max-h-[400px] cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
              <div className={`relative w-full h-full duration-500 preserve-3d shadow-xl rounded-[2.5rem] md:rounded-[3rem] ${isFlipped ? 'rotate-y-180' : ''}`}>
                <div className="absolute inset-0 backface-hidden bg-white border border-slate-100 rounded-[2.5rem] md:rounded-[3rem] flex flex-col items-center justify-center p-12">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-6 block">#{currentItem.id}</span>
                  <div className="text-4xl md:text-6xl font-black text-slate-900 text-center leading-tight font-kanji">{currentItem.pattern}</div>
                  <div className="mt-8 text-[10px] font-bold text-slate-300 uppercase tracking-widest italic decoration-slate-100 underline underline-offset-8">NHẤN ĐỂ LẬT</div>
                </div>
                <div className="absolute inset-0 backface-hidden bg-white border-2 border-slate-950 text-slate-950 rounded-[2.5rem] md:rounded-[3rem] rotate-y-180 flex flex-col items-center justify-center p-8 md:p-12 text-center overflow-y-auto">
                  <h3 className="text-2xl md:text-3xl font-bold italic text-slate-600 mb-4">{currentItem.meaning}</h3>
                  <p className="text-sm md:text-base text-slate-500 mb-6 font-medium leading-relaxed">{currentItem.explanation}</p>
                  {currentItem.examples && currentItem.examples.length > 0 && (
                    <div className="bg-slate-50 p-6 rounded-2xl w-full text-left mt-auto border border-slate-100">
                      <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase">Ví dụ minh họa</p>
                      <p className="text-lg font-bold text-slate-900 font-kanji mb-1">{currentItem.examples[0].jp}</p>
                      <p className="text-xs text-slate-500 italic">{currentItem.examples[0].vn}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4 w-full justify-center">
              <button onClick={() => { setCurrentIndex(prev => Math.max(0, prev - 1)); setIsFlipped(false); }} disabled={currentIndex === 0} className={`px-8 py-4 rounded-2xl border text-[10px] font-black uppercase transition-all ${currentIndex === 0 ? 'opacity-10' : 'hover:bg-slate-50'}`}>TRƯỚC</button>
              <button onClick={() => { currentIndex === activeData.length - 1 ? setViewMode('list') : setCurrentIndex(prev => prev + 1); setIsFlipped(false); }} className={`px-12 py-4 rounded-2xl bg-black text-white text-[10px] font-black uppercase transition-all`}>{currentIndex === activeData.length - 1 ? 'HOÀN THÀNH' : 'TIẾP THEO'}</button>
            </div>
          </div>
        )}

        {viewMode === 'practice' && activeMode === 'quiz' && (
          <div className="max-w-2xl mx-auto flex flex-col items-center animate-in fade-in duration-700 py-12">
            <div className="w-full flex justify-between mb-12">
              <div className="flex flex-col"><span className="text-[10px] font-black text-slate-300 uppercase">CÂU HỎI</span><span className="font-black">{quizIndex + 1}/{quizData.length}</span></div>
              <div className="flex flex-col items-end"><span className="text-[10px] font-black text-slate-300 uppercase">ĐÚNG</span><span className="font-black text-emerald-600">{score}</span></div>
            </div>
            
            <div className="text-center w-full mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-normal font-kanji py-4">
                {currentQuizEx?.jp}
              </h2>
              <p className="text-lg text-slate-500 italic mt-6 inline-block max-w-2xl">{currentQuizEx?.vn}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {quizOptions.map((opt, i) => {
                let btnClass = "p-6 border border-slate-200 rounded-2xl text-xl font-kanji font-bold hover:border-slate-400 transition-all text-slate-800 bg-white";
                if (feedback) {
                   if (opt.id === quizData[quizIndex].id) btnClass = "p-6 border-2 border-emerald-500 bg-emerald-50 text-emerald-700 rounded-2xl text-xl font-kanji font-bold";
                   else btnClass = "p-6 border border-slate-100 opacity-50 bg-slate-50 text-slate-400 rounded-2xl text-xl font-kanji font-bold";
                }
                return (
                  <button key={i} disabled={!!feedback} onClick={() => checkAnswer(opt)} className={btnClass}>
                    {opt.pattern}
                  </button>
                );
              })}
            </div>
            
            {feedback && (
              <button onClick={nextQuiz} className="mt-10 py-4 px-12 bg-black text-white text-[10px] font-black uppercase rounded-2xl animate-in slide-in-from-bottom-4">
                {quizIndex === quizData.length - 1 ? 'XEM KẾT QUẢ' : 'CÂU TIẾP THEO'}
              </button>
            )}
          </div>
        )}

        {viewMode === 'practice' && activeMode === 'practice' && (
          <div className="max-w-2xl mx-auto flex flex-col items-center animate-in fade-in duration-700 py-12">
            <div className="w-full flex justify-between mb-12">
              <div className="flex flex-col"><span className="text-[10px] font-black text-slate-300 uppercase">CÂU HỎI</span><span className="font-black">{quizIndex + 1}/{quizData.length}</span></div>
              <div className="flex flex-col items-end"><span className="text-[10px] font-black text-slate-300 uppercase">ĐÚNG</span><span className="font-black text-emerald-600">{score}</span></div>
            </div>
            
            <div className="text-center w-full mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-normal font-kanji py-4">
                {currentQuizEx?.jp}
              </h2>
              <p className="text-lg text-slate-500 italic mt-6 inline-block max-w-2xl">{currentQuizEx?.vn}</p>
            </div>
            
            <div className="w-full max-w-md mx-auto space-y-6">
              <input
                ref={inputRef}
                disabled={!!feedback}
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                type="text"
                placeholder="Nhập phần ngữ pháp bị thiếu..."
                className={`w-full text-center py-6 text-2xl font-kanji border-b-4 outline-none transition-all ${feedback === 'correct' ? 'border-emerald-500 text-emerald-600 bg-emerald-50/20' : feedback === 'incorrect' ? 'border-red-500 text-red-600 bg-red-50/20' : 'border-black focus:border-slate-300 bg-transparent'}`}
              />
              
              {!feedback ? (
                <button onClick={() => checkAnswer()} className="w-full py-4 bg-black text-white text-[10px] font-bold uppercase rounded-2xl transition-all">Kiểm tra</button>
              ) : (
                <div className="space-y-6 animate-in slide-in-from-bottom-4">
                  {feedback === 'incorrect' && (
                    <div className="bg-emerald-50 p-6 rounded-2xl text-center shadow-inner">
                      <p className="text-[10px] font-black text-emerald-600 uppercase mb-2">ĐÁP ÁN ĐÚNG</p>
                      <p className="text-3xl font-bold text-emerald-700 font-kanji">{quizData[quizIndex].pattern}</p>
                    </div>
                  )}
                  {feedback === 'correct' && (
                     <div className="bg-emerald-50 p-4 rounded-2xl text-center shadow-inner">
                       <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1">CHÍNH XÁC</p>
                       <p className="text-xl font-bold text-emerald-600 font-kanji">{quizData[quizIndex].pattern}</p>
                     </div>
                  )}
                  <button onClick={nextQuiz} className="w-full py-4 bg-black text-white text-[10px] font-bold uppercase rounded-2xl transition-all">
                    {quizIndex === quizData.length - 1 ? 'XEM KẾT QUẢ' : 'CÂU TIẾP THEO'}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {viewMode === 'practice' && activeMode === 'listening' && (
          <div className="max-w-2xl mx-auto flex flex-col items-center animate-in fade-in duration-700 py-12">
            <div className="w-full flex justify-between mb-12">
              <div className="flex flex-col"><span className="text-[10px] font-black text-slate-300 uppercase">CÂU HỎI</span><span className="font-black">{quizIndex + 1}/{quizData.length}</span></div>
              <div className="flex flex-col items-end"><span className="text-[10px] font-black text-slate-300 uppercase">ĐÚNG</span><span className="font-black text-emerald-600">{score}</span></div>
            </div>
            
            <div className="text-center w-full mb-12 flex flex-col items-center justify-center">
              <button 
                onClick={() => {
                  const fullSentence = quizData[quizIndex].examples && quizData[quizIndex].examples.length > 0 ? quizData[quizIndex].examples[0].jp : quizData[quizIndex].pattern;
                  speakExample(fullSentence);
                }} 
                className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center transition-all shadow-xl group"
              >
                <Volume2 className="w-10 h-10 text-white" />
              </button>
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-6">Nhấn để nghe lại</p>
            </div>

            <div className="text-center w-full mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-normal font-kanji py-4">
                {currentQuizEx?.jp}
              </h2>
            </div>
            
            <div className="w-full max-w-md mx-auto space-y-6">
              <input
                ref={inputRef}
                disabled={!!feedback}
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                type="text"
                placeholder="Nhập ngữ pháp bị thiếu..."
                className={`w-full text-center py-6 text-2xl font-kanji border-b-4 outline-none transition-all ${feedback === 'correct' ? 'border-emerald-500 text-emerald-600 bg-emerald-50/20' : feedback === 'incorrect' ? 'border-red-500 text-red-600 bg-red-50/20' : 'border-black focus:border-slate-300 bg-transparent'}`}
              />
              
              {!feedback ? (
                <button onClick={() => checkAnswer()} className="w-full py-4 bg-black text-white text-[10px] font-bold uppercase rounded-2xl transition-all">Kiểm tra</button>
              ) : (
                <div className="space-y-6 animate-in slide-in-from-bottom-4">
                  {feedback === 'incorrect' && (
                    <div className="bg-emerald-50 p-6 rounded-2xl text-center shadow-inner">
                      <p className="text-[10px] font-black text-emerald-600 uppercase mb-2">ĐÁP ÁN ĐÚNG</p>
                      <p className="text-3xl font-bold text-emerald-700 font-kanji mb-2">{quizData[quizIndex].pattern}</p>
                      <p className="text-sm font-medium text-emerald-600 mt-2 italic">{currentQuizEx?.vn}</p>
                    </div>
                  )}
                  {feedback === 'correct' && (
                    <div className="bg-emerald-50 p-6 rounded-2xl text-center shadow-inner">
                      <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-2">CHÍNH XÁC</p>
                      <p className="text-sm font-medium text-emerald-600 italic">{currentQuizEx?.vn}</p>
                    </div>
                  )}
                  <button onClick={nextQuiz} className="w-full py-4 bg-black text-white text-[10px] font-bold uppercase rounded-2xl transition-all">
                    {quizIndex === quizData.length - 1 ? 'XEM KẾT QUẢ' : 'CÂU TIẾP THEO'}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Results Modal */}
        {showResults && (
           <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6 sm:p-4 animate-in fade-in duration-300">
             <div 
               className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
               onClick={() => setShowResults(false)}
             />
             <div className="relative w-full max-w-sm bg-white rounded-[2.5rem] shadow-[0_30px_100px_-10px_rgba(0,0,0,0.3)] p-8 md:p-10 text-center animate-in zoom-in duration-300">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto shadow-2xl absolute -top-8 left-1/2 -translate-x-1/2 rotate-3 border-4 border-white">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="mt-8 space-y-6">
                  <div className="space-y-1">
                    <h2 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900 leading-none">Hoàn thành!</h2>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px]">Kết quả luyện tập</p>
                  </div>
                  <div className="py-6 border-y border-slate-50">
                    <div className="text-7xl font-black text-slate-950 tracking-tighter italic">
                      {score}
                      <span className="text-2xl font-black text-slate-200 italic align-top ml-1">/ {quizData.length}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-3 pt-2">
                    <button 
                      onClick={() => startMode(activeMode)}
                      className="w-full py-4 bg-black text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-3"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Luyện tập lại
                    </button>
                    <button 
                      onClick={() => {
                          setShowResults(false);
                          setViewMode('list');
                      }}
                      className="w-full py-4 bg-slate-50 text-slate-400 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] hover:text-black transition-all flex items-center justify-center gap-3"
                    >
                      Về menu
                    </button>
                  </div>
                </div>
             </div>
           </div>
        )}

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .font-kanji { font-family: "Sawarabi Mincho", serif; }
        .perspective { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}} />
    </div>
  );
}
