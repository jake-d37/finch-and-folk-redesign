//handle removing items from item list
let openItems = 3;
let items = [
    {
        index: 1,
        quantity: 1,
        price: 30
    }, {
        index: 2,
        quantity: 2,
        price: 30
    }, {
        index: 3,
        quantity: 1,
        price: 30
    }
]

//remove item card
function removeItemCard(index) {
    //find item card
    const card = document.getElementById("item-card-"+index);
    //hide card
    card.style.display = "none";

    //find index of item in items array
    const itemIndex = items.findIndex(item => item.index === index);
    //remove item from items array
    if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
    }

    //update other elements that need to be updated
    updatePageContent();
}

//calculate total from items array
function calculateTotalPrice(){
    let sum = 0;
    items.forEach(item => {
        sum += (item.quantity * item.price); 
    });

    return sum;
}

//calculate total quantity from items array
function calculateTotalQuantity() {
    let sum = 0;
    items.forEach(item => {
        sum += item.quantity; 
    });

    return sum;
}

function updatePageContent() {
    //check if empty message should be displayed
    const emptyMessage = document.getElementById("empty-message")
    if (items.length <= 0){
        console.log("empty");
        emptyMessage.style.display = "block";
    } else {
        console.log("not empty");
        emptyMessage.style.display = "none";
    }

    //update prices
    const totalPrice = calculateTotalPrice();
    const formattedAmount = totalPrice.toFixed(2)
    const totalPriceString = "$"+formattedAmount;

    const cartTotal = document.getElementById("cart-total");
    cartTotal.textContent = totalPriceString;
    const subtotal = document.getElementById("subtotal");
    subtotal.textContent = totalPriceString;

    //update quantity
    const quantityText = document.getElementById("item-count");
    quantityText.textContent = ""+calculateTotalQuantity()+" Items";
}

//handle payment application opening
function openPaymentForm() {
    //turn on blur overlay
    const blurOverlay = document.getElementById("blur-overlay");
    blurOverlay.style.display = "flex";

    // add delay before showing payment form
    const paymentForm = document.getElementById("payment-form");
    setTimeout(function() {
        // show payment form
        paymentForm.style.display = "flex";
    }, 500);
}

//valid input checking on payment form
document.addEventListener("DOMContentLoaded", function() {
    const cvvInput = document.getElementById('cvv-number');
    const postcodeInput = document.getElementById('postcode');

    //every time value changes, check if it is valid answer
    cvvInput.addEventListener('input', function() {
        const value = cvvInput.value;
        if (hasNCharacters(value, 3)) {
            cvvInput.classList.remove("invalid-input");
        } else {
            cvvInput.classList.add("invalid-input");
        }
    });

    //every time value changes, check if it is valid answer
    postcodeInput.addEventListener('input', function() {
        const value = postcodeInput.value;
        if (hasNCharacters(value, 4)) {
            postcodeInput.classList.remove("invalid-input");
        } else {
            postcodeInput.classList.add("invalid-input");
        }
    });

    //checks if string has exactly a given number of characters
    function hasNCharacters(value, length) {
        return value.length === length;
    }
});

//handle payment confirmed menu opening
function confirmPayment(event) {
    event.preventDefault();
    
    const paymentConfirmedOverlay = document.getElementById("payment-confirmed-overlay");
    const confettiContainer = document.getElementById("confetti-container");
    
    // add delay before showing payment form
    setTimeout(function() {
        //opens payment confirmed page
        paymentConfirmedOverlay.style.display = "flex";
    }, 200);

    //wait even longer for the confetti
    setTimeout(function() {
        //opens payment confirmed page
        confettiContainer.style.display = "flex";
    }, 800);
}

//handle confetti positions and falling
document.addEventListener('DOMContentLoaded', function() {
    const confettiElements = document.querySelectorAll('.confetti');

    confettiElements.forEach(function(confetti) {
        // Set random top position between 0 and 100vh
        confetti.style.top = ((Math.random() * 200)-100) + 'vh';
        // Set random left position between 0 and 100vw
        confetti.style.left = Math.random() * 100 + 'vw';
        // Set random initial rotation between 0deg and 360deg
        confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
    });
});