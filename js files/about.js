    function addToCart(btn){
  const cardBottom = btn.parentElement;
  const qtyBox = cardBottom.querySelector(".qty-box");

  btn.style.display = "none";
  qtyBox.classList.remove("d-none");
}
