let clear = document.getElementById('clear');
let display = document.getElementById('display');
let input = []
let a;
let symbol;
let r;
let history = [];
display.innerText = "what"

function clearing(){
  display.innerText=0;
  input = []
  a = 0;
  symbol = '';
}

function cdecimal(){
   if(display.innerText == 0){
    display.innerText = "";
  }
  if(!display.textContent.includes('.')){
    display.append('.')
  input.push('.')
  }
}
 
function number(n){
  if(display.innerText == 0){
    display.innerText = ""
    input =[]
  }
  display.append(n)
  input.push(n)
  
} 

function operation(s){
  a = parseFloat(input.join(""));
  console.log(a);
  symbol = s
  input = [] 
  display.innerText = "";
}

function calculating(){
  if (symbol == '+'){
    r = a + parseFloat(input.join(""));
    display.innerText = r;
    input = r.toString().split('').map(i=>parseFloat(i))
  }
  if (symbol == '-'){
    r = a - parseFloat(input.join(""));
    display.innerText = r;
    input = r.toString().split('').map(i=>parseFloat(i))
  }if (symbol == 'x'){
    r = a * parseFloat(input.join(""));
    display.innerText = r;
    input = r.toString().split('').map(i=>parseFloat(i))
  }if (symbol == '/'){
    r = a / parseFloat(input.join(""));
    display.innerText = r;
    input = r.toString().split('').map(i=>parseFloat(i))
  }
   
}
