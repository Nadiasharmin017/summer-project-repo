
function getInnerText(id){
     const productId = document.getElementById(id);
     const productElement = productId.innerText;
     return productElement;
}


 function listProduct(cardId,productName)
 {
    document.getElementById(cardId).addEventListener("click", function() {
     
        const product = getInnerText(productName);
        console.log(product);
    
        const li = document.createElement("h2");
        const priceList = document.getElementById("price-list");
        const index = priceList.children.length + 1;
        li.innerText = index + ". " + product;
        priceList.appendChild(li);
        
        

     });
 }
  listProduct("card-one", "product-one");
  listProduct("card-two", "product-two");
  listProduct("card-three", "product-three");
  listProduct("card-four", "product-four");
  listProduct("card-five", "product-five");
  listProduct("card-six", "product-six");

 

function valueUpdate(cardId,valueId ) {
    document.getElementById(cardId).addEventListener("click", function() {
        const product = getInnerText(valueId);
        console.log(product);
       const newCAmountValueString = product.value;
       const newCAmountValue = parseFloat(newCAmountValueString);
       

       const totalProduct = document.getElementById("total-amount");
       const previoustotalAmountString = totalProduct.innerText;
       const previoustotalAmount = parseFloat(previoustotalAmountString);
       

       const currentTotalAmount = previoustotalAmount + newCAmountValue ;
       totalProduct.innerText = currentTotalAmount ;
       console.log(totalProduct);
      // product.value = "";





       
    });
}

valueUpdate("card-one","value-one");
valueUpdate("card-two","value-two");
valueUpdate("card-three","value-three");
valueUpdate("card-four","value-four");
valueUpdate("card-five","value-five");
valueUpdate("card-six","value-six");

