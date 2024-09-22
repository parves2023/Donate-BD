function showfaq() {
    window.location.href = 'faq.html';
}
function showindex() {
    window.location.href = 'index.html';
}
const noakhalidonation = document.getElementById('noakhalidonation');
let currentBalance = 5500;
let noakhaliDonate = 1100;
let documentMoney = document.getElementById('currentmoney');
const nDonatebtn = document.getElementById('nDonatebtn');



documentMoney.innerHTML = currentBalance;
noakhalidonation.innerHTML = noakhaliDonate;
nDonatebtn.addEventListener('click', function() {
    const nInput = parseInt(document.getElementById('nInput').value);
    
    // Check if the input is a valid number and greater than or equal to 0
    if (isNaN(nInput) || nInput < 1) {
        alert('Invalid input');
    } else {
        // Update the balance and donation
        currentBalance = currentBalance - nInput;
        noakhaliDonate = noakhaliDonate + nInput;
        
        console.log(currentBalance);
        
        // Update the DOM with the new values
        documentMoney.innerHTML = currentBalance;
        noakhalidonation.innerHTML = noakhaliDonate;
        
        // Show the modal (make sure my_modal_1 is defined properly)
        my_modal_1.showModal();
    }
});






