export const verbPairsData = {
  title: "Tự động từ vs Tha động từ",
  description: "Bí kíp phân biệt và ghi nhớ cặp động từ tự thân (Intransitive) và tác động (Transitive).",
  rules: [
    {
      id: "rule1",
      pattern: "～ある vs ～える",
      example: "上がる vs 上げる",
      note: "Phần lớn động từ kết thúc bằng 'aru' là Tự động từ, 'eru' là Tha động từ.",
      pairs: [
        { intransitive: "上がる (lên)", transitive: "上げる (nâng lên)" },
        { intransitive: "閉まる (đóng lại)", transitive: "閉める (đóng)" },
        { intransitive: "決まる (được quyết định)", transitive: "決める (quyết định)" },
        { intransitive: "止まる (dừng lại)", transitive: "止める (dừng... lại)" },
        { intransitive: "変わる (biến đổi)", transitive: "変える (thay đổi)" },
        { intransitive: "掛かる (tốn/treo)", transitive: "掛ける (treo/chi dùng)" }
      ]
    },
    {
      id: "rule2",
      pattern: "～える vs ～す",
      example: "消える vs 消す",
      note: "Động từ kết thúc bằng 'eru' thường là Tự động từ, 'su' là Tha động từ.",
      pairs: [
        { intransitive: "消える (tắt/biến mất)", transitive: "消す (tắt/xóa)" },
        { intransitive: "燃える (cháy)", transitive: "燃やす (đốt)" },
        { intransitive: "冷える (lạnh đi)", transitive: "冷やす (làm lạnh)" },
        { intransitive: "増える (tăng lên)", transitive: "増やす (làm tăng)" },
        { intransitive: "生える (mọc lên)", transitive: "生やす (nuôi/mọc)" }
      ]
    },
    {
      id: "rule3",
      pattern: "～れる vs ～す",
      example: "壊れる vs 壊す",
      note: "Động từ 'reru' là Tự động từ, chuyển sang 'su' thành Tha động từ.",
      pairs: [
        { intransitive: "壊れる (hỏng)", transitive: "壊す (làm hỏng)" },
        { intransitive: "倒れる (đổ/ngã)", transitive: "倒す (đánh đổ)" },
        { intransitive: "汚れる (bị bẩn)", transitive: "汚す (làm bẩn)" },
        { intransitive: "外れる (tuột/rời)", transitive: "外す (tháo/rời)" },
        { intransitive: "乱れる (bị lộn xộn)", transitive: "乱す (làm loạn)" }
      ]
    },
    {
      id: "rule4",
      pattern: "～う vs ～える",
      example: "開く vs 開ける",
      note: "Động từ cột 'u' là Tự động từ, cột 'eru' là Tha động từ.",
      pairs: [
        { intransitive: "開く (mở ra)", transitive: "開ける (mở)" },
        { intransitive: "届く (đến nơi)", transitive: "届ける (chuyển đến)" },
        { intransitive: "進む (tiến lên)", transitive: "進める (thúc đẩy)" },
        { intransitive: "育つ (lớn lên)", transitive: "育てる (nuôi dưỡng)" },
        { intransitive: "並ぶ (xếp hàng)", transitive: "並べる (bày biện)" }
      ]
    },
    {
      id: "rule5",
      pattern: "～いる vs ～おす",
      example: "起きる vs 起こす",
      note: "Động từ 'iru' (thường nhóm 2) là Tự động từ, 'osu' là Tha động từ.",
      pairs: [
        { intransitive: "起きる (thức dậy)", transitive: "起こす (đánh thức)" },
        { intransitive: "落ちる (rơi/rớt)", transitive: "落とす (làm rơi)" },
        { intransitive: "足りる (đủ)", transitive: "足す (thêm vào)" },
        { intransitive: "降りる (xuống xe)", transitive: "降ろす (cho xuống)" }
      ]
    }
  ],
  usageNotes: [
    {
      title: "Trợ từ đi kèm",
      content: "Tự động từ thường đi với trợ từ が (biểu thị trạng thái). Tha động từ thường đi với trợ từ を (biểu thị tác động).",
      example: "ドアが開く (Cửa mở) vs ドアを開ける (Mở cửa)"
    },
    {
      title: "Trạng thái kết quả (～ている)",
      content: "Tự động từ + ている: Trạng thái đang diễn ra hoặc kết quả hiện tại. Tha động từ + ている: Đang thực hiện hành động.",
      example: "窓が閉まっている (Cửa đang đóng - trạng thái) vs 窓を閉めている (Đang đóng cửa - hành động)"
    }
  ]
};
