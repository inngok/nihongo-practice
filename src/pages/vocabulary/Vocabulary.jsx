import React from 'react';
import { Languages, Briefcase, Smile, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Vocabulary() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white p-12 rounded-[3rem] shadow-2xl max-w-2xl border border-slate-100 flex flex-col items-center">
        <div className="w-20 h-20 bg-amber-100/50 rounded-3xl flex items-center justify-center text-amber-600 mb-8 animate-bounce">
          <Construction className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Vocabulary Practice</h1>
        <p className="text-slate-500 mb-10 text-lg leading-relaxed">
          Tính năng đang được phát triển. Dữ liệu từ vựng N3 sẽ sớm được cập nhật tại đây!
        </p>
        <Link 
          to="/" 
          className="px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
        >
          Quay lại Trang chủ
        </Link>
      </div>
    </div>
  );
}
