/* скрипт который подключается в list.html */

// массив путей с возможными картинками
const imgUrls = [
  '/images/svg/botanic.svg',
  '/images/png/002-plant.png',
];

// асинхроная функция
(async function () {
  // создадим экземплюр класса работы с запросами
  const networkService = new NetworkService();
  // получим список всех растеней
  const pullOfPlants = await networkService.getPlants();
  // функция вывода всех растейней на страницу
  function renderList() {
    // получим контейнер
    const garden = document.querySelector('.garden-down');
    // для каждого элемента в массиве с рестениями
    pullOfPlants.forEach(p => {
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
      garden.appendChild(plantNode);
    })
  }
  // вызовим её
  renderList();
  // выберем все растения
  let plants = document.querySelectorAll('.plant');
  // и навесим на них оброботчик по клику
  plants.forEach(item => item.onclick = clickElem);

  function clickElem(e) {
    // получим id
    const id = Number(e.target.getAttribute('id'));
    // отправим запрос что выбрали это растение
    networkService.setFlowerbedByPlantId(id);
  }
})()
