import React, { useState, useEffect, useMemo, useRef } from 'react';
import { BookOpen, Brain, CheckCircle, ChevronLeft, ChevronRight, RotateCcw, HelpCircle, Layers } from 'lucide-react';

const grammarData = [
  // --- UNIT 1 ---
  {
    id: 1, unit: 1,
    pattern: "縺薙→縺ｫ縺励※縺・ｋ",
    meaning: "Quy蘯ｿt ﾄ黛ｻ杵h (thﾃｳi quen cﾃ｡ nhﾃ｢n)",
    explanation: "Di盻・ t蘯｣ thﾃｳi quen ho蘯ｷc quy t蘯ｯc mﾃ b蘯｣n thﾃ｢n t盻ｱ ﾄ黛ｻ・ra vﾃ th盻ｱc hi盻㌻.",
    examples: [
      { jp: "蛛･蠎ｷ縺ｮ縺溘ａ縺ｫ縲∵ｯ取律驥手除繧帝｣溘∋繧九％縺ｨ縺ｫ縺励※縺・ｋ縲・, vn: "ﾄ雪ｻ・t盻奏 cho s盻ｩc kh盻銃, tﾃｴi quy蘯ｿt ﾄ黛ｻ杵h (duy trﾃｬ thﾃｳi quen) ﾄハ rau m盻擁 ngﾃy." },
      { jp: "蟇昴ｋ蜑阪↓縲∝ｿ・★譛ｬ繧・0繝壹・繧ｸ隱ｭ繧縺薙→縺ｫ縺励※縺・ｋ縲・, vn: "Trﾆｰ盻嫩 khi ng盻ｧ, tﾃｴi luﾃｴn quy蘯ｿt ﾄ黛ｻ杵h ﾄ黛ｻ皇 10 trang sﾃ｡ch." }
    ],
    quiz: {
      sentence: "遘√・豈取律縲・0蛻・ず繝ｧ繧ｮ繝ｳ繧ｰ________縲・,
      answer: "縺薙→縺ｫ縺励※縺・ｋ",
      hint: "Quy蘯ｿt ﾄ黛ｻ杵h thﾃｳi quen c盻ｧa b蘯｣n thﾃ｢n",
      translation: "Tﾃｴi quy蘯ｿt ﾄ黛ｻ杵h ch蘯｡y b盻・30 phﾃｺt m盻擁 ngﾃy."
    }
  },
  {
    id: 2, unit: 1,
    pattern: "縺薙→縺ｫ縺ｪ縺｣縺ｦ縺・ｋ",
    meaning: "Quy ﾄ黛ｻ杵h / D盻ｱ ﾄ黛ｻ杵h (khﾃ｡ch quan)",
    explanation: "Di盻・ t蘯｣ nh盻ｯng vi盻㌘ ﾄ妥｣ ﾄ柁ｰ盻｣c quy蘯ｿt ﾄ黛ｻ杵h b盻殃 t盻・ch盻ｩc, quy ﾄ黛ｻ杵h ho蘯ｷc d盻ｱ ﾄ黛ｻ杵h mang tﾃｭnh khﾃ｡ch quan.",
    examples: [
      { jp: "豕募ｾ九〒縲∬ｻ翫ｒ驕玖ｻ｢縺吶ｋ譎ゅ・繧ｷ繝ｼ繝医・繝ｫ繝医ｒ縺吶ｋ縺薙→縺ｫ縺ｪ縺｣縺ｦ縺・ｋ縲・, vn: "Theo lu蘯ｭt phﾃ｡p, khi lﾃ｡i xe ﾃｴ tﾃｴ thﾃｬ quy ﾄ黛ｻ杵h ph蘯｣i th蘯ｯt dﾃ｢y an toﾃn." },
      { jp: "譏取律縺ｯ蜈育函縺ｫ莨壹≧縺薙→縺ｫ縺ｪ縺｣縺ｦ縺・ｋ縲・, vn: "Ngﾃy mai tﾃｴi cﾃｳ l盻議h h蘯ｹn g蘯ｷp th蘯ｧy giﾃ｡o (ﾄ妥｣ ﾄ柁ｰ盻｣c s蘯ｯp x蘯ｿp)." }
    ],
    quiz: {
      sentence: "縺薙・驛ｨ螻九〒縺ｯ縲√ち繝舌さ繧貞精縺｣縺ｦ縺ｯ縺・￠縺ｪ縺Ю_______縲・,
      answer: "縺薙→縺ｫ縺ｪ縺｣縺ｦ縺・ｋ",
      hint: "Quy ﾄ黛ｻ杵h chung",
      translation: "Trong phﾃｲng nﾃy cﾃｳ quy ﾄ黛ｻ杵h khﾃｴng ﾄ柁ｰ盻｣c hﾃｺt thu盻祖."
    }
  },
  {
    id: 3, unit: 1,
    pattern: "繧医≧縺ｫ縺ｪ縺｣縺ｦ縺・ｋ",
    meaning: "ﾄ脆ｰ盻｣c thi蘯ｿt k蘯ｿ ﾄ黛ｻ・/ Tr盻・nﾃｪn (t盻ｱ ﾄ黛ｻ冢g)",
    explanation: "Di盻・ t蘯｣ ch盻ｩc nﾄハg c盻ｧa mﾃ｡y mﾃｳc ho蘯ｷc s盻ｱ bi蘯ｿn ﾄ黛ｻ品 tr蘯｡ng thﾃ｡i mang tﾃｭnh t盻ｱ ﾄ黛ｻ冢g.",
    examples: [
      { jp: "縺薙・繝峨い縺ｯ莠ｺ縺瑚ｿ代▼縺上→縲∬・蜍輔〒髢九￥繧医≧縺ｫ縺ｪ縺｣縺ｦ縺・ｋ縲・, vn: "Cﾃ｡nh c盻ｭa nﾃy ﾄ柁ｰ盻｣c thi蘯ｿt k蘯ｿ ﾄ黛ｻ・t盻ｱ ﾄ黛ｻ冢g m盻・khi cﾃｳ ngﾆｰ盻拱 ti蘯ｿn l蘯｡i g蘯ｧn." },
      { jp: "縺薙・繝懊ち繝ｳ繧呈款縺吶→縲√♀貉ｯ縺悟・繧九ｈ縺・↓縺ｪ縺｣縺ｦ縺・ｋ縲・, vn: "Khi nh蘯･n nﾃｺt nﾃy, nﾆｰ盻嫩 nﾃｳng s蘯ｽ ch蘯｣y ra." }
    ],
    quiz: {
      sentence: "縺薙・讖滓｢ｰ縺ｯ縲∵囓縺上↑繧九→髮ｻ豌励′縺､縺柔_______縲・,
      answer: "繧医≧縺ｫ縺ｪ縺｣縺ｦ縺・ｋ",
      hint: "Ch盻ｩc nﾄハg/C蘯･u t蘯｡o t盻ｱ ﾄ黛ｻ冢g",
      translation: "Cﾃ｡i mﾃ｡y nﾃy ﾄ柁ｰ盻｣c thi蘯ｿt k蘯ｿ ﾄ黛ｻ・khi tr盻拱 t盻訴 thﾃｬ ﾄ妥ｨn s蘯ｽ sﾃ｡ng."
    }
  },
  {
    id: 4, unit: 1,
    pattern: "繧医≧縺ｪ / 繧医≧縺ｫ",
    meaning: "Gi盻創g nhﾆｰ / Theo nhﾆｰ",
    explanation: "Dﾃｹng ﾄ黛ｻ・so sﾃ｡nh ho蘯ｷc ﾄ柁ｰa ra vﾃｭ d盻･.",
    examples: [
      { jp: "螟ｪ髯ｽ縺ｮ繧医≧縺ｪ譏弱ｋ縺・ｺｺ縺縲・, vn: "ﾄ静ｳ lﾃ m盻冲 ngﾆｰ盻拱 tﾆｰﾆ｡i sﾃ｡ng nhﾆｰ m蘯ｷt tr盻拱." },
      { jp: "逧・＆繧薙′遏･縺｣縺ｦ縺・ｋ繧医≧縺ｫ縲∵律譛ｬ縺ｯ蟲ｶ蝗ｽ縺ｧ縺吶・, vn: "Nhﾆｰ m盻絞 ngﾆｰ盻拱 ﾄ妥｣ bi蘯ｿt, Nh蘯ｭt B蘯｣n lﾃ m盻冲 qu盻祖 gia h蘯｣i ﾄ黛ｺ｣o." }
    ],
    quiz: {
      sentence: "逕ｰ荳ｭ縺輔ｓ縺ｮ________蜆ｪ縺励＞莠ｺ縺ｫ縺ｪ繧翫◆縺・・,
      answer: "繧医≧縺ｪ",
      hint: "Gi盻創g nhﾆｰ (so sﾃ｡nh)",
      translation: "Tﾃｴi mu盻創 tr盻・thﾃnh m盻冲 ngﾆｰ盻拱 hi盻］ lﾃnh gi盻創g nhﾆｰ anh Tanaka."
    }
  },
  {
    id: 5, unit: 1,
    pattern: "縺ｿ縺溘＞縺",
    meaning: "Cﾃｳ v蘯ｻ nhﾆｰ / Gi盻創g nhﾆｰ (vﾄハ nﾃｳi)",
    explanation: "Dﾃｹng ﾄ黛ｻ・ph盻熟g ﾄ双ﾃ｡n d盻ｱa trﾃｪn c蘯｣m nh蘯ｭn ho蘯ｷc so sﾃ｡nh vﾃｭ von trong vﾄハ nﾃｳi.",
    examples: [
      { jp: "縺薙・繧ｱ繝ｼ繧ｭ縲∫ｾ主袖縺励◎縺・ゅ∪繧九〒譛ｬ迚ｩ縺ｿ縺溘＞縺縲・, vn: "Cﾃ｡i bﾃ｡nh nﾃy trﾃｴng ngon quﾃ｡. C盻ｩ nhﾆｰ lﾃ ﾄ黛ｻ・th蘯ｭt v蘯ｭy." },
      { jp: "縺ゅ◎縺薙↓隱ｰ縺九＞繧九∩縺溘＞縺縲・, vn: "Cﾃｳ v蘯ｻ nhﾆｰ cﾃｳ ai ﾄ妥ｳ 盻・ﾄ黛ｺｱng kia." }
    ],
    quiz: {
      sentence: "蠖ｼ縺ｯ縺ｾ繧九〒蟄蝉ｾ媽_______縺縲・,
      answer: "縺ｿ縺溘＞",
      hint: "Gi盻創g nhﾆｰ (vﾄハ nﾃｳi)",
      translation: "Anh 蘯･y c盻ｩ nhﾆｰ lﾃ tr蘯ｻ con v蘯ｭy."
    }
  },
  {
    id: 6, unit: 1,
    pattern: "繧峨＠縺・,
    meaning: "Nghe nﾃｳi / ﾄ静ｺng ch蘯･t",
    explanation: "Dﾃｹng ﾄ黛ｻ・truy盻］ ﾄ黛ｺ｡t tin ﾄ黛ｻ渡 ho蘯ｷc di盻・ t蘯｣ tﾃｭnh ch蘯･t ﾄ訴盻ハ hﾃｬnh c盻ｧa s盻ｱ v蘯ｭt/s盻ｱ vi盻㌘.",
    examples: [
      { jp: "譏取律縺ｯ髮ｨ縺碁剄繧九ｉ縺励＞縲・, vn: "Nghe nﾃｳi ngﾃy mai tr盻拱 s蘯ｽ mﾆｰa." },
      { jp: "莉頑律縺ｯ譏･繧峨＠縺・囑縺九＞譌･縺縲・, vn: "Hﾃｴm nay lﾃ m盻冲 ngﾃy 蘯･m ﾃ｡p ﾄ妥ｺng ch蘯･t mﾃｹa xuﾃ｢n." }
    ],
    quiz: {
      sentence: "蝎ゅ↓繧医ｋ縺ｨ縲√≠縺ｮ莠御ｺｺ縺ｯ邨仙ｩ壹☆繧祇_______縲・,
      answer: "繧峨＠縺・,
      hint: "Nghe nﾃｳi (tin ﾄ黛ｻ渡)",
      translation: "Theo l盻拱 ﾄ黛ｻ渡 thﾃｬ hai ngﾆｰ盻拱 ﾄ妥ｳ nghe nﾃｳi s蘯ｯp k蘯ｿt hﾃｴn."
    }
  },
  {
    id: 7, unit: 1,
    pattern: "縺､繧ゅｊ",
    meaning: "D盻ｱ ﾄ黛ｻ杵h / C盻ｩ ng盻｡ lﾃ",
    explanation: "Di盻・ t蘯｣ d盻ｱ ﾄ黛ｻ杵h c盻ｧa b蘯｣n thﾃ｢n ho蘯ｷc ni盻［ tin ch盻ｧ quan v盻・m盻冲 tr蘯｡ng thﾃ｡i nﾃo ﾄ妥ｳ.",
    examples: [
      { jp: "譚･蟷ｴ縲∵律譛ｬ縺ｸ陦後￥縺､繧ゅｊ縺ｧ縺吶・, vn: "Nﾄノ sau tﾃｴi d盻ｱ ﾄ黛ｻ杵h s蘯ｽ ﾄ訴 Nh蘯ｭt B蘯｣n." },
      { jp: "闍･縺・▽繧ゅｊ縺縺後√ｂ縺・0豁ｳ縺縲・, vn: "C盻ｩ ng盻｡ lﾃ mﾃｬnh cﾃｲn tr蘯ｻ nhﾆｰng ﾄ妥｣ 50 tu盻品 r盻妬." }
    ],
    quiz: {
      sentence: "螟ｧ蟄ｦ繧貞穀讌ｭ縺励◆繧峨∵律譛ｬ縺ｧ蜒阪￥________縺ｧ縺吶・,
      answer: "縺､繧ゅｊ",
      hint: "D盻ｱ ﾄ黛ｻ杵h",
      translation: "Sau khi t盻奏 nghi盻㎝ ﾄ黛ｺ｡i h盻皇, tﾃｴi d盻ｱ ﾄ黛ｻ杵h s蘯ｽ lﾃm vi盻㌘ t蘯｡i Nh蘯ｭt B蘯｣n."
    }
  },
  {
    id: 8, unit: 1,
    pattern: "縺ｦ縺上ｋ",
    meaning: "B蘯ｯt ﾄ黛ｺｧu / Tr盻・nﾃｪn / Ti蘯ｿn v盻・phﾃｭa mﾃｬnh",
    explanation: "Di盻・ t蘯｣ hﾃnh ﾄ黛ｻ冢g ﾄ疎ng b蘯ｯt ﾄ黛ｺｧu, m盻冲 s盻ｱ thay ﾄ黛ｻ品 ﾄ疎ng di盻・ ra ho蘯ｷc hﾆｰ盻嬾g v盻・phﾃｭa ngﾆｰ盻拱 nﾃｳi.",
    examples: [
      { jp: "譛霑代∝ｰ代＠縺壹▽蟇偵￥縺ｪ縺｣縺ｦ縺阪◆縲・, vn: "G蘯ｧn ﾄ妥｢y tr盻拱 ﾄ妥｣ b蘯ｯt ﾄ黛ｺｧu l蘯｡nh d蘯ｧn lﾃｪn." },
      { jp: "髮ｨ縺碁剄縺｣縺ｦ縺阪◆縲・, vn: "Tr盻拱 ﾄ妥｣ ﾄ黛ｻ・mﾆｰa r盻妬 (b蘯ｯt ﾄ黛ｺｧu)." }
    ],
    quiz: {
      sentence: "縺繧薙□繧捺律譛ｬ隱槭′荳頑焔縺ｫ縺ｪ縺｣縺ｦ________縲・,
      answer: "縺阪◆",
      hint: "Thay ﾄ黛ｻ品 tr蘯｡ng thﾃ｡i (quﾃ｡ kh盻ｩ c盻ｧa 縺ｦ縺上ｋ)",
      translation: "Ti蘯ｿng Nh蘯ｭt c盻ｧa tﾃｴi ﾄ疎ng d蘯ｧn d蘯ｧn tr盻・nﾃｪn gi盻淑 lﾃｪn."
    }
  },

  // --- UNIT 2 ---
  {
    id: 9, unit: 2,
    pattern: "縺ｦ縺ｻ縺励＞ / 繧ゅｉ縺・◆縺・,
    meaning: "Mu盻創 (ai ﾄ妥ｳ) lﾃm gﾃｬ",
    explanation: "Di盻・ t蘯｣ mong mu盻創 ngﾆｰ盻拱 khﾃ｡c th盻ｱc hi盻㌻ m盻冲 hﾃnh ﾄ黛ｻ冢g nﾃo ﾄ妥ｳ cho mﾃｬnh ho蘯ｷc cho ai ﾄ妥ｳ.",
    examples: [
      { jp: "隕ｪ縺ｫ縺ｯ縺・▽縺ｾ縺ｧ繧ょ・豌励〒縺・※縺ｻ縺励＞縲・, vn: "Tﾃｴi mu盻創 b盻・m蘯ｹ lﾃｺc nﾃo cﾅｩng kh盻銃 m蘯｡nh." },
      { jp: "縺薙・莉穂ｺ九・蜷帙↓繧・▲縺ｦ繧ゅｉ縺・◆縺・・, vn: "Tﾃｴi mu盻創 c蘯ｭu lﾃm cﾃｴng vi盻㌘ nﾃy." }
    ],
    quiz: {
      sentence: "蜈育函縺ｫ縲√ｂ縺｣縺ｨ繧・▲縺上ｊ隧ｱ縺励※________縲・,
      answer: "縺ｻ縺励＞",
      hint: "Mong mu盻創 ngﾆｰ盻拱 khﾃ｡c lﾃm gﾃｬ (k蘯ｿt thﾃｺc b蘯ｱng ﾄ爽ﾃｴi 'i')",
      translation: "Tﾃｴi mu盻創 th蘯ｧy giﾃ｡o nﾃｳi ch蘯ｭm l蘯｡i m盻冲 chﾃｺt."
    }
  },
  {
    id: 10, unit: 2,
    pattern: "縺ｰ / 縺溘ｉ / 縺ｨ窶ｦ繧医°縺｣縺・,
    meaning: "Giﾃ｡ mﾃ... / ﾆｯ盻嫩 gﾃｬ...",
    explanation: "Th盻・hi盻㌻ s盻ｱ ti蘯ｿc nu盻訴 v盻・m盻冲 vi盻㌘ ﾄ妥｣ x蘯｣y ra ho蘯ｷc mong ﾆｰ盻嫩 m盻冲 ﾄ訴盻「 trﾃ｡i v盻嬖 hi盻㌻ t蘯｡i.",
    examples: [
      { jp: "繧ゅ≧蟆代＠譎る俣縺後≠繧後・縲∝・驛ｨ縺ｧ縺阪◆縺ｮ縺ｫ縲・, vn: "Giﾃ｡ mﾃ cﾃｳ thﾃｪm chﾃｺt th盻拱 gian thﾃｬ tﾃｴi ﾄ妥｣ lﾃm xong h蘯ｿt r盻妬." },
      { jp: "縺ゅ・譎ゅ∵悽蠖薙・縺薙→繧定ｨ縺｣縺ｦ縺翫￠縺ｰ繧医°縺｣縺溘・, vn: "Giﾃ｡ mﾃ lﾃｺc ﾄ妥ｳ tﾃｴi nﾃｳi ra s盻ｱ th蘯ｭt thﾃｬ t盻奏 bi蘯ｿt m蘯･y." }
    ],
    quiz: {
      sentence: "繝・せ繝医・蜑阪↓縲√ｂ縺｣縺ｨ蜍牙ｼｷ縺励※縺翫￠縺ｰ________縲・,
      answer: "繧医°縺｣縺・,
      hint: "Th盻・hi盻㌻ s盻ｱ ti蘯ｿc nu盻訴 盻・quﾃ｡ kh盻ｩ",
      translation: "Giﾃ｡ mﾃ trﾆｰ盻嫩 bﾃi ki盻ノ tra tﾃｴi h盻皇 nhi盻「 hﾆ｡n."
    }
  },
  {
    id: 11, unit: 2,
    pattern: "菴ｿ蠖ｹ蠖｢ (縺輔○縺ｦ / 縺輔○繧峨ｌ繧・",
    meaning: "Cho phﾃｩp lﾃm / B盻・b蘯ｯt lﾃm",
    explanation: "S盻ｭ d盻･ng th盻・sai khi蘯ｿn ﾄ黛ｻ・xin phﾃｩp (縺輔○縺ｦ縺上□縺輔＞) ho蘯ｷc di盻・ t蘯｣ vi盻㌘ b盻・ﾃｩp bu盻冂 (縺輔○繧峨ｌ繧・- b盻・ﾄ黛ｻ冢g sai khi蘯ｿn).",
    examples: [
      { jp: "莉頑律縺ｯ菴楢ｪｿ縺梧が縺・・縺ｧ縲∵掠縺丞ｸｰ繧峨○縺ｦ縺上□縺輔＞縲・, vn: "Hﾃｴm nay tﾃｴi th蘯･y khﾃｴng kh盻銃 nﾃｪn xin cho phﾃｩp tﾃｴi v盻・s盻嬶." },
      { jp: "蟄蝉ｾ帙・縺薙ｍ縲∵ｯ阪↓繝斐い繝弱ｒ鄙偵ｏ縺帙ｉ繧後◆縲・, vn: "H盻妬 nh盻・ tﾃｴi b盻・m蘯ｹ b蘯ｯt h盻皇 piano." }
    ],
    quiz: {
      sentence: "縺吶∩縺ｾ縺帙ｓ縲∵・譌･荳譌･莨代∪________縺上□縺輔＞縲・,
      answer: "縺帙※",
      hint: "Xin phﾃｩp ngﾆｰ盻拱 khﾃ｡c cho mﾃｬnh lﾃm gﾃｬ (dﾃｹng th盻・sai khi蘯ｿn c盻ｧa 莨代・)",
      translation: "Xin l盻擁, hﾃ｣y cho phﾃｩp tﾃｴi ngh盻・ngﾃy mai."
    }
  },
  {
    id: 12, unit: 2,
    pattern: "閾ｪ蜍戊ｩ・(縲懊※縺・ｋ)",
    meaning: "Tr蘯｡ng thﾃ｡i (T盻ｱ ﾄ黛ｻ冢g t盻ｫ)",
    explanation: "T盻ｱ ﾄ黛ｻ冢g t盻ｫ + 縺ｦ縺・ｋ di盻・ t蘯｣ tr蘯｡ng thﾃ｡i c盻ｧa s盻ｱ v蘯ｭt sau khi hﾃnh ﾄ黛ｻ冢g x蘯｣y ra. Khﾃ｡c v盻嬖 Tha ﾄ黛ｻ冢g t盻ｫ + 縺ｦ縺ゅｋ (cﾃｳ ch盻ｧ ﾃｽ).",
    examples: [
      { jp: "遯薙′髢峨∪縺｣縺ｦ縺・ｋ縲・, vn: "C盻ｭa s盻・ﾄ疎ng ﾄ妥ｳng (tr蘯｡ng thﾃ｡i hi盻㌻ t蘯｡i)." },
      { jp: "縺ゅ∬ｲ｡蟶・′關ｽ縺｡縺ｦ縺・ｋ繧医・, vn: "A, cﾃｳ cﾃ｡i vﾃｭ b盻・rﾆ｡i kﾃｬa." }
    ],
    quiz: {
      sentence: "繧ｷ繝｣繝・・繝懊ち繝ｳ縺後→繧契_______繧医・,
      answer: "縺ｦ縺・ｋ",
      hint: "Di盻・ t蘯｣ tr蘯｡ng thﾃ｡i hi盻㌻ t蘯｡i b蘯ｱng t盻ｱ ﾄ黛ｻ冢g t盻ｫ (ho蘯ｷc 縺ｦ繧・",
      translation: "Cﾃ｡i cﾃｺc ﾃ｡o sﾆ｡ mi b盻・tu盻冲 ra kﾃｬa."
    }
  },
  {
    id: 13, unit: 2,
    pattern: "縲懊∩",
    meaning: "S盻ｱ... / ﾄ雪ｻ・.. (Danh t盻ｫ hﾃｳa)",
    explanation: "Bi蘯ｿn tﾃｭnh t盻ｫ thﾃnh danh t盻ｫ ﾄ黛ｻ・ch盻・tr蘯｡ng thﾃ｡i, tﾃｭnh ch蘯･t mang tﾃｭnh c蘯｣m nh蘯ｭn, khﾃ｡ch quan (thﾆｰ盻拵g dﾃｹng v盻嬖 謔ｲ縺励＞, 逞帙＞, 闍ｦ縺励＞, 驥阪＞, 豺ｱ縺・..).",
    examples: [
      { jp: "謌ｦ莠峨・謔ｲ縺励∩繧貞ｿ倥ｌ縺ｦ縺ｯ縺・￠縺ｪ縺・・, vn: "Khﾃｴng ﾄ柁ｰ盻｣c quﾃｪn n盻擁 ﾄ疎u thﾆｰﾆ｡ng c盻ｧa chi蘯ｿn tranh." },
      { jp: "縺薙・繧ｹ繝ｼ繝励・驥手除縺ｮ逕倥∩縺後≠繧九・, vn: "Mﾃｳn sﾃｺp nﾃy cﾃｳ v盻・ng盻衡 c盻ｧa rau c盻ｧ." }
    ],
    quiz: {
      sentence: "譏溽ｩｺ縺ｮ鄒弱＠________縺ｫ諢溷虚縺励◆縲・,
      answer: "縺ｿ",
      hint: "H蘯ｭu t盻・bi蘯ｿn tﾃｭnh t盻ｫ ﾄ爽ﾃｴi 'i' thﾃnh danh t盻ｫ",
      translation: "Tﾃｴi ﾄ妥｣ xﾃｺc ﾄ黛ｻ冢g trﾆｰ盻嫩 v蘯ｻ ﾄ黛ｺｹp c盻ｧa b蘯ｧu tr盻拱 sao."
    }
  },
  {
    id: 14, unit: 2,
    pattern: "繧薙§繧・↑縺・ｼ・/ 縺ｮ縺ｧ縺ｯ縺ｪ縺・□繧阪≧縺・,
    meaning: "Ch蘯ｳng ph蘯｣i lﾃ... hay sao?",
    explanation: "Cﾃ｡ch nﾃｳi vﾃｲng vo, r盻･t rﾃｨ ﾄ黛ｻ・ﾄ柁ｰa ra ﾃｽ ki蘯ｿn, ph盻熟g ﾄ双ﾃ｡n c盻ｧa b蘯｣n thﾃ｢n.",
    examples: [
      { jp: "縺薙・繧・ｊ譁ｹ縺ｮ縺ｻ縺・′縺・＞縺ｮ縺ｧ縺ｯ縺ｪ縺・□繧阪≧縺九・, vn: "Tﾃｴi nghﾄｩ cﾃ｡ch lﾃm nﾃy t盻奏 hﾆ｡n ﾄ妥ｳ ch盻ｩ?" },
      { jp: "蠖ｼ縲∽ｻ頑律莨代・繧薙§繧・↑縺・ｼ・, vn: "Ch蘯ｳng ph蘯｣i hﾃｴm nay anh 蘯･y ngh盻・sao?" }
    ],
    quiz: {
      sentence: "縺薙ｌ縲√■繧・▲縺ｨ鬮倥☆縺弱ｋ________・・,
      answer: "繧薙§繧・↑縺・,
      hint: "Cﾃ｡ch nﾃｳi thﾃ｢n m蘯ｭt c盻ｧa '縺ｮ縺ｧ縺ｯ縺ｪ縺・°'",
      translation: "Cﾃ｡i nﾃy, ch蘯ｳng ph蘯｣i lﾃ hﾆ｡i ﾄ黛ｺｯt quﾃ｡ sao?"
    }
  },
  {
    id: 15, unit: 2,
    pattern: "邵ｮ邏・ｽ｢ (縺ｦ繧・縺ｨ縺・縺ｪ縺阪ｃ)",
    meaning: "D蘯｡ng rﾃｺt g盻肱 (vﾄハ nﾃｳi)",
    explanation: "Cﾃ｡c d蘯｡ng nﾃｳi t蘯ｯt thﾆｰ盻拵g dﾃｹng trong vﾄハ nﾃｳi hﾃng ngﾃy (縺ｦ縺・ｋ竊偵※繧・ 縺ｦ縺翫￥竊偵→縺・ 縺ｪ縺代ｌ縺ｰ竊偵↑縺阪ｃ).",
    examples: [
      { jp: "莉翫∽ｽ輔＠縺ｦ繧九・・・(縺励※縺・ｋ縺ｮ)", vn: "Bﾃ｢y gi盻・ﾄ疎ng lﾃm gﾃｬ th蘯ｿ?" },
      { jp: "譏取律縺ｾ縺ｧ縺ｫ縺薙・譛ｬ縲∬ｪｭ繧薙←縺上ｈ縲・隱ｭ繧薙〒縺翫￥繧・", vn: "Tﾃｴi s蘯ｽ ﾄ黛ｻ皇 xong cu盻創 sﾃ｡ch nﾃy trﾆｰ盻嫩 ngﾃy mai." }
    ],
    quiz: {
      sentence: "諤･縺契_______縲・崕霆翫↓驕・ｌ繧九ｈ・・,
      answer: "縺ｪ縺阪ｃ",
      hint: "D蘯｡ng rﾃｺt g盻肱 c盻ｧa '縺ｪ縺代ｌ縺ｰ'",
      translation: "N蘯ｿu khﾃｴng nhanh lﾃｪn, s蘯ｽ tr盻・tﾃu ﾄ黛ｺ･y!"
    }
  },

  // --- UNIT 3 ---
  {
    id: 16, unit: 3,
    pattern: "縺九ｉ縲懊↓縺九￠縺ｦ",
    meaning: "T盻ｫ... ﾄ黛ｺｿn...",
    explanation: "Ch盻・ph蘯｡m vi ﾄ黛ｺ｡i khﾃ｡i t盻ｫ ﾄ訴盻ノ b蘯ｯt ﾄ黛ｺｧu ﾄ黛ｺｿn ﾄ訴盻ノ k蘯ｿt thﾃｺc c盻ｧa th盻拱 gian ho蘯ｷc khﾃｴng gian.",
    examples: [
      { jp: "譏取律縺ｯ髢｢譚ｱ縺九ｉ譚ｱ蛹怜慍譁ｹ縺ｫ縺九￠縺ｦ縲・岑縺碁剄繧九〒縺励ｇ縺・・, vn: "Ngﾃy mai cﾃｳ l蘯ｽ s蘯ｽ mﾆｰa t盻ｫ vﾃｹng Kanto ﾄ黛ｺｿn vﾃｹng Tohoku." },
      { jp: "譏ｨ螟懊°繧我ｻ頑悃縺ｫ縺九￠縺ｦ縲∝､ｧ髮ｨ縺碁剄縺｣縺溘・, vn: "ﾄ静｣ cﾃｳ mﾆｰa l盻嬾 t盻ｫ ﾄ妥ｪm qua ﾄ黛ｺｿn sﾃ｡ng nay." }
    ],
    quiz: {
      sentence: "譏取律縺ｯ髢｢譚ｱ縺九ｉ譚ｱ蛹怜慍譁ｹ縺ｫ________縲・岑縺碁剄繧九〒縺励ｇ縺・・,
      answer: "縺九￠縺ｦ",
      hint: "ﾄ進 kﾃｨm v盻嬖 縺九ｉ ﾄ黛ｻ・ch盻・ph蘯｡m vi",
      translation: "Ngﾃy mai cﾃｳ l蘯ｽ s蘯ｽ mﾆｰa tr蘯｣i dﾃi t盻ｫ vﾃｹng Kanto ﾄ黛ｺｿn vﾃｹng Tohoku."
    }
  },
  {
    id: 17, unit: 3,
    pattern: "縺繧峨￠",
    meaning: "ﾄ雪ｺｧy / Toﾃn lﾃ...",
    explanation: "Ch盻・tr蘯｡ng thﾃ｡i cﾃｳ ﾄ黛ｺｧy th盻ｩ gﾃｬ ﾄ妥ｳ, thﾆｰ盻拵g mang nghﾄｩa tiﾃｪu c盻ｱc (nhﾆｰ rﾃ｡c, bﾃｹn, l盻擁 sai).",
    examples: [
      { jp: "蠖ｼ縺ｮ驛ｨ螻九・繧ｴ繝溘□繧峨￠縺縲・, vn: "Phﾃｲng c盻ｧa anh ta toﾃn lﾃ rﾃ｡c." },
      { jp: "髮ｨ縺ｮ荳ｭ繧呈ｭｩ縺・◆縺ｮ縺ｧ縲・擽縺梧ｳ･縺繧峨￠縺ｫ縺ｪ縺｣縺溘・, vn: "Vﾃｬ ﾄ訴 b盻・trong mﾆｰa nﾃｪn giﾃy dﾃｭnh ﾄ黛ｺｧy bﾃｹn." }
    ],
    quiz: {
      sentence: "縺薙・繝・せ繝医・俣驕輔＞________縺倥ｃ縺ｪ縺・°・・,
      answer: "縺繧峨￠",
      hint: "Toﾃn lﾃ (nghﾄｩa tiﾃｪu c盻ｱc)",
      translation: "Bﾃi ki盻ノ tra nﾃy ch蘯ｳng ph蘯｣i toﾃn lﾃ l盻擁 sai sao!"
    }
  },
  {
    id: 18, unit: 3,
    pattern: "縺翫°縺・,
    meaning: "Nh盻・cﾃｳ... / Nh盻・vﾃo...",
    explanation: "Ch盻・nguyﾃｪn nhﾃ｢n d蘯ｫn ﾄ黛ｺｿn k蘯ｿt qu蘯｣ t盻奏, mang hﾃm ﾃｽ bi蘯ｿt ﾆ｡n.",
    examples: [
      { jp: "蜈育函縺ｮ縺翫°縺偵〒縲¨3縺ｫ蜷域ｼ縺ｧ縺阪∪縺励◆縲・, vn: "Nh盻・cﾃｳ th蘯ｧy giﾃ｡o mﾃ em ﾄ妥｣ thi ﾄ黛ｻ・N3." },
      { jp: "阮ｬ繧帝｣ｲ繧薙□縺翫°縺偵〒縲∫・縺御ｸ九′縺｣縺溘・, vn: "Nh盻・u盻創g thu盻祖 mﾃ tﾃｴi ﾄ妥｣ h蘯｡ s盻奏." }
    ],
    quiz: {
      sentence: "蜿矩＃縺梧焔莨昴▲縺ｦ縺上ｌ縺歙_______縺ｧ縲∵掠縺冗ｵゅｏ縺｣縺溘・,
      answer: "縺翫°縺・,
      hint: "Nh盻・cﾃｳ (k蘯ｿt qu蘯｣ t盻奏)",
      translation: "Nh盻・b蘯｡n bﾃｨ giﾃｺp ﾄ黛ｻ｡ mﾃ tﾃｴi ﾄ妥｣ lﾃm xong s盻嬶."
    }
  },
  {
    id: 19, unit: 3,
    pattern: "縺帙＞ / 縺帙＞縺・,
    meaning: "T蘯｡i vﾃｬ... / Cﾃｳ l蘯ｽ t蘯｡i...",
    explanation: "Ch盻・nguyﾃｪn nhﾃ｢n d蘯ｫn ﾄ黛ｺｿn k蘯ｿt qu蘯｣ x蘯･u, mang hﾃm ﾃｽ ﾄ黛ｻ・l盻擁.",
    examples: [
      { jp: "繝舌せ縺碁≦繧後◆縺帙＞縺ｧ縲∵肢讌ｭ縺ｫ驕・綾縺励※縺励∪縺｣縺溘・, vn: "T蘯｡i xe buﾃｽt ﾄ黛ｺｿn mu盻冢 mﾃ tﾃｴi b盻・tr盻・h盻皇." },
      { jp: "逍ｲ繧後※縺・ｋ縺帙＞縺九・ｭ縺檎李縺・・, vn: "Cﾃｳ l蘯ｽ t蘯｡i m盻㏄ m盻淑 nﾃｪn tﾃｴi b盻・ﾄ疎u ﾄ黛ｺｧu." }
    ],
    quiz: {
      sentence: "縺ゅ・莠ｺ縺ｮ________縺ｧ縲√∩繧薙↑縺瑚ｿｷ諠代＠縺ｦ縺・ｋ縲・,
      answer: "縺帙＞",
      hint: "T蘯｡i vﾃｬ (k蘯ｿt qu蘯｣ x蘯･u, ﾄ黛ｻ・l盻擁)",
      translation: "T蘯｡i ngﾆｰ盻拱 ﾄ妥ｳ mﾃ m盻絞 ngﾆｰ盻拱 ﾄ疎ng g蘯ｷp phi盻］ ph盻ｩc."
    }
  },
  {
    id: 20, unit: 3,
    pattern: "縺ｨ縺翫ｊ(縺ｫ) / 縺ｩ縺翫ｊ(縺ｫ)",
    meaning: "ﾄ静ｺng nhﾆｰ / Theo nhﾆｰ...",
    explanation: "Lﾃm m盻冲 vi盻㌘ gﾃｬ ﾄ妥ｳ ﾄ妥ｺng theo nhﾆｰ m盻冲 khuﾃｴn m蘯ｫu, tiﾃｪu chu蘯ｩn ho蘯ｷc d盻ｱ ﾄ双ﾃ｡n.",
    examples: [
      { jp: "遘√・隱ｬ譏弱＠縺溘→縺翫ｊ縺ｫ縲∵ｩ滓｢ｰ繧堤ｵ・∩遶九※縺ｦ縺上□縺輔＞縲・, vn: "Hﾃ｣y l蘯ｯp rﾃ｡p mﾃ｡y mﾃｳc ﾄ妥ｺng theo nhﾆｰ tﾃｴi ﾄ妥｣ gi蘯｣i thﾃｭch." },
      { jp: "螟ｩ豌嶺ｺ亥ｱ縺ｩ縺翫ｊ縲・岑縺碁剄縺｣縺ｦ縺阪◆縲・, vn: "Tr盻拱 ﾄ妥｣ mﾆｰa ﾄ妥ｺng nhﾆｰ d盻ｱ bﾃ｡o th盻拱 ti蘯ｿt." }
    ],
    quiz: {
      sentence: "蜈育函縺瑚ｨ縺｣縺歙_______縲∬ｩｦ鬨薙・髮｣縺励°縺｣縺溘・,
      answer: "縺ｨ縺翫ｊ",
      hint: "ﾄ静ｺng nhﾆｰ / Theo nhﾆｰ (ﾄ訴 sau ﾄ黛ｻ冢g t盻ｫ th盻・縺・繧・",
      translation: "ﾄ静ｺng nhﾆｰ l盻拱 th蘯ｧy giﾃ｡o nﾃｳi, bﾃi thi r蘯･t khﾃｳ."
    }
  },
  {
    id: 21, unit: 3,
    pattern: "縺ｫ縺､縺・※ / 縺､縺・,
    meaning: "V盻・v蘯･n ﾄ黛ｻ・.. / V盻・..",
    explanation: "Trﾃｬnh bﾃy ch盻ｧ ﾄ黛ｻ・c盻ｧa hﾃnh ﾄ黛ｻ冢g (suy nghﾄｩ, nﾃｳi, vi蘯ｿt, ﾄ訴盻「 tra...).",
    examples: [
      { jp: "譌･譛ｬ縺ｮ譁・喧縺ｫ縺､縺・※繝ｬ繝昴・繝医ｒ譖ｸ縺阪∪縺吶・, vn: "Tﾃｴi s蘯ｽ vi蘯ｿt bﾃ｡o cﾃ｡o v盻・vﾄハ hﾃｳa Nh蘯ｭt B蘯｣n." },
      { jp: "縺薙・蝠城｡後↓縺､縺阪∬ｩｱ縺怜粋縺・∪縺励ｇ縺・・, vn: "Hﾃ｣y cﾃｹng th蘯｣o lu蘯ｭn v盻・v蘯･n ﾄ黛ｻ・nﾃy." }
    ],
    quiz: {
      sentence: "蟆・擂縺ｮ螟｢________縲√せ繝斐・繝√ｒ縺励∪縺吶・,
      answer: "縺ｫ縺､縺・※",
      hint: "V盻・(ch盻ｧ ﾄ黛ｻ・bﾃi phﾃ｡t bi盻ブ)",
      translation: "Tﾃｴi s蘯ｽ thuy蘯ｿt trﾃｬnh v盻・ﾆｰ盻嫩 mﾆ｡ trong tﾆｰﾆ｡ng lai."
    }
  },
  {
    id: 22, unit: 3,
    pattern: "縺ｫ髢｢縺・縺ｦ)",
    meaning: "Liﾃｪn quan ﾄ黛ｺｿn... / V盻・..",
    explanation: "Cﾃ｡ch nﾃｳi trang tr盻肱g hﾆ｡n c盻ｧa 縺ｫ縺､縺・※.",
    examples: [
      { jp: "縺薙・莠倶ｻｶ縺ｫ髢｢縺励※縲∵眠縺励＞諠・ｱ縺悟・繧翫∪縺励◆縲・, vn: "ﾄ静｣ cﾃｳ thﾃｴng tin m盻嬖 liﾃｪn quan ﾄ黛ｺｿn v盻･ ﾃ｡n nﾃy." },
      { jp: "迺ｰ蠅・撫鬘後↓髢｢縺吶ｋ譛ｬ繧定ｪｭ繧薙□縲・, vn: "Tﾃｴi ﾄ妥｣ ﾄ黛ｻ皇 m盻冲 cu盻創 sﾃ｡ch liﾃｪn quan ﾄ黛ｺｿn v蘯･n ﾄ黛ｻ・mﾃｴi trﾆｰ盻拵g." }
    ],
    quiz: {
      sentence: "縺薙・莉ｶ________縺ｯ縲∫樟蝨ｨ隱ｿ譟ｻ荳ｭ縺ｧ縺吶・,
      answer: "縺ｫ髢｢縺励※",
      hint: "Liﾃｪn quan ﾄ黛ｺｿn (cﾃ｡ch nﾃｳi trang tr盻肱g)",
      translation: "Liﾃｪn quan ﾄ黛ｺｿn v盻･ vi盻㌘ nﾃy, hi盻㌻ chﾃｺng tﾃｴi ﾄ疎ng ﾄ訴盻「 tra."
    }
  },
  {
    id: 23, unit: 3,
    pattern: "縺ｫ豈斐∋(縺ｦ)",
    meaning: "So v盻嬖...",
    explanation: "Dﾃｹng ﾄ黛ｻ・so sﾃ｡nh hai s盻ｱ v蘯ｭt, s盻ｱ vi盻㌘.",
    examples: [
      { jp: "莉雁ｹｴ縺ｯ蜴ｻ蟷ｴ縺ｫ豈斐∋縺ｦ縲・岑縺ｮ譌･縺悟､壹＞縲・, vn: "Nﾄノ nay nhi盻「 ngﾃy mﾆｰa hﾆ｡n so v盻嬖 nﾄノ ngoﾃ｡i." },
      { jp: "蜈・↓豈斐∋縲∝ｼ溘・繧医￥蜍牙ｼｷ縺吶ｋ縲・, vn: "So v盻嬖 anh trai thﾃｬ ngﾆｰ盻拱 em chﾄノ h盻皇 hﾆ｡n." }
    ],
    quiz: {
      sentence: "譚ｱ莠ｬ________縲∫ｧ√・逕ｺ縺ｯ髱吶°縺縲・,
      answer: "縺ｫ豈斐∋縺ｦ",
      hint: "So v盻嬖",
      translation: "So v盻嬖 Tokyo thﾃｬ th盻・tr蘯･n c盻ｧa tﾃｴi yﾃｪn tﾄｩnh hﾆ｡n."
    }
  },
  {
    id: 24, unit: 3,
    pattern: "縺ｫ蜉縺・縺ｦ)",
    meaning: "Thﾃｪm vﾃo ﾄ妥ｳ / Khﾃｴng ch盻・.. mﾃ cﾃｲn...",
    explanation: "B盻・sung thﾃｪm m盻冲 y蘯ｿu t盻・khﾃ｡c vﾃo y蘯ｿu t盻・ﾄ妥｣ cﾃｳ s蘯ｵn.",
    examples: [
      { jp: "蠖ｼ縺ｯ闍ｱ隱槭↓蜉縺医※縲∵律譛ｬ隱槭ｂ隧ｱ縺帙ｋ縲・, vn: "Anh 蘯･y khﾃｴng ch盻・nﾃｳi ﾄ柁ｰ盻｣c ti蘯ｿng Anh mﾃ cﾃｲn nﾃｳi ﾄ柁ｰ盻｣c ti蘯ｿng Nh蘯ｭt." },
      { jp: "螟ｧ髮ｨ縺ｫ蜉縺医※縲・｢ｨ繧ょｼｷ縺上↑縺｣縺ｦ縺阪◆縲・, vn: "Thﾃｪm vﾃo mﾆｰa l盻嬾, giﾃｳ cﾅｩng b蘯ｯt ﾄ黛ｺｧu th盻品 m蘯｡nh." }
    ],
    quiz: {
      sentence: "辭ｱ縺後≠繧九・________縲∝諜繧ょ・縺ｾ縺吶・,
      answer: "縺ｫ蜉縺医※",
      hint: "Thﾃｪm vﾃo ﾄ妥ｳ / Khﾃｴng ch盻・.. mﾃ cﾃｲn",
      translation: "Khﾃｴng ch盻・b盻・s盻奏 mﾃ tﾃｴi cﾃｲn b盻・ho."
    }
  },
  {
    id: 25, unit: 3,
    pattern: "縺ｫ蟇ｾ縺・縺ｦ)",
    meaning: "ﾄ雪ｻ訴 v盻嬖 / Trﾃ｡i ngﾆｰ盻｣c v盻嬖...",
    explanation: "Th盻・hi盻㌻ thﾃ｡i ﾄ黛ｻ・hﾆｰ盻嬾g t盻嬖 m盻冲 ﾄ黛ｻ訴 tﾆｰ盻｣ng, ho蘯ｷc s盻ｱ so sﾃ｡nh ﾄ黛ｻ訴 l蘯ｭp gi盻ｯa hai s盻ｱ v蘯ｭt.",
    examples: [
      { jp: "縺雁ｮ｢讒倥↓蟇ｾ縺励※縲∝､ｱ遉ｼ縺ｪ縺薙→繧偵＠縺ｦ縺ｯ縺・￠縺ｪ縺・・, vn: "Khﾃｴng ﾄ柁ｰ盻｣c lﾃm ﾄ訴盻「 th蘯･t l盻・ﾄ黛ｻ訴 v盻嬖 khﾃ｡ch hﾃng." },
      { jp: "豢ｻ逋ｺ縺ｪ蟋峨↓蟇ｾ縺励※縲∝ｦｹ縺ｯ縺翫→縺ｪ縺励＞縲・, vn: "Trﾃ｡i ngﾆｰ盻｣c v盻嬖 ngﾆｰ盻拱 ch盻・ho蘯｡t bﾃ｡t, cﾃｴ em gﾃ｡i r蘯･t tr蘯ｧm tﾃｭnh." }
    ],
    quiz: {
      sentence: "逶ｮ荳翫・莠ｺ________縺ｯ縲∵噴隱槭ｒ菴ｿ縺・↑縺輔＞縲・,
      answer: "縺ｫ蟇ｾ縺励※",
      hint: "ﾄ雪ｻ訴 v盻嬖 (thﾃ｡i ﾄ黛ｻ・hﾆｰ盻嬾g t盻嬖 ai ﾄ妥ｳ)",
      translation: "ﾄ雪ｻ訴 v盻嬖 ngﾆｰ盻拱 b盻・trﾃｪn thﾃｬ hﾃ｣y dﾃｹng kﾃｭnh ng盻ｯ."
    }
  },
  {
    id: 26, unit: 3,
    pattern: "縺溘・縺ｫ",
    meaning: "M盻擁 khi / C盻ｩ m盻擁 l蘯ｧn...",
    explanation: "C盻ｩ m盻擁 l蘯ｧn hﾃnh ﾄ黛ｻ冢g phﾃｭa trﾆｰ盻嫩 x蘯｣y ra thﾃｬ luﾃｴn luﾃｴn kﾃｩo theo hﾃnh ﾄ黛ｻ冢g phﾃｭa sau.",
    examples: [
      { jp: "縺薙・譖ｲ繧定◇縺上◆縺ｳ縺ｫ縲∝ｭ蝉ｾ帙・縺薙ｍ繧呈昴＞蜃ｺ縺吶・, vn: "M盻擁 khi nghe bﾃi hﾃ｡t nﾃy, tﾃｴi l蘯｡i nh盻・v盻・thu盻・nh盻・" },
      { jp: "譌・｡後↓陦後￥縺溘・縺ｫ縲√♀蝨溽肇繧定ｲｷ縺｣縺ｦ縺上ｋ縲・, vn: "C盻ｩ m盻擁 l蘯ｧn ﾄ訴 du l盻議h lﾃ tﾃｴi l蘯｡i mua quﾃ lﾆｰu ni盻㍊ v盻・" }
    ],
    quiz: {
      sentence: "蠖ｼ縺ｫ莨壹≧________縲∬・縺後ラ繧ｭ繝峨く縺吶ｋ縲・,
      answer: "縺溘・縺ｫ",
      hint: "M盻擁 khi / C盻ｩ m盻擁 l蘯ｧn",
      translation: "M盻擁 khi g蘯ｷp anh 蘯･y, tim tﾃｴi l蘯｡i ﾄ黛ｺｭp r盻冢 rﾃng."
    }
  },
  {
    id: 27, unit: 3,
    pattern: "縺溘→縺医懊※繧・,
    meaning: "Cho dﾃｹ... thﾃｬ cﾅｩng...",
    explanation: "ﾄ脆ｰa ra m盻冲 gi蘯｣ ﾄ黛ｻ杵h ngh盻議h lﾃｽ.",
    examples: [
      { jp: "縺溘→縺磯岑縺碁剄縺｣縺ｦ繧ゅ∵・譌･縺ｮ隧ｦ蜷医・陦後ｏ繧後∪縺吶・, vn: "Cho dﾃｹ ngﾃy mai tr盻拱 cﾃｳ mﾆｰa thﾃｬ tr蘯ｭn ﾄ黛ｺ･u v蘯ｫn s蘯ｽ di盻・ ra." },
      { jp: "縺溘→縺郁ｦｪ縺ｫ蜿榊ｯｾ縺輔ｌ縺ｦ繧ゅ∫蕗蟄ｦ縺励◆縺・・, vn: "Cho dﾃｹ cﾃｳ b盻・b盻・m蘯ｹ ph蘯｣n ﾄ黛ｻ訴 thﾃｬ tﾃｴi v蘯ｫn mu盻創 ﾄ訴 du h盻皇." }
    ],
    quiz: {
      sentence: "________螟ｱ謨励＠縺ｦ繧ゅ√∪縺滓倦謌ｦ縺吶ｌ縺ｰ縺・＞縲・,
      answer: "縺溘→縺・,
      hint: "ﾄ進 c蘯ｷp v盻嬖 縲懊※繧・(cho dﾃｹ)",
      translation: "Cho dﾃｹ cﾃｳ th蘯･t b蘯｡i thﾃｬ th盻ｭ thﾃ｡ch l蘯｡i lﾃ ﾄ柁ｰ盻｣c."
    }
  },
  {
    id: 28, unit: 3,
    pattern: "縺｣縺ｦ",
    meaning: "Nﾃｳi lﾃ / Nghe nﾃｳi lﾃ / Tﾃｪn lﾃ...",
    explanation: "Cﾃ｡ch nﾃｳi thﾃ｢n m蘯ｭt c盻ｧa 縺ｨ (trﾃｭch d蘯ｫn), 縺ｨ縺・≧ (g盻絞 lﾃ) ho蘯ｷc 縺ｯ (ch盻ｧ ﾄ黛ｻ・.",
    examples: [
      { jp: "逕ｰ荳ｭ縺輔ｓ縺｣縺ｦ莠ｺ縲∫衍縺｣縺ｦ繧具ｼ・, vn: "B蘯｡n cﾃｳ bi蘯ｿt ngﾆｰ盻拱 tﾃｪn lﾃ Tanaka khﾃｴng?" },
      { jp: "譏取律縺ｯ莨代∩縺縺｣縺ｦ縲・, vn: "Nghe nﾃｳi ngﾃy mai ﾄ柁ｰ盻｣c ngh盻・ﾄ黛ｺ･y." }
    ],
    quiz: {
      sentence: "縺ゅ◎縺薙↓縺ゅｋ蠎励∫ｾ主袖縺励＞繧薙□________縲・,
      answer: "縺｣縺ｦ",
      hint: "Nghe nﾃｳi lﾃ (cﾃ｡ch nﾃｳi thﾃ｢n m蘯ｭt)",
      translation: "Quﾃ｡n 盻・ﾄ黛ｺｱng kia, nghe nﾃｳi ngon l蘯ｯm ﾄ黛ｺ･y."
    }
  },

  // --- UNIT 4 ---
  {
    id: 29, unit: 4,
    pattern: "縺上ｉ縺・/ 縺舌ｉ縺・,
    meaning: "ﾄ雪ｺｿn m盻ｩc / Kho蘯｣ng ch盻ｫng / C盻｡ nhﾆｰ",
    explanation: "Ch盻・m盻ｩc ﾄ黛ｻ・c盻ｧa s盻ｱ vi盻㌘, thﾆｰ盻拵g lﾃ m盻ｩc ﾄ黛ｻ・nh蘯ｹ, t盻訴 thi盻ブ, ho蘯ｷc ﾄ柁ｰa ra vﾃｭ d盻･ so sﾃ｡nh ﾄ黛ｺｿn m盻ｩc ﾄ黛ｻ・nﾃo ﾄ妥ｳ.",
    examples: [
      { jp: "豕｣縺阪◆縺・￥繧峨＞逞帙＞縲・, vn: "ﾄ紳u ﾄ黛ｺｿn m盻ｩc mu盻創 khﾃｳc." },
      { jp: "縺ｲ繧峨′縺ｪ縺舌ｉ縺・嶌縺代ｋ縲・, vn: "C盻｡ nhﾆｰ hiragana thﾃｬ tﾃｴi vi蘯ｿt ﾄ柁ｰ盻｣c." }
    ],
    quiz: {
      sentence: "繝代Φ縺御ｸ縺､雋ｷ縺医ｋ________縺ｮ縺企≡縺励°縺ｪ縺・・,
      answer: "縺上ｉ縺・,
      hint: "ﾄ雪ｺｿn m盻ｩc / Kho蘯｣ng (cﾃｳ th盻・dﾃｹng 縺上ｉ縺・ho蘯ｷc 縺舌ｉ縺・",
      translation: "Tﾃｴi ch盻・cﾃｳ ti盻］ ﾄ黛ｻｧ ﾄ黛ｺｿn m盻ｩc mua ﾄ柁ｰ盻｣c m盻冲 cﾃ｡i bﾃ｡nh mﾃｬ."
    }
  },
  {
    id: 30, unit: 4,
    pattern: "縺上ｉ縺・↑繧・/ 縺舌ｉ縺・↑繧・,
    meaning: "N蘯ｿu ph蘯｣i... thﾃｬ thﾃ... cﾃｲn hﾆ｡n",
    explanation: "So sﾃ｡nh hai vi盻㌘ t盻妬 t盻・ thﾃ ch盻肱 v蘯ｿ sau cﾃｲn hﾆ｡n ph蘯｣i lﾃm v蘯ｿ trﾆｰ盻嫩.",
    examples: [
      { jp: "縺ゅ＞縺､縺ｫ隰昴ｋ縺上ｉ縺・↑繧峨∵ｭｻ繧薙□縺ｻ縺・′縺ｾ縺励□縲・, vn: "N蘯ｿu ph蘯｣i xin l盻擁 h蘯ｯn ta thﾃｬ tﾃｴi thﾃ ch蘯ｿt cﾃｲn hﾆ｡n." },
      { jp: "騾比ｸｭ縺ｧ繧・ａ繧九￥繧峨＞縺ｪ繧峨∵怙蛻昴°繧峨ｄ繧峨↑縺・・, vn: "N蘯ｿu gi盻ｯa ch盻ｫng b盻・cu盻冂 thﾃｬ thﾃ khﾃｴng lﾃm t盻ｫ ﾄ黛ｺｧu." }
    ],
    quiz: {
      sentence: "蠖ｼ縺ｨ邨仙ｩ壹☆繧祇_______縲∫峡霄ｫ縺ｮ縺ｻ縺・′縺・＞縲・,
      answer: "縺上ｉ縺・↑繧・,
      hint: "N蘯ｿu ph蘯｣i... thﾃｬ thﾃ...",
      translation: "N蘯ｿu ph蘯｣i k蘯ｿt hﾃｴn v盻嬖 anh ta thﾃｬ tﾃｴi thﾃ ﾄ黛ｻ冂 thﾃ｢n cﾃｲn hﾆ｡n."
    }
  },
  {
    id: 31, unit: 4,
    pattern: "縺・■縺ｫ",
    meaning: "Trong lﾃｺc / Nhﾃ｢n lﾃｺc",
    explanation: "Tranh th盻ｧ lﾃm vi盻㌘ gﾃｬ ﾄ妥ｳ khi tr蘯｡ng thﾃ｡i chﾆｰa thay ﾄ黛ｻ品, ho蘯ｷc s盻ｱ bi蘯ｿn ﾄ黛ｻ品 di盻・ ra trong khi ﾄ疎ng lﾃm m盻冲 hﾃnh ﾄ黛ｻ冢g khﾃ｡c.",
    examples: [
      { jp: "繧ｹ繝ｼ繝励′貂ｩ縺九＞縺・■縺ｫ縲・｣ｲ繧薙〒縺上□縺輔＞縲・, vn: "Hﾃ｣y u盻創g nhﾃ｢n lﾃｺc sﾃｺp cﾃｲn nﾃｳng." },
      { jp: "譌･譛ｬ縺ｫ縺・ｋ縺・■縺ｫ縲∝ｯ悟｣ｫ螻ｱ縺ｫ逋ｻ繧翫◆縺・・, vn: "Nhﾃ｢n lﾃｺc cﾃｲn 盻・Nh蘯ｭt, tﾃｴi mu盻創 leo nﾃｺi Phﾃｺ Sﾄｩ." }
    ],
    quiz: {
      sentence: "蠢倥ｌ縺ｪ縺Ю_______縲√Γ繝｢縺励※縺翫％縺・・,
      answer: "縺・■縺ｫ",
      hint: "Trong lﾃｺc (chﾆｰa quﾃｪn)",
      translation: "Nhﾃ｢n lﾃｺc chﾆｰa quﾃｪn, hﾃ｣y ghi chﾃｺ l蘯｡i."
    }
  },
  {
    id: 32, unit: 4,
    pattern: "繧剃ｸｭ蠢・↓ / 縺ｨ縺励※ / 縺ｫ縺励※",
    meaning: "L蘯･y... lﾃm trung tﾃ｢m / T蘯ｭp trung vﾃo...",
    explanation: "Ch盻・ra m盻冲 th盻ｩ/ngﾆｰ盻拱 lﾃm trung tﾃ｢m, tr盻肱g tﾃ｢m c盻ｧa m盻冲 ph蘯｡m vi, hi盻㌻ tﾆｰ盻｣ng.",
    examples: [
      { jp: "蝨ｰ逅・・螟ｪ髯ｽ繧剃ｸｭ蠢・→縺励※蝗槭▲縺ｦ縺・ｋ縲・, vn: "Trﾃ｡i ﾄ黛ｺ･t quay quanh m蘯ｷt tr盻拱 (l蘯･y m蘯ｷt tr盻拱 lﾃm trung tﾃ｢m)." },
      { jp: "縺薙・蠎励・闍･縺・･ｳ諤ｧ繧剃ｸｭ蠢・↓莠ｺ豌励′縺ゅｋ縲・, vn: "Quﾃ｡n nﾃy ﾄ柁ｰ盻｣c yﾃｪu thﾃｭch, ﾄ黛ｺｷc bi盻㏄ t蘯ｭp trung vﾃo ph盻･ n盻ｯ tr蘯ｻ." }
    ],
    quiz: {
      sentence: "譁・ｳ廟_______縲∵律譛ｬ隱槭ｒ蜍牙ｼｷ縺吶ｋ縲・,
      answer: "繧剃ｸｭ蠢・↓",
      hint: "L蘯･y... lﾃm trung tﾃ｢m",
      translation: "Tﾃｴi h盻皇 ti蘯ｿng Nh蘯ｭt t蘯ｭp trung vﾃo ng盻ｯ phﾃ｡p."
    }
  },
  {
    id: 33, unit: 4,
    pattern: "繧偵・縺倥ａ",
    meaning: "Trﾆｰ盻嫩 tiﾃｪn ph蘯｣i k盻・ﾄ黛ｺｿn / Tiﾃｪu bi盻ブ lﾃ...",
    explanation: "ﾄ脆ｰa ra m盻冲 vﾃｭ d盻･ tiﾃｪu bi盻ブ nh蘯･t trong s盻・nhi盻「 th盻ｩ cﾃｹng lo蘯｡i.",
    examples: [
      { jp: "譬｡髟ｷ蜈育函繧偵・縺倥ａ縲∝・逕滓婿縲∝､ｧ螟峨♀荳冶ｩｱ縺ｫ縺ｪ繧翫∪縺励◆縲・, vn: "Xin g盻ｭi l盻拱 c蘯｣m ﾆ｡n ﾄ黛ｺｿn cﾃ｡c th蘯ｧy cﾃｴ, trﾆｰ盻嫩 tiﾃｪn lﾃ th蘯ｧy hi盻㎡ trﾆｰ盻殤g." },
      { jp: "譌･譛ｬ縺ｫ縺ｯ蟇ｿ蜿ｸ繧偵・縺倥ａ縲∫ｾ主袖縺励＞鬟溘∋迚ｩ縺後◆縺上＆繧薙≠繧九・, vn: "盻・Nh蘯ｭt B蘯｣n cﾃｳ r蘯･t nhi盻「 ﾄ黛ｻ・ﾄハ ngon, tiﾃｪu bi盻ブ lﾃ Sushi." }
    ],
    quiz: {
      sentence: "遉ｾ髟ｷ________縲∫､ｾ蜩｡縺ｮ逧・ｧ倥↓縺顔､ｼ繧堤筏縺嶺ｸ翫￡縺ｾ縺吶・,
      answer: "繧偵・縺倥ａ",
      hint: "Tiﾃｪu bi盻ブ lﾃ... / Trﾆｰ盻嫩 tiﾃｪn lﾃ...",
      translation: "Xin g盻ｭi l盻拱 c蘯｣m ﾆ｡n ﾄ黛ｺｿn m盻絞 ngﾆｰ盻拱 trong cﾃｴng ty, trﾆｰ盻嫩 tiﾃｪn lﾃ giﾃ｡m ﾄ黛ｻ祖."
    }
  },
  {
    id: 34, unit: 4,
    pattern: "縺ｫ蟇ｾ縺・縺ｦ)",
    meaning: "Trﾃ｡i ngﾆｰ盻｣c v盻嬖 / ﾄ雪ｻ訴 l蘯ｭp v盻嬖",
    explanation: "Dﾃｹng ﾄ黛ｻ・so sﾃ｡nh s盻ｱ khﾃ｡c nhau rﾃｵ r盻㏄ gi盻ｯa hai s盻ｱ v蘯ｭt, s盻ｱ vi盻㌘ (khﾃ｡c v盻嬖 ﾃｽ nghﾄｩa 'ﾄ雪ｻ訴 v盻嬖' 盻・Unit 3).",
    examples: [
      { jp: "蜈・′繧ｹ繝昴・繝・′蠕玲э縺ｪ縺ｮ縺ｫ蟇ｾ縺励※縲∝ｼ溘・蜍牙ｼｷ縺悟ｾ玲э縺縲・, vn: "Trﾃ｡i ngﾆｰ盻｣c v盻嬖 anh trai gi盻淑 th盻・thao, ngﾆｰ盻拱 em l蘯｡i gi盻淑 h盻皇." },
      { jp: "譏ｨ譌･縺ｯ螟ｧ髮ｨ縺縺｣縺溘・縺ｫ蟇ｾ縺励※縲∽ｻ頑律縺ｯ譎ｴ繧後※縺・ｋ縲・, vn: "Trﾃ｡i ngﾆｰ盻｣c v盻嬖 hﾃｴm qua mﾆｰa l盻嬾, hﾃｴm nay tr盻拱 n蘯ｯng." }
    ],
    quiz: {
      sentence: "譚ｱ莠ｬ縺瑚ｳ代ｄ縺九↑縺ｮ________縲∫ｧ√・逕ｺ縺ｯ髱吶°縺縲・,
      answer: "縺ｫ蟇ｾ縺励※",
      hint: "Trﾃ｡i ngﾆｰ盻｣c v盻嬖 (So sﾃ｡nh 2 ch盻ｧ th盻・",
      translation: "Trﾃ｡i ngﾆｰ盻｣c v盻嬖 Tokyo nﾃ｡o nhi盻㏄, th盻・tr蘯･n c盻ｧa tﾃｴi r蘯･t yﾃｪn tﾄｩnh."
    }
  },
  {
    id: 35, unit: 4,
    pattern: "縺ｫ縺翫＞縺ｦ",
    meaning: "T蘯｡i / 盻・/ Trong (lﾄｩnh v盻ｱc)...",
    explanation: "Dﾃｹng ﾄ黛ｻ・ch盻・ﾄ黛ｻ蟻 ﾄ訴盻ノ, th盻拱 ﾄ黛ｺ｡i, lﾄｩnh v盻ｱc x蘯｣y ra s盻ｱ vi盻㌘ (tﾆｰﾆ｡ng ﾄ柁ｰﾆ｡ng v盻嬖 縺ｧ nhﾆｰng mang tﾃｭnh trang tr盻肱g hﾆ｡n).",
    examples: [
      { jp: "蜈･蟄ｦ蠑上・菴楢ご鬢ｨ縺ｫ縺翫＞縺ｦ陦後ｏ繧後ｋ縲・, vn: "L盻・nh蘯ｭp h盻皇 s蘯ｽ ﾄ柁ｰ盻｣c t盻・ch盻ｩc t蘯｡i nhﾃ thi ﾄ黛ｺ･u." },
      { jp: "謨呵ご縺ｫ縺翫＞縺ｦ縲∝ｮｶ蠎ｭ縺ｮ蠖ｹ蜑ｲ縺ｯ螟ｧ縺阪＞縲・, vn: "Trong lﾄｩnh v盻ｱc giﾃ｡o d盻･c, vai trﾃｲ c盻ｧa gia ﾄ妥ｬnh lﾃ r蘯･t l盻嬾." }
    ],
    quiz: {
      sentence: "莨夊ｭｰ縺ｯ隨ｬ荳莨夊ｭｰ螳､________陦後ｏ繧後∪縺吶・,
      answer: "縺ｫ縺翫＞縺ｦ",
      hint: "T蘯｡i (cﾃ｡ch nﾃｳi trang tr盻肱g c盻ｧa 縺ｧ)",
      translation: "Cu盻冂 h盻膏 s蘯ｽ ﾄ柁ｰ盻｣c t盻・ch盻ｩc t蘯｡i phﾃｲng h盻膏 s盻・1."
    }
  },
  {
    id: 36, unit: 4,
    pattern: "縺ｫ繧上◆縺｣縺ｦ / 繧上◆繧・,
    meaning: "Su盻奏 / Tr蘯｣i dﾃi (th盻拱 gian, khﾃｴng gian)",
    explanation: "Ch盻・ph蘯｡m vi r盻冢g l盻嬾 c盻ｧa khﾃｴng gian ho蘯ｷc kho蘯｣ng th盻拱 gian kﾃｩo dﾃi c盻ｧa m盻冲 s盻ｱ vi盻㌘.",
    examples: [
      { jp: "莨夊ｭｰ縺ｯ・墓凾髢薙↓繧上◆縺｣縺ｦ陦後ｏ繧後◆縲・, vn: "Cu盻冂 h盻膏 ﾄ妥｣ di盻・ ra su盻奏 5 ti蘯ｿng ﾄ黛ｻ渡g h盻・" },
      { jp: "蠖ｼ縺ｯ譌･譛ｬ蜈ｨ蝗ｽ縺ｫ繧上◆縺｣縺ｦ縲∬ｪｿ譟ｻ繧定｡後▲縺溘・, vn: "Anh 蘯･y ﾄ妥｣ ti蘯ｿn hﾃnh ﾄ訴盻「 tra tr蘯｣i dﾃi trﾃｪn toﾃn qu盻祖." }
    ],
    quiz: {
      sentence: "・馴ｱ髢点_______縲・岑縺碁剄繧顔ｶ壹＞縺溘・,
      answer: "縺ｫ繧上◆縺｣縺ｦ",
      hint: "Tr蘯｣i su盻奏 / Kﾃｩo dﾃi su盻奏 (th盻拱 gian)",
      translation: "Mﾆｰa ﾄ妥｣ rﾆ｡i liﾃｪn t盻･c su盻奏 3 tu蘯ｧn."
    }
  },
  {
    id: 37, unit: 4,
    pattern: "縺ｫ縺ｨ縺｣縺ｦ",
    meaning: "ﾄ雪ｻ訴 v盻嬖... (ﾄ妥｡nh giﾃ｡, quan ﾄ訴盻ノ)",
    explanation: "ﾄ雪ｻｩng t盻ｫ gﾃｳc ﾄ黛ｻ・ l蘯ｭp trﾆｰ盻拵g c盻ｧa ngﾆｰ盻拱/v蘯ｭt ﾄ妥ｳ ﾄ黛ｻ・ﾄ柁ｰa ra ﾄ妥｡nh giﾃ｡, nh蘯ｭn ﾄ黛ｻ杵h.",
    examples: [
      { jp: "遘√↓縺ｨ縺｣縺ｦ縲∝ｮｶ譌上・荳逡ｪ螟ｧ蛻・↑繧ゅ・縺ｧ縺吶・, vn: "ﾄ雪ｻ訴 v盻嬖 tﾃｴi, gia ﾄ妥ｬnh lﾃ ﾄ訴盻「 quan tr盻肱g nh蘯･t." },
      { jp: "縺薙・貍｢蟄励・螟門嵜莠ｺ縺ｫ縺ｨ縺｣縺ｦ髮｣縺励＞縲・, vn: "Ch盻ｯ Hﾃ｡n nﾃy khﾃｳ ﾄ黛ｻ訴 v盻嬖 ngﾆｰ盻拱 nﾆｰ盻嫩 ngoﾃi." }
    ],
    quiz: {
      sentence: "蟄蝉ｾ媽_______縲・♀縺ｳ縺ｯ縺ｨ縺ｦ繧る㍾隕√□縲・,
      answer: "縺ｫ縺ｨ縺｣縺ｦ",
      hint: "ﾄ雪ｻ訴 v盻嬖 (gﾃｳc ﾄ黛ｻ・ﾄ妥｡nh giﾃ｡)",
      translation: "ﾄ雪ｻ訴 v盻嬖 tr蘯ｻ em, vui chﾆ｡i lﾃ ﾄ訴盻「 r蘯･t quan tr盻肱g."
    }
  },
  {
    id: 38, unit: 4,
    pattern: "縺ｫ繧医ｋ / 繧医ｊ / 繧医▲縺ｦ / 繧医▲縺ｦ縺ｯ",
    meaning: "Tﾃｹy vﾃo / Do / B盻殃 / B蘯ｱng cﾃ｡ch",
    explanation: "ﾄ脆ｰa ra phﾆｰﾆ｡ng phﾃ｡p, nguyﾃｪn nhﾃ｢n, ngﾆｰ盻拱 th盻ｱc hi盻㌻ (b盻・ﾄ黛ｻ冢g) ho蘯ｷc ch盻・s盻ｱ khﾃ｡c bi盻㏄ tﾃｹy theo t盻ｫng trﾆｰ盻拵g h盻｣p.",
    examples: [
      { jp: "莠ｺ縺ｫ繧医▲縺ｦ縲∬・∴譁ｹ縺碁＆縺・・, vn: "M盻擁 ngﾆｰ盻拱 cﾃｳ cﾃ｡ch suy nghﾄｩ khﾃ｡c nhau (tﾃｹy vﾃo)." },
      { jp: "繧､繝ｳ繧ｿ繝ｼ繝阪ャ繝医↓繧医▲縺ｦ縲∽ｸ也阜荳ｭ縺ｮ諠・ｱ繧堤衍繧九％縺ｨ縺後〒縺阪ｋ縲・, vn: "B蘯ｱng cﾃ｡ch s盻ｭ d盻･ng Internet, cﾃｳ th盻・bi蘯ｿt ﾄ柁ｰ盻｣c thﾃｴng tin trﾃｪn toﾃn th蘯ｿ gi盻嬖." }
    ],
    quiz: {
      sentence: "譁・喧縺ｯ縲∝嵜________逡ｰ縺ｪ繧翫∪縺吶・,
      answer: "縺ｫ繧医▲縺ｦ",
      hint: "Tﾃｹy vﾃo (ch盻・s盻ｱ khﾃ｡c bi盻㏄)",
      translation: "Vﾄハ hﾃｳa thﾃｬ khﾃ｡c bi盻㏄ tﾃｹy vﾃo t盻ｫng qu盻祖 gia."
    }
  },

  // --- UNIT 5 ---
  {
    id: 39, unit: 5,
    pattern: "縺ｫ驕輔＞縺ｪ縺・,
    meaning: "Ch蘯ｯc ch蘯ｯn lﾃ / Khﾃｴng th盻・sai ﾄ柁ｰ盻｣c",
    explanation: "Dﾃｹng ﾄ黛ｻ・ph盻熟g ﾄ双ﾃ｡n m盻冲 cﾃ｡ch ch蘯ｯc ch蘯ｯn v盻・m盻冲 s盻ｱ vi盻㌘ nﾃo ﾄ妥ｳ d盻ｱa trﾃｪn cﾄハ c盻ｩ.",
    examples: [
      { jp: "骰ｵ縺後↑縺・ゅ←縺薙°縺ｫ關ｽ縺ｨ縺励◆縺ｫ驕輔＞縺ｪ縺・・, vn: "Khﾃｴng th蘯･y chﾃｬa khﾃｳa. Ch蘯ｯc ch蘯ｯn lﾃ ﾄ妥｡nh rﾆ｡i 盻・ﾄ妥｢u r盻妬." },
      { jp: "螟憺≦縺上∪縺ｧ髮ｻ豌励′縺､縺・※縺・ｋ縺九ｉ縲∝ｽｼ縺ｯ縺・ｋ縺ｫ驕輔＞縺ｪ縺・・, vn: "ﾄ静ｨn sﾃ｡ng ﾄ黛ｺｿn t蘯ｭn khuya nﾃｪn anh 蘯･y ch蘯ｯc ch蘯ｯn cﾃｳ 盻・ﾄ妥ｳ." }
    ],
    quiz: {
      sentence: "縺ゅｓ縺ｪ縺ｫ邱ｴ鄙偵＠縺溘・縺縺九ｉ縲∵・譌･縺ｯ蜍昴※繧祇_______縲・,
      answer: "縺ｫ驕輔＞縺ｪ縺・,
      accepts: ["縺ｫ縺｡縺後＞縺ｪ縺・],
      hint: "Ch蘯ｯc ch蘯ｯn lﾃ (Kanji: 驕輔＞縺ｪ縺・",
      translation: "ﾄ静｣ t蘯ｭp luy盻㌻ ﾄ黛ｺｿn m盻ｩc ﾄ妥ｳ thﾃｬ ngﾃy mai ch蘯ｯc ch蘯ｯn s蘯ｽ th蘯ｯng."
    }
  },
  {
    id: 40, unit: 5,
    pattern: "縺ｨ縺ｯ / 縺ｨ縺・≧縺ｮ縺ｯ",
    meaning: "Nghﾄｩa lﾃ / Cﾃ｡i g盻絞 lﾃ...",
    explanation: "Dﾃｹng ﾄ黛ｻ・ﾄ黛ｻ杵h nghﾄｩa, gi蘯｣i thﾃｭch ﾃｽ nghﾄｩa c盻ｧa m盻冲 t盻ｫ ho蘯ｷc m盻冲 khﾃ｡i ni盻㍊.",
    examples: [
      { jp: "繝・ず繧ｫ繝｡縺ｨ縺ｯ縲√ョ繧ｸ繧ｿ繝ｫ繧ｫ繝｡繝ｩ縺ｮ縺薙→縺ｧ縺吶・, vn: "Dejikame cﾃｳ nghﾄｩa lﾃ mﾃ｡y 蘯｣nh k盻ｹ thu蘯ｭt s盻・" },
      { jp: "縲後お繧ｳ縲阪→縺・≧縺ｮ縺ｯ縲∫腸蠅・↓縺・＞縺ｨ縺・≧縺薙→縺ｧ縺吶・, vn: "\"Eco\" nghﾄｩa lﾃ t盻奏 cho mﾃｴi trﾆｰ盻拵g." }
    ],
    quiz: {
      sentence: "繝代た繧ｳ繝ｳ________縲√ヱ繝ｼ繧ｽ繝翫Ν繧ｳ繝ｳ繝斐Η繝ｼ繧ｿ縺ｮ縺薙→縺縲・,
      answer: "縺ｨ縺ｯ",
      accepts: ["縺ｨ縺・≧縺ｮ縺ｯ", "縺｣縺ｦ縺・≧縺ｮ縺ｯ"],
      hint: "Nghﾄｩa lﾃ (gi蘯｣i thﾃｭch t盻ｫ v盻ｱng)",
      translation: "Pasokon nghﾄｩa lﾃ mﾃ｡y tﾃｭnh cﾃ｡ nhﾃ｢n."
    }
  },
  {
    id: 41, unit: 5,
    pattern: "縺溘→縺溘ｓ(縺ｫ)",
    meaning: "V盻ｫa m盻嬖... thﾃｬ ngay l蘯ｭp t盻ｩc",
    explanation: "Di盻・ t蘯｣ hﾃnh ﾄ黛ｻ冢g v蘯ｿ sau x蘯｣y ra g蘯ｧn nhﾆｰ ﾄ黛ｻ渡g th盻拱 ngay sau hﾃnh ﾄ黛ｻ冢g v蘯ｿ trﾆｰ盻嫩 (thﾆｰ盻拵g mang tﾃｭnh b蘯･t ng盻・.",
    examples: [
      { jp: "繝峨い繧帝幕縺代◆縺ｨ縺溘ｓ縲∫賢縺碁｣帙・蜃ｺ縺励※縺阪◆縲・, vn: "V盻ｫa m盻・c盻ｭa ra thﾃｬ con mﾃｨo phﾃｳng ra ngoﾃi." },
      { jp: "荳蜿｣鬟溘∋縺溘→縺溘ｓ縺ｫ縲∝瑞縺榊・縺励◆縲・, vn: "V盻ｫa m盻嬖 ﾄハ m盻冲 mi蘯ｿng thﾃｬ nﾃｴn ra ngay." }
    ],
    quiz: {
      sentence: "遶九■荳翫′縺｣________縲√ａ縺ｾ縺・′縺励◆縲・,
      answer: "縺溘→縺溘ｓ",
      accepts: ["縺溘→縺溘ｓ縺ｫ", "縺ｨ縺溘ｓ", "縺ｨ縺溘ｓ縺ｫ"],
      hint: "V盻ｫa m盻嬖... thﾃｬ",
      translation: "V盻ｫa m盻嬖 ﾄ黛ｻｩng lﾃｪn thﾃｬ b盻・chﾃｳng m蘯ｷt."
    }
  },
  {
    id: 42, unit: 5,
    pattern: "縺ｫ縺､繧・縺ｦ)",
    meaning: "Cﾃｹng v盻嬖... / Cﾃng... cﾃng...",
    explanation: "Ch盻・s盻ｱ thay ﾄ黛ｻ品 ﾄ黛ｻ渡g th盻拱: A thay ﾄ黛ｻ品 thﾃｬ B cﾅｩng thay ﾄ黛ｻ品 theo (thﾆｰ盻拵g dﾃｹng cho nh盻ｯng bi蘯ｿn ﾄ黛ｻ品 t盻ｱ nhiﾃｪn, d蘯ｧn d蘯ｧn).",
    examples: [
      { jp: "蟷ｴ繧偵→繧九↓縺､繧後※縲∫黄蠢倥ｌ縺後・縺ｩ縺上↑縺｣縺溘・, vn: "Cﾃｹng v盻嬖 tu盻品 tﾃ｡c, t蘯ｭt hay quﾃｪn cﾃng tr盻・nﾃｪn nghiﾃｪm tr盻肱g." },
      { jp: "逕ｺ縺檎匱螻輔☆繧九↓縺､繧後∬・辟ｶ縺悟ｰ代↑縺上↑縺｣縺溘・, vn: "Cﾃｹng v盻嬖 s盻ｱ phﾃ｡t tri盻ハ c盻ｧa th盻・tr蘯･n, thiﾃｪn nhiﾃｪn ngﾃy cﾃng ﾃｭt ﾄ訴." }
    ],
    quiz: {
      sentence: "謌宣聞縺吶ｋ________縲∬ｦｪ縺ｫ莨ｼ縺ｦ縺阪◆縲・,
      answer: "縺ｫ縺､繧後※",
      accepts: ["縺ｫ縺､繧・],
      hint: "Cﾃng... cﾃng (s盻ｱ thay ﾄ黛ｻ品 kﾃｩo theo)",
      translation: "Cﾃng l盻嬾 cﾃng gi盻創g b盻・m蘯ｹ."
    }
  },
  {
    id: 43, unit: 5,
    pattern: "縺ｫ縺励◆縺後▲縺ｦ / 縺励◆縺後＞",
    meaning: "Theo nhﾆｰ / Cﾃng... cﾃng...",
    explanation: "V盻ｫa cﾃｳ nghﾄｩa 'thu蘯ｭn theo, tuﾃ｢n theo' ch盻・th盻・quy t蘯ｯc, v盻ｫa cﾃｳ nghﾄｩa 'cﾃｹng v盻嬖 s盻ｱ thay ﾄ黛ｻ品' (gi盻創g 縺ｫ縺､繧後※).",
    examples: [
      { jp: "蜈育函縺ｮ謖・､ｺ縺ｫ縺励◆縺後▲縺ｦ縲∬｡悟虚縺励※縺上□縺輔＞縲・, vn: "Hﾃ｣y hﾃnh ﾄ黛ｻ冢g theo nhﾆｰ ch盻・th盻・c盻ｧa giﾃ｡o viﾃｪn." },
      { jp: "蛹励∈陦後￥縺ｫ縺励◆縺後＞縲∫ｴ・痩縺梧掠縺上↑繧九・, vn: "Cﾃng ﾄ訴 v盻・phﾃｭa B蘯ｯc thﾃｬ lﾃ｡ ﾄ黛ｻ・cﾃng cﾃｳ s盻嬶." }
    ],
    quiz: {
      sentence: "繝ｫ繝ｼ繝ｫ________縲√ご繝ｼ繝繧偵＠縺ｦ縺上□縺輔＞縲・,
      answer: "縺ｫ縺励◆縺後▲縺ｦ",
      accepts: ["縺ｫ蠕薙▲縺ｦ", "縺ｫ縺励◆縺後＞", "縺ｫ蠕薙＞"],
      hint: "Theo nhﾆｰ (tuﾃ｢n theo quy t蘯ｯc)",
      translation: "Hﾃ｣y chﾆ｡i game theo ﾄ妥ｺng lu蘯ｭt."
    }
  },
  {
    id: 44, unit: 5,
    pattern: "譛荳ｭ(縺ｫ)",
    meaning: "ﾄ静ｺng lﾃｺc ﾄ疎ng / Gi盻ｯa lﾃｺc",
    explanation: "Nh蘯･n m蘯｡nh th盻拱 ﾄ訴盻ノ hﾃnh ﾄ黛ｻ冢g ﾄ疎ng di盻・ ra cao trﾃo thﾃｬ cﾃｳ m盻冲 vi盻㌘ khﾃ｡c xen vﾃo (thﾆｰ盻拵g lﾃ gﾃ｢y c蘯｣n tr盻・.",
    examples: [
      { jp: "莨夊ｭｰ縺ｮ譛荳ｭ縺ｫ縲∵声蟶ｯ髮ｻ隧ｱ縺碁ｳｴ縺｣縺溘・, vn: "Gi盻ｯa lﾃｺc ﾄ疎ng h盻膏 thﾃｬ ﾄ訴盻㌻ tho蘯｡i reo." },
      { jp: "莉翫√＃鬟ｯ繧帝｣溘∋縺ｦ縺・ｋ譛荳ｭ縺縲・, vn: "Bﾃ｢y gi盻・tﾃｴi ﾄ疎ng ﾄハ cﾆ｡m." }
    ],
    quiz: {
      sentence: "繧ｷ繝｣繝ｯ繝ｼ繧呈ｵｴ縺ｳ縺ｦ縺・ｋ________縺ｫ縲∝ｮ｢縺梧擂縺溘・,
      answer: "譛荳ｭ",
      accepts: ["縺輔＞縺｡繧・≧"],
      hint: "ﾄ静ｺng lﾃｺc ﾄ疎ng (Kanji: 譛荳ｭ)",
      translation: "ﾄ静ｺng lﾃｺc ﾄ疎ng t蘯ｯm vﾃｲi sen thﾃｬ cﾃｳ khﾃ｡ch ﾄ黛ｺｿn."
    }
  },
  {
    id: 45, unit: 5,
    pattern: "縺ｦ縺九ｉ縺ｧ縺ｪ縺・→ / 縺ｪ縺代ｌ縺ｰ窶ｦ縺ｪ縺・,
    meaning: "N蘯ｿu chﾆｰa... thﾃｬ khﾃｴng th盻・..",
    explanation: "Di盻・ t蘯｣ ﾄ訴盻「 ki盻㌻ tiﾃｪn quy蘯ｿt: ph蘯｣i lﾃm vi盻㌘ A trﾆｰ盻嫩 thﾃｬ m盻嬖 cﾃｳ th盻・lﾃm vi盻㌘ B. V蘯ｿ sau luﾃｴn mang ﾃｽ nghﾄｩa ph盻ｧ ﾄ黛ｻ杵h.",
    examples: [
      { jp: "縺企≡繧呈鴛縺｣縺ｦ縺九ｉ縺ｧ縺ｪ縺・→縲∝膚蜩√ｒ蜿励￠蜿悶ｌ縺ｪ縺・・, vn: "N蘯ｿu chﾆｰa tr蘯｣ ti盻］ thﾃｬ khﾃｴng th盻・nh蘯ｭn hﾃng." },
      { jp: "隕ｪ縺ｨ逶ｸ隲・＠縺ｦ縺九ｉ縺ｧ縺ｪ縺代ｌ縺ｰ縲∵ｱｺ繧√ｉ繧後∪縺帙ｓ縲・, vn: "N蘯ｿu chﾆｰa bﾃn v盻嬖 b盻・m蘯ｹ thﾃｬ tﾃｴi khﾃｴng th盻・quy蘯ｿt ﾄ黛ｻ杵h ﾄ柁ｰ盻｣c." }
    ],
    quiz: {
      sentence: "謇九ｒ豢励▲________縲√＃鬟ｯ繧帝｣溘∋縺ｦ縺ｯ縺・￠縺ｾ縺帙ｓ縲・,
      answer: "縺ｦ縺九ｉ縺ｧ縺ｪ縺・→",
      accepts: ["縺ｦ縺九ｉ縺ｧ縺ｪ縺代ｌ縺ｰ"],
      hint: "N蘯ｿu chﾆｰa... thﾃｬ khﾃｴng ﾄ柁ｰ盻｣c",
      translation: "N蘯ｿu chﾆｰa r盻ｭa tay thﾃｬ khﾃｴng ﾄ柁ｰ盻｣c ﾄハ cﾆ｡m."
    }
  },
  {
    id: 46, unit: 5,
    pattern: "縺ｦ莉･譚･",
    meaning: "K盻・t盻ｫ khi... (cho ﾄ黛ｺｿn nay)",
    explanation: "Nh蘯･n m蘯｡nh m盻冲 tr蘯｡ng thﾃ｡i duy trﾃｬ liﾃｪn t盻･c su盻奏 t盻ｫ th盻拱 ﾄ訴盻ノ trong quﾃ｡ kh盻ｩ ﾄ妥ｳ cho ﾄ黛ｺｿn t蘯ｭn bﾃ｢y gi盻・",
    examples: [
      { jp: "譌･譛ｬ縺ｫ譚･縺ｦ莉･譚･縲∵ｯ取律邏崎ｱ・ｒ鬟溘∋縺ｦ縺・ｋ縲・, vn: "K盻・t盻ｫ khi ﾄ黛ｺｿn Nh蘯ｭt, ngﾃy nﾃo tﾃｴi cﾅｩng ﾄハ natto." },
      { jp: "蜊呈･ｭ縺励※莉･譚･縲∝ｽｼ縺ｨ縺ｯ荳蠎ｦ繧ゆｼ壹▲縺ｦ縺・↑縺・・, vn: "K盻・t盻ｫ khi t盻奏 nghi盻㎝, tﾃｴi chﾆｰa g蘯ｷp l蘯｡i anh 蘯･y l蘯ｧn nﾃo." }
    ],
    quiz: {
      sentence: "邨仙ｩ壹＠________縲√★縺｣縺ｨ縺薙・逕ｺ縺ｫ菴上ｓ縺ｧ縺・ｋ縲・,
      answer: "縺ｦ莉･譚･",
      accepts: ["縺ｦ縺・ｉ縺・, "莉･譚･", "縺・ｉ縺・],
      hint: "K盻・t盻ｫ khi (Kanji: 莉･譚･)",
      translation: "K盻・t盻ｫ khi k蘯ｿt hﾃｴn, tﾃｴi v蘯ｫn luﾃｴn s盻創g 盻・th盻・tr蘯･n nﾃy."
    }
  },
  {
    id: 47, unit: 5,
    pattern: "荳譁ｹ縺",
    meaning: "Ngﾃy cﾃng... (chi盻「 hﾆｰ盻嬾g liﾃｪn t盻･c)",
    explanation: "Ch盻・m盻冲 tr蘯｡ng thﾃ｡i ﾄ疎ng phﾃ｡t tri盻ハ liﾃｪn t盻･c theo m盻冲 chi盻「 hﾆｰ盻嬾g nﾃo ﾄ妥ｳ (thﾆｰ盻拵g dﾃｹng nhi盻「 cho chi盻「 hﾆｰ盻嬾g x蘯･u).",
    examples: [
      { jp: "譛霑代∫黄萓｡縺ｯ荳翫′繧倶ｸ譁ｹ縺縲・, vn: "G蘯ｧn ﾄ妥｢y, v蘯ｭt giﾃ｡ ngﾃy cﾃng tﾄハg." },
      { jp: "蠖ｼ縺ｮ逞・ｰ励・謔ｪ縺上↑繧倶ｸ譁ｹ縺縲・, vn: "B盻㌻h c盻ｧa anh 蘯･y ngﾃy cﾃng tr盻・n蘯ｷng." }
    ],
    quiz: {
      sentence: "莉穂ｺ九′蠢吶＠縺上※縲∫夢蜉ｴ縺ｯ縺溘∪繧祇_______縲・,
      answer: "荳譁ｹ縺",
      accepts: ["縺・▲縺ｽ縺・□", "荳譁ｹ"],
      hint: "Ngﾃy cﾃng (chi盻「 hﾆｰ盻嬾g x蘯･u - Kanji: 荳譁ｹ)",
      translation: "Cﾃｴng vi盻㌘ b蘯ｭn r盻冢, m盻㏄ m盻淑 ngﾃy cﾃng tﾃｭch t盻･."
    }
  },
  {
    id: 48, unit: 5,
    pattern: "縺励°縺ｪ縺・/ 縺ｻ縺九↑縺・/ 繧医ｊ縺ｪ縺・,
    meaning: "Ch盻・cﾃｲn cﾃ｡ch... / Khﾃｴng cﾃｲn cﾃ｡ch nﾃo khﾃ｡c",
    explanation: "Th盻・hi盻㌻ s盻ｱ ﾄ妥nh ch盻丘, khﾃｴng cﾃｲn s盻ｱ l盻ｱa ch盻肱 nﾃo khﾃ｡c t盻奏 hﾆ｡n ngoﾃi vi盻㌘ ph蘯｣i lﾃm ﾄ訴盻「 ﾄ妥ｳ.",
    examples: [
      { jp: "邨る崕繧帝・＠縺溘・縺ｧ縲∵ｭｩ縺・※蟶ｰ繧九＠縺九↑縺・・, vn: "Vﾃｬ l盻｡ chuy蘯ｿn tﾃu cu盻訴 nﾃｪn ch盻・cﾃｲn cﾃ｡ch ﾄ訴 b盻・v盻・" },
      { jp: "隱ｰ縺ｫ繧るｼ繧√↑縺・°繧峨∬・蛻・〒繧・ｋ縺ｻ縺九↑縺・・, vn: "Khﾃｴng th盻・nh盻・ai ﾄ柁ｰ盻｣c nﾃｪn ch盻・cﾃｲn cﾃ｡ch t盻ｱ lﾃm." }
    ],
    quiz: {
      sentence: "邏・據縺励◆縺ｮ縺縺九ｉ縲∬｡後￥________縲・,
      answer: "縺励°縺ｪ縺・,
      accepts: ["縺ｻ縺九↑縺・, "繧医ｊ縺ｪ縺・, "繧医ｊ縺ｻ縺九↑縺・, "縺ｻ縺九＠縺九◆縺後↑縺・],
      hint: "Ch盻・cﾃｲn cﾃ｡ch...",
      translation: "ﾄ静｣ h盻ｩa r盻妬 nﾃｪn ch盻・cﾃｲn cﾃ｡ch ph蘯｣i ﾄ訴 thﾃｴi."
    }
  },
  {
    id: 49, unit: 5,
    pattern: "縺ｯ繧ゅ■繧阪ｓ / 繧ゅ→繧医ｊ",
    meaning: "...thﾃｬ ﾄ妥｣ ﾄ妥nh / Khﾃｴng ch盻・.. mﾃ cﾃｲn",
    explanation: "Vi盻㌘ 盻・v蘯ｿ trﾆｰ盻嫩 lﾃ ﾄ訴盻「 ﾄ柁ｰﾆ｡ng nhiﾃｪn khﾃｴng c蘯ｧn bﾃn cﾃ｣i, vﾃ cﾃｲn thﾃｪm c蘯｣ v蘯ｿ sau n盻ｯa.",
    examples: [
      { jp: "蠖ｼ縺ｯ闍ｱ隱槭・繧ゅ■繧阪ｓ縲√ヵ繝ｩ繝ｳ繧ｹ隱槭ｂ隧ｱ縺帙ｋ縲・, vn: "Anh 蘯･y ti蘯ｿng Anh thﾃｬ ﾄ妥｣ ﾄ妥nh, ti蘯ｿng Phﾃ｡p cﾅｩng nﾃｳi ﾄ柁ｰ盻｣c." },
      { jp: "縺薙・蠎励・蜻ｳ縺ｯ繧ゅ→繧医ｊ縲√し繝ｼ繝薙せ繧らｴ譎ｴ繧峨＠縺・・, vn: "Quﾃ｡n nﾃy hﾆｰﾆ｡ng v盻・thﾃｬ mi盻・ bﾃn, d盻議h v盻･ cﾅｩng tuy盻㏄ v盻拱." }
    ],
    quiz: {
      sentence: "蠕ｩ鄙胆_______縲∽ｺ育ｿ偵ｂ螟ｧ蛻・□縲・,
      answer: "縺ｯ繧ゅ■繧阪ｓ",
      accepts: ["縺ｯ繧ゅ→繧医ｊ", "繧ゅ→繧医ｊ"],
      hint: "...thﾃｬ ﾄ妥｣ ﾄ妥nh (ﾄ柁ｰﾆ｡ng nhiﾃｪn)",
      translation: "ﾃ馬 t蘯ｭp thﾃｬ ﾄ妥｣ ﾄ妥nh, chu蘯ｩn b盻・bﾃi trﾆｰ盻嫩 cﾅｩng r蘯･t quan tr盻肱g."
    }
  },
  {
    id: 50, unit: 5,
    pattern: "縺､縺・〒縺ｫ",
    meaning: "Nhﾃ｢n ti盻㌻ / Ti盻㌻ th盻・,
    explanation: "Nhﾃ｢n cﾆ｡ h盻冓 ﾄ疎ng lﾃm vi盻㌘ A thﾃｬ lﾃm luﾃｴn vi盻㌘ B.",
    examples: [
      { jp: "謨｣豁ｩ縺ｮ縺､縺・〒縺ｫ縲√ヱ繝ｳ繧定ｲｷ縺｣縺ｦ縺阪◆縲・, vn: "Nhﾃ｢n ti盻㌻ ﾄ訴 d蘯｡o, tﾃｴi ﾄ妥｣ mua bﾃ｡nh mﾃｬ v盻・" },
      { jp: "謗・勁縺吶ｋ縺､縺・〒縺ｫ縲∫ｪ薙ｂ諡ｭ縺・◆縲・, vn: "Nhﾃ｢n ti盻㌻ d盻肱 d蘯ｹp, tﾃｴi ﾄ妥｣ lau luﾃｴn c盻ｭa s盻・" }
    ],
    quiz: {
      sentence: "雋ｷ縺・黄縺ｫ陦後￥________縲・Ψ萓ｿ螻縺ｫ蟇・▲縺ｦ縲・,
      answer: "縺､縺・〒縺ｫ",
      accepts: ["縺､縺・〒"],
      hint: "Nhﾃ｢n ti盻㌻",
      translation: "Nhﾃ｢n ti盻㌻ ﾄ訴 mua s蘯ｯm thﾃｬ ghﾃｩ vﾃo bﾆｰu ﾄ訴盻㌻ giﾃｺp nhﾃｩ."
    }
  },

  // --- UNIT 6 ---
  {
    id: 51, unit: 6,
    pattern: "縺ｨ縺・≧縺薙→縺",
    meaning: "Nghﾄｩa lﾃ / Nghe nﾃｳi lﾃ",
    explanation: "Dﾃｹng ﾄ黛ｻ・truy盻］ ﾄ黛ｺ｡t l蘯｡i thﾃｴng tin nghe ﾄ柁ｰ盻｣c, ho蘯ｷc gi蘯｣i thﾃｭch ﾃｽ nghﾄｩa c盻ｧa m盻冲 s盻ｱ vi盻㌘.",
    examples: [
      { jp: "繝九Η繝ｼ繧ｹ縺ｫ繧医ｋ縺ｨ縲∵・譌･髮ｨ縺碁剄繧九→縺・≧縺薙→縺縲・, vn: "Theo tin t盻ｩc, nghe nﾃｳi ngﾃy mai tr盻拱 s蘯ｽ mﾆｰa." },
      { jp: "遖∫・縺ｨ縺・≧縺ｮ縺ｯ縲√ち繝舌さ繧貞精縺｣縺ｦ縺ｯ縺・￠縺ｪ縺・→縺・≧縺薙→縺縲・, vn: "C蘯･m hﾃｺt thu盻祖 nghﾄｩa lﾃ khﾃｴng ﾄ柁ｰ盻｣c hﾃｺt thu盻祖." }
    ],
    quiz: {
      sentence: "蠖ｼ縺ｮ隧ｱ縺ｧ縺ｯ縲∵擂蟷ｴ邨仙ｩ壹☆繧祇_______縲・,
      answer: "縺ｨ縺・≧縺薙→縺",
      accepts: ["縺ｨ縺ｮ縺薙→縺"],
      hint: "Nghe nﾃｳi lﾃ / Nghﾄｩa lﾃ",
      translation: "Theo l盻拱 anh 蘯･y nﾃｳi, nghe ﾄ妥｢u sang nﾄノ anh 蘯･y s蘯ｽ k蘯ｿt hﾃｴn."
    }
  },
  {
    id: 52, unit: 6,
    pattern: "縺薙→縺ｯ縺ｪ縺・,
    meaning: "Khﾃｴng c蘯ｧn ph蘯｣i",
    explanation: "Khuyﾃｪn b蘯｣o ai ﾄ妥ｳ khﾃｴng c蘯ｧn thi蘯ｿt ph蘯｣i lﾃm m盻冲 vi盻㌘ gﾃｬ ﾄ妥ｳ.",
    examples: [
      { jp: "蜷帙′隰昴ｋ縺薙→縺ｯ縺ｪ縺・ｈ縲・, vn: "C蘯ｭu khﾃｴng c蘯ｧn ph蘯｣i xin l盻擁 ﾄ妥｢u." },
      { jp: "譎る俣縺ｯ蜊∝・縺ゅｋ縺九ｉ縲∵･縺舌％縺ｨ縺ｯ縺ｪ縺・・, vn: "V蘯ｫn cﾃｲn ﾄ黛ｻｧ th盻拱 gian nﾃｪn khﾃｴng c蘯ｧn ph蘯｣i v盻冓." }
    ],
    quiz: {
      sentence: "霆ｽ縺・｢ｨ驍ｪ縺縺九ｉ縲∝ｿ・・縺吶ｋ________縲・,
      answer: "縺薙→縺ｯ縺ｪ縺・,
      accepts: ["縺薙→縺ｪ縺・],
      hint: "Khﾃｴng c蘯ｧn ph蘯｣i",
      translation: "Ch盻・lﾃ c蘯｣m nh蘯ｹ thﾃｴi nﾃｪn khﾃｴng c蘯ｧn ph蘯｣i lo l蘯ｯng."
    }
  },
  {
    id: 53, unit: 6,
    pattern: "縺薙→",
    meaning: "Ph蘯｣i / Hﾃ｣y",
    explanation: "Dﾃｹng ﾄ黛ｻ・ﾄ柁ｰa ra m盻㌻h l盻㌻h, quy t蘯ｯc, ch盻・th盻・(thﾆｰ盻拵g th蘯･y trﾃｪn b蘯｣ng n盻冓 quy, thﾃｴng bﾃ｡o).",
    examples: [
      { jp: "譏取律縲・譎ゅ∪縺ｧ縺ｫ譚･繧九％縺ｨ縲・, vn: "Ngﾃy mai ph蘯｣i ﾄ黛ｺｿn trﾆｰ盻嫩 8 gi盻・" },
      { jp: "繝ｬ繝昴・繝医・譚･騾ｱ謠仙・縺吶ｋ縺薙→縲・, vn: "Ph蘯｣i n盻冪 bﾃ｡o cﾃ｡o vﾃo tu蘯ｧn sau." }
    ],
    quiz: {
      sentence: "蝗ｳ譖ｸ鬢ｨ縺ｧ縺ｯ髱吶°縺ｫ縺吶ｋ________縲・,
      answer: "縺薙→",
      accepts: [],
      hint: "Ph蘯｣i (M盻㌻h l盻㌻h / N盻冓 quy)",
      translation: "Trong thﾆｰ vi盻㌻ ph蘯｣i gi盻ｯ im l蘯ｷng."
    }
  },
  {
    id: 54, unit: 6,
    pattern: "縺ｪ縺・％縺ｨ縺ｯ縺ｪ縺・/ 繧ゅ↑縺・,
    meaning: "Khﾃｴng ph蘯｣i lﾃ khﾃｴng...",
    explanation: "Th盻ｫa nh蘯ｭn m盻冲 ﾄ訴盻「 gﾃｬ ﾄ妥ｳ 盻・m盻ｩc ﾄ黛ｻ・th蘯･p, ho蘯ｷc cﾃｳ th盻・lﾃm ﾄ柁ｰ盻｣c nhﾆｰng mi盻・ cﾆｰ盻｡ng.",
    examples: [
      { jp: "邏崎ｱ・・鬟溘∋繧峨ｌ縺ｪ縺・％縺ｨ縺ｯ縺ｪ縺・′縲√≠縺ｾ繧雁･ｽ縺阪〒縺ｯ縺ｪ縺・・, vn: "Khﾃｴng ph蘯｣i lﾃ khﾃｴng ﾄハ ﾄ柁ｰ盻｣c natto, nhﾆｰng tﾃｴi khﾃｴng thﾃｭch l蘯ｯm." },
      { jp: "襍ｰ繧後・縲・俣縺ｫ蜷医ｏ縺ｪ縺・％縺ｨ繧ゅ↑縺・・, vn: "N蘯ｿu ch蘯｡y thﾃｬ khﾃｴng h蘯ｳn lﾃ khﾃｴng k盻却." }
    ],
    quiz: {
      sentence: "縺企・縺ｯ鬟ｲ繧＼_______縺後∝ｼｱ縺・〒縺吶・,
      answer: "縺ｪ縺・％縺ｨ縺ｯ縺ｪ縺・,
      accepts: ["縺ｪ縺・％縺ｨ繧ゅ↑縺・],
      hint: "Khﾃｴng ph蘯｣i lﾃ khﾃｴng",
      translation: "Khﾃｴng ph蘯｣i lﾃ tﾃｴi khﾃｴng u盻創g ﾄ柁ｰ盻｣c rﾆｰ盻｣u, nhﾆｰng t盻ｭu lﾆｰ盻｣ng kﾃｩm."
    }
  },
  {
    id: 55, unit: 6,
    pattern: "繧ゅ・・医ｂ繧難ｼ・,
    meaning: "B盻殃 vﾃｬ...",
    explanation: "Dﾃｹng ﾄ黛ｻ・ﾄ柁ｰa ra lﾃｽ do cﾃ｡ nhﾃ｢n, mang tﾃｭnh ch蘯･t bi盻㌻ b蘯｡ch, lﾃm nﾅｩng (thﾆｰ盻拵g dﾃｹng trong vﾄハ nﾃｳi, ph盻･ n盻ｯ/tr蘯ｻ em hay dﾃｹng).",
    examples: [
      { jp: "縲後←縺・＠縺ｦ鬟溘∋縺ｪ縺・・・溘阪後□縺｣縺ｦ縲∫ｾ主袖縺励￥縺ｪ縺・ｓ縺繧ゅｓ縲ゅ・, vn: "\"Sao con khﾃｴng ﾄハ?\" \"T蘯｡i vﾃｬ khﾃｴng ngon mﾃ.\"" },
      { jp: "縺ｾ縺蟄蝉ｾ帙□繧ゅ・縲∽ｻ墓婿縺後↑縺・ｈ縲・, vn: "Vﾃｬ v蘯ｫn lﾃ tr蘯ｻ con nﾃｪn ﾄ妥nh ch盻丘 thﾃｴi." }
    ],
    quiz: {
      sentence: "陦後″縺溘￥縺ｪ縺・ｈ縲ら夢繧後◆繧薙□________縲・,
      answer: "繧ゅ・",
      accepts: ["繧ゅｓ"],
      hint: "B盻殃 vﾃｬ (vﾄハ nﾃｳi, bi盻㌻ b蘯｡ch)",
      translation: "Tﾃｴi khﾃｴng mu盻創 ﾄ訴 ﾄ妥｢u. T蘯｡i vﾃｬ m盻㏄ mﾃ."
    }
  },
  {
    id: 56, unit: 6,
    pattern: "繧ゅ・縺縺九ｉ / 繧ゅ・縺ｧ",
    meaning: "T蘯｡i vﾃｬ...",
    explanation: "ﾄ脆ｰa ra lﾃｽ do khﾃ｡ch quan, mang tﾃｭnh ch蘯･t phﾃ｢n tr蘯ｧn, thanh minh ﾄ黛ｻ・mong ﾄ柁ｰ盻｣c thﾃｴng c蘯｣m.",
    examples: [
      { jp: "髮ｻ霆翫′驕・ｌ縺溘ｂ縺ｮ縺縺九ｉ縲・≦蛻ｻ縺励※縺励∪縺・∪縺励◆縲・, vn: "T蘯｡i vﾃｬ tﾃu tr盻・nﾃｪn tﾃｴi ﾄ妥｣ b盻・mu盻冢." },
      { jp: "蛻昴ａ縺ｦ縺ｪ繧ゅ・縺ｧ縲√ｈ縺上ｏ縺九ｊ縺ｾ縺帙ｓ縲・, vn: "Vﾃｬ lﾃ l蘯ｧn ﾄ黛ｺｧu tiﾃｪn nﾃｪn tﾃｴi khﾃｴng rﾃnh l蘯ｯm." }
    ],
    quiz: {
      sentence: "驕薙′豺ｷ繧薙〒縺・◆________縲・≦繧後※縺吶∩縺ｾ縺帙ｓ縲・,
      answer: "繧ゅ・縺縺九ｉ",
      accepts: ["繧ゅ・縺ｧ", "繧ゅｓ縺縺九ｉ"],
      hint: "T蘯｡i vﾃｬ (phﾃ｢n tr蘯ｧn, thanh minh)",
      translation: "T蘯｡i vﾃｬ t蘯ｯc ﾄ柁ｰ盻拵g nﾃｪn xin l盻擁 tﾃｴi ﾄ黛ｺｿn mu盻冢."
    }
  },
  {
    id: 57, unit: 6,
    pattern: "繧ゅ・縺・,
    meaning: "Tuy盻㏄ ﾄ黛ｻ訴 khﾃｴng / L蘯ｽ nﾃo l蘯｡i...",
    explanation: "Ph盻ｧ ﾄ黛ｻ杵h m蘯｡nh m蘯ｽ m盻冲 s盻ｱ vi盻㌘, th盻・hi盻㌻ c蘯｣m xﾃｺc t盻ｩc gi蘯ｭn ho蘯ｷc kiﾃｪn quy蘯ｿt khﾃｴng lﾃm.",
    examples: [
      { jp: "縺ゅｓ縺ｪ蠎励∽ｺ悟ｺｦ縺ｨ陦後￥繧ゅ・縺九・, vn: "Cﾃ｡i quﾃ｡n ﾄ妥ｳ, tuy盻㏄ ﾄ黛ｻ訴 khﾃｴng ﾄ訴 l蘯ｧn hai ﾄ妥｢u." },
      { jp: "蠖ｼ縺梧悽蠖薙・縺薙→繧定ｨ縺・ｂ縺ｮ縺九・, vn: "L蘯ｽ nﾃo anh ta l蘯｡i nﾃｳi s盻ｱ th蘯ｭt sao? (Tuy盻㏄ ﾄ黛ｻ訴 khﾃｴng)" }
    ],
    quiz: {
      sentence: "縺ゅｓ縺ｪ莠ｺ縺ｫ縲∽ｺ悟ｺｦ縺ｨ莨壹≧________・・,
      answer: "繧ゅ・縺・,
      accepts: ["繧ゅｓ縺・],
      hint: "Tuy盻㏄ ﾄ黛ｻ訴 khﾃｴng / L蘯ｽ nﾃo l蘯｡i",
      translation: "Ngﾆｰ盻拱 nhﾆｰ v蘯ｭy, tﾃｴi tuy盻㏄ ﾄ黛ｻ訴 khﾃｴng g蘯ｷp l蘯｡i l蘯ｧn hai ﾄ妥｢u!"
    }
  },
  {
    id: 58, unit: 6,
    pattern: "縺溘→縺薙ｍ",
    meaning: "Sau khi th盻ｭ lﾃm... thﾃｬ (nh蘯ｭn ra)",
    explanation: "Nh蘯･n m蘯｡nh k蘯ｿt qu蘯｣ nh蘯ｭn ﾄ柁ｰ盻｣c ho蘯ｷc ﾄ訴盻「 b蘯･t ng盻・phﾃ｡t hi盻㌻ ra sau khi th盻ｱc hi盻㌻ m盻冲 hﾃnh ﾄ黛ｻ冢g.",
    examples: [
      { jp: "蜈育函縺ｫ閨槭＞縺溘→縺薙ｍ縲∵・譌･繝・せ繝医′縺ゅｋ縺昴≧縺縲・, vn: "Sau khi h盻淑 th蘯ｧy giﾃ｡o thﾃｬ nghe nﾃｳi ngﾃy mai cﾃｳ bﾃi ki盻ノ tra." },
      { jp: "荵・＠縺ｶ繧翫↓菴馴㍾繧呈ｸｬ縺｣縺溘→縺薙ｍ縲・繧ｭ繝ｭ繧ょ､ｪ縺｣縺ｦ縺・◆縲・, vn: "Lﾃ｢u r盻妬 m盻嬖 cﾃ｢n th盻ｭ, k蘯ｿt qu蘯｣ lﾃ ﾄ妥｣ bﾃｩo lﾃｪn 5kg." }
    ],
    quiz: {
      sentence: "逞・劼縺ｧ讀懈渊縺誉_______縲∫羅豌励′隕九▽縺九▲縺溘・,
      answer: "縺溘→縺薙ｍ",
      accepts: [],
      hint: "Sau khi th盻ｭ lﾃm... thﾃｬ (k蘯ｿt qu蘯｣)",
      translation: "Sau khi ki盻ノ tra 盻・b盻㌻h vi盻㌻ thﾃｬ phﾃ｡t hi盻㌻ ra b盻㌻h."
    }
  },
  {
    id: 59, unit: 6,
    pattern: "縺ｨ縺薙ｍ縺ｫ / 縺ｸ / 繧・/ 縺ｧ",
    meaning: "ﾄ静ｺng lﾃｺc / Ngay lﾃｺc",
    explanation: "Di盻・ t蘯｣ ﾄ妥ｺng vﾃo th盻拱 ﾄ訴盻ノ m盻冲 hﾃnh ﾄ黛ｻ冢g ﾄ疎ng di盻・ ra thﾃｬ cﾃｳ s盻ｱ vi盻㌘ khﾃ｡c xen vﾃo.",
    examples: [
      { jp: "蜃ｺ縺九￠繧医≧縺ｨ縺励◆縺ｨ縺薙ｍ縺ｫ縲・崕隧ｱ縺後°縺九▲縺ｦ縺阪◆縲・, vn: "ﾄ静ｺng lﾃｺc ﾄ黛ｻ杵h ra ngoﾃi thﾃｬ cﾃｳ ﾄ訴盻㌻ tho蘯｡i." },
      { jp: "縺雁ｿ吶＠縺・→縺薙ｍ繧偵☆縺ｿ縺ｾ縺帙ｓ縲・, vn: "Xin l盻擁 vﾃｬ lﾃm phi盻］ ﾄ妥ｺng lﾃｺc anh ﾄ疎ng b蘯ｭn." }
    ],
    quiz: {
      sentence: "蟇昴※縺・ｋ________縲∝慍髴・′襍ｷ縺阪◆縲・,
      answer: "縺ｨ縺薙ｍ縺ｫ",
      accepts: ["縺ｨ縺薙ｍ", "縺ｨ縺薙ｍ縺ｸ"],
      hint: "ﾄ静ｺng lﾃｺc (th盻拱 ﾄ訴盻ノ)",
      translation: "ﾄ静ｺng lﾃｺc ﾄ疎ng ng盻ｧ thﾃｬ x蘯｣y ra ﾄ黛ｻ冢g ﾄ黛ｺ･t."
    }
  },
  {
    id: 60, unit: 6,
    pattern: "縺ｨ縺薙ｍ縺縺｣縺・,
    meaning: "Suﾃｽt n盻ｯa thﾃｬ",
    explanation: "Ch盻・m盻冲 vi盻㌘ t盻妬 t盻・suﾃｽt chﾃｺt n盻ｯa thﾃｬ ﾄ妥｣ x蘯｣y ra (thﾆｰ盻拵g ﾄ訴 v盻嬖 繧ゅ≧蟆代＠縺ｧ, 蜊ｱ縺ｪ縺・.",
    examples: [
      { jp: "繧ゅ≧蟆代＠縺ｧ霆翫↓縺ｶ縺､縺九ｋ縺ｨ縺薙ｍ縺縺｣縺溘・, vn: "Suﾃｽt chﾃｺt n盻ｯa thﾃｬ b盻・xe tﾃｴng." },
      { jp: "蜊ｱ縺ｪ縺城嚴谿ｵ縺九ｉ關ｽ縺｡繧九→縺薙ｍ縺縺｣縺溘・, vn: "Nguy hi盻ノ th蘯ｭt, suﾃｽt n盻ｯa thﾃｬ ngﾃ｣ c蘯ｧu thang." }
    ],
    quiz: {
      sentence: "繧ゅ≧蟆代＠縺ｧ驕・綾縺吶ｋ________縲・,
      answer: "縺ｨ縺薙ｍ縺縺｣縺・,
      accepts: [],
      hint: "Suﾃｽt n盻ｯa thﾃｬ",
      translation: "Suﾃｽt chﾃｺt n盻ｯa thﾃｬ b盻・ﾄ訴 mu盻冢."
    }
  },
  {
    id: 61, unit: 6,
    pattern: "縺ｻ縺ｩ",
    meaning: "ﾄ雪ｺｿn m盻ｩc / Kho蘯｣ng",
    explanation: "Di盻・ t蘯｣ m盻ｩc ﾄ黛ｻ・c盻ｧa m盻冲 tr蘯｡ng thﾃ｡i (gi盻創g v盻嬖 縺上ｉ縺・nhﾆｰng thﾆｰ盻拵g 盻・m盻ｩc ﾄ黛ｻ・cao hﾆ｡n).",
    examples: [
      { jp: "豁ｻ縺ｬ縺ｻ縺ｩ逍ｲ繧後◆縲・, vn: "M盻㏄ ﾄ黛ｺｿn m盻ｩc mu盻創 ch蘯ｿt." },
      { jp: "豕｣縺阪◆縺・⊇縺ｩ逞帙＞縲・, vn: "ﾄ紳u ﾄ黛ｺｿn m盻ｩc mu盻創 khﾃｳc." }
    ],
    quiz: {
      sentence: "鬟溘∋繧峨ｌ縺ｪ縺Ю_______譁咏炊縺悟ｱｱ縺ｮ繧医≧縺ｫ縺ゅｋ縲・,
      answer: "縺ｻ縺ｩ",
      accepts: ["縺上ｉ縺・, "縺舌ｉ縺・],
      hint: "ﾄ雪ｺｿn m盻ｩc (M盻ｩc ﾄ黛ｻ・cao)",
      translation: "Cﾃｳ nhi盻「 ﾄ黛ｻ・ﾄハ ﾄ黛ｺｿn m盻ｩc ﾄハ khﾃｴng n盻品, ch蘯･t cao nhﾆｰ nﾃｺi."
    }
  },
  {
    id: 62, unit: 6,
    pattern: "縺ｰ縲懊⊇縺ｩ",
    meaning: "Cﾃng... cﾃng...",
    explanation: "Ch盻・s盻ｱ phﾃ｡t tri盻ハ ﾄ黛ｻ渡g th盻拱 c盻ｧa hai v蘯ｿ.",
    examples: [
      { jp: "譌･譛ｬ隱槭・縲∝級蠑ｷ縺吶ｌ縺ｰ縺吶ｋ縺ｻ縺ｩ髮｣縺励￥縺ｪ繧九・, vn: "Ti蘯ｿng Nh蘯ｭt, cﾃng h盻皇 cﾃng th蘯･y khﾃｳ." },
      { jp: "繧ｹ繝ｼ繝代・縺ｯ螳ｶ縺九ｉ霑代￠繧後・霑代＞縺ｻ縺ｩ萓ｿ蛻ｩ縺縲・, vn: "Siﾃｪu th盻・cﾃng g蘯ｧn nhﾃ cﾃng ti盻㌻." }
    ],
    quiz: {
      sentence: "閠・∴繧契_______閠・∴繧九⊇縺ｩ縲√ｏ縺九ｉ縺ｪ縺上↑繧九・,
      answer: "縺ｰ",
      accepts: [],
      hint: "ﾄ進 c蘯ｷp v盻嬖 縺ｻ縺ｩ t蘯｡o nghﾄｩa 'Cﾃng... cﾃng'",
      translation: "Cﾃng suy nghﾄｩ thﾃｬ cﾃng khﾃｴng hi盻ブ."
    }
  },
  {
    id: 63, unit: 6,
    pattern: "縺ｻ縺ｩ縲懊・縺ｪ縺・,
    meaning: "Khﾃｴng cﾃｳ gﾃｬ... b蘯ｱng",
    explanation: "Dﾃｹng ﾄ黛ｻ・so sﾃ｡nh nh蘯･t, ﾄ妥｡nh giﾃ｡ ch盻ｧ quan r蘯ｱng m盻冲 s盻ｱ v蘯ｭt/s盻ｱ vi盻㌘ lﾃ nh蘯･t.",
    examples: [
      { jp: "蠖ｼ螂ｳ縺ｻ縺ｩ蜆ｪ縺励＞莠ｺ縺ｯ縺・↑縺・・, vn: "Khﾃｴng cﾃｳ ngﾆｰ盻拱 nﾃo hi盻］ b蘯ｱng cﾃｴ 蘯･y." },
      { jp: "螳ｶ譌上→縺・ｋ譎ゅ⊇縺ｩ讌ｽ縺励＞譎る俣縺ｯ縺ｪ縺・・, vn: "Khﾃｴng cﾃｳ th盻拱 gian nﾃo vui b蘯ｱng lﾃｺc 盻・bﾃｪn gia ﾄ妥ｬnh." }
    ],
    quiz: {
      sentence: "莉雁ｹｴ縺ｮ螟柔_______證代＞蟷ｴ縺ｯ縺ｪ縺・・,
      answer: "縺ｻ縺ｩ",
      accepts: ["縺上ｉ縺・, "縺舌ｉ縺・],
      hint: "Khﾃｴng cﾃｳ gﾃｬ... b蘯ｱng (So sﾃ｡nh nh蘯･t)",
      translation: "Khﾃｴng cﾃｳ nﾄノ nﾃo nﾃｳng b蘯ｱng mﾃｹa hﾃｨ nﾄノ nay."
    }
  },

  // --- UNIT 7 ---
  {
    id: 64, unit: 7,
    pattern: "縺ｪ縺ｩ / 縺ｪ繧薙° / 縺ｪ繧薙※",
    meaning: "Nhﾆｰ lﾃ... / C盻｡ nhﾆｰ...",
    explanation: "Dﾃｹng ﾄ黛ｻ・ﾄ柁ｰa ra vﾃｭ d盻･, ho蘯ｷc mang s蘯ｯc thﾃ｡i khiﾃｪm t盻創 (h蘯｡ th蘯･p b蘯｣n thﾃ｢n) / coi thﾆｰ盻拵g (h蘯｡ th蘯･p ngﾆｰ盻拱 khﾃ｡c ho蘯ｷc s盻ｱ vi盻㌘).",
    examples: [
      { jp: "縺願幻縺ｪ繧薙°鬟ｲ縺ｿ縺ｾ縺帙ｓ縺九・, vn: "B蘯｡n cﾃｳ mu盻創 u盻創g chﾃｺt gﾃｬ ﾄ妥ｳ nhﾆｰ trﾃ khﾃｴng?" },
      { jp: "遘√↑繧薙※縲√∪縺縺ｾ縺縺ｧ縺吶・, vn: "C盻｡ nhﾆｰ tﾃｴi thﾃｬ v蘯ｫn cﾃｲn kﾃｩm l蘯ｯm." }
    ],
    quiz: {
      sentence: "蟷ｽ髴垣_______縺・ｋ繧上￠縺後↑縺・・,
      answer: "縺ｪ繧薙※",
      accepts: ["縺ｪ繧薙°", "縺ｪ縺ｩ"],
      hint: "C盻｡ nhﾆｰ / Ba cﾃ｡i th盻ｩ nhﾆｰ (nh蘯･n m蘯｡nh s盻ｱ ph盻ｧ ﾄ黛ｻ杵h)",
      translation: "M蘯･y th盻ｩ nhﾆｰ ma qu盻ｷ khﾃｴng th盻・nﾃo t盻渡 t蘯｡i ﾄ柁ｰ盻｣c."
    }
  },
  {
    id: 65, unit: 7,
    pattern: "縺ｪ縺ｩ縺ｨ(縺ｪ繧薙※)險縺・諤昴≧",
    meaning: "Nﾃｳi / Nghﾄｩ r蘯ｱng (cﾃ｡i th盻ｩ nhﾆｰ lﾃ...)",
    explanation: "Trﾃｭch d蘯ｫn l蘯｡i l盻拱 nﾃｳi ho蘯ｷc suy nghﾄｩ kﾃｨm theo thﾃ｡i ﾄ黛ｻ・ng蘯｡c nhiﾃｪn, coi thﾆｰ盻拵g ho蘯ｷc khiﾃｪm t盻創.",
    examples: [
      { jp: "蠖ｼ縺檎官莠ｺ縺縺ｪ繧薙※縲∽ｿ｡縺倥ｉ繧後↑縺・・, vn: "Th蘯ｭt khﾃｴng th盻・tin ﾄ柁ｰ盻｣c chuy盻㌻ anh ta lﾃ th盻ｧ ph蘯｡m." },
      { jp: "縺ｧ縺阪↑縺・↑縺ｩ縺ｨ險縺｣縺ｦ縺ｯ縺・￠縺ｪ縺・・, vn: "Khﾃｴng ﾄ柁ｰ盻｣c nﾃｳi nh盻ｯng l盻拱 nhﾆｰ lﾃ khﾃｴng th盻・lﾃm ﾄ柁ｰ盻｣c." }
    ],
    quiz: {
      sentence: "閾ｪ蛻・′螟ｩ謇阪□________諤昴▲縺ｦ縺・↑縺・・,
      answer: "縺ｪ繧薙※",
      accepts: ["縺ｪ縺ｩ縺ｨ"],
      hint: "Nghﾄｩ r蘯ｱng cﾃ｡i ﾄ訴盻「 nhﾆｰ lﾃ...",
      translation: "Tﾃｴi chﾆｰa t盻ｫng nghﾄｩ mﾃｬnh lﾃ thiﾃｪn tﾃi hay gﾃｬ c蘯｣."
    }
  },
  {
    id: 66, unit: 7,
    pattern: "縺九ｉ縺ｫ縺ｯ",
    meaning: "M盻冲 khi ﾄ妥｣... thﾃｬ ph蘯｣i...",
    explanation: "B盻殃 vﾃｬ ﾄ妥｣ ﾄ黛ｺｿn tﾃｬnh tr蘯｡ng ﾄ妥ｳ, ho蘯ｷc ﾄ妥｣ quy蘯ｿt ﾄ黛ｻ杵h nhﾆｰ v蘯ｭy nﾃｪn cﾃｳ nghﾄｩa v盻･/quy蘯ｿt tﾃ｢m ph蘯｣i lﾃm ﾄ黛ｺｿn cﾃｹng.",
    examples: [
      { jp: "邏・據縺励◆縺九ｉ縺ｫ縺ｯ縲∝ｮ医ｉ縺ｪ縺代ｌ縺ｰ縺ｪ繧峨↑縺・・, vn: "M盻冲 khi ﾄ妥｣ h盻ｩa thﾃｬ ph蘯｣i gi盻ｯ l盻拱." },
      { jp: "隧ｦ蜷医↓蜃ｺ繧九°繧峨↓縺ｯ縲∝享縺｡縺溘＞縲・, vn: "M盻冲 khi ﾄ妥｣ tham gia thi ﾄ黛ｺ･u thﾃｬ tﾃｴi mu盻創 th蘯ｯng." }
    ],
    quiz: {
      sentence: "譌･譛ｬ縺ｫ逡吝ｭｦ縺吶ｋ________縲¨1縺ｫ蜷域ｼ縺励◆縺・・,
      answer: "縺九ｉ縺ｫ縺ｯ",
      accepts: [],
      hint: "M盻冲 khi ﾄ妥｣ (th盻・hi盻㌻ quy蘯ｿt tﾃ｢m)",
      translation: "M盻冲 khi ﾄ妥｣ du h盻皇 Nh蘯ｭt B蘯｣n thﾃｬ tﾃｴi mu盻創 thi ﾄ黛ｻ・N1."
    }
  },
  {
    id: 67, unit: 7,
    pattern: "縺阪ｋ",
    meaning: "Hoﾃn thﾃnh / Lﾃm ﾄ黛ｺｿn cﾃｹng / Vﾃｴ cﾃｹng...",
    explanation: "Lﾃm xong toﾃn b盻・s盻ｱ vi盻㌘ khﾃｴng cﾃｲn sﾃｳt l蘯｡i gﾃｬ (V b盻・masu + 縺阪ｋ) ho蘯ｷc ﾄ黛ｺ｡t ﾄ黛ｺｿn gi盻嬖 h蘯｡n t盻訴 ﾄ疎 (逍ｲ繧後″繧・- m盻㏄ rﾃ｣ r盻拱).",
    examples: [
      { jp: "縺薙・蟆剰ｪｬ縺ｯ荳譌･縺ｧ隱ｭ縺ｿ縺阪▲縺溘・, vn: "Cu盻創 ti盻ブ thuy蘯ｿt nﾃy tﾃｴi ﾄ妥｣ ﾄ黛ｻ皇 xong h蘯ｿt trong m盻冲 ngﾃy." },
      { jp: "逍ｲ繧後″縺｣縺ｦ縲∽ｸ豁ｩ繧よｭｩ縺代↑縺・・, vn: "M盻㏄ ki盻㏄ s盻ｩc, khﾃｴng th盻・bﾆｰ盻嫩 thﾃｪm m盻冲 bﾆｰ盻嫩 nﾃo n盻ｯa." }
    ],
    quiz: {
      sentence: "縺溘￥縺輔ｓ縺ゅ▲縺ｦ縲∽ｸ莠ｺ縺ｧ縺ｯ鬟溘∋________縺ｪ縺・・,
      answer: "縺阪ｌ",
      accepts: ["縺阪ｌ縺ｪ縺・],
      hint: "Hoﾃn thﾃnh / H蘯ｿt (chia 盻・th盻・kh蘯｣ nﾄハg ph盻ｧ ﾄ黛ｻ杵h)",
      translation: "Nhi盻「 quﾃ｡, m盻冲 mﾃｬnh tﾃｴi khﾃｴng th盻・ﾄハ h蘯ｿt ﾄ柁ｰ盻｣c."
    }
  },
  {
    id: 68, unit: 7,
    pattern: "縺弱∩",
    meaning: "Cﾃｳ v蘯ｻ... / Hﾆ｡i...",
    explanation: "C蘯｣m th蘯･y cﾃｳ tri盻㎡ ch盻ｩng, chi盻「 hﾆｰ盻嬾g nhﾆｰ th蘯ｿ (thﾆｰ盻拵g dﾃｹng cho tﾃｬnh tr蘯｡ng s盻ｩc kh盻銃, tﾃ｢m tr蘯｡ng khﾃｴng t盻奏).",
    examples: [
      { jp: "譛霑代・｢ｨ驍ｪ縺弱∩縺ｧ隱ｿ蟄舌′謔ｪ縺・・, vn: "G蘯ｧn ﾄ妥｢y tﾃｴi hﾆ｡i c蘯｣m nﾃｪn ngﾆｰ盻拱 th蘯･y m盻㏄." },
      { jp: "蠖ｼ縺ｯ譛霑代∝ｰ代＠螟ｪ繧翫℃縺ｿ縺縲・, vn: "G蘯ｧn ﾄ妥｢y anh 蘯･y cﾃｳ v蘯ｻ hﾆ｡i bﾃｩo lﾃｪn." }
    ],
    quiz: {
      sentence: "譛霑代∝ｯ昜ｸ崎ｶｳ________縺ｧ鬆ｭ縺檎李縺・・,
      answer: "縺弱∩",
      accepts: ["豌怜袖"],
      hint: "Cﾃｳ v蘯ｻ / Hﾆ｡i (Kanji: 豌怜袖)",
      translation: "G蘯ｧn ﾄ妥｢y do hﾆ｡i thi蘯ｿu ng盻ｧ nﾃｪn tﾃｴi b盻・ﾄ疎u ﾄ黛ｺｧu."
    }
  },
  {
    id: 69, unit: 7,
    pattern: "縺後■",
    meaning: "Thﾆｰ盻拵g hay... / D盻・..",
    explanation: "Ch盻・t蘯ｧn su蘯･t x蘯｣y ra m盻冲 tﾃｬnh tr蘯｡ng nﾃo ﾄ妥ｳ nhi盻「 l蘯ｧn (mang ﾃｽ nghﾄｩa tiﾃｪu c盻ｱc).",
    examples: [
      { jp: "蠖ｼ縺ｯ譛霑代∝ｭｦ譬｡繧剃ｼ代∩縺後■縺縲・, vn: "G蘯ｧn ﾄ妥｢y anh 蘯･y hay ngh盻・h盻皇." },
      { jp: "蟄蝉ｾ帙・縺薙ｍ縺ｯ縲∫羅豌励′縺｡縺縺｣縺溘・, vn: "H盻妬 nh盻・tﾃｴi r蘯･t hay 盻僧 ﾄ疎u." }
    ],
    quiz: {
      sentence: "蜀ｬ縺ｯ譖・ｊ縺ｮ譌･縺檎ｶ壹″________縺縲・,
      answer: "縺後■",
      accepts: [],
      hint: "Thﾆｰ盻拵g hay / D盻・(xu hﾆｰ盻嬾g tiﾃｪu c盻ｱc)",
      translation: "Mﾃｹa ﾄ妥ｴng thﾆｰ盻拵g hay kﾃｩo dﾃi nh盻ｯng ngﾃy nhi盻「 mﾃ｢y."
    }
  },
  {
    id: 70, unit: 7,
    pattern: "蜷代″",
    meaning: "Phﾃｹ h盻｣p v盻嬖...",
    explanation: "B蘯｣n ch蘯･t, tﾃｭnh ch蘯･t c盻ｧa s盻ｱ v蘯ｭt/s盻ｱ vi盻㌘ ﾄ妥ｳ v盻創 dﾄｩ thﾃｭch h盻｣p v盻嬖 m盻冲 ﾄ黛ｻ訴 tﾆｰ盻｣ng nﾃo ﾄ妥ｳ.",
    examples: [
      { jp: "縺薙・譏逕ｻ縺ｯ蟄蝉ｾ帛髄縺阪□縲・, vn: "B盻・phim nﾃy phﾃｹ h盻｣p v盻嬖 tr蘯ｻ em." },
      { jp: "縺薙・莉穂ｺ九・菴灘鴨縺悟ｿ・ｦ√↑縺ｮ縺ｧ縲∬凶縺・ｺｺ蜷代″縺縲・, vn: "Cﾃｴng vi盻㌘ nﾃy c蘯ｧn th盻・l盻ｱc nﾃｪn h盻｣p v盻嬖 ngﾆｰ盻拱 tr蘯ｻ." }
    ],
    quiz: {
      sentence: "縺薙・譛阪・繝・じ繧､繝ｳ縺ｯ縲∬凶縺・ｺｺ________縺縲・,
      answer: "蜷代″",
      accepts: ["繧縺・],
      hint: "Phﾃｹ h盻｣p v盻嬖 (Kanji: 蜷代″)",
      translation: "Thi蘯ｿt k蘯ｿ c盻ｧa b盻・ﾄ黛ｻ・nﾃy phﾃｹ h盻｣p v盻嬖 ngﾆｰ盻拱 tr蘯ｻ tu盻品."
    }
  },
  {
    id: 71, unit: 7,
    pattern: "蜷代￠",
    meaning: "Dﾃnh cho... / Hﾆｰ盻嬾g t盻嬖...",
    explanation: "Ngﾆｰ盻拱 lﾃm c盻・tﾃｬnh thi蘯ｿt k蘯ｿ, s蘯｣n xu蘯･t ra ﾄ黛ｻ・ﾄ黛ｺｷc bi盻㏄ dﾃnh riﾃｪng cho m盻冲 ﾄ黛ｻ訴 tﾆｰ盻｣ng c盻･ th盻・",
    examples: [
      { jp: "縺薙ｌ縺ｯ螟門嵜莠ｺ蜷代￠縺ｫ譖ｸ縺九ｌ縺滓悽縺縲・, vn: "ﾄ静｢y lﾃ cu盻創 sﾃ｡ch ﾄ柁ｰ盻｣c vi蘯ｿt dﾃnh cho ngﾆｰ盻拱 nﾆｰ盻嫩 ngoﾃi." },
      { jp: "螂ｳ諤ｧ蜷代￠縺ｮ繝槭Φ繧ｷ繝ｧ繝ｳ縺悟｣ｲ繧後※縺・ｋ縲・, vn: "Cﾄハ h盻・dﾃnh cho phﾃ｡i n盻ｯ ﾄ疎ng bﾃ｡n r蘯･t ch蘯｡y." }
    ],
    quiz: {
      sentence: "縺薙・譁咏炊縺ｯ縲∝ｭ蝉ｾ媽_______縺ｫ霎帙￥縺ｪ縺上＠縺ｦ縺ゅｋ縲・,
      answer: "蜷代￠",
      accepts: ["繧縺・],
      hint: "Dﾃnh cho / Hﾆｰ盻嬾g t盻嬖 (Kanji: 蜷代￠)",
      translation: "Mﾃｳn ﾄハ nﾃy ﾄ柁ｰ盻｣c lﾃm khﾃｴng cay ﾄ黛ｻ・dﾃnh cho tr蘯ｻ em."
    }
  },
  {
    id: 72, unit: 7,
    pattern: "繧帝壹§(縺ｦ) / 騾壹＠(縺ｦ)",
    meaning: "Thﾃｴng qua / Trong su盻奏...",
    explanation: "Lﾃm vi盻㌘ gﾃｬ ﾄ妥ｳ thﾃｴng qua m盻冲 trung gian, phﾆｰﾆ｡ng ti盻㌻, ho蘯ｷc duy trﾃｬ m盻冲 tr蘯｡ng thﾃ｡i trong su盻奏 m盻冲 kho蘯｣ng th盻拱 gian.",
    examples: [
      { jp: "遉ｾ髟ｷ縺ｮ遘俶嶌繧帝壹§縺ｦ縲・擇莨壹ｒ豎ゅａ縺溘・, vn: "Tﾃｴi ﾄ妥｣ yﾃｪu c蘯ｧu g蘯ｷp m蘯ｷt thﾃｴng qua thﾆｰ kﾃｽ c盻ｧa giﾃ｡m ﾄ黛ｻ祖." },
      { jp: "縺薙・逕ｺ縺ｯ荳蟷ｴ繧帝壹§縺ｦ證悶°縺・・, vn: "Th盻・tr蘯･n nﾃy 蘯･m ﾃ｡p trong su盻奏 c蘯｣ nﾄノ." }
    ],
    quiz: {
      sentence: "蜿倶ｺｺ縺ｮ邏ｹ莉祇_______縲∝ｽｼ螂ｳ縺ｨ遏･繧雁粋縺｣縺溘・,
      answer: "繧帝壹§縺ｦ",
      accepts: ["繧偵→縺翫＠縺ｦ", "繧帝壹＠縺ｦ", "繧帝壹§"],
      hint: "Thﾃｴng qua (trung gian lﾃ b蘯｡n bﾃｨ)",
      translation: "Tﾃｴi ﾄ妥｣ quen bi蘯ｿt cﾃｴ 蘯･y thﾃｴng qua s盻ｱ gi盻嬖 thi盻㎡ c盻ｧa m盻冲 ngﾆｰ盻拱 b蘯｡n."
    }
  },
  {
    id: 73, unit: 7,
    pattern: "縺｣縺ｽ縺・,
    meaning: "Cﾃｳ v蘯ｻ... / Gi盻創g nhﾆｰ... / Hay...",
    explanation: "C蘯｣m th蘯･y gi盻創g nhﾆｰ lﾃ tﾃｭnh ch蘯･t ﾄ妥ｳ (蟄蝉ｾ帙▲縺ｽ縺・- nhﾆｰ tr蘯ｻ con), ho蘯ｷc cﾃｳ xu hﾆｰ盻嬾g d盻・b盻・lﾃm sao ﾄ妥ｳ (諤偵ｊ縺｣縺ｽ縺・- hay cﾃ｡u, 蠢倥ｌ縺｣縺ｽ縺・- hay quﾃｪn).",
    examples: [
      { jp: "蠖ｼ縺ｯ螟ｧ莠ｺ縺ｪ縺ｮ縺ｫ縲∝ｭ蝉ｾ帙▲縺ｽ縺・→縺薙ｍ縺後≠繧九・, vn: "Anh ta lﾃ ngﾆｰ盻拱 l盻嬾 r盻妬 mﾃ cﾃｳ nh盻ｯng nﾃｩt nhﾆｰ tr蘯ｻ con." },
      { jp: "蟷ｴ繧偵→繧九→縲∝ｿ倥ｌ縺｣縺ｽ縺上↑繧九・, vn: "Khi cﾃｳ tu盻品, ngﾆｰ盻拱 ta hay tr盻・nﾃｪn ﾄ妥｣ng trﾃｭ." }
    ],
    quiz: {
      sentence: "縺ゅ・莠ｺ縺ｯ諤偵ｊ________縺九ｉ縲∵ｰ励ｒ縺､縺代◆縺ｻ縺・′縺・＞縲・,
      answer: "縺｣縺ｽ縺・,
      accepts: [],
      hint: "Hay... / Cﾃｳ xu hﾆｰ盻嬾g d盻・b盻・..",
      translation: "Ngﾆｰ盻拱 ﾄ妥ｳ hay cﾃ｡u g蘯ｯt l蘯ｯm nﾃｪn chﾃｺ ﾃｽ thﾃｬ hﾆ｡n."
    }
  },
  {
    id: 74, unit: 7,
    pattern: "縺ｨ縺ｨ繧ゅ↓",
    meaning: "Cﾃｹng v盻嬖... / ﾄ雪ｻ渡g th盻拱 v盻嬖...",
    explanation: "Th盻ｱc hi盻㌻ hﾃnh ﾄ黛ｻ冢g cﾃｹng v盻嬖 ai ﾄ妥ｳ (A縺ｨB縺ｨ縺ｨ繧ゅ↓), ho蘯ｷc khi m盻冲 s盻ｱ vi盻㌘ thay ﾄ黛ｻ品 s蘯ｽ di盻・ ra ﾄ黛ｻ渡g th盻拱 cﾃｹng v盻嬖 s盻ｱ thay ﾄ黛ｻ品 c盻ｧa vi盻㌘ khﾃ｡c.",
    examples: [
      { jp: "螳ｶ譌上→縺ｨ繧ゅ↓譌･譛ｬ縺ｸ譚･縺溘・, vn: "Tﾃｴi ﾄ妥｣ ﾄ黛ｺｿn Nh蘯ｭt B蘯｣n cﾃｹng v盻嬖 gia ﾄ妥ｬnh." },
      { jp: "蟷ｴ繧偵→繧九→縺ｨ繧ゅ↓縲∽ｽ灘鴨縺瑚誠縺｡繧九・, vn: "Cﾃｹng v盻嬖 vi盻㌘ tu盻品 giﾃ ﾄ訴, th盻・l盻ｱc cﾅｩng gi蘯｣m sﾃｺt." }
    ],
    quiz: {
      sentence: "譏･縺ｮ險ｪ繧契_______縲∬干縺悟調縺榊ｧ九ａ縺溘・,
      answer: "縺ｨ縺ｨ繧ゅ↓",
      accepts: ["縺ｨ蜈ｱ縺ｫ"],
      hint: "Cﾃｹng v盻嬖 (s盻ｱ bi蘯ｿn ﾄ黛ｻ品 ﾄ黛ｻ渡g th盻拱)",
      translation: "Cﾃｹng v盻嬖 vi盻㌘ mﾃｹa xuﾃ｢n ﾄ黛ｺｿn, hoa cﾅｩng b蘯ｯt ﾄ黛ｺｧu n盻・"
    }
  },
  {
    id: 75, unit: 7,
    pattern: "縺ｫ縺ｨ繧ゅ↑縺｣縺ｦ / 縺ｨ繧ゅ↑縺・,
    meaning: "Cﾃｹng v盻嬖... / Kﾃｩo theo...",
    explanation: "S盻ｱ thay ﾄ黛ｻ品 c盻ｧa A kﾃｩo theo s盻ｱ thay ﾄ黛ｻ品 c盻ｧa B. Thﾆｰ盻拵g dﾃｹng trong vﾄハ vi蘯ｿt, mﾃｴ t蘯｣ s盻ｱ thay ﾄ黛ｻ品 mang tﾃｭnh quy mﾃｴ l盻嬾, xﾃ｣ h盻冓.",
    examples: [
      { jp: "莠ｺ蜿｣縺ｮ蠅怜刈縺ｫ縺ｨ繧ゅ↑縺｣縺ｦ縲∬牡縲・↑蝠城｡後′襍ｷ縺阪◆縲・, vn: "Cﾃｹng v盻嬖 s盻ｱ gia tﾄハg dﾃ｢n s盻・ nhi盻「 v蘯･n ﾄ黛ｻ・ﾄ妥｣ phﾃ｡t sinh." },
      { jp: "邨梧ｸ医・逋ｺ螻輔↓縺ｨ繧ゅ↑縺・∫腸蠅・′遐ｴ螢翫＆繧後◆縲・, vn: "Kﾃｩo theo s盻ｱ phﾃ｡t tri盻ハ kinh t蘯ｿ, mﾃｴi trﾆｰ盻拵g ﾄ妥｣ b盻・tﾃn phﾃ｡." }
    ],
    quiz: {
      sentence: "蜿ｰ鬚ｨ縺ｮ謗･霑狙_______縲・｢ｨ縺悟ｼｷ縺上↑縺｣縺ｦ縺阪◆縲・,
      answer: "縺ｫ縺ｨ繧ゅ↑縺｣縺ｦ",
      accepts: ["縺ｫ莨ｴ縺｣縺ｦ", "縺ｫ縺ｨ繧ゅ↑縺・, "縺ｫ莨ｴ縺・],
      hint: "Kﾃｩo theo / Cﾃｹng v盻嬖 s盻ｱ... (Kanji: 莨ｴ縺・",
      translation: "Cﾃｹng v盻嬖 vi盻㌘ bﾃ｣o ﾄ疎ng ﾄ黛ｺｿn g蘯ｧn, giﾃｳ ﾄ妥｣ b蘯ｯt ﾄ黛ｺｧu th盻品 m蘯｡nh."
    }
  },

  // --- UNIT 8 ---
  {
    id: 76, unit: 8,
    pattern: "縺ｫ豎ｺ縺ｾ縺｣縺ｦ縺・ｋ",
    meaning: "Ch蘯ｯc ch蘯ｯn lﾃ / Nh蘯･t ﾄ黛ｻ杵h lﾃ",
    explanation: "Th盻・hi盻㌻ s盻ｱ phﾃ｡n ﾄ双ﾃ｡n mang tﾃｭnh ch盻ｧ quan, ﾄ訴nh ninh lﾃ ch蘯ｯc ch蘯ｯn s盻ｱ vi盻㌘ s蘯ｽ nhﾆｰ th蘯ｿ.",
    examples: [
      { jp: "逶ｸ謇九・繝励Ο縺ｪ繧薙□縺九ｉ縲∫ｧ√◆縺｡縺瑚ｲ縺代ｋ縺ｫ豎ｺ縺ｾ縺｣縺ｦ縺・ｋ縲・, vn: "ﾄ雪ｻ訴 th盻ｧ lﾃ dﾃ｢n chuyﾃｪn nghi盻㎝ nﾃｪn ch蘯ｯc ch蘯ｯn chﾃｺng ta s蘯ｽ thua." },
      { jp: "縺ゅｓ縺ｪ縺ｫ蜍牙ｼｷ縺励◆縺ｮ縺縺九ｉ縲∝粋譬ｼ縺吶ｋ縺ｫ豎ｺ縺ｾ縺｣縺ｦ縺・ｋ縲・, vn: "H盻皇 nhi盻「 ﾄ黛ｺｿn th蘯ｿ cﾆ｡ mﾃ, nh蘯･t ﾄ黛ｻ杵h s蘯ｽ ﾄ黛ｻ・" }
    ],
    quiz: {
      sentence: "縺ゅｓ縺ｪ縺ｫ鬮倥＞繧ｫ繝｡繝ｩ縲∫ｧ√↓雋ｷ縺医ｋ________縲・,
      answer: "縺ｫ豎ｺ縺ｾ縺｣縺ｦ縺・ｋ",
      accepts: ["縺ｫ縺阪∪縺｣縺ｦ縺・ｋ"],
      hint: "Ch蘯ｯc ch蘯ｯn lﾃ (cﾃｳ th盻・chia ph盻ｧ ﾄ黛ｻ杵h ng蘯ｧm 盻・trﾆｰ盻嫩)",
      translation: "Cﾃ｡i mﾃ｡y 蘯｣nh ﾄ黛ｺｯt ﾄ黛ｺｿn th蘯ｿ, ch蘯ｯc ch蘯ｯn lﾃ tﾃｴi khﾃｴng mua n盻品 r盻妬."
    }
  },
  {
    id: 77, unit: 8,
    pattern: "縺｣縺・,
    meaning: "Cﾃｳ ph蘯｣i... ﾄ妥ｺng khﾃｴng? / ...蘯･y nh盻・,
    explanation: "Dﾃｹng khi h盻淑 l蘯｡i ﾄ黛ｻ・xﾃ｡c nh蘯ｭn m盻冲 ﾄ訴盻「 mﾃ mﾃｬnh khﾃｴng nh盻・rﾃｵ, ho蘯ｷc t盻ｱ h盻淑 b蘯｣n thﾃ｢n mﾃｬnh.",
    examples: [
      { jp: "莉頑律縺ｯ菴墓屆譌･縺縺｣縺代・, vn: "Hﾃｴm nay lﾃ th盻ｩ m蘯･y 蘯･y nh盻・" },
      { jp: "繝・せ繝医・譏取律縺縺｣縺代・, vn: "Bﾃi ki盻ノ tra lﾃ ngﾃy mai cﾃｳ ph蘯｣i khﾃｴng nh盻・" }
    ],
    quiz: {
      sentence: "縺ゅ・莠ｺ縺ｮ蜷榊燕縲∽ｽ輔□________縲・,
      answer: "縺｣縺・,
      accepts: ["縺縺｣縺・],
      hint: "...蘯･y nh盻・,
      translation: "Tﾃｪn c盻ｧa ngﾆｰ盻拱 kia lﾃ gﾃｬ 蘯･y nh盻・"
    }
  },
  {
    id: 78, unit: 8,
    pattern: "繧医≧縺ｫ",
    meaning: "ﾄ雪ｻ・/ Mong sao...",
    explanation: "Ch盻・m盻･c ﾄ妥ｭch (ﾄ黛ｻ・cﾃｳ th盻・..) ho蘯ｷc dﾃｹng khi c蘯ｧu nguy盻㌻, mong m盻淑 m盻冲 ﾄ訴盻「 gﾃｬ ﾄ妥ｳ.",
    examples: [
      { jp: "蠢倥ｌ縺ｪ縺・ｈ縺・↓縲√Γ繝｢繧偵＠縺ｦ縺翫￥縲・, vn: "Ghi chﾃｺ l蘯｡i ﾄ黛ｻ・khﾃｴng b盻・quﾃｪn." },
      { jp: "隧ｦ鬨薙↓蜷域ｼ縺励∪縺吶ｈ縺・↓縲・, vn: "Mong sao s蘯ｽ ﾄ黛ｻ・k盻ｳ thi." }
    ],
    quiz: {
      sentence: "鬚ｨ驍ｪ繧貞ｼ輔°縺ｪ縺Ю_______縲√さ繝ｼ繝医ｒ逹繧九・,
      answer: "繧医≧縺ｫ",
      accepts: [],
      hint: "ﾄ雪ｻ・(khﾃｴng b盻・..)",
      translation: "Tﾃｴi m蘯ｷc ﾃ｡o khoﾃ｡c ﾄ黛ｻ・khﾃｴng b盻・c蘯｣m."
    }
  },
  {
    id: 79, unit: 8,
    pattern: "繧医≧縺後↑縺・,
    meaning: "Khﾃｴng cﾃｳ cﾃ｡ch nﾃo ﾄ黛ｻ・..",
    explanation: "Cho dﾃｹ mu盻創 lﾃm cﾅｩng khﾃｴng th盻・lﾃm ﾄ柁ｰ盻｣c vﾃｬ khﾃｴng cﾃｳ phﾆｰﾆ｡ng phﾃ｡p, cﾃ｡ch th盻ｩc.",
    examples: [
      { jp: "髮ｻ隧ｱ逡ｪ蜿ｷ繧ゆｽ乗園繧ゅｏ縺九ｉ縺ｪ縺・・縺ｧ縲・｣邨｡縺励ｈ縺・′縺ｪ縺・・, vn: "Khﾃｴng bi蘯ｿt c蘯｣ s盻・ﾄ訴盻㌻ tho蘯｡i l蘯ｫn ﾄ黛ｻ蟻 ch盻・nﾃｪn khﾃｴng cﾃｳ cﾃ｡ch nﾃo liﾃｪn l蘯｡c ﾄ柁ｰ盻｣c." },
      { jp: "縺薙ｓ縺ｪ縺ｫ螢翫ｌ縺ｦ縺・※縺ｯ縲∫峩縺励ｈ縺・′縺ｪ縺・・, vn: "H盻熟g n蘯ｷng th蘯ｿ nﾃy thﾃｬ h蘯ｿt cﾃ｡ch s盻ｭa." }
    ],
    quiz: {
      sentence: "謳ｺ蟶ｯ繧定誠縺ｨ縺励◆縺ｮ縺ｧ縲∝ｽｼ縺ｫ騾｣邨｡縺誉_______縲・,
      answer: "繧医≧縺後↑縺・,
      accepts: ["繧医≧繧ゅ↑縺・],
      hint: "Khﾃｴng cﾃｳ cﾃ｡ch nﾃo (V-masu + 繧医≧縺後↑縺・",
      translation: "Vﾃｬ lﾃm rﾆ｡i ﾄ訴盻㌻ tho蘯｡i r盻妬 nﾃｪn khﾃｴng cﾃｳ cﾃ｡ch nﾃo liﾃｪn l蘯｡c v盻嬖 anh 蘯･y."
    }
  },
  {
    id: 80, unit: 8,
    pattern: "縺ｯ縺壹□",
    meaning: "Ch蘯ｯc ch蘯ｯn lﾃ / Th蘯｣o nﾃo",
    explanation: "Phﾃ｡n ﾄ双ﾃ｡n ch蘯ｯc ch蘯ｯn d盻ｱa trﾃｪn m盻冲 lﾃｽ do, cﾄハ c盻ｩ khﾃ｡ch quan h盻｣p lﾃｽ.",
    examples: [
      { jp: "蠖ｼ縺ｯ譌･譛ｬ縺ｫ10蟷ｴ菴上ｓ縺ｧ縺・◆縺九ｉ縲∵律譛ｬ隱槭′荳頑焔縺ｪ縺ｯ縺壹□縲・, vn: "Anh 蘯･y ﾄ妥｣ s盻創g 盻・Nh蘯ｭt 10 nﾄノ nﾃｪn ti蘯ｿng Nh蘯ｭt ch蘯ｯc ch蘯ｯn lﾃ gi盻淑." },
      { jp: "繝峨い縺碁幕縺九↑縺・る嵯縺後°縺九▲縺ｦ縺・ｋ縺ｯ縺壹□縲・, vn: "C盻ｭa khﾃｴng m盻・ﾄ柁ｰ盻｣c. Ch蘯ｯc ch蘯ｯn lﾃ ﾄ疎ng b盻・khﾃｳa." }
    ],
    quiz: {
      sentence: "阮ｬ繧帝｣ｲ繧薙□縺九ｉ縲√ｂ縺・・縺ｯ荳九′繧祇_______縲・,
      answer: "縺ｯ縺壹□",
      accepts: ["縺ｯ縺・],
      hint: "Ch蘯ｯc ch蘯ｯn lﾃ (d盻ｱa trﾃｪn cﾄハ c盻ｩ)",
      translation: "ﾄ静｣ u盻創g thu盻祖 r盻妬 nﾃｪn ch蘯ｯc ch蘯ｯn lﾃ nhi盻㏄ ﾄ黛ｻ・s蘯ｽ gi蘯｣m."
    }
  },
  {
    id: 81, unit: 8,
    pattern: "繧上￠縺",
    meaning: "Th蘯｣o nﾃo / Vﾃｬ th蘯ｿ nﾃｪn / Nghﾄｩa lﾃ...",
    explanation: "Rﾃｺt ra k蘯ｿt lu蘯ｭn h盻｣p lﾃｽ t盻ｫ lﾃｽ do ﾄ妥｣ bi蘯ｿt, ho蘯ｷc dﾃｹng ﾄ黛ｻ・hi盻ブ ra v蘯･n ﾄ黛ｻ・(th蘯｣o nﾃo).",
    examples: [
      { jp: "螟懈峩縺九＠縺励◆縺九ｉ縲∽ｻ頑律縺ｯ逵縺・ｏ縺代□縲・, vn: "Th盻ｩc khuya nﾃｪn hﾃｴm nay bu盻渡 ng盻ｧ lﾃ ph蘯｣i (th蘯｣o nﾃo)." },
      { jp: "豸郁ｲｻ遞弱′荳翫′縺｣縺溘°繧峨∫黄萓｡繧るｫ倥￥縺ｪ繧九ｏ縺代□縲・, vn: "Thu蘯ｿ tiﾃｪu dﾃｹng tﾄハg nﾃｪn v蘯ｭt giﾃ｡ ﾄ黛ｺｯt lﾃｪn cﾅｩng lﾃ ﾄ訴盻「 hi盻ハ nhiﾃｪn." }
    ],
    quiz: {
      sentence: "豈取律10譎る俣蜍牙ｼｷ縺励※縺・ｋ繧薙〒縺吶°縲よ・邵ｾ縺後＞縺Ю_______縲・,
      answer: "繧上￠縺",
      accepts: ["險ｳ縺", "繧上￠縺ｧ縺吶・"],
      hint: "Th蘯｣o nﾃo... / Hﾃｨn chi...",
      translation: "M盻擁 ngﾃy h盻皇 10 ti蘯ｿng cﾆ｡ ﾃ. Th蘯｣o nﾃo thﾃnh tﾃｭch t盻奏 th蘯ｿ."
    }
  },
  {
    id: 82, unit: 8,
    pattern: "繧上￠縺後↑縺・,
    meaning: "Tuy盻㏄ ﾄ黛ｻ訴 khﾃｴng / L蘯ｽ nﾃo l蘯｡i...",
    explanation: "Ph盻ｧ ﾄ黛ｻ杵h m蘯｡nh m蘯ｽ m盻冲 s盻ｱ vi盻㌘, cho r蘯ｱng ﾄ訴盻「 ﾄ妥ｳ lﾃ khﾃｴng th盻・nﾃo x蘯｣y ra.",
    examples: [
      { jp: "縺薙ｓ縺ｪ髮｣縺励＞蝠城｡後∫ｧ√↓繧上°繧九ｏ縺代′縺ｪ縺・・, vn: "V蘯･n ﾄ黛ｻ・khﾃｳ th蘯ｿ nﾃy, tﾃｴi tuy盻㏄ ﾄ黛ｻ訴 khﾃｴng th盻・nﾃo hi盻ブ n盻品." },
      { jp: "蠖ｼ縺後◎繧薙↑蝌倥ｒ縺､縺上ｏ縺代′縺ｪ縺・・, vn: "L蘯ｽ nﾃo anh 蘯･y l蘯｡i nﾃｳi d盻訴 nhﾆｰ v蘯ｭy." }
    ],
    quiz: {
      sentence: "蜍牙ｼｷ縺励※縺・↑縺・・縺縺九ｉ縲√ユ繧ｹ繝医↓蜿励°繧祇_______縲・,
      answer: "繧上￠縺後↑縺・,
      accepts: ["險ｳ縺後↑縺・],
      hint: "Tuy盻㏄ ﾄ黛ｻ訴 khﾃｴng / Khﾃｴng th盻・nﾃo",
      translation: "Khﾃｴng h盻皇 hﾃnh gﾃｬ c蘯｣ nﾃｪn khﾃｴng th盻・nﾃo ﾄ黛ｻ・bﾃi ki盻ノ tra ﾄ柁ｰ盻｣c."
    }
  },
  {
    id: 83, unit: 8,
    pattern: "繧上￠縺ｧ縺ｯ縺ｪ縺・,
    meaning: "Khﾃｴng h蘯ｳn lﾃ / Khﾃｴng cﾃｳ nghﾄｩa lﾃ",
    explanation: "Ph盻ｧ ﾄ黛ｻ杵h m盻冲 ph蘯ｧn, dﾃｹng ﾄ黛ｻ・ﾄ妥ｭnh chﾃｭnh l蘯｡i m盻冲 nh蘯ｭn ﾄ黛ｻ杵h cﾃｳ v蘯ｻ hi盻ハ nhiﾃｪn nhﾆｰng khﾃｴng hoﾃn toﾃn ﾄ妥ｺng.",
    examples: [
      { jp: "雖後＞縺ｪ繧上￠縺ｧ縺ｯ縺ｪ縺・′縲√≠縺ｾ繧企｣溘∋縺溘￥縺ｪ縺・・, vn: "Khﾃｴng h蘯ｳn lﾃ ghﾃｩt nhﾆｰng mﾃ tﾃｴi khﾃｴng mu盻創 ﾄハ l蘯ｯm." },
      { jp: "譌･譛ｬ莠ｺ縺檎嚀縲∝絢霄ｫ縺悟･ｽ縺阪↑繧上￠縺ｧ縺ｯ縺ｪ縺・・, vn: "Khﾃｴng cﾃｳ nghﾄｩa lﾃ ngﾆｰ盻拱 Nh蘯ｭt nﾃo cﾅｩng thﾃｭch sashimi." }
    ],
    quiz: {
      sentence: "縺企≡縺後≠繧後・蟷ｸ縺帙→縺・≧________縲・,
      answer: "繧上￠縺ｧ縺ｯ縺ｪ縺・,
      accepts: ["險ｳ縺ｧ縺ｯ縺ｪ縺・, "繧上￠縺倥ｃ縺ｪ縺・, "險ｳ縺倥ｃ縺ｪ縺・],
      hint: "Khﾃｴng h蘯ｳn lﾃ / Khﾃｴng cﾃｳ nghﾄｩa lﾃ",
      translation: "Khﾃｴng cﾃｳ nghﾄｩa lﾃ cﾃｳ ti盻］ thﾃｬ s蘯ｽ h蘯｡nh phﾃｺc."
    }
  },
  {
    id: 84, unit: 8,
    pattern: "繧上￠縺ｫ縺ｯ縺・°縺ｪ縺・,
    meaning: "Khﾃｴng th盻・..",
    explanation: "Khﾃｴng th盻・lﾃm vi盻㌘ gﾃｬ ﾄ妥ｳ vﾃｬ lﾃｽ do ﾄ黛ｺ｡o ﾄ黛ｻｩc, trﾃ｡ch nhi盻㍊, lﾆｰﾆ｡ng tﾃ｢m ho蘯ｷc tﾃｬnh hu盻創g xﾃ｣ h盻冓.",
    examples: [
      { jp: "譏取律縺ｯ螟ｧ莠九↑繝・せ繝医′縺ゅｋ縺九ｉ縲・♀縺ｶ繧上￠縺ｫ縺ｯ縺・°縺ｪ縺・・, vn: "Ngﾃy mai cﾃｳ bﾃi ki盻ノ tra quan tr盻肱g nﾃｪn tﾃｴi khﾃｴng th盻・ﾄ訴 chﾆ｡i ﾄ柁ｰ盻｣c." },
      { jp: "辭ｱ縺後≠繧九′縲∽ｻ頑律縺ｯ莨代・繧上￠縺ｫ縺ｯ縺・°縺ｪ縺・・, vn: "Tuy b盻・s盻奏 nhﾆｰng hﾃｴm nay khﾃｴng th盻・ngh盻・ﾄ柁ｰ盻｣c." }
    ],
    quiz: {
      sentence: "邨ｶ蟇ｾ縺ｫ遘伜ｯ・↓縺吶ｋ縺ｨ邏・據縺励◆縺九ｉ縲∬ｩｱ縺兩_______縲・,
      answer: "繧上￠縺ｫ縺ｯ縺・°縺ｪ縺・,
      accepts: ["險ｳ縺ｫ縺ｯ縺・°縺ｪ縺・],
      hint: "Khﾃｴng th盻・(vﾃｬ lﾃｽ do trﾃ｡ch nhi盻㍊/ﾄ黛ｺ｡o ﾄ黛ｻｩc)",
      translation: "ﾄ静｣ h盻ｩa lﾃ tuy盻㏄ ﾄ黛ｻ訴 gi盻ｯ bﾃｭ m蘯ｭt nﾃｪn khﾃｴng th盻・nﾃｳi ra ﾄ柁ｰ盻｣c."
    }
  },
  {
    id: 85, unit: 8,
    pattern: "縺ｪ縺・ｏ縺代↓縺ｯ縺・°縺ｪ縺・,
    meaning: "Khﾃｴng th盻・khﾃｴng / Bu盻冂 ph蘯｣i",
    explanation: "Ph盻ｧ ﾄ黛ｻ杵h 2 l蘯ｧn, mang ﾃｽ nghﾄｩa b蘯ｯt bu盻冂 ph蘯｣i lﾃm vﾃｬ trﾃ｡ch nhi盻㍊ ﾄ黛ｺ｡o ﾄ黛ｻｩc, phﾃｩp t蘯ｯc xﾃ｣ h盻冓.",
    examples: [
      { jp: "隕ｪ蜿九・邨仙ｩ壼ｼ上□縺九ｉ縲∬｡後°縺ｪ縺・ｏ縺代↓縺ｯ縺・°縺ｪ縺・・, vn: "Vﾃｬ lﾃ ﾄ妥｡m cﾆｰ盻嬖 c盻ｧa b蘯｡n thﾃ｢n nﾃｪn tﾃｴi khﾃｴng th盻・khﾃｴng ﾄ訴." },
      { jp: "遉ｾ髟ｷ縺ｮ縺翫＃繧翫□縺九ｉ縲・｣ｲ縺ｾ縺ｪ縺・ｏ縺代↓縺ｯ縺・°縺ｪ縺・・, vn: "Vﾃｬ giﾃ｡m ﾄ黛ｻ祖 bao nﾃｪn khﾃｴng th盻・khﾃｴng u盻創g." }
    ],
    quiz: {
      sentence: "蜈郁ｼｩ縺ｫ鬆ｼ縺ｾ繧後◆莉穂ｺ九□縺九ｉ縲√ｄ繧雲_______縲・,
      answer: "縺ｪ縺・ｏ縺代↓縺ｯ縺・°縺ｪ縺・,
      accepts: ["縺ｪ縺・ｨｳ縺ｫ縺ｯ縺・°縺ｪ縺・],
      hint: "Khﾃｴng th盻・khﾃｴng / Bu盻冂 ph蘯｣i",
      translation: "Vﾃｬ lﾃ cﾃｴng vi盻㌘ ﾄ柁ｰ盻｣c ti盻］ b盻訴 nh盻・nﾃｪn khﾃｴng th盻・khﾃｴng lﾃm."
    }
  },

  // --- UNIT 9 ---
  {
    id: 86, unit: 9,
    pattern: "縺九ｏ繧・縺ｫ)",
    meaning: "Thay vﾃｬ / ﾄ雪ｻ品 l蘯｡i",
    explanation: "Lﾃm vi盻㌘ nﾃy thay cho vi盻㌘ khﾃ｡c, ho蘯ｷc lﾃm m盻冲 vi盻㌘ ﾄ黛ｻ・bﾃｹ ﾄ黛ｺｯp, ﾄ黛ｻ品 l蘯｡i cho m盻冲 vi盻㌘ khﾃ｡c.",
    examples: [
      { jp: "譏逕ｻ縺ｫ陦後￥縺九ｏ繧翫↓縲∝ｮｶ縺ｧDVD繧定ｦ九◆縲・, vn: "Thay vﾃｬ ﾄ訴 xem phim, tﾃｴi ﾄ妥｣ xem DVD 盻・nhﾃ." },
      { jp: "謇倶ｼ昴▲縺ｦ繧ゅｉ縺・°繧上ｊ縺ｫ縲∵仂縺秘｣ｯ繧偵＃縺｡縺昴≧縺吶ｋ縲・, vn: "ﾄ雪ｻ品 l蘯｡i vi盻㌘ ﾄ柁ｰ盻｣c giﾃｺp ﾄ黛ｻ｡, tﾃｴi s蘯ｽ bao b盻ｯa trﾆｰa." }
    ],
    quiz: {
      sentence: "譌･譖懈律縺ｫ蜒阪￥________縲∵怦譖懈律縺ｫ莨代・縲・,
      answer: "縺九ｏ繧翫↓",
      accepts: ["莉｣繧上ｊ縺ｫ", "縺九ｏ繧・, "莉｣繧上ｊ"],
      hint: "Thay vﾃｬ / ﾄ雪ｻ品 l蘯｡i (Kanji: 莉｣繧上ｊ)",
      translation: "ﾄ雪ｻ品 l蘯｡i vi盻㌘ ﾄ訴 lﾃm vﾃo Ch盻ｧ nh蘯ｭt, tﾃｴi s蘯ｽ ngh盻・vﾃo th盻ｩ Hai."
    }
  },
  {
    id: 87, unit: 9,
    pattern: "縺ｫ縺九ｏ縺｣縺ｦ / 縺九ｏ繧・,
    meaning: "Thay cho (ai ﾄ妥ｳ / cﾃ｡i gﾃｬ ﾄ妥ｳ)",
    explanation: "ﾄ雪ｺ｡i di盻㌻, lﾃm thay m盻冲 vi盻㌘ mﾃ v盻創 dﾄｩ ngﾆｰ盻拱 khﾃ｡c ho蘯ｷc v蘯ｭt khﾃ｡c thﾆｰ盻拵g lﾃm.",
    examples: [
      { jp: "遉ｾ髟ｷ縺ｫ縺九ｏ縺｣縺ｦ縲∫ｧ√′縺疲肩諡ｶ逕ｳ縺嶺ｸ翫￡縺ｾ縺吶・, vn: "Thay m蘯ｷt giﾃ｡m ﾄ黛ｻ祖, tﾃｴi xin g盻ｭi l盻拱 chﾃo." },
      { jp: "驥守帥縺ｫ縺九ｏ繧翫√し繝・き繝ｼ縺御ｺｺ豌励↓縺ｪ縺｣縺ｦ縺・ｋ縲・, vn: "Thay cho bﾃｳng chﾃy, bﾃｳng ﾄ妥｡ ﾄ疎ng tr盻・nﾃｪn ﾄ柁ｰ盻｣c yﾃｪu thﾃｭch." }
    ],
    quiz: {
      sentence: "逞・ｰ励・豈浩_______縲∫ｧ√′譁咏炊繧剃ｽ懊▲縺溘・,
      answer: "縺ｫ縺九ｏ縺｣縺ｦ",
      accepts: ["縺ｫ莉｣繧上▲縺ｦ", "縺ｫ縺九ｏ繧・, "縺ｫ莉｣繧上ｊ"],
      hint: "Thay cho (ﾄ雪ｺ｡i di盻㌻ lﾃm thay)",
      translation: "Thay cho ngﾆｰ盻拱 m蘯ｹ ﾄ疎ng 盻僧, tﾃｴi ﾄ妥｣ n蘯･u ﾄハ."
    }
  },
  {
    id: 88, unit: 9,
    pattern: "縺薙◎",
    meaning: "Chﾃｭnh lﾃ / Nh蘯･t ﾄ黛ｻ杵h lﾃ",
    explanation: "Nh蘯･n m蘯｡nh vﾃo t盻ｫ ﾄ黛ｻｩng trﾆｰ盻嫩 nﾃｳ, lo蘯｡i b盻・cﾃ｡c kh蘯｣ nﾄハg khﾃ｡c.",
    examples: [
      { jp: "莉雁ｹｴ縺薙◎N3縺ｫ蜷域ｼ縺励◆縺・・, vn: "Chﾃｭnh nﾄノ nay tﾃｴi mu盻創 thi ﾄ黛ｻ・N3." },
      { jp: "縺ゅ↑縺溘％縺昴∫ｧ√・謗｢縺励※縺・◆莠ｺ縺縲・, vn: "Em chﾃｭnh lﾃ ngﾆｰ盻拱 mﾃ anh ﾄ疎ng tﾃｬm ki蘯ｿm." }
    ],
    quiz: {
      sentence: "譏取律________縲∫ｵｶ蟇ｾ縺ｫ驕・綾縺励↑縺・・,
      answer: "縺薙◎",
      accepts: [],
      hint: "Chﾃｭnh lﾃ (Nh蘯･n m蘯｡nh)",
      translation: "Chﾃｭnh ngﾃy mai, tuy盻㏄ ﾄ黛ｻ訴 tﾃｴi s蘯ｽ khﾃｴng ﾄ黛ｺｿn mu盻冢."
    }
  },
  {
    id: 89, unit: 9,
    pattern: "縺輔∴",
    meaning: "Ngay c蘯｣ / Th蘯ｭm chﾃｭ",
    explanation: "ﾄ脆ｰa ra m盻冲 vﾃｭ d盻･ c盻ｱc ﾄ双an, mang ﾃｽ nghﾄｩa 'ﾄ黛ｺｿn cﾃ｡i ﾄ妥ｳ cﾃｲn nhﾆｰ th蘯ｿ, hu盻創g chi nh盻ｯng cﾃ｡i khﾃ｡c'.",
    examples: [
      { jp: "縺ｲ繧峨′縺ｪ縺輔∴譖ｸ縺代↑縺・・, vn: "Ngay c蘯｣ hiragana tﾃｴi cﾅｩng khﾃｴng vi蘯ｿt ﾄ柁ｰ盻｣c." },
      { jp: "縺薙・蝠城｡後・縲∝ｭ蝉ｾ帙〒縺輔∴繧上°繧九・, vn: "V蘯･n ﾄ黛ｻ・nﾃy, ngay c蘯｣ tr蘯ｻ con cﾅｩng hi盻ブ." }
    ],
    quiz: {
      sentence: "蠢吶＠縺吶℃縺ｦ縲∝ｯ昴ｋ譎る俣________縺ｪ縺・・,
      answer: "縺輔∴",
      accepts: [],
      hint: "Ngay c蘯｣ / Th蘯ｭm chﾃｭ",
      translation: "Quﾃ｡ b蘯ｭn r盻冢, ﾄ黛ｺｿn c蘯｣ th盻拱 gian ng盻ｧ cﾅｩng khﾃｴng cﾃｳ."
    }
  },
  {
    id: 90, unit: 9,
    pattern: "縺ｨ縺励※",
    meaning: "V盻嬖 tﾆｰ cﾃ｡ch lﾃ / Nhﾆｰ lﾃ",
    explanation: "Ch盻・tﾆｰ cﾃ｡ch, l蘯ｭp trﾆｰ盻拵g, vai trﾃｲ ho蘯ｷc danh nghﾄｩa c盻ｧa m盻冲 ngﾆｰ盻拱 hay s盻ｱ v蘯ｭt.",
    examples: [
      { jp: "蠖ｼ縺ｯ逡吝ｭｦ逕溘→縺励※譌･譛ｬ縺ｸ譚･縺溘・, vn: "Anh 蘯･y ﾄ黛ｺｿn Nh蘯ｭt B蘯｣n v盻嬖 tﾆｰ cﾃ｡ch lﾃ du h盻皇 sinh." },
      { jp: "縺薙・蟒ｺ迚ｩ縺ｯ縲∵・縺ｯ縺雁ｯｺ縺ｨ縺励※菴ｿ繧上ｌ縺ｦ縺・◆縲・, vn: "Tﾃｲa nhﾃ nﾃy ngﾃy xﾆｰa ﾄ柁ｰ盻｣c dﾃｹng nhﾆｰ m盻冲 ngﾃｴi chﾃｹa." }
    ],
    quiz: {
      sentence: "蠖ｼ縺ｯ蜈育函________縺薙・蟄ｦ譬｡縺ｧ蜒阪＞縺ｦ縺・ｋ縲・,
      answer: "縺ｨ縺励※",
      accepts: [],
      hint: "V盻嬖 tﾆｰ cﾃ｡ch lﾃ",
      translation: "Anh 蘯･y lﾃm vi盻㌘ 盻・trﾆｰ盻拵g nﾃy v盻嬖 tﾆｰ cﾃ｡ch lﾃ giﾃ｡o viﾃｪn."
    }
  },
  {
    id: 91, unit: 9,
    pattern: "縺九ｉ縺ｨ縺・▲縺ｦ",
    meaning: "Ch盻・vﾃｬ... mﾃ (khﾃｴng h蘯ｳn...)",
    explanation: "Dﾃｹ cﾃｳ lﾃｽ do ﾄ妥ｳ ﾄ訴 chﾄハg n盻ｯa, thﾃｬ k蘯ｿt lu蘯ｭn phﾃｭa sau cﾅｩng khﾃｴng h蘯ｳn lﾃ nhﾆｰ mong ﾄ黛ｻ｣i (thﾆｰ盻拵g ﾄ訴 v盻嬖 ph盻ｧ ﾄ黛ｻ杵h m盻冲 ph蘯ｧn 盻・v蘯ｿ sau).",
    examples: [
      { jp: "譌･譛ｬ莠ｺ縺縺九ｉ縺ｨ縺・▲縺ｦ縲∵ｼ｢蟄励′蜈ｨ驛ｨ譖ｸ縺代ｋ繧上￠縺ｧ縺ｯ縺ｪ縺・・, vn: "Khﾃｴng ph蘯｣i c盻ｩ lﾃ ngﾆｰ盻拱 Nh蘯ｭt thﾃｬ cﾃｳ th盻・vi蘯ｿt ﾄ柁ｰ盻｣c h蘯ｿt Kanji." },
      { jp: "萓ｿ蛻ｩ縺縺九ｉ縺ｨ縺・▲縺ｦ縲∽ｽｿ縺・☆縺弱ｋ縺ｮ縺ｯ繧医￥縺ｪ縺・・, vn: "Ch盻・vﾃｬ ti盻㌻ l盻｣i mﾃ l蘯｡m d盻･ng quﾃ｡ thﾃｬ cﾅｩng khﾃｴng t盻奏." }
    ],
    quiz: {
      sentence: "縺企≡縺後≠繧祇_______縲∝ｹｸ縺帙□縺ｨ縺ｯ髯舌ｉ縺ｪ縺・・,
      answer: "縺九ｉ縺ｨ縺・▲縺ｦ",
      accepts: ["縺九ｉ縺｣縺ｦ"],
      hint: "Ch盻・vﾃｬ... mﾃ (khﾃｴng h蘯ｳn)",
      translation: "Khﾃｴng h蘯ｳn c盻ｩ cﾃｳ ti盻］ lﾃ s蘯ｽ h蘯｡nh phﾃｺc."
    }
  },
  {
    id: 92, unit: 9,
    pattern: "縺ｫ蜿阪＠(縺ｦ)",
    meaning: "Trﾃ｡i v盻嬖",
    explanation: "Trﾃ｡i ngﾆｰ盻｣c v盻嬖 d盻ｱ ﾄ双ﾃ｡n, k盻ｳ v盻肱g, hy v盻肱g ho蘯ｷc quy t蘯ｯc.",
    examples: [
      { jp: "縺ｿ繧薙↑縺ｮ莠域Φ縺ｫ蜿阪＠縺ｦ縲、繝√・繝縺悟━蜍昴＠縺溘・, vn: "Trﾃ｡i v盻嬖 d盻ｱ ﾄ双ﾃ｡n c盻ｧa m盻絞 ngﾆｰ盻拱, ﾄ黛ｻ冓 A ﾄ妥｣ giﾃnh vﾃｴ ﾄ黛ｻ議h." },
      { jp: "隕ｪ縺ｮ譛溷ｾ・↓蜿阪＠縺ｦ縲∝ｽｼ縺ｯ螟ｧ蟄ｦ繧偵ｄ繧√※縺励∪縺｣縺溘・, vn: "Trﾃ｡i v盻嬖 k盻ｳ v盻肱g c盻ｧa cha m蘯ｹ, anh 蘯･y ﾄ妥｣ b盻・ﾄ黛ｺ｡i h盻皇." }
    ],
    quiz: {
      sentence: "螟ｩ豌嶺ｺ亥ｱ________縲・岑縺碁剄縺｣縺溘・,
      answer: "縺ｫ蜿阪＠縺ｦ",
      accepts: ["縺ｫ蜿阪＠"],
      hint: "Trﾃ｡i v盻嬖 (D盻ｱ ﾄ双ﾃ｡n, k盻ｳ v盻肱g)",
      translation: "Trﾃ｡i v盻嬖 d盻ｱ bﾃ｡o th盻拱 ti蘯ｿt, tr盻拱 ﾄ妥｣ mﾆｰa."
    }
  },
  {
    id: 93, unit: 9,
    pattern: "縺ｫ繧ゅ→縺･縺・※ / 繧ゅ→縺･縺・,
    meaning: "D盻ｱa trﾃｪn (cﾆ｡ s盻・/ d盻ｯ li盻㎡)",
    explanation: "D盻ｱa trﾃｪn nh盻ｯng cﾆ｡ s盻・chu蘯ｩn m盻ｱc rﾃｵ rﾃng nhﾆｰ d盻ｯ li盻㎡, lu蘯ｭt l盻・ k蘯ｿt qu蘯｣ ﾄ訴盻「 tra ﾄ黛ｻ・th盻ｱc hi盻㌻ hﾃnh ﾄ黛ｻ冢g.",
    examples: [
      { jp: "隱ｿ譟ｻ邨先棡縺ｫ繧ゅ→縺･縺・※縲√Ξ繝昴・繝医ｒ譖ｸ縺・◆縲・, vn: "Tﾃｴi ﾄ妥｣ vi蘯ｿt bﾃ｡o cﾃ｡o d盻ｱa trﾃｪn k蘯ｿt qu蘯｣ ﾄ訴盻「 tra." },
      { jp: "豕募ｾ九↓繧ゅ→縺･縺阪∵ｱｺ螳壹＆繧後ｋ縲・, vn: "ﾄ脆ｰ盻｣c quy蘯ｿt ﾄ黛ｻ杵h d盻ｱa trﾃｪn lu蘯ｭt phﾃ｡p." }
    ],
    quiz: {
      sentence: "縺薙・險育判縺ｯ縲√ョ繝ｼ繧ｿ________菴懊ｉ繧後※縺・ｋ縲・,
      answer: "縺ｫ繧ゅ→縺･縺・※",
      accepts: ["縺ｫ蝓ｺ縺･縺・※", "縺ｫ繧ゅ→縺･縺・, "縺ｫ蝓ｺ縺･縺・],
      hint: "D盻ｱa trﾃｪn (D盻ｯ li盻㎡/Cﾆ｡ s盻・- Kanji: 蝓ｺ縺･縺・",
      translation: "K蘯ｿ ho蘯｡ch nﾃy ﾄ柁ｰ盻｣c l蘯ｭp ra d盻ｱa trﾃｪn d盻ｯ li盻㎡."
    }
  },
  {
    id: 94, unit: 9,
    pattern: "繧偵ｂ縺ｨ縺ｫ(縺励※)",
    meaning: "D盻ｱa trﾃｪn (ch蘯･t li盻㎡ / ﾃｽ tﾆｰ盻殤g)",
    explanation: "L蘯･y m盻冲 s盻ｱ th蘯ｭt, m盻冲 cﾃ｢u chuy盻㌻, kinh nghi盻㍊ lﾃm ch蘯･t li盻㎡, ngu盻渡 c蘯｣m h盻ｩng ﾄ黛ｻ・sﾃ｡ng t蘯｡o ra m盻冲 cﾃ｡i m盻嬖.",
    examples: [
      { jp: "縺薙・譏逕ｻ縺ｯ莠句ｮ溘ｒ繧ゅ→縺ｫ縺励※菴懊ｉ繧後◆縲・, vn: "B盻・phim nﾃy ﾄ柁ｰ盻｣c lﾃm d盻ｱa trﾃｪn s盻ｱ th蘯ｭt." },
      { jp: "譌･譛ｬ縺ｮ貍ｫ逕ｻ繧偵ｂ縺ｨ縺ｫ縺励◆繧ｲ繝ｼ繝縺悟､壹＞縲・, vn: "Cﾃｳ r蘯･t nhi盻「 game ﾄ柁ｰ盻｣c t蘯｡o ra d盻ｱa trﾃｪn manga c盻ｧa Nh蘯ｭt B蘯｣n." }
    ],
    quiz: {
      sentence: "縺薙・蟆剰ｪｬ縺ｯ縲∽ｽ懆・・邨碁ｨ点_______譖ｸ縺九ｌ縺溘・,
      answer: "繧偵ｂ縺ｨ縺ｫ縺励※",
      accepts: ["繧偵ｂ縺ｨ縺ｫ"],
      hint: "D盻ｱa trﾃｪn (Tﾆｰ li盻㎡ sﾃ｡ng tﾃ｡c - Kanji: 蝓ｺ縺ｫ)",
      translation: "Cu盻創 ti盻ブ thuy蘯ｿt nﾃy ﾄ柁ｰ盻｣c vi蘯ｿt d盻ｱa trﾃｪn kinh nghi盻㍊ c盻ｧa tﾃ｡c gi蘯｣."
    }
  },
  {
    id: 95, unit: 9,
    pattern: "蜿埼擇 / 蜊企擇",
    meaning: "M蘯ｷt khﾃ｡c / Ngﾆｰ盻｣c l蘯｡i",
    explanation: "Di盻・ t蘯｣ cﾃｹng m盻冲 s盻ｱ v蘯ｭt, s盻ｱ vi盻㌘ nhﾆｰng l蘯｡i t盻渡 t蘯｡i hai m蘯ｷt trﾃ｡i ngﾆｰ盻｣c nhau.",
    examples: [
      { jp: "驛ｽ莨壹・逕滓ｴｻ縺ｯ萓ｿ蛻ｩ縺ｪ蜿埼擇縲√せ繝医Ξ繧ｹ繧ょ､壹＞縲・, vn: "Cu盻冂 s盻創g 盻・ﾄ妥ｴ th盻・m盻冲 m蘯ｷt thﾃｬ ti盻㌻ l盻｣i, nhﾆｰng m蘯ｷt khﾃ｡c cﾅｩng nhi盻「 cﾄハg th蘯ｳng." },
      { jp: "蠖ｼ縺ｯ蜆ｪ縺励＞蜿埼擇縲∵偵ｋ縺ｨ諤悶＞縲・, vn: "Anh 蘯･y hi盻］ lﾃnh nhﾆｰng ngﾆｰ盻｣c l蘯｡i, khi n盻品 gi蘯ｭn l蘯｡i r蘯･t ﾄ妥｡ng s盻｣." }
    ],
    quiz: {
      sentence: "縺薙・阮ｬ縺ｯ繧医￥蜉ｹ縺柔_______縲∝憶菴懃畑繧ゅ≠繧九・,
      answer: "蜿埼擇",
      accepts: ["蜊企擇", "縺ｯ繧薙ａ繧・],
      hint: "M蘯ｷt khﾃ｡c (2 m蘯ｷt c盻ｧa 1 v蘯･n ﾄ黛ｻ・",
      translation: "Lo蘯｡i thu盻祖 nﾃy cﾃｳ hi盻㎡ qu蘯｣ t盻奏, nhﾆｰng m蘯ｷt khﾃ｡c cﾅｩng cﾃｳ tﾃ｡c d盻･ng ph盻･."
    }
  },
  {
    id: 96, unit: 9,
    pattern: "繧後ｋ / 繧峨ｌ繧・(閾ｪ逋ｺ)",
    meaning: "T盻ｱ nhiﾃｪn c蘯｣m th蘯･y / G盻｣i nh盻・ﾄ黛ｺｿn",
    explanation: "Dﾃｹng th盻・b盻・ﾄ黛ｻ冢g ﾄ黛ｻ・di盻・ t蘯｣ m盻冲 c蘯｣m xﾃｺc, ﾃｽ nghﾄｩ t盻ｱ nhiﾃｪn n蘯｣y sinh trong lﾃｲng mﾃ khﾃｴng c盻・ﾃｽ.",
    examples: [
      { jp: "縺薙・蜀咏悄繧定ｦ九ｋ縺ｨ縲∵・縺ｮ縺薙→縺梧昴＞蜃ｺ縺輔ｌ繧九・, vn: "Nhﾃｬn b盻ｩc 蘯｣nh nﾃy, tﾃｴi l蘯｡i t盻ｱ nhiﾃｪn nh盻・v盻・ngﾃy xﾆｰa." },
      { jp: "蠖ｼ縺ｮ蟆・擂縺梧｡医§繧峨ｌ繧九・, vn: "Tﾃｴi c盻ｩ c蘯｣m th蘯･y lo l蘯ｯng cho tﾆｰﾆ｡ng lai c盻ｧa anh 蘯･y." }
    ],
    quiz: {
      sentence: "縺薙・豁後ｒ閨槭￥縺ｨ縲∵・縺ｮ縺薙→縺梧昴＞________縲・,
      answer: "蜃ｺ縺輔ｌ繧・,
      accepts: ["縺縺輔ｌ繧・],
      hint: "T盻ｱ nhiﾃｪn nh盻・ﾄ黛ｺｿn (Th盻・b盻・ﾄ黛ｻ冢g c盻ｧa 諤昴＞蜃ｺ縺・",
      translation: "Nghe bﾃi hﾃ｡t nﾃy, chuy盻㌻ ngﾃy xﾆｰa l蘯｡i ﾃｹa v盻・"
    }
  },
  {
    id: 97, unit: 9,
    pattern: "縺ｦ縺溘∪繧峨↑縺・,
    meaning: "R蘯･t... khﾃｴng ch盻丘 n盻品",
    explanation: "Nh蘯･n m蘯｡nh c蘯｣m giﾃ｡c cﾆ｡ th盻・ho蘯ｷc tﾃ｢m lﾃｽ m蘯｡nh m蘯ｽ ﾄ黛ｺｿn m盻ｩc b蘯｣n thﾃ｢n khﾃｴng th盻・ki盻［ ch蘯ｿ ﾄ柁ｰ盻｣c.",
    examples: [
      { jp: "莉頑律縺ｯ證代￥縺ｦ縺溘∪繧峨↑縺・・, vn: "Hﾃｴm nay nﾃｳng khﾃｴng ch盻丘 n盻品." },
      { jp: "譁ｰ縺励＞繧ｲ繝ｼ繝縺梧ｬｲ縺励￥縺ｦ縺溘∪繧峨↑縺・・, vn: "Tﾃｴi mu盻創 cﾃｳ trﾃｲ chﾆ｡i m盻嬖 ﾄ黛ｺｿn m盻ｩc khﾃｴng ch盻丘 n盻品." }
    ],
    quiz: {
      sentence: "蝟峨′貂・＞________縲∝・縺溘＞豌ｴ縺碁｣ｲ縺ｿ縺溘＞縲・,
      answer: "縺ｦ縺溘∪繧峨↑縺・,
      accepts: [],
      hint: "R蘯･t... khﾃｴng ch盻丘 n盻品 (C蘯｣m giﾃ｡c cﾆ｡ th盻・",
      translation: "Khﾃ｡t khﾃｴ c蘯｣ c盻・khﾃｴng ch盻丘 n盻品, tﾃｴi mu盻創 u盻創g nﾆｰ盻嫩 l蘯｡nh."
    }
  },
  {
    id: 98, unit: 9,
    pattern: "縺ｦ縺ｪ繧峨↑縺・,
    meaning: "R蘯･t... (T盻ｱ nhiﾃｪn c蘯｣m th蘯･y)",
    explanation: "C蘯｣m xﾃｺc t盻ｱ nhiﾃｪn dﾃ｢ng trﾃo khﾃｴng kﾃｬm nﾃｩn ﾄ柁ｰ盻｣c (thﾆｰ盻拵g dﾃｹng cho cﾃ｡c c蘯｣m xﾃｺc tiﾃｪu c盻ｱc nhﾆｰ lo l蘯ｯng, h盻訴 ti蘯ｿc). Vﾄハ phong trang tr盻肱g hﾆ｡n 縺ｦ縺溘∪繧峨↑縺・",
    examples: [
      { jp: "蝗ｽ縺ｮ螳ｶ譌上・縺薙→縺悟ｿ・・縺ｧ縺ｪ繧峨↑縺・・, vn: "Tﾃｴi vﾃｴ cﾃｹng lo l蘯ｯng cho gia ﾄ妥ｬnh 盻・quﾃｪ." },
      { jp: "隧ｦ蜷医↓雋縺代◆縺薙→縺梧ｮ句ｿｵ縺ｧ縺ｪ繧峨↑縺・・, vn: "Th蘯ｭt vﾃｴ cﾃｹng ﾄ妥｡ng ti蘯ｿc khi b盻・thua trong tr蘯ｭn ﾄ黛ｺ･u." }
    ],
    quiz: {
      sentence: "髱｢謗･縺ｮ邨先棡縺梧ｰ励↓縺ｪ縺｣________縲・,
      answer: "縺ｦ縺ｪ繧峨↑縺・,
      accepts: [],
      hint: "Vﾃｴ cﾃｹng... (C蘯｣m xﾃｺc t盻ｱ nhiﾃｪn sinh ra, trang tr盻肱g)",
      translation: "Tﾃｴi vﾃｴ cﾃｹng b蘯ｭn tﾃ｢m v盻・k蘯ｿt qu蘯｣ c盻ｧa bu盻品 ph盻熟g v蘯･n."
    }
  },

  // --- UNIT 10 ---
  {
    id: 99, unit: 10,
    pattern: "縺ｨ縺・,
    meaning: "Vﾃｭ d盻･ nhﾆｰ lﾃ / Hay lﾃ",
    explanation: "Dﾃｹng ﾄ黛ｻ・li盻㏄ kﾃｪ m盻冲 vﾃi vﾃｭ d盻･, mang tﾃｭnh ch蘯･t g盻｣i ﾃｽ ho蘯ｷc khi ngﾆｰ盻拱 nﾃｳi khﾃｴng mu盻創 kh蘯ｳng ﾄ黛ｻ杵h ch蘯ｯc ch蘯ｯn.",
    examples: [
      { jp: "莨第律縺ｯ譏逕ｻ繧定ｦ九ｋ縺ｨ縺九∬ｲｷ縺・黄縺ｫ陦後￥縺ｨ縺九＠縺ｦ驕弱＃縺励∪縺吶・, vn: "Ngﾃy ngh盻・tﾃｴi thﾆｰ盻拵g dﾃnh th盻拱 gian xem phim ho蘯ｷc ﾄ訴 mua s蘯ｯm." },
      { jp: "鬆ｭ縺檎李縺・→縺九∫・縺後≠繧九→縺九〒莨代・莠ｺ縺悟､壹＞縲・, vn: "Cﾃｳ nhi盻「 ngﾆｰ盻拱 ngh盻・h盻皇 v盻嬖 lﾃｽ do nhﾆｰ lﾃ ﾄ疎u ﾄ黛ｺｧu hay b盻・s盻奏." }
    ],
    quiz: {
      sentence: "莨代∩縺ｮ譌･縺ｯ縲∵悽繧定ｪｭ繧________縲・浹讌ｽ繧定◇縺柔_______縺励※縺・∪縺吶・,
      answer: "縺ｨ縺・,
      accepts: [],
      hint: "Li盻㏄ kﾃｪ cﾃ｡c vﾃｭ d盻･ (nhﾆｰ lﾃ...)",
      translation: "Vﾃo ngﾃy ngh盻・tﾃｴi thﾆｰ盻拵g ﾄ黛ｻ皇 sﾃ｡ch hay lﾃ nghe nh蘯｡c."
    }
  },
  {
    id: 100, unit: 10,
    pattern: "縺縺・,
    meaning: "Ch盻・/ ﾄ雪ｺｿn m盻ｩc t盻訴 ﾄ疎 cﾃｳ th盻・,
    explanation: "Bi盻ブ th盻・s盻ｱ gi盻嬖 h蘯｡n (ch盻・cﾃｳ) ho蘯ｷc lﾃm m盻冲 vi盻㌘ gﾃｬ ﾄ妥ｳ ﾄ黛ｺｿn m盻ｩc ﾄ黛ｻ・cao nh蘯･t cﾃｳ th盻・(vﾃｭ d盻･: 螂ｽ縺阪↑縺縺・- th盻渋 thﾃｭch).",
    examples: [
      { jp: "遘√′謖√▲縺ｦ縺・ｋ縺企≡縺ｯ縺薙ｌ縺縺代〒縺吶・, vn: "S盻・ti盻］ tﾃｴi cﾃｳ ch盻・b蘯ｱng nﾃy thﾃｴi." },
      { jp: "繝薙Η繝・ヵ繧ｧ縺ｪ縺ｮ縺ｧ縲∝･ｽ縺阪↑縺縺鷹｣溘∋縺ｦ縺上□縺輔＞縲・, vn: "Vﾃｬ lﾃ buffet nﾃｪn hﾃ｣y ﾄハ th盻渋 thﾃｭch (ﾄ黛ｺｿn m盻ｩc b蘯｡n mu盻創)." }
    ],
    quiz: {
      sentence: "莉頑律縺ｯ逍ｲ繧後◆縺ｮ縺ｧ縲√％繧契_______縺ｫ縺励※縺翫″縺ｾ縺吶・,
      answer: "縺縺・,
      accepts: [],
      hint: "Ch盻・(m盻ｩc ﾄ黛ｻ・gi盻嬖 h蘯｡n)",
      translation: "Hﾃｴm nay tﾃｴi m盻㏄ r盻妬 nﾃｪn ch盻・lﾃm ﾄ黛ｺｿn ﾄ妥｢y thﾃｴi."
    }
  },
  {
    id: 101, unit: 10,
    pattern: "縺ｰ縺九ｊ縺ｧ縺ｪ縺・,
    meaning: "Khﾃｴng ch盻・.. mﾃ cﾃｲn...",
    explanation: "Ngoﾃi s盻ｱ v蘯ｭt/s盻ｱ vi盻㌘ ﾄ妥ｳ ra thﾃｬ cﾃｲn cﾃｳ cﾃ｡i khﾃ｡c n盻ｯa (thﾆｰ盻拵g mang ﾃｽ nghﾄｩa c盻冢g thﾃｪm vﾃo).",
    examples: [
      { jp: "蠖ｼ縺ｯ闍ｱ隱槭・縺九ｊ縺ｧ縺ｪ縺上√ヵ繝ｩ繝ｳ繧ｹ隱槭ｂ隧ｱ縺帙ｋ縲・, vn: "Anh 蘯･y khﾃｴng ch盻・nﾃｳi ﾄ柁ｰ盻｣c ti蘯ｿng Anh mﾃ cﾃｲn nﾃｳi ﾄ柁ｰ盻｣c ti蘯ｿng Phﾃ｡p." },
      { jp: "縺薙・繝ｬ繧ｹ繝医Λ繝ｳ縺ｯ鄒主袖縺励＞縺ｰ縺九ｊ縺ｧ縺ｪ縺上∝､谿ｵ繧ょｮ峨＞縲・, vn: "Nhﾃ hﾃng nﾃy khﾃｴng ch盻・ngon mﾃ giﾃ｡ cﾃｲn r蘯ｻ." }
    ],
    quiz: {
      sentence: "蠖ｼ螂ｳ縺ｯ鄒弱＠縺Ю_______縲∵ｧ譬ｼ繧ゅ＞縺・・,
      answer: "縺ｰ縺九ｊ縺ｧ縺ｪ縺・,
      accepts: ["縺ｰ縺九ｊ縺・],
      hint: "Khﾃｴng ch盻・.. mﾃ cﾃｲn...",
      translation: "Cﾃｴ 蘯･y khﾃｴng ch盻・xinh ﾄ黛ｺｹp mﾃ tﾃｭnh cﾃ｡ch cﾅｩng t盻奏."
    }
  },
  {
    id: 102, unit: 10,
    pattern: "縺九￠ / 縺九￠繧・,
    meaning: "ﾄ紳ng lﾃm d盻・/ Chﾆｰa xong",
    explanation: "Ch盻・m盻冲 hﾃnh ﾄ黛ｻ冢g ﾄ疎ng ﾄ柁ｰ盻｣c th盻ｱc hi盻㌻ gi盻ｯa ch盻ｫng thﾃｬ d盻ｫng l蘯｡i, v蘯ｫn chﾆｰa hoﾃn thﾃnh xong.",
    examples: [
      { jp: "繝・・繝悶Ν縺ｮ荳翫↓鬟溘∋縺九￠縺ｮ繝ｪ繝ｳ繧ｴ縺後≠繧九・, vn: "Trﾃｪn bﾃn cﾃｳ qu蘯｣ tﾃ｡o ﾄ疎ng ﾄハ d盻・" },
      { jp: "螳ｿ鬘後ｒ繧・ｊ縺九￠縺溘′縲∝暑驕斐′譚･縺溘・縺ｧ繧・ａ縺溘・, vn: "ﾄ紳ng lﾃm d盻・bﾃi t蘯ｭp thﾃｬ b蘯｡n ﾄ黛ｺｿn nﾃｪn tﾃｴi d盻ｫng l蘯｡i." }
    ],
    quiz: {
      sentence: "縺薙・譛ｬ縺ｯ縺ｾ縺隱ｭ縺ｿ________縺縲・,
      answer: "縺九￠",
      accepts: ["縺九￠縺ｮ", "縺九￠縺ｦ縺・ｋ"],
      hint: "ﾄ紳ng lﾃm d盻・(V-masu + 縺九￠)",
      translation: "Cu盻創 sﾃ｡ch nﾃy tﾃｴi v蘯ｫn ﾄ疎ng ﾄ黛ｻ皇 d盻・"
    }
  },
  {
    id: 103, unit: 10,
    pattern: "繧偵％繧√※",
    meaning: "G盻ｭi g蘯ｯm (tﾃｬnh c蘯｣m, tﾃ｢m tﾆｰ) vﾃo...",
    explanation: "Lﾃm vi盻㌘ gﾃｬ ﾄ妥ｳ v盻嬖 t蘯･t c蘯｣ tﾃｬnh yﾃｪu, lﾃｲng bi蘯ｿt ﾆ｡n, tﾃ｢m nguy盻㌻ ho蘯ｷc s盻ｱ chﾃ｢n thﾃnh ch盻ｩa ﾄ黛ｻｱng bﾃｪn trong.",
    examples: [
      { jp: "蜈育函縺ｸ縺ｮ諢溯ｬ昴ｒ縺薙ａ縺ｦ縲∵ｭ後ｒ豁後＞縺ｾ縺吶・, vn: "Chﾃｺng em xin hﾃ｡t m盻冲 bﾃi hﾃ｡t v盻嬖 t蘯･t c蘯｣ lﾃｲng bi蘯ｿt ﾆ｡n g盻ｭi ﾄ黛ｺｿn th蘯ｧy cﾃｴ." },
      { jp: "諢帙ｒ縺薙ａ縺ｦ縲∵焔邏吶ｒ譖ｸ縺阪∪縺励◆縲・, vn: "Tﾃｴi ﾄ妥｣ vi蘯ｿt lﾃ｡ thﾆｰ ch盻ｩa ﾄ黛ｻｱng t蘯･t c蘯｣ tﾃｬnh yﾃｪu thﾆｰﾆ｡ng." }
    ],
    quiz: {
      sentence: "蠢・ｒ________縲√・繝ｬ繧ｼ繝ｳ繝医ｒ驕ｸ縺ｳ縺ｾ縺励◆縲・,
      answer: "縺薙ａ縺ｦ",
      accepts: ["霎ｼ繧√※"],
      hint: "G盻ｭi g蘯ｯm (Kanji: 霎ｼ繧√※)",
      translation: "Tﾃｴi ﾄ妥｣ ch盻肱 mﾃｳn quﾃ nﾃy v盻嬖 t蘯･t c蘯｣ t蘯･m lﾃｲng."
    }
  },
  {
    id: 104, unit: 10,
    pattern: "繧上ｊ縺ｫ(縺ｯ)",
    meaning: "Khﾃ｡ lﾃ... so v盻嬖 / M蘯ｷc dﾃｹ... nhﾆｰng",
    explanation: "ﾄ静｡nh giﾃ｡ m盻冲 s盻ｱ vi盻㌘ cﾃｳ k蘯ｿt qu蘯｣ khﾃ｡c, trﾃ｡i ngﾆｰ盻｣c v盻嬖 m盻ｩc ﾄ黛ｻ・thﾃｴng thﾆｰ盻拵g d盻ｱ ﾄ双ﾃ｡n t盻ｫ cﾆ｡ s盻・ﾄ妥ｳ.",
    examples: [
      { jp: "蠖ｼ縺ｯ繧医￥鬟溘∋繧九ｏ繧翫↓縲∝､ｪ繧峨↑縺・・, vn: "Anh 蘯･y ﾄハ nhi盻「 th蘯ｿ mﾃ l蘯｡i khﾃｴng bﾃｩo." },
      { jp: "縺薙・譎りｨ医・螳峨＞繧上ｊ縺ｫ縺ｯ縲√ｈ縺丞ロ縺上・, vn: "Cﾃ｡i ﾄ黛ｻ渡g h盻・nﾃy khﾃ｡ lﾃ t盻奏 so v盻嬖 m盻ｩc giﾃ｡ r蘯ｻ c盻ｧa nﾃｳ." }
    ],
    quiz: {
      sentence: "縺雁ｹｴ蟇・ｊ縺ｮ________縲√→縺ｦ繧ょ・豌励□縲・,
      answer: "繧上ｊ縺ｫ",
      accepts: ["繧上ｊ縺ｫ縺ｯ", "蜑ｲ縺ｫ", "蜑ｲ縺ｫ縺ｯ"],
      hint: "So v盻嬖... thﾃｬ khﾃ｡ lﾃ...",
      translation: "So v盻嬖 tu盻品 giﾃ thﾃｬ c盻･ khﾃ｡ lﾃ kh盻銃 m蘯｡nh."
    }
  },
  {
    id: 105, unit: 10,
    pattern: "縺上○縺ｫ",
    meaning: "M蘯ｷc dﾃｹ... th蘯ｿ mﾃ (trﾃ｡ch mﾃｳc)",
    explanation: "Gi盻創g v盻嬖 '繧上ｊ縺ｫ' nhﾆｰng mang s蘯ｯc thﾃ｡i chﾃｪ bai, trﾃ｡ch mﾃｳc, khinh mi盻㏄ (thﾆｰ盻拵g ch盻・dﾃｹng ﾄ黛ｻ・nﾃｳi v盻・ngﾆｰ盻拱 khﾃ｡c).",
    examples: [
      { jp: "遏･縺｣縺ｦ縺・ｋ縺上○縺ｫ縲∵蕗縺医※縺上ｌ縺ｪ縺・・, vn: "Bi蘯ｿt th蘯ｿ mﾃ l蘯｡i khﾃｴng ch盻・cho tﾃｴi." },
      { jp: "逕ｷ縺ｮ縺上○縺ｫ縲√ｈ縺乗ｳ｣縺上・縲・, vn: "Lﾃ con trai th蘯ｿ mﾃ hay khﾃｳc nhﾃｨ nh盻・" }
    ],
    quiz: {
      sentence: "縺企≡縺後↑縺Ю_______縲・ｫ倥＞繧ゅ・縺ｰ縺九ｊ雋ｷ縺・・,
      answer: "縺上○縺ｫ",
      accepts: [],
      hint: "M蘯ｷc dﾃｹ... th蘯ｿ mﾃ (mang tﾃｭnh trﾃ｡ch mﾃｳc)",
      translation: "Khﾃｴng cﾃｳ ti盻］ th蘯ｿ mﾃ toﾃn mua ﾄ黛ｻ・ﾄ黛ｺｯt ﾄ黛ｻ・"
    }
  },
  {
    id: 106, unit: 10,
    pattern: "縺ｦ縺ｿ縺帙ｋ",
    meaning: "Ch蘯ｯc ch蘯ｯn s蘯ｽ lﾃm (cho mﾃ xem)",
    explanation: "Th盻・hi盻㌻ quy蘯ｿt tﾃ｢m m蘯｡nh m蘯ｽ s蘯ｽ hoﾃn thﾃnh vi盻㌘ gﾃｬ ﾄ妥ｳ ﾄ黛ｻ・ch盻ｩng t盻・cho ngﾆｰ盻拱 khﾃ｡c th蘯･y.",
    examples: [
      { jp: "莉雁ｺｦ縺ｮ隧ｦ鬨薙↓縺ｯ縲∫ｵｶ蟇ｾ縺ｫ蜷域ｼ縺励※縺ｿ縺帙ｋ縲・, vn: "K盻ｳ thi l蘯ｧn nﾃy tﾃｴi ch蘯ｯc ch蘯ｯn s蘯ｽ ﾄ黛ｻ・cho mﾃ xem." },
      { jp: "縺ゅｓ縺ｪ繧・▽縲∫ｵｶ蟇ｾ縺ｫ隕玖ｿ斐＠縺ｦ縺ｿ縺帙ｋ縲・, vn: "K蘯ｻ nhﾆｰ h蘯ｯn ta, tﾃｴi nh蘯･t ﾄ黛ｻ杵h s蘯ｽ cho h蘯ｯn bi蘯ｿt tay." }
    ],
    quiz: {
      sentence: "谺｡縺ｮ隧ｦ蜷医・邨ｶ蟇ｾ縺ｫ蜍昴▲________縲・,
      answer: "縺ｦ縺ｿ縺帙ｋ",
      accepts: ["縺ｦ隕九○繧・],
      hint: "S蘯ｽ lﾃm cho mﾃ xem (quy蘯ｿt tﾃ｢m)",
      translation: "Tr蘯ｭn ﾄ黛ｺ･u t盻嬖 tﾃｴi nh蘯･t ﾄ黛ｻ杵h s蘯ｽ chi蘯ｿn th蘯ｯng cho mﾃ xem."
    }
  },
  {
    id: 107, unit: 10,
    pattern: "繧偵″縺｣縺九￠縺ｫ / 縺ｫ縺励※ / 縺ｨ縺励※",
    meaning: "Nhﾃ｢n cﾆ｡ h盻冓 / Nh盻・cﾃｳ duyﾃｪn c盻・..",
    explanation: "L蘯･y m盻冲 s盻ｱ ki盻㌻ nﾃo ﾄ妥ｳ lﾃm lﾃｽ do, cﾆ｡ h盻冓, bﾆｰ盻嫩 ngo蘯ｷt ﾄ黛ｻ・b蘯ｯt ﾄ黛ｺｧu m盻冲 s盻ｱ thay ﾄ黛ｻ品 ho蘯ｷc hﾃnh ﾄ黛ｻ冢g m盻嬖.",
    examples: [
      { jp: "螟ｧ蟄ｦ蜈･蟄ｦ繧偵″縺｣縺九￠縺ｫ縲∽ｸ莠ｺ證ｮ繧峨＠繧貞ｧ九ａ縺溘・, vn: "Nhﾃ｢n d盻却 vﾃo ﾄ黛ｺ｡i h盻皇, tﾃｴi ﾄ妥｣ b蘯ｯt ﾄ黛ｺｧu ra 盻・riﾃｪng." },
      { jp: "逞・ｰ励ｒ縺阪▲縺九￠縺ｫ縺励※縲√♀驟偵ｒ繧・ａ縺溘・, vn: "L蘯･y duyﾃｪn c盻・lﾃ b盻・b盻㌻h, tﾃｴi ﾄ妥｣ b盻・rﾆｰ盻｣u." }
    ],
    quiz: {
      sentence: "譌･譛ｬ縺ｮ繧｢繝九Γ________縲∵律譛ｬ隱槭ｒ蜍牙ｼｷ縺怜ｧ九ａ縺溘・,
      answer: "繧偵″縺｣縺九￠縺ｫ",
      accepts: ["繧偵″縺｣縺九￠縺ｫ縺励※", "繧偵″縺｣縺九￠縺ｨ縺励※"],
      hint: "Nhﾃ｢n cﾆ｡ h盻冓 / Duy蘯ｿn c盻・lﾃ...",
      translation: "Nh盻・anime c盻ｧa Nh蘯ｭt mﾃ tﾃｴi ﾄ妥｣ b蘯ｯt ﾄ黛ｺｧu h盻皇 ti蘯ｿng Nh蘯ｭt."
    }
  },
  {
    id: 108, unit: 10,
    pattern: "縺ｨ縺吶ｋ / 縺ｨ縺励◆繧・/ 縺吶ｌ縺ｰ / 縺吶ｋ縺ｨ / 縺ｨ縺励※繧・,
    meaning: "Gi蘯｣ s盻ｭ (r蘯ｱng)... / N蘯ｿu nhﾆｰ...",
    explanation: "ﾄ脆ｰa ra m盻冲 gi蘯｣ ﾄ黛ｻ杵h khﾃｴng cﾃｳ th蘯ｭt ho蘯ｷc cﾃｳ kh蘯｣ nﾄハg x蘯｣y ra r蘯･t th蘯･p.",
    examples: [
      { jp: "螟ｪ髯ｽ縺瑚･ｿ縺九ｉ譏・ｋ縺ｨ縺励※繧ゅ∵ｱｺ蠢・・螟峨ｏ繧峨↑縺・・, vn: "Cho dﾃｹ m蘯ｷt tr盻拱 m盻皇 ﾄ黛ｺｱng Tﾃ｢y thﾃｬ quy蘯ｿt tﾃ｢m c盻ｧa tﾃｴi cﾅｩng khﾃｴng ﾄ黛ｻ品." },
      { jp: "繧ゅ＠螳昴￥縺倥′蠖薙◆縺｣縺溘→縺励◆繧峨∝ｮｶ繧定ｲｷ縺・◆縺・・, vn: "Gi蘯｣ s盻ｭ mﾃ trﾃｺng vﾃｩ s盻・thﾃｬ tﾃｴi mu盻創 mua nhﾃ." }
    ],
    quiz: {
      sentence: "繧ゅ＠逕溘∪繧悟､峨ｏ繧後ｋ縺ｨ________縲・ｳ･縺ｫ縺ｪ繧翫◆縺・・,
      answer: "縺励◆繧・,
      accepts: ["縺吶ｌ縺ｰ", "縺吶ｋ縺ｨ"],
      hint: "N蘯ｿu nhﾆｰ / Gi蘯｣ s盻ｭ (ﾄ訴 sau 縺ｨ)",
      translation: "N蘯ｿu nhﾆｰ ﾄ柁ｰ盻｣c sinh ra m盻冲 l蘯ｧn n盻ｯa, tﾃｴi mu盻創 tr盻・thﾃnh m盻冲 chﾃｺ chim."
    }
  },
  {
    id: 109, unit: 10,
    pattern: "髫帙↓ / 髫・縺ｫ)縺ｯ",
    meaning: "Khi / Lﾃｺc (cﾃ｡ch nﾃｳi trang tr盻肱g)",
    explanation: "ﾃ・nghﾄｩa gi盻創g v盻嬖 譎・(khi), nhﾆｰng lﾃ cﾃ｡ch nﾃｳi l盻議h s盻ｱ, trang tr盻肱g, dﾃｹng nhi盻「 trong vﾄハ b蘯｣n, thﾃｴng bﾃ｡o cﾃｴng c盻冢g.",
    examples: [
      { jp: "蟶ｰ蝗ｽ縺ｮ髫帙↓縺ｯ縲・｣邨｡縺励※縺上□縺輔＞縲・, vn: "Khi nﾃo v盻・nﾆｰ盻嫩 thﾃｬ hﾃ｣y liﾃｪn l蘯｡c nhﾃｩ." },
      { jp: "繧ｫ繝ｼ繝峨ｒ邏帛､ｱ縺励◆髫帙・縲√☆縺舌↓縺顔衍繧峨○縺上□縺輔＞縲・, vn: "Khi b盻・m蘯･t th蘯ｻ, vui lﾃｲng thﾃｴng bﾃ｡o cho chﾃｺng tﾃｴi ngay." }
    ],
    quiz: {
      sentence: "縺企剄繧翫・________縲√♀蠢倥ｌ迚ｩ縺ｫ縺疲ｳｨ諢上￥縺縺輔＞縲・,
      answer: "髫帙・",
      accepts: ["髫帙↓", "髫・],
      hint: "Khi / Lﾃｺc (cﾃ｡ch nﾃｳi l盻議h s盻ｱ - Kanji: 髫・",
      translation: "Khi quﾃｽ khﾃ｡ch xu盻創g tﾃu, xin lﾆｰu ﾃｽ hﾃnh lﾃｽ ﾄ黛ｻ・quﾃｪn."
    }
  },
  {
    id: 110, unit: 10,
    pattern: "縺翫◎繧後′縺ゅｋ",
    meaning: "Cﾃｳ nguy cﾆ｡ / E r蘯ｱng...",
    explanation: "Th盻・hi盻㌻ s盻ｱ lo l蘯ｯng r蘯ｱng m盻冲 ﾄ訴盻「 t盻妬 t盻・ m盻冲 nguy cﾆ｡ nﾃo ﾄ妥ｳ cﾃｳ th盻・x蘯｣y ra (thﾆｰ盻拵g dﾃｹng trong b蘯｣n tin th盻拱 ti蘯ｿt, th盻拱 s盻ｱ).",
    examples: [
      { jp: "譏取律縺ｯ螟ｧ髮ｨ縺ｮ縺翫◎繧後′縺ゅｋ縲・, vn: "Ngﾃy mai cﾃｳ nguy cﾆ｡ s蘯ｽ mﾆｰa l盻嬾." },
      { jp: "縺薙・逞・ｰ励・莨晄沒縺吶ｋ縺翫◎繧後′縺ゅｋ縲・, vn: "Cﾄハ b盻㌻h nﾃy cﾃｳ nguy cﾆ｡ lﾃ｢y nhi盻・." }
    ],
    quiz: {
      sentence: "縺薙・蝨ｰ蝓溘・豢･豕｢縺ｮ________縺後≠繧翫∪縺吶・,
      answer: "縺翫◎繧・,
      accepts: ["諱舌ｌ"],
      hint: "Cﾃｳ nguy cﾆ｡ / Lo ng蘯｡i (Kanji: 諱舌ｌ)",
      translation: "Khu v盻ｱc nﾃy cﾃｳ nguy cﾆ｡ x蘯｣y ra sﾃｳng th蘯ｧn."
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

  // T盻ｱ ﾄ黛ｻ冢g focus vﾃo ﾃｴ nh蘯ｭp li盻㎡ ﾄ黛ｻ・ngﾆｰ盻拱 dﾃｹng gﾃｵ phﾃｭm mﾆｰ盻｣t mﾃ khﾃｴng c蘯ｧn dﾃｹng chu盻冲
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
        alert(`Chﾃｺc m盻ｫng! B蘯｡n ﾄ妥｣ hoﾃn thﾃnh bﾃi luy盻㌻ t蘯ｭp v盻嬖 s盻・ﾄ訴盻ノ: ${score}/${activeData.length}`);
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
    if (activeData[currentIndex].id === 12) validAnswers.push('縺ｦ繧・);
    if (activeData[currentIndex].id === 29) validAnswers.push('縺舌ｉ縺・);
    if (activeData[currentIndex].id === 30) validAnswers.push('縺舌ｉ縺・↑繧・);
    
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
            <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" /> Trang ch盻ｧ
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
                <Layers className="w-4 h-4"/> T蘯･t c蘯｣
              </button>
            </div>

            <div className="text-center mb-2">
              <h2 className="text-xl font-semibold">Ch盻肱 ch蘯ｿ ﾄ黛ｻ・h盻皇 t蘯ｭp</h2>
              <p className="text-sm text-slate-500 mt-1">S蘯ｽ cﾃｳ {activeData.length} m蘯ｫu ng盻ｯ phﾃ｡p trong ph蘯ｧn nﾃy</p>
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
                  <h3 className="font-extrabold text-2xl mb-2 group-hover:text-white transition-colors">Ghi nh盻・/h3>
                  <p className="text-slate-500 group-hover:text-indigo-100 transition-colors text-sm">H盻皇 c蘯･u trﾃｺc & vﾃｭ d盻･ qua Flashcards</p>
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
                  <h3 className="font-extrabold text-2xl mb-2 group-hover:text-white transition-colors">Luy盻㌻ t蘯ｭp</h3>
                  <p className="text-slate-500 group-hover:text-emerald-100 transition-colors text-sm">Th盻ｭ thﾃ｡ch trﾃｭ nh盻・qua bﾃi t蘯ｭp ﾄ訴盻］ t盻ｫ</p>
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
                UNIT {activeData[currentIndex].unit} - GHI NH盻・              </span>
              <span className="text-sm text-slate-400 font-medium">{currentIndex + 1} / {activeData.length}</span>
            </div>

            <div 
              className={`relative w-full h-[450px] cursor-pointer perspective-2000 transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Front Side */}
              <div className={`absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 text-white rounded-[2rem] shadow-2xl flex flex-col items-center justify-center backface-hidden ${isFlipped ? 'invisible' : ''} p-8 text-center`}>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">・桀activeData[currentIndex].pattern}</h2>
                <div className="w-16 h-1 w-full bg-white/20 rounded-full mb-8 max-w-[100px]"></div>
                <p className="text-indigo-100 text-base font-medium animate-pulse">Nh蘯･n vﾃo th蘯ｻ ﾄ黛ｻ・xem gi蘯｣i nghﾄｩa</p>
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
                <ChevronLeft className="w-5 h-5"/> Quay l蘯｡i
              </button>
              <button 
                onClick={handleNext}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200 font-medium"
              >
                {currentIndex === activeData.length - 1 ? 'Hoﾃn thﾃnh' : 'Ti蘯ｿp theo'} <ChevronRight className="w-5 h-5"/>
              </button>
            </div>
          </div>
        )}

        {/* QUIZ MODE */}
        {activeMode === 'quiz' && (
          <div className="p-6 md:p-10 flex flex-col h-full flex-grow">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                UNIT {activeData[currentIndex].unit} - LUY盻・ T蘯ｬP
              </span>
              <div className="text-right">
                <span className="text-sm text-slate-400 block">Ti蘯ｿn ﾄ黛ｻ・ {currentIndex + 1} / {activeData.length}</span>
                <span className="text-sm font-bold text-emerald-600">ﾄ静ｺng: {score}</span>
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
                      e.preventDefault(); // Ngﾄハ ch蘯ｷn hﾃnh vi m蘯ｷc ﾄ黛ｻ杵h
                      if (e.repeat) return; // Ch盻創g vi盻㌘ ﾄ妥ｨ gi盻ｯ phﾃｭm Enter khi蘯ｿn cﾃ｢u h盻淑 nh蘯｣y liﾃｪn t盻･c

                      if (!feedback) {
                        checkAnswer();
                      } else if (feedback !== null) {
                        handleNext();
                      }
                    } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                      e.preventDefault(); // Ngﾄハ con tr盻・ch蘯｡y t盻嬖 lui trong ﾃｴ text
                      if (!feedback) setShowHint(!showHint); // B蘯ｭt/t蘯ｯt g盻｣i ﾃｽ b蘯ｱng phﾃｭm mﾅｩi tﾃｪn
                    }
                  }}
                  placeholder="Gﾃｵ ﾄ妥｡p ﾃ｡n... (Mﾅｩi tﾃｪn Lﾃｪn/Xu盻創g ﾄ黛ｻ・xem g盻｣i ﾃｽ)"
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
                          inputRef.current?.focus(); // ﾄ脆ｰa focus quay l蘯｡i ﾃｴ nh蘯ｭp li盻㎡
                        }}
                        onMouseDown={(e) => e.preventDefault()} // Ngﾄハ nﾃｺt cﾆｰ盻孅 focus c盻ｧa ﾃｴ nh蘯ｭp li盻㎡ ngay t盻ｫ lﾃｺc nh蘯･n chu盻冲 xu盻創g
                        className={`flex items-center justify-center w-12 h-12 rounded-xl transition-colors ${showHint ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                        title="G盻｣i ﾃｽ (Phﾃｭm Lﾃｪn/Xu盻創g)"
                      >
                        <HelpCircle className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={checkAnswer}
                        className="flex-grow py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors"
                      >
                        {userInput ? 'Ki盻ノ tra' : 'Xem ﾄ妥｡p ﾃ｡n'}
                      </button>
                    </>
                  ) : feedback === 'correct' ? (
                    <button 
                      onClick={handleNext}
                      className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-100 flex justify-center items-center gap-2"
                    >
                      Tuy盻㏄ v盻拱! Ti蘯ｿp theo <ChevronRight className="w-5 h-5"/>
                    </button>
                  ) : (
                    <button 
                      onClick={handleNext}
                      className="w-full py-3 bg-rose-500 text-white rounded-xl font-bold hover:bg-rose-600 transition-colors flex justify-center items-center gap-2"
                    >
                      ﾄ静｣ hi盻ブ! Ti蘯ｿp theo <ChevronRight className="w-5 h-5"/>
                    </button>
                  )}
                </div>

                {showHint && !feedback && (
                  <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-sm text-amber-700 text-center animate-pulse">
                    <span className="font-bold mr-1">G盻｣i ﾃｽ:</span> {activeData[currentIndex].quiz.hint}
                  </div>
                )}
                
                {feedback === 'incorrect' && (
                  <div className="bg-rose-50 border border-rose-200 p-4 rounded-lg text-center">
                    <p className="text-sm text-rose-600 font-medium mb-1">Chﾆｰa ﾄ妥ｺng r盻妬!</p>
                    <p className="text-rose-800">ﾄ静｡p ﾃ｡n ﾄ妥ｺng lﾃ: <span className="font-bold text-lg ml-1">{activeData[currentIndex].quiz.answer}</span></p>
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
