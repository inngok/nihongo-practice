import React from 'react';
import { GraduationCap, BookOpen, Languages } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  if (isHome) return null; // Home has its own portal-style header

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="bg-indigo-600 p-1.5 rounded-lg text-white shadow-indigo-100 shadow-lg group-hover:scale-110 transition-transform">
          <GraduationCap className="w-5 h-5" />
        </div>
        <span className="font-bold text-slate-800 text-lg group-hover:text-indigo-600 transition-colors">NH3 Hub</span>
      </Link>
      
      <nav className="flex items-center gap-2">
        <Link 
          to="/grammar" 
          className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${pathname === '/grammar' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          <BookOpen className="w-4 h-4" /> <span className="hidden sm:inline">Ngữ Pháp</span>
        </Link>
        <Link 
          to="/vocabulary" 
          className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${pathname === '/vocabulary' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          <Languages className="w-4 h-4" /> <span className="hidden sm:inline">Từ Vựng</span>
        </Link>
      </nav>
    </header>
  );
}
