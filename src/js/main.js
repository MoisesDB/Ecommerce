function menuOpacity() {
  var navbar = document.querySelector(".navbar").offsetWidth;
  var bntMenu = document.getElementById("menu-btn");
  var navMenu = document.querySelector(".navbar__menu");
  var boolean = 0;

  // faz uma verificação do tamanho da tela, se for menor que 768 muda a opacidade dos elementos da nav
  if (navbar > 768) {
    navMenu.style.opacity = 1;
    navMenu.style.clipPath = "none";
  } else if (navbar <= 768) {
    navMenu.style.opacity = 0;
    navMenu.style.clipPath = "circle(5px at top right)";
    bntMenu.addEventListener("click", function () {
      if (boolean == 0) {
        boolean = 1;
        navMenu.style.opacity = 1;
        navMenu.style.clipPath = "circle(100% at center)";
      } else if (boolean == 1) {
        boolean = 0;
        navMenu.style.opacity = 0;
        navMenu.style.clipPath = "circle(5px at top right)";
      }
    });
  }
}
window.addEventListener("load", menuOpacity);
window.addEventListener("resize", menuOpacity);
window.addEventListener("scroll", function () {
  var navbarSticky = document.getElementById("sticky");
  navbarSticky.classList.toggle("sticky", window.scrollY > 0);
});
