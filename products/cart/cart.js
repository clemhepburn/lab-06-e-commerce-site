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

const total = calcItemTotal(cartArray, painting);

const droolings = ['egg ', 'orange ', 'peel ', 'spool ', 'photograph ', 'map ', 'sediment ', 'laugh ', 'trampoline ', 'curtain ', 'wrapper ', 'pony ', 'lumber ', 'tea ', 'cart ', 'sticker ', 'worm ', 'emptiness '];
const prepositions = ['through ', 'on ', 'about ', 'in ', 'over ', 'under ', 'through ', 'beside ', 'except ', 'but ', 'and '];
const verbAdjective = ['eating ', 'trampling ', 'cupping ', 'traversing ', 'blue ', 'tangential ', 'pondering ', 'pensive '];

function randomWord(wordArray) {
    var word = wordArray[Math.floor(Math.random() * wordArray.length)];
    return word 
};

var newWord = randomWord(prepositions);

function sentenceGenerator() {
    var string = `${randomWord(droolings)}${randomWord(prepositions)}${randomWord(verbAdjective)}`;
    document.querySelector('.random').textContent = string;
};

window.setInterval(function(){
    sentenceGenerator();
}, 4000);
sentenceGenerator();