export 
function display(va){
    document.querySelector('#result').value += va;
}
function solve(){
    let t= eval(document.querySelector('#result').value);
    document.querySelector('#result').value= t;
    return t;
}

function clearScreen(){
    document.querySelector('#result').value="";
}

(function onload(){
    document.querySelector('.keys').firstElementChild.addEventListener('click',function(){
        /* display(document.getElementsByClassName('.button')); */
        console.log(document.getElementsByClassName('.button'));
    })
})();