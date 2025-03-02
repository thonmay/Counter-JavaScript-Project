
//Data
let previousEntries = []

//Elements
const incBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
const countEl = document.getElementById("count-el");

//Initializations
function init()
{
    countEl.textContent = 0;
}
init();

//Processing
incBtn.addEventListener('click', onButtonClick);

function onButtonClick()
{
    countEl.textContent = parseInt(countEl.textContent) + 1;
}

saveBtn.addEventListener('click', onSaveBtnClick);
const div = document.getElementById("root");
const elem = document.createElement('p');

function onSaveBtnClick()
{
    div.appendChild(elem);
    const totalPassenger = countEl.innerText;
    previousEntries.push(totalPassenger);

    elem.textContent = "Previous Entries: " + previousEntries.join(", ");
    
    //Reset Counter & Remove Msg after 3 seconds
    setTimeout ( () => init(), 1000);
    setTimeout( () => {
        elem.textContent = "";
    }, 6000);
}
