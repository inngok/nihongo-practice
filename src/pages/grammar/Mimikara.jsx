import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Brain, CheckCircle, Layers, List, Search, 
  ChevronRight, ChevronLeft, Check, RotateCcw, 
  HelpCircle, MoreHorizontal, ArrowLeft
} from 'lucide-react';

const grammarData = [
  // ... (Dữ liệu từ 1-102 đã có trong hệ thống, tôi sẽ tóm lược phần đầu và tập trung khôi phục phần bị mất từ 103-110)
  {
    id: 1, unit: 1, pattern: "に対して", meaning: "Đối với / Ngược lại với...", explanation: "Dùng để chỉ đối tượng mà hành động hướng tới, hoặc so sánh hai sự việc tương phản.",
    examples: [{ jp: "先生に対して、失礼なことを言ってはいけない。", vn: "Không được nói những lời thất lễ với giáo viên." }, { jp: "昨日は寒かったのに対して、今日は暑い。", vn: "Hôm qua lạnh, ngược lại hôm nay lại nóng." }],
    quiz: { sentence: "目上の人________、敬語を使いなさい。", answer: "に対して", accepts: [], hint: "Đối với/Hướng tới", translation: "Hãy sử dụng kính ngữ đối với người bề trên." }
  },
  // ... (Gia định dữ liệu trung gian ở đây)
  {
    id: 103, unit: 10, pattern: "をこめて", meaning: "Gửi gắm (tình cảm) vào...", explanation: "Làm việc gì đó với tất cả tình yêu, lòng biết ơn, tâm nguyện.",
    examples: [{ jp: "愛をこめて、手紙を書きました。", vn: "Tôi đã viết lá thư chứa đựng tất cả tình yêu thương." }, { jp: "感謝 của気持ちをこめて、歌います。", vn: "Tôi sẽ hát với tất cả lòng biết ơn." }],
    quiz: { sentence: "心を________、プレゼントを選びました。", answer: "こめて", accepts: ["込めて"], hint: "Gửi gắm", translation: "Tôi đã chọn món quà này với tất cả tấm lòng." }
  },
  {
    id: 104, unit: 10, pattern: "わりに(は)", meaning: "Khá là... so với", explanation: "Đánh giá sự việc có kết quả trái ngược với mức độ dự đoán.",
    examples: [{ jp: "彼はよく食べるわりに、太らない。", vn: "Anh ấy ăn nhiều thế mà lại không béo." }, { jp: "値段のわりに、料理が美味しい。", vn: "So với giá tiền thì món ăn ngon." }],
    quiz: { sentence: "お年寄りの________, とても元気だ。", answer: "わりに", accepts: ["わりには"], hint: "So với...", translation: "So với tuổi già thì cụ khá là khỏe mạnh." }
  },
  {
    id: 105, unit: 10, pattern: "くせに", meaning: "Mặc dù... thế mà (trách móc)", explanation: "Giống 'わりに' nhưng mang sắc thái chê bai, trách móc.",
    examples: [{ jp: "知っているくせに、教えてくれない。", vn: "Biết thế mà lại không chỉ cho tôi." }, { jp: "男のくせに、こんなことで泣くな。", vn: "Đàn ông con trai gì mà lại khóc vì mấy chuyện thế này." }],
    quiz: { sentence: "お金がない________、高いものばかり買う。", answer: "くせに", accepts: [], hint: "Mặc dù... thế mà", translation: "Không có tiền thế mà toàn mua đồ đắt đỏ." }
  },
  {
    id: 106, unit: 10, pattern: "てみせる", meaning: "Chắc chắn sẽ làm (cho xem)", explanation: "Thể hiện quyết tâm mạnh mẽ chứng tỏ cho người khác thấy.",
    examples: [{ jp: "今度の試験には、絶対に合格してみせる。", vn: "Kỳ thi lần này tôi chắc chắn sẽ đỗ cho mà xem." }],
    quiz: { sentence: "次の試合は絶対に勝っ________。", answer: "てみせる", accepts: ["て見せる"], hint: "Chắc chắn làm cho xem", translation: "Trận đấu tới tôi nhất định sẽ chiến thắng cho mà xem." }
  },
  {
    id: 107, unit: 10, pattern: "をきっかけに", meaning: "Nhân cơ hội / Nhờ có", explanation: "Lấy một sự kiện làm duyên cớ, bước ngoặt để bắt đầu việc mới.",
    examples: [ { jp: "病気をきっかけに、タバコをやめた。", vn: "Nhờ trận ốm mà tôi đã bỏ thuốc lá." } ],
    quiz: { sentence: "日本のアニメ________、日本語を勉強し始めた。", answer: "をきっかけに", accepts: ["をきっかけにして"], hint: "Nhân cơ hội", translation: "Nhờ anime Nhật mà tôi bắt đầu học tiếng Nhật." }
  },
  {
    id: 108, unit: 10, pattern: "とする / としたら / とすれば / とすると", meaning: "Giả sử là... / Nếu cho rằng...", explanation: "Giả định tình huống hoặc đưa ra suy luận.",
    examples: [{ jp: "もし宝くじが当たったとしたら、家を買いたい。", vn: "Giả sử mà trúng vé số thì tôi muốn mua nhà." }],
    quiz: { sentence: "もし生まれ変われると________、鳥になりたい。", answer: "したら", accepts: ["すれば", "すると"], hint: "Giả sử", translation: "Nếu như được sinh ra một lần nữa, tôi muốn trở thành chú chim." }
  },
  {
    id: 109, unit: 10, pattern: "際に / 際(に)は", meaning: "Khi / Lúc (trang trọng)", explanation: "Giống với 時, nhưng lịch sự, dùng trong văn bản, thông báo.",
    examples: [{ jp: "帰国の際には、連絡してください。", vn: "Khi nào về nước thì hãy liên lạc nhé." }],
    quiz: { sentence: "お降りの________、お忘れ物にご注意ください。", answer: "際は", accepts: ["際に"], hint: "Khi / Lúc (lịch sự)", translation: "Khi quý khách xuống tàu, xin lưu ý hành lý để quên." }
  },
  {
    id: 110, unit: 10, pattern: "おそれがある", meaning: "Có nguy cơ / E rằng...", explanation: "Sự lo lắng điều tồi tệ có thể xảy ra.",
    examples: [{ jp: "明日は大大雨のおそれがある。", vn: "Ngày mai có nguy cơ sẽ mưa lớn." }],
    quiz: { sentence: "この地域は津波の________があります。", answer: "おそれ", accepts: ["恐れ"], hint: "Có nguy cơ", translation: "Khu vực này có nguy cơ xảy ra sóng thần." }
  }
];

