<?php
require_once "php/main.php";
?>

<!DOCTYPE html>
<html lang=<?php print $translation["t00"];?>>

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
	<title><?php print $translation["t01"];?></title>

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
						<td><?php print $translation["t44"];?></td>
						<td><?php print $translation["t36"];?></td>
					</tr>
					<tr>
						<td><?php print $translation["t45"];?></td>
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

		<div class="table-container">
			<table>
				<thead>
					<tr>
						<td colspan="2"><?php print $translation["t46"];?></td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Alt</td>
						<td><?php print $translation["t47"];?></td>
					</tr>
					<tr>
						<td>Alt+[Space]</td>
						<td><?php print $translation["t48"];?></td>
					</tr>
					<tr>
						<td>Alt+F4</td>
						<td><?php print $translation["t49"];?></td>
					</tr>
					<tr>
						<td>Alt+<?php print $translation["t50"];?></td>
						<td><?php print $translation["t51"];?></td>
					</tr>
					<tr>
						<td>Ctrl+F4</td>
						<td><?php print $translation["t52"];?></td>
					</tr>
					<tr>
						<td>Ctrl+&#x2192; / Ctrl+&#x2190;</td>
						<td><?php print $translation["t53"];?></td>
					</tr>
					<tr>
						<td>F10+<?php print $translation["t50"];?></td>
						<td><?php print $translation["t54"];?></td>
					</tr>
				</tbody>
			</table>
		</div>


	</main>



	<section id="menu-priorization">

		<section class="menu-container">
			<div class="menu-title">
				<div class="menu-title-text">Menu</div>
				<div class="menu-close">
					<button id="menu-close-btn"><span>&#xd7;</span></button>
				</div>
			</div>

			<div class="menu-share-options">
				<article class="share-item">
					<div class="share-ico">algo</div>
					<div class="share-text">Share text</div>
				</article>
				<article class="share-item">
					<div class="share-ico">algo</div>
					<div class="share-text">Download pdf</div>
				</article>
				<article class="share-item">
					<div class="share-ico">algo</div>
					<div class="share-text">Contribute</div>
				</article>
			</div>

			<div class="settings-options">
				<article class="settings">
					
				
					<div>algo</div>
					<div>Dark theme</div>
					<div>Off</div>
					<div>algo</div>
					<div>On</div>
					
				
					<div>algo</div>
					<div>Big font</div>
					<div>Off</div>
					<div>algo</div>
					<div>On</div>
					
				
					<div>algo</div>
					<div>High contrast</div>
					<div>Off</div>
					<div>algo</div>
					<div>On</div>
				</article>
			</div>

			<div class="language-options">
				<div class="language-title">
					<span>Language</span>
				</div>
				<div class="language-items">

					<div class="flag">algo</div>
					<div class="lang-title">English</div>
					<div><span class="lang-option">algo</span></div>

					
					<div class="flag">algo</div>
					<div class="lang-title">Spanish</div>
					<div><span class="lang-option">algo</span></div>


				</div>
			</div>
		</section>

	</section>



	<footer>
		<p><?php print $translation["tfooter1"];?><a href="https://github.com/XitusDev" target="_blank" rel="noopener noreferrer">XitusDev</a> &copy;2021</p>
		<p><?php print $translation["tfooter2"];?><a href="http://" target="_blank" rel="noopener noreferrer"><?php print $translation["tfooter3"];?></a></p>
	</footer>
</body>

</html>