
/*const mainTitle = document.querySelector ("#main-title");
 const mainHeaderMenu =document.querySelectorAll("#main-header-menu");

console.log(mainHeaderMenu);

window.addEventListener( "scroll", function (){
 let scrollingPos =window.scrollY;

 if (scrollingPos>5) {
     mainTitle.classList.add('red');
 }
 else {
     mainTitle.classList.remove('red');
 }
});*/

 // inputmask
 /*const form = document.querySelector('form');
 const telSelector = form.querySelector('input[type="tel"]');
 const inputMask = new Inputmask ('+38 (099) 999-99-99');
 inputMask.mask(telSelector);

 const validation = new JustValidate('.form');
 validation
     .addField('.input-name', [
      {
       rule: 'minLength',
       value: 3,
      },
      {
       rule: 'maxLength',
       value: 15,
      },
      {
       rule: 'required',
       value: true,
       errorMessage: 'Введите имя!',
      }
     ])
     .addField('.input-tel', [
      {
       rule: 'required',
       value: true,
       errorMessage: 'Введите телефон',
      },
      {
       rule: 'function',
       validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 9;
       },
       errorMessage: 'Введите корректный телефон',
      },
     ]).onSuccess((event) => {
     console.log('Validation passes and form submitted', event);

     let formData = new FormData(event.target);

     console.log(...formData);

     let xhr = new XMLHttpRequest();

     xhr.open('POST', 'mail.php', true);
     xhr.send(formData);
     event.target.reset();

     xhr.onreadystatechange = function () {
         if (xhr.readyState === 4) {
             if (xhr.status === 200) {
                 console.log('Ваше сообщение отправлено');}}
     }
     alert("Ваше сообщение отправлено")
 });*/


 const headerBurger = document.querySelector('.header-burger');
 const headerNav= document.querySelector('.header-nav');

 headerBurger.addEventListener('click', function (e) {
     headerBurger.classList.toggle('active')
     headerNav.classList.toggle('active')
     });


 const videoContainer = document.querySelector(".video-container");

 window.addEventListener( "scroll", function (){
     let scrollVideo =window.scrollY;

     if (scrollVideo>1000) {
         videoContainer.classList.add('active');
     }

     if (scrollVideo<1000) {
         videoContainer.classList.remove('active');
     }

 });

