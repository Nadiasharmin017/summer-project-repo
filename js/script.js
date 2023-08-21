
function getInnerText(id){
     const productId = document.getElementById(id);
     const productElement = productId.innerText;
     return productElement;
}


const cardId = "card-one";
const productName = "product-one";
document.getElementById(cardId).addEventListener("click", function() {
     
    const product = getInnerText(productName);
    
    
 });