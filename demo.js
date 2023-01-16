const productNameInputElement=document.getElementById('product-name');
const remainingCharsElement=document.getElementById('remaining-chars');
const maxAllowedChars=productNameInputElement.maxLenght

function updateRemainingCharacters(event){
const enteredText=event.target.value;
const enteredTextLenght=enteredText.lenght;

const remainingCharacters=maxAllowedChars-enteredTextLenght;
remainingCharsElement.textContent=remainingCharacters;

if (remainingCharacters===0){
remainingCharsElement.classList.add('error');
productNameInputElement.classList.add('error');
}else if (remainingCharacters<=10){
    remainingCharsElement.classList.add('warning');
    productNameInputElement.classList.add('warning');
    remainingCharsElement.classList.remove('error');
    productNameInputElement.classList.remove('error'); 
}
else{
    remainingCharsElement.classList.remove('warning');
    productNameInputElement.classList.remove('warning');   
}
}

productNameInputElement.addEventListener('input'.updateRemainingCharacters);