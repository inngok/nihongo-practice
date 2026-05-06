export const sentenceSortData = [
  {
    id: 1,
    context: "A「じゃあ、あしたはコンサート会場の入り口に5時に集まりませんか。」\nB「コンサートは7時からですから、そんなに ",
    suffix: " と思いますよ。」",
    options: [
      { id: "A", text: "早く" },
      { id: "B", text: "開いていない" },
      { id: "C", text: "まだ" },
      { id: "D", text: "行っても" }
    ],
    correctOrder: ["A", "D", "C", "B"],
    correctStar: "C",
    meaning: "A: Vậy thì, ngày mai ở cổng vào hội trường buổi hòa nhạc lúc 5 giờ tập trung không.\nB: Buổi hòa nhạc từ 7 giờ vì, đến mức như thế sớm dù đi vẫn chưa không mở cửa tôi nghĩ đấy."
  },
  {
    id: 2,
    context: "(田中先生の研究室で)\n学生「田中先生はいらっしゃいますか。」\n秘書「今、ほかの学生と話して ",
    suffix: " ください。」",
    options: [
      { id: "A", text: "すこし" },
      { id: "B", text: "から" },
      { id: "C", text: "待って" },
      { id: "D", text: "いらっしゃいます" }
    ],
    correctOrder: ["D", "B", "A", "C"],
    correctStar: "A",
    meaning: "(Ở phòng nghiên cứu của thầy Tanaka)\nHọc sinh: Thầy Tanaka có ở đây không.\nThư ký: Bây giờ, với học sinh khác đang nói chuyện vì, một chút hãy đợi."
  },
  {
    id: 3,
    context: "父も私も、今日はかさがなくても ",
    suffix: " が、雨に降られてしまった。",
    options: [
      { id: "A", text: "だろう" },
      { id: "B", text: "と思って" },
      { id: "C", text: "大丈夫" },
      { id: "D", text: "出かけた" }
    ],
    correctOrder: ["C", "A", "B", "D"],
    correctStar: "B",
    meaning: "Bố và tôi, hôm nay dù không có ô không sao có lẽ nghĩ rằng đã đi ra ngoài nhưng, bị mưa rơi rồi."
  },
  {
    id: 4,
    context: "昨日動物園に行ったら、先月 ",
    suffix: " 見ることができました。",
    options: [
      { id: "A", text: "生まれた" },
      { id: "B", text: "ライオンの" },
      { id: "C", text: "ばかりの" },
      { id: "D", text: "赤ちゃんを" }
    ],
    correctOrder: ["A", "C", "B", "D"],
    correctStar: "B",
    meaning: "Hôm qua nếu đi đến sở thú, tháng trước được sinh ra vừa mới của sư tử em bé việc nhìn đã có thể."
  },
  {
    id: 5,
    context: "ジョン「この『りかい』という言葉はどういう意味ですか。」\nアリ「ああ、確か『わかる』 ",
    suffix: " んですけど。」",
    options: [
      { id: "A", text: "意味だった" },
      { id: "B", text: "という" },
      { id: "C", text: "と思う" },
      { id: "D", text: "ような" }
    ],
    correctOrder: ["B", "D", "A", "C"],
    correctStar: "A",
    meaning: "John: Từ nói là 'rikai' này là ý nghĩa như thế nào vậy.\nAli: À, chắc chắn nói là giống như ý nghĩa đã là tôi nghĩ nhưng mà."
  },
  {
    id: 6,
    context: "A「来週、試合 ",
    suffix: " んですか。」\nB「すみません。」",
    options: [
      { id: "A", text: "何をやっていた" },
      { id: "B", text: "練習に来ないで" },
      { id: "C", text: "なのに" },
      { id: "D", text: "ちっとも" }
    ],
    correctOrder: ["C", "D", "B", "A"],
    correctStar: "B",
    meaning: "A: Tuần sau, trận đấu thế mà một chút cũng không không đến luyện tập mà đã làm cái gì vậy.\nB: Xin lỗi."
  },
  {
    id: 7,
    context: "あの美術館は曜日 ",
    suffix: " 窓口で確認したほうがいいよ。",
    options: [
      { id: "A", text: "始まる時間" },
      { id: "B", text: "違うから" },
      { id: "C", text: "によって" },
      { id: "D", text: "が" }
    ],
    correctOrder: ["C", "A", "D", "B"],
    correctStar: "D",
    meaning: "Bảo tàng mỹ thuật đó thứ (trong tuần) tùy theo thời gian bắt đầu (chủ ngữ) khác vì ở quầy xác nhận thì tốt hơn đấy."
  },
  {
    id: 8,
    context: "自分で野菜を作ってみて、おいしい野菜を育てる ",
    suffix: " わかりました。",
    options: [
      { id: "A", text: "ことが" },
      { id: "B", text: "大変な" },
      { id: "C", text: "ことか" },
      { id: "D", text: "どんなに" }
    ],
    correctOrder: ["A", "D", "B", "C"],
    correctStar: "B",
    meaning: "Tự mình thử làm rau, trồng rau ngon việc như thế nào vất vả việc (không biết) đã hiểu."
  },
  {
    id: 9,
    context: "A「今度のさよならパーティーで、みんなで歌う歌は、これでいいですか」\nB「すみません。この歌は好きなんですが、少しむずかしいです ",
    suffix: " してほしいです。」",
    options: [
      { id: "A", text: "の" },
      { id: "B", text: "ほか" },
      { id: "C", text: "に" },
      { id: "D", text: "から" }
    ],
    correctOrder: ["D", "B", "A", "C"],
    correctStar: "A",
    meaning: "A: Ở bữa tiệc chia tay lần này, bài hát mọi người cùng hát, bằng cái này được không.\nB: Xin lỗi. Bài hát này thích nhưng mà, hơi khó vì ngoài ra/khác cái vào (thành) muốn bạn làm (chọn)."
  },
  {
    id: 10,
    context: "最近、子どもがピアノを習いたいと言いだした。わたしは、子どもが ",
    suffix: " と思っている。",
    options: [
      { id: "A", text: "したい" },
      { id: "B", text: "やりたい" },
      { id: "C", text: "やらせて" },
      { id: "D", text: "と思うことは" }
    ],
    correctOrder: ["A", "D", "C", "B"],
    correctStar: "C",
    meaning: "Gần đây, con đã bắt đầu nói muốn học piano. Tôi thì, con muốn làm việc nghĩ rằng cho phép làm muốn cho làm đang nghĩ."
  },
  {
    id: 11,
    context: "中山「上田さんは、本当にこの仕事が好きなんですね。」\n上田「はい、わたしは、 ",
    suffix: " ないと思っているんです。」",
    options: [
      { id: "A", text: "ほど" },
      { id: "B", text: "仕事は" },
      { id: "C", text: "これ以上" },
      { id: "D", text: "おもしろい" }
    ],
    correctOrder: ["C", "A", "D", "B"],
    correctStar: "D",
    meaning: "Nakayama: Anh Ueda thì, thực sự thích công việc này nhỉ.\nUeda: Vâng, tôi thì, hơn thế này mức độ/bằng thú vị công việc thì không có đang nghĩ đấy."
  },
  {
    id: 12,
    context: "この美術館には、19世紀の ",
    suffix: " たくさんあります。",
    options: [
      { id: "A", text: "よって" },
      { id: "B", text: "画家たちに" },
      { id: "C", text: "絵が" },
      { id: "D", text: "描かれた" }
    ],
    correctOrder: ["B", "A", "D", "C"],
    correctStar: "D",
    meaning: "Ở bảo tàng mỹ thuật này thì, của thế kỷ 19 các họa sĩ bởi được vẽ bức tranh có nhiều."
  },
  {
    id: 13,
    context: "昨日のパーティーは、友だちと話していたら、ほとんど ",
    suffix: " 、あとでおなかがすいてしまった。",
    options: [
      { id: "A", text: "終わってしまった" },
      { id: "B", text: "何も" },
      { id: "C", text: "うちに" },
      { id: "D", text: "食べない" }
    ],
    correctOrder: ["B", "D", "C", "A"],
    correctStar: "C",
    meaning: "Bữa tiệc hôm qua thì, nếu đang nói chuyện với bạn bè, hầu như cái gì cũng không ăn trong lúc đã kết thúc mất , sau đó bụng đã đói mất."
  },
  {
    id: 14,
    context: "夏休みに行われた会社での実習は、わたしにとって、企業で ",
    suffix: " いい機会になった。",
    options: [
      { id: "A", text: "考える" },
      { id: "B", text: "というのが" },
      { id: "C", text: "働く" },
      { id: "D", text: "どういうことか" }
    ],
    correctOrder: ["C", "B", "D", "A"],
    correctStar: "D",
    meaning: "Thực tập ở công ty được tổ chức vào nghỉ hè thì, đối với tôi, ở doanh nghiệp làm việc việc gọi là là việc như thế nào suy nghĩ đã trở thành cơ hội tốt."
  },
  {
    id: 15,
    context: "母は「風をひかないのは、 ",
    suffix: " 。」とよく言っている。",
    options: [
      { id: "A", text: "ジョギング" },
      { id: "B", text: "している" },
      { id: "C", text: "のおかげだ" },
      { id: "D", text: "毎朝" }
    ],
    correctOrder: ["D", "B", "A", "C"],
    correctStar: "A",
    meaning: "Mẹ thì Việc không bị cảm là, mỗi sáng đang làm chạy bộ nhờ vào . thường đang nói."
  },
  {
    id: 16,
    context: "(電話で) 配達員 「お荷物の配達時間ですが、明日の夜8時ごろでいかがですか。」\n客「その ",
    suffix: " ので大丈夫です。お願いします。」",
    options: [
      { id: "A", text: "と思う" },
      { id: "B", text: "多分" },
      { id: "C", text: "時間は" },
      { id: "D", text: "家にいる" }
    ],
    correctOrder: ["C", "B", "D", "A"],
    correctStar: "D",
    meaning: "(Qua điện thoại) Người giao hàng: Là thời gian giao hành lý nhưng, khoảng 8 giờ tối mai thì thế nào.\nKhách: Thời gian đó thì có lẽ ở nhà tôi nghĩ vì không sao. Xin nhờ."
  },
  {
    id: 17,
    context: "山下「田中さん、ABC大学のリュウ先生を知っていますか。」\n田中「 ",
    suffix: " ありません。」",
    options: [
      { id: "A", text: "ありますが" },
      { id: "B", text: "会ったことは" },
      { id: "C", text: "聞いたことが" },
      { id: "D", text: "お名前は" }
    ],
    correctOrder: ["D", "C", "A", "B"],
    correctStar: "A",
    meaning: "Yamashita: Anh Tanaka, có biết thầy Ryu của đại học ABC không.\nTanaka: Tên thì việc đã nghe có nhưng mà việc đã gặp thì không có."
  },
  {
    id: 18,
    context: "わたしが ",
    suffix: " 京都の高山寺がある。",
    options: [
      { id: "A", text: "行ってみたい" },
      { id: "B", text: "ひとつに" },
      { id: "C", text: "もっとも" },
      { id: "D", text: "寺の" }
    ],
    correctOrder: ["C", "A", "D", "B"],
    correctStar: "D",
    meaning: "Tôi nhất muốn thử đi của chùa vào một chùa Kozanji của Kyoto có."
  },
  {
    id: 19,
    context: "『プレゼント』という映画を見て、この映画 ",
    suffix: " 映画はないと思った。",
    options: [
      { id: "A", text: "ほど" },
      { id: "B", text: "について" },
      { id: "C", text: "人生" },
      { id: "D", text: "考えさせられる" }
    ],
    correctOrder: ["A", "C", "B", "D"],
    correctStar: "B",
    meaning: "Xem bộ phim nói là Món quà, bộ phim này bằng/đến mức về cuộc sống bị bắt suy nghĩ bộ phim thì không có đã nghĩ."
  },
  {
    id: 20,
    context: "友だちからの ",
    suffix: " 。",
    options: [
      { id: "A", text: "すっかり忘れていた" },
      { id: "B", text: "メールが来るまで" },
      { id: "C", text: "ということを" },
      { id: "D", text: "今日がレポートのしめ切り日だった" }
    ],
    correctOrder: ["B", "D", "C", "A"],
    correctStar: "C",
    meaning: "Từ bạn bè cho đến khi email đến hôm nay là ngày hạn chót của báo cáo việc nói là đã hoàn toàn quên mất."
  },
  {
    id: 21,
    context: "A「片づけはあしたにしますか。」\nB「あしたは朝から ",
    suffix: " ましょう。」",
    options: [
      { id: "A", text: "忙しくなり" },
      { id: "B", text: "今日中に" },
      { id: "C", text: "そうですし" },
      { id: "D", text: "やってしまい" }
    ],
    correctOrder: ["A", "C", "B", "D"],
    correctStar: "B",
    meaning: "A: Dọn dẹp thì để ngày mai làm không.\nB: Ngày mai thì từ sáng trở nên bận rộn có vẻ (và) trong hôm nay làm xong mất đi."
  },
  {
    id: 22,
    context: "仕事から帰って、娘に笑顔で ",
    suffix: " 幸せだといつも思う。",
    options: [
      { id: "A", text: "私は本当に" },
      { id: "B", text: "「おかえり。」と言われると" },
      { id: "C", text: "娘がいる" },
      { id: "D", text: "こんなかわいい" }
    ],
    correctOrder: ["B", "D", "C", "A"],
    correctStar: "C",
    meaning: "Từ công việc về, bởi con gái bằng khuôn mặt cười hễ bị nói 'Mừng về nhà' như thế này dễ thương con gái có tôi thì thực sự là hạnh phúc luôn luôn nghĩ."
  },
  {
    id: 23,
    context: "川名寺は桜が ",
    suffix: " 秋の景色もすばらしいです。",
    options: [
      { id: "A", text: "桜だけでなく" },
      { id: "B", text: "ことで" },
      { id: "C", text: "有名ですが" },
      { id: "D", text: "きれいな" }
    ],
    correctOrder: ["D", "B", "C", "A"],
    correctStar: "C",
    meaning: "Chùa Kawanadera thì hoa anh đào đẹp bằng việc (vì) nổi tiếng nhưng không chỉ hoa anh đào phong cảnh mùa thu cũng tuyệt vời."
  },
  {
    id: 24,
    context: "父はいつも、「何も ",
    suffix: " ほうがいい。」と言っている。",
    options: [
      { id: "A", text: "チャレンジして" },
      { id: "B", text: "失敗する" },
      { id: "C", text: "しないで" },
      { id: "D", text: "いるより" }
    ],
    correctOrder: ["C", "D", "A", "B"],
    correctStar: "A",
    meaning: "Bố thì luôn luôn, Cái gì cũng không làm so với việc đang thử thách và thất bại phía (cách) thì tốt. đang nói."
  },
  {
    id: 25,
    context: "A「ねえ、来近の日曜日、北町の美術館に行かない?」\nB「いいね。あ、私、そこの割引券を持ってるよ。その ",
    suffix: " になるんだ。」",
    options: [
      { id: "A", text: "三人" },
      { id: "B", text: "割引券一枚で" },
      { id: "C", text: "二割引" },
      { id: "D", text: "まで" }
    ],
    correctOrder: ["B", "A", "D", "C"],
    correctStar: "D",
    meaning: "A: Này, chủ nhật tuần tới, không đi bảo tàng mỹ thuật của Kitamachi à?\nB: Tốt nhỉ. A, tôi, có cầm vé giảm giá ở đó đấy. Cái đó bằng một tờ vé giảm giá 3 người đến giảm 2 phần (20%) trở thành đấy."
  },
  {
    id: 26,
    context: "(病院で) 村山「すみません。予約した村山ですが」\n受付「はい、村山ですね。では、そちらの ",
    suffix: " ください」",
    options: [
      { id: "A", text: "お待ち" },
      { id: "B", text: "おかけ" },
      { id: "C", text: "いすに" },
      { id: "D", text: "になって" }
    ],
    correctOrder: ["C", "B", "D", "A"],
    correctStar: "A",
    meaning: "(Ở bệnh viện) Murayama: Xin lỗi. Là Murayama đã đặt trước nhưng\nLễ tân: Vâng, là anh Murayama nhỉ. Vậy thì, của chỗ đó vào ghế ngồi trở thành chờ xin hãy"
  },
  {
    id: 27,
    context: "料理をする ",
    suffix: " おいしく作れる。",
    options: [
      { id: "A", text: "私でも" },
      { id: "B", text: "ハンバーグだけは" },
      { id: "C", text: "それほど得意ではない" },
      { id: "D", text: "のが" }
    ],
    correctOrder: ["D", "C", "A", "B"],
    correctStar: "A",
    meaning: "Làm nấu ăn việc đến mức đó không giỏi dù là tôi chỉ là hamburger thì có thể làm ngon."
  },
  {
    id: 28,
    context: "高木 「山村さんは、いつもポケットにメモ帳を入れているんですか。」\n山村「はい。思いついた ",
    suffix: " しているんです。」",
    options: [
      { id: "A", text: "忘れて" },
      { id: "B", text: "しまわないように" },
      { id: "C", text: "かならず持ち歩くように" },
      { id: "D", text: "アイデアを" }
    ],
    correctOrder: ["D", "A", "B", "C"],
    correctStar: "B",
    meaning: "Takagi: Anh Yamamura thì, luôn luôn đang cho sổ ghi nhớ vào túi à.\nYamamura: Vâng. Đã nghĩ ra ý tưởng quên để không mất chắc chắn mang đi bộ (mang theo) đang làm đấy."
  },
  {
    id: 29,
    context: "昨日の夜、誰も ",
    suffix: " 気がした。",
    options: [
      { id: "A", text: "いない" },
      { id: "B", text: "聞こえた" },
      { id: "C", text: "何か音が" },
      { id: "D", text: "部屋から" }
    ],
    correctOrder: ["A", "D", "C", "B"],
    correctStar: "C",
    meaning: "Đêm hôm qua, ai cũng không có từ căn phòng âm thanh gì đó đã nghe thấy cảm giác đã làm."
  },
  {
    id: 30,
    context: "現在、市民運動公園の中に、新しい ",
    suffix: " 検討されている。",
    options: [
      { id: "A", text: "体育館を" },
      { id: "B", text: "建設する" },
      { id: "C", text: "二つの" },
      { id: "D", text: "という案が" }
    ],
    correctOrder: ["C", "A", "B", "D"],
    correctStar: "B",
    meaning: "Hiện tại, ở trong công viên vận động thị dân, mới hai cái nhà thi đấu xây dựng phương án gọi là đang bị xem xét."
  },
  {
    id: 31,
    context: "私は、息子が ",
    suffix: " 見て、「どうしたの?」と声をかけた。",
    options: [
      { id: "A", text: "顔を" },
      { id: "B", text: "何か" },
      { id: "C", text: "言いたさそうな" },
      { id: "D", text: "しているのを" }
    ],
    correctOrder: ["B", "C", "A", "D"],
    correctStar: "A",
    meaning: "Tôi thì, con trai cái gì đó có vẻ muốn nói khuôn mặt việc đang làm nhìn thấy, Làm sao vậy? đã lên tiếng."
  },
  {
    id: 32,
    context: "この公園は、いろいろな花が咲き始める ",
    suffix: " ",
    options: [
      { id: "A", text: "最も" },
      { id: "B", text: "季節が" },
      { id: "C", text: "美しい" },
      { id: "D", text: "この" }
    ],
    correctOrder: ["D", "B", "A", "C"],
    correctStar: "A",
    meaning: "Công viên này thì, nhiều loại hoa bắt đầu nở này mùa thì nhất đẹp"
  },
  {
    id: 33,
    context: "友達が病気で入院したと聞き、あわてて ",
    suffix: " 元気で安心した。",
    options: [
      { id: "A", text: "病院に着いて" },
      { id: "B", text: "思って" },
      { id: "C", text: "みると" },
      { id: "D", text: "いたよりも" }
    ],
    correctOrder: ["A", "C", "B", "D"],
    correctStar: "B",
    meaning: "Nghe nói bạn bè vì bệnh đã nhập viện, vội vàng đến bệnh viện thử nhìn thì nghĩ so với đã khỏe mạnh nên đã an tâm."
  },
  {
    id: 34,
    context: "庭に植えたスイカは、これまでなかなか ",
    suffix: " 今年になっておいしいのができた。",
    options: [
      { id: "A", text: "あきらめないで" },
      { id: "B", text: "ようやく" },
      { id: "C", text: "うまく育たなかったが" },
      { id: "D", text: "毎年チャレンジしていたら" }
    ],
    correctOrder: ["C", "A", "D", "B"],
    correctStar: "D",
    meaning: "Dưa hấu đã trồng ở vườn thì, cho đến nay mãi mà đã không lớn tốt nhưng không từ bỏ mà nếu thử thách mỗi năm cuối cùng sang năm nay thì cái ngon đã được làm."
  },
  {
    id: 35,
    context: "子供のころに祖母が作ってくれたワンピースを ",
    suffix: " いる",
    options: [
      { id: "A", text: "着られなくなって" },
      { id: "B", text: "大切にもって" },
      { id: "C", text: "今でも" },
      { id: "D", text: "体が大きくなって" }
    ],
    correctOrder: ["D", "A", "C", "B"],
    correctStar: "C",
    meaning: "Chiếc váy liền bà đã làm cho lúc còn trẻ con cơ thể trở nên lớn và trở nên không thể mặc và ngay cả bây giờ giữ cẩn thận đang."
  },
  {
    id: 36,
    context: "娘が歌手になることには反対でしたが、娘も一生けんめい ",
    suffix: " と思っています。",
    options: [
      { id: "A", text: "がんばろうとして" },
      { id: "B", text: "応援して" },
      { id: "C", text: "やろうか" },
      { id: "D", text: "いるので" }
    ],
    correctOrder: ["A", "D", "B", "C"],
    correctStar: "B",
    meaning: "Vào việc con gái trở thành ca sĩ thì đã phản đối nhưng, con gái cũng chăm chỉ định cố gắng vì đang cổ vũ làm cho không đang nghĩ."
  },
  {
    id: 37,
    context: "ここにある家具は ",
    suffix: " 使うかもしれないと思うと、捨てられない。",
    options: [
      { id: "A", text: "けれども" },
      { id: "B", text: "いつかまた" },
      { id: "C", text: "使っていない" },
      { id: "D", text: "今はどれも" }
    ],
    correctOrder: ["D", "C", "A", "B"],
    correctStar: "A",
    meaning: "Đồ nội thất có ở đây thì bây giờ cái nào cũng đang không sử dụng nhưng mà lúc nào đó lại nếu nghĩ có lẽ sử dụng, không thể vứt."
  },
  {
    id: 38,
    context: "書いた ",
    suffix: " 手紙が引き出しにあった。",
    options: [
      { id: "A", text: "まま" },
      { id: "B", text: "忘れていた" },
      { id: "C", text: "出すのを" },
      { id: "D", text: "友人への" }
    ],
    correctOrder: ["A", "C", "B", "D"],
    correctStar: "B",
    meaning: "Đã viết để nguyên việc gửi đã quên đến người bạn bức thư đã có ở ngăn kéo."
  },
  {
    id: 39,
    context: "A「空が暗いですね。」\nB「そうですね。雨が ",
    suffix: " ですね。」",
    options: [
      { id: "A", text: "ない" },
      { id: "B", text: "いつ" },
      { id: "C", text: "おかしく" },
      { id: "D", text: "降っても" }
    ],
    correctOrder: ["B", "D", "C", "A"],
    correctStar: "C",
    meaning: "A: Trời tối nhỉ.\nB: Đúng vậy nhỉ. Mưa lúc nào dù rơi kỳ lạ không nhỉ."
  },
  {
    id: 40,
    context: "(電話で)\nA「もしもし、ちょっと話したいことがあるんだけど、今、時間ある?」\nB「ごめん。ちょうど出かける ",
    suffix: " 私から電話するね。」",
    options: [
      { id: "A", text: "ゆっくり" },
      { id: "B", text: "あとで" },
      { id: "C", text: "ところで" },
      { id: "D", text: "時間がないから" }
    ],
    correctOrder: ["C", "A", "D", "B"],
    correctStar: "D",
    meaning: "(Qua điện thoại)\nA: Alo, có chuyện muốn nói một chút nhưng mà, bây giờ, có thời gian không?\nB: Xin lỗi. Vừa đúng chuẩn bị đi ra ngoài đúng lúc thong thả vì không có thời gian lát nữa từ tôi sẽ gọi điện thoại nhé."
  },
  {
    id: 41,
    context: "僕の家族は、両親と弟三人の六人家族です。 ",
    suffix: " 家族だけです。",
    options: [
      { id: "A", text: "は" },
      { id: "B", text: "女" },
      { id: "C", text: "母" },
      { id: "D", text: "で" }
    ],
    correctOrder: ["B", "A", "C", "D"],
    correctStar: "C",
    meaning: "Gia đình của tôi thì, là gia đình 6 người của bố mẹ và 3 em trai. Nữ thì mẹ bằng (là) chỉ gia đình."
  },
  {
    id: 42,
    context: "必ず ",
    suffix: " すっかり忘れていた。",
    options: [
      { id: "A", text: "ことを" },
      { id: "B", text: "会議の資料" },
      { id: "C", text: "今日中に" },
      { id: "D", text: "作らなくてはいけない" }
    ],
    correctOrder: ["C", "D", "B", "A"],
    correctStar: "B",
    meaning: "Chắc chắn trong hôm nay không làm thì không được (phải làm) tài liệu của cuộc họp việc đã hoàn toàn quên mất."
  },
  {
    id: 43,
    context: "先生「調べた結果を説明するとき、 ",
    suffix: " なります。」",
    options: [
      { id: "A", text: "わかりやすく" },
      { id: "B", text: "示しながら" },
      { id: "C", text: "表やグラフ" },
      { id: "D", text: "説明すると" }
    ],
    correctOrder: ["C", "B", "D", "A"],
    correctStar: "D",
    meaning: "Thầy giáo: Khi giải thích kết quả đã điều tra, bảng và biểu đồ vừa cho xem hễ giải thích dễ hiểu sẽ trở nên."
  },
  {
    id: 44,
    context: "昨日の夜、高校時代に、 ",
    suffix: " たっていて、驚いた。",
    options: [
      { id: "A", text: "いつのまにか3時間も" },
      { id: "B", text: "クラスだった" },
      { id: "C", text: "友人と電話で話して" },
      { id: "D", text: "ずっと同じ" }
    ],
    correctOrder: ["D", "B", "C", "A"],
    correctStar: "C",
    meaning: "Đêm hôm qua, vào thời cấp 3, suốt cùng đã là lớp bằng điện thoại nói chuyện với người bạn lúc nào không hay cả 3 tiếng đã trôi qua và, đã ngạc nhiên."
  },
  {
    id: 45,
    context: "私が今住んでいるアパートは線路の近くにある。住み始めたころは、電車の通る ",
    suffix: " が、すぐ気にならなくなった。",
    options: [
      { id: "A", text: "うるさいと" },
      { id: "B", text: "こともあった" },
      { id: "C", text: "音がして" },
      { id: "D", text: "思う" }
    ],
    correctOrder: ["C", "A", "D", "B"],
    correctStar: "D",
    meaning: "Căn hộ tôi đang sống bây giờ ở gần đường ray. Lúc mới bắt đầu sống thì, tàu điện đi qua làm âm thanh và nói là ồn ào nghĩ cũng đã có việc nhưng, đã nhanh chóng trở nên không bận tâm."
  },
  {
    id: 46,
    context: "実家にある冷蔵庫は30年も ",
    suffix: " 親は「まだ買い替えない」と言っている。",
    options: [
      { id: "A", text: "いつ壊れてもおかしくない" },
      { id: "B", text: "古いもので" },
      { id: "C", text: "のに" },
      { id: "D", text: "使っている" }
    ],
    correctOrder: ["D", "B", "A", "C"],
    correctStar: "A",
    meaning: "Tủ lạnh có ở nhà bố mẹ đẻ thì 30 năm đang sử dụng là đồ cũ dù lúc nào hỏng cũng không lạ thế mà bố mẹ thì Vẫn chưa mua đổi đang nói."
  },
  {
    id: 47,
    context: "",
    suffix: " 遅れているそうだ。",
    options: [
      { id: "A", text: "駅ビルの建設工事が" },
      { id: "B", text: "予定だった" },
      { id: "C", text: "半年で" },
      { id: "D", text: "終わる" }
    ],
    correctOrder: ["C", "D", "B", "A"],
    correctStar: "B",
    meaning: "bằng nửa năm kết thúc đã là dự định công trình xây dựng tòa nhà nhà ga đang trễ nghe nói."
  },
  {
    id: 48,
    context: "プレゼントをするときは、贈る相手の ",
    suffix: " 時間も楽しい。",
    options: [
      { id: "A", text: "選ぶ" },
      { id: "B", text: "ことを" },
      { id: "C", text: "どれにするか" },
      { id: "D", text: "考えながら" }
    ],
    correctOrder: ["B", "D", "C", "A"],
    correctStar: "C",
    meaning: "Khi làm quà tặng thì, của đối phương tặng việc vừa nghĩ chọn cái nào chọn thời gian cũng vui vẻ."
  },
  {
    id: 49,
    context: "このパソコン教室にはさまざまなコースがあります。基礎コースは、パソコンの ",
    suffix: " ぴったりです。",
    options: [
      { id: "A", text: "コースなので" },
      { id: "B", text: "初めて習う方" },
      { id: "C", text: "慣れるための" },
      { id: "D", text: "基本的な使い方に" }
    ],
    correctOrder: ["D", "C", "A", "B"],
    correctStar: "A",
    meaning: "Ở lớp học máy tính này thì có nhiều khóa học khác nhau. Khóa học cơ bản thì, của máy tính vào cách sử dụng cơ bản để quen vì là khóa học vị học lần đầu là vừa vặn."
  },
  {
    id: 50,
    context: "エアコンから ",
    suffix: " かというと、冷たい空気は暖かい空気より重いからだ。",
    options: [
      { id: "A", text: "冷たい空気が" },
      { id: "B", text: "出た" },
      { id: "C", text: "どうして" },
      { id: "D", text: "部屋の下の方に行くのは" }
    ],
    correctOrder: ["B", "A", "D", "C"],
    correctStar: "D",
    meaning: "Từ máy điều hòa đã ra không khí lạnh việc đi về phía dưới của căn phòng tại sao nếu nói là thì, không khí lạnh vì nặng hơn không khí ấm."
  },
  {
    id: 51,
    context: "今日は、久しぶりに家族 ",
    suffix: " 過ごした。",
    options: [
      { id: "A", text: "で" },
      { id: "B", text: "を" },
      { id: "C", text: "5人" },
      { id: "D", text: "楽しい休日" }
    ],
    correctOrder: ["C", "A", "D", "B"],
    correctStar: "D",
    meaning: "Hôm nay thì, sau một thời gian dài gia đình 5 người bằng (ở) ngày nghỉ vui vẻ (trợ từ) đã trải qua."
  },
  {
    id: 52,
    context: "駅前の店のラーメンは、濃い ",
    suffix: " 私はちょっと苦手だ。",
    options: [
      { id: "A", text: "味が" },
      { id: "B", text: "いい" },
      { id: "C", text: "好きな人には" },
      { id: "D", text: "かもしれないが" }
    ],
    correctOrder: ["A", "C", "B", "D"],
    correctStar: "B",
    meaning: "Ramen của quán trước nhà ga thì, đậm vị với người thích tốt/ngon có lẽ nhưng mà tôi thì hơi kém."
  },
  {
    id: 53,
    context: "久しぶりにふるさとに帰ったが、昔は何もなかった ",
    suffix: " 見て驚いた。",
    options: [
      { id: "A", text: "のを" },
      { id: "B", text: "すっかり" },
      { id: "C", text: "駅の周りが" },
      { id: "D", text: "変わっている" }
    ],
    correctOrder: ["C", "B", "D", "A"],
    correctStar: "D",
    meaning: "Sau một thời gian dài đã về quê nhưng, ngày xưa đã không có gì xung quanh ga hoàn toàn đang thay đổi việc nhìn và đã ngạc nhiên."
  },
  {
    id: 54,
    context: "これまでの人生の中で ",
    suffix: " 日はない。",
    options: [
      { id: "A", text: "日ほど" },
      { id: "B", text: "自分の子供が" },
      { id: "C", text: "嬉しい" },
      { id: "D", text: "生まれた" }
    ],
    correctOrder: ["B", "D", "A", "C"],
    correctStar: "A",
    meaning: "Ở trong cuộc đời cho đến nay con của mình đã được sinh ra đến mức bằng ngày vui ngày thì không có."
  },
  {
    id: 55,
    context: "",
    suffix: " ",
    options: [
      { id: "A", text: "彼の曲と" },
      { id: "B", text: "発表されてきた" },
      { id: "C", text: "今まで" },
      { id: "D", text: "一緒に" }
    ],
    correctOrder: ["C", "D", "B", "A"],
    correctStar: "B",
    meaning: "Cho đến bây giờ cùng nhau đã được công bố với bài hát của anh ấy"
  },
  {
    id: 56,
    context: "この写真の鳥はとても珍しくて、この鳥の ",
    suffix: " ",
    options: [
      { id: "A", text: "見る機会がない" },
      { id: "B", text: "専門家でも" },
      { id: "C", text: "実物を" },
      { id: "D", text: "研究をしている" }
    ],
    correctOrder: ["D", "B", "C", "A"],
    correctStar: "C",
    meaning: "Chim của bức ảnh này rất hiếm và, của chim này đang làm nghiên cứu ngay cả chuyên gia đồ thật cơ hội nhìn không có"
  },
  {
    id: 60,
    context: "歴史を ",
    suffix: " 進学を決めた。",
    options: [
      { id: "A", text: "勉強すればするほど" },
      { id: "B", text: "歴史学科への" },
      { id: "C", text: "と思うようになって" },
      { id: "D", text: "もっと学びたい" }
    ],
    correctOrder: ["A", "D", "C", "B"],
    correctStar: "C",
    meaning: "Lịch sử càng học càng muốn học hơn nữa trở nên nghĩ đến khoa lịch sử việc học lên cao đã quyết định."
  },
  {
    id: 61,
    context: "レストランAは ",
    suffix: " なかなか予約がとれない人気店になった。",
    options: [
      { id: "A", text: "雑誌か" },
      { id: "B", text: "で" },
      { id: "C", text: "何か" },
      { id: "D", text: "紹介されてから" }
    ],
    correctOrder: ["A", "C", "B", "D"],
    correctStar: "B",
    meaning: "Nhà hàng A thì tạp chí hay cái gì đó bằng/ở sau khi được giới thiệu đã trở thành quán nổi tiếng mãi mà không thể lấy đặt trước."
  },
  {
    id: 62,
    context: "(海岸で)\nA「わあ、夕日がきれいです。」\nB「本当にすばらしいですね。 ",
    suffix: " ありません」",
    options: [
      { id: "A", text: "夕日は" },
      { id: "B", text: "見たことが" },
      { id: "C", text: "きれいな" },
      { id: "D", text: "こんなに" }
    ],
    correctOrder: ["D", "C", "A", "B"],
    correctStar: "A",
    meaning: "(Ở bờ biển)\nA: Oa, hoàng hôn đẹp nhỉ.\nB: Thực sự tuyệt vời nhỉ. Như thế này đẹp hoàng hôn thì việc đã nhìn không có"
  },
  {
    id: 63,
    context: "昨日、テレビでテニスの試合を見た ",
    suffix: " 最後まで本当にどきどきした。",
    options: [
      { id: "A", text: "試合で" },
      { id: "B", text: "どちらが" },
      { id: "C", text: "おかしくない" },
      { id: "D", text: "勝っても" }
    ],
    correctOrder: ["B", "D", "C", "A"],
    correctStar: "C",
    meaning: "Hôm qua, đã xem trận đấu tennis bằng tivi bên nào dù thắng không lạ bằng/ở trận đấu đến cuối cùng thực sự đã hồi hộp."
  },
  {
    id: 64,
    context: "子供には、親の ",
    suffix: " 習わせたほうがいいと思う。",
    options: [
      { id: "A", text: "習わせるのではなくて" },
      { id: "B", text: "子供の" },
      { id: "C", text: "興味があるものを" },
      { id: "D", text: "習わせたいものを" }
    ],
    correctOrder: ["D", "A", "B", "C"],
    correctStar: "B",
    meaning: "Với trẻ con thì, của bố mẹ cái muốn bắt học không phải là bắt học mà của trẻ con cái có hứng thú bắt học thì tốt tôi nghĩ."
  },
  {
    id: 65,
    context: "来月、大学のスピーチ大会に出る。全部覚える ",
    suffix: " つもりだ。",
    options: [
      { id: "A", text: "ようにする" },
      { id: "B", text: "たくさん練習して" },
      { id: "C", text: "まで" },
      { id: "D", text: "メモを見ないで話せる" }
    ],
    correctOrder: ["C", "B", "D", "A"],
    correctStar: "D",
    meaning: "Tháng sau, tham gia đại hội diễn thuyết của đại học. Nhớ toàn bộ đến khi luyện tập nhiều và có thể nói không nhìn ghi chú làm sao cho dự định."
  },
  {
    id: 66,
    context: "課長「山田さん、資料の整理をやってもらえますか。来週の金曜、 ",
    suffix: " できるときにお願いします。」",
    options: [
      { id: "A", text: "ですから" },
      { id: "B", text: "で" },
      { id: "C", text: "いい" },
      { id: "D", text: "まで" }
    ],
    correctOrder: ["D", "B", "C", "A"],
    correctStar: "C",
    meaning: "Trưởng phòng: Anh Yamada, có thể làm sắp xếp tài liệu cho tôi không. Thứ 6 tuần sau, đến bằng (ở) được vì là lúc có thể xin nhờ."
  },
  {
    id: 67,
    context: "私は、もし自分が ",
    suffix: " 看護師の仕事をしています。",
    options: [
      { id: "A", text: "考えながら" },
      { id: "B", text: "ということを" },
      { id: "C", text: "患者だったら" },
      { id: "D", text: "どうしてほしいか" }
    ],
    correctOrder: ["C", "D", "B", "A"],
    correctStar: "B",
    meaning: "Tôi thì, nếu bản thân mình nếu là bệnh nhân muốn làm như thế nào cho việc gọi là vừa suy nghĩ công việc của y tá đang làm."
  },
  {
    id: 68,
    context: "私はエアコンの風が好きではないので、夏の夜、暑くて ",
    suffix: " 自分の部屋ではエアコンを使いません。",
    options: [
      { id: "A", text: "どうしても" },
      { id: "B", text: "とき" },
      { id: "C", text: "寝られない" },
      { id: "D", text: "以外は" }
    ],
    correctOrder: ["A", "C", "B", "D"],
    correctStar: "B",
    meaning: "Tôi thì gió của điều hòa vì không thích nên, đêm mùa hè, nóng và dù thế nào cũng không thể ngủ lúc ngoài (ra) thì ở phòng của mình thì điều hòa không sử dụng."
  },
  {
    id: 69,
    context: "最近、田中さんは元気がない。心配だが、何が ",
    suffix: " してあげられない。",
    options: [
      { id: "A", text: "聞いても" },
      { id: "B", text: "あったのか" },
      { id: "C", text: "何も" },
      { id: "D", text: "答えてくれないので" }
    ],
    correctOrder: ["B", "A", "D", "C"],
    correctStar: "D",
    meaning: "Gần đây, anh Tanaka không có sức khỏe. Lo lắng nhưng, cái gì đã có dù hỏi vì không trả lời cho cái gì cũng không thể làm cho."
  },
  {
    id: 70,
    context: "この辺りは自然が多く、いつかこういうところに住んでみたいと思うが、近くに買い物できる場所がないので、 ",
    suffix: " のは大変そうだ。",
    options: [
      { id: "A", text: "私には" },
      { id: "B", text: "できない" },
      { id: "C", text: "生活する" },
      { id: "D", text: "車の運転が" }
    ],
    correctOrder: ["D", "B", "A", "C"],
    correctStar: "A",
    meaning: "Vùng này thì tự nhiên nhiều, lúc nào đó muốn thử sống ở nơi như thế này nghĩ nhưng, ở gần vì nơi có thể mua sắm không có nên, việc lái của xe ô tô không thể đối với tôi thì sinh hoạt việc thì có vẻ vất vả."
  },
  {
    id: 71,
    context: "私 ",
    suffix: " なのは、家族の幸せだ。",
    options: [
      { id: "A", text: "で" },
      { id: "B", text: "人生" },
      { id: "C", text: "にとって" },
      { id: "D", text: "いちばん大切" }
    ],
    correctOrder: ["C", "B", "A", "D"],
    correctStar: "A",
    meaning: "Tôi đối với nhân sinh (cuộc đời) bằng/ở quan trọng nhất cái là, hạnh phúc của gia đình."
  },
  {
    id: 72,
    context: "この映画は昔から大好きで今まで、 ",
    suffix: " 感動して泣いてしまう。",
    options: [
      { id: "A", text: "見ても" },
      { id: "B", text: "何度も" },
      { id: "C", text: "見たけれど" },
      { id: "D", text: "何度" }
    ],
    correctOrder: ["B", "C", "D", "A"],
    correctStar: "D",
    meaning: "Bộ phim này thì từ ngày xưa rất thích và cho đến bây giờ, nhiều lần đã xem nhưng mà bao nhiêu lần dù xem cảm động và khóc mất."
  },
  {
    id: 73,
    context: "新しい家は、駅に近くて便利なのだが、窓が ",
    suffix: " 聞こえてきて、うるさいと感じることがある。",
    options: [
      { id: "A", text: "ある" },
      { id: "B", text: "大通り側に" },
      { id: "C", text: "せいで" },
      { id: "D", text: "車の音が" }
    ],
    correctOrder: ["B", "A", "C", "D"],
    correctStar: "C",
    meaning: "Nhà mới thì, gần ga và tiện lợi nhưng mà, cửa sổ ở phía đường lớn có vì lỗi (bởi vì) âm thanh của xe ô tô nghe thấy và, việc cảm thấy ồn ào có."
  },
  {
    id: 74,
    context: "林さんの奥さんは料理がとても上手で、ハンバーグが特においしいらしい。林さん、 ",
    suffix: " は奥さんのものはないとよく言っている。",
    options: [
      { id: "A", text: "作る" },
      { id: "B", text: "ほど" },
      { id: "C", text: "ハンバーグ" },
      { id: "D", text: "おいしい" }
    ],
    correctOrder: ["A", "C", "B", "D"],
    correctStar: "B",
    meaning: "Vợ của anh Hayashi nấu ăn rất giỏi và, hamburger đặc biệt có vẻ ngon. Anh Hayashi, làm hamburger đến mức bằng ngon thì cái của vợ không có thường đang nói."
  },
  {
    id: 75,
    context: " ",
    suffix: " のことを思い出す。",
    options: [
      { id: "A", text: "食事をするたび" },
      { id: "B", text: "妻との初めてのデート" },
      { id: "C", text: "来たときに" },
      { id: "D", text: "このレストランで" }
    ],
    correctOrder: ["D", "A", "C", "B"],
    correctStar: "C",
    meaning: "Ở nhà hàng này mỗi khi làm bữa ăn vào lúc đã đến cuộc hẹn hò đầu tiên với vợ việc nhớ ra."
  },
  {
    id: 76,
    context: "なかなか英語の単語が覚えられないので、英語の得意な友達が ",
    suffix: " した。",
    options: [
      { id: "A", text: "ことに" },
      { id: "B", text: "やってた" },
      { id: "C", text: "ように" },
      { id: "D", text: "何度も書いてる" }
    ],
    correctOrder: ["B", "C", "D", "A"],
    correctStar: "D",
    meaning: "Mãi mà từ vựng của tiếng Anh không thể nhớ nên, bạn bè giỏi tiếng Anh đã đang làm giống như đang viết nhiều lần vào việc đã làm."
  },
  {
    id: 77,
    context: "半年前から ",
    suffix: " 終わってしまった。",
    options: [
      { id: "A", text: "とうとう" },
      { id: "B", text: "見ていた" },
      { id: "C", text: "毎週" },
      { id: "D", text: "大好きなドラマが" }
    ],
    correctOrder: ["C", "B", "D", "A"],
    correctStar: "D",
    meaning: "Từ nửa năm trước mỗi tuần đã đang xem bộ phim truyền hình rất thích cuối cùng đã kết thúc mất."
  },
  {
    id: 78,
    context: "第川橋は ",
    suffix: " 「めがね橋」とも呼ばれている。",
    options: [
      { id: "A", text: "している" },
      { id: "B", text: "形を" },
      { id: "C", text: "から" },
      { id: "D", text: "めがねのような" }
    ],
    correctOrder: ["D", "B", "A", "C"],
    correctStar: "A",
    meaning: "Cầu Daigawa thì giống như kính mắt hình dáng đang làm vì cũng đang bị gọi là 「Cầu kính mắt」."
  },
  {
    id: 79,
    context: "田中「木村さん、仕事はどうですか。」\n木村「会社に入ってまだ少ししか ",
    suffix: " ですが、毎日楽しいです。」",
    options: [
      { id: "A", text: "ので" },
      { id: "B", text: "たっていない" },
      { id: "C", text: "ばかり" },
      { id: "D", text: "わからないこと" }
    ],
    correctOrder: ["B", "A", "D", "C"],
    correctStar: "D",
    meaning: "Tanaka: Anh Kimura, công việc thì như thế nào.\nKimura: Vào công ty vẫn chỉ một chút đang không trôi qua vì nên việc không hiểu toàn là nhưng mà, mỗi ngày vui vẻ."
  },
  {
    id: 80,
    context: "(会社で)\n西川「林さん、来週のセミナーのポスター、知りませんか。さっき ",
    suffix: " 入ってたんですけど、気づいたら箱がなくなって」",
    options: [
      { id: "A", text: "まで" },
      { id: "B", text: "あった" },
      { id: "C", text: "あそこに" },
      { id: "D", text: "白いボール箱に" }
    ],
    correctOrder: ["A", "C", "B", "D"],
    correctStar: "B",
    meaning: "(Ở công ty)\nNishikawa: Anh Hayashi, poster của hội thảo tuần sau, không biết à. Lúc nãy cho đến ở đằng kia đã có vào hộp giấy trắng đã đang vào nhưng mà, khi nhận ra thì hộp trở nên không có"
  },
  {
    id: 81,
    context: "X高校とY高校のバスケットボールの試合は10時開始の予定だったが、大雨 ",
    suffix: " になる",
    options: [
      { id: "A", text: "のため" },
      { id: "B", text: "による" },
      { id: "C", text: "11時開始" },
      { id: "D", text: "電車の遅れ" }
    ],
    correctOrder: ["B", "D", "A", "C"],
    correctStar: "A",
    meaning: "Trận đấu bóng rổ của trường cấp 3 X và trường cấp 3 Y thì đã là dự định của bắt đầu 10 giờ nhưng, mưa lớn bởi sự trễ của tàu điện vì bắt đầu 11 giờ trở thành"
  },
  {
    id: 82,
    context: "昨日行ったサクラ動物園には、500種類以上の動物がいた。あんなに色々な ",
    suffix: " ないだろう",
    options: [
      { id: "A", text: "動物が" },
      { id: "B", text: "なかなか" },
      { id: "C", text: "動物園は" },
      { id: "D", text: "見られる" }
    ],
    correctOrder: ["A", "D", "C", "B"],
    correctStar: "C",
    meaning: "Ở sở thú Sakura đã đi hôm qua thì, động vật của trên 500 loại đã có. Nhiều như thế động vật có thể nhìn sở thú thì mãi mà có lẽ không có"
  },
  {
    id: 83,
    context: "母が姉 ",
    suffix: " 泣きそうな顔をしていた。",
    options: [
      { id: "A", text: "今にも" },
      { id: "B", text: "大学に合格したという" },
      { id: "C", text: "お知らせを聞いて" },
      { id: "D", text: "一番行きたがっていた" }
    ],
    correctOrder: ["D", "B", "C", "A"],
    correctStar: "C",
    meaning: "Mẹ thì chị gái đã muốn đi nhất gọi là đã đỗ vào đại học nghe thông báo ngay bây giờ cũng khuôn mặt có vẻ sắp khóc đã làm."
  },
  {
    id: 84,
    context: "20階建ての大きいマンションが ",
    suffix: " 昼でも部屋の中が暗い。",
    options: [
      { id: "A", text: "隣に" },
      { id: "B", text: "私の家に日が" },
      { id: "C", text: "建ったことで" },
      { id: "D", text: "当たらなくなって" }
    ],
    correctOrder: ["A", "C", "B", "D"],
    correctStar: "B",
    meaning: "Căn hộ chung cư lớn của xây 20 tầng ở bên cạnh bởi việc đã xây vào nhà của tôi mặt trời trở nên không chiếu trúng và dù trưa bên trong căn phòng tối."
  },
  {
    id: 85,
    context: "中田「山下さんって、パソコンにすごく詳しいよね」\n木村「うん、大学生の ",
    suffix: " よ。」",
    options: [
      { id: "A", text: "とき" },
      { id: "B", text: "アルバイトしていた" },
      { id: "C", text: "みたいだ" },
      { id: "D", text: "コンピューター会社で" }
    ],
    correctOrder: ["A", "D", "B", "C"],
    correctStar: "B",
    meaning: "Nakata: Anh Yamashita, với máy tính cực kỳ chi tiết (am hiểu) nhỉ\nKimura: Ừ, của sinh viên đại học lúc ở công ty máy tính đã đang làm thêm có vẻ đấy."
  },
  {
    id: 86,
    context: "昨日父に、来週友だちと旅行に行く ",
    suffix: " 頼んだが、断られてしまった。",
    options: [
      { id: "A", text: "と" },
      { id: "B", text: "車を" },
      { id: "C", text: "ので" },
      { id: "D", text: "使わせてほしい" }
    ],
    correctOrder: ["C", "B", "D", "A"],
    correctStar: "D",
    meaning: "Hôm qua với bố, tuần sau đi du lịch với bạn bè vì nên xe ô tô muốn cho phép sử dụng nói rằng đã nhờ nhưng, đã bị từ chối mất."
  },
  {
    id: 87,
    context: "桜大学は学生 ",
    suffix: " についてアンケート調査を行った。",
    options: [
      { id: "A", text: "に対する" },
      { id: "B", text: "の" },
      { id: "C", text: "考え方" },
      { id: "D", text: "働くこと" }
    ],
    correctOrder: ["B", "D", "A", "C"],
    correctStar: "A",
    meaning: "Đại học Sakura thì học sinh của việc làm việc đối với cách suy nghĩ về điều tra bảng hỏi đã tổ chức."
  },
  {
    id: 88,
    context: "食事の ",
    suffix: " 汚してしまった。",
    options: [
      { id: "A", text: "ときに" },
      { id: "B", text: "ばかりの" },
      { id: "C", text: "白いTシャツを" },
      { id: "D", text: "買った" }
    ],
    correctOrder: ["A", "D", "B", "C"],
    correctStar: "B",
    meaning: "Của bữa ăn vào lúc đã mua vừa mới áo phông trắng đã làm bẩn mất."
  },
  {
    id: 89,
    context: "昨日初めて花川駅に行った。花川駅まで ",
    suffix: " 電車に乗る前に駅員に聞いた。",
    options: [
      { id: "A", text: "わからなくて" },
      { id: "B", text: "どの電車で" },
      { id: "C", text: "一番早く着くのか" },
      { id: "D", text: "行けば" }
    ],
    correctOrder: ["B", "D", "C", "A"],
    correctStar: "C",
    meaning: "Hôm qua lần đầu tiên đã đi đến ga Hanakawa. Đến ga Hanakawa bằng tàu điện nào nếu đi việc đến sớm nhất không vì không hiểu trước khi lên tàu điện với nhân viên nhà ga đã hỏi."
  },
  {
    id: 90,
    context: "A 「ねえ、昨日のパーティーに行く?会場のレストランが駅から遠くてちょっと不便だから行こうか迷っているんだけど」\nB「私、車で ",
    suffix: " 。」",
    options: [
      { id: "A", text: "もし" },
      { id: "B", text: "乗せていってあげる" },
      { id: "C", text: "行くんだったら" },
      { id: "D", text: "行くつもりだから" }
    ],
    correctOrder: ["D", "A", "C", "B"],
    correctStar: "C",
    meaning: "A: Này, đi đến bữa tiệc hôm qua không? Nhà hàng của hội trường vì từ ga xa và hơi bất tiện nên có đi hay không đang phân vân nhưng mà\nB: Tôi, bằng xe ô tô vì dự định đi nếu nếu đi tôi sẽ chở đi cho ."
  }
];