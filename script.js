let deg = 0;
let x = 0;
let isDragging = false;

const width = window.screen.width;
const spanSakasa = document.getElementById('sakasa');
const imgUsagi = document.getElementById('usagiimg');
const guide = document.getElementById('guide');

document.addEventListener('pointerdown', e => {
	guide.style.display = "none";
	x = e.pageX;
	isDragging = true;
});

document.addEventListener('pointermove', e => {
	if(isDragging === true) {
		rotateImg(x, e.pageX);
		x = e.pageX;
	}
});

document.addEventListener('pointerup', e => {
	isDragging = false;
});

function rotateImg(x, pagex) {
	var deg_n = deg + (x-pagex) / 4;
	deg = deg_n % 360;
	imgUsagi.style.transform = "rotate(" + deg + "deg)";
	if((deg <= -315) || ((-135 <= deg) && (deg <= 45)) || (225 <= deg)) {
		spanSakasa.innerHTML = "sakasa ";
	} else {
		spanSakasa.innerHTML = "";
	}
}
