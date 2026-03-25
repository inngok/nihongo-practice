import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Book, Volume2, GraduationCap } from 'lucide-react';

export default function Grammar() {
  const navigate = useNavigate();

  const books = [
    { 
      id: 'mimikara', 
      num: '01', 
      icon: Book, 
      title: 'Mimikara', 
      japanese: '耳から覚える文法', 
      label: 'TRÌNH ĐỘ N3 - N1', 
      path: '/grammar/mimikara'
    },
    { 
      id: 'dekiru', 
      num: '02', 
      icon: Volume2, 
      title: 'Dekiru', 
      japanese: 'できる日本語', 
      label: 'GIAO TIẾP ỨNG DỤNG', 
      path: '#'
    },
    { 
      id: 'fpt', 
      num: '03', 
      icon: GraduationCap, 
      title: 'FPT', 
      japanese: 'Giáo trình nội bộ', 
      label: 'CHUYÊN NGÀNH CNTT', 
      path: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-24 pb-20 px-6 font-sans relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-slate-100 opacity-[0.03] pointer-events-none select-none leading-none z-0 whitespace-nowrap">
        文法
      </div>

      <div className="w-full max-w-5xl relative z-10">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 hover:text-black transition-colors mb-12"
        >
          <ArrowLeft className="w-3 h-3" />
          Quay lại
        </button>

        {/* Title Section */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4 leading-none">
            Ngữ pháp
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed font-medium">
            Chọn giáo trình để bắt đầu lộ trình rèn luyện cấu trúc ngữ pháp Tiếng Nhật từ cơ bản đến nâng cao.
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {books.map((book) => (
            <div 
              key={book.id}
              onClick={() => book.path !== '#' && navigate(book.path)}
              className={`group relative aspect-square bg-white border border-slate-100 rounded-[2.5rem] p-10 flex flex-col justify-between transition-all duration-500
                          ${book.path !== '#' ? 'hover:border-slate-200 hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)] cursor-pointer' : 'opacity-40 cursor-not-allowed'}`}
            >
              {/* Top Row */}
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-slate-300 tracking-widest">{book.num}</span>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-800 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                  <book.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
              </div>

              {/* Center Content */}
              <div>
                <h3 className="text-3xl font-black text-slate-900 mb-1">{book.title}</h3>
                <p className="text-slate-400 text-xs font-medium">{book.japanese}</p>
              </div>

              {/* Bottom Label */}
              <div className="pt-4">
                <span className="text-[10px] font-black tracking-[0.2em] text-slate-900 uppercase">
                  {book.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}