import { Routes, Route, Outlet } from "react-router-dom";
import ScrollToTop from "../components/layout/ScrollToTop";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Home from "../pages/home/Home";
import Grammar from "../pages/grammar/Grammar";
import Vocabulary from "../pages/vocabulary/Vocabulary";

const Layout = () => (
  <div className="flex flex-col min-h-screen bg-slate-50">
    <ScrollToTop />
    <Header />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const Fallback = () => (
  <div className="min-h-screen flex items-center justify-center text-slate-500 font-bold text-xl">
    NH3 Hub - Page not found ✅
  </div>
);

export default function RouteMap() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="grammar" element={<Grammar />} />
        <Route path="vocabulary" element={<Vocabulary />} />
        <Route path="*" element={<Fallback />} />
      </Route>
    </Routes>
  );
}
