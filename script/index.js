"use strict";
var availLang = [
    "eng",
    "es",
];
function setLang(newlang) {
    var anio = new Date();
    document.cookie = "lang=" + newlang + ";expires=Thu, 18 Dec " + (anio.getFullYear() + 1) + " 12:00:00 UTC; path=/";
}
