
const cart = [
    { nome: "Big Combo Família", quantidade: 1, preco: 100.00 },
    { nome: "Big Bacon em Dobro", quantidade: 2, preco: 55.00 },
    { nome: "Combo 10", quantidade: 3, preco: 36.90 }
];

function loadCart() {
    let cartItems = document.getElementById('cart-items');
    let totalPrice = 0;

    cart.forEach(item => {
        let itemTotal = item.quantidade * item.preco;
        totalPrice += itemTotal;

        let row = `
            <tr>
                <td>${item.nome}</td>
                <td>${item.quantidade}</td>
                <td>${item.preco.toFixed(2)}</td>
                <td>${itemTotal.toFixed(2)}</td>
            </tr>
        `;

        cartItems.insertAdjacentHTML('beforeend', row);
    });

    document.getElementById('total-price').innerText = `Total: R$ ${totalPrice.toFixed(2)}`;
}

loadCart();
