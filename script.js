let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produit ajouté au panier !");
}

function removeFromCart(index){
    cart.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function displayCart(){
    let cartItems = document.getElementById("cart-items");
    let total = 0;

    if(cartItems){
        cartItems.innerHTML="";

        cart.forEach((item,index)=>{
            cartItems.innerHTML += `
                <div style="margin:15px 0;">
                    ${item.name} - ${item.price}$
                    <button onclick="removeFromCart(${index})" 
                    style="background:red;margin-left:10px;">
                    Supprimer
                    </button>
                </div>
            `;
            total += item.price;
        });

        document.getElementById("total").innerText="Total: "+total+"$";
    }
}

displayCart();
