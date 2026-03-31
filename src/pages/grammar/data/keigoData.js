export const keigoMasterGuide = {
  title: "N3 Keigo Master Database",
  description: "Bản đồ tư duy tóm gọn toàn bộ hệ thống Kính ngữ N3 chuyên sâu.",
  sections: [
    {
      id: "juju_action",
      title: "1. Cho & Nhận Hành Động (Vて + Juju Doushi)",
      concept: "Diễn tả hành động làm giúp ai đó hoặc được ai đó làm giúp.",
      categories: [
        {
          type: "Mình làm cho người khác (Giving)",
          rule: "Tuyệt đối KHÔNG dùng Vてあげる/Vてさしあげる trực tiếp với cấp trên vì nghe rất kẻ cả.",
          structures: [
            { pattern: "～てあげる / ～てやる", usage: "Bạn bè, người dưới, động vật." },
            { pattern: "～ましょうか / ～てさしageましょうか", usage: "Cách nói khéo léo khi muốn giúp người lớn tuổi." }
          ]
        },
        {
          type: "Người khác làm cho mình (Receiving - Góc nhìn của mình)",
          rule: "Chủ ngữ là MÌNH. Bạn nhận được lòng tốt từ người khác.",
          structures: [
            { pattern: "～てもらう", usage: "Bạn bè, người dưới làm giúp mình." },
            { pattern: "～ていただく", usage: "Cấp trên, người lớn tuổi làm giúp mình (Biết ơn sâu sắc)." }
          ]
        },
        {
          type: "Người khác làm cho mình (Giving - Góc nhìn của người làm)",
          rule: "Chủ ngữ là NGƯỜI KHÁC. Người ta có lòng tốt làm cho mình.",
          structures: [
            { pattern: "～てくれる", usage: "Bạn bè, người dưới làm giúp mình." },
            { pattern: "～てくださる", usage: "Cấp trên, người lớn tuổi làm giúp mình." }
          ]
        }
      ]
    },
    {
      id: "requests",
      title: "2. Nhờ Vả (Requests - Nhờ ai đó làm giúp)",
      concept: "Cấp độ lịch sự từ thân mật đến trang trọng nhất. Hay ra trong Choukai.",
      levels: [
        {
          label: "Thân mật",
          patterns: ["Vて / Vてくれない？", "Vてもらえる？"]
        },
        {
          label: "Lịch sự vừa",
          patterns: ["Vてください", "Vてくれませんか / Vてもらえませんか"]
        },
        {
          label: "Rất lịch sự",
          patterns: ["Vてくださいませんか", "Vていただけませんか", "Vていただけないでしょうか (Đỉnh cao lịch sự)"]
        }
      ]
    },
    {
      id: "permission",
      title: "3. Xin Phép (Asking for Permission - Xin được làm)",
      concept: "Thể Sai Khiến (Causative) + Động từ Nhận (Morau/Itadaku). Ý nghĩa: 'Xin hãy cho phép tôi được làm...'",
      warning: "Cực kỳ dễ nhầm với việc nhờ người khác làm. Hãy nhớ: Thấy 'V(さ)せて' -> MÌNH LÀ NGƯỜI LÀM.",
      structures: [
        { pattern: "V(さ)せてもらえる？ / V(さ)せてくれない？", usage: "Xin phép bạn bè." },
        { pattern: "V(さ)せていただけませんか / V(さ)せてくださいませんか", usage: "Xin phép cấp trên." },
        { pattern: "V(さ)させていただきます", usage: "Câu chốt khiêm nhường để thông báo mình sẽ làm gì." }
      ]
    },
    {
      id: "sonkeigo",
      title: "4. Kính Ngữ (Sonkeigo - 尊敬語)",
      concept: "Nâng tầm hành động, trạng thái của ĐỐI PHƯƠNG (Sếp, khách hàng).",
      subject: "NGƯỜI KHÁC (Họ làm)",
      rules: [
        {
          formula: "お + V(bỏ masu) + になる",
          example: "社長はお帰りになりました。(Giám đốc đã về rồi ạ)",
          note: "Không dùng cho động từ có 1 âm tiết (như 見る, 寝る)."
        },
        {
          formula: "お / ご + V(bỏ masu) + ください",
          example: "少々お待ちください。(Xin ngài vui lòng đợi một chút)",
          note: "Dùng khi yêu cầu, khuyên bảo đối phương một cách cực kỳ lịch sự."
        },
        {
          formula: "Chia về Thể Bị Động (V-れる / V-られる)",
          example: "先生は明日来られますか。(Ngày mai thầy có đến không ạ?)",
          note: "Hình thức tôn kính nhẹ nhàng, dễ nhầm khi nghe choukai."
        }
      ]
    },
    {
      id: "kenjougo",
      title: "5. Khiêm Nhường Ngữ (Kenjougo - 謙譲語)",
      concept: "Hạ thấp hành động của BẢN THÂN để tôn trọng người nghe.",
      subject: "CHÍNH MÌNH (Tôi làm)",
      rules: [
        {
          formula: "お + V(bỏ masu) + する / いたす",
          example: "私が荷物をお持ちします。(Để tôi xách hành lý cho ạ)",
          note: "Dùng với động từ thuần Nhật (Nhóm 1, 2)."
        },
        {
          formula: "ご + N(Gốc Hán) + する / いたす",
          example: "後ほどご連絡いたします。(Tôi sẽ liên lạc lại sau ạ)",
          note: "Dùng với danh động từ (Nhóm 3)."
        }
      ]
    },
    {
      id: "irregular_verbs",
      title: "6. Bảng Động Từ Bất Quy Tắc 'Thần Thánh'",
      note: "Bắt buộc học thuộc lòng. Choukai và Dokkai N3 xoáy vào đây cực nhiều.",
      verbs: [
        { basic: "行く / 来る", sonkei: "いらっしゃる / おいでになる", kenjou: "参る / 伺う (đến chỗ người nghe)" },
        { basic: "いる", sonkei: "いらっしゃる / おいでになる", kenjou: "おる" },
        { basic: "言う", sonkei: "おっしゃる", kenjou: "申す / 申し上げる" },
        { basic: "する", sonkei: "なさる", kenjou: "いたす" },
        { basic: "食べる / 飲む", sonkei: "召し上がる", kenjou: "いただく" },
        { basic: "見る", sonkei: "ご覧になる", kenjou: "拝見する" },
        { basic: "知っている", sonkei: "ご存知だ", kenjou: "存じている / 存じておる" },
        { basic: "聞く / 訪ねる", sonkei: "お聞きになる", kenjou: "伺う" },
        { basic: "会う", sonkei: "お会いになる", kenjou: "お目にかかる" },
        { basic: "わかる", sonkei: "お分かりになる", kenjou: "かしこまる / 承知する" }
      ]
    },
    {
      id: "critical_errors",
      title: "7. Lỗi Sai 'Chết Người' Cần Tránh Tuyệt Đối",
      errors: [
        {
          title: "Nijuukeigo (Kính ngữ kép)",
          desc: "Dùng 2 lần tôn kính ngữ cho cùng 1 động từ.",
          wrong: "社長がご覧になられました。",
          correct: "社長がご覧になりました。"
        },
        {
          title: "Dùng tôn kính cho người nhà",
          desc: "Khi nói với người ngoài về phe mình, PHẢI dùng Khiêm nhường ngữ.",
          wrong: "社長はいらっしゃいません。",
          correct: "社長はおりません。"
        },
        {
          title: "Dùng nhầm khi phỏng vấn",
          desc: "Khi hỏi người ta, không được gán Khiêm nhường ngữ cho họ.",
          wrong: "先生、この本を拝見しましたか？",
          correct: "先生、この本をご覧になりましたか？"
        }
      ]
    }
  ]
};
