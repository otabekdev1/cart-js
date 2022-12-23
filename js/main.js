let list = document.querySelectorAll(".list .item");
list.forEach((item) => {
  item.addEventListener("click", function (event) {
    if (event.target.classList.contains("add")) {
      var itemNew = item.cloneNode(true);
      let checkList = false;
      let lisCart = document.querySelectorAll(".cart .item");
      lisCart.forEach((cart) => {
        if (cart.getAttribute("data-key") == itemNew.getAttribute("data-key")) {
          let checkList = true;
          cart.classList.add("danger");
          setTimeout(function () {
            cart.classList.remove("danger");
          }, 1000);
        }
      });
      if (checkList == false) {
        document.querySelector(".listCart").appendChild(itemNew);
      }
    }
  });
});

function Remove($key) {
  let listCart = document.querySelectorAll(".cart .item");
  listCart.forEach((item) => {
    if (item.getAttribute("data-key") == $key) {
      item.remove();
      return;
    }
  });
}
