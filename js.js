const clearBtn = document.getElementsByClassName('clear-btn');
const result =document.getElementById('result');
const btn = document.getElementsByClassName('normal-btn');
const operators = ['+', '-', '/', '%', 'X'];
for(let i=0; i< btn.length;i++){

  btn[i].addEventListener('click', function (){
    if(!btn[i].getAttribute('id'))
       updateScreen(btn[i].innerText);
    else
       checkOperator(btn[i].innerText);
  });
}

function updateScreen (valueBtn){
  if(result.innerText === '0')
    result.innerText = valueBtn;
  else if(operators.indexOf(result.innerText.slice(-1)) !== -1 && operators.indexOf(valueBtn) !== -1)
  {
    result.innerText = result.innerText.slice(0,-1);
    result.innerText += valueBtn;
  }
  else

    result.innerText += valueBtn;
  }
  let firstNum, secondNum, operation;

  function checkOperator(operator){
    if(operator !== 'C' && operator !== '='){
      updateScreen(operator);
      firstNum = result.innerText.slice(0,-1);
      operation = result.innerText.slice(-1);
    }
    else if(operator === '='){
      secondNum = result.innerText.split(operation)[1];
      calculations();
    }
    else if(operator === 'C')
      result.innerText = 0;

    }
    
  function calculations(){
    switch(operation){
      case '+':
        result.innerText = parseFloat(firstNum) + parseFloat(secondNum);
        break;
      case '-':
        result.innerText = parseFloat(firstNum) - parseFloat(secondNum);
        break;
      case 'X':
        result.innerText = parseFloat(firstNum) * parseFloat(secondNum);
        break;
      case '/':
        result.innerText = parseInt(firstNum) / parseInt(secondNum);
        break;
      case '%':
        result.innerText = parseFloat(firstNum) % parseFloat(secondNum);
        break;
    }
  }