let carts = document.querySelectorAll('.add-cart'); 

let products = [ 
	
    {
        name: "Natural Wavy",
        tag: "naturalwavy",
        price: 15,
        incart: 0
    },
	
    {
        name: "Curly Hair",
        tag: "curlyhair",
        price: 20,
        incart: 0
    },
	
    {
        name: "Natural Straight",
        tag: "naturalstraight",
        price: 10,
        incart: 0
    },
	
    {
        name: "Faux Scalp",
        tag: "fauxscalp",
        price: 15,
       incart: 0
    },
	
	{
       name: "Bangs",
        tag: "bangs",
        price: 12,
       incart: 0
    },
	
	{
       name: "Messy Bun",
        tag: "messybun",
        price: 13,
       incart: 0
    },
	
	{
       name: "Ponytail Extensions",
        tag: "ponytailextensions",
        price: 15,
        incart: 0
    },
	
	{
       name: "Jet Black",
        tag: "jetblack",
        price: 10,
        incart: 0
    },
	
	{
       name: "Blunt Bang",
        tag: "bluntbang",
        price: 10,
       incart: 0
    },
	
	{
       name: "Elastic Headbands",
        tag: "elasticheadbands",
        price: 15,
        incart: 0
    },
	
	{
       name: "Caramel Balayage",
        tag: "caramelbalayage",
        price: 25,
        incart: 0
    },
	
	{
       name: "RawCurly Hair",
        tag: "rawcurlyhair",
        price: 30,
       incart: 0
    },
	
];


//console.log(products);

for (let i=0; i < carts.length; i++){
	
	carts[i].addEventListener('click',() =>{
		cartNumbers(products[i]);
		 totalCost(products[i]);
	})
}

 

function onLoadCartNumbers(){
let productNumbers = localStorage.getItem('cartNumbers'); 
	
	if(productNumbers){
	document.querySelector('.cart span').textContent = productNumbers;
		
	}	
	
}


function cartNumbers(products,action)
{	
//	console.log("The product clicked is", products);
	
	let productNumbers = localStorage.getItem('cartNumbers'); 
	productNumbers = parseInt(productNumbers);
	 
	
	let cartItems =localStorage.getItem('productsInCart');
	cartItems =JSON.parse(cartItems);
	
	if(action == "decrease") {
		
		localStorage.setItem('cartNumbers', productNumbers -1);
		document.querySelector('.cart span').textContent = productNumbers -1;
	}
	else if(productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers +1);
		document.querySelector('.cart span').textContent = productNumbers +1;
	}
	else {
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.cart span').textContent = 1;
	}
	
//	 if(productNumbers) {
//	localStorage.setItem('cartNumbers', productNumbers + 1); 
//	 document.querySelector('.cart,span').textContent=productNumbers + 1;	 
//	 }else {
//		 
//		localStorage.setItem('cartNumbers',1);  
//		document.querySelector('.cart,span').textContent =1;  
//	 } 
	 
	setItems(products);	
	
	}
	 

 function setItems(products)
{	 
	console.log("running");
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	console.log("my cartItems are",cartItems);//returning Null initally
	
	if(cartItems != null){
		
		if(cartItems[products.tag]== undefined) {
			cartItems = {
				
				...cartItems,
				[products.tag]:products	
			}
		}
		cartItems[products.tag].incart += 1;
	}
	else {
		products.incart =1;	
	 	cartItems = {
		[products.tag]:products	
	}		
	}
	
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(products,action) {
	console.log("The product price is", products.price);
	
	let cartCost = localStorage.getItem('totalCost');
	
		console.log("my cartCost is", cartCost);
	
	if(action == "decrease"){
		cartCost = parseInt(cartCost);
		localStorage.setItem('totalCost', cartCost -products.price);
		
	}else if(cartCost !=null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + products.price);		
	}
	else {
		localStorage.setItem("totalCost", products.price);
	}
	 
}
 

