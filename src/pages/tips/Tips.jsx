import React from 'react';
import { Sparkles, Lightbulb, Zap, Rocket, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Tips() {
  const navigate = useNavigate();

  const tips = [
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

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-44 md:pt-32 pb-20 px-4 md:px-12 font-sans relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-slate-100 opacity-[0.03] pointer-events-none select-none leading-none z-0 whitespace-nowrap">
        秘訣
      </div>

      <div className="w-full max-w-5xl relative z-10">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.4em] font-bold text-slate-400 uppercase">Hành trang chinh phục N3</span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter italic uppercase">Bí kíp <span className="text-slate-300">ôn thi</span></h1>
            </div>
            <button 
              onClick={() => navigate('/')}
              className="px-8 py-3 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all self-start md:self-end"
            >
              Quay lại trang chủ
            </button>
          </div>

          {/* Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {tips.map((tip, idx) => (
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

          {/* Footer Info */}
          <div className="mt-8 p-10 bg-slate-950 rounded-[3rem] text-center space-y-4 overflow-hidden relative">
            <Sparkles className="absolute top-4 left-4 w-12 h-12 text-white/5" />
            <Sparkles className="absolute bottom-4 right-4 w-12 h-12 text-white/5" />
            <h2 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter">Bạn đã sẵn sàng cho kỳ thi?</h2>
            <p className="text-slate-400 text-xs md:text-sm font-medium tracking-widest uppercase">Mỗi ngày một chút, kiến xa cũng đầy tổ.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
