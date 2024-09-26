function showfaq() {
  window.location.href = "faq.html";
}


let currentBalance = 5500;
let documentMoney = document.getElementById("currentmoney");

const donationButton = document.getElementById("donationButton");
const historyButton = document.getElementById("historyButton");

const donatePDiv = document.getElementById("donatePDiv");
const historyCard = document.getElementById("historyCard");
const historyCardparent = document.getElementById("historyCardparent");

const donations = [
  {
    id: "noakhalidonation",
    input: "inputone",
    amount: 5000,
    title: "Donate for Flood at Noakhali, Bangladesh",
    description:
      "The recent floods in Noakhali have caused significant damage to homes and infrastructure. Your donation will help provide essential supplies to those affected. Every contribution, big or small, makes a difference.",
    image: "assets/noakhali.png",
  },
  {
    id: "fenidonation",
    input: "inputtwo",
    amount: 6500,
    title: "Donate for Flood at Feni, Bangladesh",
    description:
      "Feni has been hit hard by floods, and many families are in need of food and shelter. Your donation will provide immediate assistance to those in need and help rebuild the community.",
    image: "assets/feni.png",
  },
  {
    id: "quotadonation",
    input: "inputthree",
    amount: 3000,
    title: "Donate for Quota Protest Support",
    description:
      "The quota protest in Bangladesh has led to disruptions in the lives of students and workers. Your donation will help provide support and resources to those involved in peaceful protests.",
    image: "assets/quota-protest.png",
  },
];

donations.forEach((donation) => {
  let donateCard = `
    <div class="card lg:card-side bg-base-100 shadow-xl mx-auto w-full my-4 p-4 border border-gray-200 ">
                        <figure class="md:w-1/2">
                          <img
                            class="rounded-xl h-full object-cover"
                            src=${donation.image}
                            alt="Album" />
                        </figure>
                        <div class="card-body md:w-1/2">
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
    `;
  donatePDiv.innerHTML += donateCard;
});

// get input value and name

donatePDiv.addEventListener("click", function (event) {
  if (event.target.classList.contains("donate-btn")) {
    const name = event.target.getAttribute("data-name");
    const amount = event.target.getAttribute("data-amount");
    const input = event.target.getAttribute("data-input");
    const inputValue = parseInt(
      document.getElementsByClassName(input)[0].value
    );
    getname(name, inputValue, input);
  }
});

function getname(name, money, input) {

  if (isNaN(money) || money < 1) {
    alert("Invalid input");
  }else if(currentBalance - money < 0){
    alert("not enough money");
  }else {
    const inputToCheck = input;

    
    const matchedDonation = donations.find(
      (donation) => donation.input === inputToCheck
    );
        matchedDonation.amount = matchedDonation.amount + money;
        const donationElement = document.getElementById(matchedDonation.id);
        donationElement.innerHTML = matchedDonation.amount;

        currentBalance = currentBalance - money;
        documentMoney.innerHTML = currentBalance;
        appendHistory(money,name);
    my_modal_1.showModal();
  }
}























const noakhalidonation = document.getElementById("noakhalidonation");

const nDonatebtn = document.getElementById("nDonatebtn");

donationButton.onclick = function () {
  donationButton.classList.remove("btn-outline");
  historyButton.classList.add("btn-outline");
  historyCard.classList.add("hidden");
  donatePDiv.classList.remove("hidden");
};

historyButton.onclick = function () {
  donationButton.classList.add("btn-outline");
  historyButton.classList.remove("btn-outline");
  historyCard.classList.remove("hidden");
  donatePDiv.classList.add("hidden");
};

function appendHistory(money, place) {
  const currentDate = new Date().toString();
  let child = `
        <!-- card  -->
        <div class="flex flex-col px-4 py-6 gap-4 rounded-xl justify-between border border-gray-300">
            <h1 class="text-xl font-semibold">${money} Taka is Donated for ${place}</h1>
            <p>Date : ${currentDate}</p>
        </div>

    `;

  historyCardparent.insertAdjacentHTML("beforeend", child);
}

documentMoney.innerHTML = currentBalance;

