import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Brain, CheckCircle, ChevronLeft, ChevronRight, RotateCcw, HelpCircle, Layers, ArrowLeft, User, Search, List } from 'lucide-react';

const grammarData = [
  // --- UNIT 1 ---
  {
    id: 1, unit: 1, pattern: "ことにしている", meaning: "Quyết định (thói quen cá nhân)", explanation: "Diễn tả thói quen hoặc quy tắc mà bản thân tự đề ra và thực hiện.",
    examples: [{ jp: "健康のために、毎日野菜を食べることにしている。", vn: "Để tốt cho sức khỏe, tôi quyết định (duy trì thói quen) ăn rau mỗi ngày." }, { jp: "寝る前に、必ず本を10ページ読むことにしている。", vn: "Trước khi ngủ, tôi luôn quyết định đọc 10 trang sách." }],
    quiz: { sentence: "私は毎日、30分ジョギング________。", answer: "ことにしている", accepts: [], hint: "Quyết định thói quen của bản thân", translation: "Tôi quyết định chạy bộ 30 phút mỗi ngày." }
  },
  {
    id: 2, unit: 1, pattern: "ことになっている", meaning: "Quy định / Dự định (khách quan)", explanation: "Diễn tả những việc đã được quyết định bởi tổ chức, quy định hoặc dự định mang tính khách quan.",
    examples: [{ jp: "法律で、車を運転する時はシートベルトをすることになっている。", vn: "Theo luật pháp, khi lái xe ô tô thì quy định phải thắt dây an toàn." }],
    quiz: { sentence: "この部屋では、タバコを吸ってはいけない________。", answer: "ことになっている", accepts: [], hint: "Quy định chung", translation: "Trong phòng này có quy định không được hút thuốc." }
  },
  {
    id: 3, unit: 1, pattern: "ようになっている", meaning: "Được thiết kế để / Trở nên (tự động)", explanation: "Diễn tả chức năng của máy móc hoặc sự biến đổi trạng thái mang tính tự động.",
    examples: [{ jp: "このドアは人が近づくと、自動で開くようになっている。", vn: "Cánh cửa này được thiết kế để tự động mở khi có người tiến lại gần." }],
    quiz: { sentence: "この機械は、暗くなると電気がつく________。", answer: "ようになっている", accepts: [], hint: "Chức năng/Cấu tạo tự động", translation: "Cái máy này được thiết kế để khi trời tối thì đèn sẽ sáng." }
  },
  {
    id: 4, unit: 1, pattern: "ような / ように", meaning: "Giống như / Theo như", explanation: "Dùng để so sánh hoặc đưa ra ví dụ.",
    examples: [{ jp: "太陽のような明るい人だ。", vn: "Đó là một người tươi sáng như mặt trời." }],
    quiz: { sentence: "田中さんの________優しい人になりたい。", answer: "ような", accepts: ["ように"], hint: "Giống như (so sánh)", translation: "Tôi muốn trở thành một người hiền lành giống như anh Tanaka." }
  },
  {
    id: 5, unit: 1, pattern: "みたいだ", meaning: "Có vẻ như / Giống như (văn nói)", explanation: "Dùng để phỏng đoán dựa trên cảm nhận hoặc so sánh ví von trong văn nói.",
    examples: [{ jp: "このケーキ、美味しそう。まるで本物みたいだ。", vn: "Cái bánh này trông ngon quá. Cứ như là đồ thật vậy." }],
    quiz: { sentence: "彼はまるで子供________だ。", answer: "みたい", accepts: [], hint: "Giống như (văn nói)", translation: "Anh ấy cứ như là trẻ con vậy." }
  },
  {
    id: 6, unit: 1, pattern: "らしい", meaning: "Nghe nói / Đúng chất", explanation: "Dùng để truyền đạt tin đồn hoặc diễn tả tính chất điển hình của sự vật/sự việc.",
    examples: [{ jp: "明日は雨が降るらしい。", vn: "Nghe nói ngày mai trời sẽ mưa." }],
    quiz: { sentence: "噂によると、あの二人は結婚する________。", answer: "らしい", accepts: [], hint: "Nghe nói (tin đồn)", translation: "Theo lời đồn thì hai người đó nghe nói sắp kết hôn." }
  },
  {
    id: 7, unit: 1, pattern: "つもり", meaning: "Dự định / Cứ ngỡ là", explanation: "Diễn tả dự định của bản thân hoặc niềm tin chủ quan về một trạng thái nào đó.",
    examples: [{ jp: "来年、日本へ行くつもりです。", vn: "Năm sau tôi dự định sẽ đi Nhật Bản." }],
    quiz: { sentence: "大学を卒業したら、日本で働く________です。", answer: "つもり", accepts: [], hint: "Dự định", translation: "Sau khi tốt nghiệp đại học, tôi dự định sẽ làm việc tại Nhật Bản." }
  },
  {
    id: 8, unit: 1, pattern: "てくる", meaning: "Bắt đầu / Trở nên / Tiến về phía mình", explanation: "Diễn tả hành động đang bắt đầu, thay đổi diễn ra hoặc hướng về phía người nói.",
    examples: [{ jp: "最近、少しずつ寒くなってきた。", vn: "Gần đây trời đã bắt đầu lạnh dần lên." }],
    quiz: { sentence: "だんだん日本語が上手になって________。", answer: "きた", accepts: ["くる"], hint: "Thay đổi trạng thái (quá khứ của てくる)", translation: "Tiếng Nhật của tôi đang dần dần trở nên giỏi lên." }
  },

  // --- UNIT 2 ---
  {
    id: 9, unit: 2, pattern: "てほしい / もらいたい", meaning: "Muốn (ai đó) làm gì", explanation: "Diễn tả mong muốn người khác thực hiện một hành động nào đó cho mình.",
    examples: [{ jp: "親にはいつまでも元気でいてほしい。", vn: "Tôi muốn bố mẹ lúc nào cũng khỏe mạnh." }],
    quiz: { sentence: "先生に、もっとゆっくり話して________。", answer: "ほしい", accepts: ["もらいたい"], hint: "Mong muốn người khác làm gì", translation: "Tôi muốn thầy giáo nói chậm lại một chút." }
  },
  {
    id: 10, unit: 2, pattern: "ば / たら / と…よかった", meaning: "Giá mà... / Ước gì...", explanation: "Thể hiện sự tiếc nuối về một việc đã xảy ra hoặc mong ước trái hiện tại.",
    examples: [{ jp: "あの時、本当のことを言っておけばよかった。", vn: "Giá mà lúc đó tôi nói ra sự thật thì tốt biết mấy." }],
    quiz: { sentence: "テストの前に、もっと勉強しておけば________。", answer: "よかった", accepts: [], hint: "Thể hiện sự tiếc nuối ở quá khứ", translation: "Giá mà trước bài kiểm tra tôi học nhiều hơn." }
  },
  {
    id: 11, unit: 2, pattern: "使役形 (させて / させられる)", meaning: "Cho phép làm / Bị bắt làm", explanation: "Thể sai khiến xin phép (させてください) hoặc bị ép buộc (させられる).",
    examples: [{ jp: "今日は体調が悪いので、早く帰らせてください。", vn: "Hôm nay thấy không khỏe nên xin cho phép tôi về sớm." }],
    quiz: { sentence: "すみません、明日一日休ま________ください。", answer: "せて", accepts: [], hint: "Xin phép người khác cho mình làm gì (từ 休む)", translation: "Xin lỗi, hãy cho phép tôi nghỉ ngày mai." }
  },
  {
    id: 12, unit: 2, pattern: "自動詞 (〜ている)", meaning: "Trạng thái (Tự động từ)", explanation: "Tự động từ + ている diễn tả trạng thái của sự vật sau khi hành động xảy ra.",
    examples: [{ jp: "窓が閉まっている。", vn: "Cửa sổ đang đóng (trạng thái hiện tại)." }],
    quiz: { sentence: "シャツのボタンがとれ________よ。", answer: "ている", accepts: ["てる"], hint: "Trạng thái hiện tại (tự động từ)", translation: "Cái cúc áo sơ mi bị tuột ra kìa." }
  },
  {
    id: 13, unit: 2, pattern: "〜み", meaning: "Sự... / Độ... (Danh từ hóa)", explanation: "Biến tính từ thành danh từ để chỉ trạng thái, tính chất mang tính cảm nhận.",
    examples: [{ jp: "戦争の悲しみを忘れてはいけない。", vn: "Không được quên nỗi đau thương của chiến tranh." }],
    quiz: { sentence: "星空の美し________に感動した。", answer: "み", accepts: [], hint: "Hậu tố biến tính từ đuôi 'i' thành danh từ", translation: "Tôi đã xúc động trước vẻ đẹp của bầu trời sao." }
  },
  {
    id: 14, unit: 2, pattern: "んじゃない？", meaning: "Chẳng phải là... hay sao?", explanation: "Cách nói vòng vo, rụt rè để đưa ra ý kiến, phỏng đoán của bản thân.",
    examples: [{ jp: "このやり方のほうがいいのではないだろうか。", vn: "Tôi nghĩ cách làm này tốt hơn đó chứ?" }],
    quiz: { sentence: "これ、ちょっと高すぎる________？", answer: "んじゃない", accepts: ["のではないだろうか", "のではないか"], hint: "Cách nói thân mật của 'のではないか'", translation: "Cái này, chẳng phải là hơi đắt quá sao?" }
  },
  {
    id: 15, unit: 2, pattern: "縮約形 (てる/とく/なきゃ)", meaning: "Dạng rút gọn (văn nói)", explanation: "Các dạng nói tắt (ている→てる, ておく→とく, なければ→なきゃ).",
    examples: [{ jp: "明日までにこの本、読んどくよ。(読んでおくよ)", vn: "Tôi sẽ đọc xong cuốn sách này trước ngày mai." }],
    quiz: { sentence: "急が________、電車に遅れるよ！", answer: "なきゃ", accepts: [], hint: "Dạng rút gọn của 'なければ'", translation: "Nếu không nhanh lên, sẽ trễ tàu đấy!" }
  },

  // --- UNIT 3 ---
  {
    id: 16, unit: 3, pattern: "から〜にかけて", meaning: "Từ... đến...", explanation: "Chỉ phạm vi đại khái từ điểm bắt đầu đến điểm kết thúc (thời gian/không gian).",
    examples: [{ jp: "明日は関東から東北地方にかけて、雨が降るでしょう。", vn: "Ngày mai có lẽ sẽ mưa từ Kanto đến Tohoku." }],
    quiz: { sentence: "明日は関東から東北地方に________、雨が降るでしょう。", answer: "かけて", accepts: [], hint: "Đi kèm với から để chỉ phạm vi", translation: "Ngày mai có lẽ sẽ mưa trải dài từ vùng Kanto đến vùng Tohoku." }
  },
  {
    id: 17, unit: 3, pattern: "だらけ", meaning: "Đầy / Toàn là...", explanation: "Chỉ trạng thái có đầy thứ gì đó, thường mang nghĩa tiêu cực (rác, bùn, lỗi sai).",
    examples: [{ jp: "彼の部屋はゴミだらけだ。", vn: "Phòng của anh ta toàn là rác." }],
    quiz: { sentence: "このテスト、間違い________じゃないか！", answer: "だらけ", accepts: [], hint: "Toàn là (nghĩa tiêu cực)", translation: "Bài kiểm tra này chẳng phải toàn là lỗi sai sao!" }
  },
  {
    id: 18, unit: 3, pattern: "おかげ", meaning: "Nhờ có... / Nhờ vào...", explanation: "Chỉ nguyên nhân dẫn đến kết quả tốt, mang hàm ý biết ơn.",
    examples: [{ jp: "先生のおかげで、N3に合格できました。", vn: "Nhờ có thầy giáo mà em đã thi đỗ N3." }],
    quiz: { sentence: "友達が手伝ってくれた________で、早く終わった。", answer: "おかげ", accepts: [], hint: "Nhờ có (kết quả tốt)", translation: "Nhờ bạn bè giúp đỡ mà tôi đã làm xong sớm." }
  },
  {
    id: 19, unit: 3, pattern: "せい / せいか", meaning: "Tại vì... / Có lẽ tại...", explanation: "Chỉ nguyên nhân dẫn đến kết quả xấu, mang hàm ý đổ lỗi.",
    examples: [{ jp: "バスが遅れたせいで、授業に遅刻してしまった。", vn: "Tại xe buýt đến muộn mà tôi bị trễ học." }],
    quiz: { sentence: "あの人の________で、みんなが迷惑している。", answer: "せい", accepts: ["せいか"], hint: "Tại vì (kết quả xấu, đổ lỗi)", translation: "Tại người đó mà mọi người đang gặp phiền phức." }
  },
  {
    id: 20, unit: 3, pattern: "とおり(に)", meaning: "Đúng như / Theo như...", explanation: "Làm một việc gì đó đúng theo như một khuôn mẫu, tiêu chuẩn hoặc dự đoán.",
    examples: [{ jp: "私の説明したとおりに、機械を組み立ててください。", vn: "Hãy lắp ráp máy móc đúng theo như tôi đã giải thích." }],
    quiz: { sentence: "先生が言った________、試験は難しかった。", answer: "とおり", accepts: ["とおりに", "通り", "通りに"], hint: "Đúng như / Theo như", translation: "Đúng như lời thầy giáo nói, bài thi rất khó." }
  },
  {
    id: 21, unit: 3, pattern: "について / つき", meaning: "Về vấn đề... / Về...", explanation: "Trình bày chủ đề của hành động (suy nghĩ, nói, viết, điều tra...).",
    examples: [{ jp: "日本の文化についてレポートを書きます。", vn: "Tôi sẽ viết báo cáo về văn hóa Nhật Bản." }],
    quiz: { sentence: "将来の夢________、スピーチをします。", answer: "について", accepts: ["につき"], hint: "Về (chủ đề bài phát biểu)", translation: "Tôi sẽ thuyết trình về ước mơ trong tương lai." }
  },
  {
    id: 22, unit: 3, pattern: "に関し(て)", meaning: "Liên quan đến... / Về...", explanation: "Cách nói trang trọng hơn của について.",
    examples: [{ jp: "この事件に関して、新しい情報が入りました。", vn: "Đã có thông tin mới liên quan đến vụ án này." }],
    quiz: { sentence: "この件________は、現在調査中です。", answer: "に関して", accepts: ["に関し"], hint: "Liên quan đến (cách nói trang trọng)", translation: "Liên quan đến vụ việc này, hiện chúng tôi đang điều tra." }
  },
  {
    id: 23, unit: 3, pattern: "に比べ(て)", meaning: "So với...", explanation: "Dùng để so sánh hai sự vật, sự việc.",
    examples: [{ jp: "今年は去年に比べて、雨の日が多い。", vn: "Năm nay nhiều ngày mưa hơn so với năm ngoái." }],
    quiz: { sentence: "東京________、私の町は静かだ。", answer: "に比べて", accepts: ["に比べ"], hint: "So với", translation: "So với Tokyo thì thị trấn của tôi yên tĩnh hơn." }
  },
  {
    id: 24, unit: 3, pattern: "に加え(て)", meaning: "Thêm vào đó / Không chỉ... mà còn...", explanation: "Bổ bổ sung thêm một yếu tố khác vào yếu tố đã có sẵn.",
    examples: [{ jp: "彼は英語に加えて、日本語も話せる。", vn: "Anh ấy không chỉ nói được tiếng Anh mà còn tiếng Nhật." }],
    quiz: { sentence: "熱があるの________、咳も出ます。", answer: "に加えて", accepts: ["に加え"], hint: "Thêm vào đó", translation: "Không chỉ bị sốt mà tôi còn bị ho." }
  },
  {
    id: 25, unit: 3, pattern: "に対し(て) (Đối với)", meaning: "Đối với (Thái độ)", explanation: "Thể hiện thái độ hướng tới một đối tượng.",
    examples: [{ jp: "お客様に対して、失礼なことをしてはいけない。", vn: "Không được làm điều thất lễ đối với khách hàng." }],
    quiz: { sentence: "目上の人________は、敬語を使いなさい。", answer: "に対して", accepts: ["に対し"], hint: "Đối với (thái độ)", translation: "Đối với người bề trên thì hãy dùng kính ngữ." }
  },
  {
    id: 26, unit: 3, pattern: "たびに", meaning: "Mỗi khi / Cứ mỗi lần...", explanation: "Cứ mỗi lần hành động phía trước xảy ra thì kéo theo hành động phía sau.",
    examples: [{ jp: "旅行に行くたびに、お土産を買ってくる。", vn: "Cứ mỗi lần đi du lịch là tôi lại mua quà lưu niệm về." }],
    quiz: { sentence: "彼に会う________、胸がドキドキする。", answer: "たびに", accepts: ["度", "度に"], hint: "Mỗi khi", translation: "Mỗi khi gặp anh ấy, tim tôi lại đập rộn ràng." }
  },
  {
    id: 27, unit: 3, pattern: "たとえ〜ても", meaning: "Cho dù... thì cũng...", explanation: "Đưa ra một giả định nghịch lý.",
    examples: [{ jp: "たとえ雨が降っても、明日の試合は行われます。", vn: "Cho dù ngày mai trời mưa thì trận đấu vẫn sẽ diễn ra." }],
    quiz: { sentence: "________失敗しても、また挑戦すればいい。", answer: "たとえ", accepts: [], hint: "Đi cặp với 〜ても", translation: "Cho dù có thất bại thì thử thách lại là được." }
  },
  {
    id: 28, unit: 3, pattern: "って", meaning: "Nói là / Nghe nói là / Tên là...", explanation: "Cách nói thân mật của と (trích dẫn), という (gọi là) hoặc は (chủ đề).",
    examples: [{ jp: "明日は休みだって。", vn: "Nghe nói ngày mai được nghỉ đấy." }],
    quiz: { sentence: "あそこにある店、美味しいんだ________。", answer: "って", accepts: [], hint: "Nghe nói là (văn nói thân mật)", translation: "Quán ở đằng kia, nghe nói ngon lắm đấy." }
  },

  // --- UNIT 4 ---
  {
    id: 29, unit: 4, pattern: "くらい / ぐらい", meaning: "Đến mức / Khoảng chừng", explanation: "Chỉ mức độ của sự việc, thường là mức độ nhẹ, tối thiểu.",
    examples: [{ jp: "泣きたいくらい痛い。", vn: "Đau đến mức muốn khóc." }],
    quiz: { sentence: "パンが一つ買える________のお金しかない。", answer: "くらい", accepts: ["ぐらい"], hint: "Đến mức / Khoảng", translation: "Tôi chỉ có tiền đủ đến mức mua được một cái bánh mì." }
  },
  {
    id: 30, unit: 4, pattern: "くらいなら / ぐらいなら", meaning: "Nếu phải... thì thà...", explanation: "So sánh hai việc tồi tệ, thà chọn vế sau còn hơn.",
    examples: [{ jp: "あいつに謝るくらいなら、死んだほうがましだ。", vn: "Nếu phải xin lỗi hắn ta thì tôi thà chết còn hơn." }],
    quiz: { sentence: "彼と結婚する________、独身のほうがいい。", answer: "くらいなら", accepts: ["ぐらいなら"], hint: "Nếu phải... thì thà...", translation: "Nếu phải kết hôn với anh ta thì tôi thà độc thân còn hơn." }
  },
  {
    id: 31, unit: 4, pattern: "うちに", meaning: "Trong lúc / Nhân lúc", explanation: "Tranh thủ làm việc gì đó khi trạng thái chưa thay đổi.",
    examples: [{ jp: "スープが温かいうちに、飲んでください。", vn: "Hãy uống nhân lúc súp còn nóng." }],
    quiz: { sentence: "忘れない________、メモしておこう。", answer: "うちに", accepts: [], hint: "Trong lúc (chưa quên)", translation: "Nhân lúc chưa quên, hãy ghi chú lại." }
  },
  {
    id: 32, unit: 4, pattern: "を中心に", meaning: "Lấy... làm trung tâm", explanation: "Chỉ ra một thứ/người làm trung tâm của một phạm vi, hiện tượng.",
    examples: [{ jp: "この店は若い女性を中心に人気がある。", vn: "Quán này được yêu thích, đặc biệt tập trung vào phụ nữ trẻ." }],
    quiz: { sentence: "文法________、日本語を勉強する。", answer: "を中心に", accepts: ["を中心として", "を中心にして"], hint: "Lấy... làm trung tâm", translation: "Tôi học tiếng Nhật tập trung vào ngữ pháp." }
  },
  {
    id: 33, unit: 4, pattern: "をはじめ", meaning: "Trước tiên phải kể đến", explanation: "Đưa ra một ví dụ tiêu biểu nhất trong số nhiều thứ cùng loại.",
    examples: [{ jp: "校長先生をはじめ、先生方、大変お世話になりました。", vn: "Xin cảm ơn các thầy cô, trước tiên là thầy hiệu trưởng." }],
    quiz: { sentence: "社長________、社員の皆様にお礼を申し上げます。", answer: "をはじめ", accepts: ["をはじめとして"], hint: "Tiêu biểu là... / Trước tiên là...", translation: "Xin gửi lời cảm ơn đến mọi người, trước tiên là giám đốc." }
  },
  {
    id: 34, unit: 4, pattern: "に対し(て) (So sánh)", meaning: "Trái ngược với / Đối lập với", explanation: "Dùng để so sánh sự khác nhau rõ rệt giữa hai sự vật.",
    examples: [{ jp: "兄がスポーツが得意なのに対して、弟は勉強が得意だ。", vn: "Trái với anh trai giỏi thể thao, người em lại giỏi học." }],
    quiz: { sentence: "東京が賑やかなの________、私の町は静かだ。", answer: "に対して", accepts: ["に対し"], hint: "Trái ngược với", translation: "Trái ngược với Tokyo náo nhiệt, thị trấn của tôi rất yên tĩnh." }
  },
  {
    id: 35, unit: 4, pattern: "において", meaning: "Tại / Ở / Trong (lĩnh vực)...", explanation: "Chỉ địa điểm, thời đại, lĩnh vực xảy ra sự việc (trang trọng của で).",
    examples: [{ jp: "入学式は体育館において行われる。", vn: "Lễ nhập học sẽ được tổ chức tại nhà thi đấu." }],
    quiz: { sentence: "会議は第一会議室________行われます。", answer: "において", accepts: [], hint: "Tại (cách nói trang trọng của で)", translation: "Cuộc họp sẽ được tổ chức tại phòng họp số 1." }
  },
  {
    id: 36, unit: 4, pattern: "にわたって", meaning: "Suốt / Trải dài", explanation: "Chỉ phạm vi rộng lớn của không gian hoặc khoảng thời gian kéo dài.",
    examples: [{ jp: "会議は５時間にわたって行われた。", vn: "Cuộc họp đã diễn ra suốt 5 tiếng đồng hồ." }],
    quiz: { sentence: "３週間________、雨が降り続いた。", answer: "にわたって", accepts: ["にわたり"], hint: "Trải suốt / Kéo dài suốt", translation: "Mưa đã rơi liên tục suốt 3 tuần." }
  },
  {
    id: 37, unit: 4, pattern: "にとって", meaning: "Đối với... (quan điểm)", explanation: "Đứng từ góc độ của người/vật đó để đưa ra đánh giá, nhận định.",
    examples: [{ jp: "私にとって、家族は一番大切なものです。", vn: "Đối với tôi, gia đình là điều quan trọng nhất." }],
    quiz: { sentence: "子供________、遊びはとても重要だ。", answer: "にとって", accepts: [], hint: "Đối với (góc độ đánh giá)", translation: "Đối với trẻ em, vui chơi là điều rất quan trọng." }
  },
  {
    id: 38, unit: 4, pattern: "による/によって", meaning: "Tùy vào / Do / Bởi", explanation: "Chỉ phương pháp, nguyên nhân, người thực hiện hoặc sự khác biệt.",
    examples: [{ jp: "人によって、考え方が違う。", vn: "Mỗi người có cách suy nghĩ khác nhau (tùy vào)." }],
    quiz: { sentence: "文化は、国________異なります。", answer: "によって", accepts: ["により", "によっては"], hint: "Tùy vào (chỉ sự khác biệt)", translation: "Văn hóa thì khác biệt tùy vào từng quốc gia." }
  },

  // --- UNIT 5 ---
  {
    id: 39, unit: 5, pattern: "に違いない", meaning: "Chắc chắn là", explanation: "Dùng để phỏng đoán một cách chắc chắn dựa trên căn cứ.",
    examples: [{ jp: "鍵がない。どこかに落としたに違いない。", vn: "Không thấy chìa khóa. Chắc chắn là đánh rơi ở đâu rồi." }],
    quiz: { sentence: "あんなに練習したのだから、明日は勝てる________。", answer: "に違いない", accepts: ["にちがいない"], hint: "Chắc chắn là", translation: "Đã tập luyện đến mức đó thì ngày mai chắc chắn sẽ thắng." }
  },
  {
    id: 40, unit: 5, pattern: "とは / というのは", meaning: "Nghĩa là / Cái gọi là...", explanation: "Dùng để định nghĩa, giải thích ý nghĩa của một từ.",
    examples: [{ jp: "デジカメとは、デジタルカメラのことです。", vn: "Dejikame có nghĩa là máy ảnh kỹ thuật số." }],
    quiz: { sentence: "パソコン________、パーソナルコンピュータのことだ。", answer: "とは", accepts: ["というのは", "っていうのは"], hint: "Nghĩa là (giải thích)", translation: "Pasokon nghĩa là máy tính cá nhân." }
  },
  {
    id: 41, unit: 5, pattern: "たとたん(に)", meaning: "Vừa mới... thì ngay lập tức", explanation: "Hành động vế sau xảy ra gần như đồng thời ngay sau hành động vế trước.",
    examples: [{ jp: "ドアを開けたとたん、猫が飛び出してきた。", vn: "Vừa mở cửa ra thì con mèo phóng ra ngoài." }],
    quiz: { sentence: "立ち上がっ________、めまいがした。", answer: "たとたん", accepts: ["たとたんに", "とたん", "とたんに"], hint: "Vừa mới... thì", translation: "Vừa mới đứng lên thì bị chóng mặt." }
  },
  {
    id: 42, unit: 5, pattern: "につれ(て)", meaning: "Càng... càng...", explanation: "Chỉ sự thay đổi đồng thời (thường dùng cho tự nhiên, dần dần).",
    examples: [{ jp: "年をとるにつれて、物忘れがひどくなった。", vn: "Cùng với tuổi tác, tật hay quên càng trở nên nghiêm trọng." }],
    quiz: { sentence: "成長する________、親に似てきた。", answer: "につれて", accepts: ["につれ"], hint: "Càng... càng (sự thay đổi kéo theo)", translation: "Càng lớn càng giống bố mẹ." }
  },
  {
    id: 43, unit: 5, pattern: "にしたがって", meaning: "Theo như / Càng... càng...", explanation: "Tuân theo quy tắc hoặc chỉ sự thay đổi đồng thời.",
    examples: [{ jp: "先生の指示にしたがって、行動してください。", vn: "Hãy hành động theo như chỉ thị của giáo viên." }],
    quiz: { sentence: "ルール________、ゲームをしてください。", answer: "にしたがって", accepts: ["に従って", "にしたがい"], hint: "Theo như (tuân theo quy tắc)", translation: "Hãy chơi game theo đúng luật." }
  },
  {
    id: 44, unit: 5, pattern: "最中(に)", meaning: "Đúng lúc đang", explanation: "Nhấn mạnh thời điểm hành động đang diễn ra cao trào thì có việc khác xen vào.",
    examples: [{ jp: "会議の最中に、携帯電話が鳴った。", vn: "Giữa lúc đang họp thì điện thoại reo." }],
    quiz: { sentence: "シャワーを浴びている________に、客が来た。", answer: "最中", accepts: ["さいちゅう"], hint: "Đúng lúc đang (Kanji: 最中)", translation: "Đúng lúc đang tắm vòi sen thì có khách đến." }
  },
  {
    id: 45, unit: 5, pattern: "てからでないと", meaning: "Nếu chưa... thì không thể...", explanation: "Diễn tả điều kiện tiên quyết. Vế sau luôn mang ý nghĩa phủ định.",
    examples: [{ jp: "お金を払ってからでないと、商品を受け取れない。", vn: "Nếu chưa trả tiền thì không thể nhận hàng." }],
    quiz: { sentence: "手を洗っ________、ご飯を食べてはいけません。", answer: "てからでないと", accepts: ["てからでなければ"], hint: "Nếu chưa... thì không được", translation: "Nếu chưa rửa tay thì không được ăn cơm." }
  },
  {
    id: 46, unit: 5, pattern: "て以来", meaning: "Kể từ khi... (cho đến nay)", explanation: "Nhấn mạnh một trạng thái duy trì liên tục suốt từ quá khứ đến bây giờ.",
    examples: [{ jp: "日本に来て以来、毎日納豆を食べている。", vn: "Kể từ khi đến Nhật, ngày nào tôi cũng ăn natto." }],
    quiz: { sentence: "結婚し________、ずっとこの町に住んでいる。", answer: "て以来", accepts: ["ていらい", "以来", "いらい"], hint: "Kể từ khi", translation: "Kể từ khi kết hôn, tôi vẫn luôn sống ở thị trấn này." }
  },
  {
    id: 47, unit: 5, pattern: "一方だ", meaning: "Ngày càng... (liên tục)", explanation: "Chỉ một trạng thái đang phát triển liên tục (thường là chiều hướng xấu).",
    examples: [{ jp: "最近、物価は上がる一方だ。", vn: "Gần đây, vật giá ngày càng tăng." }],
    quiz: { sentence: "仕事が忙しくて、疲労はたまる________。", answer: "一方だ", accepts: ["いっぽうだ", "一方"], hint: "Ngày càng (chiều hướng xấu)", translation: "Công việc bận rộn, mệt mỏi ngày càng tích tụ." }
  },
  {
    id: 48, unit: 5, pattern: "しかない", meaning: "Chỉ còn cách... / Không còn cách nào khác", explanation: "Thể hiện sự đành chịu, không còn lựa chọn nào khác.",
    examples: [{ jp: "終電を逃したので、歩いて帰るしかない。", vn: "Vì lỡ chuyến tàu cuối nên chỉ còn cách đi bộ về." }],
    quiz: { sentence: "約束したのだから、行く________。", answer: "しかない", accepts: ["ほかない", "よりない", "よりほかない"], hint: "Chỉ còn cách...", translation: "Đã hứa rồi nên chỉ còn cách phải đi thôi." }
  },
  {
    id: 49, unit: 5, pattern: "はもちろん", meaning: "...thì đã đành / Không chỉ... mà còn", explanation: "Việc ở vế trước là điều đương nhiên không cần bàn cãi.",
    examples: [{ jp: "彼は英語はもちろん、フランス語も話せる。", vn: "Anh ấy tiếng Anh thì đã đành, tiếng Pháp cũng nói được." }],
    quiz: { sentence: "復習________、予習も大切だ。", answer: "はもちろん", accepts: ["はもとより", "もとより"], hint: "...thì đã đành (đương nhiên)", translation: "Ôn tập thì đã đành, chuẩn bị bài trước cũng rất quan trọng." }
  },
  {
    id: 50, unit: 5, pattern: "ついでに", meaning: "Nhân tiện", explanation: "Nhân cơ hội đang làm việc A thì làm luôn việc B.",
    examples: [{ jp: "散歩のついでに、パンを買ってきた。", vn: "Nhân tiện đi dạo, tôi đã mua bánh mì về." }],
    quiz: { sentence: "買い物に行く________、郵便局に寄って。", answer: "ついでに", accepts: ["ついで"], hint: "Nhân tiện", translation: "Nhân tiện đi mua sắm thì ghé vào bưu điện giúp nhé." }
  },

  // --- UNIT 6 ---
  {
    id: 51, unit: 6, pattern: "ということだ", meaning: "Nghĩa là / Nghe nói là", explanation: "Truyền đạt lại thông tin nghe được, hoặc giải thích ý nghĩa.",
    examples: [{ jp: "ニュースによると、明日雨が降るということだ。", vn: "Theo tin tức, nghe nói ngày mai trời sẽ mưa." }],
    quiz: { sentence: "彼の話では、来年結婚する________。", answer: "ということだ", accepts: ["とのことだ"], hint: "Nghe nói là", translation: "Theo lời anh ấy nói, nghe đâu sang năm anh ấy sẽ kết hôn." }
  },
  {
    id: 52, unit: 6, pattern: "ことはない", meaning: "Không cần phải", explanation: "Khuyên bảo ai đó không cần thiết phải làm một việc gì đó.",
    examples: [{ jp: "君が謝ることはないよ。", vn: "Cậu không cần phải xin lỗi đâu." }],
    quiz: { sentence: "軽い風邪だから、心配する________。", answer: "ことはない", accepts: ["ことない"], hint: "Không cần phải", translation: "Chỉ là cảm nhẹ thôi nên không cần phải lo lắng." }
  },
  {
    id: 53, unit: 6, pattern: "こと", meaning: "Phải / Hãy", explanation: "Đưa ra mệnh lệnh, quy tắc, chỉ thị.",
    examples: [{ jp: "明日、8時までに来ること。", vn: "Ngày mai phải đến trước 8 giờ." }],
    quiz: { sentence: "図書館では静かにする________。", answer: "こと", accepts: [], hint: "Phải (Mệnh lệnh / Nội quy)", translation: "Trong thư viện phải giữ im lặng." }
  },
  {
    id: 54, unit: 6, pattern: "ないことはない", meaning: "Không phải là không...", explanation: "Thừa nhận một điều gì đó ở mức độ thấp, hoặc miễn cưỡng.",
    examples: [{ jp: "走れば、間に合わないこともない。", vn: "Nếu chạy thì không hẳn là không kịp." }],
    quiz: { sentence: "お酒は飲め________が、弱いです。", answer: "ないことはない", accepts: ["ないこともない"], hint: "Không phải là không", translation: "Không phải là tôi không uống được rượu, nhưng tửu lượng kém." }
  },
  {
    id: 55, unit: 6, pattern: "もの（もん）", meaning: "Bởi vì...", explanation: "Đưa ra lý do cá nhân, mang tính chất biện bạch, làm nũng.",
    examples: [{ jp: "「どうして食べないの？」「だって、美味しくないんだもん。」", vn: "\"Sao con không ăn?\" \"Tại vì không ngon mà.\"" }],
    quiz: { sentence: "行きたくないよ。疲れたんだ________。", answer: "もの", accepts: ["もん"], hint: "Bởi vì (văn nói, biện bạch)", translation: "Tôi không muốn đi đâu. Tại vì mệt mà." }
  },
  {
    id: 56, unit: 6, pattern: "ものだから", meaning: "Tại vì...", explanation: "Đưa ra lý do khách quan, phân trần để mong được thông cảm.",
    examples: [{ jp: "電車が遅れたものだから、遅刻してしまいました。", vn: "Tại vì tàu trễ nên tôi đã bị muộn." }],
    quiz: { sentence: "道が混んでいた________、遅れてすみません。", answer: "ものだから", accepts: ["もので", "もんだから"], hint: "Tại vì (phân trần)", translation: "Tại vì tắc đường nên xin lỗi tôi đến muộn." }
  },
  {
    id: 57, unit: 6, pattern: "ものか", meaning: "Tuyệt đối không", explanation: "Phủ định mạnh mẽ, thể hiện cảm xúc tức giận hoặc kiên quyết.",
    examples: [{ jp: "あんな店、二度と行くものか。", vn: "Cái quán đó, tuyệt đối không đi lần hai đâu." }],
    quiz: { sentence: "あんな人に、二度と会う________！", answer: "ものか", accepts: ["もんか"], hint: "Tuyệt đối không", translation: "Người như vậy, tôi tuyệt đối không gặp lại lần hai đâu!" }
  },
  {
    id: 58, unit: 6, pattern: "たところ", meaning: "Sau khi thử làm... thì", explanation: "Nhấn mạnh kết quả nhận được hoặc điều bất ngờ phát hiện ra.",
    examples: [{ jp: "先生に聞いたところ、明日テストがあるそうだ。", vn: "Sau khi hỏi thầy giáo thì nghe nói ngày mai có bài kiểm tra." }],
    quiz: { sentence: "病院で検査し________、病気が見つかった。", answer: "たところ", accepts: [], hint: "Sau khi thử làm... thì (kết quả)", translation: "Sau khi kiểm tra ở bệnh viện thì phát hiện ra bệnh." }
  },
  {
    id: 59, unit: 6, pattern: "ところに", meaning: "Đúng lúc / Ngay lúc", explanation: "Thời điểm một hành động đang diễn ra thì có sự việc khác xen vào.",
    examples: [{ jp: "出かけようとしたところに、電話がかかってきた。", vn: "Đúng lúc định ra ngoài thì có điện thoại." }],
    quiz: { sentence: "寝ている________、地震が起きた。", answer: "ところに", accepts: ["ところ", "ところへ"], hint: "Đúng lúc (thời điểm)", translation: "Đúng lúc đang ngủ thì xảy ra động đất." }
  },
  {
    id: 60, unit: 6, pattern: "ところだった", meaning: "Suýt nữa thì", explanation: "Chỉ một việc tồi tệ suýt chút nữa thì đã xảy ra.",
    examples: [{ jp: "もう少しで車にぶつかるところだった。", vn: "Suýt chút nữa thì bị xe tông." }],
    quiz: { sentence: "もう少しで遅刻する________。", answer: "ところだった", accepts: [], hint: "Suýt nữa thì", translation: "Suýt chút nữa thì bị đi muộn." }
  },
  {
    id: 61, unit: 6, pattern: "ほど", meaning: "Đến mức / Khoảng", explanation: "Diễn tả mức độ của một trạng thái (mức độ cao).",
    examples: [{ jp: "死ぬほど疲れた。", vn: "Mệt đến mức muốn chết." }],
    quiz: { sentence: "食べられない________料理が山のようにある。", answer: "ほど", accepts: ["くらい", "ぐらい"], hint: "Đến mức (Mức độ cao)", translation: "Có nhiều đồ ăn đến mức ăn không nổi, chất cao như núi." }
  },
  {
    id: 62, unit: 6, pattern: "ば〜ほど", meaning: "Càng... càng...", explanation: "Chỉ sự phát triển đồng thời của hai vế.",
    examples: [{ jp: "日本語は、勉強すればするほど難しくなる。", vn: "Tiếng Nhật, càng học càng thấy khó." }],
    quiz: { sentence: "考えれ________考えるほど、わからなくなる。", answer: "ば", accepts: [], hint: "Càng... càng", translation: "Càng suy nghĩ thì càng không hiểu." }
  },
  {
    id: 63, unit: 6, pattern: "ほど〜はない", meaning: "Không có gì... bằng", explanation: "So sánh nhất, đánh giá chủ quan rằng một sự vật/việc là nhất.",
    examples: [{ jp: "彼女ほど優しい人はいない。", vn: "Không có người nào hiền bằng cô ấy." }],
    quiz: { sentence: "今年の夏________暑い年はない。", answer: "ほど", accepts: ["くらい", "ぐらい"], hint: "Không có gì... bằng", translation: "Không có năm nào nóng bằng mùa hè năm nay." }
  },

  // --- UNIT 7 ---
  {
    id: 64, unit: 7, pattern: "など / なんか / なんて", meaning: "Như là... / Cỡ như...", explanation: "Đưa ra ví dụ, hoặc mang sắc thái khiêm tốn / coi thường.",
    examples: [{ jp: "私なんて、まだまだです。", vn: "Cỡ như tôi thì vẫn còn kém lắm." }],
    quiz: { sentence: "幽霊________いるわけがない。", answer: "なんて", accepts: ["なんか", "など"], hint: "Cỡ như / Ba cái thứ như", translation: "Mấy thứ như ma quỷ không thể nào tồn tại được." }
  },
  {
    id: 65, unit: 7, pattern: "などと(なんて)言う/思う", meaning: "Nói / Nghĩ rằng", explanation: "Trích dẫn lại lời nói kèm thái độ ngạc nhiên, coi thường.",
    examples: [{ jp: "彼が犯人だなんて、信じられない。", vn: "Thật không thể tin được chuyện anh ta là thủ phạm." }],
    quiz: { sentence: "自分が天才だ________思っていない。", answer: "なんて", accepts: ["などと"], hint: "Nghĩ rằng cái điều như là...", translation: "Tôi chưa từng nghĩ mình là thiên tài hay gì cả." }
  },
  {
    id: 66, unit: 7, pattern: "からには", meaning: "Một khi đã... thì phải...", explanation: "Vì đã đến tình trạng đó nên có nghĩa vụ/quyết tâm phải làm đến cùng.",
    examples: [{ jp: "約束したからには、守らなければならない。", vn: "Một khi đã hứa thì phải giữ lời." }],
    quiz: { sentence: "日本に留学する________、N1に合格したい。", answer: "からには", accepts: [], hint: "Một khi đã", translation: "Một khi đã du học Nhật Bản thì tôi muốn thi đỗ N1." }
  },
  {
    id: 67, unit: 7, pattern: "きる", meaning: "Hoàn thành / Làm đến cùng", explanation: "Làm xong toàn bộ sự việc không còn sót lại gì, hoặc đạt đến giới hạn.",
    examples: [{ jp: "この小説は一日で読みきった。", vn: "Cuốn tiểu thuyết này tôi đã đọc xong hết trong một ngày." }],
    quiz: { sentence: "たくさんあって、一人では食べ________ない。", answer: "きれ", accepts: ["きれない"], hint: "Hoàn thành / Hết (chia khả năng)", translation: "Nhiều quá, một mình tôi không thể ăn hết được." }
  },
  {
    id: 68, unit: 7, pattern: "ぎみ", meaning: "Có vẻ... / Hơi...", explanation: "Cảm thấy có triệu chứng, chiều hướng như thế (sức khỏe/tâm trạng).",
    examples: [{ jp: "最近、風邪ぎみで調子が悪い。", vn: "Gần đây tôi hơi cảm nên người thấy mệt." }],
    quiz: { sentence: "最近、寝不足________で頭が痛い。", answer: "ぎみ", accepts: ["気味"], hint: "Có vẻ / Hơi", translation: "Gần đây do hơi thiếu ngủ nên tôi bị đau đầu." }
  },
  {
    id: 69, unit: 7, pattern: "がち", meaning: "Thường hay... / Dễ...", explanation: "Tần suất xảy ra một tình trạng nào đó nhiều lần (nghĩa tiêu cực).",
    examples: [{ jp: "彼は最近、学校を休みがちだ。", vn: "Gần đây anh ấy hay nghỉ học." }],
    quiz: { sentence: "冬は曇りの日が続き________だ。", answer: "がち", accepts: [], hint: "Thường hay / Dễ (xu hướng tiêu cực)", translation: "Mùa đông thường hay kéo dài những ngày nhiều mây." }
  },
  {
    id: 70, unit: 7, pattern: "向き", meaning: "Phù hợp với...", explanation: "Bản chất, tính chất vốn dĩ thích hợp với một đối tượng.",
    examples: [{ jp: "この映画は子供向きだ。", vn: "Bộ phim này phù hợp với trẻ em." }],
    quiz: { sentence: "この服のデザインは、若い人________だ。", answer: "向き", accepts: ["むき"], hint: "Phù hợp với", translation: "Thiết kế của bộ đồ này phù hợp với người trẻ tuổi." }
  },
  {
    id: 71, unit: 7, pattern: "向け", meaning: "Dành cho... / Hướng tới...", explanation: "Cố tình thiết kế, sản xuất ra để đặc biệt dành riêng cho một đối tượng.",
    examples: [{ jp: "これは外国人向けに書かれた本だ。", vn: "Đây là cuốn sách được viết dành cho người nước ngoài." }],
    quiz: { sentence: "この料理は、子供________に辛くなくしてある。", answer: "向け", accepts: ["むけ"], hint: "Dành cho / Hướng tới", translation: "Món ăn này được làm không cay để dành cho trẻ em." }
  },
  {
    id: 72, unit: 7, pattern: "を通じ(て) / 通し(て)", meaning: "Thông qua / Trong suốt...", explanation: "Thông qua một trung gian, hoặc duy trì trạng thái trong suốt một khoảng thời gian.",
    examples: [{ jp: "この町は一年を通じて暖かい。", vn: "Thị trấn này ấm áp trong suốt cả năm." }],
    quiz: { sentence: "友人の紹介________、彼女と知り合った。", answer: "を通じて", accepts: ["をとおして", "を通して", "を通じ"], hint: "Thông qua", translation: "Tôi đã quen biết cô ấy thông qua sự giới thiệu của bạn bè." }
  },
  {
    id: 73, unit: 7, pattern: "っぽい", meaning: "Có vẻ... / Giống như / Hay", explanation: "Cảm thấy giống như tính chất đó, hoặc có xu hướng dễ bị làm sao đó.",
    examples: [{ jp: "年をとると、忘れっぽくなる。", vn: "Khi có tuổi, người ta hay trở nên đãng trí." }],
    quiz: { sentence: "あの人は怒り________から、気をつけたほうがいい。", answer: "っぽい", accepts: [], hint: "Hay... / Có xu hướng", translation: "Người đó hay cáu gắt lắm nên chú ý thì hơn." }
  },
  {
    id: 74, unit: 7, pattern: "とともに", meaning: "Cùng với... / Đồng thời với...", explanation: "Làm cùng ai đó, hoặc một sự việc thay đổi đồng thời với việc khác.",
    examples: [{ jp: "家族とともに日本へ来た。", vn: "Tôi đã đến Nhật Bản cùng với gia đình." }],
    quiz: { sentence: "春の訪れ________、花が咲き始めた。", answer: "とともに", accepts: ["と共に"], hint: "Cùng với", translation: "Cùng với việc mùa xuân đến, hoa cũng bắt đầu nở." }
  },
  {
    id: 75, unit: 7, pattern: "にともなって", meaning: "Kéo theo...", explanation: "Sự thay đổi của A kéo theo sự thay đổi của B (thường dùng trong văn viết).",
    examples: [{ jp: "人口の増加にともなって、色々な問題が起きた。", vn: "Cùng với sự gia tăng dân số, nhiều vấn đề phát sinh." }],
    quiz: { sentence: "台風の接近________、風が強くなってきた。", answer: "にともなって", accepts: ["に伴って", "にともない", "に伴い"], hint: "Kéo theo", translation: "Cùng với việc bão đang đến gần, gió đã bắt đầu thổi mạnh." }
  },

  // --- UNIT 8 ---
  {
    id: 76, unit: 8, pattern: "に決まっている", meaning: "Chắc chắn là", explanation: "Thể hiện sự phán đoán mang tính chủ quan, đinh ninh là chắc chắn sự việc sẽ như thế.",
    examples: [{ jp: "あんなに勉強したのだから、合格するに決まっている。", vn: "Học nhiều đến thế cơ mà, nhất định sẽ đỗ." }],
    quiz: { sentence: "あんなに高いカメラ、私に買える________。", answer: "に決まっている", accepts: ["にきまっている"], hint: "Chắc chắn là", translation: "Cái máy ảnh đắt đến thế, chắc chắn là tôi không mua nổi rồi." }
  },
  {
    id: 77, unit: 8, pattern: "っけ", meaning: "Có phải... đúng không? / ...ấy nhỉ", explanation: "Dùng khi hỏi lại để xác nhận một điều mà mình không nhớ rõ.",
    examples: [{ jp: "今日は何曜日だっけ。", vn: "Hôm nay là thứ mấy ấy nhỉ?" }],
    quiz: { sentence: "あの人の名前、何だ________。", answer: "っけ", accepts: ["だっけ"], hint: "...ấy nhỉ", translation: "Tên của người kia là gì ấy nhỉ." }
  },
  {
    id: 78, unit: 8, pattern: "ように", meaning: "Để / Mong sao...", explanation: "Chỉ mục đích hoặc dùng khi cầu nguyện, mong mỏi một điều gì đó.",
    examples: [{ jp: "忘れないように、メモをしておく。", vn: "Ghi chú lại để không bị quên." }],
    quiz: { sentence: "風邪を引かない________、コートを着る。", answer: "ように", accepts: [], hint: "Để (mục đích)", translation: "Tôi mặc áo khoác để không bị cảm." }
  },
  {
    id: 79, unit: 8, pattern: "ようがない", meaning: "Không có cách nào để...", explanation: "Cho dù muốn làm cũng không thể làm được vì không có phương pháp.",
    examples: [{ jp: "こんなに壊れていては、直しようがない。", vn: "Hỏng nặng thế này thì hết cách sửa." }],
    quiz: { sentence: "携帯を落としたので、彼に連絡し________。", answer: "ようがない", accepts: ["ようもない"], hint: "Không có cách nào (V-masu)", translation: "Vì làm rơi điện thoại rồi nên không có cách nào liên lạc với anh ấy." }
  },
  {
    id: 80, unit: 8, pattern: "はずだ", meaning: "Chắc chắn là / Thảo nào", explanation: "Phán đoán chắc chắn dựa trên một lý do, căn cứ khách quan hợp lý.",
    examples: [{ jp: "ドアが開かない。鍵がかかっているはずだ。", vn: "Cửa không mở được. Chắc chắn là đang bị khóa." }],
    quiz: { sentence: "薬を飲んだから、もう熱は下がる________。", answer: "はずだ", accepts: ["はず"], hint: "Chắc chắn là", translation: "Đã uống thuốc rồi nên chắc chắn là nhiệt độ sẽ giảm." }
  },
  {
    id: 81, unit: 8, pattern: "わけだ", meaning: "Thảo nào / Nghĩa là...", explanation: "Rút ra kết luận hợp lý từ lý do đã biết, hoặc dùng để hiểu ra vấn đề.",
    examples: [{ jp: "夜更かししたから、今日は眠いわけだ。", vn: "Thức khuya nên hôm nay buồn ngủ là phải (thảo nào)." }],
    quiz: { sentence: "毎日10時間勉強しているんですか。成績がいい________。", answer: "わけだ", accepts: ["訳だ", "わけですね"], hint: "Thảo nào...", translation: "Mỗi ngày học 10 tiếng cơ à. Thảo nào thành tích tốt thế." }
  },
  {
    id: 82, unit: 8, pattern: "わけがない", meaning: "Tuyệt đối không", explanation: "Phủ định mạnh mẽ một sự việc, cho rằng điều đó là không thể nào xảy ra.",
    examples: [{ jp: "彼がそんな嘘をつくわけがない。", vn: "Lẽ nào anh ấy lại nói dối như vậy." }],
    quiz: { sentence: "勉強していないのだから、テストに受かる________。", answer: "わけがない", accepts: ["訳がない"], hint: "Tuyệt đối không", translation: "Không học hành gì cả nên không thể nào đỗ bài kiểm tra được." }
  },
  {
    id: 83, unit: 8, pattern: "わけではない", meaning: "Không hẳn là / Không có nghĩa là", explanation: "Phủ định một phần, đính chính lại một nhận định có vẻ hiển nhiên.",
    examples: [{ jp: "嫌いなわけではないが、あまり食べたくない。", vn: "Không hẳn là ghét nhưng mà tôi không muốn ăn lắm." }],
    quiz: { sentence: "お金があれば幸せという________。", answer: "わけではない", accepts: ["訳ではない", "わけじゃない"], hint: "Không hẳn là", translation: "Không có nghĩa là có tiền thì sẽ hạnh phúc." }
  },
  {
    id: 84, unit: 8, pattern: "わけにはいかない", meaning: "Không thể...", explanation: "Không thể làm việc gì đó vì lý do đạo đức, trách nhiệm, xã hội.",
    examples: [{ jp: "熱があるが、今日は休むわけにはいかない。", vn: "Tuy bị sốt nhưng hôm nay không thể nghỉ được." }],
    quiz: { sentence: "絶対に秘密にすると約束したから、話す________。", answer: "わけにはいかない", accepts: ["訳にはいかない"], hint: "Không thể (vì trách nhiệm)", translation: "Đã hứa là tuyệt đối giữ bí mật nên không thể nói ra được." }
  },
  {
    id: 85, unit: 8, pattern: "ないわけにはいかない", meaning: "Buộc phải / Không thể không", explanation: "Phủ định 2 lần, bắt buộc phải làm vì trách nhiệm đạo đức.",
    examples: [{ jp: "親友の結婚式だから、行かないわけにはいかない。", vn: "Vì là đám cưới của bạn thân nên tôi không thể không đi." }],
    quiz: { sentence: "先輩に頼まれた仕事だから、やら________。", answer: "ないわけにはいかない", accepts: ["ない訳にはいかない"], hint: "Không thể không", translation: "Vì là công việc được nhờ nên không thể không làm." }
  },
  {
    id: 86, unit: 9, pattern: "かわり(に)", meaning: "Thay vì / Đổi lại", explanation: "Làm việc này thay cho việc khác, hoặc làm để bù đắp, đổi lại.",
    examples: [{ jp: "映画に行くかわりに、家でDVDを見た。", vn: "Thay vì đi xem phim, tôi đã xem DVD ở nhà." }],
    quiz: { sentence: "日曜日に働く________、月曜日に休む。", answer: "かわりに", accepts: ["代わりに", "かわり", "代わり"], hint: "Thay vì / Đổi lại", translation: "Đổi lại việc đi làm vào Chủ nhật, tôi sẽ nghỉ thứ Hai." }
  },
  {
    id: 87, unit: 9, pattern: "にかわって", meaning: "Thay cho (đại diện)", explanation: "Đại diện, làm thay một việc mà vốn dĩ người khác thường làm.",
    examples: [{ jp: "社長にかわって、私がご挨拶申し上げます。", vn: "Thay mặt giám đốc, tôi xin gửi lời chào." }],
    quiz: { sentence: "病気の母________、私が料理を作った。", answer: "にかわって", accepts: ["に代わって", "にかわり", "に代わり"], hint: "Thay cho (Đại diện)", translation: "Thay cho người mẹ đang ốm, tôi đã nấu ăn." }
  },
  {
    id: 88, unit: 9, pattern: "こそ", meaning: "Chính là / Nhất định là", explanation: "Nhấn mạnh vào từ đứng trước nó, loại bỏ các khả năng khác.",
    examples: [{ jp: "今年こそN3に合格したい。", vn: "Chính năm nay tôi muốn thi đỗ N3." }],
    quiz: { sentence: "明日________、絶対に遅刻しない。", answer: "こそ", accepts: [], hint: "Chính là (Nhấn mạnh)", translation: "Chính ngày mai, tuyệt đối tôi sẽ không đến muộn." }
  },
  {
    id: 89, unit: 9, pattern: "さえ", meaning: "Ngay cả / Thậm chí", explanation: "Đưa ra một ví dụ cực đoan, mang ý nghĩa 'đến cái đó còn như thế...'",
    examples: [{ jp: "ひらがなさえ書けない。", vn: "Ngay cả hiragana tôi cũng không viết được." }],
    quiz: { sentence: "忙しすぎて、寝る時間________ない。", answer: "さえ", accepts: [], hint: "Ngay cả / Thậm chí", translation: "Quá bận rộn, đến cả thời gian ngủ cũng không có." }
  },
  {
    id: 90, unit: 9, pattern: "として", meaning: "Với tư cách là", explanation: "Chỉ tư cách, lập trường, vai trò của một người hay sự vật.",
    examples: [{ jp: "彼は留学生として日本へ来た。", vn: "Anh ấy đến Nhật Bản với tư cách là du học sinh." }],
    quiz: { sentence: "彼は先生________この学校で働いている。", answer: "として", accepts: [], hint: "Với tư cách là", translation: "Anh ấy làm việc ở trường này với tư cách là giáo viên." }
  },
  {
    id: 91, unit: 9, pattern: "からといって", meaning: "Chỉ vì... mà (không hẳn)", explanation: "Dù có lý do đó, kết luận cũng không hẳn như mong đợi.",
    examples: [{ jp: "日本人だからといって、漢字が全部書けるわけではない。", vn: "Không phải cứ là người Nhật thì viết được hết Kanji." }],
    quiz: { sentence: "お金がある________、幸せだとは限らない。", answer: "からといって", accepts: ["からって"], hint: "Chỉ vì... mà", translation: "Không hẳn cứ có tiền là sẽ hạnh phúc." }
  },
  {
    id: 92, unit: 9, pattern: "に反し(て)", meaning: "Trái với", explanation: "Trái ngược với dự đoán, kỳ vọng, hy vọng hoặc quy tắc.",
    examples: [{ jp: "みんなの予想に反して、Aチームが優勝した。", vn: "Trái với dự đoán của mọi người, đội A đã vô địch." }],
    quiz: { sentence: "天気予報________、雨が降った。", answer: "に反して", accepts: ["に反し"], hint: "Trái với (Dự đoán)", translation: "Trái với dự báo thời tiết, trời đã mưa." }
  },
  {
    id: 93, unit: 9, pattern: "にもとづいて", meaning: "Dựa trên (cơ sở/dữ liệu)", explanation: "Dựa trên cơ sở chuẩn mực (dữ liệu, luật lệ) để hành động.",
    examples: [{ jp: "調査結果にもとづいて、レポートを書いた。", vn: "Tôi đã viết báo cáo dựa trên kết quả điều tra." }],
    quiz: { sentence: "この計画は、データ________作られている。", answer: "にもとづいて", accepts: ["に基づいて", "にもとづき"], hint: "Dựa trên (Dữ liệu)", translation: "Kế hoạch này được lập ra dựa trên dữ liệu." }
  },
  {
    id: 94, unit: 9, pattern: "をもとに(して)", meaning: "Dựa trên (tư liệu/ý tưởng)", explanation: "Lấy một sự thật, kinh nghiệm làm chất liệu sáng tạo.",
    examples: [{ jp: "この映画は事実をもとにして作られた。", vn: "Bộ phim này được làm dựa trên sự thật." }],
    quiz: { sentence: "この小説は、作者の経験________書かれた。", answer: "をもとにして", accepts: ["をもとに"], hint: "Dựa trên (Chất liệu)", translation: "Cuốn tiểu thuyết này được viết dựa trên kinh nghiệm tác giả." }
  },
  {
    id: 95, unit: 9, pattern: "反面 / 半面", meaning: "Mặt khác / Ngược lại", explanation: "Cùng một sự vật nhưng tồn tại hai mặt trái ngược nhau.",
    examples: [{ jp: "都会の生活は便利な反面、ストレスも多い。", vn: "Đô thị một mặt thì tiện lợi, mặt khác cũng nhiều căng thẳng." }],
    quiz: { sentence: "この薬はよく効く________、副作用もある。", answer: "反面", accepts: ["半面", "はんめん"], hint: "Mặt khác", translation: "Loại thuốc này hiệu quả tốt, nhưng mặt khác có tác dụng phụ." }
  },
  {
    id: 96, unit: 9, pattern: "れる / られる (自発)", meaning: "Tự nhiên cảm thấy", explanation: "Dùng thể bị động để diễn tả cảm xúc tự nhiên nảy sinh.",
    examples: [{ jp: "この写真を見ると、昔のことが思い出される。", vn: "Nhìn bức ảnh này, tôi lại tự nhiên nhớ về ngày xưa." }],
    quiz: { sentence: "この歌を聞くと、昔のことが思い________。", answer: "出される", accepts: ["だされる"], hint: "Tự nhiên nhớ đến (Thể bị động)", translation: "Nghe bài hát này, chuyện ngày xưa lại ùa về." }
  },
  {
    id: 97, unit: 9, pattern: "てたまらない", meaning: "Rất... không chịu nổi", explanation: "Nhấn mạnh cảm giác cơ thể/tâm lý không thể kiềm chế được.",
    examples: [{ jp: "今日は暑くてたまらない。", vn: "Hôm nay nóng không chịu nổi." }],
    quiz: { sentence: "喉が渇い________、冷たい水が飲みたい。", answer: "てたまらない", accepts: [], hint: "Rất... không chịu nổi", translation: "Khát khô cả cổ không chịu nổi, tôi muốn uống nước lạnh." }
  },
  {
    id: 98, unit: 9, pattern: "てならない", meaning: "Rất... (Tự nhiên cảm thấy)", explanation: "Cảm xúc tự nhiên dâng trào (thường tiêu cực, văn trang trọng).",
    examples: [{ jp: "国の家族のことが心配でならない。", vn: "Tôi vô cùng lo lắng cho gia đình ở quê." }],
    quiz: { sentence: "面接の結果가 기쁘다면.", answer: "てならない", accepts: [], hint: "Vô cùng...", translation: "Tôi vô cùng bận tâm về kết quả của buổi phỏng vấn." }
  },
  {
    id: 99, unit: 10, pattern: "とか", meaning: "Ví dụ như là / Hay là", explanation: "Liệt kê ví dụ, gợi ý hoặc không muốn khẳng định chắc chắn.",
    examples: [{ jp: "休日は映画を見るとか、買い物に行くとかして過ごします。", vn: "Ngày nghỉ tôi thường xem phim hoặc đi mua sắm." }],
    quiz: { sentence: "休みの日は、本を読む________、音楽を聞く________しています。", answer: "とか", accepts: [], hint: "Liệt kê ví dụ", translation: "Vào ngày nghỉ tôi thường đọc sách hay là nghe nhạc." }
  },
  {
    id: 100, unit: 10, pattern: "だけ", meaning: "Chỉ / Mức tối đa có thể", explanation: "Biểu thị sự giới hạn hoặc làm đến mức cao nhất (好きなだけ).",
    examples: [{ jp: "私が持っているお金はこれだけです。", vn: "Số tiền tôi có chỉ bằng này thôi." }],
    quiz: { sentence: "今日は疲れたので、これ________にしておきます。", answer: "だけ", accepts: [], hint: "Chỉ (giới hạn)", translation: "Hôm nay tôi mệt rồi nên chỉ làm đến đây thôi." }
  },
  {
    id: 101, unit: 10, pattern: "ばかりでなく", meaning: "Không chỉ... mà còn...", explanation: "Ngoài sự vật/việc đó ra thì còn có cái khác nữa.",
    examples: [{ jp: "彼は英語ばかりでなく、フランス語も話せる。", vn: "Anh ấy không chỉ nói được tiếng Anh mà còn tiếng Pháp." }],
    quiz: { sentence: "彼女は美しい________、性格もいい。", answer: "ばかりでなく", accepts: ["ばかりか"], hint: "Không chỉ... mà còn...", translation: "Cô ấy không chỉ xinh đẹp mà tính cách cũng tốt." }
  },
  {
    id: 102, unit: 10, pattern: "かけ / かける", meaning: "Đang làm dở / Chưa xong", explanation: "Hành động đang thực hiện giữa chừng thì dừng lại.",
    examples: [{ jp: "テーブルの上に食べかけのリンゴがある。", vn: "Trên bàn có quả táo đang ăn dở." }],
    quiz: { sentence: "この本はまだ読み________だ。", answer: "かけ", accepts: ["かけの", "かけている"], hint: "Đang làm dở (V-masu)", translation: "Cuốn sách này tôi vẫn đang đọc dở." }
  },
  {
    id: 103, unit: 10, pattern: "をこめて", meaning: "Gửi gắm (tình cảm) vào...", explanation: "Làm việc gì đó với tất cả tình yêu, lòng biết ơn, tâm nguyện.",
    examples: [{ jp: "愛をこめて、手紙を書きました。", vn: "Tôi đã viết lá thư chứa đựng tất cả tình yêu thương." }],
    quiz: { sentence: "心を________、プレゼントを選びました。", answer: "こめて", accepts: ["込めて"], hint: "Gửi gắm", translation: "Tôi đã chọn món quà này với tất cả tấm lòng." }
  },
  {
    id: 104, unit: 10, pattern: "わりに(は)", meaning: "Khá là... so với", explanation: "Đánh giá sự việc có kết quả trái ngược với mức độ dự đoán.",
    examples: [{ jp: "彼はよく食べるわりに、太らない。", vn: "Anh ấy ăn nhiều thế mà lại không béo." }],
    quiz: { sentence: "お年寄りの________、とても元気だ。", answer: "わりに", accepts: ["わりには", "割に", "割には"], hint: "So với... thì khá là...", translation: "So với tuổi già thì cụ khá là khỏe mạnh." }
  },
  {
    id: 105, unit: 10, pattern: "くせに", meaning: "Mặc dù... thế mà (trách móc)", explanation: "Giống 'わりに' nhưng mang sắc thái chê bai, trách móc.",
    examples: [{ jp: "知っているくせに、教えてくれない。", vn: "Biết thế mà lại không chỉ cho tôi." }],
    quiz: { sentence: "お金がない________、高いものばかり買う。", answer: "くせに", accepts: [], hint: "Mặc dù... thế mà", translation: "Không có tiền thế mà toàn mua đồ đắt đỏ." }
  },
  {
    id: 106, unit: 10, pattern: "てみせる", meaning: "Chắc chắn sẽ làm (cho xem)", explanation: "Thể hiện quyết tâm mạnh mẽ chứng tỏ cho người khác thấy.",
    examples: [{ jp: "今度の試験には、絶対に合格してみせる。", vn: "Kỳ thi lần này tôi chắc chắn sẽ đỗ cho mà xem." }],
    quiz: { sentence: "次の試合は絶対に勝っ________。", answer: "てみせる", accepts: ["て見せる"], hint: "Sẽ làm cho mà xem", translation: "Trận đấu tới tôi nhất định sẽ chiến thắng cho mà xem." }
  },
  {
    id: 107, unit: 10, pattern: "をきっかけに", meaning: "Nhân cơ hội / Nhờ có", explanation: "Lấy một sự kiện làm duyên cớ, bước ngoặt để bắt đầu việc mới.",
    examples: [{ jp: "大学入学をきっかけに、一人暮らしを始めた。", vn: "Nhân dịp vào đại học, tôi đã bắt đầu ra ở riêng." }],
    quiz: { sentence: "日本のアニメ________、日本語を勉強し始めた。", answer: "をきっかけに", accepts: ["をきっかけにして", "をきっかけとして"], hint: "Nhân cơ hội", translation: "Nhờ anime Nhật mà tôi bắt đầu học tiếng Nhật." }
  },
  {
    id: 108, unit: 10, pattern: "とする / としたら", meaning: "Giả sử (rằng)... / Nếu như", explanation: "Đưa ra một giả định không có thật hoặc khả năng xảy ra thấp.",
    examples: [{ jp: "もし宝くじが当たったとしたら、家を買いたい。", vn: "Giả sử mà trúng vé số thì tôi muốn mua nhà." }],
    quiz: { sentence: "もし生まれ変われると________、鳥になりたい。", answer: "したら", accepts: ["すれば", "すると"], hint: "Nếu như / Giả sử", translation: "Nếu như được sinh ra một lần nữa, tôi muốn trở thành chú chim." }
  },
  {
    id: 109, unit: 10, pattern: "際に / 際(に)は", meaning: "Khi / Lúc (trang trọng)", explanation: "Giống với 時, nhưng lịch sự, dùng trong văn bản, thông báo.",
    examples: [{ jp: "帰国の際には、連絡してください。", vn: "Khi nào về nước thì hãy liên lạc nhé." }],
    quiz: { sentence: "お降りの________、お忘れ物にご注意ください。", answer: "際は", accepts: ["際に", "際"], hint: "Khi / Lúc (lịch sự)", translation: "Khi quý khách xuống tàu, xin lưu ý hành lý để quên." }
  },
  {
    id: 110, unit: 10, pattern: "おそれがある", meaning: "Có nguy cơ / E rằng...", explanation: "Sự lo lắng điều tồi tệ có thể xảy ra (thường dùng trong bản tin).",
    examples: [{ jp: "明日は大雨のおそれがある。", vn: "Ngày mai có nguy cơ sẽ mưa lớn." }],
    quiz: { sentence: "この地域は津波の________があります。", answer: "おそれ", accepts: ["恐れ"], hint: "Có nguy cơ", translation: "Khu vực này có nguy cơ xảy ra sóng thần." }
  }
];

