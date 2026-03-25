import React, { useState, useEffect, useMemo, useRef } from 'react';
import { BookOpen, Brain, CheckCircle, ChevronLeft, ChevronRight, RotateCcw, HelpCircle, Layers } from 'lucide-react';

const grammarData = [
  // --- UNIT 1 ---
  {
    id: 1, unit: 1,
    pattern: "ことにしている",
    meaning: "Quyết định (thói quen cá nhân)",
    explanation: "Diễn tả thói quen hoặc quy tắc mà bản thân tự đề ra và thực hiện.",
    examples: [
      { jp: "健康のために、毎日野菜を食べることにしている。", vn: "Để tốt cho sức khỏe, tôi quyết định (duy trì thói quen) ăn rau mỗi ngày." },
      { jp: "寝る前に、必ず本を10ページ読むことにしている。", vn: "Trước khi ngủ, tôi luôn quyết định đọc 10 trang sách." }
    ],
    quiz: {
      sentence: "私は毎日、30分ジョギング________。",
      answer: "ことにしている",
      hint: "Quyết định thói quen của bản thân",
      translation: "Tôi quyết định chạy bộ 30 phút mỗi ngày."
    }
  },
  {
    id: 2, unit: 1,
    pattern: "ことになっている",
    meaning: "Quy định / Dự định (khách quan)",
    explanation: "Diễn tả những việc đã được quyết định bởi tổ chức, quy định hoặc dự định mang tính khách quan.",
    examples: [
      { jp: "法律で、車を運転する時はシートベルトをすることになっている。", vn: "Theo luật pháp, khi lái xe ô tô thì quy định phải thắt dây an toàn." },
      { jp: "明日は先生に会うことになっている。", vn: "Ngày mai tôi có lịch hẹn gặp thầy giáo (đã được sắp xếp)." }
    ],
    quiz: {
      sentence: "この部屋では、タバコを吸ってはいけない________。",
      answer: "ことになっている",
      hint: "Quy định chung",
      translation: "Trong phòng này có quy định không được hút thuốc."
    }
  },
  {
    id: 3, unit: 1,
    pattern: "ようになっている",
    meaning: "Được thiết kế để / Trở nên (tự động)",
    explanation: "Diễn tả chức năng của máy móc hoặc sự biến đổi trạng thái mang tính tự động.",
    examples: [
      { jp: "このドアは人が近づくと、自動で開くようになっている。", vn: "Cánh cửa này được thiết kế để tự động mở khi có người tiến lại gần." },
      { jp: "このボタンを押すと、お湯が出るようになっている。", vn: "Khi nhấn nút này, nước nóng sẽ chảy ra." }
    ],
    quiz: {
      sentence: "この機械は、暗くなると電気がつく________。",
      answer: "ようになっている",
      hint: "Chức năng/Cấu tạo tự động",
      translation: "Cái máy này được thiết kế để khi trời tối thì đèn sẽ sáng."
    }
  },
  {
    id: 4, unit: 1,
    pattern: "ような / ように",
    meaning: "Giống như / Theo như",
    explanation: "Dùng để so sánh hoặc đưa ra ví dụ.",
    examples: [
      { jp: "太陽のような明るい人だ。", vn: "Đó là một người tươi sáng như mặt trời." },
      { jp: "皆さんが知っているように、日本は島国です。", vn: "Như mọi người đã biết, Nhật Bản là một quốc gia hải đảo." }
    ],
    quiz: {
      sentence: "田中さんの________優しい人になりたい。",
      answer: "ような",
      hint: "Giống như (so sánh)",
      translation: "Tôi muốn trở thành một người hiền lành giống như anh Tanaka."
    }
  },
  {
    id: 5, unit: 1,
    pattern: "みたいだ",
    meaning: "Có vẻ như / Giống như (văn nói)",
    explanation: "Dùng để phỏng đoán dựa trên cảm nhận hoặc so sánh ví von trong văn nói.",
    examples: [
      { jp: "このケーキ、美味しそう。まるで本物みたいだ。", vn: "Cái bánh này trông ngon quá. Cứ như là đồ thật vậy." },
      { jp: "あそこに誰かいるみたいだ。", vn: "Có vẻ như có ai đó ở đằng kia." }
    ],
    quiz: {
      sentence: "彼はまるで子供________だ。",
      answer: "みたい",
      hint: "Giống như (văn nói)",
      translation: "Anh ấy cứ như là trẻ con vậy."
    }
  },
  {
    id: 6, unit: 1,
    pattern: "らしい",
    meaning: "Nghe nói / Đúng chất",
    explanation: "Dùng để truyền đạt tin đồn hoặc diễn tả tính chất điển hình của sự vật/sự việc.",
    examples: [
      { jp: "明日は雨が降るらしい。", vn: "Nghe nói ngày mai trời sẽ mưa." },
      { jp: "今日は春らしい暖かい日だ。", vn: "Hôm nay là một ngày ấm áp đúng chất mùa xuân." }
    ],
    quiz: {
      sentence: "噂によると、あの二人は結婚する________。",
      answer: "らしい",
      hint: "Nghe nói (tin đồn)",
      translation: "Theo lời đồn thì hai người đó nghe nói sắp kết hôn."
    }
  },
  {
    id: 7, unit: 1,
    pattern: "つもり",
    meaning: "Dự định / Cứ ngỡ là",
    explanation: "Diễn tả dự định của bản thân hoặc niềm tin chủ quan về một trạng thái nào đó.",
    examples: [
      { jp: "来年、日本へ行くつもりです。", vn: "Năm sau tôi dự định sẽ đi Nhật Bản." },
      { jp: "若いつもりだが、もう50歳だ。", vn: "Cứ ngỡ là mình còn trẻ nhưng đã 50 tuổi rồi." }
    ],
    quiz: {
      sentence: "大学を卒業したら、日本で働く________です。",
      answer: "つもり",
      hint: "Dự định",
      translation: "Sau khi tốt nghiệp đại học, tôi dự định sẽ làm việc tại Nhật Bản."
    }
  },
  {
    id: 8, unit: 1,
    pattern: "てくる",
    meaning: "Bắt đầu / Trở nên / Tiến về phía mình",
    explanation: "Diễn tả hành động đang bắt đầu, một sự thay đổi đang diễn ra hoặc hướng về phía người nói.",
    examples: [
      { jp: "最近、少しずつ寒くなってきた。", vn: "Gần đây trời đã bắt đầu lạnh dần lên." },
      { jp: "雨が降ってきた。", vn: "Trời đã đổ mưa rồi (bắt đầu)." }
    ],
    quiz: {
      sentence: "だんだん日本語が上手になって________。",
      answer: "きた",
      hint: "Thay đổi trạng thái (quá khứ của てくる)",
      translation: "Tiếng Nhật của tôi đang dần dần trở nên giỏi lên."
    }
  },

  // --- UNIT 2 ---
  {
    id: 9, unit: 2,
    pattern: "てほしい / もらいたい",
    meaning: "Muốn (ai đó) làm gì",
    explanation: "Diễn tả mong muốn người khác thực hiện một hành động nào đó cho mình hoặc cho ai đó.",
    examples: [
      { jp: "親にはいつまでも元気でいてほしい。", vn: "Tôi muốn bố mẹ lúc nào cũng khỏe mạnh." },
      { jp: "この仕事は君にやってもらいたい。", vn: "Tôi muốn cậu làm công việc này." }
    ],
    quiz: {
      sentence: "先生に、もっとゆっくり話して________。",
      answer: "ほしい",
      hint: "Mong muốn người khác làm gì (kết thúc bằng đuôi 'i')",
      translation: "Tôi muốn thầy giáo nói chậm lại một chút."
    }
  },
  {
    id: 10, unit: 2,
    pattern: "ば / たら / と…よかった",
    meaning: "Giá mà... / Ước gì...",
    explanation: "Thể hiện sự tiếc nuối về một việc đã xảy ra hoặc mong ước một điều trái với hiện tại.",
    examples: [
      { jp: "もう少し時間があれば、全部できたのに。", vn: "Giá mà có thêm chút thời gian thì tôi đã làm xong hết rồi." },
      { jp: "あの時、本当のことを言っておけばよかった。", vn: "Giá mà lúc đó tôi nói ra sự thật thì tốt biết mấy." }
    ],
    quiz: {
      sentence: "テストの前に、もっと勉強しておけば________。",
      answer: "よかった",
      hint: "Thể hiện sự tiếc nuối ở quá khứ",
      translation: "Giá mà trước bài kiểm tra tôi học nhiều hơn."
    }
  },
  {
    id: 11, unit: 2,
    pattern: "使役形 (させて / させられる)",
    meaning: "Cho phép làm / Bị bắt làm",
    explanation: "Sử dụng thể sai khiến để xin phép (させてください) hoặc diễn tả việc bị ép buộc (させられる - bị động sai khiến).",
    examples: [
      { jp: "今日は体調が悪いので、早く帰らせてください。", vn: "Hôm nay tôi thấy không khỏe nên xin cho phép tôi về sớm." },
      { jp: "子供のころ、母にピアノを習わせられた。", vn: "Hồi nhỏ, tôi bị mẹ bắt học piano." }
    ],
    quiz: {
      sentence: "すみません、明日一日休ま________ください。",
      answer: "せて",
      hint: "Xin phép người khác cho mình làm gì (dùng thể sai khiến của 休む)",
      translation: "Xin lỗi, hãy cho phép tôi nghỉ ngày mai."
    }
  },
  {
    id: 12, unit: 2,
    pattern: "自動詞 (〜ている)",
    meaning: "Trạng thái (Tự động từ)",
    explanation: "Tự động từ + ている diễn tả trạng thái của sự vật sau khi hành động xảy ra. Khác với Tha động từ + てある (có chủ ý).",
    examples: [
      { jp: "窓が閉まっている。", vn: "Cửa sổ đang đóng (trạng thái hiện tại)." },
      { jp: "あ、財布が落ちているよ。", vn: "A, có cái ví bị rơi kìa." }
    ],
    quiz: {
      sentence: "シャツのボタンがとれ________よ。",
      answer: "ている",
      hint: "Diễn tả trạng thái hiện tại bằng tự động từ (hoặc てる)",
      translation: "Cái cúc áo sơ mi bị tuột ra kìa."
    }
  },
  {
    id: 13, unit: 2,
    pattern: "〜み",
    meaning: "Sự... / Độ... (Danh từ hóa)",
    explanation: "Biến tính từ thành danh từ để chỉ trạng thái, tính chất mang tính cảm nhận, khách quan (thường dùng với 悲しい, 痛い, 苦しい, 重い, 深い...).",
    examples: [
      { jp: "戦争の悲しみを忘れてはいけない。", vn: "Không được quên nỗi đau thương của chiến tranh." },
      { jp: "このスープは野菜の甘みがある。", vn: "Món súp này có vị ngọt của rau củ." }
    ],
    quiz: {
      sentence: "星空の美し________に感動した。",
      answer: "み",
      hint: "Hậu tố biến tính từ đuôi 'i' thành danh từ",
      translation: "Tôi đã xúc động trước vẻ đẹp của bầu trời sao."
    }
  },
  {
    id: 14, unit: 2,
    pattern: "んじゃない？ / のではないだろうか",
    meaning: "Chẳng phải là... hay sao?",
    explanation: "Cách nói vòng vo, rụt rè để đưa ra ý kiến, phỏng đoán của bản thân.",
    examples: [
      { jp: "このやり方のほうがいいのではないだろうか。", vn: "Tôi nghĩ cách làm này tốt hơn đó chứ?" },
      { jp: "彼、今日休むんじゃない？", vn: "Chẳng phải hôm nay anh ấy nghỉ sao?" }
    ],
    quiz: {
      sentence: "これ、ちょっと高すぎる________？",
      answer: "んじゃない",
      hint: "Cách nói thân mật của 'のではないか'",
      translation: "Cái này, chẳng phải là hơi đắt quá sao?"
    }
  },
  {
    id: 15, unit: 2,
    pattern: "縮約形 (てる/とく/なきゃ)",
    meaning: "Dạng rút gọn (văn nói)",
    explanation: "Các dạng nói tắt thường dùng trong văn nói hàng ngày (ている→てる, ておく→とく, なければ→なきゃ).",
    examples: [
      { jp: "今、何してるの？ (しているの)", vn: "Bây giờ đang làm gì thế?" },
      { jp: "明日までにこの本、読んどくよ。(読んでおくよ)", vn: "Tôi sẽ đọc xong cuốn sách này trước ngày mai." }
    ],
    quiz: {
      sentence: "急が________、電車に遅れるよ！",
      answer: "なきゃ",
      hint: "Dạng rút gọn của 'なければ'",
      translation: "Nếu không nhanh lên, sẽ trễ tàu đấy!"
    }
  },

  // --- UNIT 3 ---
  {
    id: 16, unit: 3,
    pattern: "から〜にかけて",
    meaning: "Từ... đến...",
    explanation: "Chỉ phạm vi đại khái từ điểm bắt đầu đến điểm kết thúc của thời gian hoặc không gian.",
    examples: [
      { jp: "明日は関東から東北地方にかけて、雨が降るでしょう。", vn: "Ngày mai có lẽ sẽ mưa từ vùng Kanto đến vùng Tohoku." },
      { jp: "昨夜から今朝にかけて、大雨が降った。", vn: "Đã có mưa lớn từ đêm qua đến sáng nay." }
    ],
    quiz: {
      sentence: "明日は関東から東北地方に________、雨が降るでしょう。",
      answer: "かけて",
      hint: "Đi kèm với から để chỉ phạm vi",
      translation: "Ngày mai có lẽ sẽ mưa trải dài từ vùng Kanto đến vùng Tohoku."
    }
  },
  {
    id: 17, unit: 3,
    pattern: "だらけ",
    meaning: "Đầy / Toàn là...",
    explanation: "Chỉ trạng thái có đầy thứ gì đó, thường mang nghĩa tiêu cực (như rác, bùn, lỗi sai).",
    examples: [
      { jp: "彼の部屋はゴミだらけだ。", vn: "Phòng của anh ta toàn là rác." },
      { jp: "雨の中を歩いたので、靴が泥だらけになった。", vn: "Vì đi bộ trong mưa nên giày dính đầy bùn." }
    ],
    quiz: {
      sentence: "このテスト、間違い________じゃないか！",
      answer: "だらけ",
      hint: "Toàn là (nghĩa tiêu cực)",
      translation: "Bài kiểm tra này chẳng phải toàn là lỗi sai sao!"
    }
  },
  {
    id: 18, unit: 3,
    pattern: "おかげ",
    meaning: "Nhờ có... / Nhờ vào...",
    explanation: "Chỉ nguyên nhân dẫn đến kết quả tốt, mang hàm ý biết ơn.",
    examples: [
      { jp: "先生のおかげで、N3に合格できました。", vn: "Nhờ có thầy giáo mà em đã thi đỗ N3." },
      { jp: "薬を飲んだおかげで、熱が下がった。", vn: "Nhờ uống thuốc mà tôi đã hạ sốt." }
    ],
    quiz: {
      sentence: "友達が手伝ってくれた________で、早く終わった。",
      answer: "おかげ",
      hint: "Nhờ có (kết quả tốt)",
      translation: "Nhờ bạn bè giúp đỡ mà tôi đã làm xong sớm."
    }
  },
  {
    id: 19, unit: 3,
    pattern: "せい / せいか",
    meaning: "Tại vì... / Có lẽ tại...",
    explanation: "Chỉ nguyên nhân dẫn đến kết quả xấu, mang hàm ý đổ lỗi.",
    examples: [
      { jp: "バスが遅れたせいで、授業に遅刻してしまった。", vn: "Tại xe buýt đến muộn mà tôi bị trễ học." },
      { jp: "疲れているせいか、頭が痛い。", vn: "Có lẽ tại mệt mỏi nên tôi bị đau đầu." }
    ],
    quiz: {
      sentence: "あの人の________で、みんなが迷惑している。",
      answer: "せい",
      hint: "Tại vì (kết quả xấu, đổ lỗi)",
      translation: "Tại người đó mà mọi người đang gặp phiền phức."
    }
  },
  {
    id: 20, unit: 3,
    pattern: "とおり(に) / どおり(に)",
    meaning: "Đúng như / Theo như...",
    explanation: "Làm một việc gì đó đúng theo như một khuôn mẫu, tiêu chuẩn hoặc dự đoán.",
    examples: [
      { jp: "私の説明したとおりに、機械を組み立ててください。", vn: "Hãy lắp ráp máy móc đúng theo như tôi đã giải thích." },
      { jp: "天気予報どおり、雨が降ってきた。", vn: "Trời đã mưa đúng như dự báo thời tiết." }
    ],
    quiz: {
      sentence: "先生が言った________、試験は難しかった。",
      answer: "とおり",
      hint: "Đúng như / Theo như (đi sau động từ thể た/る)",
      translation: "Đúng như lời thầy giáo nói, bài thi rất khó."
    }
  },
  {
    id: 21, unit: 3,
    pattern: "について / つき",
    meaning: "Về vấn đề... / Về...",
    explanation: "Trình bày chủ đề của hành động (suy nghĩ, nói, viết, điều tra...).",
    examples: [
      { jp: "日本の文化についてレポートを書きます。", vn: "Tôi sẽ viết báo cáo về văn hóa Nhật Bản." },
      { jp: "この問題につき、話し合いましょう。", vn: "Hãy cùng thảo luận về vấn đề này." }
    ],
    quiz: {
      sentence: "将来の夢________、スピーチをします。",
      answer: "について",
      hint: "Về (chủ đề bài phát biểu)",
      translation: "Tôi sẽ thuyết trình về ước mơ trong tương lai."
    }
  },
  {
    id: 22, unit: 3,
    pattern: "に関し(て)",
    meaning: "Liên quan đến... / Về...",
    explanation: "Cách nói trang trọng hơn của について.",
    examples: [
      { jp: "この事件に関して、新しい情報が入りました。", vn: "Đã có thông tin mới liên quan đến vụ án này." },
      { jp: "環境問題に関する本を読んだ。", vn: "Tôi đã đọc một cuốn sách liên quan đến vấn đề môi trường." }
    ],
    quiz: {
      sentence: "この件________は、現在調査中です。",
      answer: "に関して",
      hint: "Liên quan đến (cách nói trang trọng)",
      translation: "Liên quan đến vụ việc này, hiện chúng tôi đang điều tra."
    }
  },
  {
    id: 23, unit: 3,
    pattern: "に比べ(て)",
    meaning: "So với...",
    explanation: "Dùng để so sánh hai sự vật, sự việc.",
    examples: [
      { jp: "今年は去年に比べて、雨の日が多い。", vn: "Năm nay nhiều ngày mưa hơn so với năm ngoái." },
      { jp: "兄に比べ、弟はよく勉強する。", vn: "So với anh trai thì người em chăm học hơn." }
    ],
    quiz: {
      sentence: "東京________、私の町は静かだ。",
      answer: "に比べて",
      hint: "So với",
      translation: "So với Tokyo thì thị trấn của tôi yên tĩnh hơn."
    }
  },
  {
    id: 24, unit: 3,
    pattern: "に加え(て)",
    meaning: "Thêm vào đó / Không chỉ... mà còn...",
    explanation: "Bổ sung thêm một yếu tố khác vào yếu tố đã có sẵn.",
    examples: [
      { jp: "彼は英語に加えて、日本語も話せる。", vn: "Anh ấy không chỉ nói được tiếng Anh mà còn nói được tiếng Nhật." },
      { jp: "大雨に加えて、風も強くなってきた。", vn: "Thêm vào mưa lớn, gió cũng bắt đầu thổi mạnh." }
    ],
    quiz: {
      sentence: "熱があるの________、咳も出ます。",
      answer: "に加えて",
      hint: "Thêm vào đó / Không chỉ... mà còn",
      translation: "Không chỉ bị sốt mà tôi còn bị ho."
    }
  },
  {
    id: 25, unit: 3,
    pattern: "に対し(て)",
    meaning: "Đối với / Trái ngược với...",
    explanation: "Thể hiện thái độ hướng tới một đối tượng, hoặc sự so sánh đối lập giữa hai sự vật.",
    examples: [
      { jp: "お客様に対して、失礼なことをしてはいけない。", vn: "Không được làm điều thất lễ đối với khách hàng." },
      { jp: "活発な姉に対して、妹はおとなしい。", vn: "Trái ngược với người chị hoạt bát, cô em gái rất trầm tính." }
    ],
    quiz: {
      sentence: "目上の人________は、敬語を使いなさい。",
      answer: "に対して",
      hint: "Đối với (thái độ hướng tới ai đó)",
      translation: "Đối với người bề trên thì hãy dùng kính ngữ."
    }
  },
  {
    id: 26, unit: 3,
    pattern: "たびに",
    meaning: "Mỗi khi / Cứ mỗi lần...",
    explanation: "Cứ mỗi lần hành động phía trước xảy ra thì luôn luôn kéo theo hành động phía sau.",
    examples: [
      { jp: "この曲を聞くたびに、子供のころを思い出す。", vn: "Mỗi khi nghe bài hát này, tôi lại nhớ về thuở nhỏ." },
      { jp: "旅行に行くたびに、お土産を買ってくる。", vn: "Cứ mỗi lần đi du lịch là tôi lại mua quà lưu niệm về." }
    ],
    quiz: {
      sentence: "彼に会う________、胸がドキドキする。",
      answer: "たびに",
      hint: "Mỗi khi / Cứ mỗi lần",
      translation: "Mỗi khi gặp anh ấy, tim tôi lại đập rộn ràng."
    }
  },
  {
    id: 27, unit: 3,
    pattern: "たとえ〜ても",
    meaning: "Cho dù... thì cũng...",
    explanation: "Đưa ra một giả định nghịch lý.",
    examples: [
      { jp: "たとえ雨が降っても、明日の試合は行われます。", vn: "Cho dù ngày mai trời có mưa thì trận đấu vẫn sẽ diễn ra." },
      { jp: "たとえ親に反対されても、留学したい。", vn: "Cho dù có bị bố mẹ phản đối thì tôi vẫn muốn đi du học." }
    ],
    quiz: {
      sentence: "________失敗しても、また挑戦すればいい。",
      answer: "たとえ",
      hint: "Đi cặp với 〜ても (cho dù)",
      translation: "Cho dù có thất bại thì thử thách lại là được."
    }
  },
  {
    id: 28, unit: 3,
    pattern: "って",
    meaning: "Nói là / Nghe nói là / Tên là...",
    explanation: "Cách nói thân mật của と (trích dẫn), という (gọi là) hoặc は (chủ đề).",
    examples: [
      { jp: "田中さんって人、知ってる？", vn: "Bạn có biết người tên là Tanaka không?" },
      { jp: "明日は休みだって。", vn: "Nghe nói ngày mai được nghỉ đấy." }
    ],
    quiz: {
      sentence: "あそこにある店、美味しいんだ________。",
      answer: "って",
      hint: "Nghe nói là (cách nói thân mật)",
      translation: "Quán ở đằng kia, nghe nói ngon lắm đấy."
    }
  },

  // --- UNIT 4 ---
  {
    id: 29, unit: 4,
    pattern: "くらい / ぐらい",
    meaning: "Đến mức / Khoảng chừng / Cỡ như",
    explanation: "Chỉ mức độ của sự việc, thường là mức độ nhẹ, tối thiểu, hoặc đưa ra ví dụ so sánh đến mức độ nào đó.",
    examples: [
      { jp: "泣きたいくらい痛い。", vn: "Đau đến mức muốn khóc." },
      { jp: "ひらがなぐらい書ける。", vn: "Cỡ như hiragana thì tôi viết được." }
    ],
    quiz: {
      sentence: "パンが一つ買える________のお金しかない。",
      answer: "くらい",
      hint: "Đến mức / Khoảng (có thể dùng くらい hoặc ぐらい)",
      translation: "Tôi chỉ có tiền đủ đến mức mua được một cái bánh mì."
    }
  },
  {
    id: 30, unit: 4,
    pattern: "くらいなら / ぐらいなら",
    meaning: "Nếu phải... thì thà... còn hơn",
    explanation: "So sánh hai việc tồi tệ, thà chọn vế sau còn hơn phải làm vế trước.",
    examples: [
      { jp: "あいつに謝るくらいなら、死んだほうがましだ。", vn: "Nếu phải xin lỗi hắn ta thì tôi thà chết còn hơn." },
      { jp: "途中でやめるくらいなら、最初からやらない。", vn: "Nếu giữa chừng bỏ cuộc thì thà không làm từ đầu." }
    ],
    quiz: {
      sentence: "彼と結婚する________、独身のほうがいい。",
      answer: "くらいなら",
      hint: "Nếu phải... thì thà...",
      translation: "Nếu phải kết hôn với anh ta thì tôi thà độc thân còn hơn."
    }
  },
  {
    id: 31, unit: 4,
    pattern: "うちに",
    meaning: "Trong lúc / Nhân lúc",
    explanation: "Tranh thủ làm việc gì đó khi trạng thái chưa thay đổi, hoặc sự biến đổi diễn ra trong khi đang làm một hành động khác.",
    examples: [
      { jp: "スープが温かいうちに、飲んでください。", vn: "Hãy uống nhân lúc súp còn nóng." },
      { jp: "日本にいるうちに、富士山に登りたい。", vn: "Nhân lúc còn ở Nhật, tôi muốn leo núi Phú Sĩ." }
    ],
    quiz: {
      sentence: "忘れない________、メモしておこう。",
      answer: "うちに",
      hint: "Trong lúc (chưa quên)",
      translation: "Nhân lúc chưa quên, hãy ghi chú lại."
    }
  },
  {
    id: 32, unit: 4,
    pattern: "を中心に / として / にして",
    meaning: "Lấy... làm trung tâm / Tập trung vào...",
    explanation: "Chỉ ra một thứ/người làm trung tâm, trọng tâm của một phạm vi, hiện tượng.",
    examples: [
      { jp: "地球は太陽を中心として回っている。", vn: "Trái đất quay quanh mặt trời (lấy mặt trời làm trung tâm)." },
      { jp: "この店は若い女性を中心に人気がある。", vn: "Quán này được yêu thích, đặc biệt tập trung vào phụ nữ trẻ." }
    ],
    quiz: {
      sentence: "文法________、日本語を勉強する。",
      answer: "を中心に",
      hint: "Lấy... làm trung tâm",
      translation: "Tôi học tiếng Nhật tập trung vào ngữ pháp."
    }
  },
  {
    id: 33, unit: 4,
    pattern: "をはじめ",
    meaning: "Trước tiên phải kể đến / Tiêu biểu là...",
    explanation: "Đưa ra một ví dụ tiêu biểu nhất trong số nhiều thứ cùng loại.",
    examples: [
      { jp: "校長先生をはじめ、先生方、大変お世話になりました。", vn: "Xin gửi lời cảm ơn đến các thầy cô, trước tiên là thầy hiệu trưởng." },
      { jp: "日本には寿司をはじめ、美味しい食べ物がたくさんある。", vn: "Ở Nhật Bản có rất nhiều đồ ăn ngon, tiêu biểu là Sushi." }
    ],
    quiz: {
      sentence: "社長________、社員の皆様にお礼を申し上げます。",
      answer: "をはじめ",
      hint: "Tiêu biểu là... / Trước tiên là...",
      translation: "Xin gửi lời cảm ơn đến mọi người trong công ty, trước tiên là giám đốc."
    }
  },
  {
    id: 34, unit: 4,
    pattern: "に対し(て)",
    meaning: "Trái ngược với / Đối lập với",
    explanation: "Dùng để so sánh sự khác nhau rõ rệt giữa hai sự vật, sự việc (khác với ý nghĩa 'Đối với' ở Unit 3).",
    examples: [
      { jp: "兄がスポーツが得意なのに対して、弟は勉強が得意だ。", vn: "Trái ngược với anh trai giỏi thể thao, người em lại giỏi học." },
      { jp: "昨日は大雨だったのに対して、今日は晴れている。", vn: "Trái ngược với hôm qua mưa lớn, hôm nay trời nắng." }
    ],
    quiz: {
      sentence: "東京が賑やかなの________、私の町は静かだ。",
      answer: "に対して",
      hint: "Trái ngược với (So sánh 2 chủ thể)",
      translation: "Trái ngược với Tokyo náo nhiệt, thị trấn của tôi rất yên tĩnh."
    }
  },
  {
    id: 35, unit: 4,
    pattern: "において",
    meaning: "Tại / Ở / Trong (lĩnh vực)...",
    explanation: "Dùng để chỉ địa điểm, thời đại, lĩnh vực xảy ra sự việc (tương đương với で nhưng mang tính trang trọng hơn).",
    examples: [
      { jp: "入学式は体育館において行われる。", vn: "Lễ nhập học sẽ được tổ chức tại nhà thi đấu." },
      { jp: "教育において、家庭の役割は大きい。", vn: "Trong lĩnh vực giáo dục, vai trò của gia đình là rất lớn." }
    ],
    quiz: {
      sentence: "会議は第一会議室________行われます。",
      answer: "において",
      hint: "Tại (cách nói trang trọng của で)",
      translation: "Cuộc họp sẽ được tổ chức tại phòng họp số 1."
    }
  },
  {
    id: 36, unit: 4,
    pattern: "にわたって / わたり",
    meaning: "Suốt / Trải dài (thời gian, không gian)",
    explanation: "Chỉ phạm vi rộng lớn của không gian hoặc khoảng thời gian kéo dài của một sự việc.",
    examples: [
      { jp: "会議は５時間にわたって行われた。", vn: "Cuộc họp đã diễn ra suốt 5 tiếng đồng hồ." },
      { jp: "彼は日本全国にわたって、調査を行った。", vn: "Anh ấy đã tiến hành điều tra trải dài trên toàn quốc." }
    ],
    quiz: {
      sentence: "３週間________、雨が降り続いた。",
      answer: "にわたって",
      hint: "Trải suốt / Kéo dài suốt (thời gian)",
      translation: "Mưa đã rơi liên tục suốt 3 tuần."
    }
  },
  {
    id: 37, unit: 4,
    pattern: "にとって",
    meaning: "Đối với... (đánh giá, quan điểm)",
    explanation: "Đứng từ góc độ, lập trường của người/vật đó để đưa ra đánh giá, nhận định.",
    examples: [
      { jp: "私にとって、家族は一番大切なものです。", vn: "Đối với tôi, gia đình là điều quan trọng nhất." },
      { jp: "この漢字は外国人にとって難しい。", vn: "Chữ Hán này khó đối với người nước ngoài." }
    ],
    quiz: {
      sentence: "子供________、遊びはとても重要だ。",
      answer: "にとって",
      hint: "Đối với (góc độ đánh giá)",
      translation: "Đối với trẻ em, vui chơi là điều rất quan trọng."
    }
  },
  {
    id: 38, unit: 4,
    pattern: "による / より / よって / よっては",
    meaning: "Tùy vào / Do / Bởi / Bằng cách",
    explanation: "Đưa ra phương pháp, nguyên nhân, người thực hiện (bị động) hoặc chỉ sự khác biệt tùy theo từng trường hợp.",
    examples: [
      { jp: "人によって、考え方が違う。", vn: "Mỗi người có cách suy nghĩ khác nhau (tùy vào)." },
      { jp: "インターネットによって、世界中の情報を知ることができる。", vn: "Bằng cách sử dụng Internet, có thể biết được thông tin trên toàn thế giới." }
    ],
    quiz: {
      sentence: "文化は、国________異なります。",
      answer: "によって",
      hint: "Tùy vào (chỉ sự khác biệt)",
      translation: "Văn hóa thì khác biệt tùy vào từng quốc gia."
    }
  },

  // --- UNIT 5 ---
  {
    id: 39, unit: 5,
    pattern: "に違いない",
    meaning: "Chắc chắn là / Không thể sai được",
    explanation: "Dùng để phỏng đoán một cách chắc chắn về một sự việc nào đó dựa trên căn cứ.",
    examples: [
      { jp: "鍵がない。どこかに落としたに違いない。", vn: "Không thấy chìa khóa. Chắc chắn là đánh rơi ở đâu rồi." },
      { jp: "夜遅くまで電気がついているから、彼はいるに違いない。", vn: "Đèn sáng đến tận khuya nên anh ấy chắc chắn có ở đó." }
    ],
    quiz: {
      sentence: "あんなに練習したのだから、明日は勝てる________。",
      answer: "に違いない",
      accepts: ["にちがいない"],
      hint: "Chắc chắn là (Kanji: 違いない)",
      translation: "Đã tập luyện đến mức đó thì ngày mai chắc chắn sẽ thắng."
    }
  },
  {
    id: 40, unit: 5,
    pattern: "とは / というのは",
    meaning: "Nghĩa là / Cái gọi là...",
    explanation: "Dùng để định nghĩa, giải thích ý nghĩa của một từ hoặc một khái niệm.",
    examples: [
      { jp: "デジカメとは、デジタルカメラのことです。", vn: "Dejikame có nghĩa là máy ảnh kỹ thuật số." },
      { jp: "「エコ」というのは、環境にいいということです。", vn: "\"Eco\" nghĩa là tốt cho môi trường." }
    ],
    quiz: {
      sentence: "パソコン________、パーソナルコンピュータのことだ。",
      answer: "とは",
      accepts: ["というのは", "っていうのは"],
      hint: "Nghĩa là (giải thích từ vựng)",
      translation: "Pasokon nghĩa là máy tính cá nhân."
    }
  },
  {
    id: 41, unit: 5,
    pattern: "たとたん(に)",
    meaning: "Vừa mới... thì ngay lập tức",
    explanation: "Diễn tả hành động vế sau xảy ra gần như đồng thời ngay sau hành động vế trước (thường mang tính bất ngờ).",
    examples: [
      { jp: "ドアを開けたとたん、猫が飛び出してきた。", vn: "Vừa mở cửa ra thì con mèo phóng ra ngoài." },
      { jp: "一口食べたとたんに、吐き出した。", vn: "Vừa mới ăn một miếng thì nôn ra ngay." }
    ],
    quiz: {
      sentence: "立ち上がっ________、めまいがした。",
      answer: "たとたん",
      accepts: ["たとたんに", "とたん", "とたんに"],
      hint: "Vừa mới... thì",
      translation: "Vừa mới đứng lên thì bị chóng mặt."
    }
  },
  {
    id: 42, unit: 5,
    pattern: "につれ(て)",
    meaning: "Cùng với... / Càng... càng...",
    explanation: "Chỉ sự thay đổi đồng thời: A thay đổi thì B cũng thay đổi theo (thường dùng cho những biến đổi tự nhiên, dần dần).",
    examples: [
      { jp: "年をとるにつれて、物忘れがひどくなった。", vn: "Cùng với tuổi tác, tật hay quên càng trở nên nghiêm trọng." },
      { jp: "町が発展するにつれ、自然が少なくなった。", vn: "Cùng với sự phát triển của thị trấn, thiên nhiên ngày càng ít đi." }
    ],
    quiz: {
      sentence: "成長する________、親に似てきた。",
      answer: "につれて",
      accepts: ["につれ"],
      hint: "Càng... càng (sự thay đổi kéo theo)",
      translation: "Càng lớn càng giống bố mẹ."
    }
  },
  {
    id: 43, unit: 5,
    pattern: "にしたがって / したがい",
    meaning: "Theo như / Càng... càng...",
    explanation: "Vừa có nghĩa 'thuận theo, tuân theo' chỉ thị/quy tắc, vừa có nghĩa 'cùng với sự thay đổi' (giống につれて).",
    examples: [
      { jp: "先生の指示にしたがって、行動してください。", vn: "Hãy hành động theo như chỉ thị của giáo viên." },
      { jp: "北へ行くにしたがい、紅葉が早くなる。", vn: "Càng đi về phía Bắc thì lá đỏ càng có sớm." }
    ],
    quiz: {
      sentence: "ルール________、ゲームをしてください。",
      answer: "にしたがって",
      accepts: ["に従って", "にしたがい", "に従い"],
      hint: "Theo như (tuân theo quy tắc)",
      translation: "Hãy chơi game theo đúng luật."
    }
  },
  {
    id: 44, unit: 5,
    pattern: "最中(に)",
    meaning: "Đúng lúc đang / Giữa lúc",
    explanation: "Nhấn mạnh thời điểm hành động đang diễn ra cao trào thì có một việc khác xen vào (thường là gây cản trở).",
    examples: [
      { jp: "会議の最中に、携帯電話が鳴った。", vn: "Giữa lúc đang họp thì điện thoại reo." },
      { jp: "今、ご飯を食べている最中だ。", vn: "Bây giờ tôi đang ăn cơm." }
    ],
    quiz: {
      sentence: "シャワーを浴びている________に、客が来た。",
      answer: "最中",
      accepts: ["さいちゅう"],
      hint: "Đúng lúc đang (Kanji: 最中)",
      translation: "Đúng lúc đang tắm vòi sen thì có khách đến."
    }
  },
  {
    id: 45, unit: 5,
    pattern: "てからでないと / なければ…ない",
    meaning: "Nếu chưa... thì không thể...",
    explanation: "Diễn tả điều kiện tiên quyết: phải làm việc A trước thì mới có thể làm việc B. Vế sau luôn mang ý nghĩa phủ định.",
    examples: [
      { jp: "お金を払ってからでないと、商品を受け取れない。", vn: "Nếu chưa trả tiền thì không thể nhận hàng." },
      { jp: "親と相談してからでなければ、決められません。", vn: "Nếu chưa bàn với bố mẹ thì tôi không thể quyết định được." }
    ],
    quiz: {
      sentence: "手を洗っ________、ご飯を食べてはいけません。",
      answer: "てからでないと",
      accepts: ["てからでなければ"],
      hint: "Nếu chưa... thì không được",
      translation: "Nếu chưa rửa tay thì không được ăn cơm."
    }
  },
  {
    id: 46, unit: 5,
    pattern: "て以来",
    meaning: "Kể từ khi... (cho đến nay)",
    explanation: "Nhấn mạnh một trạng thái duy trì liên tục suốt từ thời điểm trong quá khứ đó cho đến tận bây giờ.",
    examples: [
      { jp: "日本に来て以来、毎日納豆を食べている。", vn: "Kể từ khi đến Nhật, ngày nào tôi cũng ăn natto." },
      { jp: "卒業して以来、彼とは一度も会っていない。", vn: "Kể từ khi tốt nghiệp, tôi chưa gặp lại anh ấy lần nào." }
    ],
    quiz: {
      sentence: "結婚し________、ずっとこの町に住んでいる。",
      answer: "て以来",
      accepts: ["ていらい", "以来", "いらい"],
      hint: "Kể từ khi (Kanji: 以来)",
      translation: "Kể từ khi kết hôn, tôi vẫn luôn sống ở thị trấn này."
    }
  },
  {
    id: 47, unit: 5,
    pattern: "一方だ",
    meaning: "Ngày càng... (chiều hướng liên tục)",
    explanation: "Chỉ một trạng thái đang phát triển liên tục theo một chiều hướng nào đó (thường dùng nhiều cho chiều hướng xấu).",
    examples: [
      { jp: "最近、物価は上がる一方だ。", vn: "Gần đây, vật giá ngày càng tăng." },
      { jp: "彼の病気は悪くなる一方だ。", vn: "Bệnh của anh ấy ngày càng trở nặng." }
    ],
    quiz: {
      sentence: "仕事が忙しくて、疲労はたまる________。",
      answer: "一方だ",
      accepts: ["いっぽうだ", "一方"],
      hint: "Ngày càng (chiều hướng xấu - Kanji: 一方)",
      translation: "Công việc bận rộn, mệt mỏi ngày càng tích tụ."
    }
  },
  {
    id: 48, unit: 5,
    pattern: "しかない / ほかない / よりない",
    meaning: "Chỉ còn cách... / Không còn cách nào khác",
    explanation: "Thể hiện sự đành chịu, không còn sự lựa chọn nào khác tốt hơn ngoài việc phải làm điều đó.",
    examples: [
      { jp: "終電を逃したので、歩いて帰るしかない。", vn: "Vì lỡ chuyến tàu cuối nên chỉ còn cách đi bộ về." },
      { jp: "誰にも頼めないから、自分でやるほかない。", vn: "Không thể nhờ ai được nên chỉ còn cách tự làm." }
    ],
    quiz: {
      sentence: "約束したのだから、行く________。",
      answer: "しかない",
      accepts: ["ほかない", "よりない", "よりほかない", "ほかしかたがない"],
      hint: "Chỉ còn cách...",
      translation: "Đã hứa rồi nên chỉ còn cách phải đi thôi."
    }
  },
  {
    id: 49, unit: 5,
    pattern: "はもちろん / もとより",
    meaning: "...thì đã đành / Không chỉ... mà còn",
    explanation: "Việc ở vế trước là điều đương nhiên không cần bàn cãi, và còn thêm cả vế sau nữa.",
    examples: [
      { jp: "彼は英語はもちろん、フランス語も話せる。", vn: "Anh ấy tiếng Anh thì đã đành, tiếng Pháp cũng nói được." },
      { jp: "この店は味はもとより、サービスも素晴らしい。", vn: "Quán này hương vị thì miễn bàn, dịch vụ cũng tuyệt vời." }
    ],
    quiz: {
      sentence: "復習________、予習も大切だ。",
      answer: "はもちろん",
      accepts: ["はもとより", "もとより"],
      hint: "...thì đã đành (đương nhiên)",
      translation: "Ôn tập thì đã đành, chuẩn bị bài trước cũng rất quan trọng."
    }
  },
  {
    id: 50, unit: 5,
    pattern: "ついでに",
    meaning: "Nhân tiện / Tiện thể",
    explanation: "Nhân cơ hội đang làm việc A thì làm luôn việc B.",
    examples: [
      { jp: "散歩のついでに、パンを買ってきた。", vn: "Nhân tiện đi dạo, tôi đã mua bánh mì về." },
      { jp: "掃除するついでに、窓も拭いた。", vn: "Nhân tiện dọn dẹp, tôi đã lau luôn cửa sổ." }
    ],
    quiz: {
      sentence: "買い物に行く________、郵便局に寄って。",
      answer: "ついでに",
      accepts: ["ついで"],
      hint: "Nhân tiện",
      translation: "Nhân tiện đi mua sắm thì ghé vào bưu điện giúp nhé."
    }
  },

  // --- UNIT 6 ---
  {
    id: 51, unit: 6,
    pattern: "ということだ",
    meaning: "Nghĩa là / Nghe nói là",
    explanation: "Dùng để truyền đạt lại thông tin nghe được, hoặc giải thích ý nghĩa của một sự việc.",
    examples: [
      { jp: "ニュースによると、明日雨が降るということだ。", vn: "Theo tin tức, nghe nói ngày mai trời sẽ mưa." },
      { jp: "禁煙というのは、タバコを吸ってはいけないということだ。", vn: "Cấm hút thuốc nghĩa là không được hút thuốc." }
    ],
    quiz: {
      sentence: "彼の話では、来年結婚する________。",
      answer: "ということだ",
      accepts: ["とのことだ"],
      hint: "Nghe nói là / Nghĩa là",
      translation: "Theo lời anh ấy nói, nghe đâu sang năm anh ấy sẽ kết hôn."
    }
  },
  {
    id: 52, unit: 6,
    pattern: "ことはない",
    meaning: "Không cần phải",
    explanation: "Khuyên bảo ai đó không cần thiết phải làm một việc gì đó.",
    examples: [
      { jp: "君が謝ることはないよ。", vn: "Cậu không cần phải xin lỗi đâu." },
      { jp: "時間は十分あるから、急ぐことはない。", vn: "Vẫn còn đủ thời gian nên không cần phải vội." }
    ],
    quiz: {
      sentence: "軽い風邪だから、心配する________。",
      answer: "ことはない",
      accepts: ["ことない"],
      hint: "Không cần phải",
      translation: "Chỉ là cảm nhẹ thôi nên không cần phải lo lắng."
    }
  },
  {
    id: 53, unit: 6,
    pattern: "こと",
    meaning: "Phải / Hãy",
    explanation: "Dùng để đưa ra mệnh lệnh, quy tắc, chỉ thị (thường thấy trên bảng nội quy, thông báo).",
    examples: [
      { jp: "明日、8時までに来ること。", vn: "Ngày mai phải đến trước 8 giờ." },
      { jp: "レポートは来週提出すること。", vn: "Phải nộp báo cáo vào tuần sau." }
    ],
    quiz: {
      sentence: "図書館では静かにする________。",
      answer: "こと",
      accepts: [],
      hint: "Phải (Mệnh lệnh / Nội quy)",
      translation: "Trong thư viện phải giữ im lặng."
    }
  },
  {
    id: 54, unit: 6,
    pattern: "ないことはない / もない",
    meaning: "Không phải là không...",
    explanation: "Thừa nhận một điều gì đó ở mức độ thấp, hoặc có thể làm được nhưng miễn cưỡng.",
    examples: [
      { jp: "納豆は食べられないことはないが、あまり好きではない。", vn: "Không phải là không ăn được natto, nhưng tôi không thích lắm." },
      { jp: "走れば、間に合わないこともない。", vn: "Nếu chạy thì không hẳn là không kịp." }
    ],
    quiz: {
      sentence: "お酒は飲め________が、弱いです。",
      answer: "ないことはない",
      accepts: ["ないこともない"],
      hint: "Không phải là không",
      translation: "Không phải là tôi không uống được rượu, nhưng tửu lượng kém."
    }
  },
  {
    id: 55, unit: 6,
    pattern: "もの（もん）",
    meaning: "Bởi vì...",
    explanation: "Dùng để đưa ra lý do cá nhân, mang tính chất biện bạch, làm nũng (thường dùng trong văn nói, phụ nữ/trẻ em hay dùng).",
    examples: [
      { jp: "「どうして食べないの？」「だって、美味しくないんだもん。」", vn: "\"Sao con không ăn?\" \"Tại vì không ngon mà.\"" },
      { jp: "まだ子供だもの、仕方がないよ。", vn: "Vì vẫn là trẻ con nên đành chịu thôi." }
    ],
    quiz: {
      sentence: "行きたくないよ。疲れたんだ________。",
      answer: "もの",
      accepts: ["もん"],
      hint: "Bởi vì (văn nói, biện bạch)",
      translation: "Tôi không muốn đi đâu. Tại vì mệt mà."
    }
  },
  {
    id: 56, unit: 6,
    pattern: "ものだから / もので",
    meaning: "Tại vì...",
    explanation: "Đưa ra lý do khách quan, mang tính chất phân trần, thanh minh để mong được thông cảm.",
    examples: [
      { jp: "電車が遅れたものだから、遅刻してしまいました。", vn: "Tại vì tàu trễ nên tôi đã bị muộn." },
      { jp: "初めてなもので、よくわかりません。", vn: "Vì là lần đầu tiên nên tôi không rành lắm." }
    ],
    quiz: {
      sentence: "道が混んでいた________、遅れてすみません。",
      answer: "ものだから",
      accepts: ["もので", "もんだから"],
      hint: "Tại vì (phân trần, thanh minh)",
      translation: "Tại vì tắc đường nên xin lỗi tôi đến muộn."
    }
  },
  {
    id: 57, unit: 6,
    pattern: "ものか",
    meaning: "Tuyệt đối không / Lẽ nào lại...",
    explanation: "Phủ định mạnh mẽ một sự việc, thể hiện cảm xúc tức giận hoặc kiên quyết không làm.",
    examples: [
      { jp: "あんな店、二度と行くものか。", vn: "Cái quán đó, tuyệt đối không đi lần hai đâu." },
      { jp: "彼が本当のことを言うものか。", vn: "Lẽ nào anh ta lại nói sự thật sao? (Tuyệt đối không)" }
    ],
    quiz: {
      sentence: "あんな人に、二度と会う________！",
      answer: "ものか",
      accepts: ["もんか"],
      hint: "Tuyệt đối không / Lẽ nào lại",
      translation: "Người như vậy, tôi tuyệt đối không gặp lại lần hai đâu!"
    }
  },
  {
    id: 58, unit: 6,
    pattern: "たところ",
    meaning: "Sau khi thử làm... thì (nhận ra)",
    explanation: "Nhấn mạnh kết quả nhận được hoặc điều bất ngờ phát hiện ra sau khi thực hiện một hành động.",
    examples: [
      { jp: "先生に聞いたところ、明日テストがあるそうだ。", vn: "Sau khi hỏi thầy giáo thì nghe nói ngày mai có bài kiểm tra." },
      { jp: "久しぶりに体重を測ったところ、5キロも太っていた。", vn: "Lâu rồi mới cân thử, kết quả là đã béo lên 5kg." }
    ],
    quiz: {
      sentence: "病院で検査し________、病気が見つかった。",
      answer: "たところ",
      accepts: [],
      hint: "Sau khi thử làm... thì (kết quả)",
      translation: "Sau khi kiểm tra ở bệnh viện thì phát hiện ra bệnh."
    }
  },
  {
    id: 59, unit: 6,
    pattern: "ところに / へ / を / で",
    meaning: "Đúng lúc / Ngay lúc",
    explanation: "Diễn tả đúng vào thời điểm một hành động đang diễn ra thì có sự việc khác xen vào.",
    examples: [
      { jp: "出かけようとしたところに、電話がかかってきた。", vn: "Đúng lúc định ra ngoài thì có điện thoại." },
      { jp: "お忙しいところをすみません。", vn: "Xin lỗi vì làm phiền đúng lúc anh đang bận." }
    ],
    quiz: {
      sentence: "寝ている________、地震が起きた。",
      answer: "ところに",
      accepts: ["ところ", "ところへ"],
      hint: "Đúng lúc (thời điểm)",
      translation: "Đúng lúc đang ngủ thì xảy ra động đất."
    }
  },
  {
    id: 60, unit: 6,
    pattern: "ところだった",
    meaning: "Suýt nữa thì",
    explanation: "Chỉ một việc tồi tệ suýt chút nữa thì đã xảy ra (thường đi với もう少しで, 危なく).",
    examples: [
      { jp: "もう少しで車にぶつかるところだった。", vn: "Suýt chút nữa thì bị xe tông." },
      { jp: "危なく階段から落ちるところだった。", vn: "Nguy hiểm thật, suýt nữa thì ngã cầu thang." }
    ],
    quiz: {
      sentence: "もう少しで遅刻する________。",
      answer: "ところだった",
      accepts: [],
      hint: "Suýt nữa thì",
      translation: "Suýt chút nữa thì bị đi muộn."
    }
  },
  {
    id: 61, unit: 6,
    pattern: "ほど",
    meaning: "Đến mức / Khoảng",
    explanation: "Diễn tả mức độ của một trạng thái (giống với くらい nhưng thường ở mức độ cao hơn).",
    examples: [
      { jp: "死ぬほど疲れた。", vn: "Mệt đến mức muốn chết." },
      { jp: "泣きたいほど痛い。", vn: "Đau đến mức muốn khóc." }
    ],
    quiz: {
      sentence: "食べられない________料理が山のようにある。",
      answer: "ほど",
      accepts: ["くらい", "ぐらい"],
      hint: "Đến mức (Mức độ cao)",
      translation: "Có nhiều đồ ăn đến mức ăn không nổi, chất cao như núi."
    }
  },
  {
    id: 62, unit: 6,
    pattern: "ば〜ほど",
    meaning: "Càng... càng...",
    explanation: "Chỉ sự phát triển đồng thời của hai vế.",
    examples: [
      { jp: "日本語は、勉強すればするほど難しくなる。", vn: "Tiếng Nhật, càng học càng thấy khó." },
      { jp: "スーパーは家から近ければ近いほど便利だ。", vn: "Siêu thị càng gần nhà càng tiện." }
    ],
    quiz: {
      sentence: "考えれ________考えるほど、わからなくなる。",
      answer: "ば",
      accepts: [],
      hint: "Đi cặp với ほど tạo nghĩa 'Càng... càng'",
      translation: "Càng suy nghĩ thì càng không hiểu."
    }
  },
  {
    id: 63, unit: 6,
    pattern: "ほど〜はない",
    meaning: "Không có gì... bằng",
    explanation: "Dùng để so sánh nhất, đánh giá chủ quan rằng một sự vật/sự việc là nhất.",
    examples: [
      { jp: "彼女ほど優しい人はいない。", vn: "Không có người nào hiền bằng cô ấy." },
      { jp: "家族といる時ほど楽しい時間はない。", vn: "Không có thời gian nào vui bằng lúc ở bên gia đình." }
    ],
    quiz: {
      sentence: "今年の夏________暑い年はない。",
      answer: "ほど",
      accepts: ["くらい", "ぐらい"],
      hint: "Không có gì... bằng (So sánh nhất)",
      translation: "Không có năm nào nóng bằng mùa hè năm nay."
    }
  },

  // --- UNIT 7 ---
  {
    id: 64, unit: 7,
    pattern: "など / なんか / なんて",
    meaning: "Như là... / Cỡ như...",
    explanation: "Dùng để đưa ra ví dụ, hoặc mang sắc thái khiêm tốn (hạ thấp bản thân) / coi thường (hạ thấp người khác hoặc sự việc).",
    examples: [
      { jp: "お茶なんか飲みませんか。", vn: "Bạn có muốn uống chút gì đó như trà không?" },
      { jp: "私なんて、まだまだです。", vn: "Cỡ như tôi thì vẫn còn kém lắm." }
    ],
    quiz: {
      sentence: "幽霊________いるわけがない。",
      answer: "なんて",
      accepts: ["なんか", "など"],
      hint: "Cỡ như / Ba cái thứ như (nhấn mạnh sự phủ định)",
      translation: "Mấy thứ như ma quỷ không thể nào tồn tại được."
    }
  },
  {
    id: 65, unit: 7,
    pattern: "などと(なんて)言う/思う",
    meaning: "Nói / Nghĩ rằng (cái thứ như là...)",
    explanation: "Trích dẫn lại lời nói hoặc suy nghĩ kèm theo thái độ ngạc nhiên, coi thường hoặc khiêm tốn.",
    examples: [
      { jp: "彼が犯人だなんて、信じられない。", vn: "Thật không thể tin được chuyện anh ta là thủ phạm." },
      { jp: "できないなどと言ってはいけない。", vn: "Không được nói những lời như là không thể làm được." }
    ],
    quiz: {
      sentence: "自分が天才だ________思っていない。",
      answer: "なんて",
      accepts: ["などと"],
      hint: "Nghĩ rằng cái điều như là...",
      translation: "Tôi chưa từng nghĩ mình là thiên tài hay gì cả."
    }
  },
  {
    id: 66, unit: 7,
    pattern: "からには",
    meaning: "Một khi đã... thì phải...",
    explanation: "Bởi vì đã đến tình trạng đó, hoặc đã quyết định như vậy nên có nghĩa vụ/quyết tâm phải làm đến cùng.",
    examples: [
      { jp: "約束したからには、守らなければならない。", vn: "Một khi đã hứa thì phải giữ lời." },
      { jp: "試合に出るからには、勝ちたい。", vn: "Một khi đã tham gia thi đấu thì tôi muốn thắng." }
    ],
    quiz: {
      sentence: "日本に留学する________、N1に合格したい。",
      answer: "からには",
      accepts: [],
      hint: "Một khi đã (thể hiện quyết tâm)",
      translation: "Một khi đã du học Nhật Bản thì tôi muốn thi đỗ N1."
    }
  },
  {
    id: 67, unit: 7,
    pattern: "きる",
    meaning: "Hoàn thành / Làm đến cùng / Vô cùng...",
    explanation: "Làm xong toàn bộ sự việc không còn sót lại gì (V bỏ masu + きる) hoặc đạt đến giới hạn tối đa (疲れきる - mệt rã rời).",
    examples: [
      { jp: "この小説は一日で読みきった。", vn: "Cuốn tiểu thuyết này tôi đã đọc xong hết trong một ngày." },
      { jp: "疲れきって、一歩も歩けない。", vn: "Mệt kiệt sức, không thể bước thêm một bước nào nữa." }
    ],
    quiz: {
      sentence: "たくさんあって、一人では食べ________ない。",
      answer: "きれ",
      accepts: ["きれない"],
      hint: "Hoàn thành / Hết (chia ở thể khả năng phủ định)",
      translation: "Nhiều quá, một mình tôi không thể ăn hết được."
    }
  },
  {
    id: 68, unit: 7,
    pattern: "ぎみ",
    meaning: "Có vẻ... / Hơi...",
    explanation: "Cảm thấy có triệu chứng, chiều hướng như thế (thường dùng cho tình trạng sức khỏe, tâm trạng không tốt).",
    examples: [
      { jp: "最近、風邪ぎみで調子が悪い。", vn: "Gần đây tôi hơi cảm nên người thấy mệt." },
      { jp: "彼は最近、少し太りぎみだ。", vn: "Gần đây anh ấy có vẻ hơi béo lên." }
    ],
    quiz: {
      sentence: "最近、寝不足________で頭が痛い。",
      answer: "ぎみ",
      accepts: ["気味"],
      hint: "Có vẻ / Hơi (Kanji: 気味)",
      translation: "Gần đây do hơi thiếu ngủ nên tôi bị đau đầu."
    }
  },
  {
    id: 69, unit: 7,
    pattern: "がち",
    meaning: "Thường hay... / Dễ...",
    explanation: "Chỉ tần suất xảy ra một tình trạng nào đó nhiều lần (mang ý nghĩa tiêu cực).",
    examples: [
      { jp: "彼は最近、学校を休みがちだ。", vn: "Gần đây anh ấy hay nghỉ học." },
      { jp: "子供のころは、病気がちだった。", vn: "Hồi nhỏ tôi rất hay ốm đau." }
    ],
    quiz: {
      sentence: "冬は曇りの日が続き________だ。",
      answer: "がち",
      accepts: [],
      hint: "Thường hay / Dễ (xu hướng tiêu cực)",
      translation: "Mùa đông thường hay kéo dài những ngày nhiều mây."
    }
  },
  {
    id: 70, unit: 7,
    pattern: "向き",
    meaning: "Phù hợp với...",
    explanation: "Bản chất, tính chất của sự vật/sự việc đó vốn dĩ thích hợp với một đối tượng nào đó.",
    examples: [
      { jp: "この映画は子供向きだ。", vn: "Bộ phim này phù hợp với trẻ em." },
      { jp: "この仕事は体力が必要なので、若い人向きだ。", vn: "Công việc này cần thể lực nên hợp với người trẻ." }
    ],
    quiz: {
      sentence: "この服のデザインは、若い人________だ。",
      answer: "向き",
      accepts: ["むき"],
      hint: "Phù hợp với (Kanji: 向き)",
      translation: "Thiết kế của bộ đồ này phù hợp với người trẻ tuổi."
    }
  },
  {
    id: 71, unit: 7,
    pattern: "向け",
    meaning: "Dành cho... / Hướng tới...",
    explanation: "Người làm cố tình thiết kế, sản xuất ra để đặc biệt dành riêng cho một đối tượng cụ thể.",
    examples: [
      { jp: "これは外国人向けに書かれた本だ。", vn: "Đây là cuốn sách được viết dành cho người nước ngoài." },
      { jp: "女性向けのマンションが売れている。", vn: "Căn hộ dành cho phái nữ đang bán rất chạy." }
    ],
    quiz: {
      sentence: "この料理は、子供________に辛くなくしてある。",
      answer: "向け",
      accepts: ["むけ"],
      hint: "Dành cho / Hướng tới (Kanji: 向け)",
      translation: "Món ăn này được làm không cay để dành cho trẻ em."
    }
  },
  {
    id: 72, unit: 7,
    pattern: "を通じ(て) / 通し(て)",
    meaning: "Thông qua / Trong suốt...",
    explanation: "Làm việc gì đó thông qua một trung gian, phương tiện, hoặc duy trì một trạng thái trong suốt một khoảng thời gian.",
    examples: [
      { jp: "社長の秘書を通じて、面会を求めた。", vn: "Tôi đã yêu cầu gặp mặt thông qua thư ký của giám đốc." },
      { jp: "この町は一年を通じて暖かい。", vn: "Thị trấn này ấm áp trong suốt cả năm." }
    ],
    quiz: {
      sentence: "友人の紹介________、彼女と知り合った。",
      answer: "を通じて",
      accepts: ["をとおして", "を通して", "を通じ"],
      hint: "Thông qua (trung gian là bạn bè)",
      translation: "Tôi đã quen biết cô ấy thông qua sự giới thiệu của một người bạn."
    }
  },
  {
    id: 73, unit: 7,
    pattern: "っぽい",
    meaning: "Có vẻ... / Giống như... / Hay...",
    explanation: "Cảm thấy giống như là tính chất đó (子供っぽい - như trẻ con), hoặc có xu hướng dễ bị làm sao đó (怒りっぽい - hay cáu, 忘れっぽい - hay quên).",
    examples: [
      { jp: "彼は大人なのに、子供っぽいところがある。", vn: "Anh ta là người lớn rồi mà có những nét như trẻ con." },
      { jp: "年をとると、忘れっぽくなる。", vn: "Khi có tuổi, người ta hay trở nên đãng trí." }
    ],
    quiz: {
      sentence: "あの人は怒り________から、気をつけたほうがいい。",
      answer: "っぽい",
      accepts: [],
      hint: "Hay... / Có xu hướng dễ bị...",
      translation: "Người đó hay cáu gắt lắm nên chú ý thì hơn."
    }
  },
  {
    id: 74, unit: 7,
    pattern: "とともに",
    meaning: "Cùng với... / Đồng thời với...",
    explanation: "Thực hiện hành động cùng với ai đó (AとBとともに), hoặc khi một sự việc thay đổi sẽ diễn ra đồng thời cùng với sự thay đổi của việc khác.",
    examples: [
      { jp: "家族とともに日本へ来た。", vn: "Tôi đã đến Nhật Bản cùng với gia đình." },
      { jp: "年をとるとともに、体力が落ちる。", vn: "Cùng với việc tuổi già đi, thể lực cũng giảm sút." }
    ],
    quiz: {
      sentence: "春の訪れ________、花が咲き始めた。",
      answer: "とともに",
      accepts: ["と共に"],
      hint: "Cùng với (sự biến đổi đồng thời)",
      translation: "Cùng với việc mùa xuân đến, hoa cũng bắt đầu nở."
    }
  },
  {
    id: 75, unit: 7,
    pattern: "にともなって / ともない",
    meaning: "Cùng với... / Kéo theo...",
    explanation: "Sự thay đổi của A kéo theo sự thay đổi của B. Thường dùng trong văn viết, mô tả sự thay đổi mang tính quy mô lớn, xã hội.",
    examples: [
      { jp: "人口の増加にともなって、色々な問題が起きた。", vn: "Cùng với sự gia tăng dân số, nhiều vấn đề đã phát sinh." },
      { jp: "経済の発展にともない、環境が破壊された。", vn: "Kéo theo sự phát triển kinh tế, môi trường đã bị tàn phá." }
    ],
    quiz: {
      sentence: "台風の接近________、風が強くなってきた。",
      answer: "にともなって",
      accepts: ["に伴って", "にともない", "に伴い"],
      hint: "Kéo theo / Cùng với sự... (Kanji: 伴う)",
      translation: "Cùng với việc bão đang đến gần, gió đã bắt đầu thổi mạnh."
    }
  },

  // --- UNIT 8 ---
  {
    id: 76, unit: 8,
    pattern: "に決まっている",
    meaning: "Chắc chắn là / Nhất định là",
    explanation: "Thể hiện sự phán đoán mang tính chủ quan, đinh ninh là chắc chắn sự việc sẽ như thế.",
    examples: [
      { jp: "相手はプロなんだから、私たちが負けるに決まっている。", vn: "Đối thủ là dân chuyên nghiệp nên chắc chắn chúng ta sẽ thua." },
      { jp: "あんなに勉強したのだから、合格するに決まっている。", vn: "Học nhiều đến thế cơ mà, nhất định sẽ đỗ." }
    ],
    quiz: {
      sentence: "あんなに高いカメラ、私に買える________。",
      answer: "に決まっている",
      accepts: ["にきまっている"],
      hint: "Chắc chắn là (có thể chia phủ định ngầm ở trước)",
      translation: "Cái máy ảnh đắt đến thế, chắc chắn là tôi không mua nổi rồi."
    }
  },
  {
    id: 77, unit: 8,
    pattern: "っけ",
    meaning: "Có phải... đúng không? / ...ấy nhỉ",
    explanation: "Dùng khi hỏi lại để xác nhận một điều mà mình không nhớ rõ, hoặc tự hỏi bản thân mình.",
    examples: [
      { jp: "今日は何曜日だっけ。", vn: "Hôm nay là thứ mấy ấy nhỉ?" },
      { jp: "テストは明日だっけ。", vn: "Bài kiểm tra là ngày mai có phải không nhỉ?" }
    ],
    quiz: {
      sentence: "あの人の名前、何だ________。",
      answer: "っけ",
      accepts: ["だっけ"],
      hint: "...ấy nhỉ",
      translation: "Tên của người kia là gì ấy nhỉ."
    }
  },
  {
    id: 78, unit: 8,
    pattern: "ように",
    meaning: "Để / Mong sao...",
    explanation: "Chỉ mục đích (để có thể...) hoặc dùng khi cầu nguyện, mong mỏi một điều gì đó.",
    examples: [
      { jp: "忘れないように、メモをしておく。", vn: "Ghi chú lại để không bị quên." },
      { jp: "試験に合格しますように。", vn: "Mong sao sẽ đỗ kỳ thi." }
    ],
    quiz: {
      sentence: "風邪を引かない________、コートを着る。",
      answer: "ように",
      accepts: [],
      hint: "Để (không bị...)",
      translation: "Tôi mặc áo khoác để không bị cảm."
    }
  },
  {
    id: 79, unit: 8,
    pattern: "ようがない",
    meaning: "Không có cách nào để...",
    explanation: "Cho dù muốn làm cũng không thể làm được vì không có phương pháp, cách thức.",
    examples: [
      { jp: "電話番号も住所もわからないので、連絡しようがない。", vn: "Không biết cả số điện thoại lẫn địa chỉ nên không có cách nào liên lạc được." },
      { jp: "こんなに壊れていては、直しようがない。", vn: "Hỏng nặng thế này thì hết cách sửa." }
    ],
    quiz: {
      sentence: "携帯を落としたので、彼に連絡し________。",
      answer: "ようがない",
      accepts: ["ようもない"],
      hint: "Không có cách nào (V-masu + ようがない)",
      translation: "Vì làm rơi điện thoại rồi nên không có cách nào liên lạc với anh ấy."
    }
  },
  {
    id: 80, unit: 8,
    pattern: "はずだ",
    meaning: "Chắc chắn là / Thảo nào",
    explanation: "Phán đoán chắc chắn dựa trên một lý do, căn cứ khách quan hợp lý.",
    examples: [
      { jp: "彼は日本に10年住んでいたから、日本語が上手なはずだ。", vn: "Anh ấy đã sống ở Nhật 10 năm nên tiếng Nhật chắc chắn là giỏi." },
      { jp: "ドアが開かない。鍵がかかっているはずだ。", vn: "Cửa không mở được. Chắc chắn là đang bị khóa." }
    ],
    quiz: {
      sentence: "薬を飲んだから、もう熱は下がる________。",
      answer: "はずだ",
      accepts: ["はず"],
      hint: "Chắc chắn là (dựa trên căn cứ)",
      translation: "Đã uống thuốc rồi nên chắc chắn là nhiệt độ sẽ giảm."
    }
  },
  {
    id: 81, unit: 8,
    pattern: "わけだ",
    meaning: "Thảo nào / Vì thế nên / Nghĩa là...",
    explanation: "Rút ra kết luận hợp lý từ lý do đã biết, hoặc dùng để hiểu ra vấn đề (thảo nào).",
    examples: [
      { jp: "夜更かししたから、今日は眠いわけだ。", vn: "Thức khuya nên hôm nay buồn ngủ là phải (thảo nào)." },
      { jp: "消費税が上がったから、物価も高くなるわけだ。", vn: "Thuế tiêu dùng tăng nên vật giá đắt lên cũng là điều hiển nhiên." }
    ],
    quiz: {
      sentence: "毎日10時間勉強しているんですか。成績がいい________。",
      answer: "わけだ",
      accepts: ["訳だ", "わけですね"],
      hint: "Thảo nào... / Hèn chi...",
      translation: "Mỗi ngày học 10 tiếng cơ à. Thảo nào thành tích tốt thế."
    }
  },
  {
    id: 82, unit: 8,
    pattern: "わけがない",
    meaning: "Tuyệt đối không / Lẽ nào lại...",
    explanation: "Phủ định mạnh mẽ một sự việc, cho rằng điều đó là không thể nào xảy ra.",
    examples: [
      { jp: "こんな難しい問題、私にわかるわけがない。", vn: "Vấn đề khó thế này, tôi tuyệt đối không thể nào hiểu nổi." },
      { jp: "彼がそんな嘘をつくわけがない。", vn: "Lẽ nào anh ấy lại nói dối như vậy." }
    ],
    quiz: {
      sentence: "勉強していないのだから、テストに受かる________。",
      answer: "わけがない",
      accepts: ["訳がない"],
      hint: "Tuyệt đối không / Không thể nào",
      translation: "Không học hành gì cả nên không thể nào đỗ bài kiểm tra được."
    }
  },
  {
    id: 83, unit: 8,
    pattern: "わけではない",
    meaning: "Không hẳn là / Không có nghĩa là",
    explanation: "Phủ định một phần, dùng để đính chính lại một nhận định có vẻ hiển nhiên nhưng không hoàn toàn đúng.",
    examples: [
      { jp: "嫌いなわけではないが、あまり食べたくない。", vn: "Không hẳn là ghét nhưng mà tôi không muốn ăn lắm." },
      { jp: "日本人が皆、刺身が好きなわけではない。", vn: "Không có nghĩa là người Nhật nào cũng thích sashimi." }
    ],
    quiz: {
      sentence: "お金があれば幸せという________。",
      answer: "わけではない",
      accepts: ["訳ではない", "わけじゃない", "訳じゃない"],
      hint: "Không hẳn là / Không có nghĩa là",
      translation: "Không có nghĩa là có tiền thì sẽ hạnh phúc."
    }
  },
  {
    id: 84, unit: 8,
    pattern: "わけにはいかない",
    meaning: "Không thể...",
    explanation: "Không thể làm việc gì đó vì lý do đạo đức, trách nhiệm, lương tâm hoặc tình huống xã hội.",
    examples: [
      { jp: "明日は大事なテストがあるから、遊ぶわけにはいかない。", vn: "Ngày mai có bài kiểm tra quan trọng nên tôi không thể đi chơi được." },
      { jp: "熱があるが、今日は休むわけにはいかない。", vn: "Tuy bị sốt nhưng hôm nay không thể nghỉ được." }
    ],
    quiz: {
      sentence: "絶対に秘密にすると約束したから、話す________。",
      answer: "わけにはいかない",
      accepts: ["訳にはいかない"],
      hint: "Không thể (vì lý do trách nhiệm/đạo đức)",
      translation: "Đã hứa là tuyệt đối giữ bí mật nên không thể nói ra được."
    }
  },
  {
    id: 85, unit: 8,
    pattern: "ないわけにはいかない",
    meaning: "Không thể không / Buộc phải",
    explanation: "Phủ định 2 lần, mang ý nghĩa bắt buộc phải làm vì trách nhiệm đạo đức, phép tắc xã hội.",
    examples: [
      { jp: "親友の結婚式だから、行かないわけにはいかない。", vn: "Vì là đám cưới của bạn thân nên tôi không thể không đi." },
      { jp: "社長のおごりだから、飲まないわけにはいかない。", vn: "Vì giám đốc bao nên không thể không uống." }
    ],
    quiz: {
      sentence: "先輩に頼まれた仕事だから、やら________。",
      answer: "ないわけにはいかない",
      accepts: ["ない訳にはいかない"],
      hint: "Không thể không / Buộc phải",
      translation: "Vì là công việc được tiền bối nhờ nên không thể không làm."
    }
  },

  // --- UNIT 9 ---
  {
    id: 86, unit: 9,
    pattern: "かわり(に)",
    meaning: "Thay vì / Đổi lại",
    explanation: "Làm việc này thay cho việc khác, hoặc làm một việc để bù đắp, đổi lại cho một việc khác.",
    examples: [
      { jp: "映画に行くかわりに、家でDVDを見た。", vn: "Thay vì đi xem phim, tôi đã xem DVD ở nhà." },
      { jp: "手伝ってもらうかわりに、昼ご飯をごちそうする。", vn: "Đổi lại việc được giúp đỡ, tôi sẽ bao bữa trưa." }
    ],
    quiz: {
      sentence: "日曜日に働く________、月曜日に休む。",
      answer: "かわりに",
      accepts: ["代わりに", "かわり", "代わり"],
      hint: "Thay vì / Đổi lại (Kanji: 代わり)",
      translation: "Đổi lại việc đi làm vào Chủ nhật, tôi sẽ nghỉ vào thứ Hai."
    }
  },
  {
    id: 87, unit: 9,
    pattern: "にかわって / かわり",
    meaning: "Thay cho (ai đó / cái gì đó)",
    explanation: "Đại diện, làm thay một việc mà vốn dĩ người khác hoặc vật khác thường làm.",
    examples: [
      { jp: "社長にかわって、私がご挨拶申し上げます。", vn: "Thay mặt giám đốc, tôi xin gửi lời chào." },
      { jp: "野球にかわり、サッカーが人気になっている。", vn: "Thay cho bóng chày, bóng đá đang trở nên được yêu thích." }
    ],
    quiz: {
      sentence: "病気の母________、私が料理を作った。",
      answer: "にかわって",
      accepts: ["に代わって", "にかわり", "に代わり"],
      hint: "Thay cho (Đại diện làm thay)",
      translation: "Thay cho người mẹ đang ốm, tôi đã nấu ăn."
    }
  },
  {
    id: 88, unit: 9,
    pattern: "こそ",
    meaning: "Chính là / Nhất định là",
    explanation: "Nhấn mạnh vào từ đứng trước nó, loại bỏ các khả năng khác.",
    examples: [
      { jp: "今年こそN3に合格したい。", vn: "Chính năm nay tôi muốn thi đỗ N3." },
      { jp: "あなたこそ、私の探していた人だ。", vn: "Em chính là người mà anh đang tìm kiếm." }
    ],
    quiz: {
      sentence: "明日________、絶対に遅刻しない。",
      answer: "こそ",
      accepts: [],
      hint: "Chính là (Nhấn mạnh)",
      translation: "Chính ngày mai, tuyệt đối tôi sẽ không đến muộn."
    }
  },
  {
    id: 89, unit: 9,
    pattern: "さえ",
    meaning: "Ngay cả / Thậm chí",
    explanation: "Đưa ra một ví dụ cực đoan, mang ý nghĩa 'đến cái đó còn như thế, huống chi những cái khác'.",
    examples: [
      { jp: "ひらがなさえ書けない。", vn: "Ngay cả hiragana tôi cũng không viết được." },
      { jp: "この問題は、子供でさえわかる。", vn: "Vấn đề này, ngay cả trẻ con cũng hiểu." }
    ],
    quiz: {
      sentence: "忙しすぎて、寝る時間________ない。",
      answer: "さえ",
      accepts: [],
      hint: "Ngay cả / Thậm chí",
      translation: "Quá bận rộn, đến cả thời gian ngủ cũng không có."
    }
  },
  {
    id: 90, unit: 9,
    pattern: "として",
    meaning: "Với tư cách là / Như là",
    explanation: "Chỉ tư cách, lập trường, vai trò hoặc danh nghĩa của một người hay sự vật.",
    examples: [
      { jp: "彼は留学生として日本へ来た。", vn: "Anh ấy đến Nhật Bản với tư cách là du học sinh." },
      { jp: "この建物は、昔はお寺として使われていた。", vn: "Tòa nhà này ngày xưa được dùng như một ngôi chùa." }
    ],
    quiz: {
      sentence: "彼は先生________この学校で働いている。",
      answer: "として",
      accepts: [],
      hint: "Với tư cách là",
      translation: "Anh ấy làm việc ở trường này với tư cách là giáo viên."
    }
  },
  {
    id: 91, unit: 9,
    pattern: "からといって",
    meaning: "Chỉ vì... mà (không hẳn...)",
    explanation: "Dù có lý do đó đi chăng nữa, thì kết luận phía sau cũng không hẳn là như mong đợi (thường đi với phủ định một phần ở vế sau).",
    examples: [
      { jp: "日本人だからといって、漢字が全部書けるわけではない。", vn: "Không phải cứ là người Nhật thì có thể viết được hết Kanji." },
      { jp: "便利だからといって、使いすぎるのはよくない。", vn: "Chỉ vì tiện lợi mà lạm dụng quá thì cũng không tốt." }
    ],
    quiz: {
      sentence: "お金がある________、幸せだとは限らない。",
      answer: "からといって",
      accepts: ["からって"],
      hint: "Chỉ vì... mà (không hẳn)",
      translation: "Không hẳn cứ có tiền là sẽ hạnh phúc."
    }
  },
  {
    id: 92, unit: 9,
    pattern: "に反し(て)",
    meaning: "Trái với",
    explanation: "Trái ngược với dự đoán, kỳ vọng, hy vọng hoặc quy tắc.",
    examples: [
      { jp: "みんなの予想に反して、Aチームが優勝した。", vn: "Trái với dự đoán của mọi người, đội A đã giành vô địch." },
      { jp: "親の期待に反して、彼は大学をやめてしまった。", vn: "Trái với kỳ vọng của cha mẹ, anh ấy đã bỏ đại học." }
    ],
    quiz: {
      sentence: "天気予報________、雨が降った。",
      answer: "に反して",
      accepts: ["に反し"],
      hint: "Trái với (Dự đoán, kỳ vọng)",
      translation: "Trái với dự báo thời tiết, trời đã mưa."
    }
  },
  {
    id: 93, unit: 9,
    pattern: "にもとづいて / もとづき",
    meaning: "Dựa trên (cơ sở / dữ liệu)",
    explanation: "Dựa trên những cơ sở chuẩn mực rõ ràng như dữ liệu, luật lệ, kết quả điều tra để thực hiện hành động.",
    examples: [
      { jp: "調査結果にもとづいて、レポートを書いた。", vn: "Tôi đã viết báo cáo dựa trên kết quả điều tra." },
      { jp: "法律にもとづき、決定される。", vn: "Được quyết định dựa trên luật pháp." }
    ],
    quiz: {
      sentence: "この計画は、データ________作られている。",
      answer: "にもとづいて",
      accepts: ["に基づいて", "にもとづき", "に基づき"],
      hint: "Dựa trên (Dữ liệu/Cơ sở - Kanji: 基づく)",
      translation: "Kế hoạch này được lập ra dựa trên dữ liệu."
    }
  },
  {
    id: 94, unit: 9,
    pattern: "をもとに(して)",
    meaning: "Dựa trên (chất liệu / ý tưởng)",
    explanation: "Lấy một sự thật, một câu chuyện, kinh nghiệm làm chất liệu, nguồn cảm hứng để sáng tạo ra một cái mới.",
    examples: [
      { jp: "この映画は事実をもとにして作られた。", vn: "Bộ phim này được làm dựa trên sự thật." },
      { jp: "日本の漫画をもとにしたゲームが多い。", vn: "Có rất nhiều game được tạo ra dựa trên manga của Nhật Bản." }
    ],
    quiz: {
      sentence: "この小説は、作者の経験________書かれた。",
      answer: "をもとにして",
      accepts: ["をもとに"],
      hint: "Dựa trên (Tư liệu sáng tác - Kanji: 基に)",
      translation: "Cuốn tiểu thuyết này được viết dựa trên kinh nghiệm của tác giả."
    }
  },
  {
    id: 95, unit: 9,
    pattern: "反面 / 半面",
    meaning: "Mặt khác / Ngược lại",
    explanation: "Diễn tả cùng một sự vật, sự việc nhưng lại tồn tại hai mặt trái ngược nhau.",
    examples: [
      { jp: "都会の生活は便利な反面、ストレスも多い。", vn: "Cuộc sống ở đô thị một mặt thì tiện lợi, nhưng mặt khác cũng nhiều căng thẳng." },
      { jp: "彼は優しい反面、怒ると怖い。", vn: "Anh ấy hiền lành nhưng ngược lại, khi nổi giận lại rất đáng sợ." }
    ],
    quiz: {
      sentence: "この薬はよく効く________、副作用もある。",
      answer: "反面",
      accepts: ["半面", "はんめん"],
      hint: "Mặt khác (2 mặt của 1 vấn đề)",
      translation: "Loại thuốc này có hiệu quả tốt, nhưng mặt khác cũng có tác dụng phụ."
    }
  },
  {
    id: 96, unit: 9,
    pattern: "れる / られる (自発)",
    meaning: "Tự nhiên cảm thấy / Gợi nhớ đến",
    explanation: "Dùng thể bị động để diễn tả một cảm xúc, ý nghĩ tự nhiên nảy sinh trong lòng mà không cố ý.",
    examples: [
      { jp: "この写真を見ると、昔のことが思い出される。", vn: "Nhìn bức ảnh này, tôi lại tự nhiên nhớ về ngày xưa." },
      { jp: "彼の将来が案じられる。", vn: "Tôi cứ cảm thấy lo lắng cho tương lai của anh ấy." }
    ],
    quiz: {
      sentence: "この歌を聞くと、昔のことが思い________。",
      answer: "出される",
      accepts: ["だされる"],
      hint: "Tự nhiên nhớ đến (Thể bị động của 思い出す)",
      translation: "Nghe bài hát này, chuyện ngày xưa lại ùa về."
    }
  },
  {
    id: 97, unit: 9,
    pattern: "てたまらない",
    meaning: "Rất... không chịu nổi",
    explanation: "Nhấn mạnh cảm giác cơ thể hoặc tâm lý mạnh mẽ đến mức bản thân không thể kiềm chế được.",
    examples: [
      { jp: "今日は暑くてたまらない。", vn: "Hôm nay nóng không chịu nổi." },
      { jp: "新しいゲームが欲しくてたまらない。", vn: "Tôi muốn có trò chơi mới đến mức không chịu nổi." }
    ],
    quiz: {
      sentence: "喉が渇い________、冷たい水が飲みたい。",
      answer: "てたまらない",
      accepts: [],
      hint: "Rất... không chịu nổi (Cảm giác cơ thể)",
      translation: "Khát khô cả cổ không chịu nổi, tôi muốn uống nước lạnh."
    }
  },
  {
    id: 98, unit: 9,
    pattern: "てならない",
    meaning: "Rất... (Tự nhiên cảm thấy)",
    explanation: "Cảm xúc tự nhiên dâng trào không kìm nén được (thường dùng cho các cảm xúc tiêu cực như lo lắng, hối tiếc). Văn phong trang trọng hơn てたまらない.",
    examples: [
      { jp: "国の家族のことが心配でならない。", vn: "Tôi vô cùng lo lắng cho gia đình ở quê." },
      { jp: "試合に負けたことが残念でならない。", vn: "Thật vô cùng đáng tiếc khi bị thua trong trận đấu." }
    ],
    quiz: {
      sentence: "面接の結果が気になっ________。",
      answer: "てならない",
      accepts: [],
      hint: "Vô cùng... (Cảm xúc tự nhiên sinh ra, trang trọng)",
      translation: "Tôi vô cùng bận tâm về kết quả của buổi phỏng vấn."
    }
  },

  // --- UNIT 10 ---
  {
    id: 99, unit: 10,
    pattern: "とか",
    meaning: "Ví dụ như là / Hay là",
    explanation: "Dùng để liệt kê một vài ví dụ, mang tính chất gợi ý hoặc khi người nói không muốn khẳng định chắc chắn.",
    examples: [
      { jp: "休日は映画を見るとか、買い物に行くとかして過ごします。", vn: "Ngày nghỉ tôi thường dành thời gian xem phim hoặc đi mua sắm." },
      { jp: "頭が痛いとか、熱があるとかで休む人が多い。", vn: "Có nhiều người nghỉ học với lý do như là đau đầu hay bị sốt." }
    ],
    quiz: {
      sentence: "休みの日は、本を読む________、音楽を聞く________しています。",
      answer: "とか",
      accepts: [],
      hint: "Liệt kê các ví dụ (như là...)",
      translation: "Vào ngày nghỉ tôi thường đọc sách hay là nghe nhạc."
    }
  },
  {
    id: 100, unit: 10,
    pattern: "だけ",
    meaning: "Chỉ / Đến mức tối đa có thể",
    explanation: "Biểu thị sự giới hạn (chỉ có) hoặc làm một việc gì đó đến mức độ cao nhất có thể (ví dụ: 好きなだけ - thỏa thích).",
    examples: [
      { jp: "私が持っているお金はこれだけです。", vn: "Số tiền tôi có chỉ bằng này thôi." },
      { jp: "ビュッフェなので、好きなだけ食べてください。", vn: "Vì là buffet nên hãy ăn thỏa thích (đến mức bạn muốn)." }
    ],
    quiz: {
      sentence: "今日は疲れたので、これ________にしておきます。",
      answer: "だけ",
      accepts: [],
      hint: "Chỉ (mức độ/giới hạn)",
      translation: "Hôm nay tôi mệt rồi nên chỉ làm đến đây thôi."
    }
  },
  {
    id: 101, unit: 10,
    pattern: "ばかりでなく",
    meaning: "Không chỉ... mà còn...",
    explanation: "Ngoài sự vật/sự việc đó ra thì còn có cái khác nữa (thường mang ý nghĩa cộng thêm vào).",
    examples: [
      { jp: "彼は英語ばかりでなく、フランス語も話せる。", vn: "Anh ấy không chỉ nói được tiếng Anh mà còn nói được tiếng Pháp." },
      { jp: "このレストランは美味しいばかりでなく、値段も安い。", vn: "Nhà hàng này không chỉ ngon mà giá còn rẻ." }
    ],
    quiz: {
      sentence: "彼女は美しい________、性格もいい。",
      answer: "ばかりでなく",
      accepts: ["ばかりか"],
      hint: "Không chỉ... mà còn...",
      translation: "Cô ấy không chỉ xinh đẹp mà tính cách cũng tốt."
    }
  },
  {
    id: 102, unit: 10,
    pattern: "かけ / かける",
    meaning: "Đang làm dở / Chưa xong",
    explanation: "Chỉ một hành động đang được thực hiện giữa chừng thì dừng lại, vẫn chưa hoàn thành xong.",
    examples: [
      { jp: "テーブルの上に食べかけのリンゴがある。", vn: "Trên bàn có quả táo đang ăn dở." },
      { jp: "宿題をやりかけたが、友達が来たのでやめた。", vn: "Đang làm dở bài tập thì bạn đến nên tôi dừng lại." }
    ],
    quiz: {
      sentence: "この本はまだ読み________だ。",
      answer: "かけ",
      accepts: ["かけの", "かけている"],
      hint: "Đang làm dở (V-masu + かけ)",
      translation: "Cuốn sách này tôi vẫn đang đọc dở."
    }
  },
  {
    id: 103, unit: 10,
    pattern: "をこめて",
    meaning: "Gửi gắm (tình cảm, tâm tư) vào...",
    explanation: "Làm việc gì đó với tất cả tình yêu, lòng biết ơn, tâm nguyện hoặc sự chân thành chứa đựng bên trong.",
    examples: [
      { jp: "先生への感謝をこめて、歌を歌います。", vn: "Chúng em xin hát một bài hát với tất cả lòng biết ơn gửi đến thầy cô." },
      { jp: "愛をこめて、手紙を書きました。", vn: "Tôi đã viết lá thư chứa đựng tất cả tình yêu thương." }
    ],
    quiz: {
      sentence: "心を________、プレゼントを選びました。",
      answer: "こめて",
      accepts: ["込めて"],
      hint: "Gửi gắm (Kanji: 込めて)",
      translation: "Tôi đã chọn món quà này với tất cả tấm lòng."
    }
  },
  {
    id: 104, unit: 10,
    pattern: "わりに(は)",
    meaning: "Khá là... so với / Mặc dù... nhưng",
    explanation: "Đánh giá một sự việc có kết quả khác, trái ngược với mức độ thông thường dự đoán từ cơ sở đó.",
    examples: [
      { jp: "彼はよく食べるわりに、太らない。", vn: "Anh ấy ăn nhiều thế mà lại không béo." },
      { jp: "この時計は安いわりには、よく働く。", vn: "Cái đồng hồ này khá là tốt so với mức giá rẻ của nó." }
    ],
    quiz: {
      sentence: "お年寄りの________、とても元気だ。",
      answer: "わりに",
      accepts: ["わりには", "割に", "割には"],
      hint: "So với... thì khá là...",
      translation: "So với tuổi già thì cụ khá là khỏe mạnh."
    }
  },
  {
    id: 105, unit: 10,
    pattern: "くせに",
    meaning: "Mặc dù... thế mà (trách móc)",
    explanation: "Giống với 'わりに' nhưng mang sắc thái chê bai, trách móc, khinh miệt (thường chỉ dùng để nói về người khác).",
    examples: [
      { jp: "知っているくせに、教えてくれない。", vn: "Biết thế mà lại không chỉ cho tôi." },
      { jp: "男のくせに、よく泣くね。", vn: "Là con trai thế mà hay khóc nhè nhỉ." }
    ],
    quiz: {
      sentence: "お金がない________、高いものばかり買う。",
      answer: "くせに",
      accepts: [],
      hint: "Mặc dù... thế mà (mang tính trách móc)",
      translation: "Không có tiền thế mà toàn mua đồ đắt đỏ."
    }
  },
  {
    id: 106, unit: 10,
    pattern: "てみせる",
    meaning: "Chắc chắn sẽ làm (cho mà xem)",
    explanation: "Thể hiện quyết tâm mạnh mẽ sẽ hoàn thành việc gì đó để chứng tỏ cho người khác thấy.",
    examples: [
      { jp: "今度の試験には、絶対に合格してみせる。", vn: "Kỳ thi lần này tôi chắc chắn sẽ đỗ cho mà xem." },
      { jp: "あんなやつ、絶対に見返してみせる。", vn: "Kẻ như hắn ta, tôi nhất định sẽ cho hắn biết tay." }
    ],
    quiz: {
      sentence: "次の試合は絶対に勝っ________。",
      answer: "てみせる",
      accepts: ["て見せる"],
      hint: "Sẽ làm cho mà xem (quyết tâm)",
      translation: "Trận đấu tới tôi nhất định sẽ chiến thắng cho mà xem."
    }
  },
  {
    id: 107, unit: 10,
    pattern: "をきっかけに / にして / として",
    meaning: "Nhân cơ hội / Nhờ có duyên cớ...",
    explanation: "Lấy một sự kiện nào đó làm lý do, cơ hội, bước ngoặt để bắt đầu một sự thay đổi hoặc hành động mới.",
    examples: [
      { jp: "大学入学をきっかけに、一人暮らしを始めた。", vn: "Nhân dịp vào đại học, tôi đã bắt đầu ra ở riêng." },
      { jp: "病気をきっかけにして、お酒をやめた。", vn: "Lấy duyên cớ là bị bệnh, tôi đã bỏ rượu." }
    ],
    quiz: {
      sentence: "日本のアニメ________、日本語を勉強し始めた。",
      answer: "をきっかけに",
      accepts: ["をきっかけにして", "をきっかけとして"],
      hint: "Nhân cơ hội / Duyến cớ là...",
      translation: "Nhờ anime của Nhật mà tôi đã bắt đầu học tiếng Nhật."
    }
  },
  {
    id: 108, unit: 10,
    pattern: "とする / としたら / すれば / すると / としても",
    meaning: "Giả sử (rằng)... / Nếu như...",
    explanation: "Đưa ra một giả định không có thật hoặc có khả năng xảy ra rất thấp.",
    examples: [
      { jp: "太陽が西から昇るとしても、決心は変わらない。", vn: "Cho dù mặt trời mọc đằng Tây thì quyết tâm của tôi cũng không đổi." },
      { jp: "もし宝くじが当たったとしたら、家を買いたい。", vn: "Giả sử mà trúng vé số thì tôi muốn mua nhà." }
    ],
    quiz: {
      sentence: "もし生まれ変われると________、鳥になりたい。",
      answer: "したら",
      accepts: ["すれば", "すると"],
      hint: "Nếu như / Giả sử (đi sau と)",
      translation: "Nếu như được sinh ra một lần nữa, tôi muốn trở thành một chú chim."
    }
  },
  {
    id: 109, unit: 10,
    pattern: "際に / 際(に)は",
    meaning: "Khi / Lúc (cách nói trang trọng)",
    explanation: "Ý nghĩa giống với 時 (khi), nhưng là cách nói lịch sự, trang trọng, dùng nhiều trong văn bản, thông báo công cộng.",
    examples: [
      { jp: "帰国の際には、連絡してください。", vn: "Khi nào về nước thì hãy liên lạc nhé." },
      { jp: "カードを紛失した際は、すぐにお知らせください。", vn: "Khi bị mất thẻ, vui lòng thông báo cho chúng tôi ngay." }
    ],
    quiz: {
      sentence: "お降りの________、お忘れ物にご注意ください。",
      answer: "際は",
      accepts: ["際に", "際"],
      hint: "Khi / Lúc (cách nói lịch sự - Kanji: 際)",
      translation: "Khi quý khách xuống tàu, xin lưu ý hành lý để quên."
    }
  },
  {
    id: 110, unit: 10,
    pattern: "おそれがある",
    meaning: "Có nguy cơ / E rằng...",
    explanation: "Thể hiện sự lo lắng rằng một điều tồi tệ, một nguy cơ nào đó có thể xảy ra (thường dùng trong bản tin thời tiết, thời sự).",
    examples: [
      { jp: "明日は大雨のおそれがある。", vn: "Ngày mai có nguy cơ sẽ mưa lớn." },
      { jp: "この病気は伝染するおそれがある。", vn: "Căn bệnh này có nguy cơ lây nhiễm." }
    ],
    quiz: {
      sentence: "この地域は津波の________があります。",
      answer: "おそれ",
      accepts: ["恐れ"],
      hint: "Có nguy cơ / Lo ngại (Kanji: 恐れ)",
      translation: "Khu vực này có nguy cơ xảy ra sóng thần."
    }
  }
];

