export const grammarData = [
  // --- UNIT 1 ---
  {
    id: 1, unit: 1, pattern: "ことにしている", romaji: "koto ni shite iru", meaning: "Quyết định (thói quen cá nhân)", explanation: "Diễn tả thói quen hoặc quy tắc mà bản thân tự đề ra và thực hiện.",
    examples: [{ jp: "健康のために、毎日野菜を食べることにしている。", vn: "Để tốt cho sức khỏe, tôi quyết định (duy trì thói quen) ăn rau mỗi ngày." }, { jp: "寝る前に、必ず本を10ページ読むことにしている。", vn: "Trước khi ngủ, tôi luôn quyết định đọc 10 trang sách." }, { jp: "健康のため、毎朝牛乳をのむことにしている。", vn: "Để tốt cho sức khỏe, tôi quyết định uống sữa mỗi sáng.", isBook: true, blank: "ことにしている" }],
    quiz: { sentence: "私は毎日、30分ジョギング________。", answer: "ことにしている", accepts: [], hint: "Quyết định thói quen của bản thân", translation: "Tôi quyết định chạy bộ 30 phút mỗi ngày." }
  },
  {
    id: 2, unit: 1, pattern: "ことになっている", romaji: "koto ni natte iru", meaning: "Quy định / Dự định (khách quan)", explanation: "Diễn tả những việc đã được quyết định bởi tổ chức, quy định hoặc dự định mang tính khách quan.",
    examples: [{ jp: "法律で、車を運転する時はシートベルトをすることになっている。", vn: "Theo luật pháp, khi lái xe ô tô thì quy định phải thắt dây an toàn." }, { jp: "教室では日本語だけで話すことになっています。", vn: "Trong lớp học có quy định chỉ được nói bằng tiếng Nhật." }, { jp: "法律では、20歳未満はお酒を飲んではいけないことになっている。", vn: "Theo luật pháp, quy định người dưới 20 tuổi không được uống rượu.", isBook: true, blank: "ことになっている" }],
    quiz: { sentence: "この部屋では、タバコを吸ってはいけない________。", answer: "ことになっている", accepts: [], hint: "Quy định chung", translation: "Trong phòng này có quy định không được hút thuốc." }
  },
  {
    id: 3, unit: 1, pattern: "ようになっている", romaji: "you ni natte iru", meaning: "Được thiết kế để / Trở nên (tự động)", explanation: "Diễn tả chức năng của máy móc hoặc sự biến đổi trạng thái mang tính tự động.",
    examples: [{ jp: "このドアは人が近づくと、自動で開くようになっている。", vn: "Cánh cửa này được thiết kế để tự động mở khi có người tiến lại gần." }, { jp: "このパソコンは、パスワードを入力しないと使えないようになっている。", vn: "Cái máy tính này được thiết kế để không thể sử dụng nếu không nhập mật khẩu." }, { jp: "このストーブは大きく傾くと、自動的に火が消えるようになっている。", vn: "Cái lò sưởi này được thiết kế để tự động tắt lửa khi bị nghiêng mạnh.", isBook: true, blank: "ようになっている" }],
    quiz: { sentence: "この機械は、暗くなると電気がつく________。", answer: "ようになっている", accepts: [], hint: "Chức năng/Cấu tạo tự động", translation: "Cái máy này được thiết kế để khi trời tối thì đèn sẽ sáng." }
  },
  {
    id: 4, unit: 1, pattern: "ような / ように", romaji: "you na / you ni", meaning: "Giống như / Theo như", explanation: "Dùng để so sánh hoặc đưa ra ví dụ.",
    examples: [{ jp: "太陽のような明るい人だ。", vn: "Đó là một người tươi sáng như mặt trời." }, { jp: "私もあなたのように、上手に日本語が話せるようになりたい。", vn: "Tôi cũng muốn có thể nói giỏi tiếng Nhật giống như bạn." }, { jp: "私は赤やピンクのような、明るい色が好きだ。", vn: "Tôi thích những màu sáng như màu đỏ hay màu hồng.", isBook: true, blank: "のような" }],
    quiz: { sentence: "田中さんの________優しい人になりたい。", answer: "ような", accepts: ["ように"], hint: "Giống như (so sánh)", translation: "Tôi muốn trở thành một người hiền lành giống như anh Tanaka." }
  },
  {
    id: 5, unit: 1, pattern: "みたいだ", romaji: "mitai da", meaning: "Có vẻ như / Giống như (văn nói)", explanation: "Dùng để phỏng đoán dựa trên cảm nhận hoặc so sánh ví von trong văn nói.",
    examples: [
      { jp: "このケーキ、美味しそう。まるで本物みたいだ。", vn: "Cái bánh này trông ngon quá. Cứ như là đồ thật vậy." },
      { jp: "彼はもう30歳なのに、子供みたいだ。", vn: "Anh ấy đã 30 tuổi rồi mà cứ như trẻ con vậy." },
      { jp: "「あの店、人気がないみたいだね。いつ行ってもすいている」", vn: "Quán kia có vẻ như không nổi tiếng lắm nhỉ. Lúc nào đi cũng thấy vắng.", isBook: true, blank: "みたいだ" },
      { jp: "宝くじで1,000万円当たった. 夢をみているみたいだ。", vn: "Trúng số 10 triệu yên. Cứ như là đang mơ vậy.", isBook: true, blank: "みたいだ" },
      { jp: "私も早くリンさんみたいに、日本語が上手になりたいなあ。", vn: "Tôi cũng muốn nhanh chóng trở nên giỏi tiếng Nhật như chị Linh.", isBook: true, blank: "みたいに" }
    ],
    quiz: { sentence: "彼はまるで子供________だ。", answer: "みたい", accepts: [], hint: "Giống như (văn nói)", translation: "Anh ấy cứ như là trẻ con vậy." }
  },
  {
    id: 6, unit: 1, pattern: "らしい", romaji: "rashii", meaning: "Nghe nói / Đúng chất", explanation: "Dùng để truyền đạt tin đồn hoặc diễn tả tính chất điển hình của sự vật/sự việc.",
    examples: [{ jp: "明日は雨が降るらしい。", vn: "Nghe nói ngày mai trời sẽ mưa." }, { jp: "今日は春らしい、暖かい day nhé.", vn: "Hôm nay là một ngày ấm áp, đúng chất mùa xuân nhỉ." }, { jp: "大山さんは拾ってきたネコを育てているそうだ. いかにも動物好きなかれらしい。", vn: "Nghe nói anh Oyama đang nuôi con mèo nhặt được. Thật đúng chất là người yêu động vật như anh ấy.", isBook: true, blank: "らしい" }],
    quiz: { sentence: "噂によると、あの二人は結婚する________。", answer: "らしい", accepts: [], hint: "Nghe nói (tin đồn)", translation: "Theo lời đồn thì hai người đó nghe nói sắp kết hôn." }
  },
  {
    id: 7, unit: 1, pattern: "つもり", romaji: "tsumori", meaning: "Tưởng là / Cứ ngỡ là", explanation: "Diễn tả một ý định hoặc trạng thái mà bản thân tin là như vậy, nhưng thực tế lại không phải (hoặc chỉ là chủ quan).",
    examples: [
      { jp: "バッグにさいふを入れたつもりだったが、なかった。", vn: "Tôi cứ ngõ là đã cho ví vào túi rồi, thế mà lúc tìm lại không thấy." },
      { jp: "メールをおくったつもりだったが、届いていなかった。", vn: "Tôi cứ ngỡ là đã gửi mail rồi, nhưng hóa ra nó vẫn chưa tới.", isBook: true, blank: "つもり" }
    ],
    quiz: { sentence: "メールを________つもりだったが、届いていなかった。", answer: "送った", accepts: [], hint: "Cứ ngỡ là đã gửi (V-ta)", translation: "Tôi cứ nghĩ là đã gửi mail rồi, nhưng thực ra chưa tới." }
  },
  {
    id: 8, unit: 1, pattern: "てくる", romaji: "te kuru", meaning: "Bắt đầu / Trở nên / Tiến về phía mình", explanation: "Diễn tả hành động đang bắt đầu, thay đổi diễn ra hoặc hướng về phía người nói.",
    examples: [{ jp: "最近、少しずつ寒くなってきた。", vn: "Gần đây trời đã bắt đầu lạnh dần lên." }, { jp: "太ってきたので、ダイエットをすることにした。", vn: "Vì trở nên béo ra nên tôi đã quyết định ăn kiêng." }, { jp: "こう暑いと、じっとしていても汗が出てくる。", vn: "Trời nóng thế này thì dù có đứng yên mồ hôi cũng vã ra.", isBook: true, blank: "くる" }],
    quiz: { sentence: "だんだん日本語が上手になって________。", answer: "きた", accepts: ["くる"], hint: "Thay đổi trạng thái (quá khứ của てくる)", translation: "Tiếng Nhật của tôi đang dần dần trở nên giỏi lên." }
  },

  // --- UNIT 2 ---
  {
    id: 9, unit: 2, pattern: "てほしい / もらいたい", romaji: "te hoshii / moraitai", meaning: "Muốn (ai đó) làm gì", explanation: "Diễn tả mong muốn người khác thực hiện một hành động nào đó cho mình.",
    examples: [{ jp: "親にはいつまでも元気でいてほしい。", vn: "Tôi muốn bố mẹ lúc nào cũng khỏe mạnh." }, { jp: "この漢字の読み方を教えてほしいんですが。", vn: "Tôi muốn bạn chỉ cho tôi cách đọc chữ Kanji này." }, { jp: "「すみません、ちょっとみてもらいたいものがあるんですけど」", vn: "Xin lỗi, tôi có chút đồ muốn nhờ bạn xem giúp.", isBook: true, blank: "てもらいたい" }],
    quiz: { sentence: "先生に、もっとゆっくり話して________。", answer: "ほしい", accepts: ["もらいたい"], hint: "Mong muốn người khác làm gì", translation: "Tôi muốn thầy giáo nói chậm lại một chút." }
  },
  {
    id: 10, unit: 2, pattern: "ば / たら / と…よかった", romaji: "ba / tara / to yokatta", meaning: "Giá mà... / Ước gì...", explanation: "Thể hiện sự tiếc nuối về một việc đã xảy ra hoặc mong ước trái hiện tại.",
    examples: [
      { jp: "あの時、本当のことを言っておけばよかった。", vn: "Giá mà lúc đó tôi nói ra sự thật thì tốt biết mấy." },
      { jp: "もっと早く家を出ればよかった。遅刻しそうだ。", vn: "Giá mà tôi rời nhà sớm hơn thì tốt rồi. Sắp muộn mất rồi." },
      { jp: "「買わないんですか」「ええ、もう少しやすければ買うんですけど」", vn: "\"Bạn không mua à?\" \"Vâng, nếu rẻ hơn chút nữa thì tôi sẽ mua đấy.\"", isBook: true, blank: "ければ" },
      { jp: "もう少し時間があれば、全部できたのに。", vn: "Nếu có thêm chút thời gian nữa thì tôi đã có thể làm xong hết rồi.", isBook: true, blank: "あれば" }
    ],
    quiz: { sentence: "テストの前に、もっと勉強しておけば________。", answer: "よかった", accepts: [], hint: "Thể hiện sự tiếc nuối ở quá khứ", translation: "Giá mà trước bài kiểm tra tôi học nhiều hơn." }
  },
  {
    id: 11, unit: 2, pattern: "使役形 (させて / させられる)", romaji: "shiekikei (sasete / saserareru)", meaning: "Cho phép làm / Bị bắt làm", explanation: "Thể sai khiến xin phép (させてください) hoặc bị ép buộc (させられる).",
    examples: [
      { jp: "今日は体調が悪いので、早く帰らせてください。", vn: "Hôm nay thấy không khỏe nên xin cho phép tôi về sớm." },
      { jp: "子供のころ、母に毎日ピアノを練習させられた。", vn: "Hồi nhỏ, tôi bị mẹ bắt tập đàn piano mỗi ngày." },
      { jp: "子どもが習いたいというので、ピアノをならわせることにした。", vn: "Vì con muốn học nên tôi đã quyết định cho cháu học đàn piano.", isBook: true, blank: "ならわせる" },
      { jp: "冷蔵庫に肉があるのを忘れていて、くさらせてしまった。", vn: "Tôi quên khuấy mất có thịt trong tủ lạnh nên đã để nó bị thiu mất.", isBook: true, blank: "くさらせて" },
      { jp: "「きょうはすばらしいお話をきかせていただき、本当にありがとうございます」", vn: "Hôm nay tôi đã được nghe một câu chuyện tuyệt vời, thực sự cảm ơn bạn rất nhiều.", isBook: true, blank: "きかせて" }
    ],
    quiz: { sentence: "すみません、明日一日休ま________ください。", answer: "せて", accepts: [], hint: "Xin phép người khác cho mình làm gì (từ 休む)", translation: "Xin lỗi, hãy cho phép tôi nghỉ ngày mai." }
  },
  {
    id: 12, unit: 2, pattern: "自動詞 (〜ている)", romaji: "jidoushi (~te iru)", meaning: "Trạng thái (Tự động từ)", explanation: "Tự động từ + ている diễn tả trạng thái của sự vật sau khi hành động xảy ra.",
    examples: [{ jp: "窓が閉まっている。", vn: "Cửa sổ đang đóng (trạng thái hiện tại)." }, { jp: "あ、あそこに車が止まっているよ。", vn: "A, đằng kia có chiếc xe đang đỗ kìa." }, { jp: "このかばんは軽くてたくさんはいるので、旅行に便利だ。", vn: "Cái túi này nhẹ và chứa được nhiều đồ nên rất tiện cho việc đi du lịch.", isBook: true, blank: "はいる" }],
    quiz: { sentence: "シャツのボタンがとれ________よ。", answer: "ている", accepts: ["てる"], hint: "Trạng thái hiện tại (tự động từ)", translation: "Cái cúc áo sơ mi bị tuột ra kìa." }
  },
  {
    id: 13, unit: 2, pattern: "〜み", romaji: "~mi", meaning: "Sự... / Độ... (Danh từ hóa)", explanation: "Biến tính từ thành danh từ để chỉ trạng thái, tính chất mang tính cảm nhận.",
    examples: [{ jp: "戦争の悲しみを忘れてはいけない。", vn: "Không được quên nỗi đau thương của chiến tranh." }, { jp: "このスープは、肉の旨みが出ている。", vn: "Món súp này có vị ngọt từ thịt (vị ngon)." }, { jp: "「お会いできる日をたのしみにしています」", vn: "Tôi đang rất mong đợi ngày được gặp lại bạn.", isBook: true, blank: "たのしみ" }],
    quiz: { sentence: "星空の美し________に感動した。", answer: "み", accepts: [], hint: "Hậu tố biến tính từ đuôi 'i' thành danh từ", translation: "Tôi đã xúc động trước vẻ đẹp của bầu trời sao." }
  },
  {
    id: 14, unit: 2, pattern: "のではないだろうか / じゃないかと思う", romaji: "no de wa nai darou ka / ja nai ka to omou", meaning: "Chẳng phải là... hay sao? / Tôi nghĩ là...", explanation: "Dùng để đưa ra ý kiến, chủ trương một cách nhẹ nhàng, rụt rè hoặc bày tỏ sự nghi ngờ. 'んじゃない？' là dạng hội thoại thân mật.",
    examples: [
      { jp: "道が込んでいる. これでは間に合わないのではないだろうか。", vn: "Đường đang tắc. Cứ thế này chẳng phải là sẽ không kịp hay sao?" },
      { jp: "AチームよりBチームのほうが強いのではないかと思う。", vn: "Tôi nghĩ chẳng phải là đội B mạnh hơn đội A hay sao." },
      { jp: "山田さんは甘いものが好きだから、美味しいお菓子がいいんじゃない？", vn: "Vì anh Yamada thích đồ ngọt, nên chẳng phải là tặng bánh kẹo ngon thì tốt sao?" },
      { jp: "道が込んでいる. これでは間に合わないかもしれない。", vn: "Đường đang tắc. Cứ thế này có lẽ sẽ không kịp mất.", isBook: true, blank: "かもしれない" },
      { jp: "「木村さん、遅いね. もしかしたら、約束を忘れているのかもしれない？」", vn: "\"Anh Kimura muộn quá nhỉ. Có lẽ nào anh ấy quên hẹn rồi chăng?\"", isBook: true, blank: "のかもしれない" }
    ],
    quiz: { sentence: "この仕事、６時までに終わらせるのは無理________？", answer: "なのではないだろうか", accepts: ["のではないか", "んじゃないか", "んじゃない", "のではないだろうか"], hint: "Chẳng phải là... hay sao? (Dạng trang trọng/thân mật)", translation: "Công việc này, chẳng phải là không thể xong trước 6 giờ hay sao?" }
  },
  {
    id: 15, unit: 2, pattern: "〜ちゃ / 〜じゃ (縮約形)", romaji: "~cha / ~ja (shukuyakukei)", meaning: "Dạng rút gọn (văn nói)", explanation: "Trong hội thoại thân mật, các âm 'te' hay 'de' thường được biến đổi: ては→ちゃ, では→じゃ, てしまう→ちゃう, でしまう→じゃう.",
    examples: [
      { jp: "これからは遅刻しちゃいけませんよ。(しちゃ ＝ しては)", vn: "Từ giờ trở đi là không được đi muộn đâu đấy." },
      { jp: "そんなにお酒を飲んじゃだめだよ。(飲んじゃ ＝ 飲んでは)", vn: "Uống nhiều rượu như thế là không được đâu." },
      { jp: "宿題、もうやっちゃった。(やっちゃった ＝ やってしまった)", vn: "Bài tập về nhà á, tôi làm xong hết tiêu rồi." },
      { jp: "「すぐ行くから、先に行ってて」", vn: "\"Tôi sẽ đi ngay đây, bạn cứ đi trước đi nhé.\"", isBook: true, blank: "て" },
      { jp: "「来週までにこの本、読んどいてください」", vn: "\"Hãy đọc xong cuốn sách này trước tuần sau nhé.\"", isBook: true, blank: "どいて" },
      { jp: "そろそろおきなきゃ遅刻しちゃう。", vn: "Phải dậy thôi không thì muộn mất.", isBook: true, blank: "なきゃ" },
      { jp: "「そろそろ帰らなくちゃ. 遅くなると母が心配するから」", vn: "\"Đến lúc phải về rồi. Nếu muộn mẹ tôi sẽ lo lắng lắm.\"", isBook: true, blank: "なくちゃ" }
    ],
    quiz: { sentence: "あー、宿題、家に忘れ________！", answer: "ちゃった", accepts: ["ちゃいました"], hint: "Dạng rút gọn của てしまった", translation: "A, bài tập về nhà tôi lỡ để quên ở nhà mất rồi!" }
  },

  // --- UNIT 3 ---
  {
    id: 16, unit: 3, pattern: "から〜にかけて", romaji: "kara ~ ni kakete", meaning: "Từ... đến...", explanation: "Chỉ phạm vi đại khái từ điểm bắt đầu đến điểm kết thúc (thời gian/không gian).",
    examples: [{ jp: "明日は関東から東北地方にかけて、雨が降るでしょう。", vn: "Ngày mai có lẽ sẽ mưa từ Kanto đến Tohoku." }, { jp: "昨晩から今朝にかけて、激しい雨が降った。", vn: "Từ đêm qua đến sáng nay trời đã mưa rất to." }, { jp: "この植物は、九州から本州にかけて広く分布している。", vn: "Loài thực vật này phân bố rộng rãi từ Kyushu đến Honshu.", isBook: true, blank: "にかけて" }],
    quiz: { sentence: "明日は関東から東北地方に________、雨が降るでしょう。", answer: "かけて", accepts: [], hint: "Đi kèm với から để chỉ phạm vi", translation: "Ngày mai có lẽ sẽ mưa trải dài từ vùng Kanto đến vùng Tohoku." }
  },
  {
    id: 17, unit: 3, pattern: "だらけ", romaji: "darake", meaning: "Đầy / Toàn là...", explanation: "Chỉ trạng thái có đầy thứ gì đó, thường mang nghĩa tiêu cực (rác, bùn, lỗi sai).",
    examples: [{ jp: "彼の部屋はゴミだらけだ。", vn: "Phòng của anh ta toàn là rác." }, { jp: "間違いだらけのレポートを書き直した。", vn: "Tôi đã viết lại bản báo cáo đầy rẫy lỗi sai." }, { jp: "この手紙、字が汚くて間違いだらけだ。", vn: "Lá thư này chữ xấu quá và đầy lỗi sai.", isBook: true, blank: "だらけ" }],
    quiz: { sentence: "このテスト、間違い________じゃないか！", answer: "だらけ", accepts: [], hint: "Toàn là (nghĩa tiêu cực)", translation: "Bài kiểm tra này chẳng phải toàn là lỗi sai sao!" }
  },
  {
    id: 18, unit: 3, pattern: "おかげ", romaji: "okage", meaning: "Nhờ có... / Nhờ vào...", explanation: "Chỉ nguyên nhân dẫn đến kết quả tốt, mang hàm ý biết ơn.",
    examples: [{ jp: "先生のおかげで、N3に合格できました。", vn: "Nhờ có thầy giáo mà em đã thi đỗ N3." }, { jp: "天気がいいおかげで、洗濯物がすぐ乾いた。", vn: "Nhờ trời đẹp mà quần áo đã khô ngay." }, { jp: "「お元気ですか」「ええ、おかげさまで」", vn: "\"Bạn khỏe không?\" \"Vâng, nhờ trời tôi vẫn khỏe.\"", isBook: true, blank: "おかげさまで" }],
    quiz: { sentence: "友達が手伝ってくれた________で、早く終わった。", answer: "おかげ", accepts: [], hint: "Nhờ có (kết quả tốt)", translation: "Nhờ bạn bè giúp đỡ mà tôi đã làm xong sớm." }
  },
  {
    id: 19, unit: 3, pattern: "せい / せいか", romaji: "sei / sei ka", meaning: "Tại vì... / Có lẽ tại...", explanation: "Chỉ nguyên nhân dẫn đến kết quả xấu, mang hàm ý đổ lỗi.",
    examples: [{ jp: "バスが遅れたせいで、授業に遅刻してしまった。", vn: "Tại xe buýt đến muộn mà tôi bị trễ học." }, { jp: "年のせいで、最近疲れやすくなった。", vn: "Tại tuổi tác mà gần đây tôi dễ bị mệt." }, { jp: "年のせいか、最近忘れ物がひどい。", vn: "Có lẽ vì tuổi tác nên gần đây tôi hay quên đồ quá.", isBook: true, blank: "せいか" }],
    quiz: { sentence: "あの人の________で、みんなが迷惑している。", answer: "せい", accepts: ["せいか"], hint: "Tại vì (kết quả xấu, đổ lỗi)", translation: "Tại người đó mà mọi người đang gặp phiền phức." }
  },
  {
    id: 20, unit: 3, pattern: "とおり(に)", romaji: "toori (ni)", meaning: "Đúng như / Theo như...", explanation: "Làm một việc gì đó đúng theo như một khuôn mẫu, tiêu chuẩn hoặc dự đoán.",
    examples: [{ jp: "私の説明したとおりに、機械を組み立ててください。", vn: "Hãy lắp ráp máy móc đúng theo như tôi đã giải thích." }, { jp: "天気予報のとおり、午後から雨が降り出した。", vn: "Đúng như dự báo thời tiết, từ chiều trời đã bắt đầu mưa." }, { jp: "「あしたは試験だから、早く寝るようにしなさい」", vn: "\"Ngày mai thi đấy nên hãy cố gắng ngủ sớm đi.\"", isBook: true, blank: "ようにしなさい" }],
    quiz: { sentence: "先生が言った________、試験は難しかった。", answer: "とおり", accepts: ["とおりに", "通り", "通りに"], hint: "Đúng như / Theo như", translation: "Đúng như lời thầy giáo nói, bài thi rất khó." }
  },
  {
    id: 21, unit: 3, pattern: "について / つき", romaji: "ni tsuite / tsuki", meaning: "Về vấn đề... / Về...", explanation: "Trình bày chủ đề của hành động (suy nghĩ, nói, viết, điều tra...).",
    examples: [{ jp: "日本の文化についてレポートを書きます。", vn: "Tôi sẽ viết báo cáo về văn hóa Nhật Bản." }, { jp: "この問題について、あなたの意見を聞かせてください。", vn: "Hãy cho tôi biết ý kiến của bạn về vấn đề này." }, { jp: "「あ、赤ちゃんが泣き出しちゃった」", vn: "\"Ôi, em bé bỗng nhiên khóc rồi.\"", isBook: true, blank: "出しちゃった" }],
    quiz: { sentence: "将来の夢________、スピーチをします。", answer: "について", accepts: ["につき"], hint: "Về (chủ đề bài phát biểu)", translation: "Tôi sẽ thuyết trình về ước mơ trong tương lai." }
  },
  {
    id: 22, unit: 3, pattern: "に関し(て)", romaji: "ni kanshi (te)", meaning: "Liên quan đến... / Về...", explanation: "Cách nói trang trọng hơn của について.",
    examples: [{ jp: "この事件に関して、新しい情報が入りました。", vn: "Đã có thông tin mới liên quan đến vụ án này." }, { jp: "環境問題に関しては、色々な意見がある。", vn: "Liên quan đến vấn đề môi trường, có rất nhiều ý kiến khác nhau." }],
    quiz: { sentence: "この件________は、現在調査中です。", answer: "に関して", accepts: ["に関し"], hint: "Liên quan đến (cách nói trang trọng)", translation: "Liên quan đến vụ việc này, hiện chúng tôi đang điều tra." }
  },
  {
    id: 23, unit: 3, pattern: "に比べ(て)", romaji: "ni kurabe (te)", meaning: "So với...", explanation: "Dùng để so sánh hai sự vật, sự việc.",
    examples: [{ jp: "今年は去年に比べて、雨の日が多い。", vn: "Năm nay nhiều ngày mưa hơn so với năm ngoái." }, { jp: "兄に比べて、弟は背が高い。", vn: "So với anh trai thì người em cao hơn." }, { jp: "「あしたはもっと早く来るように。分かりましたか」", vn: "\"Ngày mai hãy cố gắng đến sớm hơn nhé. Bạn hiểu rồi chứ?\"", isBook: true, blank: "ように" }],
    quiz: { sentence: "東京________、私の町は静かだ。", answer: "に比べて", accepts: ["に比べ"], hint: "So với", translation: "So với Tokyo thì thị trấn của tôi yên tĩnh hơn." }
  },
  {
    id: 24, unit: 3, pattern: "に加え(て)", romaji: "ni kuwae (te)", meaning: "Thêm vào đó / Không chỉ... mà còn...", explanation: "Bổ bổ sung thêm một yếu tố khác vào yếu tố đã có sẵn.",
    examples: [{ jp: "彼は英語に加えて、日本語も話せる。", vn: "Anh ấy không chỉ nói được tiếng Anh mà còn tiếng Nhật." }, { jp: "大雨に加え、風も強くなってきた。", vn: "Thêm vào mưa lớn, gió cũng đã bắt đầu mạnh lên." }],
    quiz: { sentence: "熱があるの________、咳も出ます。", answer: "に加えて", accepts: ["に加え"], hint: "Thêm vào đó", translation: "Không chỉ bị sốt mà tôi còn bị ho." }
  },
  {
    id: 25, unit: 3, pattern: "に対し(て) (Đối với)", romaji: "ni taishi (te)", meaning: "Đối với (Thái độ)", explanation: "Thể hiện thái độ hướng tới một đối tượng.",
    examples: [{ jp: "お客様に対して、失礼なことをしてはいけない。", vn: "Không được làm điều thất lễ đối với khách hàng." }, { jp: "先生に対して、そんな言葉遣いをしてはいけません。", vn: "Đối với thầy giáo, không được dùng lời lẽ như thế." }],
    quiz: { sentence: "目上の人________は、敬語を使いなさい。", answer: "に対して", accepts: ["に対し"], hint: "Đối với (thái độ)", translation: "Đối với người bề trên thì hãy dùng kính ngữ." }
  },
  {
    id: 26, unit: 3, pattern: "たびに", romaji: "tabi ni", meaning: "Mỗi khi / Cứ mỗi lần...", explanation: "Cứ mỗi lần hành động phía trước xảy ra thì kéo theo hành động phía sau.",
    examples: [{ jp: "旅行に行くたびに、お土産を買ってくる。", vn: "Cứ mỗi lần đi du lịch là tôi lại mua quà lưu niệm về." }, { jp: "この曲を聞くたびに、故郷を思い出す。", vn: "Cứ mỗi lần nghe bản nhạc này, tôi lại nhớ về quê hương." }],
    quiz: { sentence: "彼に会う________、胸がドキドキする。", answer: "たびに", accepts: ["度", "度に"], hint: "Mỗi khi", translation: "Mỗi khi gặp anh ấy, tim tôi lại đập rộn ràng." }
  },
  {
    id: 27, unit: 3, pattern: "たとえ〜ても", romaji: "tatoe ~ te mo", meaning: "Cho dù... thì cũng...", explanation: "Đưa ra một giả định nghịch lý.",
    examples: [{ jp: "たとえ雨が降っても、明日の試合は行われます。", vn: "Cho dù ngày mai trời mưa thì trận đấu vẫn sẽ diễn ra." }, { jp: "たとえ反対されても、私は自分のやりたいことをやる。", vn: "Cho dù có bị phản đối, tôi vẫn sẽ làm điều mình muốn." }],
    quiz: { sentence: "________失敗しても、また挑戦すればいい。", answer: "たとえ", accepts: [], hint: "Đi cặp với 〜ても", translation: "Cho dù có thất bại thì thử thách lại là được." }
  },
  {
    id: 28, unit: 3, pattern: "って", romaji: "tte", meaning: "Nói là / Nghe nói là / Tên là...", explanation: "Cách nói thân mật của と (trích dẫn), という (gọi là) hoặc は (chủ đề).",
    examples: [{ jp: "明日は休みだって。", vn: "Nghe nói ngày mai được nghỉ đấy." }, { jp: "田中さんって、どんな人なの？", vn: "Anh Tanaka là người như thế nào vậy?" }],
    quiz: { sentence: "あそこにある店、美味しいんだ________。", answer: "って", accepts: [], hint: "Nghe nói là (văn nói thân mật)", translation: "Quán ở đằng kia, nghe nói ngon lắm đấy." }
  },

  // --- UNIT 4 ---
  {
    id: 29, unit: 4, pattern: "くらい / ぐらい", romaji: "kurai / gurai", meaning: "Đến mức / Khoảng chừng", explanation: "Chỉ mức độ của sự việc, thường là mức độ nhẹ, tối thiểu.",
    examples: [{ jp: "泣きたいくらい痛い。", vn: "Đau đến mức muốn khóc." }, { jp: "一歩歩けないくらい、お腹がいっぱいだ。", vn: "No đến mức không thể bước đi nổi một bước." }, { jp: "「もう、歩けない（くらい）つかれた」", vn: "\"Trời ơi, tôi mệt đến mức không thể bước đi được nữa rồi.\"", isBook: true, blank: "くらい" }],
    quiz: { sentence: "パンが一つ買える________のお金しかない。", answer: "くらい", accepts: ["ぐらい"], hint: "Đến mức / Khoảng", translation: "Tôi chỉ có tiền đủ đến mức mua được một cái bánh mì." }
  },
  {
    id: 30, unit: 4, pattern: "くらいなら / ぐらいなら", romaji: "kurai nara / gurai nara", meaning: "Nếu phải... thì thà...", explanation: "So sánh hai việc tồi tệ, thà chọn vế sau còn hơn.",
    examples: [{ jp: "あいつに謝るくらいなら、死んだほうがましだ。", vn: "Nếu phải xin lỗi hắn ta thì tôi thà chết còn hơn." }, { jp: "途中でやめるくらいなら、初めからやらないほうがいい。", vn: "Nếu phải bỏ dở giữa chừng thì tốt nhất ngay từ đầu không nên làm." }],
    quiz: { sentence: "彼と結婚する________、独身のほうがいい。", answer: "くらいなら", accepts: ["ぐらいなら"], hint: "Nếu phải... thì thà...", translation: "Nếu phải kết hôn với anh ta thì tôi thà độc thân còn hơn." }
  },
  {
    id: 31, unit: 4, pattern: "うちに", romaji: "uchi ni", meaning: "Trong lúc / Nhân lúc", explanation: "Tranh thủ làm việc gì đó khi trạng thái chưa thay đổi.",
    examples: [{ jp: "スープが温かいうちに、飲んでください。", vn: "Hãy uống nhân lúc súp còn nóng." }, { jp: "明るいうちに、仕事を終わらせてしまおう。", vn: "Hãy kết thúc công việc trong khi trời còn sáng." }, { jp: "「忘れないうちに、メモしておこう」", vn: "\"Hãy ghi chú lại nhân lúc chưa quên nhé.\"", isBook: true, blank: "うちに" }],
    quiz: { sentence: "忘れない________、メモしておこう。", answer: "うちに", accepts: [], hint: "Trong lúc (chưa quên)", translation: "Nhân lúc chưa quên, hãy ghi chú lại." }
  },
  {
    id: 32, unit: 4, pattern: "を中心に", romaji: "wo chuushin ni", meaning: "Lấy... làm trung tâm", explanation: "Chỉ ra một thứ/người làm trung tâm của một phạm vi, hiện tượng.",
    examples: [{ jp: "この店は若い女性を中心に人気がある。", vn: "Quán này được yêu thích, đặc biệt tập trung vào phụ nữ trẻ." }, { jp: "地球は太陽を中心にして回っている。", vn: "Trái đất quay quanh mặt trời là trung tâm." }],
    quiz: { sentence: "文法________、日本語を勉強する。", answer: "を中心に", accepts: ["を中心として", "を中心にして"], hint: "Lấy... làm trung tâm", translation: "Tôi học tiếng Nhật tập trung vào ngữ pháp." }
  },
  {
    id: 33, unit: 4, pattern: "をはじめ", romaji: "wo hajime", meaning: "Trước tiên phải kể đến", explanation: "Đưa ra một ví dụ tiêu biểu nhất trong số nhiều thứ cùng loại.",
    examples: [{ jp: "校長先生をはじめ、先生方、大変お世話になりました。", vn: "Xin cảm ơn các thầy cô, trước tiên là thầy hiệu trưởng." }, { jp: "日本には富士山をはじめ、美しい山がたくさんある。", vn: "Ở Nhật Bản có rất nhiều núi đẹp, trước tiên phải kể đến núi Phú Sĩ." }],
    quiz: { sentence: "社長________、社員の皆様にお礼を申し上げます。", answer: "をはじめ", accepts: ["をはじめとして"], hint: "Tiêu biểu là... / Trước tiên là...", translation: "Xin gửi lời cảm ơn đến mọi người, trước tiên là giám đốc." }
  },
  {
    id: 34, unit: 4, pattern: "に対し(て) (So sánh)", romaji: "ni taishi (te)", meaning: "Trái ngược với / Đối lập với", explanation: "Dùng để so sánh sự khác nhau rõ rệt giữa hai sự vật.",
    examples: [{ jp: "兄がスポーツが得意なのに対して、弟は勉強が得意だ。", vn: "Trái với anh trai giỏi thể thao, người em lại giỏi học." }, { jp: "都会が騒がしいのに対して、田舎は静かでのんびりしている。", vn: "Trái với thành phố ồn ào, nông thôn lại yên tĩnh và thong thả." }],
    quiz: { sentence: "東京が賑やかなの________、私の町は静かだ。", answer: "に対して", accepts: ["に対し"], hint: "Trái ngược với", translation: "Trái ngược với Tokyo náo nhiệt, thị trấn của tôi rất yên tĩnh." }
  },
  {
    id: 35, unit: 4, pattern: "において", romaji: "ni oite", meaning: "Tại / Ở / Trong (lĩnh vực)...", explanation: "Chỉ địa điểm, thời đại, lĩnh vực xảy ra sự việc (trang trọng của で).",
    examples: [{ jp: "入学式は体育館において行われる。", vn: "Lễ nhập học sẽ được tổ chức tại nhà thi đấu." }, { jp: "現代社会において、インターネットは欠かせないものだ。", vn: "Trong xã hội hiện đại, Internet là thứ không thể thiếu." }],
    quiz: { sentence: "会議は第一会議室________行われます。", answer: "において", accepts: [], hint: "Tại (cách nói trang trọng của で)", translation: "Cuộc họp sẽ được tổ chức tại phòng họp số 1." }
  },
  {
    id: 36, unit: 4, pattern: "にわたって", romaji: "ni watatte", meaning: "Suốt / Trải dài", explanation: "Chỉ phạm vi rộng lớn của không gian hoặc khoảng thời gian kéo dài.",
    examples: [{ jp: "会議は５時間にわたって行われた。", vn: "Cuộc họp đã diễn ra suốt 5 tiếng đồng hồ." }, { jp: "南北数キロにわたって、桜の並木が続いている。", vn: "Hàng cây hoa anh đào trải dài suốt vài km từ nam chí bắc." }],
    quiz: { sentence: "３週間________、雨が降り続いた。", answer: "にわたって", accepts: ["にわたり"], hint: "Trải suốt / Kéo dài suốt", translation: "Mưa đã rơi liên tục suốt 3 tuần." }
  },
  {
    id: 37, unit: 4, pattern: "にとって", romaji: "ni totte", meaning: "Đối với... (quan điểm)", explanation: "Đứng từ góc độ của người/vật đó để đưa ra đánh giá, nhận định.",
    examples: [{ jp: "私にとって、家族は一番大切なものです。", vn: "Đối với tôi, gia đình là điều quan trọng nhất." }, { jp: "現代人にとって、スマホは生活の一部になっている。", vn: "Đối với người hiện đại, smartphone đã trở thành một phần của cuộc sống." }],
    quiz: { sentence: "子供________、遊びはとても重要だ。", answer: "にとって", accepts: [], hint: "Đối với (góc độ đánh giá)", translation: "Đối với trẻ em, vui chơi là điều rất quan trọng." }
  },
  {
    id: 38, unit: 4, pattern: "による/によって", romaji: "ni yoru / ni yotte", meaning: "Tùy vào / Do / Bởi", explanation: "Chỉ phương pháp, nguyên nhân, người thực hiện hoặc sự khác biệt.",
    examples: [{ jp: "人によって、考え方が違う。", vn: "Mỗi người có cách suy nghĩ khác nhau (tùy vào)." }, { jp: "不注意によって、大きな事故が起きてしまった。", vn: "Do không chú ý mà tai nạn lớn đã xảy ra (nguyên nhân)." }],
    quiz: { sentence: "文化は、国________異なります。", answer: "によって", accepts: ["により", "によっては"], hint: "Tùy vào (chỉ sự khác biệt)", translation: "Văn hóa thì khác biệt tùy vào từng quốc gia." }
  },

  // --- UNIT 5 ---
  {
    id: 39, unit: 5, pattern: "に違いない", romaji: "ni chigainai", meaning: "Chắc chắn là", explanation: "Dùng để phỏng đoán một cách chắc chắn dựa trên căn cứ.",
    examples: [{ jp: "鍵がない。どこかに落としたに違いない。", vn: "Không thấy chìa khóa. Chắc chắn là đánh rơi ở đâu rồi." }, { jp: "夜中にこんなに電話が鳴るのは、何かあったに違いない。", vn: "Điện thoại reo giữa đêm thế này thì chắc chắn là có chuyện gì đó rồi." }],
    quiz: { sentence: "あんなに練習したのだから、明日は勝てる________。", answer: "に違いない", accepts: ["にちがいない"], hint: "Chắc chắn là", translation: "Đã tập luyện đến mức đó thì ngày mai chắc chắn sẽ thắng." }
  },
  {
    id: 40, unit: 5, pattern: "とは / というのは", romaji: "to wa / to iu no wa", meaning: "Nghĩa là / Cái gọi là...", explanation: "Dùng để định nghĩa, giải thích ý nghĩa của một từ.",
    examples: [{ jp: "デジカメとは、デジタルカメラのことです。", vn: "Dejikame có nghĩa là máy ảnh kỹ thuật số." }, { jp: "敬語とは、相手を敬って使う言葉のことです。", vn: "Kính ngữ nghĩa là những từ dùng để thể hiện sự kính trọng đối với đối phương." }],
    quiz: { sentence: "パソコン________、パーソナルコンピュータのことだ。", answer: "とは", accepts: ["というのは", "っていうのは"], hint: "Nghĩa là (giải thích)", translation: "Pasokon nghĩa là máy tính cá nhân." }
  },
  {
    id: 41, unit: 5, pattern: "たとたん(に)", romaji: "ta totan (ni)", meaning: "Vừa mới... thì ngay lập tức", explanation: "Hành động vế sau xảy ra gần như đồng thời ngay sau hành động vế trước.",
    examples: [{ jp: "ドアを開けたとたん、猫が飛び出してきた。", vn: "Vừa mở cửa ra thì con mèo phóng ra ngoài." }, { jp: "外に出たとたん、雨가降り出した。", vn: "Vừa mới ra ngoài thì trời đã bắt đầu đổ mưa." }, { jp: "「立ち上がったとたん、めまいがした」", vn: "\"Vừa mới đứng dậy thì tôi bị chóng mặt.\"", isBook: true, blank: "たとたん" }],
    quiz: { sentence: "立ち上がっ________、めまいがした。", answer: "たとたん", accepts: ["たとたんに", "とたん", "とたんに"], hint: "Vừa mới... thì", translation: "Vừa mới đứng lên thì bị chóng mặt." }
  },
  {
    id: 42, unit: 5, pattern: "につれ(て)", romaji: "ni tsure (te)", meaning: "Càng... càng...", explanation: "Chỉ sự thay đổi đồng thời (thường dùng cho tự nhiên, dần dần).",
    examples: [{ jp: "年をとるにつれて、物忘れがひどくなった。", vn: "Cùng với tuổi tác, tật hay quên càng trở nên nghiêm trọng." }, { jp: "時間が経つにつれて、悲しみも薄れていくだろう。", vn: "Cùng với thời gian trôi đi, có lẽ nỗi đau cũng sẽ phai nhạt." }],
    quiz: { sentence: "成長する________、親に似てきた。", answer: "につれて", accepts: ["につれ"], hint: "Càng... càng (sự thay đổi kéo theo)", translation: "Càng lớn càng giống bố mẹ." }
  },
  {
    id: 43, unit: 5, pattern: "にしたがって", romaji: "ni shitagatte", meaning: "Theo như / Càng... càng...", explanation: "Tuân theo quy tắc hoặc chỉ sự thay đổi đồng thời.",
    examples: [{ jp: "先生の指示にしたがって、行動してください。", vn: "Hãy hành động theo như chỉ thị của giáo viên." }, { jp: "「山をのぼるにしたがって、気温がさがってきた」", vn: "\"Càng lên cao phía đỉnh núi, nhiệt độ càng giảm xuống.\"", isBook: true, blank: "にしたがって" }],
    quiz: { sentence: "ルール________、ゲームをしてください。", answer: "にしたがって", accepts: ["に従って", "にしたがい"], hint: "Theo như (tuân theo quy tắc)", translation: "Hãy chơi game theo đúng luật." }
  },
  {
    id: 44, unit: 5, pattern: "最中(に)", romaji: "saichuu (ni)", meaning: "Đúng lúc đang", explanation: "Nhấn mạnh thời điểm hành động đang diễn ra cao trào thì có việc khác xen vào.",
    examples: [{ jp: "会議の最中に、携帯電話が鳴った。", vn: "Giữa lúc đang họp thì điện thoại reo." }, { jp: "食事の最中に、友達が遊びに来た。", vn: "Đúng lúc đang ăn cơm thì bạn đến chơi." }, { jp: "「シャワーをびているさいちゅうに、客が来た」", vn: "\"Đúng lúc đang tắm thì có khách đến.\"", isBook: true, blank: "さいちゅうに" }],
    quiz: { sentence: "シャワーを浴びている________に、客が来た。", answer: "最中", accepts: ["さいちゅう"], hint: "Đúng lúc đang (Kanji: 最中)", translation: "Đúng lúc đang tắm vòi sen thì có khách đến." }
  },
  {
    id: 45, unit: 5, pattern: "てからでないと", romaji: "te kara de nai to", meaning: "Nếu chưa... thì không thể...", explanation: "Diễn tả điều kiện tiên quyết. Vế sau luôn mang ý nghĩa phủ định.",
    examples: [{ jp: "お金を払ってからでないと、商品を受け取れない。", vn: "Nếu chưa trả tiền thì không thể nhận hàng." }, { jp: "宿題を終わらせてからでないと、遊びに行ってはいけません。", vn: "Nếu chưa làm xong bài tập thì không được đi chơi." }],
    quiz: { sentence: "手を洗っ________、ご飯を食べてはいけません。", answer: "てからでないと", accepts: ["てからでなければ"], hint: "Nếu chưa... thì không được", translation: "Nếu chưa rửa tay thì không được ăn cơm." }
  },
  {
    id: 46, unit: 5, pattern: "て以来", romaji: "te irai", meaning: "Kể từ khi... (cho đến nay)", explanation: "Nhấn mạnh một trạng thái duy trì liên tục suốt từ quá khứ đến bây giờ.",
    examples: [{ jp: "日本に来て以来、毎日納豆を食べている。", vn: "Kể từ khi đến Nhật, ngày nào tôi cũng ăn natto." }, { jp: "3年前に日本へ行って以来、一度も帰国していない。", vn: "Kể từ khi sang Nhật 3 năm trước, tôi chưa một lần về nước." }, { jp: "「けっこんしてこのかた、ずっとこの町にすんでいる」", vn: "\"Kể từ khi kết hôn đến nay, tôi vẫn luôn sống ở thị trấn này.\"", isBook: true, blank: "してこのかた" }],
    quiz: { sentence: "結婚し________、ずっとこの町に住んでいる。", answer: "て以来", accepts: ["ていらい", "以来", "いらい"], hint: "Kể từ khi", translation: "Kể từ khi kết hôn, tôi vẫn luôn sống ở thị trấn này." }
  },
  {
    id: 47, unit: 5, pattern: "一方だ", romaji: "ippou da", meaning: "Ngày càng... (liên tục)", explanation: "Chỉ một trạng thái đang phát triển liên tục (thường là chiều hướng xấu).",
    examples: [{ jp: "最近、物価は上がる一方だ。", vn: "Gần đây, vật giá ngày càng tăng." }, { jp: "不景気なので、仕事を探す人は増える一方だ。", vn: "Vì kinh tế suy thoái nên số người tìm việc ngày càng tăng." }],
    quiz: { sentence: "仕事が忙しくて、疲労はたまる________。", answer: "一方だ", accepts: ["いっぽうだ", "一方"], hint: "Ngày càng (chiều hướng xấu)", translation: "Công việc bận rộn, mệt mỏi ngày càng tích tụ." }
  },
  {
    id: 48, unit: 5, pattern: "しかない", romaji: "shika nai", meaning: "Chỉ còn cách... / Không còn cách nào khác", explanation: "Thể hiện sự đành chịu, không còn lựa chọn nào khác.",
    examples: [{ jp: "終電を逃したので、歩いて帰るしかない。", vn: "Vì lỡ chuyến tàu cuối nên chỉ còn cách đi bộ về." }, { jp: "パソコンが壊れたので、新しいのを買うしかない。", vn: "Máy tính hỏng rồi nên chỉ còn cách mua cái mới thôi." }],
    quiz: { sentence: "約束したのだから、行く________。", answer: "しかない", accepts: ["ほかない", "よりない", "よりほかない"], hint: "Chỉ còn cách...", translation: "Đã hứa rồi nên chỉ còn cách phải đi thôi." }
  },
  {
    id: 49, unit: 5, pattern: "はもちろん", romaji: "wa mochiron", meaning: "...thì đã đành / Không chỉ... mà còn", explanation: "Việc ở vế trước là điều đương nhiên không cần bàn cãi.",
    examples: [{ jp: "彼は英語はもちろん、フランス語も話せる。", vn: "Anh ấy tiếng Anh thì đã đành, tiếng Pháp cũng nói được." }, { jp: "このレストランは、料理の味はもちろん、サービスも素晴らしい。", vn: "Nhà hàng này hương vị món ăn thì đã đành (đương nhiên ngon), dịch vụ cũng rất tuyệt vời." }],
    quiz: { sentence: "復習________、予習も大切だ。", answer: "はもちろん", accepts: ["はもとより", "もとより"], hint: "...thì đã đành (đương nhiên)", translation: "Ôn tập thì đã đành, chuẩn bị bài trước cũng rất quan trọng." }
  },
  {
    id: 50, unit: 5, pattern: "ついでに", romaji: "tsuide ni", meaning: "Nhân tiện", explanation: "Nhân cơ hội đang làm việc A thì làm luôn việc B.",
    examples: [{ jp: "散歩のついでに、パンを買ってきた。", vn: "Nhân tiện đi dạo, tôi đã mua bánh mì về." }, { jp: "銀行へ行くついでに、この手紙を出してきてくれませんか。", vn: "Nhân tiện đi ngân hàng, bạn có thể gửi hộ tôi lá thư này được không?" }, { jp: "「買いものにいくついでに、郵便局に寄って」", vn: "\"Nhân tiện đi mua sắm thì hãy ghé qua bưu điện giúp nhé.\"", isBook: true, blank: "ついでに" }
    ],
    quiz: { sentence: "買い物に行く________、郵便局に寄って。", answer: "ついでに", accepts: ["ついで"], hint: "Nhân tiện", translation: "Nhân tiện đi mua sắm thì ghé vào bưu điện giúp nhé." }
  },

  // --- UNIT 6 ---
  {
    id: 51, unit: 6, pattern: "ということだ", romaji: "to iu koto da", meaning: "Nghĩa là / Nghe nói là", explanation: "Truyền đạt lại thông tin nghe được, hoặc giải thích ý nghĩa.",
    examples: [{ jp: "ニュースによると、明日雨が降るということだ。", vn: "Theo tin tức, nghe nói ngày mai trời sẽ mưa." }, { jp: "合格したということは、たくさん勉強したということですね。", vn: "Việc cậu đỗ nghĩa là cậu đã học rất nhiều đấy nhỉ." }],
    quiz: { sentence: "彼の話では、来年結婚する________。", answer: "ということだ", accepts: ["とのことだ"], hint: "Nghe nói là", translation: "Theo lời anh ấy nói, nghe đâu sang năm anh ấy sẽ kết hôn." }
  },
  {
    id: 52, unit: 6, pattern: "ことはない", romaji: "koto wa nai", meaning: "Không cần phải", explanation: "Khuyên bảo ai đó không cần thiết phải làm một việc gì đó.",
    examples: [{ jp: "君が謝ることはないよ。", vn: "Cậu không cần phải xin lỗi đâu." }, { jp: "時間はたっぷりあるから、急ぐことはありません。", vn: "Thời gian còn nhiều lắm nên không cần phải vội đâu." }],
    quiz: { sentence: "軽い風邪だから、心配する________。", answer: "ことはない", accepts: ["ことない"], hint: "Không cần phải", translation: "Chỉ là cảm nhẹ thôi nên không cần phải lo lắng." }
  },
  {
    id: 53, unit: 6, pattern: "こと", romaji: "koto", meaning: "Phải / Hãy", explanation: "Đưa ra mệnh lệnh, quy tắc, chỉ thị.",
    examples: [{ jp: "明日、8時までに来ること。", vn: "Ngày mai phải đến trước 8 giờ." }, { jp: "レポートは今週中に提出すること。", vn: "Báo cáo phải nộp trong tuần này." }],
    quiz: { sentence: "図書館では静かにする________。", answer: "こと", accepts: [], hint: "Phải (Mệnh lệnh / Nội quy)", translation: "Trong thư viện phải giữ im lặng." }
  },
  {
    id: 54, unit: 6, pattern: "ないことはない", romaji: "nai koto wa nai", meaning: "Không phải là không...", explanation: "Thừa nhận một điều gì đó ở mức độ thấp, hoặc miễn cưỡng.",
    examples: [{ jp: "走れば、間に合わないこともない。", vn: "Nếu chạy thì không hẳn là không kịp." }, { jp: "刺身は食べられないことはないが、あまり好きではない。", vn: "Sashimi không phải là tôi không ăn được, nhưng không thích lắm." }],
    quiz: { sentence: "お酒は飲め________が、弱いです。", answer: "ないことはない", accepts: ["ないこともない"], hint: "Không phải là không", translation: "Không phải là tôi không uống được rượu, nhưng tửu lượng kém." }
  },
  {
    id: 55, unit: 6, pattern: "もの（もん）", romaji: "mono (mon)", meaning: "Bởi vì...", explanation: "Đưa ra lý do cá nhân, mang tính chất biện bạch, làm nũng.",
    examples: [{ jp: "「どうして食べないの？」「だって、美味しくないんだもん。」", vn: "\"Sao con không ăn?\" \"Tại vì không ngon mà.\"" }, { jp: "「一人でできる？」「うん、もう大人だもん。」", vn: "\"Con tự làm một mình được không?\" \"Vâng, vì con là người lớn rồi mà.\"" }],
    quiz: { sentence: "行きたくないよ。疲れたんだ________。", answer: "もの", accepts: ["もん"], hint: "Bởi vì (văn nói, biện bạch)", translation: "Tôi không muốn đi đâu. Tại vì mệt mà." }
  },
  {
    id: 56, unit: 6, pattern: "ものだから", romaji: "mono dakara", meaning: "Tại vì...", explanation: "Đưa ra lý do khách quan, phân trần để mong được thông cảm.",
    examples: [{ jp: "電車が遅れたものだから、遅刻してしまいました。", vn: "Tại vì tàu trễ nên tôi đã bị muộn." }, { jp: "あまりに可愛いかったものだから、つい買ってしまった。", vn: "Vì nó quá là dễ thương nên tôi đã lỡ mua mất rồi." }],
    quiz: { sentence: "道が混んでいた________、遅れてすみません。", answer: "ものだから", accepts: ["もので", "もんだから"], hint: "Tại vì (phân trần)", translation: "Tại vì tắc đường nên xin lỗi tôi đến muộn." }
  },
  {
    id: 57, unit: 6, pattern: "ものか", romaji: "mono ka", meaning: "Tuyệt đối không", explanation: "Phủ định mạnh mẽ, thể hiện cảm xúc tức giận hoặc kiên quyết.",
    examples: [{ jp: "あんな店、二度と行くものか。", vn: "Cái quán đó, tuyệt đối không đi lần hai đâu." }, { jp: "誰があなたの言うことなんか信じるものか。", vn: "Ai mà thèm tin lời cậu nói chứ (tuyệt đối không tin)." }],
    quiz: { sentence: "あんな人に、二度と会う________！", answer: "ものか", accepts: ["もんか"], hint: "Tuyệt đối không", translation: "Người như vậy, tôi tuyệt đối không gặp lại lần hai đâu!" }
  },
  {
    id: 58, unit: 6, pattern: "たところ", romaji: "ta tokoro", meaning: "Sau khi thử làm... thì", explanation: "Nhấn mạnh kết quả nhận được hoặc điều bất ngờ phát hiện ra.",
    examples: [{ jp: "先生に聞いたところ、明日テストがあるそうだ。", vn: "Sau khi hỏi thầy giáo thì nghe nói ngày mai có bài kiểm tra." }, { jp: "新しいお店へ行ってみたところ、とても美味しかった。", vn: "Sau khi thử đến cửa hàng mới thì thấy rất ngon." }],
    quiz: { sentence: "病院で検査し________、病気が見つかった。", answer: "たところ", accepts: [], hint: "Sau khi thử làm... thì (kết quả)", translation: "Sau khi kiểm tra ở bệnh viện thì phát hiện ra bệnh." }
  },
  {
    id: 59, unit: 6, pattern: "ところに", romaji: "tokoro ni", meaning: "Đúng lúc / Ngay lúc", explanation: "Thời điểm một hành động đang diễn ra thì có sự việc khác xen vào.",
    examples: [{ jp: "出かけようとしたところに、電話がかかってきた。", vn: "Đúng lúc định ra ngoài thì có điện thoại." }, { jp: "ちょうどいいところに来たね。今からお茶にしようと思っていたんだ。", vn: "Cậu đến đúng lúc lắm. Tớ đang định uống trà đây." }],
    quiz: { sentence: "寝ている________、地震が起きた。", answer: "ところに", accepts: ["ところ", "ところへ"], hint: "Đúng lúc (thời điểm)", translation: "Đúng lúc đang ngủ thì xảy ra động đất." }
  },
  {
    id: 60, unit: 6, pattern: "ところだった", romaji: "tokoro datta", meaning: "Suýt nữa thì", explanation: "Chỉ một việc tồi tệ suýt chút nữa thì đã xảy ra.",
    examples: [{ jp: "もう少しで車에ぶつかるところだった。", vn: "Suýt chút nữa thì bị xe tông." }, { jp: "忘れるところだった。教えてくれてありがとう。", vn: "Suýt nữa thì tôi quên mất. Cảm ơn bạn đã nhắc nhé." }],
    quiz: { sentence: "もう少しで遅刻する________。", answer: "ところだった", accepts: [], hint: "Suýt nữa thì", translation: "Suýt chút nữa thì bị đi muộn." }
  },
  {
    id: 61, unit: 6, pattern: "ほど", romaji: "hodo", meaning: "Đến mức / Khoảng", explanation: "Diễn tả mức độ của một trạng thái (mức độ cao).",
    examples: [{ jp: "死ぬほど疲れた。", vn: "Mệt đến mức muốn chết." }, { jp: "外は、息が凍るほど寒い。", vn: "Ngoài trời lạnh đến mức hơi thở cũng đóng băng." }],
    quiz: { sentence: "食べられない________料理が山のようにある。", answer: "ほど", accepts: ["くらい", "ぐらい"], hint: "Đến mức (Mức độ cao)", translation: "Có nhiều đồ ăn đến mức ăn không nổi, chất cao như núi." }
  },
  {
    id: 62, unit: 6, pattern: "ば〜ほど", romaji: "ba ~ hodo", meaning: "Càng... càng...", explanation: "Chỉ sự phát triển đồng thời của hai vế.",
    examples: [{ jp: "日本語は、勉強すればするほど難しくなる。", vn: "Tiếng Nhật, càng học càng thấy khó." }, { jp: "考えれば考えるほど、いいアイデアが浮かびそうだ。", vn: "Càng suy nghĩ thì càng có vẻ như ý tưởng hay sẽ nảy ra." }],
    quiz: { sentence: "考えれ________考えるほど、わからなくなる。", answer: "ば", accepts: [], hint: "Càng... càng", translation: "Càng suy nghĩ thì càng không hiểu." }
  },
  {
    id: 63, unit: 6, pattern: "ほど〜はない", romaji: "hodo ~ wa nai", meaning: "Không có gì... bằng", explanation: "So sánh nhất, đánh giá chủ quan rằng một sự vật/việc là nhất.",
    examples: [{ jp: "彼女ほど優しい人はいない。", vn: "Không có người nào hiền bằng cô ấy." }, { jp: "母の料理ほど美味しいものはない。", vn: "Không có gì ngon bằng món ăn mẹ nấu." }],
    quiz: { sentence: "今年の夏________暑い年はない。", answer: "ほど", accepts: ["くらい", "ぐらい"], hint: "Không có gì... bằng", translation: "Không có năm nào nóng bằng mùa hè năm nay." }
  },

  // --- UNIT 7 ---
  {
    id: 64, unit: 7, pattern: "など / なんか / なんて", romaji: "nado / nanka / nante", meaning: "Như là... / Cỡ như...", explanation: "Đưa ra ví dụ, hoặc mang sắc thái khiêm tốn / coi thường.",
    examples: [{ jp: "私なんて、まだまだです。", vn: "Cỡ như tôi thì vẫn còn kém lắm." }, { jp: "疲れた時は、甘いものなどいかがですか。", vn: "Những lúc mệt mỏi, bạn dùng thử mấy món đồ ngọt xem sao?" }],
    quiz: { sentence: "幽霊________いるわけがない。", answer: "なんて", accepts: ["なんか", "など"], hint: "Cỡ như / Ba cái thứ như", translation: "Mấy thứ như ma quỷ không thể nào tồn tại được." }
  },
  {
    id: 65, unit: 7, pattern: "などと(なんて)言う/思う", romaji: "nado to (nante) iu / omou", meaning: "Nói / Nghĩ rằng", explanation: "Trích dẫn lại lời nói kèm thái độ ngạc nhiên, coi thường.",
    examples: [{ jp: "彼が犯人だなんて、信じられない。", vn: "Thật không thể tin được chuyện anh ta là thủ phạm." }, { jp: "試験は簡単だなどと言って、本当は難しかった。", vn: "Cứ nói mấy câu như là bài thi dễ lắm, mà thực ra lại khó." }],
    quiz: { sentence: "自分が天才だ________思っていない。", answer: "なんて", accepts: ["などと"], hint: "Nghĩ rằng cái điều như là...", translation: "Tôi chưa từng nghĩ mình là thiên tài hay gì cả." }
  },
  {
    id: 66, unit: 7, pattern: "からには", romaji: "kara ni wa", meaning: "Một khi đã... thì phải...", explanation: "Vì đã đến tình trạng đó nên có nghĩa vụ/quyết tâm phải làm đến cùng.",
    examples: [{ jp: "約束したからには、守らなければならない。", vn: "Một khi đã hứa thì phải giữ lời." }, { jp: "試合に出るからには、勝ちたい。", vn: "Một khi đã tham gia thi đấu thì tôi muốn thắng." }],
    quiz: { sentence: "日本に留学する________、N1に合格したい。", answer: "からには", accepts: [], hint: "Một khi đã", translation: "Một khi đã du học Nhật Bản thì tôi muốn thi đỗ N1." }
  },
  {
    id: 67, unit: 7, pattern: "きる", romaji: "kiru", meaning: "Hoàn thành / Làm đến cùng", explanation: "Làm xong toàn bộ sự việc không còn sót lại gì, hoặc đạt đến giới hạn.",
    examples: [{ jp: "この小説は一日で読みきった。", vn: "Cuốn tiểu thuyết này tôi đã đọc xong hết trong một ngày." }, { jp: "マラソンを最後まで走りきった。", vn: "Tôi đã chạy hết quãng đường marathon cho đến cuối cùng." }],
    quiz: { sentence: "たくさんあって、一人では食べ________ない。", answer: "きれ", accepts: ["きれない"], hint: "Hoàn thành / Hết (chia khả năng)", translation: "Nhiều quá, một mình tôi không thể ăn hết được." }
  },
  {
    id: 68, unit: 7, pattern: "ぎみ", romaji: "gimi", meaning: "Có vẻ... / Hơi...", explanation: "Cảm thấy có triệu chứng, chiều hướng như thế (sức khỏe/tâm trạng).",
    examples: [{ jp: "最近、風邪ぎみで調子が悪い。", vn: "Gần đây tôi hơi cảm nên người thấy mệt." }, { jp: "新入社員は緊張ぎみだ。", vn: "Nhân viên mới có vẻ hơi căng thẳng." }],
    quiz: { sentence: "最近、寝不足________で頭が痛い。", answer: "ぎみ", accepts: ["気味"], hint: "Có vẻ / Hơi", translation: "Gần đây do hơi thiếu ngủ nên tôi bị đau đầu." }
  },
  {
    id: 69, unit: 7, pattern: "がち", romaji: "gachi", meaning: "Thường hay... / Dễ...", explanation: "Tần suất xảy ra một tình trạng nào đó nhiều lần (nghĩa tiêu cực).",
    examples: [{ jp: "彼は最近、学校を休みがちだ。", vn: "Gần đây anh ấy hay nghỉ học." }, { jp: "この季節は雨が多くなりがちだ。", vn: "Mùa này trời thường hay đổ mưa." }],
    quiz: { sentence: "冬は曇りの日が続き________だ。", answer: "がち", accepts: [], hint: "Thường hay / Dễ (xu hướng tiêu cực)", translation: "Mùa đông thường hay kéo dài những ngày nhiều mây." }
  },
  {
    id: 70, unit: 7, pattern: "向き", romaji: "muki", meaning: "Phù hợp với...", explanation: "Bản chất, tính chất vốn dĩ thích hợp với một đối tượng.",
    examples: [{ jp: "この映画は子供向きだ。", vn: "Bộ phim này phù hợp với trẻ em." }, { jp: "このマンションは一人暮らし向きだ。", vn: "Căn chung cư này phù hợp với người sống một mình." }],
    quiz: { sentence: "この服のデザインは、若い人________だ。", answer: "向き", accepts: ["むき"], hint: "Phù hợp với", translation: "Thiết kế của bộ đồ này phù hợp với người trẻ tuổi." }
  },
  {
    id: 71, unit: 7, pattern: "向け", romaji: "muke", meaning: "Dành cho... / Hướng tới...", explanation: "Cố tình thiết kế, sản xuất ra để đặc biệt dành riêng cho một đối tượng.",
    examples: [{ jp: "これは外国人向けに書かれた本だ。", vn: "Đây là cuốn sách được viết dành cho người nước ngoài." }, { jp: "これは女性向けにデザインされた時計です。", vn: "Đây là chiếc đồng hồ được thiết kế dành riêng cho phụ nữ." }],
    quiz: { sentence: "この料理は、子供________に辛くなくしてある。", answer: "向け", accepts: ["むけ"], hint: "Dành cho / Hướng tới", translation: "Món ăn này được làm không cay để dành cho trẻ em." }
  },
  {
    id: 72, unit: 7, pattern: "を通じ(て) / 通し(て)", romaji: "wo tsuuji (te) / tooshi (te)", meaning: "Thông qua / Trong suốt...", explanation: "Thông qua một trung gian, hoặc duy trì trạng thái trong suốt một khoảng thời gian.",
    examples: [{ jp: "この町は一年を通じて暖かい。", vn: "Thị trấn này ấm áp trong suốt cả năm." }, { jp: "インターネットを通じて、世界中のニュースを知ることができる。", vn: "Thông qua Internet, chúng ta có thể biết được tin tức trên toàn thế giới." }],
    quiz: { sentence: "友人の紹介________、彼女と知り合った。", answer: "を通じて", accepts: ["をとおして", "を通して", "を通じ"], hint: "Thông qua", translation: "Tôi đã quen biết cô ấy thông qua sự giới thiệu của bạn bè." }
  },
  {
    id: 73, unit: 7, pattern: "っぽい", romaji: "ppoi", meaning: "Có vẻ... / Giống như / Hay", explanation: "Cảm thấy giống như tính chất đó, hoặc có xu hướng dễ bị làm sao đó.",
    examples: [{ jp: "年をとると、忘れっぽくなる。", vn: "Khi có tuổi, người ta hay trở nên đãng trí." }, { jp: "この服は少し子供っぽいね。", vn: "Bộ quần áo này trông hơi trẻ con nhỉ." }],
    quiz: { sentence: "あの人は怒り________から、気をつけたほうがいい。", answer: "っぽい", accepts: [], hint: "Hay... / Có xu hướng", translation: "Người đó hay cáu gắt lắm nên chú ý thì hơn." }
  },
  {
    id: 74, unit: 7, pattern: "とともに", romaji: "to tomo ni", meaning: "Cùng với... / Đồng thời với...", explanation: "Làm cùng ai đó, hoặc một sự việc thay đổi đồng thời với việc khác.",
    examples: [{ jp: "家族とともに日本へ来た。", vn: "Tôi đã đến Nhật Bản cùng với gia đình." }, { jp: "経済の発展とともに、人々の生活が変わった。", vn: "Cùng với sự phát triển kinh tế, cuộc sống của con người đã thay đổi." }],
    quiz: { sentence: "春の訪れ________、花が咲き始めた。", answer: "とともに", accepts: ["と共に"], hint: "Cùng với", translation: "Cùng với việc mùa xuân đến, hoa cũng bắt đầu nở." }
  },
  {
    id: 75, unit: 7, pattern: "にともなって", romaji: "ni tomonatte", meaning: "Kéo theo...", explanation: "Sự thay đổi của A kéo theo sự thay đổi của B (thường dùng trong văn viết).",
    examples: [{ jp: "人口の増加にともなって、色々な問題が起きた。", vn: "Cùng với sự gia tăng dân số, nhiều vấn đề phát sinh." }, { jp: "時代の変化にともなって、新しい言葉が生まれる。", vn: "Cùng với sự biến đổi của thời đại, những từ ngữ mới được sinh ra." }],
    quiz: { sentence: "台風の接近________、風が強くなってきた。", answer: "にともなって", accepts: ["に伴って", "にともない", "に伴い"], hint: "Kéo theo", translation: "Cùng với việc bão đang đến gần, gió đã bắt đầu thổi mạnh." }
  },

  // --- UNIT 8 ---
  {
    id: 76, unit: 8, pattern: "に決まっている", romaji: "ni kimatte iru", meaning: "Chắc chắn là", explanation: "Thể hiện sự phán đoán mang tính chủ quan, đinh ninh là chắc chắn sự việc sẽ như thế.",
    examples: [{ jp: "あんなに勉強したのだから、合格するに決まっている。", vn: "Học nhiều đến thế cơ mà, nhất định sẽ đỗ." }, { jp: "勝つに決まっている。相手は初心者だ。", vn: "Nhất định sẽ thắng thôi. Đối thủ là người mới mà." }],
    quiz: { sentence: "あんなに高いカメラ、私に買える________。", answer: "に決まっている", accepts: ["にきまっている"], hint: "Chắc chắn là", translation: "Cái máy ảnh đắt đến thế, chắc chắn là tôi không mua nổi rồi." }
  },
  {
    id: 77, unit: 8, pattern: "っけ", romaji: "kke", meaning: "Có phải... đúng không? / ...ấy nhỉ", explanation: "Dùng khi hỏi lại để xác nhận một điều mà mình không nhớ rõ.",
    examples: [{ jp: "今日は何曜日だっけ。", vn: "Hôm nay là thứ mấy ấy nhỉ?" }, { jp: "会議は明日だったっけ？", vn: "Cuộc họp là ngày mai đúng không nhỉ?" }],
    quiz: { sentence: "あの人の名前、何だ________。", answer: "っけ", accepts: ["だっけ"], hint: "...ấy nhỉ", translation: "Tên của người kia là gì ấy nhỉ." }
  },
  {
    id: 78, unit: 8, pattern: "ように", romaji: "you ni", meaning: "Để / Mong sao...", explanation: "Chỉ mục đích hoặc dùng khi cầu nguyện, mong mỏi một điều gì đó.",
    examples: [
      { jp: "忘れないように、メモをしておく。", vn: "Ghi chú lại để không bị quên." },
      { jp: "合格できますように。", vn: "Cầu mong cho mình sẽ thi đỗ." },
      { jp: "前に言ったように、ここは静かにしてください。", vn: "Như tôi đã nói trước đó, hãy giữ im lặng ở đây." }
    ],
    quiz: { sentence: "風邪を引かない________、コートを着る。", answer: "ように", accepts: [], hint: "Để (mục đích)", translation: "Tôi mặc áo khoác để không bị cảm." }
  },
  {
    id: 79, unit: 8, pattern: "ようがない", romaji: "you ga nai", meaning: "Không có cách nào để...", explanation: "Cho dù muốn làm cũng không thể làm được vì không có phương pháp.",
    examples: [{ jp: "こんなに壊れていては、直しようがない。", vn: "Hỏng nặng thế này thì hết cách sửa." }, { jp: "これ以上、説明しようがないほどはっきりしている。", vn: "Nó rõ ràng đến mức không còn cách nào để giải thích thêm nữa." }],
    quiz: { sentence: "携帯を落としたので、彼に連絡し________。", answer: "ようがない", accepts: ["ようもない"], hint: "Không có cách nào (V-masu)", translation: "Vì làm rơi điện thoại rồi nên không có cách nào liên lạc với anh ấy." }
  },
  {
    id: 80, unit: 8, pattern: "はずだ", romaji: "hazu da", meaning: "Chắc chắn là / Thảo nào", explanation: "Phán đoán chắc chắn dựa trên một lý do, căn cứ khách quan hợp lý.",
    examples: [{ jp: "ドアが開かない。鍵がかかっているはずだ。", vn: "Cửa không mở được. Chắc chắn là đang bị khóa." }, { jp: "真面目な彼が嘘をつくはずがない。", vn: "Người nghiêm túc như anh ấy thì không lẽ nào lại nói dối (Cách dùng phủ định của はず)." }],
    quiz: { sentence: "薬を飲んだから、もう熱は下がる________。", answer: "はずだ", accepts: ["はず"], hint: "Chắc chắn là", translation: "Đã uống thuốc rồi nên chắc chắn là nhiệt độ sẽ giảm." }
  },
  {
    id: 81, unit: 8, pattern: "わけだ", romaji: "wake da", meaning: "Thảo nào / Nghĩa là...", explanation: "Rút ra kết luận hợp lý từ lý do đã biết, hoặc dùng để hiểu ra vấn đề.",
    examples: [{ jp: "夜更かししたから、今日は眠いわけだ。", vn: "Thức khuya nên hôm nay buồn ngủ là phải (thảo nào)." }, { jp: "20ページも読んだのか。道理で時間がかかるわけだ。", vn: "Đọc tới tận 20 trang cơ à. Thảo nào mà tốn thời gian là phải." }],
    quiz: { sentence: "毎日10時間勉強しているんですか。成績がいい________。", answer: "わけだ", accepts: ["訳だ", "わけですね"], hint: "Thảo nào...", translation: "Mỗi ngày học 10 tiếng cơ à. Thảo nào thành tích tốt thế." }
  },
  {
    id: 82, unit: 8, pattern: "わけがない", romaji: "wake ga nai", meaning: "Tuyệt đối không", explanation: "Phủ định mạnh mẽ một sự việc, cho rằng điều đó là không thể nào xảy ra.",
    examples: [{ jp: "彼がそんな嘘をつくわけがない。", vn: "Lẽ nào anh ấy lại nói dối như vậy." }, { jp: "こんなに高いもの、私に買えるわけがない。", vn: "Đồ đắt thế này, không có lý nào tôi lại mua nổi." }],
    quiz: { sentence: "勉強していないのだから、テストに受かる________。", answer: "わけがない", accepts: ["訳がない"], hint: "Tuyệt đối không", translation: "Không học hành gì cả nên không thể nào đỗ bài kiểm tra được." }
  },
  {
    id: 83, unit: 8, pattern: "わけではない", romaji: "wake de wa nai", meaning: "Không hẳn là / Không có nghĩa là", explanation: "Phủ định một phần, đính chính lại một nhận định có vẻ hiển nhiên.",
    examples: [{ jp: "嫌いなわけではないが、あまり食べたくない。", vn: "Không hẳn là ghét nhưng mà tôi không muốn ăn lắm." }, { jp: "料理が全然できないわけではないが、苦手だ。", vn: "Không phải là tôi hoàn toàn không biết nấu ăn, nhưng mà tôi kém khoản đó." }],
    quiz: { sentence: "お金があれば幸せという________。", answer: "わけではない", accepts: ["訳ではない", "わけじゃない"], hint: "Không hẳn là", translation: "Không có nghĩa là có tiền thì sẽ hạnh phúc." }
  },
  {
    id: 84, unit: 8, pattern: "わけにはいかない", romaji: "wake ni wa ikanai", meaning: "Không thể...", explanation: "Không thể làm việc gì đó vì lý do đạo đức, trách nhiệm, xã hội.",
    examples: [{ jp: "熱があるが、今日は休むわけにはいかない。", vn: "Tuy bị sốt nhưng hôm nay không thể nghỉ được." }, { jp: "上司の命令なので, 断るわけにはいかない。", vn: "Vì là mệnh lệnh của cấp trên nên tôi không thể từ chối được." }],
    quiz: { sentence: "絶対に秘密にすると約束したから、話す________。", answer: "わけにはいかない", accepts: ["訳にはいかない"], hint: "Không thể (vì trách nhiệm)", translation: "Đã hứa là tuyệt đối giữ bí mật nên không thể nói ra được." }
  },
  {
    id: 85, unit: 8, pattern: "ないわけにはいかない", romaji: "nai wake ni wa ikanai", meaning: "Buộc phải / Không thể không", explanation: "Phủ định 2 lần, bắt buộc phải làm vì trách nhiệm đạo đức.",
    examples: [{ jp: "親友の結婚式だから、行かないわけにはいかない。", vn: "Vì là đám cưới của bạn thân nên tôi không thể không đi." }, { jp: "先生に頼まれたので、やらないわけにはいかない。", vn: "Vì được thầy giáo nhờ nên tôi không thể không làm." }],
    quiz: { sentence: "先輩に頼まれた仕事だから、やら________。", answer: "ないわけにはいかない", accepts: ["ない訳にはいかない"], hint: "Không thể không", translation: "Vì là công việc được nhờ nên không thể không làm." }
  },
  {
    id: 86, unit: 9, pattern: "かわり(に)", romaji: "kawari (ni)", meaning: "Thay vì / Đổi lại", explanation: "Làm việc này thay cho việc khác, hoặc làm để bù đắp, đổi lại.",
    examples: [{ jp: "映画に行くかわりに、家でDVDを見た。", vn: "Thay vì đi xem phim, tôi đã xem DVD ở nhà." }, { jp: "英語を教えてもらうかわりに、日本語を教えてあげた。", vn: "Đổi lại việc được dạy tiếng Anh, tôi đã dạy lại tiếng Nhật." }],
    quiz: { sentence: "日曜日に働く________、月曜日に休む。", answer: "かわりに", accepts: ["代わりに", "かわり", "代わり"], hint: "Thay vì / Đổi lại", translation: "Đổi lại việc đi làm vào Chủ nhật, tôi sẽ nghỉ thứ Hai." }
  },
  {
    id: 87, unit: 9, pattern: "にかわって", romaji: "ni kawatte", meaning: "Thay cho (đại diện)", explanation: "Đại diện, làm thay một việc mà vốn dĩ người khác thường làm.",
    examples: [{ jp: "社長にかわって、私がご挨拶申し上げます。", vn: "Thay mặt giám đốc, tôi xin gửi lời chào." }, { jp: "今は人間にかわって、ロボットが工場で働いている。", vn: "Hiện nay, robot đang làm việc trong các nhà máy thay cho con người." }],
    quiz: { sentence: "病気の母________、私が料理を作った。", answer: "にかわって", accepts: ["に代わって", "にかわり", "に代わり"], hint: "Thay cho (Đại diện)", translation: "Thay cho người mẹ đang ốm, tôi đã nấu ăn." }
  },
  {
    id: 88, unit: 9, pattern: "こそ", romaji: "koso", meaning: "Chính là / Nhất định là", explanation: "Nhấn mạnh vào từ đứng trước nó, loại bỏ các khả năng khác.",
    examples: [{ jp: "今年こそN3に合格したい。", vn: "Chính năm nay tôi muốn thi đỗ N3." }, { jp: "これこそ私が探していた本だ。", vn: "Chính đây là cuốn sách mà tôi đã tìm kiếm bấy lâu." }],
    quiz: { sentence: "明日________、絶対に遅刻しない。", answer: "こそ", accepts: [], hint: "Chính là (Nhấn mạnh)", translation: "Chính ngày mai, tuyệt đối tôi sẽ không đến muộn." }
  },
  {
    id: 89, unit: 9, pattern: "さえ", romaji: "sae", meaning: "Ngay cả / Thậm chí", explanation: "Đưa ra một ví dụ cực đoan, mang ý nghĩa 'đến cái đó còn như thế...'",
    examples: [{ jp: "ひらがなさえ書けない。", vn: "Ngay cả hiragana tôi cũng không viết được." }, { jp: "名前さえ書ければ、合格できる試験だ。", vn: "Đó là kỳ thi mà chỉ cần viết được tên thôi là có thể đỗ rồi." }],
    quiz: { sentence: "忙しすぎて、寝る時間________ない。", answer: "さえ", accepts: [], hint: "Ngay cả / Thậm chí", translation: "Quá bận rộn, đến cả thời gian ngủ cũng không có." }
  },
  {
    id: 90, unit: 9, pattern: "として", romaji: "to shite", meaning: "Với tư cách là", explanation: "Chỉ tư cách, lập trường, vai trò của một người hay sự vật.",
    examples: [{ jp: "彼は留学生として日本へ来た。", vn: "Anh ấy đến Nhật Bản với tư cách là du học sinh." }, { jp: "趣味として、ギターを弾いている。", vn: "Tôi chơi guitar như là một sở thích." }],
    quiz: { sentence: "彼は先生________この学校で働いている。", answer: "として", accepts: [], hint: "Với tư cách là", translation: "Anh ấy làm việc ở trường này với tư cách là giáo viên." }
  },
  {
    id: 91, unit: 9, pattern: "からといって", romaji: "kara to itte", meaning: "Chỉ vì... mà (không hẳn)", explanation: "Dù có lý do đó, kết luận cũng không hẳn như mong đợi.",
    examples: [{ jp: "日本人だからといって、漢字가全部書けるわけではない。", vn: "Không phải cứ là người Nhật thì viết được hết Kanji." }, { jp: "練習したからといって、必ず勝てるとは限らない。", vn: "Không hẳn cứ tập luyện là chắc chắn sẽ thắng." }],
    quiz: { sentence: "お金がある________、幸せだとは限らない。", answer: "からといって", accepts: ["からって"], hint: "Chỉ vì... mà", translation: "Không hẳn cứ có tiền là sẽ hạnh phúc." }
  },
  {
    id: 92, unit: 9, pattern: "に反し(て)", romaji: "ni hanshi (te)", meaning: "Trái với", explanation: "Trái ngược với dự đoán, kỳ vọng, hy vọng hoặc quy tắc.",
    examples: [{ jp: "みんなの予想に反して、Aチームが優勝した。", vn: "Trái với dự đoán của mọi người, đội A đã vô địch." }, { jp: "親の期待に反して、彼は大学に行かなかった。", vn: "Trái với kỳ vọng của cha mẹ, anh ấy đã không vào đại học." }],
    quiz: { sentence: "天気予報________、雨が降った。", answer: "に反して", accepts: ["に反し"], hint: "Trái với (Dự đoán)", translation: "Trái với dự báo thời tiết, trời đã mưa." }
  },
  {
    id: 93, unit: 9, pattern: "にもとづいて", romaji: "ni motoduite", meaning: "Dựa trên (cơ sở/dữ liệu)", explanation: "Dựa trên cơ sở chuẩn mực (dữ liệu, luật lệ) để hành động.",
    examples: [{ jp: "調査結果にもとづいて、レポートを書いた。", vn: "Tôi đã viết báo cáo dựa trên kết quả điều tra." }, { jp: "この法律にもとづいて、判決が下された。", vn: "Phán quyết đã được đưa ra dựa trên đạo luật này." }],
    quiz: { sentence: "この計画は、データ________作られている。", answer: "にもとづいて", accepts: ["に基づいて", "にもとづき"], hint: "Dựa trên (Dữ liệu)", translation: "Kế hoạch này được lập ra dựa trên dữ liệu." }
  },
  {
    id: 94, unit: 9, pattern: "をもとに(して)", romaji: "wo moto ni (shite)", meaning: "Dựa trên (tư liệu/ý tưởng)", explanation: "Lấy một sự thật, kinh nghiệm làm chất liệu sáng tạo.",
    examples: [{ jp: "この映画は事実をもとにして作られた。", vn: "Bộ phim này được làm dựa trên sự thật." }, { jp: "漢字は、ものの形をもとにして作られた文字だ。", vn: "Chữ Kanji là loại chữ được tạo ra dựa trên hình dáng của các sự vật." }],
    quiz: { sentence: "この小説は、作者の経験________書かれた。", answer: "をもとにして", accepts: ["をもとに"], hint: "Dựa trên (Chất liệu)", translation: "Cuốn tiểu thuyết này được viết dựa trên kinh nghiệm tác giả." }
  },
  {
    id: 95, unit: 9, pattern: "反面 / 半面", romaji: "hanmen", meaning: "Mặt khác / Ngược lại", explanation: "Cùng một sự vật nhưng tồn tại hai mặt trái ngược nhau.",
    examples: [{ jp: "都会の生活は便利な反面、ストレスも多い。", vn: "Đô thị một mặt thì tiện lợi, mặt khác cũng nhiều căng thẳng." }, { jp: "この仕事は給料が高い反面、とても忙しい。", vn: "Công việc này lương cao nhưng mặt khác lại rất bận rộn." }],
    quiz: { sentence: "この薬はよく効く________、副作用もある。", answer: "反面", accepts: ["半面", "はんめん"], hint: "Mặt khác", translation: "Loại thuốc này hiệu quả tốt, nhưng mặt khác có tác dụng phụ." }
  },
  {
    id: 96, unit: 9, pattern: "れる / られる (自発)", romaji: "reru / rareru (jihatsu)", meaning: "Tự nhiên cảm thấy", explanation: "Dùng thể bị động để diễn tả cảm xúc tự nhiên nảy sinh.",
    examples: [{ jp: "この写真を見ると、昔のことが思い出される。", vn: "Nhìn bức ảnh này, tôi lại tự nhiên nhớ về ngày xưa." }, { jp: "将来のことが案じられる。", vn: "Tự nhiên thấy lo lắng cho tương lai." }],
    quiz: { sentence: "この歌を聞くと、昔のことが思い________。", answer: "出される", accepts: ["だされる"], hint: "Tự nhiên nhớ đến (Thể bị động)", translation: "Nghe bài hát này, chuyện ngày xưa lại ùa về." }
  },
  {
    id: 97, unit: 9, pattern: "てたまらない", romaji: "te tamaranai", meaning: "Rất... không chịu nổi", explanation: "Nhấn mạnh cảm giác cơ thể/tâm lý không thể kiềm chế được.",
    examples: [{ jp: "今日は暑くてたまらない。", vn: "Hôm nay nóng không chịu nổi." }, { jp: "合格するかどうか、心配でたまらない。", vn: "Tôi vô cùng lo lắng không biết có đỗ hay không." }],
    quiz: { sentence: "喉が渇い________、冷たい水が飲みたい。", answer: "てたまらない", accepts: [], hint: "Rất... không chịu nổi", translation: "Khát khô cả cổ không chịu nổi, tôi muốn uống nước lạnh." }
  },
  {
    id: 98, unit: 9, pattern: "てならない", romaji: "te naranai", meaning: "Rất... (Tự nhiên cảm thấy)", explanation: "Cảm xúc tự nhiên dâng trào (thường tiêu cực, văn trang trọng).",
    examples: [{ jp: "国の家族のことが心配でならない。", vn: "Tôi vô cùng lo lắng cho gia đình ở quê." }, { jp: "不思議でならない。", vn: "Tôi thấy vô cùng kỳ lạ (không thể hiểu thấu nảy sinh tự nhiên)." }],
    quiz: { sentence: "面接の結果が気になっ________。", answer: "てならない", accepts: [], hint: "Vô cùng (văn nói trang trọng)", translation: "Tôi vô cùng bận tâm về kết quả của buổi phỏng vấn." }
  },
  {
    id: 99, unit: 10, pattern: "とか", romaji: "toka", meaning: "Nghe nói là... / Hình như là...", explanation: "Dùng để truyền đạt thông tin nghe loáng thoáng hoặc đưa ra một lý do mà bản thân không chắc chắn lắm (cấu trúc phổ biến: 〜とかで).",
    examples: [
      { jp: "息子さんは塾だとかで、今日は不参加です。", vn: "Nghe đâu con trai bận đi học thêm hay sao đó nên hôm nay không tham gia." },
      { jp: "昨日は、お祭りだとかで、街が賑やかだった。", vn: "Hôm qua hình như là có lễ hội hay sao đó mà phố xá náo nhiệt hẳn lên." }
    ],
    quiz: { sentence: "彼は風邪を引いた________で、今日は欠席です。", answer: "とか", accepts: [], hint: "Nghe nói là (Chỉ lý do chưa chắc chắn)", translation: "Vì nghe nói là anh ấy bị cảm (hay gì đó) nên hôm nay vắng mặt." }
  },
  {
    id: 100, unit: 10, pattern: "だけ", romaji: "dake", meaning: "Chỉ / Mức tối đa có thể", explanation: "Biểu thị sự giới hạn hoặc làm đến mức cao nhất (好きなだけ).",
    examples: [{ jp: "私が持っているお金はこれだけです。", vn: "Số tiền tôi có chỉ bằng này thôi." }, { jp: "好きなだけ、食べていいですよ。", vn: "Bạn có thể ăn bao nhiêu tùy thích (đến mức tối đa có thể)." }],
    quiz: { sentence: "今日は疲れたので、これ________にしておきます。", answer: "だけ", accepts: [], hint: "Chỉ (giới hạn)", translation: "Hôm nay tôi mệt rồi nên chỉ làm đến đây thôi." }
  },
  {
    id: 101, unit: 10, pattern: "ばかりでなく", romaji: "bakari de naku", meaning: "Không chỉ... mà còn...", explanation: "Ngoài sự vật/việc đó ra thì còn có cái khác nữa.",
    examples: [{ jp: "彼は英語ばかりでなく、フランス語も話せる。", vn: "Anh ấy không chỉ nói được tiếng Anh mà còn tiếng Pháp." }, { jp: "野菜ばかりでなく、肉も食べなさい。", vn: "Không chỉ ăn rau, hãy ăn cả thịt nữa đi." }],
    quiz: { sentence: "彼女は美しい________、性格もいい。", answer: "ばかりでなく", accepts: ["ばかりか"], hint: "Không chỉ... mà còn...", translation: "Cô ấy không chỉ xinh đẹp mà tính cách cũng tốt." }
  },
  {
    id: 102, unit: 10, pattern: "かけ / かける", romaji: "kake / kakeru", meaning: "Đang làm dở / Chưa xong", explanation: "Hành động đang thực hiện giữa chừng thì dừng lại.",
    examples: [{ jp: "テーブルの上に食べかけのリンゴがある。", vn: "Trên bàn có quả táo đang ăn dở." }, { jp: "書きかけの手紙が置いてある。", vn: "Lá thư đang viết dở được đặt ở đó." }],
    quiz: { sentence: "この本はまだ読み________だ。", answer: "かけ", accepts: ["かけの", "かけている"], hint: "Đang làm dở (V-masu)", translation: "Cuốn sách này tôi vẫn đang đọc dở." }
  },
  {
    id: 103, unit: 10, pattern: "をこめて", romaji: "wo komete", meaning: "Gửi gắm (tình cảm) vào...", explanation: "Làm việc gì đó với tất cả tình yêu, lòng biết ơn, tâm nguyện.",
    examples: [{ jp: "愛をこめて、手紙を書きました。", vn: "Tôi đã viết lá thư chứa đựng tất cả tình yêu thương." }, { jp: "感謝の気持ちをこめて、歌います。", vn: "Tôi sẽ hát với tất cả lòng biết ơn." }],
    quiz: { sentence: "心を________、プレゼントを選びました。", answer: "こめて", accepts: ["込めて"], hint: "Gửi gắm", translation: "Tôi đã chọn món quà này với tất cả tấm lòng." }
  },
  {
    id: 104, unit: 10, pattern: "わりに(は)", romaji: "wari ni (wa)", meaning: "Khá là... so với", explanation: "Đánh giá sự việc có kết quả trái ngược với mức độ dự đoán.",
    examples: [{ jp: "彼はよく食べるわりに、太らない。", vn: "Anh ấy ăn nhiều thế mà lại không béo." }, { jp: "値段のわりに、料理が美味しい。", vn: "So với giá tiền thì món ăn ngon (ngon hơn mong đợi so với giá)." }],
    quiz: { sentence: "お年寄りの________、とても元気だ。", answer: "わりに", accepts: ["わりには", "割に", "割には"], hint: "So với... thì khá là...", translation: "So với tuổi già thì cụ khá là khỏe mạnh." }
  },
  {
    id: 105, unit: 10, pattern: "くせに", romaji: "kuse ni", meaning: "Mặc dù... thế mà (trách móc)", explanation: "Giống 'わりに' nhưng mang sắc thái chê bai, trách móc.",
    examples: [{ jp: "知っているくせに、教えてくれない。", vn: "Biết thế mà lại không chỉ cho tôi." }, { jp: "男のくせに、こんなことで泣くな。", vn: "Đàn ông con trai gì mà lại khóc vì mấy chuyện thế này (trách móc)." }],
    quiz: { sentence: "お金がない________、高いものばかり買う。", answer: "くせに", accepts: [], hint: "Mặc dù... thế mà", translation: "Không có tiền thế mà toàn mua đồ đắt đỏ." }
  },
  {
    id: 106, unit: 10, pattern: "てみせる", romaji: "te miseru", meaning: "Chắc chắn sẽ làm (cho xem)", explanation: "Thể hiện quyết tâm mạnh mẽ chứng tỏ cho người khác thấy.",
    examples: [{ jp: "今度の試験には、絶対に合格してみせる。", vn: "Kỳ thi lần này tôi chắc chắn sẽ đỗ cho mà xem." }, { jp: "今に見ていろ。プロになってみせる。", vn: "Hãy cứ chờ mà xem. Tôi sẽ trở thành tuyển thủ chuyên nghiệp cho mà thấy." }],
    quiz: { sentence: "次の試合は絶対に勝っ________。", answer: "てみせる", accepts: ["て見せる"], hint: "Sẽ làm cho mà xem", translation: "Trận đấu tới tôi nhất định sẽ chiến thắng cho mà xem." }
  },
  {
    id: 107, unit: 10, pattern: "をきっかけに", romaji: "wo kikkake ni", meaning: "Nhân cơ hội / Nhờ có", explanation: "Lấy một sự kiện làm duyên cớ, bước ngoặt để bắt đầu việc mới.",
    examples: [{ jp: "大学入学をきっかけに、一人暮らしを始めた。", vn: "Nhân dịp vào đại học, tôi đã bắt đầu ra ở riêng." }, { jp: "病気をきっかけに、タバコをやめた。", vn: "Nhờ trận ốm mà tôi đã bỏ thuốc lá." }],
    quiz: { sentence: "日本のアニメ________、日本語を勉強し始めた。", answer: "をきっかけに", accepts: ["をきっかけにして", "をきっかけとして"], hint: "Nhân cơ hội", translation: "Nhờ anime Nhật mà tôi bắt đầu học tiếng Nhật." }
  },
  {
    id: 108, unit: 10, pattern: "とする / としたら / とすれば / とすると", romaji: "to suru / to shitara / to sureba / to suruto", meaning: "Giả sử là... / Nếu cho rằng...", explanation: "1. としたら/とすれば: Giả định tình huống không có thật hoặc khó xảy ra. 2. とすると/とすれば: Đưa ra suy luận dựa trên một giả thiết có căn cứ.",
    examples: [
      { jp: "もし宝くじが当たったとしたら、家を買いたい。", vn: "Giả sử mà trúng vé số thì tôi muốn mua nhà. (Giả định không có thật)" },
      { jp: "その話が本当だとすると、大変なことだ。", vn: "Nếu câu chuyện đó là thật thì quả là vấn đề lớn. (Suy luận logic)" },
      { jp: "飛行機で行くとすれば、いくらぐらいかかりますか。", vn: "Nếu giả sử đi bằng máy bay thì tốn khoảng bao nhiêu? (Trường hợp giả định)" }
    ],
    quiz: { sentence: "もし生まれ変われると________、鳥になりたい。", answer: "したら", accepts: ["すれば", "すると"], hint: "Giả sử (V-plain + と...)", translation: "Nếu như được sinh ra một lần nữa, tôi muốn trở thành chú chim." }
  },
  {
    id: 109, unit: 10, pattern: "際に / 際(に)は", romaji: "sai ni / sai (ni) wa", meaning: "Khi / Lúc (trang trọng)", explanation: "Giống với 時, nhưng lịch sự, dùng trong văn bản, thông báo.",
    examples: [{ jp: "帰国の際には、連絡してください。", vn: "Khi nào về nước thì hãy liên lạc nhé." }, { jp: "お申込みの際は、身分証明書が必要です。", vn: "Khi đăng ký, quý khách cần có chứng minh thư." }],
    quiz: { sentence: "お降りの________、お忘れ物にご注意ください。", answer: "際は", accepts: ["際に", "際"], hint: "Khi / Lúc (lịch sự)", translation: "Khi quý khách xuống tàu, xin lưu ý hành lý để quên." }
  },
  {
    id: 110, unit: 10, pattern: "おそれがある", romaji: "osore ga aru", meaning: "Có nguy cơ / E rằng...", explanation: "Sự lo lắng điều tồi tệ có thể xảy ra (thường dùng trong bản tin).",
    examples: [{ jp: "明日は大雨のおそれがある。", vn: "Ngày mai có nguy cơ sẽ mưa lớn." }, { jp: "このままでは、絶滅するおそれがある。", vn: "Nếu cứ thế này, có nguy cơ sẽ bị tuyệt chủng." }],
    quiz: { sentence: "この地域は津波の________があります。", answer: "おそれ", accepts: ["恐れ"], hint: "Có nguy cơ", translation: "Khu vực này có nguy cơ xảy ra sóng thần." }
  }
];