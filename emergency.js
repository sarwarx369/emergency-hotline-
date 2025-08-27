let hearts = document.getElementsByClassName("heart-click");

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    let countheart = document.getElementById("heart-count");
    let availableHearts = parseInt(countheart.innerText);
    let newhearts = availableHearts + 1;
    countheart.innerText = newhearts;
  });
}
