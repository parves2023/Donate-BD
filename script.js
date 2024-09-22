

let currentBalance = 5500;
let noakhaliDonate = 1100;
let documentMoney = document.getElementById('currentmoney');

const donationButton = document.getElementById('donationButton');
const historyButton = document.getElementById('historyButton');

const donatePDiv = document.getElementById('donatePDiv');
const historyCard = document.getElementById('historyCard');
const historyCardparent = document.getElementById('historyCardparent');




















const donations = [
    {
        id: "noakhalidonation",
        input : "inputone",
        amount: 5000,
        title: "Donate for Flood at Noakhali, Bangladesh",
        description: "The recent floods in Noakhali have caused significant damage to homes and infrastructure. Your donation will help provide essential supplies to those affected. Every contribution, big or small, makes a difference.",
        image: "assets/noakhali.png"
    },
    {
        id: "fenidonation",
        input : "inputtwo",
        amount: 6500,
        title: "Donate for Flood at Feni, Bangladesh",
        description: "Feni has been hit hard by floods, and many families are in need of food and shelter. Your donation will provide immediate assistance to those in need and help rebuild the community.",
        image: "assets/feni.png"
    },
    {
        id: "quotadonation",
        input : "inputthree",
        amount: 3000,
        title: "Donate for Quota Protest Support",
        description: "The quota protest in Bangladesh has led to disruptions in the lives of students and workers. Your donation will help provide support and resources to those involved in peaceful protests.",
        image: "assets/quota-protest.png"
    }
];

donations.forEach(donation => {

    let donateCard = `
    <div class="card lg:card-side bg-base-100 shadow-xl mx-auto w-10/12 p-4 border border-gray-200 ">
                        <figure class="w-1/2">
                          <img
                            class="rounded-xl h-full object-cover"
                            src=${donation.image}
                            alt="Album" />
                        </figure>
                        <div class="card-body w-1/2">
                            <div class="flex items-center gap-2 p-4 bg-slate-100 rounded-2xl w-4/12 justify-center">
                                <img src="assets/coin.png" alt="coin">
                                <p class="text-gray-500" id=${donation.id}>${donation.amount}</p>
                            </div>
                          <h2 class="card-title">${donation.title}</h2>
                          <p class="text-gray-600 leading-loose">${donation.description}</p>
                          <input type="text" id="nInput" placeholder="Type here" class="input input-bordered w-full ${donation.input} " />
                          <div class="card-actions justify-start w-full">
                            <button id="nDonatebtn" data-name="${donation.title}" data-input=${donation.input} data-amount="${donation.amount}" class="donate-btn btn btn-primary w-full" >Donate</button>
                          </div>
                        </div>
                      </div>
    `
    donatePDiv.innerHTML += donateCard;
});


donatePDiv.addEventListener('click', function(event) {
    if (event.target.classList.contains('donate-btn')) {
        const name = event.target.getAttribute('data-name');
        const amount = event.target.getAttribute('data-amount');
        const input = event.target.getAttribute('data-input');
        console.log(document.getElementsByClassName(input)[0].value);
        console.log('Donation Name:', name);
        console.log('Donation Amount:', amount);
    }
});


const noakhalidonation = document.getElementById('noakhalidonation');

const nDonatebtn = document.getElementById('nDonatebtn');




























function showfaq() {
    window.location.href = 'faq.html';
}
function showindex() {
    window.location.href = 'index.html';
}

donationButton.onclick = function() {
    donationButton.classList.remove('btn-outline');
    historyButton.classList.add('btn-outline');
    historyCard.classList.add('hidden');
    donatePDiv.classList.remove('hidden')
};

historyButton.onclick = function() {
    donationButton.classList.add('btn-outline');
    historyButton.classList.remove('btn-outline');
    historyCard.classList.remove('hidden');
    donatePDiv.classList.add('hidden');
};

function appendHistory(money,place) {
    
    const currentDate = new Date().toString();
    let child = `
        <!-- card  -->
        <div class="flex flex-col px-4 py-6 gap-4 rounded-xl justify-between border border-gray-300">
            <h1 class="text-xl font-semibold">${money} Taka is Donated for ${place}, Bangladesh</h1>
            <p>Date : ${currentDate}</p>
        </div>

    `;
    
    // Insert the child using insertAdjacentHTML
    historyCardparent.insertAdjacentHTML('beforeend', child);
}



console.log(nDonatebtn);
console.log(noakhaliDonate);

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
        appendHistory(nInput," Flood at Noakhali");
        
        console.log(currentBalance);
        
        // Update the DOM with the new values
        documentMoney.innerHTML = currentBalance;
        noakhalidonation.innerHTML = noakhaliDonate;
        
        // Show the modal (make sure my_modal_1 is defined properly)
        my_modal_1.showModal();
    }
});





























