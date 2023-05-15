function SaveOptionsOfSort(a_z_sort, z_a_sort, price_min_sort, price_max_sort) {
  a_z_sort_copy = a_z_sort;
  z_a_sort_copy = z_a_sort;
  price_min_sort_copy = price_min_sort;
  price_max_sort_copy = price_max_sort;
}

const cart_cont = document.getElementById("images-container");
cart_cont.addEventListener('click', drawChart);

function GetNodesForCart(
  filter_setting,
  delete_nodes = true,
  a_z_sort = false,
  z_a_sort = false,
  price_min_sort = false,
  price_max_sort = false,
  get_options = false
) {
  let div = document.getElementById("images-container");
  let sum_cart = document.getElementById("sum-cart");
  let str_images = "",
    sum_str = "";
  let sum = 0;

  if (get_options) {
    a_z_sort = a_z_sort_copy;
    z_a_sort = z_a_sort_copy;
    price_min_sort = price_min_sort_copy;
    price_max_sort = price_max_sort_copy;
  }

  // * GET CART FROM LOCAL STORAGE
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    // console.log(cart);
  } else {
    cart = [];
  }

  // * DELETE NODES FROM html
  if (delete_nodes) {
    div.innerHTML = "";
    global_filter_setting = filter_setting;
    i = 0;
  }

  const cart_copy = [...cart];

  // * SORT CART BY NAME
  if (a_z_sort) {
    cart_copy.sort((a, b) => {
      if (a.alt < b.alt) {
        return -1;
      }
      if (a.alt > b.alt) {
        return 1;
      }
      return 0;
    });
  }

  if (z_a_sort) {
    cart_copy.sort((a, b) => {
      if (a.alt > b.alt) {
        return -1;
      }
      if (a.alt < b.alt) {
        return 1;
      }
      return 0;
    });
  }

  // * SORT CART BY PRICE
  if (price_min_sort) {
    cart_copy.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    });
  }

  if (price_max_sort) {
    cart_copy.sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      }
      if (a.price < b.price) {
        return 1;
      }
      return 0;
    });
  }

  // * ADD NODES TO html
  for (let i = 0; i < cart.length; i++) {
    alt_rows = parseInt(cart_copy[i].alt.length / 21);
    str_images += `<div class='node ${
      cart_copy[i].id
    }' style="height: calc(340px + 25px + ${28 * alt_rows}px)">

    <p class="text font-size-16 black-color bold margin-left-rigtt-20 margin0 margin-top-15 text-align-left margin-bottom-10">${
      cart_copy[i].alt
    }</p>

    <img src='${cart_copy[i].src}' class='photo'>

    <div class="btn-cont margin-bottom-5">

        <div> 
        <label class='sticky Reem-Kufi margin0 font-size-24 main-color bold'>${
          cart_copy[i].price
        }</label>
        <label class='sticky Reem-Kufi margin0 font-size-24 main-color '>грн</label>
        </div>

        <label class='sticky text margin0 hover-pointer padding-for-x font-size-24 delete-color bold' onclick="DeleteNodeFromCart(${
          cart_copy[i].id
        })" title="Видалити">&#x2715</label>

        <div class="row">

        <div class="up-down-arrows sticky">
        <label class="sticky hover-pointer main-color bold" onclick="AddAmount(${
          cart_copy[i].id
        })"><img src="up-arrowhead-in-a-circle.png" alt=""></label>
        <label class="sticky hover-pointer main-color bold" onclick="SubAmount(${
          cart_copy[i].id
        })"><img src="down-arrowhead-in-a-circle.png" alt=""></label>
        </div>

        <label class='sticky Reem-Kufi margin0 font-size-24 main-color amount-cont bold'> ${
          cart_copy[i].amount
        }</label>

        </div>

        
      </div> 

      <div class='text-on-photo bck-white' style="margin-top: -2px">

        <h class=' text font-size-18 grey-color bold'>Короткі характеристики</h>
        <p class=' text font-size-14 main-color'> ${
          cart_copy[i].description
        }</p>

      </div>
    </div>
    `;
    sum += cart_copy[i].price * cart_copy[i].amount;
  }

  if (sum === 0) {
    str_images += `<div class="sum-cart">
    <div class="border bck-button-color padding-5"> 
    <label class="Reem-Kufi margin0 font-size-30 main-color">Кошик   порожній</label>
    </div>
    </div>`;
  } else {
    sum_str = `<div class="sum-cart">
    <div class="border bck-button-color padding-5"> 
    
    <label class="Reem-Kufi margin0 font-size-30 main-color">Сума: </label>
    <label class="Reem-Kufi margin0 font-size-30 main-color bold">${sum} </label>
    <label class="Reem-Kufi margin0 font-size-30 main-color">грн</label>
    </div>
  
    </div>`;
  }

  div.innerHTML += str_images;
  sum_cart.innerHTML = sum_str;

  // drawChart();
  
  SaveOptionsOfSort(a_z_sort, z_a_sort, price_min_sort, price_max_sort);
}

function DeleteNodeFromCart(index) {
  cart = JSON.parse(localStorage.getItem("cart"));
  index = cart.findIndex((item) => item.id == index);
  cart.splice(index, 1);

  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify(cart));
  GetNodesForCart("", true, false, false, false, false, true);
}

function DeleteAllFromCart() {
  localStorage.removeItem("cart");
  GetNodesForCart("");
}

function AddAmount(index) {
  cart = JSON.parse(localStorage.getItem("cart"));
  index = cart.findIndex((item) => item.id == index);
  cart[index].amount++;
  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify(cart));
  GetNodesForCart("", true, false, false, false, false, true);
}

function SubAmount(index) {
  cart = JSON.parse(localStorage.getItem("cart"));
  index = cart.findIndex((item) => item.id == index);
  cart[index].amount--;
  if (cart[index].amount == 0) {
    cart.splice(index, 1);
  }
  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify(cart));
  GetNodesForCart("", true, false, false, false, false, true);
}