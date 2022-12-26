/* eslint-disable linebreak-style */
import RestoDBSource from '../../data/resto.source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Resto = {
  async render() {
    return `
    <div class="restaurant">
      <h1 id="restaurant-label">Explore Restaurant</h1>
      <div id="resto" class="card-list"></div>
    </div>
      `;
  },
  async afterRender() {
    const restaurant = await RestoDBSource.infoResto();
    const restaurantContainer = document.querySelector('#resto');
    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Resto;
