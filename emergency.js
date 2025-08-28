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
    let card = this.parentElement.parentElement;
    let title = card.getElementsByClassName("title")[0].innerText;
    let number = card.getElementsByClassName("number")[0].innerText;
    alert("Calling: " + title + "\n" + number);
    let historylist = document.getElementById("historyLis");
  });
}
