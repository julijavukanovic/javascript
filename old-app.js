// document.body.children[1].children[0].href='https://google.com'
// alert();
// window.alert();

//  let anchorElement=document.getElementById('external link');
//  anchorElement.href='https://google.com';
 
//  anchorElement=document.querySelector('p a');
//  anchorElement.href='https://google.com';
 
//ADD ELEMENT

  let newAnchorElement=document.createElement('a');
  newAnchorElement.href='https://google.com'
  newAnchorElement.textContent='This leads to Google!'

  let firstParagraph=document.querySelector('p');
  firstParagraph.append(newAnchorElement);

//REMOVE ELEMENT

let firstH1Element=document.querySelector('h1');
firstH1Element.remove();

//MOVE ELEMENTS
firstParagraph.parentElement.append(firstParagraph);

//inner HTML
firstParagraph.innerHTML='Hi!This is <strong>important!<strong>'
console.log(firstParagraph.innerHTML);