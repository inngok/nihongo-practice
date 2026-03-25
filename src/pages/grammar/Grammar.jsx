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
      { jp: "健康のために、毎日野菜を食べることにしている。", vn: "Để tốt cho sức khỏe, tôi quyết định (duy trì thói quen) ăn rau mỗi ngày." },
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
      { jp: "若いつもりだが、もう50歳だ。", vn: "Cứ ngỡ là mình còn trẻ nhưng đã 50 tuổi rồi." }
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
      { jp: "雨が降ってきた。", vn: "Trời đã đổ mưa rồi (bắt đầu)." }
    ],
    quiz: {
      sentence: "だんだん日本語が上手になって________。",
      answer: "きた",
      hint: "Thay đổi trạng thái (quá khứ của てくる)",
      translation: "Tiếng Nhật của tôi đang dần dần trở nên giỏi lên."
    }
  },

  // --- UNIT 2 ---
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
      sentence: "星空の美し________に感動した。",
      answer: "み",
      hint: "Hậu tố biến tính từ đuôi 'i' thành danh từ",
      translation: "Tôi đã xúc động trước vẻ đẹp của bầu trời sao."
    }
  },
  {
    id: 14, unit: 2,
    pattern: "んじゃない？ / のではないだろうか",
    meaning: "Chẳng phải là... hay sao?",
    explanation: "Cách nói vòng vo, rụt rè để đưa ra ý kiến, phỏng đoán của bản thân.",
    examples: [
      { jp: "このやり方のほうがいいのではないだろうか。", vn: "Tôi nghĩ cách làm này tốt hơn đó chứ?" },
      { jp: "彼, 今日休むんじゃない？", vn: "Chẳng phải hôm nay anh ấy nghỉ sao?" }
    ],
    quiz: {
      sentence: "これ, ちょっと高すぎる________？",
      answer: "んじゃない",
      hint: "Cách nói thân mật của 'のではないか'",
      translation: "Cái này, chẳng phải là hơi đắt quá sao?"
    }
  },
  {
    id: 15, unit: 2,
    pattern: "縮約形 (てる/とく/なきゃ)",
    meaning: "Dạng rút gọn (văn nói)",
    explanation: "Các dạng nói tắt thường dùng trong văn nói hàng ngày (ている→てる, ておく→とく, なければ→なきゃ).",
    examples: [
      { jp: "今、何してるの？ (しているの)", vn: "Bây giờ đang làm gì thế?" },
      { jp: "明日までにこの本、読んどくよ. (読んでおくよ)", vn: "Tôi sẽ đọc xong cuốn sách này trước ngày mai." }
    ],
    quiz: {
      sentence: "急が________、電車に遅れるよ！",
      answer: "なきゃ",
      hint: "Dạng rút gọn của 'なければ'",
      translation: "Nếu không nhanh lên, sẽ trễ tàu đấy!"
    }
  },

  // --- UNIT 3 ---
  {
    id: 16, unit: 3,
    pattern: "から〜にかけて",
    meaning: "Từ... đến...",
    explanation: "Chỉ phạm vi đại khái từ điểm bắt đầu đến điểm kết thúc của thời gian hoặc không gian.",
    examples: [
      { jp: "明日は関東から東北地方にかけて, 雨が降るでしょう。", vn: "Ngày mai có lẽ sẽ mưa từ vùng Kanto đến vùng Tohoku." },
      { jp: "昨夜から今朝にかけて, 大雨が降った。", vn: "Đã có mưa lớn từ đêm qua đến sáng nay." }
    ],
    quiz: {
      sentence: "明日は関東から東北地方に________, 雨が降るでしょう。",
      answer: "かけて",
      hint: "Đi kèm với から để chỉ phạm vi",
      translation: "Ngày mai có lẽ sẽ mưa trải dài từ vùng Kanto đến vùng Tohoku."
    }
  },
  {
    id: 17, unit: 3,
    pattern: "だらけ",
    meaning: "Đầy / Toàn là...",
    explanation: "Chỉ trạng thái có đầy thứ gì đó, thường mang nghĩa tiêu cực (như rác, bùn, lỗi sai).",
    examples: [
      { jp: "彼の部屋はゴミだらけだ。", vn: "Phòng của anh ta toàn là rác." },
      { jp: "雨の中を歩いたので, 靴が泥だらけになった。", vn: "Vì đi bộ trong mưa nên giày dính đầy bùn." }
    ],
    quiz: {
      sentence: "このテスト, 間違い________じゃないか！",
      answer: "だらけ",
      hint: "Toàn là (nghĩa tiêu cực)",
      translation: "Bài kiểm tra này chẳng phải toàn là lỗi sai sao!"
    }
  },
  {
    id: 18, unit: 3,
    pattern: "おかげ",
    meaning: "Nhờ có... / Nhờ vào...",
    explanation: "Chỉ nguyên nhân dẫn đến kết quả tốt, mang hàm ý biết ơn.",
    examples: [
      { jp: "先生のおかげで, N3に合格できました。", vn: "Nhờ có thầy giáo mà em đã thi đỗ N3." },
      { jp: "薬を飲んだおかげで, 熱が下がった。", vn: "Nhờ uống thuốc mà tôi đã hạ sốt." }
    ],
    quiz: {
      sentence: "友達が手伝ってくれた________で, 早く終わった。",
      answer: "おかげ",
      hint: "Nhờ có (kết quả tốt)",
      translation: "Nhờ bạn bè giúp đỡ mà tôi đã làm xong sớm."
    }
  },
  {
    id: 19, unit: 3,
    pattern: "せい / せいか",
    meaning: "Tại vì... / Có lẽ tại...",
    explanation: "Chỉ nguyên nhân dẫn đến kết quả xấu, mang hàm ý đổ lỗi.",
    examples: [
      { jp: "バスが遅れたせいで, 授業に遅刻してしまった。", vn: "Tại xe buýt đến muộn mà tôi bị trễ học." },
      { jp: "疲れているせいか, 頭が痛い。", vn: "Có lẽ tại mệt mỏi nên tôi bị đau đầu." }
    ],
    quiz: {
      sentence: "あの人の________で, みんなが迷惑している。",
      answer: "せい",
      hint: "Tại vì (kết quả xấu, đổ lỗi)",
      translation: "Tại người đó mà mọi người đang gặp phiền phức."
    }
  },
  {
    id: 20, unit: 3,
    pattern: "とおり(in) / どおり(in)",
    meaning: "Đúng như / Theo như...",
    explanation: "Làm một việc gì đó đúng theo như một khuôn mẫu, tiêu chuẩn hoặc dự đoán.",
    examples: [
      { jp: "私の説明したとおりに, 機械を組み立ててください。", vn: "Hãy lắp ráp máy móc đúng theo như tôi đã giải thích." },
      { jp: "天気予報どおり, 雨が降ってきた。", vn: "Trời đã mưa đúng như dự báo thời tiết." }
    ],
    quiz: {
      sentence: "先生が言った________, 試験は難しかった。",
      answer: "とおり",
      hint: "Đúng như / Theo như",
      translation: "Đúng như lời thẩ giáo nói, bài thi rất khó."
    }
  },
  // ... adding all 110 points ...
];

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

  // Reset states
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

      {/* Header Area */}
      <div className="w-full max-w-5xl mb-8 md:mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-700 to-violet-600 bg-clip-text text-transparent flex items-center justify-center md:justify-start gap-3">
             <BookOpen className="w-8 h-8 text-indigo-600" /> Ngữ Pháp N3
          </h1>
          <p className="text-slate-500 font-medium mt-1">
             {selectedUnit === 'all' ? 'Tổng hợp 110 mẫu N3' : `Unit ${selectedUnit}`}
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

      {/* Main Container */}
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-white/50 min-h-[600px] flex flex-col">
        
        {activeMode === 'menu' && (
          <div className="p-6 md:p-12 flex flex-col items-center justify-center flex-grow gap-12">
            <div className="w-full bg-slate-100/50 p-2 rounded-[2rem] flex flex-wrap items-center justify-center gap-2 border border-slate-200/50 shadow-inner">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <button 
                  key={num}
                  onClick={() => setSelectedUnit(num)}
                  className={`py-2 px-6 rounded-2xl text-sm font-bold transition-all duration-300 ${selectedUnit === num ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-500 hover:bg-white hover:text-indigo-600'}`}
                >
                  Unit {num < 10 ? `0${num}` : num}
                </button>
              ))}
              <div className="w-px h-8 bg-slate-300 mx-2 hidden sm:block"></div>
              <button 
                onClick={() => setSelectedUnit('all')}
                className={`py-2 px-6 rounded-2xl text-sm font-bold transition-all duration-300 ${selectedUnit === 'all' ? 'bg-violet-600 text-white shadow-lg' : 'text-slate-500 hover:bg-white hover:text-violet-600'}`}
              >
                Tất cả
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              <button 
                onClick={() => switchMode('flashcard')}
                className="group p-8 bg-indigo-50/30 border border-indigo-100/50 rounded-[2rem] hover:bg-indigo-600 transition-all duration-500 flex flex-col items-center text-center gap-4 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-all">
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="font-extrabold text-2xl group-hover:text-white">Flashcards</h3>
              </button>
              
              <button 
                onClick={() => switchMode('quiz')}
                className="group p-8 bg-emerald-50/30 border border-emerald-100/50 rounded-[2rem] hover:bg-emerald-600 transition-all duration-500 flex flex-col items-center text-center gap-4 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-all">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-extrabold text-2xl group-hover:text-white">Luyện tập (Quiz)</h3>
              </button>
            </div>
          </div>
        )}

        {/* Similar logic for flashcard and quiz modes as before */}
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
                <h2 className="text-4xl md:text-6xl font-bold mb-4">～{activeData[currentIndex].pattern}</h2>
                <p className="text-indigo-100 text-base animate-pulse">Nhấn để xem giải nghĩa</p>
              </div>

              <div className={`absolute inset-0 bg-white border border-slate-100 rounded-[2rem] shadow-2xl p-8 md:p-12 flex flex-col items-center justify-start overflow-auto backface-hidden transform rotate-y-180 ${!isFlipped ? 'invisible' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-4">{activeData[currentIndex].meaning}</h3>
                <p className="text-slate-600 text-center mb-8 text-base md:text-lg">{activeData[currentIndex].explanation}</p>
                <div className="w-full space-y-4 mt-auto">
                  {activeData[currentIndex].examples.map((ex, i) => (
                    <div key={i} className="bg-indigo-50/50 p-5 rounded-2xl border-l-4 border-indigo-500">
                      <p className="font-semibold text-slate-800">{ex.jp}</p>
                      <p className="text-slate-600 mt-2 italic text-sm">{ex.vn}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeMode === 'quiz' && (
          <div className="p-6 md:p-12 flex flex-col items-center justify-center flex-grow gap-8">
            <div className="flex justify-between items-center w-full max-w-lg mb-4">
              <span className="px-5 py-2 bg-emerald-50 text-emerald-600 rounded-full font-bold text-sm">
                Điểm: {score} / {activeData.length}
              </span>
              <span className="text-slate-400 font-bold">Câu {currentIndex + 1}</span>
            </div>

            <div className="w-full bg-slate-50/80 p-8 md:p-12 rounded-[2rem] border border-slate-100 flex flex-col items-center gap-10">
              <div className="text-center space-y-6">
                <HelpCircle className="w-12 h-12 text-emerald-500 mx-auto opacity-50" />
                <h3 className="text-2xl md:text-4xl font-bold text-slate-800 leading-relaxed px-4">
                  {activeData[currentIndex].quiz.sentence.split('________').map((part, i) => (
                    <React.Fragment key={i}>
                      {part}
                      {i === 0 && (
                        <span className="mx-2 px-6 py-1 border-b-4 border-emerald-400 text-emerald-600 min-w-[120px] inline-block">
                          {feedback ? activeData[currentIndex].quiz.answer : '...'}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </h3>
              </div>

              <div className="w-full max-w-2xl space-y-6">
                {feedback === null ? (
                  <>
                    <input 
                      autoFocus
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
                      placeholder="Nhập đáp án..."
                      className="w-full p-6 bg-white border-2 border-slate-200 rounded-2xl text-xl text-center focus:border-indigo-500 outline-none transition-all shadow-sm"
                    />
                    <div className="flex gap-3">
                      <button onClick={() => setShowHint(!showHint)} className="p-4 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200"><HelpCircle /></button>
                      <button onClick={checkAnswer} className="flex-grow py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200">
                         {userInput ? 'Kiểm tra' : 'Xem đáp án'}
                      </button>
                    </div>
                    {showHint && <div className="p-4 bg-amber-50 text-amber-700 rounded-xl">Gợi ý: {activeData[currentIndex].quiz.hint}</div>}
                  </>
                ) : (
                  <div className={`p-8 rounded-[2rem] text-center w-full ${feedback === 'correct' ? 'bg-emerald-50 border border-emerald-100' : 'bg-rose-50 border border-rose-100'}`}>
                    <p className="text-2xl font-black mb-4">{feedback === 'correct' ? 'CHÍNH XÁC!' : 'SAI RỒI!'}</p>
                    <p className="text-4xl font-black mb-6">{activeData[currentIndex].quiz.answer}</p>
                    <p className="text-slate-600 italic mb-10">{activeData[currentIndex].quiz.translation}</p>
                    <button onClick={handleNext} className="px-12 py-4 rounded-2xl font-black text-white bg-slate-800 hover:bg-slate-900 transition-all">TIẾP THEO</button>
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
