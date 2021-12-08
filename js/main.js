$(document).ready(function(){
var menuBurger = document.querySelector('.navbar-burger');
  menuBurger.addEventListener("click", function(){
  document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible');
});


var modalButton = $('[data-toggle=modal]');
var modalClose = $('.modal__close');
  modalButton.on('click', openModal);
  modalClose.on('click', closeModal);

function openModal() {
  var modalWindow = $('.modal');
  var modalBg = $('.modal-bg');
  modalWindow.addClass('modal--active');
  modalBg.addClass('modal-bg--active');
}

function closeModal(event) {
  var modalWindow = $('.modal');
  var modalBg = $('.modal-bg');
  modalWindow.removeClass('modal--active');
  modalBg.removeClass('modal-bg--active');
  event.preventDefault();
}
$(document).on('keydown',function(event) {
  if (event.keyCode == 27) {
      closeModal();
   }
});
});