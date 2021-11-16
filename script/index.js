"use strict";
/* Available Languages */
var availLang = [
    "eng",
    "es",
];
/* All the Buttons */
var documentButtons = {
    openMenu: document.querySelector("#openMenu"),
    menuDisplay: document.querySelector("#menu-priorization"),
    closeMenu: document.querySelector("#menu-close-btn"),
    shareBtn: document.querySelector("#share-text-element"),
    darkThemeSwitch: document.querySelector("#dark-theme-switch"),
    bigFontSwitch: document.querySelector("#big-font-switch"),
    highContrastSwitch: document.querySelector("#high-contrast-switch"),
    langEnglish: document.querySelector("#lang-eng-button"),
    langSpanish: document.querySelector("#lang-spa-button"),
};
documentButtons.openMenu.addEventListener("click", openMenu, false);
documentButtons.closeMenu.addEventListener("click", closeMenu, false);
function setLang(newlang) {
    var anio = new Date();
    document.cookie = "lang=" + newlang + ";expires=Thu, 18 Dec " + (anio.getFullYear() + 1) + " 12:00:00 UTC; path=/";
}
function openMenu() {
    documentButtons.menuDisplay.style.display = "grid";
}
function closeMenu() {
    documentButtons.menuDisplay.style.display = "none";
}
openMenu();
