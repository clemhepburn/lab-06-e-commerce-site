export function makePaintingLi(painting) {
    const li = document.createElement('li');
    
    li.classList.add('painting');

    const pName = document.createElement('p');
    pName.classList.add('name');
    pName.textContent = painting.name;

    const pArtist = document.createElement('p');
    pArtist.classList.add('artist');
    pArtist.textContent = painting.artist;

    const image = document.createElement('img');
    image.classList.add('image');
    image.src = painting.image;

    const pDetail = document.createElement('p');
    pDetail.classList.add('detail');
    pDetail.textContent = painting.detail;

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = `$${painting.price}`;

    const cartButton = document.createElement('button');
    cartButton.classList.add('button');
    cartButton.textContent = 'Add to Cart';

    li.append(pName, pArtist, image, pDetail, pPrice, button);

    return li;

    
}

//name
//artist
//Image
//Detail 
//price