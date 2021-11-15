<?php
require_once "php/main.php";
?>

<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
	<title>
		<?php
		print $translation["t01"];
		?>
	</title>

	<link rel="shortcut icon" href="assets/icons/windows.ico" type="image/x-icon">
	<link rel="stylesheet" href="css/compiled/index.css">
	<script src="script/alertify.js"></script>
	<script src="script/anime-3.2.1.min.js"></script>
	<script defer src="script/index.js"></script>

</head>

<body>
	<header>
		<div class="header-title">
			<figure>
				<img src="assets/icons/windows.png" alt="Windows icon">
			</figure>

			<h1>
				<?php print $translation["t01"]; ?>
			</h1>
		</div>
		<div class="header-menu">
			<button title="menu">
				<!-- Boton de menú -->&#x2261;
			</button>
		</div>
	</header>

	<main>

		<div class="table-container">
			<table>
				<thead>
					<tr>
						<td colspan="2">Atajos universales (funcionan siempre)</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="table-info-command">Impr Pant</td>
						<td>Copia al portapapeles una captura de la pantalla completa</td>
					</tr>
					<tr>
						<td>Alt+Tab</td>
						<td>Seleccionar entre ventanas abiertas</td>
					</tr>
					<tr>
						<td>Ctrl+Alt+Tab</td>
						<td>Miniatura de ventanas abiertas</td>
					</tr>
					<tr>
						<td>Ctrl+Tab</td>
						<td>Alternar pestañas de ventana activa</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+.</td>
						<td>Insertar emoticones</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+A</td>
						<td>Panel de notificaciones</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+Abajo</td>
						<td>Minimizar ventana/tamaño de ventana</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+Arriba</td>
						<td>Maximizar ventana activa</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+B</td>
						<td>Lado izquierdo de barra de tareas</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+D</td>
						<td>Ver escritorio</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+Derecha</td>
						<td>Ventana ocupa lado derecho</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+E</td>
						<td>Abrir explorador de archivos</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+Espacio</td>
						<td>Seleccionar idioma entre configurados</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+F</td>
						<td>Abrir herramienta para buscar</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+I</td>
						<td>Abrir configuraciones</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+Izquierda</td>
						<td>Ventana ocupa lado izquierdo</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+K</td>
						<td>Abrir “Conectar”</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+L</td>
						<td>Bloquear equipo</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+M</td>
						<td>
							Minimizar todas las ventanas
						</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+P</td>
						<td>
							Proyectar ventana a otros dispositivos
						</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+R</td>
						<td>
							Abrir “Ejecutar”
						</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+T</td>
						<td>
							Lado derecho de barra de tareas
						</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+Tab</td>
						<td>
							Navegar entre escritorios
						</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+W</td>
						<td>
							Área de Windows Inkspace
						</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+X</td>
						<td>
							Abrir menú sobre el botón de inicio
						</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+Mayus+S</td>
						<td>
							Capturar zona de la pantalla
						</td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+Impr Pant</td>
						<td>
							Guardar captura de pantalla completa
						</td>
					</tr>

				</tbody>
			</table>

		</div>

		<div class="table-container">
			<table>
				<thead>
					<tr>
						<td colspan="2">En el explorador de archivos</td>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Alt+Arriba</td>
						<td>Subir un nivel en la jerarquía del orden de las carpetas</td>
					</tr>
					<tr>
						<td>Alt+Derecha/Alt+izquierda</td>
						<td>Atrás o adelante en la historia de visitados</td>
					</tr>
					<tr>
						<td>Alt+DobleClic</td>
						<td>Ver propiedades del archivo</td>
					</tr>
					<tr>
						<td>Alt+Enter </td>
						<td>Propiedades del archivo seleccionado</td>
					</tr>
					<tr>
						<td>Borrar (Del)</td>
						<td>Ir atrás</td>
					</tr>
					<tr>
						<td>Copiando un archivo</td>
						<td> mantener presionado CTRL mientras se arrastra el archivo a otra carpeta</td>
					</tr>
					<tr>
						<td>Crear acceso directo</td>
						<td>CTR+MAYUS presionado mientras se arrastra hacia el destino</td>
					</tr>
					<tr>
						<td>Ctrl+E</td>
						<td>Seleccionar todo</td>
					</tr>
					<tr>
						<td>Ctrl+Shift+N</td>
						<td>Crear nueva carpeta</td>
					</tr>
					<tr>
						<td>F2</td>
						<td>Renombrar archivo seleccionado</td>
					</tr>
					<tr>
						<td>F3</td>
						<td>Buscar en la carpeta actual y en las subcarpetas</td>
					</tr>
					<tr>
						<td>F4/Alt+D</td>
						<td>Ingresar dirección en la barra superior</td>
					</tr>
					<tr>
						<td>Shift / Alt Shift</td>
						<td>Navegar entre secciones del programa</td>
					</tr>
				</tbody>
			</table>
		</div>


	</main>

	<footer>
		<p>Desarrollado por <a href="https://github.com/XitusDev" target="_blank" rel="noopener noreferrer">XitusDev</a> &copy;2021</p>
		<p>Ir al <a href="http://" target="_blank" rel="noopener noreferrer">Respositorio del proyecto</a></p>
	</footer>
</body>

</html>