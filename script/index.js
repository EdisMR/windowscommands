"use strict";
/* Available Languages */
var availLang = [
    "eng",
    "es",
];
/* URL for fetch to return the translations */
var languageUrl = [
    window.location.href + "lang/eng.json",
    window.location.href + "lang/spa.json",
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
function openMenu() {
    documentButtons.menuDisplay.style.display = "grid";
}
function closeMenu() {
    documentButtons.menuDisplay.style.display = "none";
}
openMenu();
/* ******************************* */
/* Logic fot the translation inner */
/* ******************************* */
/* Localstorage for the configured language and call to inner the text */
if (!localStorage.lang) {
    setLangAuto();
    innerText();
}
else {
    innerText();
}
/* Call it to set the new language */
function setLang(newlang) {
    localStorage.lang = newlang;
    var temp = document.querySelector("html");
    if (newlang == availLang[0]) {
        temp.setAttribute("lang", "en");
    }
    if (newlang == availLang[1]) {
        temp.setAttribute("lang", "es");
    }
}
/* Call it to set the language automatically */
/* If not english or spanish, set it to english */
function setLangAuto() {
    if (navigator.languages[0].includes(availLang[0])) {
        setLang(availLang[0]);
    }
    else {
        if (navigator.languages[0].includes(availLang[1])) {
            setLang(availLang[1]);
        }
        else {
            setLang(availLang[0]);
        }
    }
}
/* To call the translations and inner the document with the corresponding translation */
function innerText() {
    var urlFetch = "";
    if (localStorage.lang == availLang[0]) {
        urlFetch = languageUrl[0];
    }
    if (localStorage.lang == availLang[1]) {
        urlFetch = languageUrl[1];
    }
    fetch(urlFetch)
        .then(function (result) {
        return result.text();
    })
        .then(function (result) {
        return JSON.parse(result);
    })
        .then(function (jsonResult) {
        var elements = Array.from(document.querySelectorAll("[data-text]"));
        elements.forEach(function (elm) {
            elm.innerHTML = jsonResult[elm.dataset.text];
        });
    });
}
