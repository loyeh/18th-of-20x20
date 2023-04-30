function calc() {
	const d = new Date("2024-01-01");
	const c = new Date();
	const t = Math.round((d.getTime() - c.getTime() - 12600000) / 1000);
	let se = t % 60;
	let mi = Math.trunc((t / 60) % 60);
	let ho = Math.trunc((t / 3600) % 24);
	let da = Math.trunc(t / 86400);
	document.getElementById("day").innerText = da;
	document.getElementById("hour").innerText = ho;
	document.getElementById("minute").innerText = mi;
	document.getElementById("second").innerText = se;
}
setInterval(calc, 1000);
