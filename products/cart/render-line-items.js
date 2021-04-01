export function makeCartTable(cartItem, painting) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdPrice = document.createElement('td');

    tdName.textContent = painting.name;
    tdQuantity.textContent = cartItem.quantity;
    tdPrice.textContent = painting.price;

    tr.append(tdName, tdQuantity, tdPrice);

    return tr;
}