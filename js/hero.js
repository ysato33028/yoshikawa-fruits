document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".carousel-item");
  const total = items.length;
  let current = 0;

  // 初期表示
  items[0].classList.add("active");

  // 右矢印
  document.getElementById("moveRight").addEventListener("click", () => {
    let prev = current;
    current = current + 1;
    setSlide(prev, current);
  });

  // 左矢印
  document.getElementById("moveLeft").addEventListener("click", () => {
    let prev = current;
    current = current - 1;
    setSlide(prev, current);
  });

  function setSlide(prev, next) {
    let slide = current;

    if (next > total - 1) {
      slide = 0;
      current = 0;
    }
    if (next < 0) {
      slide = total - 1;
      current = total - 1;
    }

    items[prev].classList.remove("active");
    items[slide].classList.add("active");
  }
});
