const availLang:string[]=[
	"eng",
	"es",
]

function setLang(newlang:string):void{
	let anio:Date=new Date();
	document.cookie =`lang=${newlang};expires=Thu, 18 Dec ${anio.getFullYear()+1} 12:00:00 UTC; path=/`
}