let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

function header() {
  var header = "";
  header += '<header><div class="wrapper site-header__wrapper"><div class="site-header__start"><a href="#" class="name">あんもちうぇぶさいと</a></div><div class="site-header__end"><nav class="nav"><button class="nav__toggle" aria-expanded="false" type="button">めにゅー</button><ul class="nav__wrapper"><li class="nav__item"><a href="#">ほーむ</a><li class="nav__item"><a href="#">あばうと</a><li class="nav__item"><a href="#">りんく</a></ul></nav><div class="search"><button class="search__toggle" aria-label="Open search">けんさく</button><form class="search__form" action=""> <label class="sr-only" for="search">Search</label><input type="search" name="" id="search" placeholder="きーわーど"></form></div></div></div></header>';
  document.write(header);
}

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
    searchForm.classList.remove("active");
  }
});

let searchToggle = document.querySelector(".search__toggle");
let searchForm = document.querySelector(".search__form");

searchToggle.addEventListener("click", showSearch);

function showSearch() {
  searchForm.classList.toggle("active");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "menu");
  navWrapper.classList.remove("active");
}