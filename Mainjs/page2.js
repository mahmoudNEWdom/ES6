/* ------------------------------Save cookies--------------------------- */
function getcookie(){
    let cookie = document.cookie;
    let obj = {};
    obj = cookie.split(";");
    let user = obj[0].split("=")[1];
    return user
    ;
}
let cookie = document.getElementById("cookie");
cookie.innerHTML = getcookie();
/* ---------------------slider--------------------------- */
let img = document.querySelector("img");
    setInterval(function(){
    let i = Number(img.getAttribute("src").split("/")[2].split(".")[0]);
    
    i++;
    if(i>4){
        i=1;
    }
    img.setAttribute("src","../images/"+i+".jpg");
    },10000);

window.next = function(){
    let i = Number(img.getAttribute("src").split("/")[2].split(".")[0]);
    console.log(i);

    i++;
    if(i>6){
        i=1;
    }
    img.setAttribute("src","../images/"+i+".jpg");
}
window.previous= function(){
    let i = Number(img.getAttribute("src").split("/")[2].split(".")[0]);
    i--;
    if(i<1){
        i=6;
    }
    img.setAttribute("src","../images/"+i+".jpg");
}

/* ---------------------LOGOUT----------------------------- */
window.logout=function logout(){
    location.replace("../index.html");
}
/* ------------------------product items instead of API-------------------------------- */
let products =[
    {
        category:"phone",
        name:"SamsungS23Ultra",
        price:900,
        description:"samsung 23 Ultra 128GB 5G",
        img:"../images/SamsungS23Ultra.jpg"
    },
    {
        category:"phone",
        name:"Iphone",
        price:1000,
        description:"Iphone 12 128GB 5G", 
        img:"../images/Iphone.jpg"
    },
    {
        category: "phone",
        name: "googlepixel",
        price: 800,
        description: "Google Pixel 7 Pro 256GB",
        img: "../images/googlepixel.jpg"
    },
    {
        category: "phone",
        name: "OnePlus",
        price: 750,
        description: "OnePlus 11 5G 256GB",
        img: "../images/OnePlus.jpg"
    },
    {
        category:"clothing",
        name:"jacket",
        price:20,
        description:"T-shirt 100% cotton size M",
        img:"../images/jacket.jpg"
    },
    {
        category:"clothing",
        name:"Jeans",
        price:50,
        description:"Jeans size 32",
        img:"../images/Jeans.jpg"
    },
    {
        category: "clothing",
        name: "Sweater",
        price: 30,
        description: "Sweater 100% wool size L",
        img: "../images/Sweater.jpg"
    },
    {
        category: "clothing",
        name: "Cap",
        price: 10,
        description: "Baseball cap, adjustable size",
        img: "../images/Cap.jpg"
    },
    {
        category: "clothing",
        name: "Hoodie",
        price: 40,
        description: "Unisex hoodie, fleece-lined, size L",
        img: "../images/Hoodie.jpg"
    },
    {
        category: "clothing",
        name: "Dress",
        price: 60,
        description: "Women's summer dress, floral pattern, size S",
        img: "../images/Dress.jpg"
    },
    {
        category: "clothing",
        name: "Shorts",
        price: 25,
        description: "Men's casual shorts, 100% cotton, size M",
        img: "../images/Shorts.jpg"
    },
    {
        category:"laptop",
        name:"Macbookpro",
        price:1500,
        description:"Macbook pro 16 inch 1TB",
        img:"../images/Macbookpro.jpg"
    },
    {
        category: "laptop",
        name: "HPEnvy",
        price: 1100,
        description: "HP Envy 13 inch 512GB SSD",
        img: "../images/HPEnvy.jpg"
    },
    {
        category: "laptop",
        name: "LenovoThinkPad",
        price: 1000,
        description: "Lenovo ThinkPad X1 Carbon 14 inch 512GB SSD",
        img: "../images/LenovoThinkPad.jpg"
    },
    {
        category:"laptop",
        name:"DellXPS",
        price:1200,
        description:"Dell XPS 15 inch 512GB",
        img:"../images/DellXPS.jpg"
    }
]
/*======================================================== */
let phone = document.getElementById("phone");
let clothing = document.getElementById("Clothing");
let laptop = document.getElementById("laptop");
let All = document.getElementById("all");
let productList = document.querySelector(".product-list");

displayProducts("All");

function displayProducts(category) {
    productList.innerHTML ="";
    products.forEach((product) => {
        if (category === "All" || product.category === category) {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <div class="info">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}$</p>
                </div>
                <div class="actions">
                    <button href="#" class="btn"><i class="fa fa-eye view" aria-hidden="true"></i></button>
                    <button href="#" class=" add-to-cart"><i class="fa fa-plus" aria-hidden="true"></i></button>
                </div>
            `;
            productList.appendChild(productDiv);
        }
    });
}
    /* ---------------------view product on every view button && save it in local storage----------------------- */
    let viewers = document.querySelectorAll(".btn");
    viewers.forEach((viewer, index) => {
    viewer.addEventListener("click", function() {
        let product = products[index];
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        location.replace("../Mainhtml/page3.html");
    });
}); 
/* -----------------------------add to cart icon and display numbers from local storage items----------------- */
if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
}
let howmanyitems = document.getElementById("howmanyitems");
let cart = JSON.parse(localStorage.getItem("cart"));
howmanyitems.innerHTML = cart.length;
let add_to_cart = document.querySelectorAll(".add-to-cart");
add_to_cart.forEach((add_to_cart, index) => {
    add_to_cart.addEventListener("click", function() {
        let product = products[index];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        howmanyitems.innerHTML = cart.length;
    });
});
/* ---------------------event listeners--------------------- */
phone.addEventListener("click", function() {
    displayProducts("phone");
});

clothing.addEventListener("click", function() {
    displayProducts("clothing");
});

laptop.addEventListener("click", function() {
    displayProducts("laptop");
});

All.addEventListener("click", function() {
    displayProducts("All");
});

/* ---------icon event listener----------*/ 
let cartend = document.getElementById("cartend");
cartend.addEventListener("click", function(){
  window.open("../Mainhtml/page4.html");
  /* ---------------------------------append & display all products by default--------------------------------------- */
  displayProducts("All");
  function displayProducts(category) {
    productList.innerHTML = "";
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.forEach((product, index) => {
      if (category === "All" || product.category === category) {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <div class="info">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}$</p>
                </div>
                <div class="actions">
                    <button href="#" class=" add-to-cart"><i class="fa fa-check" aria-hidden="true"></i></button>
                </div>
            `;
        productList.appendChild(productDiv);
      }
    });
  }
});