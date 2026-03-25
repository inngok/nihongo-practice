import React, { useState, useEffect, useMemo, useRef } from 'react';
import { BookOpen, Brain, CheckCircle, ChevronLeft, ChevronRight, RotateCcw, HelpCircle, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const grammarData = [
  // --- UNIT 1 ---
  {
    id: 1, unit: 1,
    pattern: "ことにしている",
    meaning: "Quyết định (thói quen cá nhân)",
    explanation: "Diễn tả thói quen hoặc quy tắc mà bản thân tự đề ra và thực hiện.",
    examples: [
      { jp: "健康のために、毎日野菜 te 食べることにしている。", vn: "Để tốt cho sức khỏe, tôi quyết định (duy trì thói quen) ăn rau mỗi ngày." },
      { jp: "寝る前に、必ず本を10ページ読むことにしている。", vn: "Trước khi ngủ, tôi luôn quyết định đọc 10 trang sách." }
    ],
    quiz: {
      sentence: "私は毎日、30分ジョギング________。",
      answer: "ことにしている",
      hint: "Quyết định thói quen của bản thân",
      translation: "Tôi quyết định chạy bộ 30 phút mỗi ngày."
    }
  },
  {
    id: 2, unit: 1,
    pattern: "ことになっている",
    meaning: "Quy định / Dự định (khách quan)",
    explanation: "Diễn tả những việc đã được quyết định bởi tổ chức, quy định hoặc dự định mang tính khách quan.",
    examples: [
      { jp: "法律で、車を運転する時はシートベルトをすることになっている。", vn: "Theo luật pháp, khi lái xe ô tô thì quy định phải thắt dây an toàn." },
      { jp: "明日は先生に会うことになっている。", vn: "Ngày mai tôi có lịch hẹn gặp thầy giáo (đã được sắp xếp)." }
    ],
    quiz: {
      sentence: "この部屋では、タバコを吸ってはいけない________。",
      answer: "ことになっている",
      hint: "Quy định chung",
      translation: "Trong phòng này có quy định không được hút thuốc."
    }
  },
  {
    id: 3, unit: 1,
    pattern: "ようになっている",
    meaning: "Được thiết kế để / Trở nên (tự động)",
    explanation: "Diễn tả chức năng của máy móc hoặc sự biến đổi trạng thái mang tính tự động.",
    examples: [
      { jp: "このドアは人が近づくと、自動で開くようになっている。", vn: "Cánh cửa này được thiết kế để tự động mở khi có người tiến lại gần." },
      { jp: "このボタンを押すと、お湯が出るようになっている。", vn: "Khi nhấn nút này, nước nóng sẽ chảy ra." }
    ],
    quiz: {
      sentence: "この機械は、暗くなると電気がつく________。",
      answer: "ようになっている",
      hint: "Chức năng/Cấu tạo tự động",
      translation: "Cái máy này được thiết kế để khi trời tối thì đèn sẽ sáng."
    }
  },
  {
    id: 4, unit: 1,
    pattern: "ような / ように",
    meaning: "Giống như / Theo như",
    explanation: "Dùng để so sánh hoặc đưa ra ví dụ.",
    examples: [
      { jp: "太陽のような明るい人だ。", vn: "Đó là một người tươi sáng như mặt trời." },
      { jp: "皆さんが知っているように、日本は島国です。", vn: "Như mọi người đã biết, Nhật Bản là một quốc gia hải đảo." }
    ],
    quiz: {
      sentence: "田中さんの________優しい人になりたい。",
      answer: "ような",
      hint: "Giống như (so sánh)",
      translation: "Tôi muốn trở thành một người hiền lành giống như anh Tanaka."
    }
  },
  {
    id: 5, unit: 1,
    pattern: "みたいだ",
    meaning: "Có vẻ như / Giống như (văn nói)",
    explanation: "Dùng để phỏng đoán dựa trên cảm nhận hoặc so sánh ví von trong văn nói.",
    examples: [
      { jp: "このケーキ、美味しそう. まるで本物みたいだ。", vn: "Cái bánh này trông ngon quá. Cứ như là đồ thật vậy." },
      { jp: "あそこに誰かいるみたいだ。", vn: "Có vẻ như có ai đó ở đằng kia." }
    ],
    quiz: {
      sentence: "彼はまるで子供________だ。",
      answer: "みたい",
      hint: "Giống như (văn nói)",
      translation: "Anh ấy cứ như là trẻ con vậy."
    }
  },
  {
    id: 6, unit: 1,
    pattern: "らしい",
    meaning: "Nghe nói / Đúng chất",
    explanation: "Dùng để truyền đạt tin đồn hoặc diễn tả tính chất điển hình của sự vật/sự việc.",
    examples: [
      { jp: "明日は雨が降るらしい。", vn: "Nghe nói ngày mai trời sẽ mưa." },
      { jp: "今日は春らしい暖かい日だ。", vn: "Hôm nay là một ngày ấm áp đúng chất mùa xuân." }
    ],
    quiz: {
      sentence: "噂によると、あの二人は結婚する________。",
      answer: "らしい",
      hint: "Nghe nói (tin đồn)",
      translation: "Theo lời đồn thì hai người đó nghe nói sắp kết hôn."
    }
  },
  {
    id: 7, unit: 1,
    pattern: "つもり",
    meaning: "Dự định / Cứ ngỡ là",
    explanation: "Diễn tả dự định của bản thân hoặc niềm tin chủ quan về một trạng thái nào đó.",
    examples: [
      { jp: "来年、日本へ行くつもりです。", vn: "Năm sau tôi dự định sẽ đi Nhật Bản." },
      { jp: "若いつもりだが、mō 50-sai da.", vn: "Cứ ngỡ là mình còn trẻ nhưng đã 50 tuổi rồi." }
    ],
    quiz: {
      sentence: "大学を卒業したら、日本で働く________です。",
      answer: "つもり",
      hint: "Dự định",
      translation: "Sau khi tốt nghiệp đại học, tôi dự định sẽ làm việc tại Nhật Bản."
    }
  },
  {
    id: 8, unit: 1,
    pattern: "てくる",
    meaning: "Bắt đầu / Trở nên / Tiến về phía mình",
    explanation: "Diễn tả hành động đang bắt đầu, một sự thay đổi đang diễn ra hoặc hướng về phía người nói.",
    examples: [
      { jp: "最近、少しずつ寒くなってきた。", vn: "Gần đây trời đã bắt đầu lạnh dần lên." },
      { jp: "雨가 降ってきた。", vn: "Trời đã đổ mưa rồi (bắt đầu)." }
    ],
    quiz: {
      sentence: "だんだん日本語が上手になって________。",
      answer: "きた",
      hint: "Thay đổi trạng thái (quá khứ của てくる)",
      translation: "Tiếng Nhật của tôi đang dần dần trở nên giỏi lên."
    }
  },
  {
    id: 9, unit: 2,
    pattern: "てほしい / もらいたい",
    meaning: "Muốn (ai đó) làm gì",
    explanation: "Diễn tả mong muốn người khác thực hiện một hành động nào đó cho mình hoặc cho ai đó.",
    examples: [
      { jp: "親にはいつまでも元気でいてほしい。", vn: "Tôi muốn bố mẹ lúc nào cũng khỏe mạnh." },
      { jp: "この仕事は君にやってもらいたい。", vn: "Tôi muốn cậu làm công việc này." }
    ],
    quiz: {
      sentence: "先生に、もっとゆっくり話して________。",
      answer: "ほしい",
      hint: "Mong muốn người khác làm gì (kết thúc bằng đuôi 'i')",
      translation: "Tôi muốn thầy giáo nói chậm lại một chút."
    }
  },
  {
    id: 10, unit: 2,
    pattern: "ば / たら / と…よかった",
    meaning: "Giá mà... / Ước gì...",
    explanation: "Thể hiện sự tiếc nuối về một việc đã xảy ra hoặc mong ước một điều trái với hiện tại.",
    examples: [
      { jp: "もう少し時間があれば, 全部できたのに。", vn: "Giá mà có thêm chút thời gian thì tôi đã làm xong hết rồi." },
      { jp: "あの時、本当のことを言っておけばよかった。", vn: "Giá mà lúc đó tôi nói ra sự thật thì tốt biết mấy." }
    ],
    quiz: {
      sentence: "テストの前に, もっと勉強しておけば________。",
      answer: "よかった",
      hint: "Thể hiện sự tiếc nuối ở quá khứ",
      translation: "Giá mà trước bài kiểm tra tôi học nhiều hơn."
    }
  },
  {
    id: 11, unit: 2,
    pattern: "使役形 (させて / させられる)",
    meaning: "Cho phép làm / Bị bắt làm",
    explanation: "Sử dụng thể sai khiến để xin phép (させてください) hoặc diễn tả việc bị ép buộc (させられる - bị động sai khiến).",
    examples: [
      { jp: "今日は体調が悪いので, 早く帰らせてください。", vn: "Hôm nay tôi thấy không khỏe nên xin cho phép tôi về sớm." },
      { jp: "子供のころ、母にピアノを習わせられた。", vn: "Hồi nhỏ, tôi bị mẹ bắt học piano." }
    ],
    quiz: {
      sentence: "すみません, 明日一日休ま________ください。",
      answer: "せて",
      hint: "Xin phép người khác cho mình làm gì (dùng thể sai khiến của 休む)",
      translation: "Xin lỗi, hãy cho phép tôi nghỉ ngày mai."
    }
  },
  {
    id: 12, unit: 2,
    pattern: "自動詞 (〜ている)",
    meaning: "Trạng thái (Tự động từ)",
    explanation: "Tự động từ + ている diễn tả trạng thái của sự vật sau khi hành động xảy ra. Khác với Tha động từ + てある (có chủ ý).",
    examples: [
      { jp: "窓が閉まっている。", vn: "Cửa sổ đang đóng (trạng thái hiện tại)." },
      { jp: "あ、財布が落ちているよ。", vn: "A, có cái ví bị rơi kìa." }
    ],
    quiz: {
      sentence: "シャツのボタンがとれ________よ。",
      answer: "ている",
      hint: "Diễn tả trạng thái hiện tại bằng tự động từ (hoặc てる)",
      translation: "Cái cúc áo sơ mi bị tuột ra kìa."
    }
  },
  {
    id: 13, unit: 2,
    pattern: "〜み",
    meaning: "Sự... / Độ... (Danh từ hóa)",
    explanation: "Biến tính từ thành danh từ để chỉ trạng thái, tính chất mang tính cảm nhận, khách quan (thường dùng với 悲しい, 痛い, 苦しい, 重い, 深い...).",
    examples: [
      { jp: "戦争の悲しみを忘れてはいけない。", vn: "Không được quên nỗi đau thương của chiến tranh." },
      { jp: "このスープは野菜の甘みがある。", vn: "Món súp này có vị ngọt của rau củ." }
    ],
    quiz: {
      sentence: "星空の美し________ ni 感動した。",
      answer: "み",
      hint: "Hậu tố biến tính từ đuôi 'i' thành danh từ",
      translation: "Tôi đã xúc động trước vẻ đẹp của bầu trời sao."
    }
  },
  {
    id: 14, unit: 2,
    pattern: "んじゃない？ / のではないだろうか",
    meaning: "Chẳng phải lĂ ... hay sao?",
    explanation: "CĂĄch nĂłi vĂｲng vo, r盻･t rﾃｨ ﾄ黛ｻ・ﾄ柁ｰa ra Ăｽ ki蘯ｿn, ph盻熟g ﾄ双ﾃ｡n c盻ｧa b蘯｣n thﾃ｢n.",
    examples: [
      { jp: "このやり方のほうがいいのではないだろうか。", vn: "Tﾃｴi nghﾄｩ cﾃ｡ch lﾃm nﾃy t盻奏 hﾆ｡n ﾄ妥ｳ ch盻ｩ?" },
      { jp: "彼, 今日休むんじゃない？", vn: "Ch蘯ｳng ph蘯｣i hﾃｴm nay anh 蘯･y ngh盻・sao?" }
    ],
    quiz: {
      sentence: "これ, ちょっと高すぎる________？",
      answer: "んじゃない",
      hint: "CĂĄch nĂłi thﾃ｢n m蘯ｭt c盻ｧa 'のではないか'",
      translation: "CĂ｡i nĂy, ch蘯ｳng ph蘯｣i lĂ hﾆ｡i ﾄ黛ｺｯt quﾃ｡ sao?"
    }
  },
  {
    id: 15, unit: 2,
    pattern: "縮約形 (てる/とく/なきゃ)",
    meaning: "D盻｡ng rﾃｺt g盻肱 (vﾄハ nﾃｳi)",
    explanation: "Cﾃ｡c d蘯｡ng nﾃｳi t蘯ｯt thﾆｰ盻拵g dﾃｹng trong vﾄハ nﾃｳi hﾃng ngﾃy (ている竊偵※繧・ 縺ｦ縺翫￥竊偵→縺・ 縺ｪ縺代ｌ縺ｰ竊偵↑縺阪ｃ).",
    examples: [
      { jp: "今、何してるの？ (しているの)", vn: "Bﾃ｢y gi盻・ﾄ疎ng lﾃm gﾃｬ th蘯ｿ?" },
      { jp: "明日までにこの本、読んどくよ. (読んでおくよ)", vn: "Tﾃｴi s蘯ｽ ﾄ黛ｻ皇 xong cu盻創 sﾃ｡ch nﾃy trﾆｰ盻嫩 ngﾃy mai." }
    ],
    quiz: {
      sentence: "急が________、電車に遅れるよ！",
      answer: "なきゃ",
      hint: "D盻｡ng rﾃｺt g盻肱 c盻ｧa 'なければ'",
      translation: "N蘯ｿu khﾃｴng nhanh lﾃｪn, s蘯ｽ tr盻・tﾃu ﾄ黛ｺ･y!"
    }
  },
  // ... rest of data ...
];

export default function Grammar() {
  const navigate = useNavigate();
  const [activeMode, setActiveMode] = useState('menu');
  const [selectedUnit, setSelectedUnit] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef(null);

  const activeData = useMemo(() => {
    if (selectedUnit === 'all') return grammarData;
    return grammarData.filter(item => item.unit === selectedUnit);
  }, [selectedUnit]);

  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setUserInput('');
    setFeedback(null);
    setScore(0);
    setShowHint(false);
  }, [activeMode, selectedUnit]);

  const handleNext = () => {
    if (currentIndex < activeData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      setFeedback(null);
      setUserInput('');
      setShowHint(false);
    } else {
      alert(`🎉 Chúc mừng! Bạn đã hoàn thành bài học với số điểm ${score}/${activeData.length}`);
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
      alert("Đang cập nhật thêm dữ liệu...");
      return;
    }
    setActiveMode(mode);
  };

  const checkAnswer = () => {
    const cleanInput = userInput.trim().replace(/\s/g, '').toLowerCase();
    const correctAns = activeData[currentIndex].quiz.answer.replace(/\s/g, '').toLowerCase();
    const validAnswers = [correctAns];
    if (activeData[currentIndex].quiz.accepts) {
      activeData[currentIndex].quiz.accepts.forEach(acc => validAnswers.push(acc.replace(/\s/g, '').toLowerCase()));
    }
    if (validAnswers.includes(cleanInput)) {
      setFeedback('correct');
      setScore(score + 1);
    } else {
      setFeedback('incorrect');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 p-4 md:p-8 flex flex-col items-center">
      {/* Header Area */}
      <div className="w-full max-w-4xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-slate-900 flex items-center justify-center md:justify-start gap-4">
             <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center shadow-sm">
              <BookOpen className="w-7 h-7" /> 
             </div>
             Ngữ Pháp N3
          </h1>
          <p className="text-slate-500 font-medium mt-2 ml-1">
             {selectedUnit === 'all' ? 'Tổng hợp 110 mẫu N3' : `Học theo Unit ${selectedUnit}`}
          </p>
        </div>
        <button 
          onClick={() => activeMode === 'menu' ? navigate('/') : setActiveMode('menu')}
          className="group px-6 py-2.5 bg-white border border-slate-200 rounded-full shadow-sm hover:border-slate-400 transition-all flex items-center gap-2 text-slate-600 font-bold"
        >
          <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" /> 
          {activeMode === 'menu' ? 'Trang chủ' : 'Quay lại'}
        </button>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-4xl bg-white rounded-[2rem] border border-slate-200/60 shadow-sm min-h-[600px] flex flex-col overflow-hidden">
        
        {activeMode === 'menu' && (
          <div className="p-8 md:p-14 flex flex-col items-center justify-center flex-grow gap-14">
            <div className="w-full flex flex-wrap items-center justify-center gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <button 
                  key={num}
                  onClick={() => setSelectedUnit(num)}
                  className={`py-2 px-5 rounded-xl text-sm font-bold transition-all ${selectedUnit === num ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-400 hover:text-slate-900'}`}
                >
                  Unit {num < 10 ? `0${num}` : num}
                </button>
              ))}
              <div className="w-px h-6 bg-slate-200 mx-2 hidden sm:block"></div>
              <button 
                onClick={() => setSelectedUnit('all')}
                className={`py-2 px-5 rounded-xl text-sm font-bold transition-all ${selectedUnit === 'all' ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-400 hover:text-slate-900'}`}
              >
                Tất cả
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
              <button 
                onClick={() => switchMode('flashcard')}
                className="group p-10 bg-white border border-slate-200 rounded-3xl hover:border-indigo-500 hover:bg-slate-50 transition-all flex flex-col items-center text-center gap-5"
              >
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                  <Brain className="w-8 h-8" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl mb-1 text-slate-900">Flashcards</h3>
                  <p className="text-sm text-slate-500">Cấu trúc & ví dụ mẫu</p>
                </div>
              </button>
              
              <button 
                onClick={() => switchMode('quiz')}
                className="group p-10 bg-white border border-slate-200 rounded-3xl hover:border-emerald-500 hover:bg-slate-50 transition-all flex flex-col items-center text-center gap-5"
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                  <CheckCircle className="w-8 h-8" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl mb-1 text-slate-900">Luyện tập (Quiz)</h3>
                  <p className="text-sm text-slate-500">Thử thách điền từ</p>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Learning Content */}
        {activeMode === 'flashcard' && (
          <div className="p-6 md:p-12 flex flex-col items-center justify-center flex-grow gap-8 bg-white">
            <div className="flex justify-between items-center w-full max-w-lg">
              <span className="px-5 py-2 bg-slate-100 text-slate-600 rounded-full font-bold text-sm">
                {currentIndex + 1} / {activeData.length} mẫu
              </span>
              <div className="flex gap-1">
                <button onClick={handlePrev} disabled={currentIndex === 0} className="p-3 rounded-full hover:bg-slate-100 disabled:opacity-20 transition-all text-slate-400 hover:text-slate-900">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={handleNext} className="p-3 rounded-full hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-900">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div 
              className={`relative w-full h-[450px] cursor-pointer perspective-2000 transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className={`absolute inset-0 bg-slate-900 text-white rounded-3xl shadow-lg flex flex-col items-center justify-center backface-hidden ${isFlipped ? 'invisible' : ''} p-8 text-center`}>
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">～{activeData[currentIndex].pattern}</h2>
                <div className="px-6 py-2 bg-white/10 rounded-full text-sm font-bold border border-white/20">Nhấn xem giải nghĩa</div>
              </div>

              <div className={`absolute inset-0 bg-white border border-slate-200 rounded-3xl shadow-lg p-8 md:p-12 flex flex-col items-center overflow-auto backface-hidden transform rotate-y-180 ${!isFlipped ? 'invisible' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">{activeData[currentIndex].meaning}</h3>
                <div className="w-full h-px bg-slate-100 mb-8 max-w-xs"></div>
                <p className="text-slate-600 text-center mb-10 text-lg leading-relaxed max-w-2xl font-medium">{activeData[currentIndex].explanation}</p>
                <div className="w-full space-y-4 mt-auto max-w-2xl mx-auto">
                  {activeData[currentIndex].examples.map((ex, i) => (
                    <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 hover:border-indigo-200 transition-colors">
                      <p className="text-lg font-bold text-slate-900 leading-relaxed mb-2">{ex.jp}</p>
                      <p className="text-slate-500 italic text-sm">{ex.vn}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeMode === 'quiz' && (
          <div className="p-8 md:p-16 flex flex-col items-center justify-center flex-grow gap-10 bg-white">
            <div className="flex justify-between items-center w-full max-w-2xl">
              <span className="px-5 py-2 bg-emerald-50 text-emerald-600 rounded-full font-bold text-sm border border-emerald-100">
                Đúng: {score} / {activeData.length}
              </span>
              <span className="text-slate-400 font-bold text-sm tracking-widest uppercase">Câu {currentIndex + 1}</span>
            </div>

            <div className="w-full max-w-2xl flex flex-col items-center gap-12">
              <div className="text-center space-y-8">
                <h3 className="text-2xl md:text-4xl font-bold text-slate-900 leading-relaxed tracking-tight">
                  {activeData[currentIndex].quiz.sentence.split('________').map((part, i) => (
                    <React.Fragment key={i}>
                      {part}
                      {i === 0 && (
                        <span className="mx-2 px-6 py-1 border-b-[3px] border-indigo-500 text-indigo-600 min-w-[140px] inline-block font-black">
                          {feedback ? activeData[currentIndex].quiz.answer : '...'}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </h3>
              </div>

              <div className="w-full space-y-8">
                {feedback === null ? (
                  <>
                    <input 
                      autoFocus
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
                      placeholder="Nhập đáp án vào đây..."
                      className="w-full py-6 bg-slate-50 border border-slate-200 rounded-2xl text-2xl text-center focus:bg-white focus:border-indigo-500 outline-none transition-all font-bold placeholder:text-slate-300"
                    />
                    <div className="flex gap-4">
                      <button onClick={() => setShowHint(!showHint)} className="p-5 bg-white border border-slate-200 text-slate-400 rounded-2xl hover:bg-slate-50 hover:text-slate-600 transition-colors" title="Gợi ý"><HelpCircle className="w-6 h-6" /></button>
                      <button onClick={checkAnswer} className="flex-grow py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black shadow-md transition-all">
                         {userInput ? 'Kiểm tra' : 'Xem đáp án'}
                      </button>
                    </div>
                    {showHint && <div className="p-5 bg-amber-50 border border-amber-100 text-amber-800 rounded-2xl text-sm italic font-medium">Gợi ý: {activeData[currentIndex].quiz.hint}</div>}
                  </>
                ) : (
                  <div className={`p-10 rounded-3xl text-center w-full animate-in zoom-in duration-300 ${feedback === 'correct' ? 'bg-emerald-50/50 border border-emerald-100' : 'bg-rose-50/50 border border-rose-100'}`}>
                    <p className={`text-sm font-black mb-3 tracking-[0.2em] uppercase ${feedback === 'correct' ? 'text-emerald-500' : 'text-rose-400'}`}>
                      {feedback === 'correct' ? 'Chính xác' : 'Chưa chính xác'}
                    </p>
                    <p className="text-4xl font-black mb-6 text-slate-900">{activeData[currentIndex].quiz.answer}</p>
                    <p className="text-slate-600 italic mb-10 text-lg">{activeData[currentIndex].quiz.translation}</p>
                    <button onClick={handleNext} className="w-full py-5 rounded-2xl font-black text-white bg-slate-900 hover:bg-black transition-all shadow-lg active:scale-95 uppercase tracking-widest text-sm">Tiếp theo</button>
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
