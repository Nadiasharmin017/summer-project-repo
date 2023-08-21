
/*function getInnerText(id){
     const productId = document.getElementById(id);
     const productElement = productId.innerText;
     return productElement;
}*/


const cardId = "card-one";
document.getElementById(cardId).addEventListener("click", function() {
     
    const productName = "product-one"
    const product = getInnerText("product-one");
     console.log("clicked the product");
    
 });