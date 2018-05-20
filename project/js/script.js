
 var buttonList = document.querySelectorAll(".button");

  // var popup = document.querySelector(".modal");
 // var content = popup.querySelector(".modal__content");
 // var close = content.querySelector(".modal__content-close");

 // var overlay = document.querySelector(".modal__overlay");


 for(var i = 0; i < buttonList.length; i++){
       buttonList[i].addEventListener("click", function(event){
       event.preventDefault();
        var overlay = document.querySelector(".modal__overlay");
       var modal = event.target.parentElement.parentElement.children[1];
       var content = event.target.parentElement.parentElement.children[1].children[0];
       modal.classList.add("modal-show");
       content.classList.add("modal__content-show");

        var close = content.querySelector(".modal__content-close");

         close.addEventListener("click", function(event) {
        event.preventDefault();
        modal.classList.remove("modal-show");
        content.classList.remove("modal__content-show");
      });

      overlay.addEventListener("click", function(event) {
        event.preventDefault();
        modal.classList.remove("modal-show");
      });

     });
   }







