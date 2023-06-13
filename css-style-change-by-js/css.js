document.getElementById('button-1').addEventListener('click',function(){
    document.getElementById('text').style.fontWeight = 'bold';
});
document.getElementById('button-2').addEventListener('click',function(){
    document.getElementById('text').style.fontStyle = 'italic';
});
document.getElementById('button-3').addEventListener('click',function(){
    document.getElementById('text').style.textDecoration = 'underline';
});
document.getElementById('button-4').addEventListener('click',function(){
    document.getElementById('text').style.textAlign = 'left';
});
document.getElementById('button-5').addEventListener('click',function(){
    document.getElementById('text').style.textAlign = 'right';
});
document.getElementById('button-6').addEventListener('click',function(){
    document.getElementById('text').style.textAlign = 'center';
});