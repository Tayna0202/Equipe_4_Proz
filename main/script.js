document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
  });
});


document.getElementById('menu-button').addEventListener('click', () => {
  var menu = document.getElementById('mobile-menu')
  
  if(menu.style.display == 'none'){
    menu.style.display = 'block'
  }
  else {
    menu.style.display = 'none'
  }

});