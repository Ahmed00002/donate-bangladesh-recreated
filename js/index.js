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
  const classes = [
    "after:content-['']",
    "before:w-full",
    "after:h-1",
    "after:bg-green-500",
    "after:block",
    "after:bottom-0",
    "after:left-0",
    "text-green-600",
  ];
  const donation = document.getElementById("toogle-btn-donation");
  const history = document.getElementById("toogle-btn-history");

  for (let cls of classes) {
    donation.classList.remove(cls);
    history.classList.remove(cls);
    id.classList.add(cls);
  }
}

// modals
function showErrorModal(title, msg) {
  // create modal

  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-msg").innerText = msg;
  document.getElementById("error-modal").classList.remove("hidden");
}

function showSuccessModal(title) {
  // document.getElementById("success-animation").setAttribute("autoplay", "1");
  document.getElementById("success-modal").classList.remove("hidden");
  document.getElementById(
    "success-msg"
  ).innerText = `You have successfully donated for "${title}"`;
}

// create transaction
function createTransaction(amount, campaign) {
  const hostoryContainer = document.getElementById("history");

  const date = new Date();

  const div = document.createElement("div");
  div.classList.add(
    "p-6",
    "rounded-3xl",
    "bg-green-100",
    "grid",
    "grid-cols-12",
    "font-lexend"
  );

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  div.innerHTML = `<div class="col-span-1 flex justify-center items-center hidden md:block">
            <img class="h-14 " src="assets/donate.png" alt="" />
          </div>
          <div class="col-span-10 text-left space-y-2">
            <h1 id="hist-title" class="text-lg font-semibold font-lexend">
              ${campaign}
            </h1>
            <p id="hist-time" class="text-paraColor"> Date: 
              ${date} </p>
          </div>
          <div
            class="col-span-1 text-xl font-bold text-red-500 flex gap-2 justify-center items-center"
          >
            <i class="fa-solid fa-bangladeshi-taka-sign"></i>
            <p> ${amount} </p>
          </div>`;
  hostoryContainer.appendChild(div);
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
        inputID.value = "";
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
