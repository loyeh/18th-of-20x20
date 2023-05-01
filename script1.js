const contents = document.getElementById("contents");
const loading = document.getElementById("loading");
function loadSpinner() {
	for (let i = 0; i < 12; i++) {
		const div = document.createElement("div");
		div.id = `_${i}`;
		loading.appendChild(div);
	}
}
