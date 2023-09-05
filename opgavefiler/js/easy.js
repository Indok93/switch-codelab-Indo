let myAnswerInput = document.getElementById('InputOne');
let myAnswerButton = document.getElementById('answerButtonOne');

let myAnswerFeedbackElement = document.getElementById('answerFeedbackOne');




// opgave 1 og 2

myAnswerButton.addEventListener('click', (event) => {
    event.preventDefault();
    // console.warn('opgave 1 og 2');
    /* din kode her.*/

    // henter værdi af inputfeltet
    const input = (myAnswerInput.value);
    // console.log(input);

    switch (input) {
        case '1':
            // console.log('du har valgt: ' + input);
            showMessage('du har valgt: ' + input);
            break;
        case '2':
            // console.log('du har valgt: ' + input);
            showMessage('du har valgt: ' + input);
            break;
        case '3':
            // console.log('du har valgt: ' + input);
            showMessage('du har valgt: ' + input);
            break;
        case '4':
            // console.log('du har valgt: ' + input);
            showMessage('du har valgt: ' + input);
            break;
        case '5':
            // console.log('du har valgt: ' + input);
            showMessage('du har valgt: ' + input);
            break;
        default:
            showMessage('du har valgt et ugyldigt nummer: ' + input + ' - Vælg venligst et tal mellem 1 og 5');
            // console.warn('du har valgt: ' + input + ' - Vælg venligst et tal mellem 1 og 5');
            break;
    }
    
});

/* skriv evt en view funktion der viser om svaret er korrekt i myAnsverFeedbackElement, brug evt. innerHTML*/
function showMessage(myMessage) {
    myAnswerFeedbackElement.innerHTML = `<h4>${myMessage}</h4>`;
}


// opgave 3 og 4
 myAnsverInput = document.getElementById('answerTwo');
 myAnsverButton = document.getElementById('answerButtonTwo');

 myAnsverFeedbackElement = document.getElementById('answerFeedbackTwo');

 myAnsverButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.warn('opgave 3 og 4');
    /* din kode her.*/
});

/* din view function her */


// opgave 5
myAnsverInput = document.getElementById('InputFive');
myAnsverButton = document.getElementById('answerButtonFive');

myAnsverFeedbackElement = document.getElementById('answerFeedbackFive');

myAnsverButton.addEventListener('click', (event) => {
   event.preventDefault();

   console.warn('opgave 5');

   workDays(myAnsverInput.value)
  
});


 /* din kode her.*/



/* din view function her */


