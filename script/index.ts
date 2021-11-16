/* Available Languages */
const availLang:string[]=[
	"eng",
	"es",
]

/* All the Buttons */
const documentButtons:{
	openMenu:HTMLButtonElement
	menuDisplay:HTMLElement
	closeMenu:HTMLButtonElement
	shareBtn:HTMLElement
	darkThemeSwitch:HTMLElement
	bigFontSwitch:HTMLElement
	highContrastSwitch:HTMLElement
	langEnglish:HTMLElement
	langSpanish:HTMLElement
}={
	openMenu:<HTMLButtonElement>document.querySelector("#openMenu"),
	menuDisplay:<HTMLElement>document.querySelector("#menu-priorization"),
	closeMenu:<HTMLButtonElement>document.querySelector("#menu-close-btn"),
	shareBtn:<HTMLElement>document.querySelector("#share-text-element"),
	darkThemeSwitch:<HTMLElement>document.querySelector("#dark-theme-switch"),
	bigFontSwitch:<HTMLElement>document.querySelector("#big-font-switch"),
	highContrastSwitch:<HTMLElement>document.querySelector("#high-contrast-switch"),
	langEnglish:<HTMLElement>document.querySelector("#lang-eng-button"),
	langSpanish:<HTMLElement>document.querySelector("#lang-spa-button"),
}

documentButtons.openMenu.addEventListener("click",openMenu,false)
documentButtons.closeMenu.addEventListener("click",closeMenu,false)

function setLang(newlang:string):void{
	let anio:Date=new Date();
	document.cookie =`lang=${newlang};expires=Thu, 18 Dec ${anio.getFullYear()+1} 12:00:00 UTC; path=/`
}

function openMenu(){
	documentButtons.menuDisplay.style.display="grid";
}

function closeMenu(){
	documentButtons.menuDisplay.style.display="none";
}

openMenu();