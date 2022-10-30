// ページ遷移
function scrollWindow (tag){
  const elm = window.document.querySelector(this.tag);
  elm.scrollIntoView({
      behavior:"smooth",
      block:"center",
      inline:"nearest"
  });
};
const btn_w = window.document.querySelector(".btn_w");
const btn_p = window.document.querySelector(".btn_p");
const btn_c = window.document.querySelector(".btn_c");
const works = "#works";
const profile = "#profile";
const contact = "#contact";
btn_w.addEventListener('click',{tag:works, handleEvent:scrollWindow});
btn_p.addEventListener('click',{tag:profile, handleEvent:scrollWindow});
btn_c.addEventListener('click',{tag:contact, handleEvent:scrollWindow});

// ページ再読み込み
const html = "html";
window.addEventListener('load', {tag:html, handleEvent:scrollWindow});

// WORKS
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    effect: 'fade',
    speed: 1000,
    allowTouchMove: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});