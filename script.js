function displayAbout() {
    var arrow = document.getElementById('animation')
    arrow.classList.toggle('rotate');
    document.getElementById("animation").classList.remove('fa-plus-circle');
    document.getElementById("animation").classList.add('fa-minus-circle');
    var display = document.getElementById('about')
    display.classList.toggle('active');

    var displayValue = document.getElementById("about").className;
    console.log(displayValue);

    if (displayValue != 'active') {  
        document.getElementById("animation").classList.remove('fa-minus-circle');
        document.getElementById("animation").classList.add('fa-plus-circle');
    }
}