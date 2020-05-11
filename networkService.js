class NetworkService {
  constructor() {
    this.apiUrl = 'http://localhost:3000';
    this.plants = [];
    this.flowerbed = [];
  }

  async getPlants() {
    this.plants = await this.reqest('/plants');
    return this.plants;
  }

  async getFlowerbed() {
    this.flowerbed = await this.reqest('/flowerbed');
    const plants = await this.getPlants();
    const result = this.flowerbed.map(flowerbed => {
      const plant = plants.find(p => p.id === flowerbed.plant_id);
      return {...plant, ...flowerbed };
    })
    console.log(result);
    return result;
  }

  async deletePlantFromFlowerbedById(id) {
    await this.reqest(`/flowerbed/${id}`, 'DELETE');
  }

  async setFlowerbedByPlantId(id) {
    const body = { plant_id: id };
    await this.reqest('/flowerbed', 'POST', body)
  }

  async reqest(url, method = 'GET', body) {
    let json;
    let params = { method };
    if (method === 'POST') {
      params = {
        ...params,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        }
      }
    }

    try {
      const reqest = await fetch(this.apiUrl + url, params);
      if (!reqest.ok) {
        throw new Error('Ошибка в запросе');
      }
      json = await reqest.json();
      console.log(`Запрос на ${this.apiUrl + url} - ${method} успешен.`)
      console.log('Ответ', json);
    } catch (e) {
      console.log(`Ошибка в запросе: ${this.apiUrl + url} - ${method}`);
      throw e;
    }
    return json;
  }
}