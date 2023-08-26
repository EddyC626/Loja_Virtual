var img_index = 0;

var btn = document.querySelectorAll(".produto button");
var btn_comprar = document.querySelectorAll("#btn-comprar");
var img = document.querySelectorAll(".descricao img");
var item = document.querySelectorAll("li");

if (screen.availWidth >= 768) {
    for (var i = 0; i < img.length; i++) {
        img[i].addEventListener("mouseover", function (evento) {
            var img_clicada = evento.target;
            img_index = Array.from(img).indexOf(img_clicada);
            console.log("Clicado");

            
            for (var j = 0; j < btn_comprar.length; j++) {
                btn_comprar[img_index].classList.remove("hide-btn");
            }  
        });

        for (var k = 0; k < btn.length; k++) {
            btn[k].addEventListener("click", function () {
                alert("Clicado: " + img_index);
                console.log(img_index);
            });
        }
        
        btn_comprar[i].addEventListener("mouseout", funcao1);
    }

    function funcao1() {
        for (var j = 0; j < btn_comprar.length; j++) {
            btn_comprar[j].classList.add("hide-btn");
        }
    }
}
if (screen.availWidth < 768) {
    var btn_menu = document.querySelector(".btn-menu");
    var btn_close = document.querySelector(".btn-close");
    var menu = document.querySelector("#menu")
    btn_menu.addEventListener("click",mostrar_menu);
    btn_close.addEventListener("click", fechar_menu);

    function mostrar_menu(){
        menu.classList.remove("hide-menu");
}
    function fechar_menu(){
        menu.classList.add("hide-menu")
    }
}
