let cardnumber = document.querySelector(".card-numbers");
let cardname = document.querySelector(".name");
let monthyear = document.querySelector(".month-year");
let cvc = document.querySelector(".cvc");
let cardnumberinput = document.querySelector(".card-number-input");
let cardnameinput = document.querySelector(".card-name-input");
let ayinput = document.querySelector(".ay-input");
let yilinput = document.querySelector(".yil-input");
let cvcinput = document.querySelector(".cvc-input");
let thanks = document.querySelector(".thanks");
let button = document.querySelector("button");
let cardetails = document.querySelector(".card-details");

function handleİnputClick(){
  cardname.innerText = cardnameinput.value;
  cardnumber.innerText = cardnumberinput.value;
  cvc.innerText = cvcinput.value;
  monthyear.innerText =ayinput.value + "/" + yilinput.value;
}

cardnameinput.oninput = function() {handleİnputClick()};
cardnumberinput.oninput = function() {handleİnputClick()};
cvcinput.oninput = function() {handleİnputClick()};
yilinput.oninput = function() {handleİnputClick()};
ayinput.oninput = function() {handleİnputClick()};

function handleSubmitClick (e) {
    e.preventDefault();
  cardname.innerText = cardnameinput.value;
  cardnumber.innerText = cardnumberinput.value;
  cvc.innerText = cvcinput.value;
  monthyear.innerText =ayinput.value + "/" + yilinput.value;
  cardetails.style.display = "none";
  thanks.style.display = "flex";
}

button.addEventListener("click",handleSubmitClick);
