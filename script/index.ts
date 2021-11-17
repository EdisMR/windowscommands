/* Available Languages */
const availLang:string[]=[
	"eng",
	"es",
]

/* URL for fetch to return the translations */
const languageUrl:string[]=[
	window.location.href+"lang/eng.json",
	window.location.href+"lang/spa.json",
]

/* 
	localStorage.lang,
	localStorage.bigfont,
	localStorage.contrast
 */


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
documentButtons.shareBtn.addEventListener("click",shareEvent,false)
documentButtons.bigFontSwitch.addEventListener("click",switchBigFont,false)
documentButtons.highContrastSwitch.addEventListener("click",contrastSwitch,false)


documentButtons.langEnglish.addEventListener("click",()=>{
	if(localStorage.lang!=availLang[0]){
		setLang(availLang[0])
		location.reload()
	}
},false)

documentButtons.langSpanish.addEventListener("click",()=>{
	if(localStorage.lang!=availLang[1]){
		setLang(availLang[1])
		location.reload()
	}
},false)

function openMenu(){
	documentButtons.menuDisplay.style.display="grid";
}

function closeMenu(){
	documentButtons.menuDisplay.style.display="none";
}

openMenu();


/* ******************************* */
/* Logic fot the translation inner */
/* ******************************* */

/* Localstorage for the configured language and call to inner the text */
if (!localStorage.lang){
	setLangAuto()
	innerText()
	settingActualLang()
}else{
	innerText()
	settingActualLang()
}

/* Call it to set the new language */
function setLang(newlang:string):void{
	localStorage.lang=newlang;
	let temp=<HTMLHtmlElement>document.querySelector("html");

	if(newlang==availLang[0]){
		temp.setAttribute("lang","en")
	}
	
	if(newlang==availLang[1]){
		temp.setAttribute("lang","es")
	}
}

/* Call it to set the language automatically */
/* If not english or spanish, set it to english */
function setLangAuto(){
	if(navigator.languages[0].includes(availLang[0])){
		setLang(availLang[0])
	}else{
		if(navigator.languages[0].includes(availLang[1])){
			setLang(availLang[1])
		}else{
			setLang(availLang[0])
		}
	}
}


function settingActualLang(){
	if(localStorage.lang==availLang[0]){
		documentButtons.langEnglish.classList.add("lang-option-active")
	}
	if(localStorage.lang==availLang[1]){
		documentButtons.langSpanish.classList.add("lang-option-active")
	}

}




/* To call the translations and inner the document with the corresponding translation */
function innerText(){
	let urlFetch:string=""
	if(localStorage.lang==availLang[0]){
		urlFetch=languageUrl[0]
	}
	if(localStorage.lang==availLang[1]){
		urlFetch=languageUrl[1]
	}

	fetch(urlFetch)
	.then(result=>{
		return result.text()
	})
	.then(result=>{
		return JSON.parse(result)
	})
	.then((jsonResult:JSON)=>{

		let elements:HTMLSpanElement[]=Array.from(document.querySelectorAll("[data-text]"));

		elements.forEach((elm:HTMLSpanElement)=>{
			elm.innerHTML=jsonResult[elm.dataset.text];
		})

	})

}







function shareEvent(){
	let titleElm:HTMLElement=<HTMLElement>document.head.querySelector("title")
	if(navigator.userAgentData.mobile){
		window.navigator.share({
			url: window.location.href,
			text: titleElm.innerText,
			title: titleElm.innerText,
		})
		.catch(
			(e) => { 
				alert("No fue posible")
			}
			)
		}else{
			let copyText:string=`${titleElm.innerText} *** ${window.location.href}`
			window.navigator.clipboard.writeText(copyText)
			.then(() => {
			})
	}
}


if(localStorage.bigfont!="true" && localStorage.bigfont!="false"){
	localStorage.bigfont="false";
}
if(localStorage.bigfont=="true"){
	applyBigFont()
}
if(localStorage.bigfont=="false"){
	removeBigFont()
}


function switchBigFont(){
	if(localStorage.bigfont=="false"){
		localStorage.bigfont="true"
		applyBigFont()
	}else{
		if(localStorage.bigfont=="true"){
			localStorage.bigfont="false"
			removeBigFont()
		}
	}

}


function applyBigFont():void{
	let arrayTodos:HTMLElement[]
	arrayTodos=Array.from(document.querySelectorAll("*"));
	arrayTodos.forEach(elm=>{
		elm.dataset.initialfont=getComputedStyle(elm).fontSize
	})
	arrayTodos.forEach(elm=>{
		elm.style.fontSize=`calc(${elm.dataset.initialfont} + 5px)`
	})
	documentButtons.bigFontSwitch.classList.add("switch-active")
}

function removeBigFont():void{
	let arrayTodos:HTMLElement[]
	arrayTodos=Array.from(document.querySelectorAll("*"));
	arrayTodos.forEach((elm:any) => {
		elm.style.fontSize=elm.dataset.initialfont
		elm.removeAttribute("data-initialfont");
	})
	documentButtons.bigFontSwitch.classList.remove("switch-active")
}




if(localStorage.contrast!="true" && localStorage.contrast!="false"){
	localStorage.contrast="false";
}
if(localStorage.contrast=="true"){
	applyContrast()
}
if(localStorage.contrast=="false"){
	removeContrast()
}

function contrastSwitch(){
	if(localStorage.contrast=="false"){
		localStorage.contrast="true"
		applyContrast()
	}else{
		if(localStorage.contrast=="true"){
			localStorage.contrast="false"
			removeContrast()
			location.reload()
		}
	}
}

function applyContrast(){

	let arrayTodos:HTMLElement[]
	arrayTodos=Array.from(document.querySelectorAll("[data-text"));
	arrayTodos.forEach(elm=>{
		elm.style.backgroundColor="black"
		elm.style.color="yellow"
	})
	documentButtons.highContrastSwitch.classList.add("switch-active")

}

function removeContrast(){
	let arrayTodos:HTMLElement[]
	arrayTodos=Array.from(document.querySelectorAll("[data-text"));
	arrayTodos.forEach(elm=>{
		elm.style.backgroundColor="auto"
		elm.style.color="auto"
	})
	/* documentButtons.highContrastSwitch.classList.remove("switch-active") */
}