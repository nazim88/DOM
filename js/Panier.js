
/***************************Variable **********************/
let Deletes = document.querySelectorAll(".remove");
let likes = document.querySelectorAll(".like");
let adds = document.querySelectorAll("div a.add");
let removes = document.querySelectorAll("div a.rem");
let price = document.querySelectorAll(".price")
let quantite = document.querySelectorAll(".Quantity")
let totals = document.querySelectorAll(".total")
let sums = document.querySelector(".global")
/**********************add quantity  function*****************/
for (add = 0; add < adds.length; add++) {
  let n = 0;
  adds[add].addEventListener("click", count);
  function count(event) {
    n++;
    this.nextElementSibling.value = n;
  }
  for (remove = 0; remove < removes.length; remove++) {
    removes[remove].addEventListener("click", countm);
    function countm(event) {
      if (n > 0) {
        n2 = n--;
      }
      this.previousElementSibling.value = n2;
    }
  }
}
/***************************like button function ******************/
for (like = 0; like < likes.length; like++) {
  likes[like].addEventListener("click", clicLike);
}
function clicLike() {
  this.classList.toggle("red");
}
/******************************remove article function***************/
for (Delete = 0; Delete < Deletes.length; Delete++) {
  Deletes[Delete].addEventListener("click", deleteClick);
}
function deleteClick() {
  let res = confirm("Are you sure you want to delete ?");
    if(res){
      this.parentElement.parentElement.remove();
      
    }
  

}
/************************** see total price function*****************/

function calcul() {
  let total = price[0].value * quantite[0].value
  totals[0].value = total

  let total2 = price[1].value * quantite[1].value
  totals[1].value = total2

  let total3 = price[2].value * quantite[2].value
  totals[2].value = total3

  sums.value = (total + total2 + total3).toFixed(2);
}
