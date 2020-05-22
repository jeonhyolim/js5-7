const range = 100;
const answer = Math.ceil(Math.random()*range);
console.log(answer);

const inputTag = document.getElementById("input");
const resultDiv = document.getElementById("result");
const formBtn = document.getElementById("formBtn");
const displaylife = document.getElementById("lifecnt");

let life =5;
formBtn.onclick = (event) => {
    life -= 1;
    displaylife.textcontent = life;
    const userInput = Number(inputTag.value);
    const result = document.createElement('h2');
    result.textcontent = userInput + "☞";

    if (userInput === answer) {
        result.textContent += "Answer";
        alert("You are correct!");
    }
    else{
        if (life > 0) {
            event.preventDefault();
            (userInput > answer) ? (result.textContent += "Down"):(result.textContent += "UP")
            inputTag.focus();
        }
        else{
            alert("You failed!\nThe answer is" + answer);
        }
    }
    resultDiv.append(result);
    inputTag.value = '';
}