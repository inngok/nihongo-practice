import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Import data
const soumatomeData = {
  1: { // Tuần 1
    1: { // Ngày 1
      title: "Nhà bếp – phòng khách",
      japanese: "キッチンで / リビングで",
      words: [
        { kanji: "台所", kana: "だいどころ", meaning: "nhà bếp" },
        { kanji: "電子レンジ", kana: "đên shi ren ji", meaning: "lò vi sóng" },
        { kanji: "お茶わん", kana: "o cha wan", meaning: "chén" },
        { kanji: "ワイングラス", kana: "wa in gu ra su", meaning: "ly uống rượu" },
        { kanji: "コーヒーカップ", kana: "koo hii kap pu", meaning: "tách cà phê" },
        { kanji: "茶わん", kana: "cha wan", meaning: "ly, cốc uống trà" },
        { kanji: "湯飲み", kana: "yu no mi", meaning: "tách trà" },
        { kanji: "ガスレンジ", kana: "ga su ren ji", meaning: "bếp ga" },
        { kanji: "ガスコンロ", kana: "ga su kon ro", meaning: "bếp ga di động, bếp gas" },
        { kanji: "ガラスのコップ", kana: "ga ra su no kop pu", meaning: "ly thủy tinh" },
        { kanji: "レバー", kana: "re baa", meaning: "cần gạt số, cần điều khiển" },
        { kanji: "流し", kana: "na ga shi", meaning: "bồn, chậu rửa" },
        { kanji: "居間", kana: "i ma", meaning: "phòng khách" },
        { kanji: "リビング", kana: "ri bin gu", meaning: "phòng khách" },
        { kanji: "窓ガラス", kana: "ma do ga ra su", meaning: "cửa kính; kính cửa sổ" },
        { kanji: "雨戸", kana: "a ma do", meaning: "cửa sập, cửa che mưa, cửa chớp" },
        { kanji: "網戸", kana: "a mi do", meaning: "cửa lưới" },
        { kanji: "天井", kana: "ten joo", meaning: "trần nhà" },
        { kanji: "床", kana: "yu ka", meaning: "sàn nhà" },
        { kanji: "コンセント", kana: "kon sen to", meaning: "ổ cắm điện" },
        { kanji: "コード", kana: "koo do", meaning: "dây dẫn" },
        { kanji: "エアコン", kana: "ea kon", meaning: "máy điều hòa" },
        { kanji: "ヒーター", kana: "hii taa", meaning: "máy sưởi, lò sưởi" },
        { kanji: "カーペット", kana: "kaa pet to", meaning: "tấm thảm" },
        { kanji: "蛇口", kana: "ja gu chi", meaning: "vòi nước" },
        { kanji: "水道の蛇口をひねる", kana: "sui doo no ja gu chi o hi ne ru", meaning: "mở vòi nước" },
        { kanji: "水が凍る", kana: "mi zu ga koo ru", meaning: "nước đông lạnh" },
        { kanji: "氷になる", kana: "koo ri ni na ru", meaning: "nước đá, thành nước đá" },
        { kanji: "冷凍して保存する", kana: "rei too shi te ho zon su ru", meaning: "làm lạnh, làm đông sau đó đem bảo quản" },
        { kanji: "残り物を温める", kana: "no ko ri mo no o a ta ta me ru", meaning: "làm nóng đồ ăn thừa" },
        { kanji: "ビールを冷やす", kana: "bii ru o hi ya su", meaning: "làm lạnh bia" },
        { kanji: "ビールが冷えている", kana: "bii ru ga hi e te i ru", meaning: "bia được làm lạnh" },
        { kanji: "エアコンのリモコン", kana: "ea kon no ri mo kon", meaning: "điều khiển điều hòa" },
        { kanji: "スイッチ", kana: "su ic chi", meaning: "công tắc" },
        { kanji: "電源を入れる", kana: "den gen o i re ru", meaning: "mở điện, bật nguồn điện" },
        { kanji: "電源を切る", kana: "den gen o ki ru", meaning: "tắt điện, cắt nguồn điện" },
        { kanji: "じゅうたんを敷く", kana: "juu tan o shi ku", meaning: "trải thảm" },
        { kanji: "暖房をつける", kana: "dan boo o tsu ke ru", meaning: "bật lò sưởi" },
        { kanji: "冷房が効いている", kana: "rei boo ga kii te i ru", meaning: "máy lạnh đang hoạt động" },
        { kanji: "日当たりがいい", kana: "hi a ta ri ga ii", meaning: "có ánh nắng chiều vào" },
        { kanji: "日当たりが悪い", kana: "hi a ta ri ga wa rui", meaning: "không có ánh nắng chiều vào" },
      ]
    }
  }
};

