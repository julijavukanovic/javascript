//First example sum numbers

const calculateSumButtonElement=document.querySelector('#calculator button');

function calculateSum(){
const userNumberInputElement=document.getElementById('user-number');
const eneteredNumber=userNumberInputElement.value;

let sumUpToNumber=0;
for(let i=0;i<=eneteredNumber;i++){
sumUpToNumber=sumUpToNumber+i;
}
const outputResultElement=document.getElementById('calculated-sum');
outputResultElement.textContent=sumUpToNumber;
outputResultElement.style.display='block';
}


calculateSumButtonElement.addEventListener('click',calculateSum);

//Highlights links

const highlightsLinksButtonElement=document.querySelector('#highlight-links button');
function highlightsLinks(){
const anchorElements=document.querySelectorAll('#highlight-links a');

for(const anchorElement of anchorElements){
anchorElement.classList.add('highlight');
}
}
highlightsLinksButtonElement.addEventListener('click',highlightsLinks);

//Display user data
const dummyUserData={
    firstName:'Julija',
    lastName:'Vukanovic',
    age:16
};
const displayUserDataButtonElement=document.querySelector('#user-data button');
function displayUserData(){
const outputDataElement=document.getElementById('output-user-data');

outputDataElement.innerHTML='';

for(const key in dummyUserData){
const newUserDataListItemElement=document.createElement('li');
const outputText=key.toUpperCase()+':'+ dummyUserData[key];
newUserDataListItemElement.textContent=outputText;
outputDataElement.append(newUserDataListItemElement);
}
}
displayUserDataButtonElement.addEventListener('click',displayUserData);

//Roll the dice

const rollDiceButtonElement=document.querySelector('#statistics button');

function rollDice(){
return Math.floor(Math.random()*6)+1;

}
function deriveNumberOfDiceRolls(){
   const targetNumberInputElement=document.getElementById('user-target-number');
   const diceRollsListElement=document.getElementById('dice-rolls');
   const eneteredNumber=targetNumberInputElement.value;
   diceRollsListElement.innerHTML='';

   let hasRolledTargetNumber=false;
    let numberOfRolls=0;

   while(!hasRolledTargetNumber){
    const rolledNumber=rollDice();
    // if(rolledNumber==eneteredNumber){
    // hasRolledTargetNumber=true;
    // }
    numberOfRolls++;
    const newRollListElement=createElement('li');
    const outputText='Roll'+ numberOfRolls+':'+rolledNumber;
    newRollListElement.textContent=outputText;
    diceRollsListElement.append(newRollListElement);
    hasRolledTargetNumber=rolledNumber==eneteredNumber;
   }
   const outputTotalRollsElement=document.getElementById('output-total-rolls');
   const outputTargetNumberElement=document.getElementById('output-target-number');

   outputTargetNumberElement.textContent=eneteredNumber;
   outputTotalRollsElement.textContent=numberOfRolls;
}
rollDiceButtonElement.addEventListener('click',deriveNumberOfDiceRolls);