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
      name: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        minlength: '17',
      },
    },
    messages: {
      name: "Please specify your name. Minimum 3 letters ",
      phone: "Your phone number must be in the format of +7(999) 999-99-99",
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      }
    }
  });
});
$(document).ready(function(){
  $('.phone-us').mask('+7(000) 000-00-00');
});
});