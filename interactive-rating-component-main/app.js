const btn1 = document.querySelector('#rating1');
const btn2 = document.querySelector('#rating2');
const btn3 = document.querySelector('#rating3');
const btn4 = document.querySelector('#rating4');
const btn5 = document.querySelector('#rating5');

const submit = document.querySelector('#submit');
const select = document.querySelector('#selected')

const maincard = document.querySelector('#maincard');

const secondCard = document.querySelector('#secondcard');
let reviewVal = 0;

let btns = document.querySelectorAll('.buttons');
let flag = false;
document.querySelectorAll('.buttons').forEach(btn => {
    btn.addEventListener('click', event => {
        if (flag == false){
            btn.style.backgroundColor = 'orange';
            btn.color = 'white';
            flag = true;
            reviewVal = btn.innerText;
            console.log(reviewVal)

        } else {
            btn.style.backgroundColor = 'hsl(216, 12%, 8%)';
            btn.color = 'lightgrey';
            flag = false;
        }
        }
      
    )
  })




  function changeState(){
    maincard.style.display = 'none';
    secondCard.style.display = 'flex';
    
    select.innerText = `You selected ${reviewVal} out of 5`;
}



