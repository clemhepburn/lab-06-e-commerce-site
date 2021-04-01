import { painting } from '../products.js'; 
import { cartArray } from './cart-data.js';
import { findById } from '../utils.js';
import { makeCartTable } from './render-line-items.js';
import { calcItemTotal } from '../utils.js';

//const table = document.querySelector('table');

for (let cartItem of cartArray) {
    const paintingId = findById(painting, cartItem.id);
    const tr = makeCartTable(cartItem, paintingId);
    document.querySelector('#cart-table').append(tr);
}

const total = calcItemTotal(cartArray, painting).value;

document.querySelector('.total').textContent = total;