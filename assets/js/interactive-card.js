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
let button = document.querySelector(".submit");
let devam = document.querySelector(".devam");
let cardetails = document.querySelector(".card-details");
let uyaricardname = document.querySelector(".uyari-cardname");
let uyaricardnumber = document.querySelector(".uyari-cardnumber");
let uyaricardaayy = document.querySelector(".uyari-cardaayy");
let uyaricardcvc = document.querySelector(".uyari-cardcvc");

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
  if (
    (cardnameinput.value !== "",
    cardnumberinput.value !== "",
    cvcinput.value !== "",
    ayinput.value !== "",
    yilinput.value !== "")
  ) {
    cardname.innerText = cardnameinput.value;
    cardnumber.innerText = cardnumberinput.value;
    cvc.innerText = cvcinput.value;
    monthyear.innerText =ayinput.value + "/" + yilinput.value;
    cardetails.style.display = "none";
    thanks.style.display = "flex";
  }
  
  if (cardnameinput.value === "") {
    uyaricardname.style.display = "flex";
    cardnameinput.style.border = "1px solid rgba(215, 60, 60, 1)";
  } else {
    uyaricardname.innerText = "";
    cardnameinput.style.border = "1px solid rgba(223, 222, 224, 1)";
  }



  if (cardnumberinput.value === "") {
    uyaricardnumber.style.display = "flex";
    cardnumberinput.style.border = "1px solid rgba(215, 60, 60, 1)";
  } else {
    uyaricardnumber.innerText = "";
    cardnumberinput.style.border = "1px solid rgba(223, 222, 224, 1)";
  }



  if (yilinput.value === "", ayinput.value === "") {
    uyaricardaayy.style.display = "flex";
    yilinput.style.border = "1px solid rgba(215, 60, 60, 1)";
    ayinput.style.border = "1px solid rgba(215, 60, 60, 1)";
  } else {
    uyaricardaayy.innerText = "";
    yilinput.style.border = "1px solid rgba(223, 222, 224, 1)";
    ayinput.style.border = "1px solid rgba(223, 222, 224, 1)";
  }

  if (cvcinput.value === "") {
    uyaricardcvc.style.display = "flex";
    cvcinput.style.border = "1px solid rgba(215, 60, 60, 1)";
  } else {
    uyaricardcvc.innerText = "";
    cvcinput.style.border = "1px solid rgba(223, 222, 224, 1)";
  }

  cardetails.reset();
}

button.addEventListener("click",handleSubmitClick);

function handleContinueClick(){
  
  cardname.innerText = "Muhammed Baki Çağlayan";
  cardnameinput.value = "";
  cardnumber.innerText = "0000 0000 0000 0000";
  cardnumberinput.value = "";
  cvc.innerText  = "000";
  cvcinput.value = "";
  monthyear.innerText  = "00/00";
  ayinput.value = "";
  yilinput.value = "";
  cardetails.style.display = "flex";
  thanks.style.display = "none";
  cardnameinput.style.border = "1px solid rgba(223, 222, 224, 1)";
  cardnumberinput.style.border = "1px solid rgba(223, 222, 224, 1)";
  yilinput.style.border = "1px solid rgba(223, 222, 224, 1)";
  ayinput.style.border = "1px solid rgba(223, 222, 224, 1)";
  
  if (cardnameinput.value === "") {
    uyaricardname.style.display = "flex";
    cardnameinput.style.border = "1px solid rgba(215, 60, 60, 1)";
  } else {
    uyaricardname.innerText = "";
    cardnameinput.style.border = "1px solid rgba(223, 222, 224, 1)";
  }

  if (cardnumberinput.value === "") {
    uyaricardnumber.style.display = "flex";
    cardnumberinput.style.border = "1px solid rgba(215, 60, 60, 1)";
  } else {
    uyaricardnumber.innerText = "";
    cardnumberinput.style.border = "1px solid rgba(223, 222, 224, 1)";
  }

  if (yilinput.value === "", ayinput.value === "") {
    uyaricardaayy.style.display = "flex";
    yilinput.style.border = "1px solid rgba(215, 60, 60, 1)";
    ayinput.style.border = "1px solid rgba(215, 60, 60, 1)";
  } else {
    uyaricardaayy.innerText = "";
    yilinput.style.border = "1px solid rgba(223, 222, 224, 1)";
    ayinput.style.border = "1px solid rgba(223, 222, 224, 1)";
  }

  if (cvcinput.value === "") {
    uyaricardcvc.style.display = "flex";
    cvcinput.style.border = "1px solid rgba(215, 60, 60, 1)";
  } else {
    uyaricardcvc.innerText = "";
    cvcinput.style.border = "1px solid rgba(223, 222, 224, 1)";
  }
}

devam.addEventListener("click",handleContinueClick);

function maxlength(event) {
  let t = event.target;
  if (t.hasAttribute('maxlength')) {
    t.value = t.value.slice(0, t.getAttribute('maxlength'));
  }
}
document.body.addEventListener('input', maxlength);