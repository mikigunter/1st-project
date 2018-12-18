 //add to cart
	var productsCount = document.getElementById("products-count")
	console.log(productsCount)

	var addToCartButtons = document.querySelectorAll(".add-to-cart")
	console.log(addToCartButtons)

for (var i = 0; i < addToCartButtons.length;i++){
	addToCartButtons[i].addEventListener("click",function (){
		var prevProductsCount = +productsCount.textContent 
		productsCount.textContent = prevProductsCount + 1
	})
}
//Slider
 $('.slider').slick({
 	dots: true,
 	autoplay:true,
 	autoplaySpeed: 2000
 	
 	
 });


 // Like buttons

 var likeButtons = document.querySelectorAll('.icon2')
 console.log(likeButtons)
 	for(var i=0; i < likeButtons.length;i++){
 		likeButtons[i].addEventListener('click',function(){
 			if (this.classList.contains("liked")){
 				this.classList.remove("liked")
 			}
 			else {
 				this.classList.add('liked')
 			}
 		})
 	}
// add counter 
var decrementButton = document.querySelectorAll('.decrement-button')[0]
var minCount = 1
var incrementButton = document.querySelectorAll(".increment-button")[0]

var quantityValue = document.querySelectorAll('.quantity-input input')[0]

// function decrementDisabled(count){
// 	if(count <= minCount){
// 		decrementButton.disabled = true
// 	}
// 	else()
// }


var currentValue = quantityValue.value
console.log(currentValue)

if (currentValue <= 1){
	decrementButton.disabled = true
} else {
		decrementButton.disabled = false
}

incrementButton.addEventListener('click',function(){
	var currentValue = Number(quantityValue.value)
	var nextValue = currentValue +1
	console.log(nextValue)
	quantityValue.value = nextValue


	if (nextValue <= 1){
		decrementButton.disabled = true
		}
		else {
			decrementButton.disabled = false
		}
	
})

decrementButton.addEventListener('click',function(){
	var currentValue = Number(quantityValue.value)
	var nextValue = currentValue - 1
	quantityValue.value = nextValue
	

	if (nextValue <= 1){
		decrementButton.disabled = true
		}
		else {
			decrementButton.disabled = false
		}
	
})

