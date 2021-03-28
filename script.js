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

   const header = document.querySelector('.header-mywork');

   if (scroll > header.offsetTop) {
      header.classList.add('muncul');
   }

   // Skills
   // const mySkills = document.querySelector('.myskills')
   // const stack = document.querySelectorAll('.stack')
   // if (scroll > mySkills.offsetTop - 50) {
   //    stack.forEach(i => {
   //       setTimeout(function () {
   //          i.classList.add('muncul')
   //       }, 300 * (i + 1))

   //    })
   // }

   let wScroll = $(this).scrollTop();
   if (wScroll > $('.myskills').offset().top - 250) {
      $('.stack.fe').each(function (i) {
         setTimeout(function () {
            $('.stack.fe').eq(i).addClass('muncul')
         }, 300 * (i + 1));
      });

      $('.stack.be').each(function (i) {
         setTimeout(function () {
            $('.stack.be').eq(i).addClass('muncul')
         }, 300 * (i + 1));
      });
   }
});

// * Google Sheet Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxQir2PxE6M5jm_DzPzjxbwLBr6lD6W9Khby_1QIW-jzBOeVQE7f8HXNlwYyPdxOsLzWw/exec'
const form = document.forms['submit-to-google-sheet']
const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const alert = document.querySelector('.alert')

form.addEventListener('submit', e => {
   // Tampilkan tombol loading
   btnKirim.classList.toggle('d-none')
   btnLoading.classList.toggle('d-none')
   e.preventDefault()
   fetch(scriptURL, {
         method: 'POST',
         body: new FormData(form)
      })
      .then(response => {
         btnKirim.classList.toggle('d-none')
         btnLoading.classList.toggle('d-none')
         alert.classList.toggle('d-none')
         console.log('Success!', response)
         form.reset()
      })
      .catch(error => console.error('Error!', error.message))
})