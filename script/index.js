"use strict";
const contributeURL = "https://www.paypal.com/donate/?hosted_button_id=WSB5A7M64PD34";
const availLang = ["eng", "es"];
const languageUrl = [
    window.location.href + "lang/eng.json",
    window.location.href + "lang/spa.json",
];
const alerts = {
    copyerror: {
        0: "Task failed",
        1: "Ha fallado la tarea",
    },
    copysuccess: {
        0: "Copied to clipboard",
        1: "Copiado al portapapeles",
    },
    shareerror: {
        0: "Failed to share",
        1: "Error al compartir",
    },
    sharesuccess: {
        0: "",
        1: "",
    },
};
alertify.set("notifier", "position", "top-center");
const documentButtons = {
    openMenu: document.querySelector("#openMenu"),
    menuDisplay: document.querySelector("#menu-priorization"),
    closeMenu: document.querySelector("#menu-close-btn"),
    downloadBtn: document.querySelector("a[download]"),
    shareBtn: document.querySelector("#share-text-element"),
    darkThemeSwitch: document.querySelector("#dark-theme-switch"),
    bigFontSwitch: document.querySelector("#big-font-switch"),
    highContrastSwitch: (document.querySelector("#high-contrast-switch")),
    langEnglish: document.querySelector("#lang-eng-button"),
    langSpanish: document.querySelector("#lang-spa-button"),
    menuContainer: document.querySelector(".menu-container")
};
documentButtons.openMenu.addEventListener("click", openMenu, false);
documentButtons.closeMenu.addEventListener("click", closeMenu, false);
documentButtons.downloadBtn.addEventListener("click", downloadDocument, false);
documentButtons.shareBtn.addEventListener("click", shareEvent, false);
documentButtons.bigFontSwitch.addEventListener("click", switchBigFont, false);
documentButtons.highContrastSwitch.addEventListener("click", contrastSwitch, false);
let menuAnimation = gsap.from(documentButtons.menuContainer, {
    paused: true,
    y: -500,
    opacity: 0,
    rotationY: 90,
    onStart: function () {
        documentButtons.menuDisplay.style.visibility = "visible";
    },
    onReverseComplete: function () {
        documentButtons.menuDisplay.style.visibility = "hidden";
    }
});
window.addEventListener("keyup", (e) => {
    if (e.key == "Escape")
        closeMenu();
}, false);
documentButtons.langEnglish.addEventListener("click", () => {
    if (localStorage.lang != availLang[0]) {
        setLang(availLang[0]);
        settingActualLang();
        innerText();
    }
}, false);
documentButtons.langSpanish.addEventListener("click", () => {
    if (localStorage.lang != availLang[1]) {
        setLang(availLang[1]);
        settingActualLang();
        innerText();
    }
}, false);
function openMenu() {
    menuAnimation.play();
}
function closeMenu() {
    menuAnimation.reverse();
}
if (!localStorage.lang) {
    setLangAuto();
}
innerText();
settingActualLang();
function setLang(newlang) {
    localStorage.lang = newlang;
    let temp = document.querySelector("html");
    if (newlang == availLang[0]) {
        temp.setAttribute("lang", "en");
    }
    if (newlang == availLang[1]) {
        temp.setAttribute("lang", "es");
    }
}
function setLangAuto() {
    if (navigator.languages[0].includes(availLang[1])) {
        setLang(availLang[1]);
        alertify.message("Puedes cambiarlo en configuraciones");
        alertify.message("Idioma configurado automaticamente");
    }
    else {
        setLang(availLang[0]);
        alertify.message("You can change it on Settings");
        alertify.message("Language set automatically");
    }
}
function settingActualLang() {
    let elements;
    elements = Array.from(document.querySelectorAll(".lang-option"));
    elements.forEach(elm => {
        elm.classList.remove("lang-option-active");
    });
    if (localStorage.lang == availLang[0]) {
        documentButtons.langEnglish.classList.add("lang-option-active");
    }
    if (localStorage.lang == availLang[1]) {
        documentButtons.langSpanish.classList.add("lang-option-active");
    }
}
function innerText() {
    let urlFetch = "";
    let animateElements = Array.from(document.querySelectorAll(".table-container,.language-options,.settings-options,.menu-share-options,.menu-title-text,h1"));
    animateElements.forEach(elm => {
        elm.style.opacity = "0";
    });
    if (localStorage.lang == availLang[0]) {
        urlFetch = languageUrl[0];
    }
    if (localStorage.lang == availLang[1]) {
        urlFetch = languageUrl[1];
    }
    fetch(urlFetch)
        .then((result) => {
        return result.text();
    })
        .then((result) => {
        return JSON.parse(result);
    })
        .then((jsonResult) => {
        let elements = Array.from(document.querySelectorAll("[data-text]"));
        elements.forEach((elm) => {
            elm.innerHTML = jsonResult[elm.dataset.text];
        });
        gsap.to(animateElements, {
            opacity: 1,
            duration: .5,
            delay: .5
        });
    });
}
function shareEvent() {
    let titleElm = document.head.querySelector("title");
    if (navigator.userAgentData.mobile) {
        window.navigator
            .share({
            url: window.location.href,
            text: titleElm.innerText,
            title: titleElm.innerText,
        })
            .catch((e) => {
            if (localStorage.lang == availLang[0]) {
                alertify.error(alerts.shareerror[0]);
            }
            if (localStorage.lang == availLang[1]) {
                alertify.error(alerts.shareerror[1]);
            }
        });
    }
    else {
        let copyText = `${titleElm.innerText} *** ${window.location.href}`;
        window.navigator.clipboard
            .writeText(copyText)
            .then(() => {
            if (localStorage.lang == availLang[0]) {
                alertify.success(alerts.copysuccess[0]);
            }
            if (localStorage.lang == availLang[1]) {
                alertify.success(alerts.copysuccess[1]);
            }
        })
            .catch((e) => {
            if (localStorage.lang == availLang[0]) {
                alertify.error(alerts.copyerror[0]);
            }
            if (localStorage.lang == availLang[1]) {
                alertify.error(alerts.copyerror[1]);
            }
        });
    }
}
if (localStorage.bigfont != "true" && localStorage.bigfont != "false") {
    localStorage.bigfont = "false";
}
if (localStorage.bigfont == "true") {
    applyBigFont();
}
if (localStorage.bigfont == "false") {
    removeBigFont();
}
function switchBigFont() {
    if (localStorage.bigfont == "false") {
        localStorage.bigfont = "true";
        applyBigFont();
    }
    else {
        if (localStorage.bigfont == "true") {
            localStorage.bigfont = "false";
            removeBigFont();
        }
    }
}
function applyBigFont() {
    documentButtons.bigFontSwitch.classList.add("switch-active");
    let arrayTodos;
    arrayTodos = Array.from(document.querySelectorAll("*"));
    arrayTodos.forEach((elm) => {
        elm.dataset.initialfont = getComputedStyle(elm).fontSize;
    });
    arrayTodos.forEach((elm) => {
        elm.style.fontSize = `calc(${elm.dataset.initialfont} + 5px)`;
    });
}
function removeBigFont() {
    let arrayTodos;
    arrayTodos = Array.from(document.querySelectorAll("*"));
    arrayTodos.forEach((elm) => {
        elm.style.fontSize = elm.dataset.initialfont;
        elm.removeAttribute("data-initialfont");
    });
    documentButtons.bigFontSwitch.classList.remove("switch-active");
}
if (localStorage.contrast != "true" && localStorage.contrast != "false") {
    localStorage.contrast = "false";
}
if (localStorage.contrast == "true") {
    applyContrast();
}
if (localStorage.contrast == "false") {
    removeContrast();
}
function contrastSwitch() {
    if (localStorage.contrast == "false") {
        localStorage.contrast = "true";
        applyContrast();
    }
    else {
        if (localStorage.contrast == "true") {
            localStorage.contrast = "false";
            removeContrast();
        }
    }
}
function applyContrast() {
    let arrayTodos;
    arrayTodos = Array.from(document.querySelectorAll("td,p,[data-text]"));
    arrayTodos.forEach((elm) => {
        elm.classList.add("highContrast");
    });
    documentButtons.highContrastSwitch.classList.add("switch-active");
}
function removeContrast() {
    let arrayTodos;
    arrayTodos = Array.from(document.querySelectorAll("td,p,[data-text]"));
    arrayTodos.forEach((elm) => {
        elm.classList.remove("highContrast");
    });
    documentButtons.highContrastSwitch.classList.remove("switch-active");
}
function downloadDocument() {
    if (localStorage.lang == availLang[0]) {
        alertify.message("The download is starting ...");
    }
    if (localStorage.lang == availLang[1]) {
        alertify.message("La descarga está iniciando ...");
    }
}
let contributeElements;
contributeElements = Array.from(document.querySelectorAll(".contribute"));
contributeElements.forEach(elm => {
    elm.setAttribute("href", contributeURL);
});
gsap.timeline({
    delay: 10,
    duration: 2
})
    .to(".header-menu", {
    rotationY: 80,
})
    .to(".header-menu", {
    rotationY: 0,
});
let imagess = Array.from(document.images);
imagess.forEach(elm => {
    elm.addEventListener("contextmenu", (e) => { e.preventDefault(); });
});
