document.getElementById('coupon-field').addEventListener('keyup', function(event) {
    if(event.target.value == 'tamim30'){
        document.getElementById('apply-btn').removeAttribute('disabled');
    }
    else if(event.target.value != 'tamim30'){
        document.getElementById('apply-btn').setAttribute('disabled','');
    }
    
});
let i=1;
document.getElementById('apply-btn').addEventListener('click',function(){
    if(i==1){
        document.getElementById('price').innerText= parseFloat(document.getElementById('price').innerText) * (30/100);
        i++;
    }
});
