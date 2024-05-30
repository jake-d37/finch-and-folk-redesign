function toggleDescriptionOn() {
    //find description and arrow icon
    const descriptionElement = document.getElementById("description");
    const expandIcon = document.getElementById("expand-icon");
    //check if its on
    if (descriptionElement.classList.contains('animate-open')){
        //if yes, turn off
        descriptionElement.classList.remove('animate-open');
        descriptionElement.classList.add('animate-unopen');
        //trigger arrow animation
        expandIcon.classList.remove('rotate');
    } else {
        //if no, turn on
        descriptionElement.classList.remove('animate-unopen');
        descriptionElement.classList.add('animate-open');
        //add arrow animation
        expandIcon.classList.add('rotate');
    }
}

//handle image switching functionality
const imageSources = [
    ["../images/product-images/crochet-bunny/image-1-high.jpg"], 
    ["../images/product-images/crochet-bunny/image-2-high.jpg"], 
    ["../images/product-images/crochet-bunny/image-3-high.jpg"]
];

//change the main image to the one associated with the index given
function changeMainImage(index) {
    //find picture tag for main image
    const mainPicture = document.getElementById("main-image");
    //delete all children of the main image (all the img tags)
    while (mainPicture.firstChild) { 
        mainPicture.removeChild(mainPicture.firstChild); 
    }
    //create img elements for each level of detail of the image
    imageSources[index].forEach(element => {
        //create img element
        const image = document.createElement("img");
        image.src = element;
        //give correct classes
        image.classList.add("archway-image");
        //append to main image picture element
        mainPicture.appendChild(image);
    });

}

//handle quantity choice
let quantity = 1;

function increaseQuantity(){
    quantity++;
    updateQuantityText();
}

function decreaseQuantity(){
    //can't order less than one
    if (quantity <= 1) return;

    quantity--;
    updateQuantityText();
}

//called by inputting number directly
function setQuantity(quant){
    //check for valid number
    if (!isInteger(quant)){
        alert("Please provide a valid quantity.");
        return
    }
    //update quantity
    quantity = quant;
    updateQuantityText();
}

function isInteger(value) {
    const parsed = parseInt(value, 10);
    return !isNaN(parsed) && parsed.toString() === value.toString();
}

//updates the text content of the quantity selector
function updateQuantityText() {
    const quantityText = document.getElementById("quantity");
    quantityText.textContent = quantity;
}