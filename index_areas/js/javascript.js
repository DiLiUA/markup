'use strict'

var klickMenu = document.querySelector('.klickMenu');
var menu = document.querySelector('#menu');
var banner = document.querySelector('#banner');
function showMenu() {
	if (menu.style.display !== 'block') {
		menu.style.display = 'block';
		banner.style.paddingTop = '52px';
	} else {
		menu.style.display = 'none';
		banner.style.paddingTop = '85px';
	}
}
klickMenu.addEventListener("click", showMenu, false);