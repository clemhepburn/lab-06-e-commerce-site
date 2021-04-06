import { painting } from '../products.js'; 
import { cartArray } from './cart-data.js';
import { createTableRow, createTotalDiv, findById } from '../utils.js';
import { makeCartTable } from './render-line-items.js';
import { calcItemTotal } from '../utils.js';
import { getCart } from '../local-storage-utils.js';

//const table = document.querySelector('table');

const button = document.getElementById('submit');

const cart = getCart();

const table = documen.querySelector('table');

for (let cartItem of cart) {
    const matchingPainting = findById(painting, cartItem.id);

    const tr = createTableRow(cartItem, matchingPainting);

    table.append(tr);

}

const total = createTotalDiv(cart, painting);

table.append(total);

button.addEventListener('click', () => { 
    const cart = getCart();

    alert(JSON.stringify(cart));

    localStorage.clear();

    window.location = "/";
});

