// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    var modalImg = document.getElementById("img01");
    modalImg.classList.add("rounded-circle");
    modalImg.classList.add("update_modal_img");
   
    modal.style.display = "block";
    modalImg.src = "./img/website/modal.png";
    modalImg.alt = this.alt;
    // captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}