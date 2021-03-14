// * style hover name
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span class="hov">${h}</span>`).join('');
nama.innerHTML = huruf;

const nama2 = document.querySelector('.nama2');
const huruf2 = [...nama2.textContent].map(h => `<span class="hov">${h}</span>`).join('');
nama2.innerHTML = huruf2;

const nama3 = document.querySelector('.nama3');
const huruf3 = [...nama3.textContent].map(h => `<span class="hov">${h}</span>`).join('');
nama3.innerHTML = huruf3;

const space = document.querySelectorAll('.nama2 .hov')[4];
space.classList.add('space');

const space2 = document.querySelectorAll('.nama3 .hov')[3];
space2.classList.add('space');

// * Responsive Navbar
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', function () {
   nav.classList.toggle('slide');
});

// * My work
window.addEventListener('scroll', function () {
   let scroll = window.pageYOffset;
   console.log(scroll);

   const header = document.querySelector('.header-mywork');
   console.log(header.offsetTop);

   if (scroll > header.offsetTop) {
      header.classList.add('muncul');
   }
});

// $(window).scroll(function () {
//    let wScroll = $(this).scrollTop();
//    console.log(wScroll)

//    // header
//    if (wScroll > $('.mywork').offset().top - 200) {
//       $('.header-mywork').addClass('muncul');
//    }
// });