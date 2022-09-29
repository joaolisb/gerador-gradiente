const alphabet = 'ABCDEF0123456789';

function colorBG () {
	let hexadec1 = '#';
  let hexadec2 = '#';
	for (let i = 0; i < 6; i++) {
		hexadec1 += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    hexadec2 += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
	}
document.querySelector(':root').style.setProperty('--color1', hexadec1); document.querySelector(':root').style.setProperty('--color2', hexadec2);
  document.getElementById('color1').innerHTML = hexadec1;
  document.getElementById('color2').innerHTML = hexadec2;
}


function copiar(botao) {
  let alvo = document.getElementById(botao).innerHTML;
  let mensagem = document.getElementById('alerta-copia');
  navigator.clipboard.writeText(alvo);
 
  setTimeout(() => {
    mensagem.style.visibility = 'visible';
  }, 0);
  setTimeout(() => {
    mensagem.style.visibility = 'hidden';
  }, 2000);
}