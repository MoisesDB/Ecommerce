function menuOpacity() {
  var bntMenu = document.getElementById("menu-btn");
  var navMenu = document.querySelector(".navbar__menu");
  var navbar = document.querySelector(".navbar").offsetWidth;
  var boolean = 0;

  console.log(navbar);
  // faz uma verificação do tamanho da tela, se for menor que 768 muda a opacidade dos elementos da nav
  if (navbar > 768) {
    navMenu.style.opacity = 1;
    navMenu.style.clipPath = "none";
  } else if (navbar <= 768) {
    navMenu.style.opacity = 0;
    navMenu.style.clipPath = "circle(5px at top right)";
    bntMenu.addEventListener("click", function () {
      console.log("clicou");
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
