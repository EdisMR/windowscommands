<?php
/* Declaraciones de variables */

/* Para guardar el valor de la coockie lang */
$lang;

/* Idiomas disponibles */
$availTranslations=[
	"eng",
	"es"
];


/* Determinar valor de la coockie */
if( isset( $_COOKIE['lang']) ){
	$lang=$_COOKIE['lang'];
}else{
	setcookie(
		"lang", $availTranslations[0],
		time() + (10 * 365 * 24 * 60 * 60),/* 10 años */
		"/");
};


/* Traer traducciones */
if ($lang==$availTranslations[0]){
	require "lang/eng.php";
}
if ($lang==$availTranslations[1]){
	require "lang/spa.php";
}

?>