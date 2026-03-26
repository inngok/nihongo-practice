import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// Import data
const soumatomeData = {
  1: { // Tuần 1
    1: { // Ngày 1
      title: "Nhà bếp – phòng khách",
      japanese: "キッチンで / リビングで",
      words: [
        { kanji: "台所", kana: "だいどころ", meaning: "nhà bếp" },
        { kanji: "電子レンジ", kana: "でんしれんじ", meaning: "lò vi sóng" },
        { kanji: "お茶わん", kana: "おちゃわん", meaning: "chén" },
        { kanji: "ワイングラス", kana: "ワイングラス", meaning: "ly uống rượu" },
        { kanji: "コーヒーカップ", kana: "コーヒーカップ", meaning: "tách cà phê" },
        { kanji: "茶わん", kana: "ちゃわん", meaning: "ly, cốc uống trà" },
        { kanji: "湯飲み", kana: "ゆのみ", meaning: "tách trà" },
        { kanji: "ガスレンジ", kana: "ガスレンジ", meaning: "bếp ga" },
        { kanji: "ガスコンロ", kana: "ガスコンロ", meaning: "bếp ga di động, bếp gas" },
        { kanji: "ガラスのコップ", kana: "ガラス của コップ", meaning: "ly thủy tinh" },
        { kanji: "レバー", kana: "レバー", meaning: "cần gạt số, cần điều khiển" },
        { kanji: "流し", kana: "ながし", meaning: "bồn, chậu rửa" },
        { kanji: "居間", kana: "いま", meaning: "phòng khách" },
        { kanji: "リビング", kana: "リビング", meaning: "phòng khách" },
        { kanji: "窓ガラス", kana: "まどガラス", meaning: "cửa kính; kính cửa sổ" },
        { kanji: "雨戸", kana: "あまど", meaning: "cửa sập, cửa che mưa, cửa chớp" },
        { kanji: "網戸", kana: "あみど", meaning: "cửa lưới" },
        { kanji: "天井", kana: "てんじょう", meaning: "trần nhà" },
        { kanji: "床", kana: "ゆか", meaning: "sàn nhà" },
        { kanji: "コンセント", kana: "コンセント", meaning: "ổ cắm điện" },
        { kanji: "コード", kana: "コード", meaning: "dây dẫn" },
        { kanji: "エアコン", kana: "エアコン", meaning: "máy điều hòa" },
        { kanji: "ヒーター", kana: "ヒーター", meaning: "máy sưởi, lò sưởi" },
        { kanji: "カーペット", kana: "カーペット", meaning: "tấm thảm" },
        { kanji: "蛇口", kana: "じゃぐch", meaning: "vòi nước" },
        { kanji: "水道の蛇口をひねる", kana: "すいどうのじゃぐちをひねる", meaning: "mở vòi nước" },
        { kanji: "水が凍る", kana: "みずがこおる", meaning: "nước đông lạnh" },
        { kanji: "氷になる", kana: "こおりになる", meaning: "nước đá, thành nước đá" },
        { kanji: "冷凍して保存する", kana: "れいとうしてほぞんする", meaning: "làm lạnh, làm đông sau đó đem bảo quản" },
        { kanji: "残り物を温める", kana: "のこりものをあたためる", meaning: "làm nóng đồ ăn thừa" },
        { kanji: "ビールを冷やす", kana: "ビールをひやす", meaning: "làm lạnh bia" },
        { kanji: "ビールが冷えている", kana: "ビールがひえている", meaning: "bia được làm lạnh" },
        { kanji: "エアコンのリモコン", kana: "エアコンのリモコン", meaning: "điều khiển điều hòa" },
        { kanji: "スイッチ", kana: "スイッチ", meaning: "công tắc" },
        { kanji: "電源を入れる", kana: "でんげんをいれる", meaning: "mở điện, bật nguồn điện" },
        { kanji: "電源を切る", kana: "でんげんをきる", meaning: "tắt điện, cắt nguồn điện" },
        { kanji: "じゅうたんを敷く", kana: "じゅうたんをしく", meaning: "trải thảm" },
        { kanji: "暖房をつける", kana: "だんぼうをつける", meaning: "bật lò sưởi" },
        { kanji: "冷房が効いている", kana: "れいぼうがきいている", meaning: "máy lạnh đang hoạt động" },
        { kanji: "日当たりがいい", kana: "hiatari ga ii", meaning: "có ánh nắng chiếu vào" },
        { kanji: "日当たりが悪い", kana: "hiatari ga warui", meaning: "không có ánh nắng chiếu vào" },
      ]
    }
  }
};

