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
let plant1 = document.querySelector('.first');
plant1.onclick = function () {
  let item1 = pullOfPlants.find(item1 => item1.id == 1);
  if (item1.count == 0) {
    myPlants.push(item1);
    item1.count += 1;
  } else {
    item1.count += 1;
  }
  console.log(myPlants)
};

let plant2 = document.querySelector('.second');
plant2.onclick = function () {
  let item2 = pullOfPlants.find(item2 => item2.id == 2);
  if (item2.count == 0) {
    myPlants.push(item2);
    item2.count += 1;
  } else {
    item2.count += 1;
  }
  console.log(myPlants)
};