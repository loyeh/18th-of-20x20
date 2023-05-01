const contents = document.getElementById("contents");
const loading = document.getElementById("loading");
const everyThing = document.getElementById("everyThing");

if (innerWidth <= 700) {
	everyThing.style.width = `${0.9 * innerWidth}px`;
	contents.style.width = `${0.9 * innerWidth}px`;
}
let size = (2.5 * innerWidth) / 250;
if (size > 8) {
	size = 8;
}
document.getElementById("year").style.fontSize = `${size}em`;

function calc() {
	const c = new Date();
	const year = c.getFullYear();
	const d = new Date(`${year + 1}-01-01`);
	const t = Math.round((d.getTime() - c.getTime() - 12600000) / 1000);
	let se = t % 60;
	let mi = Math.trunc((t / 60) % 60);
	let ho = Math.trunc((t / 3600) % 24);
	let da = Math.trunc(t / 86400);
	if (se < 10) {
		se = `0${se}`;
	}
	if (mi < 10) {
		mi = `0${mi}`;
	}
	if (ho < 10) {
		ho = `0${ho}`;
	}
	document.getElementById("day").innerText = da;
	document.getElementById("hour").innerText = ho;
	document.getElementById("minute").innerText = mi;
	document.getElementById("second").innerText = se;
	document.getElementById("year").innerText = year;
}
function countDown() {
	contents.classList.remove("hide");
	loading.classList.add("hide");
	calc();
	setInterval(calc, 1000);
}
window.addEventListener("load", () => {
	const c = new Date();
	const year = c.getFullYear();
	document.getElementById("year").innerText = year;

	setTimeout(countDown, 1200);
});
