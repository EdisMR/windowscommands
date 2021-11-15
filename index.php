<?php
require_once "php/main.php";
?>

<!DOCTYPE html>
<html lang=<?php print $translation["t00"];?>>

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
						<td colspan="2"><?php print $translation["t02"]; ?></td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="table-info-command">Impr Pant</td>
						<td><?php print $translation["t03"]; ?></td>
					</tr>
					<tr>
						<td>Alt+Tab</td>
						<td><?php print $translation["t04"]; ?></td>
					</tr>
					<tr>
						<td>Ctrl+Alt+Tab</td>
						<td><?php print $translation["t05"]; ?></td>
					</tr>
					<tr>
						<td>Ctrl+Tab</td>
						<td><?php print $translation["t06"]; ?></td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+&#x2191;</td>
						<td><?php print $translation["t10"]; ?></td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+&#x2193;</td>
						<td><?php print $translation["t09"]; ?></td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+&#x2192;</td>
						<td><?php print $translation["t13"]; ?></td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+&#x2190;</td>
						<td><?php print $translation["t18"]; ?></td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+.</td>
						<td><?php print $translation["t07"]; ?></td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+A</td>
						<td><?php print $translation["t08"]; ?></td>
					</tr>

					<tr>
						<td><span class="win-icon"></span>+B</td>
						<td><?php print $translation["t11"]; ?></td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+D</td>
						<td><?php print $translation["t12"]; ?></td>
					</tr>

					<tr>
						<td><span class="win-icon"></span>+E</td>
						<td><?php print $translation["t14"]; ?></td>
					</tr>

					<tr>
						<td><span class="win-icon"></span>+F</td>
						<td><?php print $translation["t16"]; ?></td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+I</td>
						<td><?php print $translation["t17"]; ?></td>
					</tr>

					<tr>
						<td><span class="win-icon"></span>+K</td>
						<td><?php print $translation["t19"]; ?></td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+L</td>
						<td><?php print $translation["t20"]; ?></td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+M</td>
						<td><?php print $translation["t21"]; ?></td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+P</td>
						<td><?php print $translation["t22"]; ?></td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+R</td>
						<td><?php print $translation["t23"]; ?></td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+[space]</td>
						<td><?php print $translation["t15"]; ?></td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+T</td>
						<td><?php print $translation["t24"]; ?></td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+Tab</td>
						<td><?php print $translation["t25"]; ?></td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+W</td>
						<td><?php print $translation["t26"]; ?></td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+X</td>
						<td><?php print $translation["t27"]; ?></td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+Mayus+S</td>
						<td><?php print $translation["t28"]; ?></td>
					</tr>
					<tr>
						<td><span class="win-icon"></span>+Impr Pant</td>
						<td><?php print $translation["t29"]; ?></td>
					</tr>

				</tbody>
			</table>

		</div>

		<div class="table-container">
			<table>
				<thead>
					<tr>
						<td colspan="2"><?php print $translation["t30"];?></td>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Alt+&#x2191;</td>
						<td><?php print $translation["t31"];?></td>
					</tr>
					<tr>
						<td>Alt+&#x2192;/Alt+&#x2190;</td>
						<td><?php print $translation["t32"];?></td>
					</tr>
					<tr>
						<td>Alt+DoubleClick</td>
						<td><?php print $translation["t33"];?></td>
					</tr>
					<tr>
						<td>Alt+Enter </td>
						<td><?php print $translation["t34"];?></td>
					</tr>
					<tr>
						<td>Delete (Del)</td>
						<td><?php print $translation["t35"];?></td>
					</tr>
					<tr>
						<td>Copiando un archivo</td>
						<td><?php print $translation["t36"];?></td>
					</tr>
					<tr>
						<td>Crear acceso directo</td>
						<td><?php print $translation["t37"];?></td>
					</tr>
					<tr>
						<td>Ctrl+E</td>
						<td><?php print $translation["t38"];?></td>
					</tr>
					<tr>
						<td>Ctrl+Shift+N</td>
						<td><?php print $translation["t39"];?></td>
					</tr>
					<tr>
						<td>F2</td>
						<td><?php print $translation["t40"];?></td>
					</tr>
					<tr>
						<td>F3</td>
						<td><?php print $translation["t41"];?></td>
					</tr>
					<tr>
						<td>F4/Alt+D</td>
						<td><?php print $translation["t42"];?></td>
					</tr>
					<tr>
						<td>Shift / Alt Shift</td>
						<td><?php print $translation["t43"];?></td>
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