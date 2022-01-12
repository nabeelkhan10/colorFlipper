let btn =  document.querySelector('button');
let h1 = document.querySelector('h1');
let r,g,b;
let ranColor = function (){
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
    return [r,g,b];
}
// console.log(ranColor())
function changeColor(){
    r,g,b = ranColor()[0],ranColor()[1],ranColor()[2];
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    h1.textContent = `Background Color RGB(${r},${g},${b})`;
    h1.style.color = `rgb(${r},${g},${b})`;
    btn.style.color = `rgb(${r},${g},${b})`;
}

btn.addEventListener('click',changeColor);

//rgb(red, green, blue);