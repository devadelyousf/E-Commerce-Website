var showSlide = document.getElementsByClassName("showSlide");
var slide_index = 1;
displaySlides(slide_index);
function nextSlide(n) {
  displaySlides((slide_index += n));
}
function currentSlide(n) {
  displaySlides((slide_index = n));
}
function displaySlides(n) {
  var i;
  var slides = showSlide;
  if (n > slides.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}

setInterval(function () {
  nextSlide(1);
}, 2000);

// ........................................................
// var myName = document.getElementById("name");
// var email = document.getElementById("email-im");
// // console.log(email);
// var pass = document.getElementById("password");
// var confirmpass = document.getElementById("confpassword");

// myName.addEventListener("keyup", function () {
//   myName.classList.add("error");
//   pname.style.display = "block";
//   var regName = /[a-zA-Z0-9]/;
//   if (myName.value.length > 3 && regName.test(myName.value)) {
//     myName.classList.add("correct");
//     pname.style.display = "none";
//   } else {
//     myName.classList.remove("correct");
//     pname.style.display = "block";
//   }
// });
var username = document.getElementById('username');
    var password = document.getElementById('password');
    var email = document.getElementById('email');
    var error = document.getElementById('error');

    function isValid(u,e, p){
        var valid = true
        if(! /^([a-zA-Z0-9]{5,15})$/.test(username.value)){
            valid = false
        }
        if(! /^([a-zA-Z0-9]{5,15})$/.test(password.value)){
            valid = false
        }
        if(! /^[a-zA-Z]+@[a-zA-Z0-9]+.com$/.test(email.value)){
            valid = false
        }
        return valid
    }
    function logIn(e){
        if(isValid(username.value, password.value , email.value)){
            e.preventDefault()
            error.innerHTML = ""
            error.style.color = "green"
            username.value = ""
            password.value = ""
            email.value = ""
        } else {
            e.preventDefault()
            error.innerHTML = "Enter vali Username and Password"
            error.style.color = "red"
        }
    }
// ...........................................................................
pageTop.addEventListener("click" , function () {
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
   });
})

// ...................................................................................................................
// Start Card Buying
{
  var allbuybtns = document.querySelectorAll(".btn-buy");
var section = document.getElementById("products");
var showItems = document.createElement("div");
var close = document.getElementById("close");
var blackscreen = document.getElementById("blackScreen");
var allProduct = document.getElementById("allProduct");
var totalprice = document.getElementById("totalPrice");
var EndBuy = document.getElementById("EndBuy");

function updateTotalPricee() {
var ProductInBlackScreen = document.querySelectorAll(".item-container");
var total = 0;
ProductInBlackScreen.forEach((item) => {
  var price = Number(
    item.getElementsByClassName("price")[0].innerText.replace("EGP", " ")
  );
  var quantity = Number(
    item.getElementsByClassName("input-quantity")[0].value
  );
  total = total + price * quantity;
});
totalprice.innerText = `${total} EGP `;
}

blackscreen.addEventListener("change", (eo) => {
updateTotalPricee();
});

blackscreen.addEventListener("click", (eo) => {
if (eo.target.classList.contains("btn-delete")) {
  eo.target.parentElement.remove();
  updateTotalPricee();
  var nameProductDeleted =
    eo.target.parentElement.getElementsByClassName("product-name")[0]
      .innerText;
  var allCards = document.querySelectorAll(".product-card");
  console.log(nameProductDeleted);
  allCards.forEach((item) => {
    var nameOfProduct =
      item.getElementsByClassName("product-category")[0].innerText;
    if (nameOfProduct == nameProductDeleted) {
      var doneBtn = item.getElementsByClassName("btn-buy")[0];
      console.log(doneBtn);
      // doneBtn.removeAttribute("disabled")
      // doneBtn.style.backgroundColor="blue"
    }
  });
}
});

//      click buy
allbuybtns.forEach((item) => {
item.addEventListener("click", (eo) => {
  {
    item.setAttribute("disabled", "");
    item.innerHTML = "&#10004; Done";
    item.style.backgroundColor = "green";
  }
  // ..........................................

  {
    var PopUp = document.createElement("div");
    section.append(PopUp);
    PopUp.classList.add("done-pop-up");
    PopUp.innerHTML = "your item added sucsessfuly";
    setTimeout(() => {
      PopUp.style.transform = "translateX(-70vw)";
    }, 1500);

    setTimeout(() => {
      PopUp.remove();
    }, 3000);
  }
  // ...............................................

  {
    section.append(showItems);
    showItems.classList.add("show-items");
    showItems.innerHTML = "shopping cart";
  }
  // ....................................................
  var card = item.parentElement.parentElement.parentElement;
  var imgSrc = card
    .getElementsByClassName("img-cards")[0]
    .getAttribute("src");
  var itemName = card.getElementsByClassName("product-category")[0].innerText;
  var itemPrice = card.getElementsByClassName("price")[0].innerText;

  var addProduct = `
<div class="item-container" dir="rtl">
<div class="img-title-parent">
  <img src="${imgSrc}" alt="">
  <p class="product-name">${itemName}</p>
</div>
<div style="display: flex; align-items: center;">
<input type="number" class="input-quantity" id="input-quantity"
min="1" value="1" dir="ltr">
<p style="margin: 0;">quantity</p>
</div>
<div class="price">${itemPrice}</div>
<div class="btn-delete">Delete</div>
</div>
`;
  allProduct.innerHTML += addProduct;
  updateTotalPricee();
});
});

// shopping card
close.addEventListener("click", function (eo) {
blackscreen.style.transform = "translateX(-110vw)";
});
showItems.addEventListener("click", function (eo) {
blackscreen.style.transform = "translateX(0)";
});}

// End Card Buying
