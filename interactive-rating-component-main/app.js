const btn1 = document.querySelector('#rating1');
const btn2 = document.querySelector('#rating2');
const btn3 = document.querySelector('#rating3');
const btn4 = document.querySelector('#rating4');
const btn5 = document.querySelector('#rating5');

let btns = document.querySelectorAll('.buttons');
let flag = false;
document.querySelectorAll('.buttons').forEach(btn => {
    btn.addEventListener('click', event => {
        if (flag == false){
            btn.style.backgroundColor = 'orange';
            btn.color = 'white';
            flag = true;
        } else {
            btn.style.backgroundColor = 'hsl(216, 12%, 8%)';
            btn.color = 'lightgrey';
            flag = false;
        }
        }
      
    )
  })



