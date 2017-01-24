var link = document.querySelector(".hotels__button");
var popup = document.querySelector(".hotels__form");


link.addEventListener("click", function(event) {
       event.preventDefault();
       popup.classList.toggle("hotels__form-show");
});
