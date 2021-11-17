/* Contribute URL */
const contributeURL:string="https://www.paypal.com/donate/?hosted_button_id=WSB5A7M64PD34";

/* Available Languages */
const availLang: string[] = ["eng", "es"];

/* URL for fetch to return the translations */
const languageUrl: string[] = [
	window.location.href + "lang/eng.json",
	window.location.href + "lang/spa.json",
];
/* 
	localStorage.lang,
	localStorage.bigfont,
	localStorage.contrast
 */

const alertsSpa: {
	copyerrorspa: string;
	copyerroreng: string;
	copysuccessspa: string;
	copysuccesseng: string;
} = {
	copyerrorspa: "",
	copyerroreng: "",
	copysuccessspa: "",
	copysuccesseng: "",
};

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

/* All the Buttons */
const documentButtons: {
	openMenu: HTMLButtonElement;
	menuDisplay: HTMLElement;
	closeMenu: HTMLButtonElement;
	downloadBtn:HTMLButtonElement;
	shareBtn: HTMLElement;
	darkThemeSwitch: HTMLElement;
	bigFontSwitch: HTMLElement;
	highContrastSwitch: HTMLElement;
	langEnglish: HTMLElement;
	langSpanish: HTMLElement;
} = {
	openMenu: <HTMLButtonElement>document.querySelector("#openMenu"),
	menuDisplay: <HTMLElement>document.querySelector("#menu-priorization"),
	closeMenu: <HTMLButtonElement>document.querySelector("#menu-close-btn"),
	downloadBtn:<HTMLButtonElement>document.querySelector("a[download]"),
	shareBtn: <HTMLElement>document.querySelector("#share-text-element"),
	darkThemeSwitch: <HTMLElement>document.querySelector("#dark-theme-switch"),
	bigFontSwitch: <HTMLElement>document.querySelector("#big-font-switch"),
	highContrastSwitch: <HTMLElement>(document.querySelector("#high-contrast-switch")),
	langEnglish: <HTMLElement>document.querySelector("#lang-eng-button"),
	langSpanish: <HTMLElement>document.querySelector("#lang-spa-button"),
};

documentButtons.openMenu.addEventListener("click", openMenu, false);
documentButtons.closeMenu.addEventListener("click", closeMenu, false);
documentButtons.downloadBtn.addEventListener("click",downloadDocument,false)
documentButtons.shareBtn.addEventListener("click", shareEvent, false);
documentButtons.bigFontSwitch.addEventListener("click", switchBigFont, false);
documentButtons.highContrastSwitch.addEventListener(
	"click",
	contrastSwitch,
	false
);
window.addEventListener(
	"keyup",
	(e: KeyboardEvent) => {
		if (e.key == "Escape") closeMenu();
	},
	false
);

documentButtons.langEnglish.addEventListener(
	"click",
	() => {
		if (localStorage.lang != availLang[0]) {
			setLang(availLang[0]);
			settingActualLang()
			innerText()
		}
	},
	false
	);
	
	documentButtons.langSpanish.addEventListener(
		"click",
		() => {
			if (localStorage.lang != availLang[1]) {
				setLang(availLang[1]);
				settingActualLang()
				innerText()
		}
	},
	false
);

function openMenu() {
	documentButtons.menuDisplay.style.display = "grid";
	anime({
		targets: "#menu-priorization",
		duration: 500,
		opacity: ["0", "1"],
		easing: "easeInOutQuad",
	});
}

function closeMenu() {
	anime({
		targets: "#menu-priorization",
		duration: 500,
		opacity: ["1", "0"],
		easing: "easeInOutQuad",
		complete: function () {
			documentButtons.menuDisplay.style.display = "none";
		},
	});
}

/* ******************************* */
/* Logic fot the translation inner */
/* ******************************* */

/* Localstorage for the configured language and call to inner the text */

if (!localStorage.lang) {
	setLangAuto();
	innerText();
	settingActualLang();
} else {
	innerText();
	settingActualLang();
}

/* Call it to set the new language */
function setLang(newlang: string): void {
	localStorage.lang = newlang;
	let temp = <HTMLHtmlElement>document.querySelector("html");

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
	if (navigator.languages[0].includes(availLang[1])) {
		setLang(availLang[1]);
		alertify.message("Puedes cambiarlo en configuraciones");
		alertify.message("Idioma configurado automaticamente");
	} else {
		setLang(availLang[0]);
		alertify.message("You can change it on Settings");
		alertify.message("Language set automatically");
	}
}

function settingActualLang() {
	let elements:HTMLButtonElement[]
	elements=Array.from(document.querySelectorAll(".lang-option"))
	elements.forEach(elm=>{
		elm.classList.remove("lang-option-active");
	})
	if (localStorage.lang == availLang[0]) {
		documentButtons.langEnglish.classList.add("lang-option-active");
	}
	if (localStorage.lang == availLang[1]) {
		documentButtons.langSpanish.classList.add("lang-option-active");
	}
}

/* To call the translations and inner the document with the corresponding translation */
function innerText() {
	let urlFetch: string = "";
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
	.then((jsonResult: JSON) => {
		let elements: HTMLSpanElement[] = Array.from(
			document.querySelectorAll("[data-text]")
		);

		elements.forEach((elm: HTMLSpanElement) => {
			
			elm.innerHTML = jsonResult[elm.dataset.text];
		});

		anime({
			targets:".table-container",
			opacity:["0","1"],
			duration: 10000
		})
	});
}

function shareEvent() {
	let titleElm: HTMLElement = <HTMLElement>document.head.querySelector("title");
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
	} else {
		let copyText: string = `${titleElm.innerText} *** ${window.location.href}`;
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
	} else {
		if (localStorage.bigfont == "true") {
			localStorage.bigfont = "false";
			removeBigFont();
		}
	}
}

function applyBigFont(): void {
	documentButtons.bigFontSwitch.classList.add("switch-active");

	let arrayTodos: HTMLElement[];
	arrayTodos = Array.from(document.querySelectorAll("*"));
	arrayTodos.forEach((elm) => {
		elm.dataset.initialfont = getComputedStyle(elm).fontSize;
	});
	arrayTodos.forEach((elm) => {
		elm.style.fontSize = `calc(${elm.dataset.initialfont} + 5px)`;
	});
}

function removeBigFont(): void {
	let arrayTodos: HTMLElement[];
	arrayTodos = Array.from(document.querySelectorAll("*"));
	arrayTodos.forEach((elm: any) => {
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
	} else {
		if (localStorage.contrast == "true") {
			localStorage.contrast = "false";
			location.reload();
		}
	}
}

function applyContrast() {
	let arrayTodos: HTMLElement[];
	arrayTodos = Array.from(document.querySelectorAll("td,p,[data-text]"));
	arrayTodos.forEach((elm) => {
		elm.style.backgroundColor = "#232323";
		elm.style.color = "#d7d70f";
	});
	documentButtons.highContrastSwitch.classList.add("switch-active");
}

function removeContrast() {
}


function downloadDocument(){
	if(localStorage.lang==availLang[0]){
		alertify.message("The download is starting ...")
	}
	if(localStorage.lang==availLang[1]){
		alertify.message("La descarga está iniciando ...")
	}
}

let contributeElements:HTMLAnchorElement[];
contributeElements=Array.from(document.querySelectorAll(".contribute"))
contributeElements.forEach(elm=>{
	elm.setAttribute("href",contributeURL);
})


