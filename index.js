const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
let totalSlides = slides.length;
let emptyDivExists = false 


document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function generateCounter(){
    
    document.getElementById("counter").innerHTML = " "
    
    
    
     if (slidePosition > 0){
         
         for (let i = 0; i <= slidePosition; i++){
                document.getElementById("counter").innerHTML += `<span class="dot dark">.</span>`
         }
        
         for (let i = 0; i < (totalSlides - 1) - slidePosition; i++){
                document.getElementById("counter").innerHTML += `<span class="dot light">.</span>`  
         }}
         
         
    if (slidePosition === 0){
        
        for (let slide of slides){
            if (slide === slides[0]){
                document.getElementById("counter").innerHTML += `<span class="dot dark">.</span>`  
            } else {
            document.getElementById("counter").innerHTML += `<span class="dot light">.</span>`}
    }
}}

generateCounter()

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
         for (let dot of document.getElementsByClassName("dot")){
            if (dot.classList.contains("dark")){
                         dot.classList.replace("dark", "light")
            }}}
        
     else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    document.getElementsByClassName("dot")[slidePosition].classList.remove("light")
    document.getElementsByClassName("dot")[slidePosition].classList.add("dark")
    }

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
        for (let dot of document.getElementsByClassName("dot")){
            if (dot.classList.contains("light")){
                         dot.classList.replace("light", "dark")
            }
            
        }
    } else {
         document.getElementsByClassName("dot")[slidePosition].classList.remove("dark")
        document.getElementsByClassName("dot")[slidePosition].classList.add("light")
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    
  

}

document.getElementById("submit-image-button").addEventListener("click", addImage)

function addImage(){
    let imageHtmlToAdd = `<div class="carousel-item">
                             <img src="${document.getElementById("image-url-input").value}" />
                          </div>`
    
    if (document.getElementById("image-url-input").value.toLowerCase().includes(".jpg")
          || document.getElementById("image-url-input").value.toLowerCase().includes(".jpeg")
          || document.getElementById("image-url-input").value.toLowerCase().includes(".avif")
          || document.getElementById("image-url-input").value.toLowerCase().includes(".tiff")
          || document.getElementById("image-url-input").value.toLowerCase().includes(".png")
          || document.getElementById("image-url-input").value.toLowerCase().includes(".gif")
          || document.getElementById("image-url-input").value.toLowerCase().includes(".svg")
          || document.getElementById("image-url-input").value.toLowerCase().includes(".heic") ){
   
             if (emptyDivExists === false){
                 slides[slidePosition].insertAdjacentHTML("afterend", imageHtmlToAdd)
                 totalSlides++
                 generateCounter()
             } else {
                 slides[0].innerHTML =  `<img src="${document.getElementById("image-url-input").value}" />` 
                 emptyDivExists = false
                 
             }
            document.getElementById("image-url-input").value = ""
    } else { document.getElementById("image-url-input").value = ""
            document.getElementById("image-url-input").setAttribute("placeholder", "Please enter a valid image link!")
    
    
    }
    
}

document.getElementById("delete-button").addEventListener("click", deleteImage)

function deleteImage(){
    
    if (totalSlides === 1){
    slides[0].innerHTML = `<div class="empty-div"><br><br><br><center>Please add an image below!</center></div>`
    emptyDivExists = true 
    
    
    }
    
    if (totalSlides != 1){
        let slideToDelete = slidePosition
        moveToPrevSlide()
         totalSlides--
          if (slideToDelete === 0){
        slidePosition = totalSlides - 1}
        slides[slideToDelete].remove()
        generateCounter()
    }    
    

  
     }
     
  


    




