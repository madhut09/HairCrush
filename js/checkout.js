 function summary() {	 

    myObj = localStorage.getItem("productsInCart");
	myObj =JSON.parse(myObj);
	console.log(myObj);
	 
let summaryContainer = document.getElementById('mytable').getElementsByTagName('tbody')[0];
var printContents = document.getElementById('printDiv').innerHTML;
	
	 let cartCost = localStorage.getItem('totalCost');
	 console.log(cartCost); 
	 
	if(myObj && summaryContainer) {		
		summaryContainer.innerHTML ='';
	 	Object.values(myObj).map(item => {
		summaryContainer.innerHTML += ` 
		 
		 <tr> 
			<td class="product_image">
			<img src="./images/checkout/${item.tag}.jpg">
			</td>
			<td id="Description"> 
        	<span>${item.name}</span>
			</td>			
			<td id="price"> 
  			<div class="price">$${item.price}</div>
			</td>			
			<td id="quantity">
  			<div class="quantity">             
  			<span>${item.incart}</span>            
  			</div>
			</td>			
			<td id="Total">
			<div class="totalSummary">$${item.incart * item.price} </div> 
			</td> 
		</tr>
		 
		
 	`;	
 	});  
		 
		 
		document.getElementById("demo").innerHTML += `
		 
		<div class="basketTotalContainer">			 
			<h4 class="basketTotalTitle"> Basket Total </h4> 
			<h4 class ="basketTotal">$${cartCost},00 </h4>
        </div>
		  
		`;

		 
 	}
	
}



function callme(){
		var name = document.getElementById('fname').value;
		localStorage.setItem('name', name);
		
		var email = document.getElementById('email').value;
		localStorage.setItem('email', email);
	
		var city = document.getElementById('city').value;
		localStorage.setItem('city', city); 

		var address = document.getElementById('address').value;
		localStorage.setItem('address', address);
	
		var zip = document.getElementById('zip').value;
		localStorage.setItem('zip', zip);
		
		var country = document.getElementById('country').value;
		localStorage.setItem('country', country);
	
		var sname = document.getElementById('sname').value;
		localStorage.setItem('sname', sname);
		
		var semail = document.getElementById('semail').value;
		localStorage.setItem('semail', semail);
	
		var scity = document.getElementById('scity').value;
		localStorage.setItem('scity', scity); 

		var saddress = document.getElementById('saddress').value;
		localStorage.setItem('saddress', saddress);
	
		var szip = document.getElementById('szip').value;
		localStorage.setItem('szip', szip);
		
		var scountry = document.getElementById('scountry').value;
		localStorage.setItem('scountry', scountry);
	
	
	} 

summary();