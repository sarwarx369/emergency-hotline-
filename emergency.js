let hearts = document.getElementsByClassName("heart-click");

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    let countheart = document.getElementById("heart-count");
    let availableHearts = parseInt(countheart.innerText);
    let newhearts = availableHearts + 1;
    countheart.innerText = newhearts;
  });
}

let calls = document.getElementsByClassName("call-bt");
for (let i = 0; i < calls.length; i++) {
  calls[i].addEventListener("click", function () {
    let starCount = document.getElementById("star-count");
    let availableStarCount = parseInt(starCount.innerText);
    if (availableStarCount < 20) {
      alert("balance zero,recharge please");
      return;
    }
    let newStarCount = availableStarCount - 20;
    starCount.innerText = newStarCount;

    let card = this.parentElement.parentElement;
    let title = card.getElementsByClassName("title")[0].innerText;
    let number = card.getElementsByClassName("number")[0].innerText;
    alert("Calling: " + title + "\n" + number);

    let now = new Date();
    let time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    let historyList = document.getElementById("history-list");
    let div = document.createElement("div");
    div.className = "flex flex-col m-1 rounded bg-gray-200  py-2";
    div.innerHTML = `<div class="flex justify-between"><span class="">${title} </span> 
    <span class="text-gray-500 text-sm"> ${time}</span> 
    </div>
    <div class=""> ${number}</div>
    `;
    historyList.prepend(div);
  });
}

let clear = document.getElementById("clear-history");
clear.addEventListener("click", function () {
  let historyList = document.getElementById("history-list");
  historyList.innerHTML = ``;
});

let copyButton = document.querySelectorAll(".copy-bt");
copyButton.forEach((button) => {
  button.addEventListener("click", function () {
    let copyCard = button.closest(".fard");
    let getNumber = copyCard.querySelector(".number").innerText;
    navigator.clipboard.writeText(getNumber);
    alert("copied: " + getNumber);
    let countCopy = document.getElementById("copy-count");
    let availableCopyCount = parseInt(countCopy.innerText);
    let newCopies = availableCopyCount + 1;
    countCopy.innerText = newCopies;
  });
});
