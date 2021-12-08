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
// Validate Form
$(".form").each(function(){
  $(this).validate({
    errorClass: 'invalid',
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: "Please specify your name",
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      }
    }
  });
});
$(document).ready(function(){
  $('.phone_us').mask('+7(000) 000-00-00');
});
});