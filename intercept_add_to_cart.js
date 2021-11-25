console.log("intercept");

var button = document.getElementById('add-to-cart-button');
console.log(button)
if (button) {
    console.log("button found");
    button.addEventListener('click', function(event) {
        var target = event.target;
        alert("button clicked");
    });
}