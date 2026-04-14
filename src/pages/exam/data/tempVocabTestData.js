export const tempVocabTests = [
  {
    id: 1,
    title: "Bài Test 1",
    data: [
      {
        id: 1, type: "fill",
        question: "わたしの父親と彼女のお父さんが兄弟なので、わたしたちは( )です。",
        options: [
          { text: "おい", meaning: "Cháu trai" },
          { text: "めい", meaning: "Cháu gái" },
          { text: "しまい", meaning: "Chị em gái" },
          { text: "いとこ", meaning: "Anh em họ" }
        ],
        answer: 3,
        explanation: "Bố tôi và bố cô ấy là anh em, nên chúng tôi là anh em họ (いとこ)."
      },
      {
        id: 2, type: "fill",
        question: "山川さんとは学生時代からずっと( )している。",
        options: [
          { text: "やさしく", meaning: "Hiền lành, tốt bụng" },
          { text: "したしく", meaning: "Thân thiết" },
          { text: "さびしく", meaning: "Buồn bã, cô đơn" },
          { text: "かなしく", meaning: "Đau buồn" }
        ],
        answer: 1,
        explanation: "Cụm từ 親しくする (giao du thân thiết). Tôi và anh Yamakawa đã chơi thân với nhau từ thời học sinh."
      },
      {
        id: 3, type: "fill",
        question: "今になって「悪かった」と( )ても、もう遅い。",
        options: [
          { text: "おこられ", meaning: "Bị tức giận" },
          { text: "しかられ", meaning: "Bị mắng" },
          { text: "あやまられ", meaning: "Được/Bị xin lỗi" },
          { text: "ささえられ", meaning: "Được hỗ trợ, giúp đỡ" }
        ],
        answer: 2,
        explanation: "Động từ 謝る (あやまる - Xin lỗi) chia thể bị động thành 謝られる. Câu mang ý nghĩa: Đến bây giờ dù có được xin lỗi là \"tôi đã sai rồi\" thì cũng đã muộn."
      },
      {
        id: 4, type: "fill",
        question: "あいさつしたのに、彼に( )された。",
        options: [
          { text: "無視", meaning: "むし - Phớt lờ, lờ đi" },
          { text: "秘密", meaning: "ひみつ - Bí mật" },
          { text: "遠慮", meaning: "えんりょ - Ngại ngùng, khách sáo" },
          { text: "営業", meaning: "えいぎょう - Kinh doanh" }
        ],
        answer: 0,
        explanation: "Tôi đã chào rồi mà lại bị anh ta phớt lờ (無視する)."
      },
      {
        id: 5, type: "fill",
        question: "先月会社をやめたので、今は( )です。",
        options: [
          { text: "本業", meaning: "ほんぎょう - Nghề chính" },
          { text: "就職", meaning: "しゅうしょく - Tìm việc" },
          { text: "無職", meaning: "むしょく - Không có việc làm" },
          { text: "名文", meaning: "めいぶん - Câu văn hay" }
        ],
        answer: 2,
        explanation: "Tháng trước tôi đã nghỉ việc nên bây giờ tôi đang thất nghiệp (無職)."
      },
      {
        id: 6, type: "fill",
        question: "わたしの( )はめずらしいので、すぐ覚えてもらえる。",
        options: [
          { text: "名札", meaning: "なふだ - Bảng tên" },
          { text: "名字", meaning: "みょうじ - Họ" },
          { text: "名分", meaning: "めいぶん - Danh phận" },
          { text: "名文", meaning: "めいぶん - Câu văn hay" }
        ],
        answer: 1,
        explanation: "Vì họ (名字) của tôi hiếm nên mọi người có thể nhớ ngay lập tức."
      },
      {
        id: 7, type: "fill",
        question: "先生の誕生日に、クラスのみんなで花を( )。",
        options: [
          { text: "いただいた", meaning: "Nhận - Khiêm nhường ngữ" },
          { text: "さしあげた", meaning: "Tặng/Cho - Khiêm nhường ngữ" },
          { text: "くださった", meaning: "Tặng/Cho - Tôn kính ngữ" },
          { text: "やった", meaning: "Tặng/Cho - Dùng cho người dưới/động vật" }
        ],
        answer: 1,
        explanation: "Hành động tặng hoa cho thầy giáo (người bề trên) phải dùng khiêm nhường ngữ của あげる là さしあげる."
      },
      {
        id: 8, type: "fill",
        question: "兄は大好きだった彼女に( )、元気がない。",
        options: [
          { text: "ふって", meaning: "Đá/Bỏ" },
          { text: "ふらされて", meaning: "Bị bắt đá" },
          { text: "ふられて", meaning: "Bị đá/Bị từ chối" },
          { text: "ふらせられて", meaning: "Bị bắt đá - dạng bị động sai khiến" }
        ],
        answer: 2,
        explanation: "Động từ 振る (ふる - Đá, từ chối tình cảm). Anh trai bị cô bạn gái rất yêu thích đá (chia bị động thành ふられる) nên đang không có tinh thần."
      },
      {
        id: 9, type: "fill",
        question: "さっきスーパーで、田中さんに( )会った。",
        options: [
          { text: "たまに", meaning: "Thi thoảng" },
          { text: "しばらく", meaning: "Một lúc/Đã lâu rồi" },
          { text: "めったに", meaning: "Hiếm khi - thường đi với phủ định" },
          { text: "たまたま", meaning: "Tình cờ" }
        ],
        answer: 3,
        explanation: "Vừa nãy ở siêu thị, tôi tình cờ (たまたま) gặp anh Tanaka."
      },
      {
        id: 10, type: "fill",
        question: "父は家の( )をとても大切にしている。",
        options: [
          { text: "先祖", meaning: "せんぞ - Tổ tiên" },
          { text: "先輩", meaning: "せんぱい - Tiền bối, đàn anh/chị" },
          { text: "上司", meaning: "じょうし - Cấp trên" },
          { text: "先人", meaning: "せんじん - Người đi trước" }
        ],
        answer: 0,
        explanation: "Bố tôi rất coi trọng tổ tiên (先祖) của gia đình."
      },
      {
        id: 11, type: "synonym",
        question: "彼はわたしの*幼なじみ*です。",
        options: [
          { text: "若い友だち", meaning: "Bạn trẻ" },
          { text: "子どもの友だち", meaning: "Bạn của con" },
          { text: "子どものころの友だち", meaning: "Bạn thời thơ ấu" },
          { text: "最近友だちになった人", meaning: "Người mới kết bạn gần đây" }
        ],
        answer: 2,
        explanation: "幼なじみ (おさななじみ) mang nghĩa là bạn thanh mai trúc mã, bạn từ thuở nhỏ = 子どものころの友だち."
      },
      {
        id: 12, type: "synonym",
        question: "みんな田中先生を*そんけい*しています。",
        options: [
          { text: "遠くから見て", meaning: "Nhìn từ xa" },
          { text: "すごいと思って", meaning: "Nghĩ là tuyệt vời" },
          { text: "上から見て", meaning: "Nhìn từ trên xuống" },
          { text: "きびしいと思って", meaning: "Nghĩ là nghiêm khắc" }
        ],
        answer: 1,
        explanation: "尊敬する (そんけいする) nghĩa là kính trọng, ngưỡng mộ = すごいと思う (Nghĩ là tuyệt vời/đáng nể)."
      },
      {
        id: 13, type: "synonym",
        question: "ここはようじの*ピアノ教室*だ。",
        options: [
          { text: "小学校に入る前の子ども", meaning: "Trẻ chưa vào tiểu học" },
          { text: "小学生6年までの子ども", meaning: "Trẻ em đến lớp 6" },
          { text: "小学生3年生までの子ども", meaning: "Trẻ em đến lớp 3" },
          { text: "小学校を卒業した子ども", meaning: "Trẻ đã tốt nghiệp tiểu học" }
        ],
        answer: 0,
        explanation: "幼児 (ようじ) là trẻ ấu nhi, trẻ mẫu giáo = 小学校に入る前の子ども (Trẻ trước tuổi đi học)."
      },
      {
        id: 14, type: "synonym",
        question: "これからも、わたしはあなたの*味方*です。",
        options: [
          { text: "おうえんする人", meaning: "Người cổ vũ/ủng hộ" },
          { text: "世話をする人", meaning: "Người chăm sóc" },
          { text: "料理の先生", meaning: "Giáo viên nấu ăn" },
          { text: "仕事の相手", meaning: "Đối tác công việc" }
        ],
        answer: 0,
        explanation: "味方 (みかた) nghĩa là đồng minh, người đứng về phía mình = おうえんする人 (Người ủng hộ)."
      },
      {
        id: 15, type: "synonym",
        question: "彼は学生時代からもてていた*らしい*。",
        options: [
          { text: "力があった", meaning: "Có sức mạnh" },
          { text: "勉強ができた", meaning: "Học giỏi" },
          { text: "人気があった", meaning: "Được yêu thích" },
          { text: "お金持ちだった", meaning: "Giàu có" }
        ],
        answer: 2,
        explanation: "もてる có nghĩa là đào hoa, thu hút người khác giới = 人気があった (Được yêu thích/hâm mộ)."
      },
      {
        id: 16, type: "usage", word: "本人", meaning: "Đương sự, người đó",
        question: "Từ 本人 được sử dụng đúng trong câu nào?",
        options: [
          { text: "この写真は動物のようだが本人だ。" },
          { text: "このクレジットカードは本人しか使えない。" },
          { text: "わたしは小学生のころから本人で、よく読んでいた。" },
          { text: "これから先生と本人たちの会議が始まる。" }
        ],
        answer: 1,
        explanation: "Thẻ tín dụng này chỉ có chính chủ (本人) mới được sử dụng. Câu 1 nhầm với 人間, câu 3 nhầm với 本, câu 4 dùng sai ngữ cảnh."
      },
      {
        id: 17, type: "usage", word: "ないしょ", meaning: "Bí mật",
        question: "Từ ないしょ được sử dụng đúng trong câu nào?",
        options: [
          { text: "わたしには大切なないしょがいます。" },
          { text: "この家のないしょは、とてもきれいですね。" },
          { text: "テストのときは、みんなないしょにしましょう。" },
          { text: "この話は親にも友だちにもないしょです。" }
        ],
        answer: 3,
        explanation: "Chuyện này là bí mật với cả bố mẹ và bạn bè. (Các câu khác dùng sai hoàn toàn về nghĩa)."
      },
      {
        id: 18, type: "usage", word: "あまやかす", meaning: "Nuông chiều",
        question: "Từ あまやかす được sử dụng đúng trong câu nào?",
        options: [
          { text: "両親は妹をあまやかしたので、とてもいい子に育った。" },
          { text: "学生たちはみんなで先生をあまやかしている。" },
          { text: "子どもはあまやかさないで、きちんと教育するべきだ。" },
          { text: "おばあさんに道を聞かれたので、あまやかしてあげた。" }
        ],
        answer: 2,
        explanation: "Trẻ con thì không nên nuông chiều mà phải giáo dục đàng hoàng. (Câu 1 nuông chiều thì khó thành trẻ ngoan, câu 2 và 4 sai đối tượng)."
      },
      {
        id: 19, type: "usage", word: "しょっちゅう", meaning: "Thường xuyên, luôn luôn",
        question: "Từ しょっちゅう được sử dụng đúng trong câu nào?",
        options: [
          { text: "きのうはしょっちゅうお酒を飲んでしまった。" },
          { text: "急いでいるので、しょっちゅう支度してください。" },
          { text: "彼とはしょっちゅうけんかしている。" },
          { text: "彼女とわたしはしょっちゅうの仲良しだ。" }
        ],
        answer: 2,
        explanation: "Tôi và anh ấy thường xuyên cãi nhau. Phó từ này bổ nghĩa cho tần suất hành động lặp đi lặp lại."
      },
      {
        id: 20, type: "usage", word: "親類", meaning: "Họ hàng",
        question: "Từ 親類 được sử dụng đúng trong câu nào?",
        options: [
          { text: "うちは親類が多くて、よくみんなで集まる。" },
          { text: "大学時代の親類とは今でも仲がいい。" },
          { text: "わたしの親類は両親と兄と妹の4人だ。" },
          { text: "クラスのみんなと親類になれてよかった。" }
        ],
        answer: 0,
        explanation: "Nhà tôi có đông họ hàng nên mọi người thường hay tụ tập. (Câu 2 là bạn bè/親友, câu 3 là gia đình/家族, câu 4 là thân thiết/親しく)."
      }
    ]
  },
  {
    id: 2,
    title: "Bài Test 2",
    data: [
      {
        id: 1, type: "fill",
        question: "( )田中さんと二人でビールを飲みに行きました。",
        options: [
          { text: "いこう", meaning: "Từ nay trở đi" },
          { text: "あさって", meaning: "Ngày kia" },
          { text: "あす", meaning: "Ngày mai" },
          { text: "せんじつ", meaning: "Hôm trước" }
        ],
        answer: 3,
        explanation: "Hôm trước (せんじつ) tôi cùng với anh Tanaka bằng hai người đã đi uống bia rồi."
      },
      {
        id: 2, type: "fill",
        question: "今日の晩ご飯の( )は、チーズハンバーグです。",
        options: [
          { text: "おやつ", meaning: "Đồ ăn vặt" },
          { text: "おかず", meaning: "Đồ ăn kèm/Thức ăn" },
          { text: "おたま", meaning: "Cái muôi" },
          { text: "おなべ", meaning: "Cái nồi" }
        ],
        answer: 1,
        explanation: "Đồ ăn kèm (おかず) của bữa cơm tối của hôm nay là hamburger phô mai."
      },
      {
        id: 3, type: "fill",
        question: "この皿に( )をして、2分温めてください。",
        options: [
          { text: "アルミ", meaning: "Nhôm/Giấy bạc" },
          { text: "カップ", meaning: "Cái cốc" },
          { text: "ラップ", meaning: "Màng bọc thực phẩm" },
          { text: "フライ", meaning: "Món chiên" }
        ],
        answer: 2,
        explanation: "Làm màng bọc (ラップ) vào cái đĩa này rồi, hãy làm ấm 2 phút."
      },
      {
        id: 4, type: "fill",
        question: "魚が( )ないように注意してください。",
        options: [
          { text: "ひやさ", meaning: "Làm lạnh" },
          { text: "にぎら", meaning: "Nắm" },
          { text: "わかさ", meaning: "Đun sôi" },
          { text: "こげ", meaning: "Cháy/Khét" }
        ],
        answer: 3,
        explanation: "Hãy chú ý để cá không cháy (こげない)."
      },
      {
        id: 5, type: "fill",
        question: "今は部屋が( )いるので、だれにも見せられない。",
        options: [
          { text: "ちらかって", meaning: "Bừa bộn/Rải rác" },
          { text: "片づけて", meaning: "Dọn dẹp" },
          { text: "はいて", meaning: "Quét" },
          { text: "たたんで", meaning: "Gấp" }
        ],
        answer: 0,
        explanation: "Bây giờ vì căn phòng đang bừa bộn (ちらかって), nên không thể cho ai xem được."
      },
      {
        id: 6, type: "fill",
        question: "大掃除をするので、ぞうきんと( )を持ってきてください。",
        options: [
          { text: "アイロン", meaning: "Bàn là" },
          { text: "バケツ", meaning: "Cái xô" },
          { text: "ガラス", meaning: "Kính" },
          { text: "ランチ", meaning: "Bữa trưa" }
        ],
        answer: 1,
        explanation: "Vì làm đại tảo trừ (tổng vệ sinh), nên hãy mang giẻ lau và cái xô (バケツ) đến."
      },
      {
        id: 7, type: "fill",
        question: "レストランのような料理は、( )がかかって作れない。",
        options: [
          { text: "せわ", meaning: "Chăm sóc" },
          { text: "ひま", meaning: "Rảnh rỗi" },
          { text: "あじ", meaning: "Vị" },
          { text: "てま", meaning: "Thời gian và công sức" }
        ],
        answer: 3,
        explanation: "Món ăn giống như của nhà hàng thì, tốn công sức (てま) nên không thể làm."
      },
      {
        id: 8, type: "fill",
        question: "しょうゆは日本の( )料として知られている。",
        options: [
          { text: "調味", meaning: "Điều vị - ちょうみ" },
          { text: "調子", meaning: "Tình trạng - ちょうし" },
          { text: "調理", meaning: "Nấu ăn - ちょうり" },
          { text: "調和", meaning: "Điều hòa - ちょうわ" }
        ],
        answer: 0,
        explanation: "Nước tương được biết đến như là nguyên liệu điều vị (gia vị - 調味料) của Nhật Bản."
      },
      {
        id: 9, type: "fill",
        question: "わたしは末っ子なので、よく兄や姉に( )もらう。",
        options: [
          { text: "すませて", meaning: "Hoàn thành" },
          { text: "かんで", meaning: "Nhai" },
          { text: "おごって", meaning: "Bao/Đãi ăn" },
          { text: "のこして", meaning: "Để lại" }
        ],
        answer: 2,
        explanation: "Tôi vì là con út nên, thường nhận được anh và chị bao ăn (おごって) cho."
      },
      {
        id: 10, type: "fill",
        question: "来月の中( )に、友だちに会いに中国へ行く予定だ。",
        options: [
          { text: "半", meaning: "Bán/Rưỡi - はん" },
          { text: "期", meaning: "Kỳ - き" },
          { text: "旬", meaning: "Tuần - じゅん" },
          { text: "間", meaning: "Gian/Khoảng - かん" }
        ],
        answer: 2,
        explanation: "Vào trung tuần (中旬) của tháng sau, là dự định đi đến Trung Quốc để gặp bạn."
      },
      {
        id: 11, type: "synonym",
        question: "日本に来てから、*じすい*している。",
        options: [
          { text: "あまり食べないように", meaning: "Cố gắng không ăn nhiều" },
          { text: "自分で料理を作って", meaning: "Tự mình nấu món ăn" },
          { text: "アルバイトをして", meaning: "Làm thêm" },
          { text: "一人で生活して", meaning: "Sống một mình" }
        ],
        answer: 1,
        explanation: "Từ sau khi đến Nhật Bản, tôi đang tự nấu ăn (じすい = 自分で料理を作って)."
      },
      {
        id: 12, type: "synonym",
        question: "とり肉を*あげた*料理が好きです。",
        options: [
          { text: "電子レンジで熱する", meaning: "Làm nóng bằng lò vi sóng" },
          { text: "なべで熱する", meaning: "Làm nóng bằng nồi" },
          { text: "油に入れて熱する", "meaning": "Cho vào dầu rồi làm nóng" },
          { text: "フランパンで熱する", "meaning": "Làm nóng bằng chảo" }
        ],
        answer: 2,
        explanation: "Tôi thích món ăn làm nóng cho vào trong dầu (chiên/rắn - あげた = 油に入れて熱する) thịt gà."
      },
      {
        id: 13, type: "synonym",
        question: "*しあさって*は久しぶりのデートだ。",
        options: [
          { text: "あさっての次の日", meaning: "Ngày tiếp theo của ngày kia" },
          { text: "あさっての2日後", meaning: "2 ngày sau của ngày kia" },
          { text: "あさっての3日後", "meaning": "3 ngày sau của ngày kia" },
          { text: "あさっての4日後", "meaning": "4 ngày sau của ngày kia" }
        ],
        answer: 0,
        explanation: "Ngày kìa (しあさって = あさっての次の日) là cuộc hẹn hò của lâu ngày không gặp."
      },
      {
        id: 14, type: "synonym",
        question: "洗濯物を*たたむ*のは、うちでは息子の仕事だ。",
        options: [
          { text: "外に出す", meaning: "Đưa ra ngoài" },
          { text: "中に入れる", meaning: "Cho vào trong" },
          { text: "小さく折る", meaning: "Gấp nhỏ lại" },
          { text: "かたづける", meaning: "Dọn dẹp" }
        ],
        answer: 2,
        explanation: "Việc gấp (たたむ = 小さく折る) đồ giặt là công việc của con trai ở nhà tôi."
      },
      {
        id: 15, type: "synonym",
        question: "台所の塩が*切れている*。",
        options: [
          { text: "残っていない", meaning: "Không còn lại" },
          { text: "細かくなっていた", "meaning": "Đã trở nên nhỏ" },
          { text: "使われていない", "meaning": "Không được sử dụng" },
          { text: "どこにあるかわからない", "meaning": "Không biết có ở đâu" }
        ],
        answer: 0,
        explanation: "Muối của nhà bếp đang hết sạch (切れている = 残っていない)."
      },
      {
        id: 16, type: "usage", word: "ぬるい", meaning: "Nguội/Âm ấm",
        question: "Từ ぬるい được sử dụng đúng trong câu nào?",
        options: [
          { text: "昨日はあんなに暑かったのに、今日はとてもぬるい。" },
          { text: "熱いコーヒーが、おしゃべりしている間にぬるくなった。" },
          { text: "このコートはとてもぬるくて着やすい。" },
          { text: "ぬるい本を集めるのが趣味です。" }
        ],
        answer: 1,
        explanation: "Cà phê nóng, trong khoảng thời gian đang nói chuyện đã trở nên nguội (ぬるい) rồi. Câu 1 nhầm với 涼しい, Câu 3 nhầm với 軽い/暖かい."
      },
      {
        id: 17, type: "usage", word: "未来", meaning: "みらい - Tương lai",
        question: "Từ 未来 được sử dụng đúng trong câu nào?",
        options: [
          { text: "地球の未来をみんなが考えなければならない。" },
          { text: "息子には未来はサッカー選手になってほしい。" },
          { text: "何十年後も楽しく未来できたらいいと思う。" },
          { text: "わたしの未来の夢は、学校の先生になることだった。" }
        ],
        answer: 0,
        explanation: "Mọi người phải suy nghĩ tương lai (未来) của trái đất. Câu 2 và 4 sai vì ước mơ/nghề nghiệp cá nhân dùng 将来 (しょうらい)."
      },
      {
        id: 18, type: "usage", word: "おしぼり", meaning: "Khăn ướt lau tay",
        question: "Từ おしぼり được sử dụng đúng trong câu nào?",
        options: [
          { text: "ぞうきんをしっかりおしぼりしてから掃除する。" },
          { text: "テストで悪い点をとって、おしぼりされた。" },
          { text: "食事の前におしぼりで手をきれいにする。" },
          { text: "会社 thậm chí của mình là mình tự nhủ (おしぼり) nên làm." }
        ],
        answer: 2,
        explanation: "Trước của bữa ăn làm sạch tay bằng khăn ướt (おしぼり). Câu 1 nhầm với しぼって (vắt), Câu 2 nhầm với しぼられた (bị mắng)."
      },
      {
        id: 19, type: "synonym",
        question: "田中さんの*実家*はどこですか。",
        options: [
          { text: "今の住所", meaning: "Địa chỉ của bây giờ" },
          { text: "生まれた家", meaning: "Nhà đã được sinh ra" },
          { text: "自分の部屋", meaning: "Phòng của bản thân" },
          { text: "結婚してからの家", meaning: "Nhà từ sau khi kết hôn" }
        ],
        answer: 1,
        explanation: "Nhà đẻ (実家 = 生まれた家) của anh Tanaka là ở đâu."
      },
      {
        id: 13, type: "synonym",
        question: "留学生活は大変なので、*節約*している。",
        options: [
          { text: "むだなお金を使わない", meaning: "Không sử dụng tiền vô ích" },
          { text: "友だちに助けてもらっている", meaning: "Đang nhận được bạn bè giúp đỡ" },
          { text: "親にお金を借りている", meaning: "Đang mượn tiền ở bố mẹ" },
          { text: "電気やガスが止まっている", meaning: "Điện và ga đang dừng lại" }
        ],
        answer: 0,
        explanation: "Cuộc sống du học vì vất vả nên, đang tiết kiệm (節約 = むだなお金を使わない)."
      },
      {
        id: 14, type: "synonym",
        question: "昨日は*ぐっすり*寝た。",
        options: [
          { text: "泣きながら", meaning: "Vừa khóc" },
          { text: "とても深く", meaning: "Rất sâu" },
          { text: "薬を飲んで", meaning: "Uống thuốc rồi" },
          { text: "とても短い時間", meaning: "Thời gian rất ngắn" }
        ],
        answer: 1,
        explanation: "Hôm qua đã ngủ say (ぐっすり = とても深く)."
      },
      {
        id: 22, type: "synonym",
        question: "これは八百屋でもらった*おまけ*です。",
        options: [
          { text: "おつり", meaning: "Tiền thừa" },
          { text: "割引", meaning: "Giảm giá" },
          { text: "得", meaning: "Lãi/Lời" },
          { text: "サービス", meaning: "Dịch vụ/Hàng khuyến mãi" }
        ],
        answer: 3,
        explanation: "Cái này là hàng khuyến mãi (おまけ = サービス) đã nhận ở cửa hàng rau."
      }
    ]
  },
  {
    id: 3,
    title: "Bài Test 3",
    data: [
      {
        id: 1, type: "fill",
        question: "一人で生活することになったので、( )が必要だ。",
        options: [
          { text: "物置", meaning: "Nơi để đồ" },
          { text: "居間", meaning: "Phòng khách" },
          { text: "家電", meaning: "Đồ điện gia dụng" },
          { text: "床", meaning: "Sàn nhà" }
        ],
        answer: 2,
        explanation: "Vì đã trở nên sống bằng một người nên, đồ điện gia dụng (家電) là cần thiết."
      },
      {
        id: 2, type: "fill",
        question: "まだ中学生なのに10万円のバッグは( )だ。",
        options: [
          { text: "そん", meaning: "Lỗ" },
          { text: "ぜいたく", meaning: "Xa xỉ" },
          { text: "こづかい", meaning: "Tiền tiêu vặt" },
          { text: "せつやく", meaning: "Tiết kiệm" }
        ],
        answer: 1,
        explanation: "Mặc dù vẫn là học sinh trung học nhưng túi xách của 10 man yên thì là xa xỉ (ぜいたく)."
      },
      {
        id: 3, type: "fill",
        question: "このコートが( )5000円なんて信じられない。",
        options: [
          { text: "もし", meaning: "Nếu" },
          { text: "たった", meaning: "Chỉ/Vỏn vẹn" },
          { text: "やっと", meaning: "Cuối cùng thì" },
          { text: "もっと", meaning: "Hơn nữa" }
        ],
        answer: 1,
        explanation: "Cái áo khoác này mà chỉ (たった) 5000 yên thì không thể tin được."
      },
      {
        id: 4, type: "fill",
        question: "わたしの会社は、スーツじゃなくて( )着で大丈夫だ。",
        options: [
          { text: "普段", meaning: "Bình thường/Thường ngày" },
          { text: "日常", meaning: "Thường nhật" },
          { text: "普通", meaning: "Phổ thông" },
          { text: "通常", meaning: "Thông thường" }
        ],
        answer: 0,
        explanation: "Công ty của tôi thì, không phải đồ vest mà bằng quần áo thường ngày (普段) là ổn."
      },
      {
        id: 5, type: "fill",
        question: "この服はまだ着られるので、( )に出そう。",
        options: [
          { text: "リラックス", meaning: "Thư giãn" },
          { text: "レンタル", meaning: "Thuê" },
          { text: "リビング", meaning: "Phòng khách" },
          { text: "リサイクル", meaning: "Tái chế" }
        ],
        answer: 3,
        explanation: "Quần áo này vì vẫn có thể mặc nên, hãy đưa ra cho tái chế (リサイクル)."
      },
      {
        id: 6, type: "fill",
        question: "料理を注文する前に、( )何を飲むか決めよう。",
        options: [
          { text: "ついでに", meaning: "Nhân tiện" },
          { text: "とりあえず", meaning: "Tạm thời/Trước mắt" },
          { text: "たいてい", meaning: "Đại để/Thường" },
          { text: "とうとう", meaning: "Cuối cùng thì" }
        ],
        answer: 1,
        explanation: "Trước khi gọi món ăn thì, tạm thời (とりあえず) hãy quyết định uống cái gì."
      },
      {
        id: 7, type: "fill",
        question: "目を( )、もう10時だった。",
        options: [
          { text: "あいたら", meaning: "Nếu mở" },
          { text: "おきたら", meaning: "Nếu thức dậy" },
          { text: "さましたら", meaning: "Nếu làm tỉnh/Thức giấc" },
          { text: "くれたら", meaning: "Nếu cho" }
        ],
        answer: 2,
        explanation: "Sau khi làm tỉnh (さましたら - mở) mắt thì, đã là 10 giờ rồi."
      },
      {
        id: 8, type: "fill",
        question: "これは税( )の値段ですか。",
        options: [
          { text: "入り", meaning: "Vào" },
          { text: "入れ", meaning: "Cho vào" },
          { text: "込め", meaning: "Nhồi nhét" },
          { text: "込み", meaning: "Bao gồm" }
        ],
        answer: 3,
        explanation: "Cái này là giá tiền của bao gồm (込み) thuế phải không."
      },
      {
        id: 9, type: "fill",
        question: "今日の食事代は5人で( )にしましょう。",
        options: [
          { text: "割り勘", meaning: "Chia đều" },
          { text: "振り込み", meaning: "Chuyển khoản" },
          { text: "勘定", meaning: "Tính tiền" },
          { text: "口座", meaning: "Tài khoản" }
        ],
        answer: 0,
        explanation: "Tiền bữa ăn của hôm nay bằng 5 người hãy làm thành chia đều (割り勘)."
      },
      {
        id: 10, type: "fill",
        question: "水が止まって、蛇口を( )水が出ない。",
        options: [
          { text: "とかしても", meaning: "Dẫu làm tan chảy" },
          { text: "しまっても", meaning: "Dẫu cất đi" },
          { text: "ひねっても", meaning: "Dẫu vặn" },
          { text: "ためても", meaning: "Dẫu tích trữ" }
        ],
        answer: 2,
        explanation: "Nước dừng lại rồi, dẫu vặn (ひねっても) vòi nước thì nước không ra."
      },
      {
        id: 11, type: "synonym",
        question: "この手紙の*差出人*は親友です。",
        options: [
          { text: "届けてくれた人", meaning: "Người đã chuyển đến" },
          { text: "送った人", meaning: "Người đã gửi" },
          { text: "もらう人", meaning: "Người nhận" },
          { text: "ポストに入れた人", meaning: "Người đã cho vào hòm thư" }
        ],
        answer: 1,
        explanation: "Người gửi (差出人 = 送った人) của bức thư này là bạn thân."
      },
      {
        id: 12, type: "synonym",
        question: "田中さんの実家はどこですか。",
        options: [
          { text: "今の住所", meaning: "Địa chỉ của bây giờ" },
          { text: "生まれた家", meaning: "Nhà đã được sinh ra" },
          { text: "自分の部屋", meaning: "Phòng của bản thân" },
          { text: "結婚してからの家", meaning: "Nhà từ sau khi kết hôn" }
        ],
        answer: 1,
        explanation: "Nhà đẻ (実家 = 生まれた家) của anh Tanaka là ở đâu."
      },
      {
        id: 13, type: "synonym",
        question: "留学生活は大変なので、*節約*している。",
        options: [
          { text: "むだなお金を使わない", meaning: "Không sử dụng tiền vô ích" },
          { text: "友だちに助けてもらっている", meaning: "Đang nhận được bạn bè giúp đỡ" },
          { text: "親にお金を借りている", meaning: "Đang mượn tiền ở bố mẹ" },
          { text: "電気やガスが止まっている", meaning: "Điện và ga đang dừng lại" }
        ],
        answer: 0,
        explanation: "Cuộc sống du học vì vất vả nên, đang tiết kiệm (節約 = むだなお金を使わない)."
      },
      {
        id: 14, type: "synonym",
        question: "昨日は*ぐっすり*寝た。",
        options: [
          { text: "泣きながら", meaning: "Vừa khóc" },
          { text: "とても深く", meaning: "Rất sâu" },
          { text: "薬を飲んで", meaning: "Uống thuốc rồi" },
          { text: "とても短い時間", meaning: "Thời gian rất ngắn" }
        ],
        answer: 1,
        explanation: "Hôm qua đã ngủ say (ぐっすり = とても深く)."
      },
      {
        id: 15, type: "synonym",
        question: "これは八百屋でもらった*おまけ*です。",
        options: [
          { text: "おつり", meaning: "Tiền thừa" },
          { text: "割引", meaning: "Giảm giá" },
          { text: "得", meaning: "Lãi/Lời" },
          { text: "サービス", meaning: "Dịch vụ/Hàng khuyến mãi" }
        ],
        answer: 3,
        explanation: "Cái này là hàng khuyến mãi (おまけ = サービス) đã nhận ở cửa hàng rau."
      },
      {
        id: 16, type: "usage", word: "むだづかい", meaning: "Sự lãng phí",
        question: "Từ むだづかい được sử dụng đúng trong câu nào?",
        options: [
          { text: "あんな映画を見に行くのは、お金と時間のむだづかいだ。" },
          { text: "冷蔵庫の中のものをむだづかいして料理を作った。" },
          { text: "これはもう使わないので、よかったらむだづかいしてください。" },
          { text: "姉はいつも、わたしをむだづかいしている。" }
        ],
        answer: 0,
        explanation: "Việc đi xem bộ phim như thế kia thì, là sự sử dụng lãng phí (むだづかい) của tiền và thời gian."
      },
      {
        id: 17, type: "usage", word: "日当たり", meaning: "Ánh nắng chiếu vào",
        question: "Từ 日当たり được sử dụng đúng trong câu nào?",
        options: [
          { text: "今日は太陽が高くて、街もいい日当たりだ。" },
          { text: "海で日当たりしていたら、赤くなってしまった。" },
          { text: "とても日当たりがいいので、この部屋に決めた。" },
          { text: "花見をするなら、ちょうど今日が日当たりよさそうだ。" }
        ],
        answer: 2,
        explanation: "Vì ánh nắng chiếu vào (日当たり) rất tốt nên, đã quyết định vào căn phòng này."
      },
      {
        id: 18, type: "usage", word: "出前", meaning: "Gọi món giao đến nhà",
        question: "Từ 出前 được sử dụng đúng trong câu nào?",
        options: [
          { text: "今日は出かけたくないので、弁当の出前をたのもう。" },
          { text: "毎朝起きるのが遅いので、出前は忙しい。" },
          { text: "銀行の出前に、小さな花屋ができた。" },
          { text: "マンションの出前で暗証番号を押さないと入れない。" }
        ],
        answer: 0,
        explanation: "Hôm nay vì không muốn đi ra ngoài nên, hãy nhờ giao hàng tận nhà (出前) của cơm hộp."
      },
      {
        id: 19, type: "usage", word: "夜ふかし", meaning: "Thức khuya",
        question: "Từ 夜ふかし được sử dụng đúng trong câu nào?",
        options: [
          { text: "今日も夜ふかしまで起きているつもりだ。" },
          { text: "夜ふかしなテレビはけっこうおもしろい。" },
          { text: "夜ふかしにごはんを食べるのは、健康によくない。" },
          { text: "ゲームで夜ふかしするなんて、もうやめなさい。" }
        ],
        answer: 3,
        explanation: "Việc thức khuya (夜ふかし) bằng game vân vân thì, hãy bỏ ngay đi."
      },
      {
        id: 20, type: "usage", word: "小銭", meaning: "Tiền lẻ",
        question: "Từ 小銭 được sử dụng đúng trong câu nào?",
        options: [
          { text: "むかしの小銭は今ならかなり高く売れるらしい。" },
          { text: "小銭がないので1万円で払った。" },
          { text: "日本で最も小銭なのは1円だ。" },
          { text: "コンビニでお金を払うときは、だいたい小銭している。" }
        ],
        answer: 1,
        explanation: "Vì không có tiền lẻ (小銭) nên đã trả bằng 1 man yên."
      }
    ]
  },
  {
    id: 4,
    title: "Bài Test 4",
    data: [
      {
        id: 1, type: "fill",
        question: "コンサート前のホールには( )ができていた。",
        options: [
          { text: "行進", meaning: "Diễu hành" },
          { text: "集合", meaning: "Tập hợp" },
          { text: "正面", meaning: "Chính diện" },
          { text: "行列", meaning: "Hàng người/Đoàn người" }
        ],
        answer: 3,
        explanation: "Ở sảnh trước của buổi hòa nhạc thì, hàng người (行列) đã được làm ra."
      },
      {
        id: 2, type: "fill",
        question: "天気もいいし、時間もあるので、ちょっと公園を( )しよう。",
        options: [
          { text: "どんどん", meaning: "Dần dần/Nhanh chóng" },
          { text: "ぶらぶら", meaning: "Đi dạo vẩn vơ" },
          { text: "そろそろ", meaning: "Sắp sửa" },
          { text: "なかなか", meaning: "Mãi mà/Khá là" }
        ],
        answer: 1,
        explanation: "Thời tiết cũng tốt, vì cũng có thời gian nên, hãy làm đi dạo vẩn vơ (ぶらぶら) công viên một chút."
      },
      {
        id: 3, type: "fill",
        question: "郊外に引っ越したので、会社との( )に4時間くらいかかる。",
        options: [
          { text: "片道", meaning: "Một chiều" },
          { text: "経由", meaning: "Quá cảnh/Thông qua" },
          { text: "往復", meaning: "Khứ hồi/Hai chiều" },
          { text: "時刻", meaning: "Thời khắc/Giờ giấc" }
        ],
        answer: 2,
        explanation: "Vì đã chuyển nhà đến ngoại ô nên, vào việc hai chiều (往復) với công ty mất khoảng 4 tiếng."
      },
      {
        id: 4, type: "fill",
        question: "電車が信号トラブルで30分も( )した。",
        options: [
          { text: "乗車", meaning: "Lên xe" },
          { text: "停車", meaning: "Dừng xe" },
          { text: "発車", meaning: "Xuất phát xe" },
          { text: "下車", meaning: "Xuống xe" }
        ],
        answer: 1,
        explanation: "Xe điện vì sự cố tín hiệu nên đã làm dừng xe (停車) đến 30 phút."
      },
      {
        id: 5, type: "fill",
        question: "注意が足りなくて、前の車に( )しまった。",
        options: [
          { text: "ひいて", meaning: "Cán/Đâm" },
          { text: "とまって", meaning: "Dừng lại" },
          { text: "ついて", meaning: "Bám theo" },
          { text: "ぶつかって", meaning: "Va chạm" }
        ],
        answer: 3,
        explanation: "Chú ý không đủ nên, đã làm va chạm (ぶつかって) vào xe ô tô trước mất rồi."
      },
      {
        id: 6, type: "fill",
        question: "今日から連休なので、高速道路が( )している。",
        options: [
          { text: "渋滞", meaning: "Tắc đường" },
          { text: "違反", meaning: "Vi phạm" },
          { text: "踏切", meaning: "Chắn tàu" },
          { text: "満席", meaning: "Kín ghế" }
        ],
        answer: 0,
        explanation: "Vì từ hôm nay là kỳ nghỉ liên tục nên, đường cao tốc đang làm tắc đường (渋滞)."
      },
      {
        id: 7, type: "fill",
        question: "バスでお年寄りが乗ってきたので、すぐ立って席を( )。",
        options: [
          { text: "すいた", meaning: "Vắng" },
          { text: "あげた", meaning: "Cho" },
          { text: "ゆずった", meaning: "Nhường" },
          { text: "つめた", meaning: "Dồn lại" }
        ],
        answer: 2,
        explanation: "Bằng xe buýt vì người già đã lên tới nên, ngay lập tức đứng dậy và đã nhường (ゆずった) ghế ngồi."
      },
      {
        id: 8, type: "fill",
        question: "この定期券の有効( )はあさってだ。",
        options: [
          { text: "期間", meaning: "Kỳ hạn" },
          { text: "期限", meaning: "Kỳ hạn/Thời hạn" },
          { text: "時間", meaning: "Thời gian" },
          { text: "時限", meaning: "Giờ học" }
        ],
        answer: 1,
        explanation: "Thời hạn (期限) có hiệu lực của vé định kỳ này là ngày kia."
      },
      {
        id: 9, type: "fill",
        question: "ゆっくり運転していたら、後ろの車に( )。",
        options: [
          { text: "追いかけられた", meaning: "Bị đuổi theo" },
          { text: "追いこされた", meaning: "Bị vượt qua" },
          { text: "通りかかられた", meaning: "Bị đi ngang qua" },
          { text: "通りすぎられた", meaning: "Bị đi quá" }
        ],
        answer: 1,
        explanation: "Nếu đang lái xe từ từ thì, bị xe của phía sau đã bị vượt qua (追いこされた)."
      },
      {
        id: 10, type: "fill",
        question: "むかしは( )町も、今はさびしくなってしまった。",
        options: [
          { text: "じゅうぶんだった", meaning: "Đã đủ" },
          { text: "にぎやかだった", meaning: "Đã náo nhiệt" },
          { text: "たくさんだった", meaning: "Đã nhiều" },
          { text: "まんいんだった", meaning: "Đã đông người" }
        ],
        answer: 1,
        explanation: "Thị trấn ngày xưa đã náo nhiệt (にぎやかだった) cũng, bây giờ đã trở nên buồn bã mất rồi."
      },
      {
        id: 11, type: "synonym",
        question: "この先は*つき当たり*です。",
        options: [
          { text: "車がぶつかるところ", meaning: "Nơi xe ô tô va chạm" },
          { text: "それ以上進めないところ", meaning: "Nơi không thể tiến lên hơn cái đó" },
          { text: "車が止められるところ", meaning: "Nơi xe ô tô được dừng" },
          { text: "下に落ちそうな危ないところ", meaning: "Nơi nguy hiểm có vẻ rơi xuống dưới" }
        ],
        answer: 1,
        explanation: "Phía trước này là sự chạm cuối (つき当たり = それ以上進めないところ)."
      },
      {
        id: 12, type: "synonym",
        question: "このホームに*上り*電車が来る。",
        options: [
          { text: "北に向かっている", meaning: "Đang hướng về phía bắc" },
          { text: "高いところに向かっている", meaning: "Đang hướng về nơi cao" },
          { text: "中央に向かっている", meaning: "Đang hướng về trung ương" },
          { text: "郊外に向かっている", meaning: "Đang hướng về ngoại ô" }
        ],
        answer: 2,
        explanation: "Xe điện đi lên (上り = 中央に向かっている) đến ở sân ga này. (Tàu đi về hướng thủ đô/trung tâm)."
      },
      {
        id: 13, type: "synonym",
        question: "朝早いバスは*がらがら*だ。",
        options: [
          { text: "人がとても少ない", meaning: "Người rất ít" },
          { text: "人がうるさい", meaning: "Người ồn ào" },
          { text: "少し安くなる", meaning: "Trở nên rẻ một chút" },
          { text: "乾燥している", meaning: "Đang khô ráo" }
        ],
        answer: 0,
        explanation: "Xe buýt sớm buổi sáng thì trống vắng (がらがら = 人がとても少ない)."
      },
      {
        id: 14, type: "synonym",
        question: "駅前の病院の*そば*にコンビニがある。",
        options: [
          { text: "すぐとなり", meaning: "Ngay bên cạnh" },
          { text: "すぐ近く", meaning: "Ngay gần" },
          { text: "すぐ前", meaning: "Ngay trước" },
          { text: "すぐ後ろ", meaning: "Ngay sau" }
        ],
        answer: 1,
        explanation: "Ở bên cạnh (そば = すぐ近く) của bệnh viện trước nhà ga có cửa hàng tiện lợi."
      },
      {
        id: 15, type: "synonym",
        question: "このカーブはとても*ゆるい*。",
        options: [
          { text: "ゆっくりだ", meaning: "Chậm rãi" },
          { text: "長い", meaning: "Dài" },
          { text: "簡単だ", meaning: "Đơn giản" },
          { text: "急じゃない", meaning: "Không gấp" }
        ],
        answer: 3,
        explanation: "Khúc cua này thì rất lỏng lẻo (thoải - ゆるい = 急じゃない)."
      },
      {
        id: 16, type: "usage", word: "割りこむ", meaning: "Chen ngang",
        question: "Từ 割りこむ được sử dụng đúng trong câu nào?",
        options: [
          { text: "行列に割りこんだ人がいたので注意した。" },
          { text: "授業が終わる時間なのに、20分も割りこんだ。" },
          { text: "今日はウイスキーを水で割りこんで飲みたい。" },
          { text: "あの店はセール中は割りこんでくれるので得だ。" }
        ],
        answer: 0,
        explanation: "Vì đã có người đã chen ngang (割りこんだ) vào hàng người nên đã chú ý."
      },
      {
        id: 17, type: "usage", word: "始発", meaning: "Chuyến tàu đầu tiên",
        question: "Từ 始発 được sử dụng đúng trong câu nào?",
        options: [
          { text: "この飛行機は成田空港始発のニューヨーク行きだ。" },
          { text: "飲み会で電車がなくなったので、始発まで飲んだ。" },
          { text: "大学を卒業して、今日から社会人として始発する。" },
          { text: "わたしの仕事は始発時間が9時で、6時に終わる。" }
        ],
        answer: 1,
        explanation: "Bằng buổi uống rượu vì xe điện đã mất đi nên, đã uống đến chuyến xe đầu tiên (始発)."
      },
      {
        id: 18, type: "usage", word: "人ごみ", meaning: "Đám đông",
        question: "Từ 人ごみ được sử dụng đúng trong câu nào?",
        options: [
          { text: "日本は人ごみのきびしいルールがある。" },
          { text: "家族がみんな集まると、家が人ごみだ。" },
          { text: "この店はランチが予約できないので、とても人ごみだ。" },
          { text: "わたしは人ごみが苦手なので、あまり出かけない。" }
        ],
        answer: 3,
        explanation: "Tôi thì đám đông (人ごみ) kém nên, không đi ra ngoài lắm."
      },
      {
        id: 19, type: "usage", word: "目印", meaning: "Dấu hiệu",
        question: "Từ 目印 được sử dụng đúng trong câu nào?",
        options: [
          { text: "美術館では目印通りに回ってください。" },
          { text: "うちの近くの目印は図書館です。" },
          { text: "新しくできたタワーはとても目印です。" },
          { text: "最近ちょっと目印が見えにくくなりました。" }
        ],
        answer: 1,
        explanation: "Dấu hiệu (目印) của gần của nhà tôi là thư viện."
      },
      {
        id: 20, type: "usage", word: "払い戻す", meaning: "Hoàn trả tiền",
        question: "Từ 払い戻す được sử dụng đúng trong câu nào?",
        options: [
          { text: "友だちにあげた服を、もう一度払い戻したい。" },
          { text: "新しい洗濯機を買うと、古い洗濯機も払い戻してくれる。" },
          { text: "コンサートが中止になったので、払い戻しをするそうだ。" },
          { text: "友だちに借りていたお金を払い戻さなければいけない。" }
        ],
        answer: 2,
        explanation: "Buổi hòa nhạc vì đã trở thành đình chỉ nên, nghe nói là sẽ làm hoàn trả tiền (払い戻し)."
      }
    ]
  },
  {
    id: 5,
    title: "Bài Test 5",
    data: [
      {
        id: 1, type: "fill",
        question: "妹は子どものころから( )、両親によくほめられていた。",
        options: [
          { text: "かたくて", meaning: "Cứng" },
          { text: "かしこくて", meaning: "Thông minh" },
          { text: "あさくて", meaning: "Nông" },
          { text: "さびしくて", meaning: "Buồn bã" }
        ],
        answer: 1,
        explanation: "Em gái từ lúc của trẻ con vì thông minh (かしこくて), nên đã thường được bố mẹ khen."
      },
      {
        id: 2, type: "fill",
        question: "わたしの英語がへんなのは、( )の問題かもしれない。",
        options: [
          { text: "インスタント", meaning: "Ăn liền/Tức thời" },
          { text: "クレジット", meaning: "Tín dụng" },
          { text: "コンクリート", meaning: "Bê tông" },
          { text: "アクセント", meaning: "Trọng âm" }
        ],
        answer: 3,
        explanation: "Tiếng Anh của tôi kỳ lạ thì, có lẽ là vấn đề của trọng âm (アクセント)."
      },
      {
        id: 3, type: "fill",
        question: "こんなにおもしろい本の( )にぜひ会ってみたい。",
        options: [
          { text: "学者", meaning: "Học giả" },
          { text: "記者", meaning: "Ký giả/Nhà báo" },
          { text: "書者", meaning: "Người viết - ít dùng" },
          { text: "筆者", meaning: "Bút giả/Tác giả" }
        ],
        answer: 3,
        explanation: "Nhất định muốn thử gặp tác giả (筆者) của cuốn sách thú vị đến mức này."
      },
      {
        id: 4, type: "fill",
        question: "簡単に( )ないで、もう少しがんばってみようと思う。",
        options: [
          { text: "あきらめ", meaning: "Từ bỏ" },
          { text: "そろえ", meaning: "Tập hợp" },
          { text: "ふりこま", meaning: "Chuyển khoản" },
          { text: "とりださ", meaning: "Lấy ra" }
        ],
        answer: 0,
        explanation: "Bằng cách đơn giản không từ bỏ (あきらめないで), tôi nghĩ sẽ thử cố gắng thêm một chút."
      },
      {
        id: 5, type: "fill",
        question: "今すぐではなく、( )考えてから答えを出してください。",
        options: [
          { text: "ざっと", meaning: "Lướt qua" },
          { text: "まあまあ", meaning: "Tàm tạm" },
          { text: "じっくり", meaning: "Kỹ càng" },
          { text: "さっそく", meaning: "Ngay lập tức" }
        ],
        answer: 2,
        explanation: "Không phải ngay bây giờ, sau khi suy nghĩ kỹ càng (じっくり) hãy đưa ra câu trả lời."
      },
      {
        id: 6, type: "fill",
        question: "スポーツは( )ですが、勉強はだめです。",
        options: [
          { text: "得意", meaning: "Đắc ý/Giỏi" },
          { text: "自信", meaning: "Tự tin" },
          { text: "正確", meaning: "Chính xác" },
          { text: "適当", meaning: "Thích đáng/Tùy tiện" }
        ],
        answer: 0,
        explanation: "Thể thao thì giỏi (得意) nhưng, học tập thì không được."
      },
      {
        id: 7, type: "fill",
        question: "今からみなさんにテストを( )ので、30分でやってください。",
        options: [
          { text: "うける", meaning: "Nhận/Thi" },
          { text: "しまう", meaning: "Cất" },
          { text: "まとめる", meaning: "Tóm tắt" },
          { text: "くばる", meaning: "Phân phát" }
        ],
        answer: 3,
        explanation: "Từ bây giờ vì phân phát (くばる) bài kiểm tra cho mọi người nên, hãy làm bằng 30 phút."
      },
      {
        id: 8, type: "fill",
        question: "早くレポートの( )を決めないと、しめ切りに間に合わない。",
        options: [
          { text: "ゼミ", meaning: "Hội thảo/Seminar" },
          { text: "テーマ", meaning: "Chủ đề" },
          { text: "レベル", meaning: "Mức độ/Level" },
          { text: "アドレス", meaning: "Địa chỉ" }
        ],
        answer: 1,
        explanation: "Nếu không nhanh chóng quyết định chủ đề (テーマ) của báo cáo thì, không kịp vào hạn chót."
      },
      {
        id: 9, type: "fill",
        question: "今からわたしが言うことを、みんなで( )ください。",
        options: [
          { text: "くりかえして", meaning: "Lặp lại" },
          { text: "言いなおして", meaning: "Nói lại" },
          { text: "聞きなおして", meaning: "Nghe lại" },
          { text: "聞きかえして", meaning: "Hỏi lại" }
        ],
        answer: 0,
        explanation: "Việc mà tôi nói từ bây giờ, mọi người hãy lặp lại (くりかえして) bằng mọi người."
      },
      {
        id: 10, type: "fill",
        question: "最近ちょっと( )不足で、体調があまりよくない。",
        options: [
          { text: "休", meaning: "Nghỉ" },
          { text: "眠", meaning: "Ngủ" },
          { text: "寝", meaning: "Ngủ" },
          { text: "楽", meaning: "Vui vẻ/Nhàn nhã" }
        ],
        answer: 2,
        explanation: "Gần đây vì thiếu ngủ (寝不足) một chút, tình trạng cơ thể không tốt lắm."
      },
      {
        id: 11, type: "synonym",
        question: "弟は大学生だが、今日も*サボった*ようだ。",
        options: [
          { text: "病気で休んだ", meaning: "Đã nghỉ bằng bệnh" },
          { text: "理由がないのに休んだ", meaning: "Đã nghỉ mặc dù không ada lý do" },
          { text: "寝坊して遅れた", meaning: "Đã ngủ quên và muộn" },
          { text: "アルバイトばかりした", meaning: "Chỉ toàn làm thêm" }
        ],
        answer: 1,
        explanation: "Em trai là sinh viên đại học nhưng, hôm nay dường như cũng đã trốn học (サボった = 理由がないのに休んだ)."
      },
      {
        id: 12, type: "synonym",
        question: "用意したプリントが*あまった*。",
        options: [
          { text: "足りなかった", meaning: "Đã không đủ" },
          { text: "簡単すぎた", meaning: "Đã quá đơn giản" },
          { text: "難しすぎた", meaning: "Đã quá khó" },
          { text: "残った", meaning: "Đã còn lại" }
        ],
        answer: 3,
        explanation: "Bản in đã chuẩn bị đã dư thừa (あまった = 残った)."
      },
      {
        id: 13, type: "synonym",
        question: "これからの*進路*を先生に相談した。",
        options: [
          { text: "家への帰り方", meaning: "Cách đi về vào nhà" },
          { text: "車の運転のし方", meaning: "Cách làm của lái xe ô tô" },
          { text: "これから進む方向", meaning: "Hướng tiến lên từ bây giờ" },
          { text: "アパートの選び方", meaning: "Cách chọn của căn hộ" }
        ],
        answer: 2,
        explanation: "Đã thảo luận vào giáo viên hướng tiến lên (進路 = これから進む方向) của từ bây giờ."
      },
      {
        id: 14, type: "synonym",
        question: "この文章を明日までに*暗記する*。",
        options: [
          { text: "意味を調べる", meaning: "Tra cứu ý nghĩa" },
          { text: "全部覚える", meaning: "Nhớ toàn bộ" },
          { text: "ノートに書く", meaning: "Viết vào vở" },
          { text: "内容を直す", meaning: "Sửa nội dung" }
        ],
        answer: 1,
        explanation: "Ghi nhớ (暗記する = 全部覚える) đoạn văn này đến ngày mai."
      },
      {
        id: 15, type: "synonym",
        question: "きのうの試合は*くやしかった*。",
        options: [
          { text: "とても残念だった", meaning: "Đã rất đáng tiếc" },
          { text: "とてもうれしかった", meaning: "Đã rất vui" },
          { text: "とてもおもしろかった", meaning: "Đã rất thú vị" },
          { text: "とても悲しかった", meaning: "Đã rất buồn" }
        ],
        answer: 0,
        explanation: "Trận đấu của hôm qua đã hối tiếc (くやしかった = とても残念だった)."
      },
      {
        id: 16, type: "usage", word: "でたらめ", meaning: "Nhảm nhí/Bừa bãi",
        question: "Từ でたらめ được sử dụng đúng trong câu nào?",
        options: [
          { text: "彼はいつもでたらめを言うので、みんなに好かれている。" },
          { text: "明日の天気は、でたらめなら晴れだと思う。" },
          { text: "テストで時間が足りなくて、でたらめに書いた。" },
          { text: "でたらめにがんばれば、きっと成功できるだろう。" }
        ],
        answer: 2,
        explanation: "Bằng bài kiểm tra thời gian không đủ nên, đã viết bừa bãi (でたらめに)."
      },
      {
        id: 17, type: "usage", word: "手続き", meaning: "Thủ tục",
        question: "Từ 手続き được sử dụng đúng trong câu nào?",
        options: [
          { text: "大学の入学手続きは、いろいろ面倒なことが多かった。" },
          { text: "わたしのクラスはみんな手続きで、とてもいいクラスだ。" },
          { text: "きのう友だちが新しい彼と手続きで歩いていた。" },
          { text: "10年付き合っている人に、そろそろ手続きした。" }
        ],
        answer: 0,
        explanation: "Thủ tục (手続き) nhập học của trường đại học thì, nhiều việc phiền phức nhiều loại."
      },
      {
        id: 18, type: "usage", word: "いちおう", meaning: "Tạm thời/Đại khái",
        question: "Từ いちおう được sử dụng đúng trong câu nào?",
        options: [
          { text: "部長の奥さんとは、いちおうだけ会ったことがある。" },
          { text: "たいへんだったが、いちおう大学に合格できてよかった。" },
          { text: "友だちに久しぶりにメールしたら、「元気だ」といちおうがあった。" },
          { text: "ずっと行きたかった京都をいちおうできて、とてもうれしい。" }
        ],
        answer: 1,
        explanation: "Đã vất vả nhưng, tạm thời (いちおう) có thể đỗ vào đại học thì tốt rồi."
      },
      {
        id: 19, type: "usage", word: "ざっと", meaning: "Lướt qua/Đại khái",
        question: "Từ ざっと được sử dụng đúng trong câu nào?",
        options: [
          { text: "山下先生はざっとお帰りになりました。" },
          { text: "子どものころからざっと動物が好きでした。" },
          { text: "きのう、ざっと宿題を忘れていました。" },
          { text: "この資料をざっと見ておいてください。" }
        ],
        answer: 3,
        explanation: "Tài liệu này hãy nhìn lướt qua (ざっと) sẵn đi."
      },
      {
        id: 20, type: "usage", word: "下書き", meaning: "Bản nháp",
        question: "Từ 下書き được sử dụng đúng trong câu nào?",
        options: [
          { text: "そのペンを使うときは、机の上に下書きをしいてください。" },
          { text: "日本語が難しいので、英語の下書きを読みながらテレビを見る。" },
          { text: "小説を読むときは、はじめに下書きを読んだほうがいい。" },
          { text: "作文はまず下書きして、それから清書してください。" }
        ],
        answer: 3,
        explanation: "Bài văn thì đầu tiên làm bản nháp (下書き), từ sau cái đó hãy viết sạch."
      }
    ]
  },
  {
    id: 6,
    title: "Bài Test 6",
    data: [
      {
        id: 1, type: "fill",
        question: "就職したいなら、仕事に役に立つ( )を取っておいたほうがいい",
        options: [
          { text: "実力", meaning: "Thực lực" },
          { text: "合格", meaning: "Thi đỗ" },
          { text: "結果", meaning: "Kết quả" },
          { text: "資格", meaning: "Bằng cấp" }
        ],
        answer: 3,
        explanation: "Nếu muốn tìm việc thì, cái mà có ích cho công việc (Bằng cấp) nên lấy sẵn thì tốt."
      },
      {
        id: 2, type: "fill",
        question: "進路についてのアンケートは、明日までに( )してください。",
        options: [
          { text: "回答", meaning: "Trả lời" },
          { text: "受付", meaning: "Tiếp nhận" },
          { text: "実習", meaning: "Thực tập" },
          { text: "採用", meaning: "Tuyển dụng" }
        ],
        answer: 0,
        explanation: "Bảng câu hỏi về hướng tiến lên thì, đến ngày mai hãy (Trả lời)."
      },
      {
        id: 3, type: "fill",
        question: "両親からの( )を感じるので、早く仕事を見つけたい。",
        options: [
          { text: "アドバイス", meaning: "Lời khuyên" },
          { text: "プレッシャー", meaning: "Áp lực" },
          { text: "インターン", meaning: "Thực tập sinh" },
          { text: "インタビュー", meaning: "Phỏng vấn" }
        ],
        answer: 1,
        explanation: "Vì cảm thấy (Áp lực) từ bố mẹ nên, muốn nhanh chóng tìm thấy công việc."
      },
      {
        id: 4, type: "fill",
        question: "いろいろな経験を( )、人は成長できるはずだ。",
        options: [
          { text: "たてれば", meaning: "Nếu lập" },
          { text: "ためれば", meaning: "Nếu tích trữ" },
          { text: "やとえば", meaning: "Nếu thuê" },
          { text: "つめば", meaning: "Nếu tích lũy" }
        ],
        answer: 3,
        explanation: "(Nếu tích lũy) kinh nghiệm nhiều loại, người chắc chắn có thể trưởng thành."
      },
      {
        id: 5, type: "fill",
        question: "メールの( )は、わかりやすいものがベストだ",
        options: [
          { text: "印鑑", meaning: "Con dấu" },
          { text: "件名", meaning: "Tiêu đề" },
          { text: "事務", meaning: "Công việc văn phòng" },
          { text: "保存", meaning: "Bảo tồn/Lưu" }
        ],
        answer: 1,
        explanation: "(Tiêu đề) của mail thì, cái dễ hiểu là nhất."
      },
      {
        id: 6, type: "fill",
        question: "メールは来たが、大切な( )ファイルがなかった。",
        options: [
          { text: "画面", meaning: "Màn hình" },
          { text: "変換", meaning: "Biến đổi" },
          { text: "添付", meaning: "Đính kèm" },
          { text: "新規", meaning: "Mới" }
        ],
        answer: 2,
        explanation: "Mail đã đến nhưng, file (Đính kèm) quan trọng đã không có."
      },
      {
        id: 7, type: "fill",
        question: "日本語は長い言葉を( )して、短く言うことも多い。",
        options: [
          { text: "省略", meaning: "Lược bỏ" },
          { text: "精算", meaning: "Thanh toán chính xác" },
          { text: "通訳", meaning: "Thông dịch" },
          { text: "登録", meaning: "Đăng ký" }
        ],
        answer: 0,
        explanation: "Tiếng Nhật thì (Lược bỏ) từ dài, việc nói ngắn cũng nhiều."
      },
      {
        id: 8, type: "fill",
        question: "兄の、会社での( )は課長だそうだ。",
        options: [
          { text: "能力", meaning: "Năng lực" },
          { text: "職場", meaning: "Nơi làm việc" },
          { text: "正社員", meaning: "Nhân viên chính thức" },
          { text: "肩書き", meaning: "Chức danh" }
        ],
        answer: 3,
        explanation: "(Chức danh) ở tại công ty của anh trai thì, nghe nói là trưởng phòng."
      },
      {
        id: 9, type: "fill",
        question: "この商品が売れれば、この会社はとても( )はずだ。",
        options: [
          { text: "なまける", meaning: "Lười biếng" },
          { text: "もうかる", meaning: "Sinh lời" },
          { text: "える", meaning: "Đạt được" },
          { text: "うけとる", meaning: "Nhận lấy" }
        ],
        answer: 1,
        explanation: "Nếu sản phẩm này bán được, công ty này chắc chắn rất (Sinh lời)."
      },
      {
        id: 10, type: "fill",
        question: "ここは時給が高いので、大勢の人がアルバイトに( )するだろう。",
        options: [
          { text: "応募", meaning: "Ứng tuyển" },
          { text: "条件", meaning: "Điều kiện" },
          { text: "募集", meaning: "Tuyển dụng" },
          { text: "記入", meaning: "Điền vào" }
        ],
        answer: 0,
        explanation: "Chỗ này vì lương giờ cao nên, nhiều người có lẽ sẽ (Ứng tuyển) vào làm thêm."
      },
      {
        id: 11, type: "synonym",
        question: "この書類をよく*見なおして*ください。",
        options: [
          { text: "見て間違いをなおして", meaning: "Nhìn rồi sửa sai" },
          { text: "もう一度注意して見て", meaning: "Nhìn chú ý thêm một lần nữa" },
          { text: "もう一度始めから書いて", meaning: "Viết từ đầu thêm một lần nữa" },
          { text: "人に見せてなおしてもらって", meaning: "Cho người nhìn rồi nhận sửa lại" }
        ],
        answer: 1,
        explanation: "Tài liệu này hãy (Nhìn lại = Nhìn chú ý thêm một lần nữa) kỹ."
      },
      {
        id: 12, type: "synonym",
        question: "どんな人でも*短所*はある。",
        options: [
          { text: "短いところ", meaning: "Điểm ngắn" },
          { text: "すぐ怒るところ", meaning: "Điểm ngay lập tức tức giận" },
          { text: "よくないところ", meaning: "Điểm không tốt" },
          { text: "人からは見えないところ", meaning: "Điểm không thể nhìn thấy từ người" }
        ],
        answer: 2,
        explanation: "Dù là người thế nào cũng có (Sở đoản = Điểm không tốt)."
      },
      {
        id: 13, type: "synonym",
        question: "マリアさんは*とっくに*帰国しました。",
        options: [
          { text: "ずっと前に", meaning: "Trước đây suốt" },
          { text: "ちょっと前に", meaning: "Trước đây một chút" },
          { text: "何回も", meaning: "Biết bao nhiêu lần" },
          { text: "すぐに", meaning: "Ngay lập tức" }
        ],
        answer: 0,
        explanation: "Chị Maria đã về nước (Từ lâu rồi = Trước đây suốt)."
      },
      {
        id: 14, type: "synonym",
        question: "アルバイトをして生活費を*かせぐ*。",
        options: [
          { text: "貯金する", meaning: "Tiết kiệm tiền" },
          { text: "国に送る", meaning: "Gửi về nước" },
          { text: "もらう", meaning: "Nhận" },
          { text: "使う", meaning: "Sử dụng" }
        ],
        answer: 2,
        explanation: "Làm thêm rồi (Kiếm = Nhận) phí sinh hoạt."
      },
      {
        id: 15, type: "synonym",
        question: "彼女とは会社の*同期*です。",
        options: [
          { text: "友だちのような仲間", meaning: "Bạn bè giống như bè bạn" },
          { text: "同じ年に入った仲間", meaning: "Bạn bè đã vào cùng năm" },
          { text: "同じ職場で働く仲間", meaning: "Bạn bè làm việc ở cùng nơi làm việc" },
          { text: "よく一緒に飲む仲間", meaning: "Bạn bè thường xuyên uống cùng nhau" }
        ],
        answer: 1,
        explanation: "Với cô ấy là (Đồng kỳ = Bạn bè đã vào cùng năm) của công ty."
      },
      {
        id: 16, type: "usage", word: "くたくた", meaning: "Mệt phờ phạc",
        question: "Từ くたくた được sử dụng đúng trong câu nào?",
        options: [
          { text: "授業を始めるので、くたくた席に座ってください。" },
          { text: "姉はいつもくたくた会社の不満を言っている。" },
          { text: "最近は残業が多いので、家に帰るとくたくただ。" },
          { text: "うちの冷蔵庫はとても古くて、もうくたくただ。" }
        ],
        answer: 2,
        explanation: "Gần đây vì làm thêm giờ nhiều nên, hễ về đến nhà là (Mệt phờ phạc)."
      },
      {
        id: 17, type: "usage", word: "やりとり", meaning: "Trao đổi qua lại",
        question: "Từ やりとり được sử dụng đúng trong câu nào?",
        options: [
          { text: "彼女とは、仕事でやりとりしている間に仲良くなった。" },
          { text: "高級レストランで食事するときは、カードでやりとりする。" },
          { text: "曜日によってゴミのやりとりが決まっている。" },
          { text: "年1回は家族で海外旅行にやりとりしている。" }
        ],
        answer: 0,
        explanation: "Với cô ấy thì, trong khoảng thời gian đang (Trao đổi qua lại) bằng công việc đã trở nên thân thiết."
      },
      {
        id: 18, type: "usage", word: "ずらす", meaning: "Dời",
        question: "Từ ずらす được sử dụng đúng trong câu nào?",
        options: [
          { text: "電車がこんできたので、座席をずらそうだ。" },
          { text: "このくつはサイズが大きいので、小さくずらしたい。" },
          { text: "大切な会議が入ったので、出張を1日ずらした。" },
          { text: "もう着なくなったコートを妹にずらしてあげた。" }
        ],
        answer: 2,
        explanation: "Vì cuộc họp quan trọng đã vào nên, đã (Dời) chuyến công tác 1 ngày."
      },
      {
        id: 19, type: "usage", word: "無断", meaning: "Không xin phép",
        question: "Từ 無断 được sử dụng đúng trong câu nào?",
        options: [
          { text: "今日は朝から無断でずっと雨が降っている。" },
          { text: "社長に指示されたら、社員は無断できない。" },
          { text: "車を運転するときは、無断で注意しなければならない。" },
          { text: "学校でも会社でも、無断で早退してはいけない。" }
        ],
        answer: 3,
        explanation: "Dù ở trường học hay dù ở công ty, không được về sớm bằng sự (Không xin phép)."
      },
      {
        id: 20, type: "usage", word: "服装", meaning: "Trang phục",
        question: "Từ 服装 được sử dụng đúng trong câu nào?",
        options: [
          { text: "わたしの会社には服装があるが、おしゃれじゃない。" },
          { text: "面接にはどんな服装で行けばいいですか。" },
          { text: "明日から旅行なので、下着や服装をバッグに入れた。" },
          { text: "母の日にイヤリングなどの服装を贈るつもりだ。" }
        ],
        answer: 1,
        explanation: "Vào buổi phỏng vấn thì nếu đi bằng (Trang phục) thế nào thì tốt."
      }
    ]
  }
];
