//generating the product list on the DOM with this function
import { addItemToCart } from './local-storage-utils.js';

export function makePaintingLi(painting) {
    const li = document.createElement('li');
    //adds a class to the li tag
    li.classList.add('painting');
    //fills out the name 
    const pName = document.createElement('p');
    pName.classList.add('name');
    pName.textContent = painting.name;
    //fills out the artist
    const pArtist = document.createElement('p');
    pArtist.classList.add('artist');
    pArtist.textContent = painting.artist;
    //fills out the image
    const image = document.createElement('img');
    image.classList.add('image');
    image.src = painting.image;
    //fills out the "detail"/medium
    const pDetail = document.createElement('p');
    pDetail.classList.add('detail');
    pDetail.textContent = painting.detail;
    //fills out the price (need to ask about that alternate syntax)
    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = `$${painting.price}`;
    //button
    const cartButton = document.createElement('button');
    cartButton.classList.add('button');
    cartButton.textContent = 'Add to Cart';
    //nest these all within the li
    li.append(pName, pArtist, image, pDetail, pPrice, cartButton);
    //return (for a pure function)
    return li;

    
}

export function findById(whateverArray, whateverId) {
    for (let item of whateverArray) {
        if (item.id === whateverId) {
            return item;
        }
    }
}

export const calcItemTotal = (price, quantity) => {
    const total = Math.round( price * quantity * 100 ) / 100;
    //toFixed method converts a number to string, rounding to (number of decimals)
    return total.toFixed(2);
};

export function createTableRow(cartItem, painting) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdPrice = document.createElement('td');

    tdName.textContent = painting.name;
    tdQuantity.textContent = cartItem.quantity;
    const total = painting.price * cartItem.quantity;

    const config = {
        currency: 'USD',
        style: 'currency'
    };

    const totalUSD = total.toLocaleString('en-US', config);

    tdPrice.textContent = totalUSD;

    return tr;
}

export function createTotalDiv(cartArray, paintingArray) {
    let sum = 0;

    for (let cartItem of cartArray) {
        const matchingPainting = findById(paintingArray, cartItem.id);
        const lineItem = matchingPainting.price * cartItem.quantity;

        sum = sum + lineItem;
    }

    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td3.textContent = `$${sum}.00`;

    tr.append(td1, td2, td3);

    return tr; 
    
}
