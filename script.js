//сдвиг лого вверх при входе в ЛК
let intro = document.querySelector('.intro')
let garden = document.querySelector('.garden')
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
    count: 0,
    name: 'Комнатная фиалка',
    nameInLatin: 'Saintpaulia',
    timeoutOfWater: 72, /*интервал полива, часов*/
    maxTemp: 24,
    minTemp: 15,
    lightMode: 5,  /*1-темнота, 5-рассеянный свет, 10-прямой свет*/
    lightTime: 14, /*световой день, часов*/
  },
  {
    id: 2,
    count: 0,
    name: 'иалка',
    nameInLatin: 'Saintpaulia',
    timeoutOfWater: 72, /*интервал полива, часов*/
    maxTemp: 24,
    minTemp: 15,
    lightMode: 5,  /*1-темнота, 5-рассеянный свет, 10-прямой свет*/
    lightTime: 14, /*световой день, часов*/

  }
]


//добавление на клумбу
const myPlants = [];
let y = document.querySelectorAll('.plant');
y.forEach(item => {
  item.onclick = clickElem;
})

function clickElem(e) {
  e.stopPropagation()
  const id = Number(e.target.getAttribute('id'))
  let item = pullOfPlants.find(item => item.id ===id );
  if (item.count == 0) {
    myPlants.push(item);
  } 
  item.count += 1;
  console.log(e.target.getAttribute('id'));
  console.log (myPlants);
}

