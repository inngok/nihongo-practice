import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertCircle, Info, CheckCircle2, XCircle, Gauge } from 'lucide-react';

const confusionData = [
  {
    pattern: '～てもいい',
    literal: '...cũng được',
    usage: 'Được phép',
    intensity: 'Cho phép',
    color: 'emerald',
    description: 'Dùng khi muốn cho phép ai đó làm việc gì hoặc xin phép làm việc gì.',
    intensityValue: 40
  },
  {
    pattern: '～てはいけない',
    literal: '...thì không được',
    usage: 'Cấm',
    intensity: 'Cấm đoán tuyệt đối',
    color: 'rose',
    description: 'Dùng để đưa ra mệnh lệnh cấm đoán mạnh mẽ, thường dựa trên quy tắc hoặc đạo đức.',
    intensityValue: 100
  },
  {
    pattern: '～なければならない',
    literal: 'nếu không... thì không được',
    usage: 'Phải',
    intensity: 'Bắt buộc 100%',
    color: 'slate',
    description: 'Diễn tả nghĩa vụ hoặc sự cần thiết phải thực hiện một hành động nào đó.',
    intensityValue: 100
  },
  {
    pattern: '～なくてもいい',
    literal: 'dù không... cũng được',
    usage: 'Không cần thiết',
    intensity: 'Tự do lựa chọn',
    color: 'sky',
    description: 'Diễn tả việc không cần thiết phải làm gì, cho phép người nghe tự do lựa chọn.',
    intensityValue: 20
  },
  {
    pattern: '～たほうがいい',
    literal: 'phía đã... thì tốt',
    usage: 'Nên',
    intensity: 'Khuyên bảo mạnh',
    color: 'amber',
    description: 'Dùng để đưa ra lời khuyên mạnh mẽ hoặc cảnh báo điều gì đó nên làm.',
    intensityValue: 80
  },
  {
    pattern: '～ないほうがいい',
    literal: 'phía không... thì tốt',
    usage: 'Không nên',
    intensity: 'Khuyên bảo mạnh',
    color: 'orange',
    description: 'Dùng để đưa ra lời khuyên mạnh mẽ về việc không nên thực hiện hành động nào đó.',
    intensityValue: 80
  }
];

export default function ConfusingGrammar() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center pt-32 pb-20 px-4 md:px-12 selection:bg-black selection:text-white">
      {/* Header */}
      <div className="w-full max-w-6xl mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center rotate-3">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Grammar Guide • Tips</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic">Hay Nhầm</h1>
          <p className="text-slate-500 font-bold max-w-xl leading-relaxed italic">
            Tổng hợp các mẫu ngữ pháp dễ gây nhầm lẫn về mức độ và ý nghĩa sử dụng. 
            Ghi nhớ sự khác biệt để sử dụng chính xác trong hoàn cảnh thực tế.
          </p>
        </div>
        <button
          onClick={() => navigate('/')}
          className="px-8 py-4 border-2 border-black text-xs font-black uppercase hover:bg-black hover:text-white transition-all flex items-center gap-2 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Quay lại
        </button>
      </div>

      {/* Main Content - Modern Table Body */}
      <div className="w-full max-w-6xl space-y-6">
        <div className="hidden lg:grid grid-cols-12 gap-4 px-10 py-6 bg-slate-50 rounded-2xl mb-8">
          <div className="col-span-3 text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
             Ngữ pháp
          </div>
          <div className="col-span-3 text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <Info className="w-3 h-3" /> Dịch nghĩa đen
          </div>
          <div className="col-span-3 text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <CheckCircle2 className="w-3 h-3" /> Nghĩa sử dụng
          </div>
          <div className="col-span-3 text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <Gauge className="w-3 h-3" /> Mức độ
          </div>
        </div>

        {confusionData.map((item, index) => (
          <div 
            key={index}
            className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-8 lg:p-10 hover:border-black hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Pattern */}
              <div className="col-span-1 lg:col-span-3">
                <span className={`text-[10px] font-black uppercase tracking-widest mb-3 block text-${item.color}-500`}>
                  Pattern 0{index + 1}
                </span>
                <h3 className="text-3xl font-black tracking-tighter italic">{item.pattern}</h3>
              </div>

              {/* Literal */}
              <div className="col-span-1 lg:col-span-3">
                <div className="lg:hidden text-[10px] font-black uppercase tracking-widest text-slate-300 mb-2">Dịch nghĩa đen</div>
                <p className="text-slate-400 font-bold italic translate-y-0.5">{item.literal}</p>
              </div>

              {/* Usage */}
              <div className="col-span-1 lg:col-span-3">
                <div className="lg:hidden text-[10px] font-black uppercase tracking-widest text-slate-300 mb-2">Nghĩa sử dụng</div>
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full bg-${item.color}-400 active-pulse`} />
                  <p className="text-lg font-black italic">{item.usage}</p>
                </div>
              </div>

              {/* Intensity */}
              <div className="col-span-1 lg:col-span-3">
                <div className="lg:hidden text-[10px] font-black uppercase tracking-widest text-slate-300 mb-2">Mức độ</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">{item.intensity}</span>
                    <span className="text-[10px] font-black text-slate-900">{item.intensityValue}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-black transition-all duration-1000 ease-out`}
                      style={{ width: `${item.intensityValue}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Description reveal on hover for desktop */}
              <div className="col-span-12 mt-4 pt-6 border-t border-slate-50 hidden md:block">
                <p className="text-sm text-slate-500 font-medium leading-relaxed italic">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="w-full max-w-4xl mt-20 p-10 bg-black text-white rounded-[3rem] text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <AlertCircle className="w-32 h-32" />
        </div>
        <div className="relative z-10 space-y-4">
          <h4 className="text-2xl font-black italic">Lời khuyên nhỏ</h4>
          <p className="text-white/60 text-sm max-w-2xl mx-auto italic font-medium leading-relaxed">
            Việc nhầm lẫn các mẫu ngữ pháp tương tự nhau là hoàn toàn bình thường khi học N3. 
            Hãy cố gắng đặt câu cho từng mẫu trong bối cảnh thực tế để cảm nhận "độ mạnh" của lời khuyên hay lệnh cấm.
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in { from { transform: translateY(20px); } to { transform: translateY(0); } }
        .animate-in { animation: fade-in 0.6s ease-out forwards, slide-in 0.6s ease-out forwards; }
        .active-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .4; } }
      `}} />
    </div>
  );
}
