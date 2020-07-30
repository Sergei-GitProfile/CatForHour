// Всплывающая форма Обратный звонок


var open = document.querySelector (".cat_menu--item--call");
var close = document.querySelector (".call_close");
var wind = document.querySelector(".window_call");


open.addEventListener("click", function(evt) {
    evt.preventDefault();
    wind.classList.add("form_opened");
    document.getElementById('grey_back').style.display = 'block'
});



close.addEventListener("click", function(evt) {
    evt.preventDefault();
    wind.classList.remove("form_opened");
    document.getElementById('grey_back').style.display = 'none'
});



// Мобильное меню

var mobBut = document.querySelector (".but_menu");
var catMenu = document.querySelector (".cat_menu");
var catCall = document.querySelector (".cat_menu--item--call");
var mobClose = document.querySelector (".mob_close");



mobBut.addEventListener("click", function(evt) {
    evt.preventDefault();
    catMenu.classList.add("mob_menu--open");

    mobClose.classList.add("block_menu");

    document.querySelector (".we").classList.add("block_menu");
    document.querySelector (".services").classList.add("block_menu");
    document.querySelector (".certificates").classList.add("block_menu");
    document.querySelector (".rent").classList.add("block_menu");
    document.querySelector (".photo").classList.add("block_menu");
    document.querySelector (".contacts").classList.add("block_menu");


});



mobClose.addEventListener("click", function(evt) {
    catMenu.classList.remove("mob_menu--open");

    mobBut.style.order = "-2";

    mobClose.classList.remove("block_menu");

    document.querySelector (".we").classList.remove("block_menu");
    document.querySelector (".services").classList.remove("block_menu");
    document.querySelector (".certificates").classList.remove("block_menu");
    document.querySelector (".rent").classList.remove("block_menu");
    document.querySelector (".photo").classList.remove("block_menu");
    document.querySelector (".contacts").classList.remove("block_menu");



});







// Закрытие вспл. окон по Esc


document.body.addEventListener('keyup', function (e) {
    var key = e.keyCode;

    if (key == 27) {
        document.querySelector('.window_call').classList.remove('form_opened');
        document.getElementById('grey_back').style.display = 'none'
    };
}, false);