export default function Soumatome() {
  const navigate = useNavigate();
  const [activeWeek, setActiveWeek] = useState(1);
  const [activeDay, setActiveDay] = useState(1);
  const [viewMode, setViewMode] = useState('list'); // 'list', 'flashcard', 'quiz'

  // Flashcard State
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Quiz State
  const [quizData, setQuizData] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef(null);

  const currentData = useMemo(() => {
    return soumatomeData[activeWeek]?.[activeDay] || { title: '', words: [] };
  }, [activeWeek, activeDay]);

  // Actions
  const startQuiz = useCallback(() => {
    const shuffled = [...currentData.words].sort(() => Math.random() - 0.5);
    setQuizData(shuffled);
    setQuizIndex(0);
    setScore(0);
    setUserInput('');
    setFeedback(null);
    setShowHint(false);
    setViewMode('quiz');
  }, [currentData]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (viewMode === 'flashcard') {
        if (e.code === 'ArrowRight') nextCard();
        if (e.code === 'ArrowLeft') prevCard();
        if (e.code === 'Space') { e.preventDefault(); setIsFlipped(f => !f); }
      } else if (viewMode === 'quiz' && !feedback) {
        if (e.key === 'Enter') checkAnswer();
      } else if (viewMode === 'quiz' && feedback) {
        if (e.key === 'Enter') nextQuiz();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [viewMode, cardIndex, feedback, userInput]);

  // Flashcard logic
  const nextCard = () => { if (cardIndex < currentData.words.length - 1) { setCardIndex(i => i + 1); setIsFlipped(false); } };
  const prevCard = () => { if (cardIndex > 0) { setCardIndex(i => i - 1); setIsFlipped(false); } };

  // Quiz logic
  const checkAnswer = () => {
    const answer = quizData[quizIndex].meaning.toLowerCase().trim();
    if (userInput.toLowerCase().trim() === answer) {
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
      alert(`Xong! Bạn đúng ${score + (feedback === 'correct' ? 1 : 0)}/${quizData.length}`);
      setViewMode('list');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-44 md:pt-32 pb-20 px-4 md:px-6 font-sans relative overflow-hidden text-slate-900">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-slate-100 opacity-[0.03] pointer-events-none select-none leading-none z-0 whitespace-nowrap">
        SOUMATOME
      </div>

      <div className="w-full max-w-5xl relative z-10">
        
        {/* Navigation & Header */}
        <div className="mb-12">
          <button 
            onClick={() => navigate('/vocabulary')}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 hover:text-black transition-colors mb-8 decoration-slate-100"
          >
            Danh sách từ vựng
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="space-y-6 flex-grow">
              <div className="flex flex-col gap-4">
                <span className="text-slate-300 font-bold text-[10px] tracking-[0.3em] uppercase">Chọn tuần học</span>
                <div className="flex gap-2 flex-wrap text-nowrap">
                   {[1, 2, 3, 4, 5, 6].map(week => (
                     <button
                       key={week}
                       onClick={() => { setActiveWeek(week); setViewMode('list'); }}
                       className={`px-4 py-2 border ${activeWeek === week ? 'bg-black text-white border-black shadow-lg text-nowrap' : 'border-slate-100 text-slate-400 hover:border-black hover:text-black'} text-xs font-bold transition-all duration-300`}
                     >
                       TUẦN {week}
                     </button>
                   ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-slate-300 font-bold text-[10px] tracking-[0.3em] uppercase">Chọn ngày</span>
                <div className="flex gap-2 flex-wrap">
                   {[1, 2, 3, 4, 5, 6, 7].map(day => (
                     <button
                       key={day}
                       onClick={() => { setActiveDay(day); setViewMode('list'); }}
                       className={`px-3 py-1 text-[10px] font-black tracking-widest uppercase rounded-full transition-all ${activeDay === day ? 'bg-white text-black border border-black shadow-sm' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                     >
                       Ngày {day}
                     </button>
                   ))}
                </div>
              </div>
            </div>

            {/* Mode Switcher */}
            <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-100 shadow-sm self-start md:self-end whitespace-nowrap">
              <button onClick={() => setViewMode('list')} className={`px-6 py-2.5 rounded-xl text-[10px] font-bold transition-all ${viewMode === 'list' ? 'bg-black text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}>Danh sách</button>
              <button onClick={() => { setViewMode('flashcard'); setCardIndex(0); setIsFlipped(false); }} className={`px-6 py-2.5 rounded-xl text-[10px] font-bold transition-all ${viewMode === 'flashcard' ? 'bg-black text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}>Flashcard</button>
              <button onClick={startQuiz} className={`px-6 py-2.5 rounded-xl text-[10px] font-bold transition-all ${viewMode === 'quiz' ? 'bg-black text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}>Luyện tập</button>
            </div>
          </div>
        </div>

        {/* STUDY VIEWS */}
        
        {viewMode === 'list' && (
          <>
            {currentData.words.length > 0 && (
              <div className="mb-12 border-l-4 border-black pl-6 py-2 animate-in slide-in-from-left-4 duration-500">
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight italic">
                  {currentData.title}
                </h1>
                <p className="text-sm md:text-lg text-slate-400 font-medium italic mt-2">
                  {currentData.japanese}
                </p>
              </div>
            )}
            <div className="w-full border-t border-slate-100 pt-8 animate-in fade-in duration-700">
              <div className="grid grid-cols-1 gap-1">
                {currentData.words.map((word, index) => (
                  <div key={index} className="group flex flex-col md:flex-row md:items-center py-4 px-4 hover:bg-slate-50 transition-all rounded-2xl border border-transparent hover:border-slate-100">
                    <div className="w-10 text-[10px] font-black text-slate-200 group-hover:text-slate-400 mb-2 md:mb-0">{(index+1).toString().padStart(2, '0')}</div>
                    <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 items-center">
                      <div className="flex flex-col"><span className="text-2xl font-black text-slate-900 leading-tight">{word.kanji}</span><span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{word.kana}</span></div>
                      <div className="flex items-center md:justify-center"><span className="text-xs font-medium text-slate-400 uppercase tracking-widest">{word.kana}</span></div>
                      <div className="flex items-center md:justify-end"><span className="text-sm md:text-base font-bold text-slate-600 bg-slate-50/50 group-hover:bg-white group-hover:shadow-sm px-4 py-1.5 rounded-xl border border-transparent group-hover:border-slate-100 transition-all">{word.meaning}</span></div>
                    </div>
                  </div>
                ))}
                {currentData.words.length === 0 && <div className="py-20 text-center text-slate-400 font-medium italic">Dữ liệu đang được cập nhật...</div>}
              </div>
            </div>
          </>
        )}

        {viewMode === 'flashcard' && currentData.words.length > 0 && (
          <div className="max-w-4xl mx-auto flex flex-col items-center animate-in fade-in zoom-in-95 duration-500">
            <div className="w-full flex justify-between items-center mb-10 px-4">
              <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">Tiến trình: {cardIndex+1} / {currentData.words.length}</span>
              <div className="h-1 bg-slate-100 w-64 rounded-full overflow-hidden"><div className="h-full bg-black transition-all" style={{width: `${((cardIndex+1)/currentData.words.length)*100}%`}}></div></div>
            </div>
            <div className="group perspective w-full aspect-[16/10] md:max-h-[400px] cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
               <div className={`relative w-full h-full duration-500 preserve-3d shadow-xl rounded-[3rem] ${isFlipped ? 'rotate-y-180' : ''}`}>
                  <div className="absolute inset-0 backface-hidden bg-white border border-slate-100 rounded-[3rem] flex flex-col items-center justify-center p-12">
                     <div className="text-6xl md:text-8xl font-black text-slate-900 text-center leading-tight">{currentData.words[cardIndex].kanji}</div>
                     <div className="mt-4 text-[10px] font-bold text-slate-300 uppercase tracking-widest italic decoration-slate-100 underline underline-offset-8">NHẤN ĐỂ LẬT</div>
                  </div>
                  <div className="absolute inset-0 backface-hidden bg-white border-2 border-slate-950 text-slate-950 rounded-[3rem] rotate-y-180 flex flex-col items-center justify-center p-12">
                     <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Nghĩa tiếng Việt</div>
                     <div className="text-3xl md:text-5xl font-black text-center italic leading-tight">{currentData.words[cardIndex].meaning}</div>
                     <div className="mt-6 text-xl font-bold text-slate-400 font-japanese">{currentData.words[cardIndex].kana}</div>
                  </div>
               </div>
            </div>
            <div className="mt-12 flex gap-4">
               <button onClick={prevCard} disabled={cardIndex===0} className={`px-8 py-3 rounded-2xl border text-[10px] font-black uppercase transition-all ${cardIndex===0?'opacity-10':'hover:bg-slate-50'}`}>TRƯỚC</button>
               <button onClick={nextCard} disabled={cardIndex===currentData.words.length-1} className={`px-12 py-3 rounded-2xl bg-black text-white text-[10px] font-black uppercase transition-all ${cardIndex===currentData.words.length-1?'opacity-10':'hover:scale-105 active:scale-95'}`}>TIẾP</button>
            </div>
          </div>
        )}

        {viewMode === 'quiz' && quizData.length > 0 && (
          <div className="max-w-2xl mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-12 duration-700">
            <div className="w-full flex justify-between mb-12">
               <div className="flex flex-col"><span className="text-[10px] font-black text-slate-300 uppercase">CÂU HỎI</span><span className="font-black">{quizIndex+1}/{quizData.length}</span></div>
               <div className="flex flex-col items-end"><span className="text-[10px] font-black text-slate-300 uppercase">ĐÚNG</span><span className="font-black text-emerald-600">{score}</span></div>
            </div>
            <div className="text-center w-full space-y-16">
               <div className="space-y-4">
                  <div className="text-6xl md:text-8xl font-black text-slate-900 leading-tight">{quizData[quizIndex].kanji}</div>
                  <div className="text-2xl font-bold text-slate-300 italic">{quizData[quizIndex].kana}</div>
               </div>
               <div className="space-y-6 w-full max-w-md mx-auto">
                  <input ref={inputRef} disabled={!!feedback} value={userInput} onChange={e=>setUserInput(e.target.value)} type="text" placeholder="Gõ nghĩa tiếng Việt..." className={`w-full text-center py-6 text-3xl font-black border-b-4 outline-none transition-all ${feedback==='correct'?'border-emerald-500 text-emerald-600 bg-emerald-50/20':feedback==='incorrect'?'border-red-500 text-red-600 bg-red-50/20':'border-black focus:border-slate-300'}`} />
                  <div className="flex flex-col gap-4">
                     {!feedback ? (
                       <div className="grid grid-cols-2 gap-4">
                          <button onClick={checkAnswer} className="py-4 bg-black text-white text-[10px] font-bold uppercase rounded-2xl hover:scale-105 transition-all">KIỂM TRA</button>
                          <button onClick={()=>setShowHint(!showHint)} className="py-4 border border-slate-200 text-slate-400 text-[10px] font-bold uppercase rounded-2xl hover:border-black hover:text-black transition-colors">{showHint?'ẨN GỢI Ý':'XEM GỢI Ý'}</button>
                       </div>
                     ) : (
                       <button onClick={nextQuiz} className="py-4 bg-black text-white text-[10px] font-bold uppercase rounded-2xl animate-in zoom-in-95 duration-300">{quizIndex===quizData.length-1?'XEM KẾT QUẢ':'CÂU TIẾP THEO'}</button>
                     )}
                     {showHint && !feedback && <div className="bg-slate-50 p-4 rounded-xl text-xs font-bold text-slate-400 italic">Gợi ý: {quizData[quizIndex].meaning.substring(0,2)}...</div>}
                     {feedback==='incorrect' && <div className="bg-emerald-50 p-6 rounded-2xl text-center"><p className="text-[10px] font-black text-emerald-600 uppercase mb-1">DÁP ÁN ĐÚNG</p><p className="text-3xl font-black text-emerald-700">{quizData[quizIndex].meaning}</p></div>}
                  </div>
               </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
