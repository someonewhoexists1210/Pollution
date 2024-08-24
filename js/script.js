var myIndex = 0;
fetch('../nav.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navigation').innerHTML = data;
});

function load(){
    document.querySelectorAll(".tablink").forEach(item => {
        item.addEventListener("click", openTab)
    });
    carousel()
}

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}



function openTab(evt) {
    tabName = evt.srcElement.innerHTML
    var i, x, tablinks;
    x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " w3-red";
}

function setEqualHeight() {
    const tabs = document.querySelectorAll('.tab');
    let maxHeight = 0;

    // Reset heights
    tabs.forEach(tab => {
        tab.style.display = 'block';
      tab.style.height = 'auto';
    });

    // Find the maximum height
    tabs.forEach(tab => {
      const height = tab.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
      tab.style.display = 'none';
    });

    // Set all tabs to the maximum height
    tabs.forEach((tab, n) => {
        if (n == 0){
            tab.style.display = 'block';
        }
        tab.style.height = `${maxHeight}px`;
        tab.classList.add('w3-animate-opacity')
    
    });
  }

function typing() {
    const text = "Kill pollution before it kills you";
    let index = 0;
    const typingSpeed = 75;
    const resetDelay = 1000; // Delay before starting the typing animation again
    const typingTextElement = document.getElementById('typing-text');

    function type() {
        if (index < text.length) {
        typingTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
        } else {
        setTimeout(() => {
            typingTextElement.textContent = "";
            index = 0;
            type();
        }, resetDelay);
        }
    }
    setTimeout(type, 500)
    
}let slideIndex = 1;

document.addEventListener('DOMContentLoaded', () => {
    typing();
    setEqualHeight();
    showDivs(slideIndex);
    let links = ['air', 'water', 'land', 'light', 'noise', 'plastic', 'thermal']
    let nodes = document.getElementById('problempara').childNodes
    for (let i = 1; i < nodes.length; i+=2){
        let link = 'https://www.britannica.com/explore/savingearth/' +  links[Math.floor(i/2)] + '-pollution/'
        if (i == nodes.length - 2){
            link = 'https://www.treehugger.com/what-is-thermal-pollution-5219795'
        }
        
        nodes[i].href = link
        nodes[i].target = '_blank'
    }
});



function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("cardslide");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}


window.addEventListener('resize', setEqualHeight);