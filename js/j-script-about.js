
 const sloganCarta = document.querySelector(".slogan-carta");

 window.addEventListener( "scroll", function (){
     let scrollSloganCarta =window.scrollY;

     if (scrollSloganCarta>1000) {
         sloganCarta.classList.add('opacity');
     }

     if (scrollSloganCarta<1000) {
         sloganCarta.classList.remove('opacity');
     }
     console.log(scrollSloganCarta);
 });





 /*const aTagFoto = document.querySelectorAll('.foto-img-hov');

 aTagFoto.forEach (aTagFotoItem => {
     aTagFotoItem.addEventListener('click', function (e) {
         e.preventDefault();
         window.location = 'https://www.instagram.com/saveukraine.com.ua/'; })
 });*/





 /*new window.JustValidate('.form', {
  rules: {
   name: {
    required: true
   },

   tel : {
     required: true,
     function: () => {
     const phone =telSelector.inputmask.unmaskedvalue();
     return Number (phone) && phone.length === 10;
    }
   }
  },
  messages :{
   name: {
    required : 'Введите имя',
    minLength: 'Введите 3 и более символов',
    maxLength: 'Запрещено воодить более 15 символов'
   }
  },
  submitHandler: function(thisForm) {

  }

 })*/








/*$(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});*/