date_field = document.getElementById("date")

date_field.valueAsDate = new Date();
var price = document.getElementById("price")
var quantity = document.getElementById("quantity")
var total = document.getElementById("total")

function total_amount(){
    let amount =  int(price.value)*int(quantity)
    total.innerHTML = amount
}