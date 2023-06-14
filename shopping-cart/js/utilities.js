function cartQuantity(elementId,isIncrease){

    const previousValue = document.getElementById(elementId).value;

    if(!isIncrease && parseInt(previousValue) > 1){
        document.getElementById(elementId).value = parseInt(previousValue)-1;
    }
    else if(isIncrease){
        document.getElementById(elementId).value = parseInt(previousValue)+1;
    }
}
function priceCalculate(quantityElementId,priceElementId,price){
    document.getElementById(priceElementId).innerText = parseInt(document.getElementById(quantityElementId).value) * parseInt(price);
    
}
function subTotalCalculate(subTotalField,field1,field2){
   
    document.getElementById(subTotalField).innerText = parseInt(document.getElementById(field1).innerText) + parseInt(document.getElementById(field2).innerText);
}
function taxCalculate(taxField,subTotal){
    
    document.getElementById(taxField).innerText = (parseFloat(document.getElementById(subTotal).innerText)*0.3).toFixed(2);
}
function totalCalculate(totalField,subTotal,tax){
    
    document.getElementById(totalField).innerText = parseFloat(document.getElementById(subTotal).innerText) + parseFloat(document.getElementById(tax).innerText);
}
function totalCalculation() {
    subTotalCalculate('sub-total-amount', 'price-phone', 'price-case');
    taxCalculate('tax-amount', 'sub-total-amount')
    totalCalculate('total-amount', 'sub-total-amount', 'tax-amount');
}