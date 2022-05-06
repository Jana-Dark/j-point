"use strict"

//Preloader

 /*document.addEventListener('DOMContentLoaded', ()=>{
       const mediaFiles = document.querySelectorAll('video');

       let i = 0
       const Preloader = document.querySelector('.preloader');
       const Percents = document.querySelector('.preloader_percent span');

        i++
       Percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed();

       Array.from(mediaFiles).forEach((file,index) => {
              file.onload = () => {
                  if(i === mediaFiles.length) {
                      Preloader.classList.add('hide')
                      Percents.innerText = 100
                  }
              }
       })

 })*/


 /* const MenuLiA = document.querySelector('.menu-ul li');
   MenuLiA.addEventListener("click", function (e) {
       console.log('Съешь меня!');
   })

   const preloaderGo = document.querySelector('.preloader_loader');
   preloaderGo.addEventListener("click", function (e) {
       preloaderGo.classList.add('go');
   })*/

function ShowConsole (event) {
   console.log(event);
   //console.log(event.type);
   //console.log(event.target);
   //console.log(event.currentTarget);
   //console.log(event.clientX);
   //console.log(event.clientY);
}

/*

UlHeaderNav.addEventListener("click", function (event) {
    if (event.target.closest('.li-header-nav')) ShowConsole ();
})*/


    function Chang (event) {
        HeaderLogo.classList.toggle('change')}

    const Header2Block2 = document.querySelector('.header-2-block2')
    const HeaderLogo = document.querySelector('.header-logo-2')

      Header2Block2.addEventListener("click", function (event) {
    if (event.target.closest('.header-2-towwn')) Chang ();
})


function Change (event) {
    headerLogo.classList.add('change')
}

const headerLogo = document.querySelector('.header-logo img')

headerLogo .addEventListener("click", ShowConsole);
headerLogo .addEventListener("click", Change)

/*Rating*/

const ratings = document.querySelectorAll('.rating');
 if (ratings.length > 0) {
     initRatings();
 }

 //Основная функция
function initRatings(e) {
     let  ratingActive,  ratingValue;
     for (let index = 0; index < ratings.length; index++){
         const rating = ratings[index];
         initRating(rating);
     }

    //Инициализация конкретного рейтинга

 function initRating(rating){
     initRatingVars(rating);

     setRatingActiveWidth();

     if (rating.classList.contains('rating_set')) {
         setRating(rating);
     }

 }

//Инициализация переменных
function initRatingVars(rating) {
     ratingActive = rating.querySelector('.rating-active');
     ratingValue = rating.querySelector('.rating-value');
}
//Изменяем ширину активных звёзд
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
         const ratingActiveWidth = index / 0.05;
         ratingActive.style.width = `${ratingActiveWidth}%`;
    }
//Возможность указать оценку
    function setRating(rating){
         const ratingItems = rating.querySelectorAll('.rating_item');
         for (let index = 0; index < ratingItems.length; index++){
             const ratingItem = ratingItems[index];
             ratingItem.addEventListener("mouseenter", function (e){
                 initRatingVars(rating);
                 setRatingActiveWidth(ratingItem.value)
             });
             ratingItem.addEventListener("mouseleave", function (e){
                 setRatingActiveWidth();
             });
             ratingItem.addEventListener("click", function (e){
                 initRatingVars(rating);

                 if (rating.dataset.ajax) {
                     setRatingValue(ratingItem.value, rating);
                 } else {
                     ratingValue.innerHTML = index + 1;
                     setRatingActiveWidth();
                 }
             });
         }

    }
}