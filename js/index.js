let balance = document.getElementById("balance");
const quotaTotalDonation = document.getElementById("quota-total-donation");

const campaigns = {
  noakali: {
    title: document.getElementById("noakali-title"),
    totalDonated: document.getElementById("noakali-donation"),
    newDonationAmount: document.getElementById("noakali-field"),
  },
  feni: {
    title: document.getElementById("feni-title"),
    totalDonated: document.getElementById("feni-donation"),
    newDonationAmount: document.getElementById("feni-field"),
  },
  quota: {
    title: document.getElementById("qouta-title"),
    totalDonated: document.getElementById("quota-total-donation"),
    newDonationAmount: document.getElementById("quota-field"),
  },
};

// donation buttons
const btnNoakali = document.getElementById("btn-noakali");
const btnFeni = document.getElementById("btn-feni");
const btnQuota = document.getElementById("btn-qoutaMovement");

const btnFeniDonation = document.getElementById("btn-feniDonation");

// change the toggle style on click
function changeTogleStyle(id) {
  const donation = document.getElementById("toogle-btn-donation");
  const history = document.getElementById("toogle-btn-history");
  donation.classList.remove("selected", "text-green-600");
  history.classList.remove("selected", "text-green-600");

  id.classList.add("selected", "text-green-600");
}

// validate the donation amount and make transaction
function validateDonation(id, inputID, title) {
  const input = inputID.value;

  let total = parseFloat(id.innerText);
  let totalBalance = parseFloat(balance.innerText);

  let isNotDigit;
  for (let chr of inputID.value) {
    if (isNaN(chr)) {
      if (chr === ".") {
        continue;
      } else {
        isNotDigit = true;
        break;
      }
    } else {
      isNotDigit = false;
    }
  }
  if (isNotDigit) {
    showErrorModal("Wrong Input", "Please enter a correct amount to donate.");
  } else {
    if (input > totalBalance || totalBalance === 0) {
      showErrorModal(
        "Opps..!",
        "You have insufficient balance in your account. Please add more money to donate."
      );
    } else {
      if (input === "") {
        // showModalMessage("Hey there", "Please enter an amount to continue");
        showErrorModal("Hey there", "Please enter an amount to continue");
      } else {
        total += parseFloat(input);
        id.innerText = total.toFixed(2);
        totalBalance -= parseFloat(input);
        balance.innerText = totalBalance.toFixed(2);
        createTransaction(input, title.innerText);
        showSuccessModal(title.innerText);
      }
    }
  }
}

// default function end

function togleBtnsOnClick() {
  const donation = document.getElementById("toogle-btn-donation");
  const history = document.getElementById("toogle-btn-history");
  donation.addEventListener("click", () => {
    console.log("clicked");
  });
  donation.addEventListener("click", () => {
    changeTogleStyle(donation);
    document.getElementById("donation").classList.remove("hidden");
    document.getElementById("history").classList.add("hidden");
  });
  history.addEventListener("click", () => {
    changeTogleStyle(history);
    document.getElementById("donation").classList.add("hidden");
    document.getElementById("history").classList.remove("hidden");
  });
}

btnNoakali.addEventListener("click", (e) => {
  e.preventDefault();
  validateDonation(
    campaigns.noakali.totalDonated,
    campaigns.noakali.newDonationAmount,
    campaigns.noakali.title
  );
});

btnFeni.addEventListener("click", (e) => {
  e.preventDefault();
  validateDonation(
    campaigns.feni.totalDonated,
    campaigns.feni.newDonationAmount,
    campaigns.feni.title
  );
});

btnQuota.addEventListener("click", (e) => {
  e.preventDefault();
  // validateDonation(quotaTotalDonation, inputFieldQouta);
  console.log("clicked");
  validateDonation(
    campaigns.quota.totalDonated,
    campaigns.quota.newDonationAmount,
    campaigns.quota.title
  );
});

// toogle button
togleBtnsOnClick();