export default function Mimikara() {
  const navigate = useNavigate();
  const [activeMode, setActiveMode] = useState('menu');
  const [selectedUnit, setSelectedUnit] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isShuffle, setIsShuffle] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [studyData, setStudyData] = useState([]);
  const inputRef = useRef(null);
  const [completedIds, setCompletedIds] = useState(() => {
    const saved = localStorage.getItem('mimikara_completed');
    try { return saved ? JSON.parse(saved) : []; } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem('mimikara_completed', JSON.stringify(completedIds));
  }, [completedIds]);

  // Focus input automatically in quiz
  useEffect(() => {
    if (activeMode === 'quiz' && !feedback) inputRef.current?.focus();
  }, [currentIndex, activeMode, feedback]);

  const activeData = useMemo(() => 
    selectedUnit === 'all' ? grammarData : grammarData.filter(i => i.unit === selectedUnit),
    [selectedUnit]);

  const currentItem = useMemo(() => studyData[currentIndex] || {}, [studyData, currentIndex]);

  // Score messages lookup
  const SCORE_MESSAGES = [
    { threshold: 1, message: 'Tuyệt đỉnh! Tiếp tục phát huy nhé.' },
    { threshold: 0.5, message: 'Rất tốt! Bạn đang tiến bộ rõ rệt.' },
    { threshold: 0, message: 'Đừng nản lòng! Thử lại một lần nữa bạn nhé.' },
  ];

  const getScoreMessage = useCallback((currentScore, total) => {
    const ratio = total > 0 ? currentScore / total : 0;
    return SCORE_MESSAGES.find(m => ratio >= m.threshold)?.message;
  }, []);

  const switchMode = useCallback((mode) => {
    const data = [...activeData];
    if (mode === 'quiz' && isShuffle) data.sort(() => Math.random() - 0.5);
    
    setStudyData(data);
    setActiveMode(mode);
    setCurrentIndex(0);
    setFeedback(null);
    setUserInput('');
    setScore(0);
    setShowResults(false);
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }, [activeData, isShuffle]);

  const handleNext = useCallback(() => {
    const isLastItem = currentIndex >= studyData.length - 1;
    
    const actions = {
      quiz: () => isLastItem ? setShowResults(true) : null,
      default: () => isLastItem ? switchMode('menu') : null
    };

    (actions[activeMode] || actions.default)();
    
    if (isLastItem) return;

    const item = studyData[currentIndex];
    const isStudyMode = ['flashcard', 'cards'].includes(activeMode);
    
    if (isStudyMode && !completedIds.includes(item.id)) {
      setCompletedIds(prev => [...prev, item.id]);
    }

    setCurrentIndex(curr => curr + 1);
    setFeedback(null);
    setUserInput('');
    setIsFlipped(false);
    setShowHint(false);
  }, [currentIndex, studyData, activeMode, completedIds, switchMode]);

  const handleKeyDown = (e) => {
    if (e.key !== 'Enter') return;

    if (!feedback) {
      const cleanInput = userInput.trim().toLowerCase();
      const isCorrect = cleanInput === currentItem.quiz?.answer.toLowerCase();
      
      setFeedback(isCorrect ? 'correct' : 'incorrect');
      if (isCorrect) {
        setScore(s => s + 1);
        if (!completedIds.includes(currentItem.id)) {
          setCompletedIds(p => [...p, currentItem.id]);
        }
      }
    } else {
      handleNext();
    }
  };

  // RENDERING COMPONENTS (Memoized for performance)
  const MenuScreen = useMemo(() => (
    <div className="flex flex-col gap-12 animate-in fade-in duration-500">
      <div className="flex flex-wrap gap-2">
        {[1,2,3,4,5,6,7,8,9,10].map(num => (
          <button 
            key={num} 
            onClick={() => setSelectedUnit(num)} 
            className={`px-6 py-4 border ${selectedUnit === num ? 'bg-black text-white' : 'border-slate-100 text-slate-400'} text-xs font-black transition-all`}
          >
            U{num < 10 ? `0${num}` : num}
          </button>
        ))}
        <button 
          onClick={() => setSelectedUnit('all')} 
          className={`px-6 py-4 border ${selectedUnit === 'all' ? 'bg-black text-white' : 'border-slate-100 text-slate-400'} text-xs font-black`}
        >
          TẤT CẢ
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {[
          { id: 'flashcard', label: 'Ghi nhớ', icon: Brain },
          { id: 'cards', label: 'Flashcard', icon: Layers },
          { id: 'quiz', label: 'Luyện tập', icon: CheckCircle },
          { id: 'list', label: 'Danh sách', icon: List }
        ].map(m => (
          <button 
            key={m.id} 
            onClick={() => switchMode(m.id)} 
            className="flex-1 min-w-[120px] py-5 border border-black text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all flex flex-col items-center gap-2"
          >
            <m.icon className="w-5 h-5" /> {m.label}
          </button>
        ))}
      </div>
    </div>
  ), [selectedUnit, switchMode]);

  const ListScreen = useMemo(() => (
    <div className="flex flex-col gap-8 animate-in">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
        <input 
          type="text" 
          placeholder="Tìm kiếm..." 
          value={searchTerm} 
          onChange={e => setSearchTerm(e.target.value)} 
          className="w-full pl-12 pr-4 py-4 border-b-2 border-slate-100 focus:border-black outline-none font-medium" 
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activeData
          .filter(i => i.pattern.includes(searchTerm) || i.meaning.includes(searchTerm))
          .map(item => (
            <div 
              key={item.id} 
              onClick={() => { setStudyData([item]); setActiveMode('flashcard'); setCurrentIndex(0); }} 
              className="p-8 border border-slate-100 rounded-[2rem] hover:border-black transition-all cursor-pointer group"
            >
              <div className="flex justify-between mb-4">
                <span className="text-[10px] font-black text-slate-300">U{item.unit} • #{item.id}</span>
                {completedIds.includes(item.id) && <Check className="w-4 h-4 text-emerald-500" />}
              </div>
              <h3 className="text-2xl font-black italic mb-2">{item.pattern}</h3>
              <p className="text-slate-500 font-bold text-sm italic">{item.meaning}</p>
            </div>
          ))}
      </div>
    </div>
  ), [activeData, searchTerm, completedIds]);

  const StudyScreen = (
    <div className="flex flex-col flex-grow animate-in">
      <div className="w-full flex justify-between items-center mb-10">
        <span className="text-[10px] font-black text-slate-400">TIẾN TRÌNH: {currentIndex + 1} / {studyData.length}</span>
        <div className="h-1 bg-slate-100 w-64 rounded-full overflow-hidden">
          <div 
            className="h-full bg-black transition-all duration-500" 
            style={{ width: `${((currentIndex + 1) / studyData.length) * 100}%` }} 
          />
        </div>
      </div>
      
      <div className="flex-grow flex flex-col justify-center">
        {{
          cards: (
            <div onClick={() => setIsFlipped(!isFlipped)} className="w-full max-w-sm aspect-[3/4] mx-auto perspective cursor-pointer">
              <div className={`relative w-full h-full transition-all duration-700 preserve-3d shadow-2xl rounded-[3rem] ${isFlipped ? 'rotate-y-180' : ''}`}>
                <div className="absolute inset-0 backface-hidden bg-white border-2 border-slate-100 rounded-[3rem] flex items-center justify-center p-12 text-center">
                  <h2 className="text-4xl font-black italic">{currentItem.pattern}</h2>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-black text-white rounded-[3rem] flex flex-col items-center justify-center p-12 text-center">
                  <h3 className="text-2xl font-bold mb-4 italic">{currentItem.meaning}</h3>
                  <p className="text-sm text-white/60 italic">{currentItem.explanation}</p>
                </div>
              </div>
            </div>
          ),
          flashcard: (
            <div className="max-w-4xl mx-auto w-full space-y-8">
              <div className="bg-white border-2 border-slate-900 rounded-[2.5rem] p-12 text-center">
                <h2 className="text-5xl font-black italic mb-6">{currentItem.pattern}</h2>
                <div className="h-px w-20 bg-slate-100 mx-auto mb-6" />
                <h3 className="text-2xl font-bold italic text-slate-700">{currentItem.meaning}</h3>
              </div>
              <div className="space-y-4">
                {currentItem.examples?.map((ex, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-[1.5rem] italic">
                    <p className="font-bold text-slate-900 mb-1">{ex.jp}</p>
                    <p className="text-xs text-slate-400 font-bold">{ex.vn}</p>
                  </div>
                ))}
              </div>
            </div>
          ),
          quiz: (
            <div className="text-center space-y-12">
              <p className="text-slate-400 italic">"{currentItem.quiz?.translation}"</p>
              <h3 className="text-3xl font-bold italic leading-relaxed">
                {currentItem.quiz?.sentence.split('________').map((p, i, a) => (
                  <React.Fragment key={i}>
                    {p}
                    {i < a.length-1 && (
                      <span className={`mx-3 border-b-2 transition-colors ${feedback === 'correct' ? 'border-emerald-500 text-emerald-600' : 'border-black'}`}>
                        {feedback === 'correct' ? currentItem.quiz.answer : (userInput || '...')}
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </h3>
              <input 
                ref={inputRef} 
                value={userInput} 
                onChange={e => !feedback && setUserInput(e.target.value)} 
                onKeyDown={handleKeyDown} 
                placeholder="Nhập đáp án..." 
                className="w-full max-w-md py-6 px-10 rounded-full border-2 border-black/5 focus:border-black outline-none text-center text-xl font-bold transition-all shadow-xl" 
              />
            </div>
          )
        }[activeMode]}
      </div>

      <div className="flex gap-4 py-10 w-full max-w-3xl mx-auto">
        <button 
          onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)} 
          disabled={currentIndex === 0} 
          className="flex-1 py-4 border border-slate-200 rounded-2xl text-[10px] font-black uppercase text-slate-400 disabled:opacity-30 hover:border-black hover:text-black transition-all flex items-center justify-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" /> TRƯỚC
        </button>
        <button 
          onClick={handleNext} 
          className="flex-1 py-4 bg-black text-white rounded-2xl text-[10px] font-black uppercase hover:shadow-2xl transition-all flex items-center justify-center gap-2"
        >
          {currentIndex === studyData.length - 1 ? 'HOÀN THÀNH' : 'TIẾP THEO'} <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const mainContent = {
    menu: MenuScreen,
    list: ListScreen,
    flashcard: StudyScreen,
    cards: StudyScreen,
    quiz: StudyScreen
  }[activeMode];

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center pt-32 px-4 md:px-12 selection:bg-black selection:text-white">
      <div className="w-full max-w-6xl mb-12 flex justify-between items-end">
        <div>
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Mimikara Oboeru • N3</p>
          <h1 className="text-5xl font-black tracking-tighter italic">Mimikara</h1>
        </div>
        <button 
          onClick={() => ({ menu: () => navigate('/grammar'), default: () => switchMode('menu') }[activeMode] || (() => switchMode('menu')))()}
          className="px-8 py-3 border-2 border-black text-xs font-black uppercase hover:bg-black hover:text-white transition-all"
        >
          {activeMode === 'menu' ? 'Thoát' : 'Quay lại'}
        </button>
      </div>

      <div className="w-full max-w-6xl flex-grow flex flex-col">
        {mainContent}
      </div>

      {showResults && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-sm bg-white rounded-[2.5rem] p-10 text-center shadow-2xl">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto absolute -top-8 left-1/2 -translate-x-1/2 rotate-3 border-4 border-white">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div className="mt-8 space-y-6">
              <h2 className="text-3xl font-black italic uppercase">Hoàn thành!</h2>
              <div className="py-6 border-y border-slate-50">
                <div className="text-7xl font-black italic">{score} <span className="text-2xl text-slate-200">/ {studyData.length}</span></div>
              </div>
              <p className="text-slate-500 italic text-sm">{getScoreMessage(score, studyData.length)}</p>
              <div className="grid grid-cols-1 gap-3">
                <button onClick={() => switchMode('quiz')} className="py-4 bg-black text-white rounded-2xl font-black uppercase text-[10px]">Thử lại</button>
                <button onClick={() => switchMode('menu')} className="py-4 bg-slate-50 text-slate-400 rounded-2xl font-black uppercase text-[10px]">Menu</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { animation: fade-in 0.4s ease-out forwards; }
        .perspective { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}} />
    </div>
  );
}

