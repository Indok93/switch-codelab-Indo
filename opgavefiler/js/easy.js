let myAnswerInput = document.getElementById('InputOne');
let myAnswerButton = document.getElementById('answerButtonOne');

let myAnswerFeedbackElement = document.getElementById('answerFeedbackOne');




// opgave 1 og 2

myAnswerButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.warn('opgave 1 og 2');
    /* din kode her.*/

    // henter værdi af inputfeltet
    const input = (myAnswerInput.value);
    // console.log('input', input);

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
 myAnswerInput = document.getElementById('InputTwo');
 myAnswerButton = document.getElementById('answerButtonTwo');

 myAnswerFeedbackElement = document.getElementById('answerFeedbackTwo');

 myAnswerButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.warn('opgave 3 og 4');
    /* din kode her.*/

    // henter værdi af inputfeltet
    const input = (myAnswerInput.value);
    // console.log(input);
    switch (input) {
        case '1':
            // console.log('Januar');
            showMessagetwo('Januar')
            break;
        case '2':
            // console.log('Februar');
            showMessagetwo('Februar')
            break;
        case '3':
            // console.log('Marts');
            showMessagetwo('Marts')
            break;
        case '4':
            // console.log('April');
            showMessagetwo('April')
            break;
        case '5':
            // console.log('Maj');
            showMessagetwo('Maj')
            break;
        case '6':
            // console.log('Juni');
            showMessagetwo('Juni')
            break;
        case '7':
            // console.log('Juli');
            showMessagetwo('Juli')
            break;
        case '8':
            // console.log('August');
            showMessagetwo('August')
            break;
        case '9':
            // console.log('September');
            showMessagetwo('September')
            break;
        case '10':
            // console.log('Oktober');
            showMessagetwo('Oktober')
            break;
        case '11':
            // console.log('November');
            showMessagetwo('November')
            break;
        case '12':
            // console.log('December');
            showMessagetwo('December')
            break;
        default:
            // console.warn('Dette er ikke en gyldig måned');
            showMessagetwo('Dette er ikke en gyldig måned')
            break;
    }
});

/* din view function her */
function showMessagetwo(myMessage) {
    myAnswerFeedbackElement.innerHTML = `<h4>${myMessage}</h4>`;
}

// opgave 5
myAnswerInput = document.getElementById('InputFive');
myAnswerButton = document.getElementById('answerButtonFive');

myAnswerFeedbackElement = document.getElementById('answerFeedbackFive');

myAnswerButton.addEventListener('click', (event) => {
   event.preventDefault();

   console.warn('opgave 5');

   workDays(myAnswerInput.value)
  
});


 /* din kode her.*/
function workDays(string) {
    myAnswerFeedbackElement.innerHTML = "";

    switch (string) {
        case 'mandag':
            // console.log('Arbejdsdag');
            showMessageFive('Arbejdsdag');
            break;
        case 'tirsdag':
            // console.log('Arbejdsdag');
            showMessageFive('Arbejdsdag');
            break;
        case 'onsdag':
            // console.log('Arbejdsdag');
            showMessageFive('Arbejdsdag');
            break;
        case 'torsdag':
            // console.log('Arbejdsdag');
            showMessageFive('Arbejdsdag');
            break;
        case 'fredag':
            // console.log('Arbejdsdag');
            showMessageFive('Arbejdsdag');
            break;
        case 'lørdag':
            // console.log('weekendag');
            showMessageFive('Weekenddag');
            break;
        case 'søndag':
            // console.log('weekenddag');
            showMessageFive('weekenddag');
            break;
        default:
            // console.log('Du har ikke indtastet en uge dag');
            showMessageFive('Du har ikke intastet en uge dag');
            break;
    }
}


/* din view function her */
function showMessageFive(myMessage) {
    myAnswerFeedbackElement.innerHTML = `<h4>${myMessage}</h4>`;
}

