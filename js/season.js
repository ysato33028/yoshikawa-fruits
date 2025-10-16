document.addEventListener("DOMContentLoaded", () => {
  const month = new Date().getMonth() + 1; // 現在の月 (1〜12)
  const gridContainer = document.querySelector(".limited-fruits .fruits-grid");

  if (!gridContainer) {
    console.error("⚠️ .fruits-grid が見つかりません");
    return;
  }

  // 作物ごとのデータ
  const seasonData = [
    { img: "icon/0_snow.jpg", title: "冬のりんご", desc: "保存りんご & お歳暮ギフト", months: [12, 1, 2] },

    // 🍎 りんご（品種ごと）
    { img: "icon/1_tsugaru.jpg", title: "つがる", desc: "みずみずしい甘み。8月下旬〜9月に出回る早生品種。", months: [8, 9] },
    { img: "icon/1_beni.jpg", title: "紅将軍", desc: "鮮やかな赤色と大玉。9月下旬〜10月上旬に旬、贈答にも人気。", months: [9, 10] },
    { img: "icon/1_jonahgold.webp", title: "ジョナゴールド", desc: "甘みと酸味のバランスが絶妙。10月中旬頃に収穫。", months: [10, 11] },
    { img: "icon/1_olin.jpg", title: "王林", desc: "芳香と豊富な果汁。甘みが強い青りんご。10月下旬〜11月上旬に旬。", months: [10, 11] },
    { img: "icon/1_ShinanoGold.webp", title: "シナノゴールド", desc: "濃厚な甘酸っぱさとシャキシャキ食感。10月下旬〜収穫。", months: [10, 11] },
    { img: "icon/1_fuji.jpg", title: "ふじ", desc: "甘みと酸味のバランスが良い。11月上旬に収穫される日本代表品種。", months: [11, 12] },
    { img: "icon/1_sunfuji.webp", title: "サンふじ", desc: "蜜が入りやすく濃厚な甘み。11月〜12月に収穫。", months: [11, 12] },

    // 🍑 その他のフルーツ
    { img: "icon/2_prune.jpg", title: "プルーン", desc: "鉄分豊富な秋の濃厚フルーツ。9月中旬〜下旬が旬。", months: [9] },
    { img: "icon/3_cherry.jpg", title: "さくらんぼ", desc: "7月上旬〜中旬の短い旬を楽しむ宝石の果実。", months: [7] },
    { img: "icon/4_sweetcorn.jpg", title: "スイートコーン", desc: "北海道の夏の甘みを詰め込んだとうもろこし。7月後半〜8月収穫。", months: [7, 8] },
    { img: "icon/5_lafrance.jpg", title: "ラ・フランス", desc: "芳醇な香りと舌触り。10月下旬〜11月に旬の西洋梨。", months: [10, 11] }
  ];


  // 今の月に該当するものを抽出
  const currentItems = seasonData.filter(item => item.months.includes(month));

  // DOMに反映
  gridContainer.innerHTML = ""; // 初期化
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

  // 万一該当がない月はデフォルト表示
  if (currentItems.length === 0) {
    gridContainer.innerHTML = `
      <div class="fruit-card">
        <img src="icon/1_apple.jpg" alt="りんご">
        <h3>りんご</h3>
        <p>🍎 季節の果物をお楽しみください</p>
      </div>
    `;
  }
});
