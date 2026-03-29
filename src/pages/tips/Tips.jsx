import React, { useState } from 'react';
import { Sparkles, Lightbulb, Zap, Rocket, CheckCircle, ArrowRight, Headset, MessageCircle, Eye, Search, Target, Clock, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Tips() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('general'); // 'general', 'listening'

  const generalTips = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Phân biệt と cho đúng",
      content: "と luôn đi với kết quả tất yếu, tự nhiên. Đừng dùng と cho ý chí, mệnh lệnh hay nhờ vả nhé!"
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-blue-500" />,
      title: "Mẹo nhớ Kanji bộ Thủ",
      content: "Tập trung vào các bộ như Thủy (nước), Nhân (người), Tâm (tim). Hiểu bộ thủ giúp bạn đoán được 60% nghĩa của từ lạ."
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
      title: "Luyện nghe thụ động",
      content: "Hãy nghe NHK News Web Easy mỗi sáng. Không cần hiểu hết, cốt để tai làm quen với ngữ điệu và tốc độ của người Nhật."
    },
    {
      icon: <Rocket className="w-5 h-5 text-purple-500" />,
      title: "Chiến thuật làm bài Đọc hiểu",
      content: "Đọc câu hỏi trước khi đọc đoạn văn. Tìm từ khóa (Key word) trong câu hỏi rồi soi ngược lên văn bản để tiết kiệm thời gian."
    }
  ];

  const listeningTips = [
    {
      id: 1,
      title: "Dạng 1: Hiểu yêu cầu (課題理解)",
      desc: "Nghe câu chuyện và xác định hành động tiếp theo.",
      points: [
        { label: "Bí quyết", text: "Chú ý kỹ từ “まず” để xác định hành động ưu tiên ngay lập tức." },
        { label: "Kỹ thuật", text: "Tập trung vào các chỉ thị, yêu cầu hoặc lời nhờ vả." },
        { label: "Lưu ý", text: "Xác nhận xem người đối thoại có đồng ý (はい) hay không." }
      ]
    },
    {
      id: 2,
      title: "Dạng 2: Hiểu điểm chính (ポイント理解)",
      desc: "Tìm lý do, mục đích hoặc tâm trạng của nhân vật.",
      points: [
        { label: "Chuẩn bị", text: "Đọc nhanh các phương án trong đề để làm manh mối suy luận." },
        { label: "Từ khóa", text: "Chú ý đến các từ đồng nghĩa hoặc trùng khớp với phương án." },
        { label: "Loại trừ", text: "Xác định rõ đối tượng được nhắc đến để tránh nhầm lẫn." }
      ]
    },
    {
      id: 3,
      title: "Dạng 3: Hiểu khái quát (概要理解)",
      desc: "Hiểu ý đồ tổng thể hoặc chủ đề chính (Không in thông tin trong đề).",
      points: [
        { label: "Bí quyết", text: "Chú ý câu dẫn nhập như “ご紹介しましょう” để tìm chủ đề." },
        { label: "Phân biệt", text: "Đừng nhầm ví dụ minh họa với chủ đề bao quát của toàn bài." }
      ]
    },
    {
      id: 4,
      title: "Dạng 4: Diễn đạt lời nói (発話表現)",
      desc: "Nhìn tranh và chọn câu thoại phù hợp với nhân vật có mũi tên.",
      points: [
        { label: "Lập trường", text: "Đặt mình vào vị trí nhân vật để suy nghĩ câu nói phù hợp." },
        { label: "Hành động", text: "Xác định là mình làm hay nhờ người khác (nhờ vả/xin phép)." },
        { label: "Cụm từ", text: "Ghi nhớ các cách diễn đạt cố định (hỏi đường, văn phòng...)." }
      ]
    },
    {
      id: 5,
      title: "Dạng 5: Phản xạ nhanh (即時応答)",
      desc: "Chọn câu trả lời ứng biến ngay sau khi nghe câu văn ngắn.",
      points: [
        { label: "Tập trung", text: "Xác định mục đích: câu hỏi lý do, lời mời, hay chào hỏi..." },
        { label: "Ngữ pháp", text: "Chú ý kính ngữ và các cách diễn đạt hội thoại hàng ngày." }
      ]
    }
  ];

  const keywords = [
    { cat: "Thứ tự ưu tiên", items: ["まず (Đầu tiên)", "その前に (Trước đó thì...)", "~のあとに (Sau khi...)", "とりあえず (Trước mắt/Tạm thời)"] },
    { cat: "Thay đổi quyết định", items: ["やっぱり/やはり (Quả nhiên là/Sau cùng)", "あ、ちょっと待って (Đợi chút - thay đổi thông tin)", "L° -> tα < τ (Không phải cái đó, mà là...)", "やっぱりこっちにしよう (Chọn cái này vậy)"] },
    { cat: "Lý do & Ý kiến", items: ["実は (Thực ra là...)", "っていうのは (Nghĩa là/Lý do là...)", "~からなんです (Chính là vì...)", "ただ (Có điều/Tuy nhiên...)"] },
    { cat: "Đồng ý/Từ chối", items: ["いいですね/そうしましょう (Chốt phương án)", "それはちょっと... (Từ chối khéo)", "助かります (Đồng ý nhận giúp đỡ)", "せっかくですが (Mặc dù đã mất công nhưng...)"] }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-44 md:pt-32 pb-20 px-4 md:px-12 font-sans relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-slate-100 opacity-[0.03] pointer-events-none select-none leading-none z-0 whitespace-nowrap">
        秘訣
      </div>

      <div className="w-full max-w-6xl relative z-10">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.4em] font-bold text-slate-400 uppercase italic">Hành trang chinh phục N3</span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter italic uppercase">Bí kíp <span className="text-slate-300">vượt vũ môn</span></h1>
            </div>
            <button 
              onClick={() => navigate('/')}
              className="px-8 py-3 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all self-start md:self-end"
            >
              Quay lại trang chủ
            </button>
          </div>

          {/* Tabs Navigation */}
          <div className="flex bg-slate-50 p-1.5 rounded-2xl md:rounded-3xl w-fit border border-slate-100 shadow-sm self-center md:self-start">
            <button 
              onClick={() => setActiveTab('general')}
              className={`px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all gap-2 flex items-center ${activeTab === 'general' ? 'bg-black text-white shadow-xl translate-y-[-2px]' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <Sparkles className="w-3 md:w-4 h-3 md:h-4" />
              Mẹo chung
            </button>
            <button 
              onClick={() => setActiveTab('listening')}
              className={`px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all gap-2 flex items-center ${activeTab === 'listening' ? 'bg-black text-white shadow-xl translate-y-[-2px]' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <Headset className="w-3 md:w-4 h-3 md:h-4" />
              Nghe hiểu N3
            </button>
          </div>

          {/* Content Area */}
          <div className="animate-in fade-in duration-700">
            {activeTab === 'general' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {generalTips.map((tip, idx) => (
                  <div 
                    key={idx}
                    className="bg-white p-8 md:p-10 border border-slate-100 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 group"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shrink-0">
                        {tip.icon}
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tight">{tip.title}</h3>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed italic">
                          {tip.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-12">
                {/* Listening Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {listeningTips.map((item) => (
                    <div key={item.id} className="bg-white p-8 border border-slate-100 rounded-[2rem] shadow-sm hover:border-black transition-all">
                      <div className="mb-6">
                        <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-2 italic">Dạng bài {item.id}</div>
                        <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter leading-tight italic">{item.title.split(': ')[1]}</h3>
                      </div>
                      <p className="text-xs text-slate-400 font-medium italic mb-6 border-l-2 border-slate-100 pl-4">{item.desc}</p>
                      <div className="space-y-4">
                        {item.points.map((p, i) => (
                          <div key={i} className="space-y-1">
                            <span className="text-[8px] font-bold text-slate-900 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded">{p.label}</span>
                            <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{p.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Keywords Section */}
                <div className="mt-16 bg-slate-900 rounded-[3rem] p-8 md:p-14 text-white overflow-hidden relative">
                   <AlertCircle className="absolute top-10 right-10 w-32 h-32 text-white/5 -rotate-12" />
                   <div className="relative z-10">
                     <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-12">
                       Từ khóa & <span className="text-slate-500">Manh mối</span>
                     </h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {keywords.map((group, idx) => (
                          <div key={idx} className="space-y-6">
                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] pb-3 border-b border-white/10">{group.cat}</h4>
                            <div className="space-y-4">
                              {group.items.map((it, i) => (
                                <div key={i} className="group flex items-start gap-3">
                                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-1.5 group-hover:bg-white group-hover:scale-125 transition-all" />
                                  <p className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors leading-relaxed">{it}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                     </div>
                     <div className="mt-16 pt-8 border-t border-white/5 flex items-center gap-4 text-slate-500 italic text-xs">
                        <CheckCircle className="w-4 h-4" />
                        Lưu ý chung: Trong khi nghe, nếu nghe thấy các từ nối chuyển ngoặt (「でも」、「ところが」), hãy tập trung cao độ vì thông tin quan trọng thường nằm sau đó.
                     </div>
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
