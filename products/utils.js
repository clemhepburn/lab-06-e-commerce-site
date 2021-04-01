//generating the product list on the DOM with this function

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

