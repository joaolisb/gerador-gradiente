let direction = 0;

function displayText(opcao) {
	let paragraph = document.getElementById('button-txt');
	
	paragraph.style.color = 'rgba(51,51,51,1)';
	
	switch(opcao) {
		case 1:
			paragraph.innerHTML = `Gradiente Vertical`;
			break;
		case 2:
			paragraph.innerHTML = `Gradiente Horizontal`;
			break;
		case 3:
			paragraph.innerHTML = `Gradiente 45° - Esq. Superior para Dir. Inferior`;
			break;
		case 4:
			paragraph.innerHTML = `Gradiente 45° - Dir. Superior para Esq. Inferior`;
			break;
		default:
			paragraph.innerHTML = `Inverter as cores`;
			break;
	}
}

function stopText() {
	let paragraph = document.getElementById('button-txt');
	
	paragraph.style.color = 'rgba(51,51,51,0)';
}

function changeDir(opcao) {
	
	switch(opcao) {
		case 1:
			document.body.style.setProperty('--direction', '0deg');
			break;
		case 2:
			document.body.style.setProperty('--direction', '90deg');
			break;
		case 3:
			document.body.style.setProperty('--direction', '135deg');
			break;
		default:
			document.body.style.setProperty('--direction', '225deg');
			break;
	}
	
	changeCSS();
}

function swapColors() {
	let new2 = getComputedStyle(document.body).getPropertyValue('--color1');
	let new1 = getComputedStyle(document.body).getPropertyValue('--color2');
	
	document.body.style.setProperty('--color1', new1);
	document.body.style.setProperty('--color2', new2);
	changeCSS();
}

function openModal(){
	let modal = document.getElementById('modal');
	
	modal.style.display = "flex";
}

function closeModal(){
	let modal = document.getElementById('modal');
	
	modal.style.display = "none";
}

const alphabet = 'abcdef0123456789';

function colorBG() {
	let hexadec1 = '#';
	let hexadec2 = '#';
	for (let i = 0; i < 6; i++) {
		hexadec1 += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		hexadec2 += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
	}
	document.body.style.setProperty('--color1', hexadec1);
	document.body.style.setProperty('--color2', hexadec2);
	changeCSS();
}


let textBox = document.getElementById('css-copy');
let newCSS = textBox.innerHTML;

function changeCSS(){
	let colorA = getComputedStyle(document.body).getPropertyValue('--color1');
	let colorB = getComputedStyle(document.body).getPropertyValue('--color2');
	let colorDir = getComputedStyle(document.body).getPropertyValue('--direction');
	
	textBox.innerHTML = `background: `+colorA+`;
background: linear-gradient(`+colorDir+`, `+colorA+` 0%, `+colorB+` 100%);`
	newCSS = textBox.innerHTML;
}

function copyCSS() {
  let mainMsg = document.getElementById('copy-msg');
  navigator.clipboard.writeText(newCSS);
 
 
  setTimeout(() => {mainMsg.style.visibility = 'visible';}, 0);
  setTimeout(() => {mainMsg.style.visibility = 'hidden';}, 2000);
}

function mainDisappear(){
	let mainPage = document.getElementById('main-page');
	let cloak = document.getElementById('cloak');
	
	if(mainPage.style.visibility != 'hidden') {
		mainPage.style.visibility = 'hidden';
		cloak.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`;
		cloak.style.opacity = "0.5";
	} else {
		mainPage.style.visibility = 'visible';
		cloak.innerHTML = `<i class="bi bi-eye-fill"></i>`;
		cloak.style.opacity = "1";
	}
}

colorBG();