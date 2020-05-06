let intro = document.querySelector ('.intro')
let garden = document.querySelector ('.garden')
function introUp() {
  intro.style.marginTop = -60 + 'px';
  intro.style.color = 'rgb(138, 221, 138)';
  garden.style.marginTop = 110 + 'px';
}  
setTimeout(introUp, 100);