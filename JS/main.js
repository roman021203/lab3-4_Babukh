// * NODES
let filter_setting = "",
  i = 0;
let global_filter_setting = "";
const arrow = `<div id='arrow' class='node-arrow'><img src='./kisspng-arrow-icon-right-arrow-png-image-5a7589d1736ad5.3965963915176524334728.png' class='arrow' onclick='GetNodes("", false)'></div>`;
const imagesContainer = document.getElementById("images-container");

function GetNodes(filter_setting, delete_nodes = true) {
  let div = document.getElementById("images-container");
  let arrow_DOM = document.getElementById("arrow");
  let str_images = "";

  if (delete_nodes) {
    div.innerHTML = "";
    global_filter_setting = filter_setting;
    i = 0;
  }
  if (arrow_DOM) {
    arrow_DOM.remove();
  }

  for (let j = 0; i < nodes.length && j < 6; i++) {
    if (!nodes[i].filter_setting.includes(global_filter_setting)) {
      continue;
    }

    alt_rows = parseInt(nodes[i].alt.length / 21);
    str_images += `<div class='node ${nodes[i].id}' style="height: calc(340px + 25px + ${
      28 * alt_rows
    }px)">
    <p class="text font-size-16 black-color bold padding-left-rigtt-20 margin0 margin-top-15 text-align-left margin-bottom-10">${
      nodes[i].alt
    }</p>


    <div class="photo centre">
    <img src='${nodes[i].src}' class='inerphoto'>
     </div>

      <div class="btn-cont font-size-24 margin-bottom-5">
        <div class="margin-left-rigtt-20">
          <label class='sticky Reem-Kufi main-color bold'>${
            nodes[i].price
          }</label>
          <label class='sticky Reem-Kufi main-color'>грн</label>
        </div>
        
        <i class='fa fa-shopping-basket sticky hover-pointer font-size-21 margin-left-rigtt-20 bck-button-color padding-for-cart black-color' onclick="AddToCart(${i})"></i>
      </div>

      <div class='text-on-photo bck-white margin-top-7'>
        <h class='text font-size-18 grey-color bold'>Про роман</h>
        <p class=' text font-size-14 main-color'> ${nodes[i].description}</p>
      </div>

    </div>`;
    j++;
  }

  div.innerHTML += str_images + arrow;
}

// ADDTOCART
let cart = [];
if (localStorage.getItem("cart") != null) {
  cart = JSON.parse(localStorage.getItem("cart"));
}

function AddToCart(index) {
  added_node = nodes[Number(index)];

  if (cart.includes(added_node)) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i] == added_node) {
        cart[i].amount++;
        break;
      }
    }
  } else {
    added_node.amount = 1;
    cart.push(added_node);
    console.log(cart);

    if (localStorage.getItem("cart") == null) {
      localStorage.setItem("cart", JSON.stringify(cart));
      return;
    }
  }

  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify(cart));
}

//
//
//
//
//
///
//
//
//
//
//
//
//
///

// * AD
setTimeout(function () {
  let modal = document.getElementById("modal");
  let span = document.getElementById("close");
  let timer = document.getElementById("timer");
  let count = 5;

  modal.style.display = "block";
  const interval = setInterval(function () {
    count--;

    if (count >= 0) {
      timer.innerHTML = "Зачекайте " + count + " секунд, щоб закрити рекламу";
    } else {
      timer.innerHTML = "Ви можете закрити рекламу";

      span.classList.add("close-hover");
      span.onclick = function () {
        modal.style.display = "none";
      };

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
  }, 1000);
}, 10000000);

// * SUBSCRIBE
setTimeout(function () {
  let modal = document.getElementById("subcribe");
  let span = document.getElementById("close-sub");
  let sub_span = document.getElementById("sub-span");
  let reject_span = document.getElementById("reject-span");

  if (localStorage.getItem("subscribed") === "true") {
    return;
  }

  modal.style.display = "block";
  span.classList.add("close-hover");

  //SUB
  sub_span.onclick = function () {
    localStorage.setItem("subscribed", "true");
    modal.style.display = "none";
    alert("Дякуємо за підписку!");
  };

  // CLOSE
  reject_span.onclick = function () {
    modal.style.display = "none";
  };
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}, 5000);

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > window.innerHeight / 3) {
    document.getElementById("up-arrow").style.display = "block";
  } else {
    document.getElementById("up-arrow").style.display = "none";
  }
}