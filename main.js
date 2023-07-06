import { forecast } from "./weather-module.js"

const container = document.getElementById("main-container");
const form = document.querySelector("form")

async function getForecast(locationCall) {
	const forecastResponse = await forecast(locationCall)
	return {
		area: forecastResponse.location.tz_id,
		condition: forecastResponse.current.condition.text,
		//code for condition 1003
		icon: forecastResponse.current.condition.icon,
		rain: forecastResponse.current.precip_mm,

		maxTemp: forecastResponse.forecast.forecastday[0].day.maxtemp_c,
		minTemp: forecastResponse.forecast.forecastday[0].day.mintemp_c,
	};
}


form.addEventListener("submit", function (e) {
	const icon = document.getElementById("icon")
	const location = document.getElementById("location")
	const condition = document.getElementById("condition")
	const rain = document.getElementById("rain")
	const minTemp = document.getElementById("min") 
	const maxTemp = document.getElementById("max")



	const userInput = document.getElementById("user-input");

	e.preventDefault();
	let locationCall = userInput.value;
	// let temperature = getForecast(locationCall)
	// location.textContent = temperature
	 getForecast(locationCall)
		.then((response) => {
			location.textContent = response.area
			icon.src = response.icon
			condition.textContent = response.condition
			rain.textContent = response.rain + "mm"
			minTemp.textContent = response.minTemp + "°C";
			maxTemp.textContent = response.maxTemp + "°C";
	});
});