export default function Soumatome() {
  const navigate = useNavigate();
  const [activeWeek, setActiveWeek] = useState(1);
  const [activeDay, setActiveDay] = useState(1);

  const currentData = useMemo(() => {
    return soumatomeData[activeWeek]?.[activeDay] || { title: '', words: [] };
  }, [activeWeek, activeDay]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-24 md:pt-32 pb-20 px-4 md:px-6 font-sans relative overflow-hidden text-slate-900">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-slate-100 opacity-[0.03] pointer-events-none select-none leading-none z-0 whitespace-nowrap">
        SOUMATOME
      </div>

      <div className="w-full max-w-5xl relative z-10">
        
        {/* Navigation & Header */}
        <div className="mb-12">
          <button 
            onClick={() => navigate('/vocabulary')}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 hover:text-black transition-colors mb-8 decoration-slate-100"
          >
            Danh sách từ vựng
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-slate-300 font-bold text-sm tracking-widest uppercase">Tuần {activeWeek}</span>
                <div className="flex gap-2">
                   {[1, 2, 3, 4, 5, 6, 7].map(day => (
                     <button
                       key={day}
                       onClick={() => setActiveDay(day)}
                       className={`px-3 py-1 text-[10px] font-black tracking-widest uppercase rounded-full transition-all ${activeDay === day ? 'bg-white text-black border border-black shadow-sm' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                     >
                       Ngày {day}
                     </button>
                   ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight italic">
                {currentData.title}
              </h1>
              <p className="text-sm md:text-lg text-slate-400 font-medium italic">
                {currentData.japanese}
              </p>
            </div>
          </div>
        </div>

        {/* Word Table/List */}
        <div className="w-full border-t border-slate-100 pt-8 animate-in fade-in duration-700">
          <div className="grid grid-cols-1 gap-1">
            {currentData.words.map((word, index) => (
              <div 
                key={index} 
                className="group flex flex-col md:flex-row md:items-center py-4 px-4 hover:bg-slate-50 transition-all rounded-2xl border border-transparent hover:border-slate-100"
              >
                <div className="w-10 text-[10px] font-black text-slate-200 group-hover:text-slate-400 mb-2 md:mb-0">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                
                <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 items-center">
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-slate-900 leading-tight">
                      {word.kanji}
                    </span>
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest group-hover:text-slate-500 transition-colors">
                      {word.kana}
                    </span>
                  </div>
                  
                  <div className="flex items-center md:justify-center">
                     <span className="text-xs font-medium text-slate-400 leading-relaxed uppercase tracking-widest">
                       {word.kana}
                     </span>
                  </div>

                  <div className="flex items-center md:justify-end">
                    <span className="text-sm md:text-base font-bold text-slate-600 bg-slate-50/50 group-hover:bg-white group-hover:shadow-sm px-4 py-1.5 rounded-xl border border-transparent group-hover:border-slate-100 transition-all">
                      {word.meaning}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {currentData.words.length === 0 && (
             <div className="py-20 text-center text-slate-400 font-medium italic">
                Dữ liệu cho ngày này đang được cập nhật...
             </div>
          )}
        </div>

      </div>
    </div>
  );
}
