const apiKey = "6dd7ef15a71c48fcac421427230507";


// async function getWeather(location) {
// 	try {
// 		const response = await fetch(
// 			`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`,
// 			{ mode: "cors" }
//         );

// 		const weather = await response.json();
// 		return weather
// 	} catch (error) {
// 		console.log("there was an errors");
// 	}
// }

async function forecast(location) {
	try {
		const response = await fetch(
			`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}`,
			{ mode: "cors" }
        );
        const forecast = await response.json();
		return forecast;
	} catch (error) {
		console.log(error);
	}
}


export {forecast}