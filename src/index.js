import shoppingList from './shopping-list.js';
import $ from 'jquery';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
