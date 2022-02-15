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

