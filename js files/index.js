function addToCart(btn) {
            const cartAction = btn.parentElement;
            btn.style.display = "none";
            cartAction.querySelector('.qty-box').style.display = "flex";
        }

        function changeQty(btn, val) {
            const qty = btn.parentElement.querySelector('.qty');
            let count = parseInt(qty.innerText) + val;

            if (count <= 0) {
                const cart = btn.closest('.cart-action');
                cart.querySelector('.qty-box').style.display = "none";
                cart.querySelector('.add-btn').style.display = "inline-block";
            } else {
                qty.innerText = count;
            }
        }

let cart = JSON.parse(localStorage.getItem("cart")) || {};
restoreCart(); updateCartCount();

function addToCart(btn){
  const a=btn.closest(".cart-action");
  const id=a.dataset.id;
  btn.style.display="none";
  a.querySelector(".qty-box").style.display="flex";
  cart[id]=1; saveCart();
}
function changeQty(btn,val){
  const box=btn.parentElement;
  const qtyEl=box.querySelector(".qty");
  const a=btn.closest(".cart-action");
  const id=a.dataset.id;
  let q=parseInt(qtyEl.innerText)+val;
  if(q<=0){
    delete cart[id];
    box.style.display="none";
    a.querySelector(".add-btn").style.display="inline-block";
  }else{qtyEl.innerText=q;cart[id]=q;}
  saveCart();
}
function saveCart(){
  localStorage.setItem("cart",JSON.stringify(cart));
  updateCartCount(); renderCart();
}
function updateCartCount(){
  let t=0; for(let i in cart){t+=cart[i]}
  document.getElementById("cartCount").innerText=t;
}
function toggleCart(){
  const p=document.getElementById("cartPopup");
  p.style.display=p.style.display==="block"?"none":"block";
  renderCart();
}
function renderCart(){
  const box=document.getElementById("cartItems");
  const empty=document.getElementById("emptyCart");
  box.innerHTML="";
  if(Object.keys(cart).length===0){empty.style.display="block";return;}
  empty.style.display="none";
  for(let i in cart){
    box.innerHTML+=`<div class="cart-item"><span>${i}</span><span>Qty: ${cart[i]}</span></div>`;
  }
}
function restoreCart(){
  document.querySelectorAll(".cart-action").forEach(a=>{
    const id=a.dataset.id;
    if(cart[id]){
      a.querySelector(".add-btn").style.display="none";
      a.querySelector(".qty-box").style.display="flex";
      a.querySelector(".qty").innerText=cart[id];
    }
  });
}