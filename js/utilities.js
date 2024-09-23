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

function dismiss() {
  document.getElementById("error-modal").classList.add("hidden");
}
function successDismiss() {
  document.getElementById("success-modal").classList.add("hidden");
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
            <p id="hist-time" class="text-paraColor"> Date: ${date.getDate()}
              ${months[date.getMonth()]}
              ${date.getFullYear()}
              ${date.getUTCHours()}
            :${date.getUTCMinutes()}:${date.getUTCSeconds()} </p>
          </div>
          <div
            class="col-span-1 text-xl font-bold text-red-500 flex gap-2 justify-center items-center"
          >
            <i class="fa-solid fa-bangladeshi-taka-sign"></i>
            <p> ${amount} </p>
          </div>`;
  hostoryContainer.appendChild(div);
}
