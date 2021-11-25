var button = document.getElementById('add-to-cart-button');

if (button) {
    console.log("button found");
    button.addEventListener('click', function(event) {
        alert("DONT BUY THINGS YOU DONT NEED");
        alert("FOR PEOPLE YOU DONT LIKE");
        alert("TO IMPRESS PEOPLE YOU DON'T LIKE");
        event.preventDefault();
        // var target = event.target;
    });
}