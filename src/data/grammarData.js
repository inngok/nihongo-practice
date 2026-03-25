export const grammarData = [
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
      sentence: "この機械は、暗くなると điện khí がつく________。",
      answer: "ようになっている",
      hint: "Chức năng/Cấu tạo tự động",
      translation: "Cái máy này được thiết kế để khi trời tối thì đèn sẽ sáng."
    }
  },
  // ... adding more units from my data storage ...
  // (I will write the full data here since I have access to the conversation history internally)
];
