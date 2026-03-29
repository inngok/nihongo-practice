import React, { Suspense, lazy } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import ScrollToTop from "../components/layout/ScrollToTop";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Lazy loading components for performance optimization
const Home = lazy(() => import("../pages/home/Home"));
const Grammar = lazy(() => import("../pages/grammar/Grammar"));
const Mimikara = lazy(() => import("../pages/grammar/Mimikara"));
const Vocabulary = lazy(() => import("../pages/vocabulary/Vocabulary"));
const Kanji = lazy(() => import("../pages/kanji/Kanji"));
const KanjiSet4 = lazy(() => import("../pages/kanji/KanjiSet4/KanjiSet4"));
const Soumatome = lazy(() => import("../pages/vocabulary/Soumatome/Soumatome"));
const ExamPC7 = lazy(() => import("../pages/exam/ExamPC7"));
const ExamVocab = lazy(() => import("../pages/exam/ExamVocab"));
const TryN3 = lazy(() => import("../pages/vocabulary/TryN3/TryN3"));
const MimikaraVocab = lazy(() => import("../pages/vocabulary/MimikaraVocab/MimikaraVocab"));
const Translator = lazy(() => import("../pages/translator/Translator"));

const PageLoader = () => (
  <div className="min-h-[calc(100vh-80px)] mt-20 flex items-center justify-center bg-white">
    <div className="w-6 h-6 border-2 border-slate-100 border-t-black rounded-full animate-spin"></div>
  </div>
);

const Layout = () => (
  <div className="flex flex-col min-h-screen bg-white relative">
    <ScrollToTop />
    <Header />

    {/* Slogan - Top Right Corner Badge */}
    <div className="fixed right-6 top-6 z-[100] hidden lg:block pointer-events-none select-none">
      <div className="bg-white/80 backdrop-blur-md border border-slate-100 px-4 py-2 rounded-xl shadow-sm flex items-center gap-3">
        <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400 italic whitespace-nowrap">
          "If you can dream it, you can do it"
        </p>
      </div>
    </div>

    <main className="flex-grow flex flex-col">
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />
  </div>
);

const Fallback = () => (
  <div className="min-h-[calc(100vh-80px)] mt-20 flex-grow flex items-center justify-center bg-white text-slate-500 font-bold text-lg">
    <div className="text-center space-y-4">
      <div>Trang không tồn tại</div>
    </div>
  </div>
);

export default function RouteMap() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="grammar" element={<Grammar />} />
        <Route path="grammar/mimikara" element={<Mimikara />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/vocabulary/soumatome" element={<Soumatome />} />
        <Route path="/vocabulary/try-n3" element={<TryN3 />} />
        <Route path="/vocabulary/mimikara" element={<MimikaraVocab />} />
        <Route path="/kanji" element={<Kanji />} />
        <Route path="/kanji/set-4" element={<KanjiSet4 />} />
        <Route path="/exam-pc7" element={<ExamPC7 />} />
        <Route path="/exam-pc7/vocab-comprehensive" element={<ExamVocab type="comprehensive" />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="*" element={<Fallback />} />
      </Route>
    </Routes>
  );
}
