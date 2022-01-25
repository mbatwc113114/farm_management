date_field = document.getElementById("date")

date_field.valueAsDate = new Date();
var price = document.getElementById("price")
var quantity = document.getElementById("quantity")
var total = document.getElementById("total")

function total_amount(){
    let amount =  Number(price.value)*Number(quantity);
    console.log(amount)
    total.innerText = amount;
}