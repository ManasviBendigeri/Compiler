//User input for calcution
let input = ['sum',200,200]

//Lexical Analysis 
let operArr = []
let numberArr = []
 
//Tokenization
for(let i = input.length-1; i >=0;i--){
  if(typeof input[i] === 'string'){
    operArr.push(input[i])
  }else{
    numberArr.push(input[i])
  }
};

//Intializing value
let value = 0

//Actions
switch(operArr[0]){
case 'sum':
if(operArr[0] === 'sum'){
  for(let i = 0; i <= numberArr.length-1;i++){
    value = numberArr[i] + value;
  }
}
break;
case 'sub':
    if(operArr[0] === 'sub'){
        value = 0;
        for(let i = 0; i <= numberArr.length-1;i++){
          value = value - numberArr[i];
        }
      }
break;
case 'mul':
    if(operArr[0] === 'mul'){
        value = 1;
        for(let i = 0; i <= numberArr.length-1;i++){
          value = numberArr[i] * value;
        }
      }
break;
case 'div':
    if(operArr[0] === 'div'){
        value = 1;
        for(let i = 0; i <= numberArr.length-1;i++){
          value = numberArr[i] / value;
        }
      }
break;
    }      

//Results 
console.log("Numbers: ", numberArr);
console.log("Operand: ", operArr);
console.log("Result:", value);


