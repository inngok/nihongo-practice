import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTopButton() {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  const { pathname } = useLocation();

  // 1. Auto scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 2. Toggle visibility of floating buttons when scrolling or resizing
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      // Show scroll to top when scrolled down more than 300px
      setShowTop(scrollY > 300);

      // Show scroll to bottom when there's more than 300px of scrollable area remaining below
      setShowBottom(scrollHeight - scrollY - clientHeight > 300);
    };

    // Run check initially and after short delay for content render
    handleScroll();
    const timer = setTimeout(handleScroll, 100);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[1500] flex flex-col gap-2 md:gap-3">
      {showTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 md:w-14 md:h-14 bg-black text-white rounded-xl md:rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all animate-in slide-in-from-bottom duration-500 border-2 border-white/20"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      )}
      {showBottom && (
        <button
          onClick={scrollToBottom}
          className="w-10 h-10 md:w-14 md:h-14 bg-black text-white rounded-xl md:rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all animate-in slide-in-from-bottom duration-500 border-2 border-white/20"
          aria-label="Scroll to bottom"
        >
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      )}
    </div>
  );
}
