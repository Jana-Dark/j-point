
 const sloganCarta = document.querySelector(".slogan-carta");

 window.addEventListener( "scroll", function (){
     let scrollSloganCarta =window.scrollY;

     if (scrollSloganCarta>0) {
         sloganCarta.classList.add('opacity');
     }

     if (scrollSloganCarta<0) {
         sloganCarta.classList.remove('opacity');
     }
    // console.log(scrollSloganCarta);
 });

 /*Подсветка главной картинки*/

 function Chung (event) {
     blogMainImage.classList.toggle('chung')}

 function ChungRemove (event) {
     blogMainImage.classList.remove('chung')}

 const blogMainImage= document.querySelector('.blog-main-image')
 //const HeaderLogo = document.querySelector('')

 blogMainImage.addEventListener("mouseover", function (event) {
     if (event.target.closest('img')) Chung ();
 })

 blogMainImage.addEventListener("mouseout", ChungRemove)



 /*Подсветка второстепенной картинки*/

function Cheng (event) {
    blogOtherBlock.classList.toggle('cheng')}

function ChengRemove (event) {
   blogOtherBlock.classList.remove('cheng')}


 const blogOtherContainer= document.querySelector('.blog-other-container')
 const blogOtherBlock= document.querySelector('.blog-other-block')


 blogOtherContainer.addEventListener("mouseover", function (event) {
     if (event.target.closest('.fuck')) Cheng ();
     console.log(event)
 })

 blogOtherContainer.addEventListener("mouseout", function (event) {
     if (event.target.closest('.fuck')) ChengRemove ();
     console.log(event)
 })


/* const blogOtherBlockAll= document.querySelectorAll('.blog-other-block')

 blogOtherBlockAll.forEach(Item => {
     Item.addEventListener("mousemove", Cheng);
 });*/


 function Ching (event) {
     blogH2.innerHTML = `Для вас`}

 function ChingRemove (event) {
     blogH2.innerHTML= `Блок`}

 const blogMainContainer= document.querySelector('.blog-main-container')
 const blogH2= document.querySelector('h2')

 blogMainContainer.addEventListener("mouseover", function (event) {
     if (event.target.closest('h2')) Ching ();
 })

 blogMainImage.addEventListener("mouseout", ChingRemove);








 // Простые события
 //Самые часто используемые простые события:
 /*
 mousedown / mouseup - Кнопка мыши нажата / отпущена над элементом.
 mouseover / mouseout - Курсор мыши появляется над элементом и уходит с него.
 mousemove - Каждое движение мыши над элементом генерирует это событие.
 contextmenu - Вызывается при попытке открытия контекстного меню,
                     как правило, нажатием правой кнопки мыши.
                     Но, заметим, это не совсем событие мыши,
                     оно может вызываться и специальной клавишей клавиатуры.
 */

 //Комплексные события
 /*
 click - Вызывается при mousedown, а затем mouseup над одним
 и тем же элементом, если использовалась основная кнопка мыши.
 dblclick - Вызывается двойным кликом на элементе.
 Комплексные события состоят из простых, поэтому
 в теории мы могли бы без них обойтись.
 Но хорошо, что они существуют, потому что работать с ними очень удобно.


 const button = document.querySelectorAll('.button');

 function showConsole() {
     console.log('Ура!');
 }
 button.forEach(buttonItem => {
     buttonItem.addEventListener("click", showConsole);
 });
 */