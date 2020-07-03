var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector('#random');

const gRandom = () => {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient()
}

function setGradient() {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener('click', gRandom);


body.onload = loaded = () => {
	gRandom();
	css.textContent = body.style.background + ";";
};