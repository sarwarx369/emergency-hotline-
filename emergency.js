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
    div.className = "flex justify-between items-center border-b py-2";
    div.innerHTML = `<span class="font-bold">${title} </span>
    <span>${number}</span>
    <span class="text-gray-500 text-sm"> ${time}</span>`;
    historyList.prepend(div);
  });
}

let clear = document.getElementById("clear-history");
clear.addEventListener("click", function () {
  let historyList = document.getElementById("history-list");
  historyList.innerHTML = ``;
});
