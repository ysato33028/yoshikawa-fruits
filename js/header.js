window.addEventListener("scroll", function() {
  const stickyHeader = document.querySelector(".sticky-header");
  if (window.scrollY > 150) { // 150px以上スクロールで表示
    stickyHeader.classList.add("show");
  } else {
    stickyHeader.classList.remove("show");
  }
});