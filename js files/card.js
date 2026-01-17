   console.log("CARD JS CONNECTED");

   
   function addToCart(btn){
  const cardBottom = btn.parentElement;
  const qtyBox = cardBottom.querySelector(".qty-box");

  btn.style.display = "none";
  qtyBox.classList.remove("d-none");
}

function increaseQty(btn){
  const qty = btn.parentElement.querySelector(".qty");
  qty.innerText = parseInt(qty.innerText) + 1;
}

function decreaseQty(btn){
  const cardBottom = btn.closest(".card-bottom");
  const qty = cardBottom.querySelector(".qty");
  const addBtn = cardBottom.querySelector(".add-btn");
  const qtyBox = cardBottom.querySelector(".qty-box");

  if(parseInt(qty.innerText) > 1){
    qty.innerText = parseInt(qty.innerText) - 1;
  } else {
    qtyBox.classList.add("d-none");
    addBtn.style.display = "inline-block";
    qty.innerText = 1;
  }
}



  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.getElementById("mainNavbar");

  // ACTIVE LINK CHANGE
  navLinks.forEach(link => {
    link.addEventListener("click", function () {

      // remove old active
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");

      // MOBILE MENU AUTO CLOSE
      if (window.innerWidth < 992) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
        });
        bsCollapse.hide();
      }
    });
  });

