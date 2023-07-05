import { getWeather, getForecast } from "./weather-module.js"

const container = document.getElementById("main-container");
const form = document.querySelector("form")


form.addEventListener("submit", function (e) {
	const userInput = document.getElementById("user-input");

	e.preventDefault()
	
	let weatherLocationCall = userInput.value
	console.log(weatherLocationCall)

	getWeather(weatherLocationCall)
		.then(weather => {
			console.log(weather)
		})
})





// let weatherLocationCall = "sydney"

// let currentWeather = await getWeather(weatherLocationCall)
// let forecast = await getForecast(weatherLocationCall)
// let location = currentWeather.location.name;
// let region = currentWeather.location.region;
// let tempC = currentWeather.current.temp_c;
// let tempF = currentWeather.current.temp_f;

// console.log(tempC)