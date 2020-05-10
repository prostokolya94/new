//сдвиг лого вверх при входе в ЛК
let intro = document.querySelector ('.intro')
let garden = document.querySelector ('.garden')
function introUp() {
  intro.style.marginTop = -60 + 'px';
  intro.style.color = 'rgb(45, 51, 34)';
  garden.style.marginTop = 110 + 'px';
}  
setTimeout(introUp, 200);


//база растений
const pullOfPlants = [
  { 
    id: 1, 
    name:'Комнатная фиалка',
    nameInLatin: 'Saintpaulia',
    timeoutOfWater: 72, /*интервал полива, часов*/
    maxTemp: 24,
    minTemp: 15,
    lightMode: 5,  /*1-темнота, 5-рассеянный свет, 10-прямой свет*/
    lightTime: 14, /*световой день, часов*/
  }
]
alert (pullOfPlants);