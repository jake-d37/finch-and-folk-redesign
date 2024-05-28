//change fill of star when pressed
document.querySelectorAll('.product-save-button').forEach(button => {
    button.addEventListener('click', function(event) {
        // Stop the event from propagating to the anchor element (won't change the page)
        event.stopPropagation();
        event.preventDefault();

        const icon = this.querySelector('.product-save-path');

        // Check which class element has, which determines which animation is played
        if (icon.classList.contains('animate-save')) {
            // set animation class, css will sort animation
            icon.classList.remove('animate-save');
            icon.classList.add('animate-unsave');
        } else {
            // set animation class, css will sort animation
            icon.classList.remove('animate-unsave');
            icon.classList.add('animate-save');
        }
    });
});

//change look of add to cart button when pressed
document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', function(event) {
        // Stop the event from propagating to the anchor element (won't change the page)
        event.stopPropagation();
        event.preventDefault();

        const textPrompt = this.querySelector(".text-prompt");
        const textContent = textPrompt.querySelector(".text-content");
        // Check which class element has, which determines which animation is played
        if (textPrompt.classList.contains('animate-add')) {
            //class will handle css (text prompt display)
            textPrompt.classList.remove('animate-add')
            textContent.classList.remove('animate-add-text')
            textPrompt.classList.add('animate-unadd');
            textContent.classList.add('animate-unadd-text');
            //set svg animation
            unaddAnimation(this);
        } else {
            //class will handle css (text prompt display)
            textPrompt.classList.remove('animate-unadd');
            textContent.classList.remove('animate-unadd-text')
            textPrompt.classList.add('animate-add');
            textContent.classList.add('animate-add-text');
            //set svg animation
            addAnimation(this);
        }

    });
});

function addAnimation(icon){
    //get all the needed parameters
    //set the transition on each for smooth animation
    const circle = icon.querySelector("#circle");
    circle.style.transition = "all 0.3s ease-out";
    const rect1 = icon.querySelector("#rect1");
    rect1.style.transition = "all 0.3s ease-out";
    const rect2 = icon.querySelector("#rect2");
    rect2.style.transition = "all 0.3s ease-out";

    //set new values
    //circle fill
    circle.setAttribute("fill","white");
    //rect1 x,y,height,transform,fill
    rect1.setAttribute("x","8");
    rect1.setAttribute("y","24.2427");
    rect1.setAttribute("height","16.2364");
    rect1.setAttribute("transform","rotate(-45 8 24.2427)");
    rect1.setAttribute("fill","#353839");
    //rect2 x,y,transform,fill
    rect2.setAttribute("x","37.2133");
    rect2.setAttribute("y","11");
    rect2.setAttribute("transform","rotate(45 37.2133 11)");
    rect2.setAttribute("fill","#353839");
}

/*
SELECTED
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#FFFFF0"/>
<rect x="8" y="24.2427" width="6" height="16.2364" rx="1" transform="rotate(-45 8 24.2427)" fill="#353839"/>
<rect x="37.2133" y="11" width="6" height="30" rx="1" transform="rotate(45 37.2133 11)" fill="#353839"/>
</svg>

UNSELECTED
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#353839"/>
<rect x="22" y="8" width="6" height="30" rx="1" fill="#FFFFF0"/>
<rect x="10" y="26" width="6" height="30" rx="1" transform="rotate(-90 10 26)" fill="#FFFFF0"/>
</svg>
*/

function unaddAnimation(icon){
    //get all the needed parameters
    //set the transition on each for smooth animation
    const circle = icon.querySelector("#circle");
    circle.style.transition = "all 0.3s ease-out";
    const rect1 = icon.querySelector("#rect1");
    rect1.style.transition = "all 0.3s ease-out";
    const rect2 = icon.querySelector("#rect2");
    rect2.style.transition = "all 0.3s ease-out";

    //set new values
    //circle fill
    circle.setAttribute("fill","#353839");
    //rect1 x,y,height,transform,fill
    rect1.setAttribute("x","22");
    rect1.setAttribute("y","8");
    rect1.setAttribute("height","30");
    rect1.setAttribute("transform","none");
    rect1.setAttribute("fill","#FFFFF0");
    //rect2 x,y,transform,fill
    rect2.setAttribute("x","10");
    rect2.setAttribute("y","26");
    rect2.setAttribute("transform","rotate(-90 10 26)");
    rect2.setAttribute("fill","#FFFFF0");
}