export default function Mimikara() {
  const navigate = useNavigate();
  const [activeMode, setActiveMode] = useState('menu'); // 'menu', 'flashcard', 'quiz'
  const [selectedUnit, setSelectedUnit] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState(null); // 'correct', 'incorrect'
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [originMode, setOriginMode] = useState('menu');
  const inputRef = useRef(null);

  // Tự động focus vào ô nhập liệu
  useEffect(() => {
    activeMode === 'quiz' && !feedback && inputRef.current?.focus();
  }, [currentIndex, activeMode, feedback]);

  // Filter data based on selected unit
  const activeData = useMemo(() =>
    selectedUnit === 'all' ? grammarData : grammarData.filter(item => item.unit === selectedUnit),
    [selectedUnit]);

  // Filter for search
  const removeAccents = (str) => {
    return str.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .toLowerCase();
  };

  const filteredGrammar = useMemo(() => {
    const dataSource = activeData;
    if (!searchTerm.trim()) return dataSource;
    const term = removeAccents(searchTerm.trim());
    return dataSource.filter(item => 
      removeAccents(item.pattern).includes(term) || 
      removeAccents(item.meaning).includes(term) ||
      removeAccents(item.explanation).includes(term)
    );
  }, [searchTerm, activeData]);

  // Grouped by unit for display
  const groupedGrammar = useMemo(() => {
    return filteredGrammar.reduce((acc, item) => {
      if (!acc[item.unit]) acc[item.unit] = [];
      acc[item.unit].push(item);
      return acc;
    }, {});
  }, [filteredGrammar]);

  // Reset state when switching modes
  const switchMode = useCallback((mode) => {
    setActiveMode(mode);
    if (mode === 'menu' || mode === 'list') {
      setOriginMode(mode);
    }
    setCurrentIndex(0);
    setIsFlipped(false);
    setUserInput('');
    setFeedback(null);
    setScore(0);
    setShowHint(false);
    // Don't clear searchTerm here to allow "search tiếp"
  }, []);

  const selectGrammarFromList = useCallback((item) => {
    setSelectedUnit('all');
    const index = grammarData.findIndex(g => g.id === item.id);
    setCurrentIndex(index);
    setActiveMode('flashcard');
    setOriginMode('list');
    setIsFlipped(false);
  }, []);

  const handleNext = useCallback(() => {
    if (currentIndex >= activeData.length - 1) {
      activeMode === 'quiz' && alert(`Chúc mừng! Bạn đã hoàn thành bài luyện tập với số điểm: ${score}/${activeData.length}`);
      switchMode('menu');
      return;
    }
    setCurrentIndex(curr => curr + 1);
    setIsFlipped(false);
    setUserInput('');
    setFeedback(null);
    setShowHint(false);
  }, [currentIndex, activeData.length, activeMode, score, switchMode]);

  const checkAnswer = useCallback(() => {
    const cleanInput = userInput.trim().replace(/\s/g, '').toLowerCase();
    const currentQuiz = activeData[currentIndex].quiz;
    const cleanAnswer = currentQuiz.answer.replace(/\s/g, '').toLowerCase();
    const baseAccepts = currentQuiz.accepts ? currentQuiz.accepts.map(a => a.replace(/\s/g, '').toLowerCase()) : [];

    // Legacy support for specific items
    const legacyAccepts = { 12: ['てる'], 29: ['ぐらい'], 30: ['ぐらいなら'] }[activeData[currentIndex].id] || [];
    const validAnswers = [cleanAnswer, ...baseAccepts, ...legacyAccepts];

    const isCorrect = validAnswers.includes(cleanInput);
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setScore(prev => isCorrect ? prev + 1 : prev);
  }, [userInput, activeData, currentIndex]);

  const handleKeyDown = useCallback((e) => {
    const isEnter = e.key === 'Enter';
    const isArrow = e.key === 'ArrowUp' || e.key === 'ArrowDown';
    if (isEnter) {
      e.preventDefault();
      if (!e.repeat) {
        !feedback ? checkAnswer() : handleNext();
      }
    }
    if (isArrow) {
      e.preventDefault();
      if (!feedback) setShowHint(prev => !prev);
    }
  }, [feedback, checkAnswer, handleNext]);

  // --- RENDERING STUDY VIEW (MIMIKARA) ---
  return (
    <div className="min-h-screen w-full bg-white font-sans text-black flex flex-col items-center pt-44 md:pt-48 px-4 md:px-12 selection:bg-black selection:text-white">

      <div className="w-full max-w-6xl mb-12 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
            MIMIKARA OBOERU • {selectedUnit === 'all' ? 'TẤT CẢ' : `UNIT ${selectedUnit}`}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter italic">Mimikara</h1>
        </div>
        <button
          onClick={() => {
            if (activeMode === 'menu') {
              navigate('/grammar');
            } else {
              // Return to selection source (menu or list)
              setActiveMode(originMode);
              setCurrentIndex(0);
              setIsFlipped(false);
            }
          }}
          className="px-6 py-2 border border-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
        >
          {activeMode === 'menu' ? 'Thoát' : 'Quay lại'}
        </button>
      </div>

      <div className="w-full max-w-6xl flex-grow flex flex-col">
        {activeMode === 'menu' && (
          <div className="flex flex-col gap-12">
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <button
                  key={num}
                  onClick={() => setSelectedUnit(num)}
                  className={`px-6 py-2 border ${selectedUnit === num ? 'bg-black text-white border-black' : 'border-slate-200 text-slate-400 hover:border-black hover:text-black'} text-xs font-bold transition-all`}
                >
                  U{num < 10 ? `0${num}` : num}
                </button>
              ))}
              <button
                onClick={() => setSelectedUnit('all')}
                className={`px-6 py-2 border ${selectedUnit === 'all' ? 'bg-black text-white border-black' : 'border-slate-200 text-slate-400 hover:border-black hover:text-black'} text-xs font-bold transition-all`}
              >
                TẤT CẢ
              </button>
            </div>

            <div className="flex gap-4">
              {[
                { id: 'flashcard', label: 'Ghi nhớ' },
                { id: 'quiz', label: 'Luyện tập' }
              ].map(mode => (
                <button
                  key={mode.id}
                  onClick={() => switchMode(mode.id)}
                  className="px-12 py-5 border border-black text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all flex flex-col items-center gap-1"
                >
                  {mode.id === 'flashcard' && <Brain className="w-4 h-4 mb-1 mx-auto" />}
                  {mode.id === 'quiz' && <CheckCircle className="w-4 h-4 mb-1 mx-auto" />}
                  {mode.label}
                </button>
              ))}
              <button
                onClick={() => switchMode('list')}
                className="px-12 py-5 border border-black text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all flex flex-col items-center gap-1"
              >
                <List className="w-4 h-4 mb-1" />
                Danh sách
              </button>
            </div>
          </div>
        )}

        {/* LIST VIEW */}
        {activeMode === 'list' && (
          <div className="flex flex-col flex-grow animate-in">
            <div className="relative mb-12">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
              <input
                type="text"
                placeholder="Tìm mẫu ngữ pháp hoặc ý nghĩa..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-4 border-b-2 border-slate-100 focus:border-black outline-none transition-all text-xl font-medium placeholder:text-slate-200"
              />
            </div>

            <div className="flex flex-col gap-20 mb-20">
              {Object.keys(groupedGrammar).length > 0 ? (
                Object.keys(groupedGrammar).sort((a, b) => Number(a) - Number(b)).map(unit => (
                  <div key={unit} className="animate-in">
                    {selectedUnit === 'all' && (
                      <div className="flex items-center gap-6 mb-8 group">
                        <div className="h-px bg-slate-100 flex-grow group-hover:bg-black transition-colors" />
                        <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter whitespace-nowrap">Unit {unit}</h2>
                        <div className="h-px bg-slate-100 flex-grow group-hover:bg-black transition-colors" />
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {groupedGrammar[unit].map((item) => (
                        <div 
                          key={item.id}
                          onClick={() => selectGrammarFromList(item)}
                          className="p-8 border border-slate-100 rounded-[2rem] hover:border-black transition-all group flex flex-col justify-between aspect-[16/10] md:aspect-video cursor-pointer"
                        >
                          <div>
                            <div className="flex justify-between items-start mb-6">
                              <span className="text-[10px] font-bold text-slate-300 tracking-widest uppercase">U{item.unit < 10 ? `0${item.unit}` : item.unit} • #{item.id}</span>
                              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <ChevronRight className="w-4 h-4 text-black" />
                              </div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tighter italic">{item.pattern}</h3>
                            <p className="text-slate-500 font-bold text-sm mb-4 leading-tight">{item.meaning}</p>
                          </div>
                          <div className="pt-6 border-t border-slate-50">
                            <p className="text-[11px] text-slate-400 leading-relaxed font-medium line-clamp-2 italic">
                              {item.explanation}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-20 text-center">
                  <p className="text-slate-300 text-xl italic font-medium">Không tìm thấy kết quả nào cho "{searchTerm}"</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* STUDY VIEWS */}
        {(activeMode === 'flashcard' || activeMode === 'quiz') && (
          <div className="flex flex-col flex-grow animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-widest">
                UNIT {activeData[currentIndex].unit} | {activeMode === 'flashcard' ? 'GHI NHỚ' : 'LUYỆN TẬP'}
              </span>
              <span className="text-xs text-slate-400 font-bold tracking-widest">{currentIndex + 1} / {activeData.length}</span>
            </div>

            {activeMode === 'flashcard' ? (
              <div
                className="flex-grow flex flex-col items-center justify-center py-12"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className={`w-full max-w-3xl aspect-[16/10] md:aspect-[16/9] border-2 border-slate-200 flex flex-col items-center justify-center p-6 md:p-12 text-center cursor-pointer transition-all shadow-sm hover:shadow-md ${isFlipped ? 'bg-white border-black' : 'bg-white'}`}>
                  {!isFlipped ? (
                    <>
                      <h2 className="text-3xl md:text-5xl font-bold mb-4 italic text-black">{activeData[currentIndex].pattern}</h2>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">Nhấn để xem nghĩa</p>
                    </>
                  ) : (
                    <div className="animate-in fade-in duration-300 w-full px-4">
                      <div className="mb-10">
                        <h3 className="text-2xl md:text-4xl font-black mb-3 italic text-black tracking-tighter">{activeData[currentIndex].meaning}</h3>
                        <p className="text-slate-500 text-xs md:text-sm max-w-md mx-auto font-medium leading-relaxed">{activeData[currentIndex].explanation}</p>
                      </div>

                      <div className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 max-w-xl mx-auto text-left relative overflow-hidden group hover:border-black transition-all">
                        <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                          <BookOpen className="w-12 h-12 text-black" />
                        </div>
                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-6">Ví dụ minh họa</p>
                        <p className="text-xl md:text-2xl font-bold italic leading-tight text-black mb-3 tracking-tight">
                          {activeData[currentIndex].examples[0].jp}
                        </p>
                        <p className="text-xs md:text-sm text-slate-400 font-medium italic">
                          {activeData[currentIndex].examples[0].vn}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex-grow flex flex-col items-center justify-center py-12 text-center">
                <p className="text-slate-400 italic mb-8">"{activeData[currentIndex].quiz.translation}"</p>
                <div className="mb-8 md:mb-12 px-2">
                  <h3 className="text-xl md:text-3xl font-bold tracking-tight italic flex flex-wrap justify-center items-center gap-y-2">
                    {activeData[currentIndex].quiz.sentence.split('________').map((part, i, arr) => (
                      <React.Fragment key={i}>
                        <span>{part}</span>
                        {i < arr.length - 1 && (
                          <span className={`inline-flex flex-col items-center mx-3 min-w-[140px] relative`}>
                            <span className={`w-full pb-2 border-b-2 text-center transition-all ${feedback === 'correct' ? 'border-emerald-500 text-emerald-600' : feedback === 'incorrect' ? 'border-red-400 text-red-500' : 'border-black'}`}>
                              {feedback === 'correct' ? activeData[currentIndex].quiz.answer : (userInput || '...')}
                            </span>
                            {feedback === 'incorrect' && (
                              <span className="absolute -top-10 bg-emerald-500 text-white text-[11px] font-black px-4 py-1.5 rounded-full shadow-xl animate-bounce-subtle whitespace-nowrap z-10">
                                {activeData[currentIndex].quiz.answer}
                                <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-500 rotate-45"></span>
                              </span>
                            )}
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </h3>
                </div>
                <div className="w-full max-w-md mx-auto space-y-4">
                  <input
                    ref={inputRef}
                    value={userInput}
                    onChange={e => { setUserInput(e.target.value); feedback && setFeedback(null); }}
                    onKeyDown={handleKeyDown}
                    placeholder="Nhập đáp án..."
                    readOnly={!!feedback}
                    className={`w-full p-4 border border-black text-center text-xl font-bold outline-none transition-all ${feedback === 'correct' ? 'bg-emerald-50 border-emerald-500' : feedback === 'incorrect' ? 'bg-red-50 border-red-400' : 'focus:outline-none'}`}
                  />
                  <div className="flex flex-col gap-2">
                    {!feedback ? (
                      <div className="flex flex-col gap-3">
                        <button onClick={checkAnswer} className="w-full py-4 bg-black text-white text-xs font-bold uppercase tracking-widest">Kiểm Tra</button>
                        <button 
                          onClick={() => setShowHint(!showHint)} 
                          className="w-full py-3 border border-slate-200 text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:border-black hover:text-black transition-colors"
                        >
                          {showHint ? 'Ẩn gợi ý' : 'Xem gợi ý'}
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {feedback === 'incorrect' && (
                          <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl animate-in text-left">
                            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Đáp án đúng là:</p>
                            <p className="text-xl font-bold text-emerald-700">{activeData[currentIndex].quiz.answer}</p>
                          </div>
                        )}
                        <button onClick={handleNext} className={`w-full py-4 ${feedback === 'correct' ? 'bg-emerald-600' : 'bg-black'} text-white text-xs font-bold uppercase tracking-widest`}>Tiếp Theo</button>
                      </div>
                    )}
                  </div>
                  {showHint && !feedback && <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4">Gợi ý: {activeData[currentIndex].quiz.hint}</p>}
                </div>
              </div>
            )}

            <div className="mt-auto flex justify-between gap-4 py-8">
              <button
                onClick={() => { currentIndex > 0 && (setCurrentIndex(currentIndex - 1), setIsFlipped(false)); }}
                disabled={currentIndex === 0}
                className="flex-1 py-4 border border-black text-xs font-bold uppercase tracking-widest disabled:opacity-20 hover:bg-black hover:text-white transition-all"
              >
                Trước
              </button>
              <button
                onClick={handleNext}
                className="flex-1 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all"
              >
                {currentIndex === activeData.length - 1 ? 'Xong' : 'Sau'}
              </button>
            </div>
          </div>
        )}

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .perspective-2000 { perspective: 2000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        @keyframes bounce-subtle { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
        .animate-bounce-subtle { animation: bounce-subtle 2s infinite ease-in-out; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { animation: fade-in 0.4s ease-out forwards; }
      `}} />
    </div>
  );
}
