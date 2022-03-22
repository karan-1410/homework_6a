function pricechange(){
    var x = document.getElementById("priceselect").value;
    document.getElementById("price").innerHTML = x
}
var count = 0
function CartNumber(){
    count++ 
    document.getElementById("cartNum").innerHTML = count
}