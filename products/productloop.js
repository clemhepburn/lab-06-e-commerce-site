//import product objects and list function
import { painting } from './products.js';
import { makePaintingLi } from './utils.js';

//console.log(painting);

const ul = document.querySelector('.paintings');

for (let art of painting) {
    const li = makePaintingLi(art);
    ul.append(li);
}