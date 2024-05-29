//show thank you message when user signs up for newsletter
function confirmSubscription(event) {
    //stops the page from reloading
    event.preventDefault();
    
    //show thank you message
    const thankYouMessage = document.getElementById("thank-you-message");
    thankYouMessage.style.display = "flex";
}