import React from 'react';
import { User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 z-50 w-full bg-white px-12 py-6 flex items-center justify-between pointer-events-auto">
      <Link to="/" className="font-bold text-xl tracking-tight text-black">
        NIHONGO
      </Link>
      
      <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8 text-sm font-medium text-slate-400">
        <Link 
          to="/" 
          className={`hover:text-black transition-colors ${pathname === '/' ? 'text-black' : ''}`}
        >
          Trang chủ
        </Link>
        <Link 
          to="/grammar" 
          className={`hover:text-black transition-colors ${pathname.startsWith('/grammar') ? 'text-black' : ''}`}
        >
          Ngữ pháp
        </Link>
        <Link 
          to="/vocabulary" 
          className={`hover:text-black transition-colors ${pathname === '/vocabulary' ? 'text-black' : ''}`}
        >
          Từ vựng
        </Link>
        <Link 
          to="/kanji" 
          className={`hover:text-black transition-colors ${pathname === '/kanji' ? 'text-black' : ''}`}
        >
          Hán tự
        </Link>
      </nav>

      <div className="flex items-center">
        <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center text-black cursor-pointer">
          <User className="w-3.5 h-3.5" />
        </div>
      </div>
    </header>
  );
}
