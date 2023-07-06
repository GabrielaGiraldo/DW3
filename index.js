const testimonios = document.querySelectorAll(".test")

var ac = 0
function actualizar(transitions) {
    testimonios.forEach((element, index) => {
        element.style.transform = "translate("+ ( (index - ac) * 150) +"vw ,"+ (index * -400) +"px)"
        if (transitions == true) element.style.transition = "transform 1s"
    })
    ac += 1
    if (ac >= testimonios.length) ac = 0
}
actualizar(false)

setInterval(() => {
    actualizar(true);
}, 2000)