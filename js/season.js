document.addEventListener("DOMContentLoaded", () => {
  const month = new Date().getMonth() + 1; // 現在の月 (1〜12)
  const gridContainer = document.querySelector(".limited-fruits .fruits-grid");

  if (!gridContainer) {
    console.error("⚠️ .fruits-grid が見つかりません");
    return;
  }

  // 🍎 吉川果樹園の旬データ（2025年最新版）
  const seasonData = [
    // 冬（保存・ギフト）
    { img: "icon/0_snow.jpg", title: "冬のりんご", desc: "貯蔵りんごやサンふじギフトが主役。寒い季節に甘みが増します。", months: [12, 1, 2] },

    // 春〜夏
    { img: "icon/3_cherry.jpg", title: "さくらんぼ", desc: "7月中旬〜8月上旬に真っ赤に色づく宝石の果実。甘酸っぱく瑞々しい味わい。", months: [7, 8] },

    // 秋（9〜11月）
    { img: "icon/5_kousui.jpg", title: "幸水", desc: "9月に旬を迎えるみずみずしい和梨。シャリっとした食感と上品な甘み。", months: [9] },
    { img: "icon/1_tsugaru.jpg", title: "つがる", desc: "8月下旬〜9月収穫。柔らかな果肉としっかりした甘さが特長の早生りんご。", months: [8, 9] },
    { img: "icon/1_himekami.webp", title: "ひめかみ", desc: "9〜10月の中生品種。ジューシーで酸味が少なく、女性やお子様にも人気。", months: [9, 10] },
    { img: "icon/1_akane.jpg", title: "あかね", desc: "9〜10月に旬。さっぱりとした酸味と甘みのバランスが良く、ジュースやお菓子にも最適。", months: [9, 10] },
    { img: "icon/2_prune.jpg", title: "プルーン", desc: "9〜10月に収穫。濃厚な甘酸っぱさで鉄分・食物繊維が豊富な健康フルーツ。", months: [9, 10] },
    { img: "icon/1_beni.jpg", title: "紅将軍", desc: "9月下旬〜10月に登場。深紅の果皮と濃厚な甘さが際立つ贈答人気の品種。", months: [9, 10] },
    { img: "icon/5_senryonashi.jpg", title: "千両なし", desc: "9〜10月に旬。濃い甘みとシャリっとした食感で名の通り“千の両”の価値ある味。", months: [9, 10] },
    { img: "icon/1_redgold.jpg", title: "レッドゴールド", desc: "10月中旬〜下旬の短い旬。鮮やかな赤色と芳醇な香りが魅力の希少品種。", months: [10] },
    { img: "icon/5_lafrance.jpg", title: "ラ・フランス", desc: "10月下旬〜11月上旬に旬。とろける舌触りと芳醇な香りの“果物の女王”。", months: [10, 11] },
    { img: "icon/1_olin.jpg", title: "王林", desc: "10月下旬〜11月の青りんご。香り高く、果汁豊富で爽やかな甘みが特長。", months: [10, 11] },
    { img: "icon/1_haruka.jpg", title: "はるか", desc: "11月収穫の黄色いりんご。優しい甘さと滑らかな口当たりが冬の人気者。", months: [11] },

    // 晩秋〜冬（11〜12月）
    { img: "icon/1_fuji.jpg", title: "ふじ", desc: "11〜12月に旬を迎える日本代表品種。シャキッとした歯ごたえとバランスの取れた甘さ。", months: [11, 12] },
    { img: "icon/1_sunfuji.webp", title: "サンふじ", desc: "11〜12月の贈答人気No.1。太陽の光で蜜入りが多く、濃厚な甘みが特長。", months: [11, 12] }
  ];

  // 現在月に該当する果実を抽出
  const currentItems = seasonData.filter(item => item.months.includes(month));

  // DOM出力クリア
  gridContainer.innerHTML = "";

  // 表示処理
  if (currentItems.length > 0) {
    currentItems.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("fruit-card");
      card.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      `;
      gridContainer.appendChild(card);
    });
  } else {
    gridContainer.innerHTML = `
      <div class="fruit-card">
        <img src="icon/1_apple.jpg" alt="りんご">
        <h3>旬の果物</h3>
        <p>現在は収穫準備中です。次の季節の実りをお楽しみに。</p>
      </div>
    `;
  }
});
