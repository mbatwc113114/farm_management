date_field = document.getElementById("date")

date_field.valueAsDate = new Date();
var price = document.getElementById("price")
var quantity = document.getElementById("quantity")
var total = document.getElementById("total")

function total_amount(){
    const amount =  Number(price.value)*Number(quantity.value);
    console.log(price.value)
    console.log(amount)
    var total.value = amount;
}