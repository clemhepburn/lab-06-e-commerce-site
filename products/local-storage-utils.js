import { findById } from './utils.js';

const CART = 'CART'; //booger

export function getCart() {
    const stringCart = localStorage.getItem(CART);
    const parsedCart = JSON.parse(stringCart);

    if (parsedCart) {
        return parsedCart;
    } else {
        return [];
    }
}

export function setCart(parsedCart) {
    const stringCart = JSON.stringify(parsedCart);
}

export function addItemToCart(productId) {
    const cart = getCart();

    const matchingPainting = findById(cartArray, productId);

    if (matchingPainting) {
        matchingPainting.quantity++;
    
    } else {
        const item = {
            id: productId,
            quantity: 1
        };
        
        cart.push(item);
    }

    setCart(cart);
}