export default function Home() {
  const [activeMode, setActiveMode] = useState('menu'); // 'menu', 'flashcard', 'quiz'
  const [selectedUnit, setSelectedUnit] = useState('all'); // 1, 2, 'all'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState(null); // 'correct', 'incorrect'
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef(null);

  // Tự động focus vào ô nhập liệu để người dùng gõ phím mượt mà không cần dùng chuột
  useEffect(() => {
    if (activeMode === 'quiz' && feedback === null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentIndex, activeMode, feedback]);

  // Filter data based on selected unit
  const activeData = useMemo(() => {
    if (selectedUnit === 'all') return grammarData;
    return grammarData.filter(item => item.unit === selectedUnit);
  }, [selectedUnit]);

  // Reset state when switching modes
  const switchMode = (mode) => {
    setActiveMode(mode);
    setCurrentIndex(0);
    setIsFlipped(false);
    setUserInput('');
    setFeedback(null);
    setScore(0);
    setShowHint(false);
  };

  const handleNext = () => {
    if (currentIndex < activeData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      setUserInput('');
      setFeedback(null);
      setShowHint(false);
    } else {
      if (activeMode === 'quiz') {
        alert(`Chúc mừng! Bạn đã hoàn thành bài luyện tập với số điểm: ${score}/${activeData.length}`);
        switchMode('menu');
      } else {
        switchMode('menu');
      }
    }
  };

  const checkAnswer = () => {
    const cleanInput = userInput.trim().replace(/\s/g, '').toLowerCase();
    const cleanAnswer = activeData[currentIndex].quiz.answer.replace(/\s/g, '').toLowerCase();
    
    let validAnswers = [cleanAnswer];
    // Add variations if they exist in the new accepts array
    if (activeData[currentIndex].quiz.accepts) {
      validAnswers = [...validAnswers, ...activeData[currentIndex].quiz.accepts.map(a => a.replace(/\s/g, '').toLowerCase())];
    }
    
    // Legacy support for manual variations in older units
    if (activeData[currentIndex].id === 12) validAnswers.push('てる');
    if (activeData[currentIndex].id === 29) validAnswers.push('ぐらい');
    if (activeData[currentIndex].id === 30) validAnswers.push('ぐらいなら');
    
    if (validAnswers.includes(cleanInput)) {
      setFeedback('correct');
      setScore(score + 1);
    } else {
      setFeedback('incorrect');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/30 font-sans text-slate-800 p-4 md:p-8 lg:p-12 flex flex-col items-center selection:bg-indigo-100 selection:text-indigo-900">
      {/* Background Ornaments */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-indigo-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-violet-100/50 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="w-full max-w-5xl mb-8 md:mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-700 to-violet-600 bg-clip-text text-transparent flex items-center justify-center md:justify-start gap-3">
            <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-lg shadow-indigo-200">
              <BookOpen className="w-6 h-6 md:w-8 md:h-8" /> 
            </div>
            NH3 Practice
          </h1>
          <p className="text-slate-500 font-medium mt-2 flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            {selectedUnit === 'all' ? 'Comprehensive Practice Hub' : `Focusing on Unit ${selectedUnit}`}
          </p>
        </div>
        {activeMode !== 'menu' && (
          <button 
            onClick={() => switchMode('menu')}
            className="group px-6 py-2.5 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md hover:border-indigo-200 transition-all flex items-center gap-2 text-indigo-600 font-bold"
          >
            <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" /> Trang chủ
          </button>
        )}
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-white/50 min-h-[600px] flex flex-col transition-all">
        
        {/* MENU MODE */}
        {activeMode === 'menu' && (
          <div className="p-6 md:p-12 flex flex-col items-center justify-center flex-grow gap-12">
            
            {/* Unit Selector */}
            <div className="w-full bg-slate-100/50 p-2 rounded-[2rem] flex flex-wrap items-center justify-center gap-2 border border-slate-200/50">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <button 
                  key={num}
                  onClick={() => setSelectedUnit(num)}
                  className={`py-2 px-6 rounded-2xl text-sm font-bold transition-all duration-300 ${selectedUnit === num ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 -translate-y-0.5' : 'text-slate-500 hover:bg-white hover:text-indigo-600 hover:shadow-sm'}`}
                >
                  U{num < 10 ? `0${num}` : num}
                </button>
              ))}
              <div className="w-px h-8 bg-slate-300/50 mx-2 hidden sm:block"></div>
              <button 
                onClick={() => setSelectedUnit('all')}
                className={`py-2 px-6 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${selectedUnit === 'all' ? 'bg-violet-600 text-white shadow-lg shadow-violet-200 -translate-y-0.5' : 'text-slate-500 hover:bg-white hover:text-violet-600 hover:shadow-sm'}`}
              >
                <Layers className="w-4 h-4"/> Tất cả
              </button>
            </div>

            <div className="text-center mb-2">
              <h2 className="text-xl font-semibold">Chọn chế độ học tập</h2>
              <p className="text-sm text-slate-500 mt-1">Sẽ có {activeData.length} mẫu ngữ pháp trong phần này</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              <button 
                onClick={() => switchMode('flashcard')}
                className="group p-8 bg-indigo-50/30 border border-indigo-100/50 rounded-[2rem] hover:bg-indigo-600 transition-all duration-500 flex flex-col items-center text-center gap-4 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-200"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-sm">
                  <Brain className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-extrabold text-2xl mb-2 group-hover:text-white transition-colors">Ghi nhớ</h3>
                  <p className="text-slate-500 group-hover:text-indigo-100 transition-colors text-sm">Học cấu trúc & ví dụ qua Flashcards</p>
                </div>
              </button>
              
              <button 
                onClick={() => switchMode('quiz')}
                className="group p-8 bg-emerald-50/30 border border-emerald-100/50 rounded-[2rem] hover:bg-emerald-600 transition-all duration-500 flex flex-col items-center text-center gap-4 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-200"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-sm">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-extrabold text-2xl mb-2 group-hover:text-white transition-colors">Luyện tập</h3>
                  <p className="text-slate-500 group-hover:text-emerald-100 transition-colors text-sm">Thử thách trí nhớ qua bài tập điền từ</p>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* FLASHCARD MODE */}
        {activeMode === 'flashcard' && (
          <div className="p-6 md:p-10 flex flex-col h-full flex-grow">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                UNIT {activeData[currentIndex].unit} - GHI NHỚ
              </span>
              <span className="text-sm text-slate-400 font-medium">{currentIndex + 1} / {activeData.length}</span>
            </div>

            <div 
              className={`relative w-full h-[450px] cursor-pointer perspective-2000 transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Front Side */}
              <div className={`absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 text-white rounded-[2rem] shadow-2xl flex flex-col items-center justify-center backface-hidden ${isFlipped ? 'invisible' : ''} p-8 text-center`}>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">～{activeData[currentIndex].pattern}</h2>
                <div className="w-16 h-1 w-full bg-white/20 rounded-full mb-8 max-w-[100px]"></div>
                <p className="text-indigo-100 text-base font-medium animate-pulse">Nhấn vào thẻ để xem giải nghĩa</p>
              </div>

              {/* Back Side */}
              <div className={`absolute inset-0 bg-white border border-slate-100 rounded-[2rem] shadow-2xl p-8 md:p-12 flex flex-col items-center justify-start overflow-auto backface-hidden transform rotate-y-180 custom-scrollbar ${!isFlipped ? 'invisible' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-4 mt-2">{activeData[currentIndex].meaning}</h3>
                <div className="w-full h-px bg-slate-100 mb-6"></div>
                <p className="text-slate-600 text-center mb-8 text-base md:text-lg leading-relaxed max-w-2xl">{activeData[currentIndex].explanation}</p>
                
                <div className="w-full space-y-4 mt-auto max-w-2xl mx-auto">
                  {activeData[currentIndex].examples.map((ex, i) => (
                    <div key={i} className="bg-indigo-50/50 p-5 rounded-2xl border-l-4 border-indigo-500 transition-all hover:bg-indigo-50">
                      <p className="text-base md:text-lg font-semibold text-slate-800">{ex.jp}</p>
                      <p className="text-sm md:text-base text-slate-600 mt-2 italic">{ex.vn}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between gap-4">
              <button 
                onClick={() => {if (currentIndex > 0) setCurrentIndex(currentIndex-1); setIsFlipped(false);}}
                disabled={currentIndex === 0}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors disabled:opacity-50 font-medium"
              >
                <ChevronLeft className="w-5 h-5"/> Quay lại
              </button>
              <button 
                onClick={handleNext}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200 font-medium"
              >
                {currentIndex === activeData.length - 1 ? 'Hoàn thành' : 'Tiếp theo'} <ChevronRight className="w-5 h-5"/>
              </button>
            </div>
          </div>
        )}

        {/* QUIZ MODE */}
        {activeMode === 'quiz' && (
          <div className="p-6 md:p-10 flex flex-col h-full flex-grow">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                UNIT {activeData[currentIndex].unit} - LUYỆN TẬP
              </span>
              <div className="text-right">
                <span className="text-sm text-slate-400 block">Tiến độ: {currentIndex + 1} / {activeData.length}</span>
                <span className="text-sm font-bold text-emerald-600">Đúng: {score}</span>
              </div>
            </div>

            <div className="flex-grow flex flex-col items-center justify-center">
              <p className="text-sm text-slate-500 italic mb-4 self-start bg-slate-100 p-3 rounded-lg border-l-4 border-slate-300 w-full">
                {activeData[currentIndex].quiz.translation}
              </p>
              
              <div className="w-full text-center py-6">
                <h3 className="text-xl md:text-2xl font-bold leading-relaxed text-slate-700">
                  {activeData[currentIndex].quiz.sentence.split('________').map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className={`inline-block border-b-2 min-w-[120px] px-2 mx-1 pb-1 ${
                          feedback === 'correct' ? 'border-emerald-500 text-emerald-600' : 
                          feedback === 'incorrect' ? 'border-rose-400 text-rose-500 line-through opacity-70' : 
                          'border-indigo-400 text-indigo-600'
                        }`}>
                          {feedback === 'correct' ? activeData[currentIndex].quiz.answer : (userInput || '...')}
                        </span>
                      )}
                    </span>
                  ))}
                </h3>
              </div>

              <div className="w-full space-y-6 max-w-2xl mt-4">
                <input 
                  ref={inputRef}
                  type="text"
                  value={userInput}
                  onChange={(e) => {
                    setUserInput(e.target.value);
                    if(feedback) setFeedback(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault(); // Ngăn chặn hành vi mặc định
                      if (e.repeat) return; // Chống việc đè giữ phím Enter khiến câu hỏi nhảy liên tục

                      if (!feedback) {
                        checkAnswer();
                      } else if (feedback !== null) {
                        handleNext();
                      }
                    } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                      e.preventDefault(); // Ngăn con trỏ chạy tới lui trong ô text
                      if (!feedback) setShowHint(!showHint); // Bật/tắt gợi ý bằng phím mũi tên
                    }
                  }}
                  placeholder="Gõ đáp án... (Mũi tên Lên/Xuống để xem gợi ý)"
                  readOnly={feedback !== null}
                  className={`w-full p-4 border-2 rounded-xl text-center text-lg outline-none transition-all ${
                    feedback === 'correct' ? 'border-emerald-500 bg-emerald-50 text-emerald-700 font-bold' : 
                    feedback === 'incorrect' ? 'border-rose-400 bg-rose-50 text-rose-700 font-bold' : 
                    'border-slate-200 focus:border-indigo-400'
                  }`}
                />

                <div className="flex gap-2">
                  {!feedback ? (
                    <>
                      <button 
                        onClick={() => {
                          setShowHint(!showHint);
                          inputRef.current?.focus(); // Đưa focus quay lại ô nhập liệu
                        }}
                        onMouseDown={(e) => e.preventDefault()} // Ngăn nút cướp focus của ô nhập liệu ngay từ lúc nhấn chuột xuống
                        className={`flex items-center justify-center w-12 h-12 rounded-xl transition-colors ${showHint ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                        title="Gợi ý (Phím Lên/Xuống)"
                      >
                        <HelpCircle className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={checkAnswer}
                        className="flex-grow py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors"
                      >
                        {userInput ? 'Kiểm tra' : 'Xem đáp án'}
                      </button>
                    </>
                  ) : feedback === 'correct' ? (
                    <button 
                      onClick={handleNext}
                      className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-100 flex justify-center items-center gap-2"
                    >
                      Tuyệt vời! Tiếp theo <ChevronRight className="w-5 h-5"/>
                    </button>
                  ) : (
                    <button 
                      onClick={handleNext}
                      className="w-full py-3 bg-rose-500 text-white rounded-xl font-bold hover:bg-rose-600 transition-colors flex justify-center items-center gap-2"
                    >
                      Đã hiểu! Tiếp theo <ChevronRight className="w-5 h-5"/>
                    </button>
                  )}
                </div>

                {showHint && !feedback && (
                  <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-sm text-amber-700 text-center animate-pulse">
                    <span className="font-bold mr-1">Gợi ý:</span> {activeData[currentIndex].quiz.hint}
                  </div>
                )}
                
                {feedback === 'incorrect' && (
                  <div className="bg-rose-50 border border-rose-200 p-4 rounded-lg text-center">
                    <p className="text-sm text-rose-600 font-medium mb-1">Chưa đúng rồi!</p>
                    <p className="text-rose-800">Đáp án đúng là: <span className="font-bold text-lg ml-1">{activeData[currentIndex].quiz.answer}</span></p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}} />
    </div>
  );
}
