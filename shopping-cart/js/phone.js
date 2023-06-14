const mobilePrice = document.getElementById('price-phone').innerText;
const casePrice = document.getElementById('price-case').innerText;

document.getElementById('cart-minus-phone').addEventListener('click', function () {

    cartQuantity('cart-field-phone', false);
    priceCalculate('cart-field-phone', 'price-phone', mobilePrice);
    totalCalculation();


});
document.getElementById('cart-plus-phone').addEventListener('click', function () {

    cartQuantity('cart-field-phone', true);
    priceCalculate('cart-field-phone', 'price-phone', mobilePrice);
    totalCalculation();

});

document.getElementById('cart-minus-case').addEventListener('click', function () {
    cartQuantity('cart-field-case', false);
    priceCalculate('cart-field-case', 'price-case', casePrice);
    totalCalculation();

});
document.getElementById('cart-plus-case').addEventListener('click', function () {
    cartQuantity('cart-field-case', true);
    priceCalculate('cart-field-case', 'price-case', casePrice);
    totalCalculation();
});

