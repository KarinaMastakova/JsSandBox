const myButton = document.querySelector(`button`);
const myBox = document.querySelector(`.box`)
const colors = ["red","green","blue","yellow"];

myButton.addEventListener(`click`, changeColor);

function changeColor () {

    let rondomIndex = Math.floor(Math.random() * colors.length);
    console.log(rondomIndex);
    myBox.style.backgroundColor = colors[rondomIndex];

}