function addHeaders(table, keys) {
  var row = table.insertRow();
  for( var i = 0; i < keys.length; i++ ) {
    var cell = row.insertCell();
    cell.appendChild(document.createTextNode(keys[i]));
  }
}






  function displayCart() {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems =JSON.parse(cartItems);
	 console.log(cartItems);
	
	let productContainer = document.querySelector('.products');
	  console.log(productContainer);
	  
	let cartCost = localStorage.getItem('totalCost');
	 console.log(cartCost); 
	  
	if(cartItems && productContainer) {		
		productContainer.innerHTML ='';
	 Object.values(cartItems).map(item => {     
		 		 
		 productContainer.innerHTML += 
			 `<div class="products prod">			
          		<ion-icon name="close-circle-outline"></ion-icon><img src="./images/${item.tag}.jpg">
              	<span class="sm-hide">${item.name}</span>  
			</div>
			 
			<div class="price sm-hide">$${item.price}</div>
			 
			<div class="quantity">			 
			<ion-icon class ="decrease" name="caret-back-circle-outline"></ion-icon>
			<span>${item.incart}</span>
			<ion-icon class ="increase" name="caret-forward-circle-outline"></ion-icon> 
			</div>
			 
			<div class="total">   $${item.incart * item.price},00 </div>`;
		   
		});  
		
		 productContainer.innerHTML += `		
		<div class="basketTotalContainer">
			<h4 class="basketTotalTitle"> Basket Total </h4>
			<h4 class ="basketTotal">$${cartCost},00</h4> 
		</div>
		`;
		
	}
	 	
	  
	deleteButton();
	manageQuantity(); 
}


    
 
function deleteButton() {
		
	let deleteButton = document.querySelectorAll('.products ion-icon');
	let productName;
	let productNumbers = localStorage.getItem('cartNumbers');
	
	let cartItems =localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	console.log(cartItems); 
	
	let cartCost = localStorage.getItem('totalCost');
	
	for(let i=0; i < deleteButton.length; i++) {
		
		deleteButton[i].addEventListener('click',() => {
			productName=deleteButton[i].parentElement.textContent.trim().toLowerCase().replace(/ /g,'');
//			console.log(productName); //naturalstraight
//			console.log(cartItems[productName].name + " " + cartItems[productName].incart);
			
			localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].incart);
			
			localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].incart));
			
			delete cartItems[productName];
			localStorage.setItem('productsInCart', JSON.stringify(cartItems));
			
			displayCart();
			onLoadCartNumbers(); 
			
		 });
	}
}


function manageQuantity() {
	
	let decreaseButton = document.querySelectorAll('.decrease');
	let increaseButton = document.querySelectorAll('.increase');
	let currentQuantity =0;
	let currentProduct = "";
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	console.log(cartItems);
	
	 for(let i=0; i < decreaseButton.length; i++) {
		 decreaseButton[i].addEventListener('click', () => {
			 
			currentQuantity = decreaseButton[i].parentElement.querySelector('span').textContent;
			 console.log(currentQuantity);
			 currentProduct = decreaseButton[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();
			 console.log(currentProduct);
			 
			 
			 if(cartItems[currentProduct].incart > 1) {				 
			 cartItems[currentProduct].incart -= 1;
			cartNumbers(cartItems[currentProduct], "decrease");
			totalCost(cartItems[currentProduct], "decrease");
				 
			 localStorage.setItem('productsInCart', JSON.stringify(cartItems));
			 displayCart();
			}
		});	
	}
	
	for(let i=0; i < increaseButton.length; i++) {
		increaseButton[i].addEventListener('click', () => {
			console.log('increase');
		currentQuantity = increaseButton[i].parentElement.querySelector('span').textContent;
			 console.log(currentQuantity);
		 
			 currentProduct = increaseButton[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();
			 console.log(currentProduct); 
			
			 cartItems[currentProduct].incart += 1;
			cartNumbers(cartItems[currentProduct]);
			totalCost(cartItems[currentProduct]);
				 
			 localStorage.setItem('productsInCart', JSON.stringify(cartItems));
			 displayCart();
			});
		}
	}
  
 
   

onLoadCartNumbers(); 
displayCart(); 
 