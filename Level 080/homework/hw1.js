document.getElementById("image1").addEventListener("mouseover", function() {
    this.src = "hover1.jpg";
});
document.getElementById("image1").addEventListener("mouseout", function() {
    this.src = "image1.jpg"; 
});

document.getElementById("image2").addEventListener("mouseover", function() {
    this.src = "hover2.jpg"; 
});
document.getElementById("image2").addEventListener("mouseout", function() {
    this.src = "image2.jpg"; 
});

document.getElementById("image3").addEventListener("click", function() {
    this.src = "click.jpg"; 
});
document.getElementById("image3").addEventListener("mouseout", function() {
    this.src = "image3.jpg"; 
});
