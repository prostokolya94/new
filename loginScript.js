// массив путей с возможными картинками
const imgUrls = [
  '/images/svg/botanic.svg',
  '/images/png/002-plant.png',
];

const infoBlock = document.querySelector('.plant-info');

let choosenPlantId = null;

(async function () {
  // сдвиг лого вверх при входе в ЛК
  introAnimation(300);
  const networkService = new NetworkService();
  const flowerbed = await networkService.getFlowerbed();

  // функция вывода всех посаженых растений на страницу
  function renderFlowerbed() {
    // получим контейнер
    const garden = document.querySelector('.garden');
    // для каждого элемента в массиве с рестениями
    flowerbed.forEach(p => {
      // создадим div
      const plantNode = document.createElement('div');
      // добавим класс
      plantNode.className = 'plant';
      // и id
      plantNode.setAttribute('id', p.id);
      // выберем случайную картинку
      const imagePath = imgUrls[p.imageId];
      // добавим тег с выбраной картинкой в созданый div
      plantNode.innerHTML = `<img class="planty" src="${imagePath}">`;
      // добавим всё в контейнер
      garden.prepend(plantNode);
    })
  }
  // вызовим её
  renderFlowerbed();

  const allPlants = document.querySelectorAll('.plant');
  console.log(allPlants)
  allPlants.forEach(p => p.onclick = handlePlantClick);

  function handlePlantClick(e) {
    e.stopPropagation();
    const id = Number(e.target.id);
    choosenPlantId = id;
    infoBlock.classList.add('active');
    const plant = flowerbed.find(f => f.id === id);
    console.log(plant);
    renderInfoByPlant(plant);
  }

  const deleteButton = document.querySelector('.clear');
  deleteButton.onclick = handleDeletePlant;
  function handleDeletePlant() {
    networkService.deletePlantFromFlowerbedById(choosenPlantId);
    const plantToDelete = document.getElementById(choosenPlantId);
    plantToDelete.remove();
    infoBlock.classList.remove('active');
    choosenPlantId = null;
  }
})()


function renderInfoByPlant(plant) {
  const { name, nameInLatin, count, timeoutOfWater, minTemp, maxTemp, lightMode, lightTime} = plant;
  document.querySelector('.title-value').textContent = name;
  document.querySelector('.latin').textContent = nameInLatin;
  document.querySelector('.count-value').textContent = count;
  document.querySelector('.water-timeout-value').textContent = `${timeoutOfWater} часа`;
  document.querySelector('.min-temp').textContent = `${minTemp}°`;
  document.querySelector('.max-temp').textContent = `${maxTemp}°`;
  document.querySelector('.light-mode-value').textContent = calculateTempMode(lightMode);
  document.querySelector('.light-time-value').textContent = `${lightTime} часа`;
}

// 1-темнота, 5-рассеянный свет, 10-прямой свет
function calculateTempMode(mode) {
 switch (mode) {
  case 1:
    return 'темнота';
  case 5:
    return 'рассеянный свет';
  case 10:
    return 'прямой свет';
  default:
    return 'неизвестно';
 }
}

// функция анимируюшая заголовок
function introAnimation(time) {
  let intro = document.querySelector('.intro');
  function introUp() {
    intro.style.transform = 'translateY(-60px)';
    intro.style.color = 'rgb(45, 51, 34)';
  }
  setTimeout(introUp, time);
}

document.onclick = e => {
  const { target } = e;
  if (!target.closest('.plant-info')
    && infoBlock.classList.contains('active')) {
    infoBlock.classList.remove('active');
    choosenPlantId = null;
  }
}