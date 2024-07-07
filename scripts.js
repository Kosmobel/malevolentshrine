const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav');



var res = window.matchMedia("(max-width: 575.98px)")
if(res.matches){
  menu.style.display = 'none';
}



menuBtn.addEventListener('click', function() {
  if (menu.style.display === 'none') {
    menu.style.display = 'grid';
    menu.style.position = 'fixed';
    menuBtn.style.background = "green"
  } else {
    menu.style.display = 'none';
    menuBtn.style.background = "#333"
  }
});

function alertPrice() {
  confirm("Вы хотите это купить?") ? alert("Вы успешно купили товар!") : alert("Очень жаль! Выберите другой товар.") ;
}