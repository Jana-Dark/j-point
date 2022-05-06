
'use strict'

 window.onload = function () {
    const parallax = document.querySelector(".parallax");
    if (parallax) {

        const bGround = document.querySelector('.images-parallax-bg');
        const bigTape = document.querySelector('.images-parallax-big-tape');
        const littleTape = document.querySelector('.images-parallax-little-tape');

        //Коэффициенты
        const forBGround  = 40;
        const forBigTape   = 20;
        const forLittleTape  = 10;

        //Скорость анимации

        const speed  = 0.05;

        //Объявление переменных
        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            //Передаём стили

            bGround.style.cssText = `transform: translate(${positionX/forBGround}%,${positionY/forBGround}%);`;
            bigTape.style.cssText = `transform: translate(${positionX/forBigTape}%,${positionY/forBigTape}%);`;
            littleTape.style.cssText = `transform: translate(${positionX/forLittleTape}%,${positionY/forLittleTape}%);`;

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax.addEventListener("mousemove", function (e) {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight= parallax.offsetHeight;

            //Ноль посередине
            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            // Получаем проценты
            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
            })
   }
 }

/*Отправка формы*/

 // inputmask
 const form = document.querySelector('form');
 const telSelector = form.querySelector('.form-tel-input');
 const inputMask = new Inputmask ('+38 (099) 999-99-99');
 inputMask.mask(telSelector);

 const validation = new JustValidate('form');
 validation
     .addField('.form-name-input', [
         {
             rule: 'minLength',
             value: 3,
         },
         {
             rule: 'maxLength',
             value: 30,
         },
         {
             rule: 'required',
             value: true,
             errorMessage: 'Введите имя!',
         }
     ])
     .addField('.form-tel-input', [
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
     ])
     .addField('.form-email-input', [
         {
             rule: 'required',
             value: true,
             errorMessage: 'Email обязателен',
         },
         {
             rule: 'email',
             value: true,
             errorMessage: 'Введите корректный Email',
         },
     ]).onSuccess((event) => {
     console.log('Validation passes and form submitted', event);

     let formData = new FormData(event.target);

     console.log(...formData);

     let xhr = new XMLHttpRequest();

     xhr.onreadystatechange = function () {
         if (xhr.readyState === 4) {
             if (xhr.status === 200) {
                 console.log('Ваше сообщение отправлено');
             }
         }
     }
     xhr.open('POST', 'mail.php', true);
     xhr.send(formData);

     event.target.reset();
     console.log(navigator);
 });




