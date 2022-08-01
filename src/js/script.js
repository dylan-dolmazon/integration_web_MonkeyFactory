function hover(element){
    element.classList.add("active");
}

function hoverOff(element){
    element.classList.remove("active");
}

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

function formUpdate(x) {
    if (x.matches) { // If media query matches
        var tmp = document.getElementsByClassName('label-content');
        tmp[0].title = "Numéro de téléphone de l'enfant *";
        tmp[1].title = "Numéro de carte Simplicité *";
        document.getElementById('facultatif-phone-content').style.display = 'block';
    } else {
        var tmp = document.getElementsByClassName('label-content');
        tmp[0].title = "Numéro de téléphone de l'enfant (facultatif)";
        tmp[1].title = "Numéro de carte Simplicité (facultatif)";
        document.getElementById('facultatif-phone-content').style.display = 'none';
    }
}

var x = window.matchMedia("(max-width: 500px)")
formUpdate(x) // Call listener function at run time
x.addListener(formUpdate) // Attach listener function on state changes