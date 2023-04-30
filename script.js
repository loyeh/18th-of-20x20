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
setInterval(calc, 1000);
