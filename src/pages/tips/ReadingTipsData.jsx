import React from 'react';
import { BookOpen, CheckCircle, AlertCircle, Target, ArrowRight } from 'lucide-react';

export default function ReadingTipsData() {
  const conjunctions = [
    {
      term: 'しかし',
      meaning: 'Nhưng / Tuy nhiên (Nêu sự đối lập)',
      examples: [
        {
          jp: '日本の夏は暑くて湿気が多い。しかし、最近ではエアコンが普及しているため、家の中では快適に過ごせるようになった。',
          analysis: 'Câu đầu tiêu cực (nóng ẩm). 「しかし」 báo hiệu sự trái ngược. Câu sau tích cực (dễ chịu nhờ điều hòa).',
          tip: 'Ý sau sẽ đảo chiều với ý trước, có thể là giải pháp, ngoại lệ, mặt tích/tiêu cực ngược lại.'
        },
        {
          jp: 'このレストランはいつも混んでいます。しかし、料理がとてもおいしいので、待つ人が多いです。',
          analysis: 'Ý 1 tiêu cực -> 「しかし」 -> Ý 2 tích cực, nên tổng thể đoạn văn là tích cực.'
        }
      ]
    },
    {
      term: 'それに',
      meaning: 'Hơn nữa / Thêm vào đó (Bổ sung thông tin)',
      examples: [
        {
          jp: 'この映画はとても感動的だった。それに、音楽もすばらしかった。',
          analysis: 'Ý 1 (phim cảm động) được bổ sung bởi Ý 2 (nhạc phim tuyệt) -> tăng thêm giá trị.',
          tip: 'Câu sau sẽ hỗ trợ, tăng cường, hoặc nhấn mạnh thêm thông tin tích cực/tiêu cực từ trước đó.'
        }
      ]
    },
    {
      term: 'つまり',
      meaning: 'Tóm lại / Nói cách khác (Giải thích lại hoặc kết luận)',
      examples: [
        {
          jp: '毎日コツコツ勉強すれば、半年でN3に合格することができる。つまり、継続することが一番大切だ。',
          tip: 'Tập trung vào ý sau vì nó chứa thông điệp chính/kết luận.'
        },
        {
          jp: '每日30分運動を続けると、健康によい。つまり、運動の習慣をつけることが大切だ。',
          analysis: 'Giúp xác định ý chính của đoạn văn, có thể là đáp án cho câu hỏi “Đoạn văn muốn nói gì nhất?”. Thường là key message.'
        }
      ]
    },
    {
      term: 'なぜなら',
      meaning: 'Bởi vì (Nêu lý do)',
      examples: [
        {
          jp: '田中さんは今、海外に住んでいます。なぜなら、海外の大学に留学しているからです。',
          tip: 'Nếu câu hỏi “Vì sao?”, tìm 「なぜなら」「なぜかというと」 để có lý do chính xác.'
        },
        {
          jp: '今日は外に出たくない。なぜなら、雨が降っているからだ。',
          tip: 'Lưu ý các cách viết tương đương: なぜかというと〜からだ / その理由は〜からである .'
        }
      ]
    },
    {
      term: 'たとえば',
      meaning: 'Ví dụ như (Nêu minh họa)',
      examples: [
        {
          jp: '日本の伝統的な行事はたくさんある。たとえば、お正月やひなまつりなどがある。',
          analysis: 'Là tín hiệu mạnh để xác định chủ đề chung của đoạn.',
          tip: 'Không nên chọn ý trả lời chỉ dựa vào ví dụ, hãy xác định chủ đề bao quát hơn.'
        }
      ]
    },
    {
      term: 'そのため',
      meaning: 'Vì vậy / Do đó (Nêu kết quả)',
      examples: [
        {
          jp: '雨が強くなってきた。そのため、試合は中止になった。',
          analysis: '"Do đó" -> nguyên nhân đã có, giờ là kết quả (Mưa to -> hoãn).',
          tip: 'Khi gặp từ nối chỉ kết quả (そのため, だから), hãy tìm câu trước đó chứa lý do.'
        }
      ]
    },
    {
      term: 'けれども / でも',
      meaning: 'Nhưng mà (Đối lập nhẹ nhàng)',
      examples: [
        {
          jp: 'この本はおもしろい。でも、少し難しい言葉が多い。',
          analysis: 'So với 「しかし」 thì mang sắc thái nhẹ hơn, dùng trong văn nói. Ý sau trái ngược ý trước nhưng không gay gắt.'
        }
      ]
    },
    {
      term: 'すると',
      meaning: 'Thế là / Và rồi (Kết quả xảy ra ngay sau một hành động/tình huống)',
      examples: [
        {
          jp: '彼がボタンを押した。すると、ドアがゆっくり開いた。',
          tip: 'Câu sau là hệ quả trực tiếp hoặc bất ngờ -> chú ý mối liên hệ nguyên nhân-kết quả.'
        }
      ]
    },
    {
      term: 'さらに',
      meaning: 'Hơn nữa / Ngoài ra (Bổ sung cấp độ cao hơn)',
      examples: [
        {
          jp: 'この薬はよく効く。さらに、副作用も少ない。',
          tip: 'Ý trước đã tốt, sau 「さらに」 là điểm cộng tiếp theo -> xác định toàn đoạn quan điểm rất tích/tiêu cực.'
        }
      ]
    },
    {
      term: 'また',
      meaning: 'Ngoài ra / Cũng / Lại còn (Bổ sung song song)',
      examples: [
        {
          jp: '日本には桜があります。また、紅葉も有名です。',
          tip: 'Liệt kê song song. Nếu hỏi "Nội dung chính?", hãy tổng hợp tất cả nội dung sau các 「また」.'
        }
      ]
    },
    {
      term: 'そして',
      meaning: 'Và / Sau đó (Kết nối cùng cấp hoặc mạch thời gian)',
      examples: [
        {
          jp: '彼は大学を卒業した。そして、会社に就職した。',
          tip: 'Dùng liệt kê theo trình tự, nối các hành động cùng chiều -> chú ý mạch diễn biến.'
        }
      ]
    },
    {
      term: 'それから',
      meaning: 'Sau đó (Nhấn mạnh thứ tự thời gian)',
      examples: [
        {
          jp: '朝ごはんを食べた。それから、学校に行った。',
          tip: 'Tập trung diễn biến thời gian, đoán trật tự hành động -> hữu ích khi đề yêu cầu sắp xếp .'
        }
      ]
    },
    {
      term: 'それなのに',
      meaning: 'Ấy thế mà / Mặc dù vậy (Trái kỳ vọng)',
      examples: [
        {
          jp: '熱があった。それなのに、彼は学校に行った。',
          tip: 'Sau đó là hành động trái lẽ thường -> chú ý mâu thuẫn logic.'
        }
      ]
    }
  ];

  const others = [
    {
      title: 'Lựa chọn',
      items: [
        { word: 'または', meaning: 'Hoặc là. Lựa chọn 1 trong 2 (Ví dụ: 飲み物はコーヒー、またはお茶...). Không phải 2 thứ đồng thời, liệt kê trang trọng trong văn viết.' },
        { word: 'もしくは', meaning: 'Hoặc là. Lịch sự hơn, thường dùng văn viết (Ví dụ: 電話、もしくはメールで...).' },
        { word: 'それとも', meaning: 'Hay là. Câu hỏi có 2 lựa chọn, hội thoại nhẹ nhàng (Ví dụ: コーヒーがいい? それとも紅茶がいい?).' }
      ]
    },
    {
      title: 'Nguyên nhân - Kết quả',
      items: [
        { word: 'それで', meaning: 'Vì thế/Do đó. Kết quả có lý do ở câu trước, nhẹ nhàng hơn だから. (Ví dụ: 雨が降っていた。それで、試合は中止になった).' },
        { word: 'だから', meaning: 'Vì vậy. Câu sau thường là hành động quyết định từ nguyên nhân. (Ví dụ: 明日は休みだ。だから、出かけよう).' },
        { word: 'そこで', meaning: 'Vì vậy nên tôi đã... Chủ thể hành động chủ động đưa ra giải pháp. (Ví dụ: 財布を忘れた。そこで、友達にお金を借りた).' }
      ]
    },
    {
      title: 'Đối lập khác & Nhóm khác',
      items: [
        { word: 'だが', meaning: 'Tuy nhiên. Tương đương しかし nhưng trang trọng, dùng sách/báo. (Ví dụ: この問題は簡単そうだ。だが、実はとても難しい).' },
        { word: 'では', meaning: 'Vậy thì. Gợi mở/ra quyết định bắt đầu (Ví dụ: 時間になりました。では、始めましょう).' },
        { word: 'ときに', meaning: 'Nhân tiện. Chuyển chủ đề nhẹ nhàng (Ví dụ: ときに、田中さんは元気ですか?).' },
        { word: 'したがって', meaning: 'Vì vậy nên. Rất trang trọng (Ví dụ: 交通事故が増えています。したがって、安全運転が必要です).' },
        { word: 'この度', meaning: 'Lần này/Nhân dịp này. Dùng trong thư từ, thông báo trịnh trọng.' }
      ]
    }
  ];

  const pointers = [
    { group: 'Nhóm "Ko"', detail: '(Gần người nói): これ (Cái này), この + N (Này), こう (Như thế này).' },
    { group: 'Nhóm "So"', detail: '(Gần người nghe/Đã nhắc): それ (Cái đó), その + N (Đó), そう (Như thế đó).' },
    { group: 'Nhóm "A"', detail: '(Xa cả hai): あれ (Cái kia), あの + N (Kia), ああ (Như thế kia).' },
  ];

  return (
    <div className="space-y-16 mt-4">
      {/* TỪ NỐI */}
      <section className="space-y-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
            Phần 1: Từ nối <span className="text-slate-400 font-bold">(接続詞)</span>
          </h3>
          <div className="w-12 h-1 bg-black rounded-full" />
        </div>
        <p className="text-sm text-slate-500 font-medium italic border-l-2 border-slate-200 pl-4 py-1">
          Các từ nối cực kỳ quan trọng giúp nhận biết mối quan hệ, dự đoán ý đối lập, và tóm tắt ý chính của bài.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conjunctions.map((c, i) => (
            <div key={i} className="py-6 px-6 md:px-8 border border-slate-100 bg-white hover:border-slate-300 hover:shadow-sm transition-all rounded-3xl">
              <div className="flex flex-col gap-1 mb-4">
                <h4 className="text-2xl md:text-3xl font-black text-slate-900">{c.term}</h4>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">{c.meaning}</p>
              </div>
              
              <div className="space-y-6">
                {c.examples.map((ex, j) => (
                  <div key={j} className="space-y-2">
                    <p className="text-base text-slate-800 leading-relaxed font-semibold">"{ex.jp}"</p>
                    {ex.analysis && (
                      <p className="text-sm text-slate-500 leading-relaxed">
                        <span className="font-bold text-slate-400">Phân tích:</span> {ex.analysis}
                      </p>
                    )}
                    {ex.tip && (
                      <p className="text-sm text-amber-700 font-medium leading-relaxed bg-amber-50/50 inline-block px-3 py-1 rounded-lg">
                        <span className="font-bold text-amber-600 mr-2">Mẹo:</span>{ex.tip}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mt-12 bg-slate-50 p-8 rounded-[2rem]">
          {others.map((grp, i) => (
            <div key={i} className="space-y-5">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200 pb-3">{grp.title}</h4>
              <div className="space-y-4">
                {grp.items.map((it, j) => (
                  <div key={j} className="space-y-1">
                    <span className="font-black text-slate-900 block text-lg">{it.word}</span>
                    <span className="text-sm text-slate-600 leading-relaxed block">{it.meaning}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CHỈ THỊ NGỮ */}
      <section className="space-y-8 mt-12">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
            Phần 2: Chỉ thị ngữ <span className="text-slate-400 font-bold">(指示語)</span>
          </h3>
          <div className="w-12 h-1 bg-black rounded-full" />
        </div>

        <div className="bg-emerald-50 border-2 border-emerald-100 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 space-y-4">
            <h4 className="text-[10px] font-black tracking-widest text-emerald-600 uppercase">Phân biệt nhanh</h4>
            {pointers.map((p, i) => (
              <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-emerald-50">
                <span className="font-black text-emerald-900 block text-sm">{p.group}</span>
                <span className="text-xs text-slate-500 font-medium">{p.detail}</span>
              </div>
            ))}
          </div>
          <div className="md:w-2/3 space-y-4">
            <h4 className="text-[10px] font-black tracking-widest text-emerald-600 uppercase">Mẹo vàng khi làm bài</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm font-medium text-emerald-900 bg-white p-4 rounded-2xl shadow-sm">
                <AlertCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Khi gặp <b>「これ」</b>, <b>「それ」</b> -{'>'} Tự hỏi nó là gì, quay lại 1-2 câu trước để xác định.</span>
              </li>
              <li className="flex gap-3 text-sm font-medium text-emerald-900 bg-white p-4 rounded-2xl shadow-sm">
                <AlertCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Khi <b>「これ/それ」</b> đứng trước <b>「理由」</b>, <b>「原因」</b>, <b>「結果」</b> -{'>'} Chỉ một nội dung tổng hợp/sự việc ngay trên.</span>
              </li>
              <li className="flex gap-3 text-sm font-medium text-emerald-900 bg-white p-4 rounded-2xl shadow-sm">
                <AlertCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Ngược lại, gặp <b>「その理由」</b>, <b>「そのため」</b> -{'>'} Xem đó là kết quả từ nguyên nhân nào ngay trước.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* BÀI TẬP */}
      <section className="space-y-8 mt-12">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
            Phần 3: Bài Tập Khởi Động
          </h3>
          <div className="w-12 h-1 bg-black rounded-full" />
        </div>
        
        <div className="space-y-6">
          <div className="bg-white border-2 border-slate-100 rounded-[2rem] overflow-hidden">
            <div className="bg-slate-50 p-6 border-b border-slate-100">
              <p className="text-base font-bold text-slate-800 leading-relaxed italic">
                最近、健康志向の人々が増えており...例えば、野菜や果物を多く摂取し、加工食品や高カロリーの食べ物を控える傾向があります。
                <b className="underline underline-offset-4 decoration-2 decoration-amber-400 mx-1">このような食生活(1)</b>
                は、生活習慣病の予防に効果的だと言われています。しかし、忙しい現代人にとって簡単ではありません。
                <b className="underline underline-offset-4 decoration-2 decoration-amber-400 mx-1">そこで(2)</b>、手軽に栄養を摂取できるサプリメントが注目されています...ただし、サプリメントに頼りすぎると、かえって健康を害する可能性もあります。
                <b className="underline underline-offset-4 decoration-2 decoration-amber-400 mx-1">そのため(3)</b>、サプリメントはあくまで補助的なものとして、基本はバランスの取れた食事を心がけることが重要です。
              </p>
            </div>
            <div className="p-6 md:p-8 space-y-6">
               <div className="space-y-3">
                 <h5 className="font-black text-slate-900">Hỏi 1: 「このような食生活」はどのような食生活を指していますか。</h5>
                 <div className="p-4 bg-emerald-50 text-emerald-900 font-bold rounded-xl flex gap-3 text-sm">
                   <ArrowRight className="w-5 h-5 opacity-50" />
                   <div>
                      <p>Đáp án: 野菜や果物を多く摂取し、加工食品や高カロリーの食べ物を控える食生活</p>
                      <p className="text-xs text-emerald-700 mt-1 font-medium italic">Giải thích: Vì câu ngay trước mô tả việc ăn rau quả, hạn chế đồ ăn calo cao.</p>
                   </div>
                 </div>
               </div>

               <div className="space-y-3">
                 <h5 className="font-black text-slate-900">Hỏi 2: 「そこで」の役割は何ですか。</h5>
                 <div className="p-4 bg-emerald-50 text-emerald-900 font-bold rounded-xl flex gap-3 text-sm">
                   <ArrowRight className="w-5 h-5 opacity-50" />
                   <div>
                      <p>Đáp án: 前の内容を受けて、新しい話題を導入する</p>
                      <p className="text-xs text-emerald-700 mt-1 font-medium italic">Giải thích: Vì trước là khó khăn, sau là giới thiệu giải pháp mới là thực phẩm bổ sung.</p>
                   </div>
                 </div>
               </div>

               <div className="space-y-3">
                 <h5 className="font-black text-slate-900">Hỏi 3: 「そのため」の後に述べられていることは何ですか。</h5>
                 <div className="p-4 bg-emerald-50 text-emerald-900 font-bold rounded-xl flex gap-3 text-sm">
                   <ArrowRight className="w-5 h-5 opacity-50" />
                   <div>
                      <p>Đáp án: バランスの取れた食事の重要性</p>
                      <p className="text-xs text-emerald-700 mt-1 font-medium italic">Giải thích: Vì đoạn sau nhấn mạnh việc thực phẩm bổ sung chỉ là phụ, ăn uống cân bằng mới là cơ bản/quan trọng.</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
