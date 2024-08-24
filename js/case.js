function openacc(id) {
    var x = document.getElementById(id);
    if (x.classList) { 
        x.classList.toggle("w3-show");
        x.previousElementSibling.classList.toggle("w3-dark-grey");
    } else {
    if (x.className.indexOf("w3-show") == -1) 
        x.className = x.className + " w3-show";
    else 
        x.className = x.className.replace("w3-show", "");
    }
}
