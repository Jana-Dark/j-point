

 const headerBurger = document.querySelector('.header-burger');
 const headerNav= document.querySelector('.header-nav');

 headerBurger.addEventListener('click', function (e) {
     headerBurger.classList.toggle('active')
     headerNav.classList.toggle('active')
     });


