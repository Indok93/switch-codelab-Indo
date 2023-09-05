




// opgave 1 her
const myamount = document.getElementById('amountInput');
const myTransactionType = document.getElementById('myTransaction');
const mySaldo = document.getElementById('accountSaldo');


myTransactionType.addEventListener('change', (event) => {
   event.preventDefault();

   // tjek om change ændre sig
   // console.log(myTransactionType.value);
   

   // lav en switch der kalder transaktioner fra change event
   switch (myTransactionType.value) {
      case 'deposit':
         console.log('deposit here');
         break;
      case 'withdraw':
         console.log('withdraw here');
         break;
      case 'saldo':
         console.log('check saldo');
         break;
   }

});

/* 
brug en "global" variabel til at gemme saldi i.
brug en switch statement til at kalde
forskellige transaktioner fra change event
se evt. if then codelab knallert øvelse 
*/




/* opgave 2 her */

let myAnsverInput = document.getElementById('answerTwo');
let myAnsverButton = document.getElementById('answerButtonTwo');

let myAnsverFeedbackElement = document.getElementById('answerFeedbackTwo');

myAnsverButton.addEventListener('click', (event) => {
   event.preventDefault();
   console.warn('opgave 2');
   /* din kode her.*/
});

/* din view function her */