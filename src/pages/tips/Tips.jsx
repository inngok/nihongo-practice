import React from 'react';
import { Headset, CheckCircle, ArrowRight, Clock, AlertCircle, Target, Zap, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Tips() {
  const navigate = useNavigate();

  const listeningTips = [
    {
      id: 1,
      title: "Dạng 1: Hiểu yêu cầu (課題理解)",
      desc: "Xác định hành động cần thực hiện tiếp theo sau khi nghe.",
      points: [
        { label: "Bí quyết vàng", text: "Chú ý kỹ từ khóa “まず” (đầu tiên) để biết việc cần làm ngay lập tức." },
        { label: "Kỹ thuật nghe", text: "Tập trung vào các câu mệnh lệnh, yêu cầu hoặc lời nhờ vả." },
        { label: "Lưu ý sống còn", text: "Xác nhận xem đối phương có đồng ý làm việc đó không (nghe chữ 'Hai' hoặc xác nhận nội dung)." }
      ]
    },
    {
      id: 2,
      title: "Dạng 2: Hiểu điểm chính (ポイント理解)",
      desc: "Tìm lý do, mục đích hoặc tâm trạng của nhân vật.",
      points: [
        { label: "Chuẩn bị", text: "Tận dụng 20s chuẩn bị để đọc lướt 4 phương án, đoán nội dung bài nói." },
        { label: "Phân tích", text: "Tìm các từ đồng nghĩa hoặc trái nghĩa với từ khóa trong đáp án." },
        { label: "Loại trừ", text: "Xác định rõ đối tượng hành động (ai đi, ai ở) để không bị lừa." }
      ]
    },
    {
      id: 3,
      title: "Dạng 3: Hiểu khái quát (概要理解)",
      desc: "Hiểu ý đồ tổng thể hoặc chủ đề chính (Đề thi không in chữ).",
      points: [
        { label: "Điểm chốt", text: "Nghe kỹ các câu dẫn nhập như “ご紹介しましょう” - chủ đề nằm ngay đó." },
        { label: "Cảnh giác", text: "Phân biệt rõ đâu là ví dụ minh họa và đâu là chủ đề bao quát của cả bài." }
      ]
    },
    {
      id: 4,
      title: "Dạng 4: Diễn đạt lời nói (発話表現)",
      desc: "Nhìn tranh và chọn câu thoại đúng cho nhân vật có mũi tên.",
      points: [
        { label: "Lập trường", text: "Đặt mình vào vị trí nhân vật để cảm nhận tình huống thực tế." },
        { label: "Chủ vị", text: "Xác định là mình làm (cho phép) hay nhờ họ làm (nhờ vả) để chọn đúng thể." },
        { label: "Cụm từ", text: "Học thuộc các câu giao tiếp cố định trong đời sống và công sở." }
      ]
    },
    {
      id: 5,
      title: "Dạng 5: Phản xạ nhanh (即時応答)",
      desc: "Chọn câu trả lời ứng biến ngay lập tức cho một câu nói ngắn.",
      points: [
        { label: "Mục đích", text: "Xác định nhanh đây là câu hỏi, lời mời, hay lời chào xã giao." },
        { label: "Ngữ pháp", text: "Đặc biệt chú ý Kính ngữ và các cách nói tắt trong hội thoại hàng ngày." }
      ]
    }
  ];

  const keywordGroups = [
    { 
      title: "Thứ tự ưu tiên", 
      items: [
        { jp: "まず", vi: "Đầu tiên (Việc số 1)" },
        { jp: "その前に", vi: "Trước đó thì... (Làm cái này trước cái kia)" },
        { jp: "とりあえず", vi: "Trước mắt/Tạm thời (Ưu tiên hiện tại)" }
      ] 
    },
    { 
      title: "Sự thay đổi ý định", 
      items: [
        { jp: "やっぱり/やはり", vi: "Quả nhiên là... (Quyết định sau cùng)" },
        { jp: "あ、ちょっと待って", vi: "A, đợi chút (Sắp đổi thông tin)" },
        { jp: "やっぱりこっちにしよう", vi: "Chốt chọn cái này vậy" }
      ] 
    },
    { 
      title: "Lý do quan trọng", 
      items: [
        { jp: "実は", vi: "Thực ra là... (Sau đây là nội dung chính)" },
        { jp: "っていうのは", vi: "Lý do chính là/Nghĩa là..." },
        { jp: "ただ", vi: "Có điều/Tuy nhiên (Sự hạn chế)" }
      ] 
    },
    { 
      title: "Đồng ý & Từ chối", 
      items: [
        { jp: "そうしましょう", vi: "Chốt làm thế đi (Đồng ý)" },
        { jp: "それはちょっと...", vi: "Cái đó thì hơi... (Từ chối khéo)" },
        { jp: "せっかくですが", vi: "Dù đã mất công nhưng... (Từ chối)" }
      ] 
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-44 md:pt-32 pb-20 px-4 md:px-8 font-sans relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-slate-100 opacity-[0.03] pointer-events-none select-none leading-none z-0 whitespace-nowrap uppercase">
        Choukai
      </div>

      <div className="w-full max-w-5xl relative z-10">
        {/* Header Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 md:mb-20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center">
                <Headset className="w-6 h-6" />
              </div>
              <span className="text-xs tracking-[0.4em] font-bold text-slate-400 uppercase italic">Kỹ năng Nghe hiểu N3</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter italic uppercase leading-none">
              Bí kíp <span className="text-slate-300 italic">Vàng</span>
            </h1>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="px-10 py-4 bg-black text-white text-[11px] font-black uppercase tracking-widest rounded-2xl hover:bg-slate-800 transition-all self-start md:self-center shadow-2xl shadow-black/10"
          >
            Quay lại trang chủ
          </button>
        </div>

        <div className="flex flex-col gap-12 md:gap-20">
          {/* Main Listening Tips Section */}
          <div className="grid grid-cols-1 gap-12">
            {listeningTips.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border-2 border-slate-50 rounded-[3rem] p-8 md:p-14 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_120px_-20px_rgba(0,0,0,0.08)] hover:border-slate-200 transition-all duration-500 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full translate-x-32 -translate-y-32 group-hover:bg-slate-100 transition-colors" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
                    {/* Left side: Meta */}
                    <div className="w-full md:w-1/3 space-y-6">
                      <div className="inline-block px-5 py-2 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                        {item.title.split(': ')[0]}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-tight italic">
                        {item.title.split(': ')[1]}
                      </h3>
                      <p className="text-lg md:text-xl text-slate-400 font-medium italic border-l-4 border-slate-200 pl-6 py-2">
                        {item.desc}
                      </p>
                    </div>

                    {/* Right side: Points */}
                    <div className="w-full md:w-2/3 grid grid-cols-1 gap-8 pt-4 md:pt-0">
                      {item.points.map((p, i) => (
                        <div key={i} className="flex gap-6 group/item transform hover:translate-x-2 transition-transform">
                          <div className="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-800 shadow-sm group-hover/item:bg-black group-hover/item:text-white transition-all shrink-0">
                            {i === 0 ? <Target className="w-5 h-5" /> : i === 1 ? <Search className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                          </div>
                          <div className="space-y-1">
                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{p.label}</span>
                            <p className="text-xl md:text-2xl font-bold text-slate-700 leading-tight">
                              {p.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* New Keywords Layout - High readability */}
          <div className="bg-slate-950 rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 border-[40px] border-white/5 rounded-full" />
            
            <div className="relative z-10 space-y-20">
              <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
                    Tư duy <span className="text-slate-500">từ khóa</span>
                  </h2>
                  <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs italic underline underline-offset-8 decoration-slate-800">
                    Bắt được từ này - Chốt được đáp án
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                {keywordGroups.map((group, idx) => (
                  <div key={idx} className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="h-0.5 w-12 bg-slate-500" />
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] italic">{group.title}</h4>
                    </div>
                    <div className="grid gap-6">
                      {group.items.map((it, i) => (
                        <div key={i} className="flex items-center justify-between gap-4 p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group">
                          <span className="text-2xl md:text-3xl font-black text-white group-hover:scale-105 transition-transform">{it.jp}</span>
                          <span className="text-sm md:text-base font-bold text-slate-400 group-hover:text-slate-200 italic">{it.vi}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Crucial Final Tip */}
              <div className="pt-16 border-t border-white/10">
                <div className="bg-white text-black p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 md:gap-12 rotate-[-1deg] hover:rotate-0 transition-all shadow-2xl shadow-black">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center shrink-0 border border-slate-100">
                    <Zap className="w-10 h-10 text-amber-500 fill-amber-500" />
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-xl font-black uppercase italic">Mẹo then chốt cuối cùng:</h5>
                    <p className="text-xl md:text-2xl font-bold leading-relaxed">
                      Trong khi nghe, nếu gặp từ nối chuyển ngoặt (<span className="text-red-500">でも、ところが</span>), hãy tập trung cao độ vì thông tin quan trọng nhất thường nằm ngay sau đó.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
