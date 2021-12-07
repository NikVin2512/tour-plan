var menuBurger = document.querySelector('.navbar-burger');
  menuBurger.addEventListener("click", function(){
  document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible');
});