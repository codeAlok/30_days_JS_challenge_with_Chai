// ***** Activity 1: Setting up the project *****
// *** Task 1: Initialize a new project directory and set up the basic HTML structure for the weather app.

// *** Tsk 2: Add a basic CSS file to style the weather app, including a container for displaying weather information.


// ***** Activity 2: Fetching Weather Data *****
// *** Task 3: Use the 'fetch' API to get current weather data from a public weather API (e.g., OpenWeatherMap). Log the response data to the console.

// *** Task 4: Parse the weather data and display the current temperature, weather condition, and city name on the web page. 


// ***** Activity 3: Adding Search Functionality *****
// *** Task 5: Add an input field and a search button to the HTML structure. Style the input and button using CSS. 

// *** Task 6: Write a function to fetch and display weather data for a city entered in the search input field. Log any errors to the console.
import { API_KEY } from "./config.js"

const WEATHER_API_KEY = API_KEY;
const city = document.querySelector('.city');
const currentTemp = document.querySelector('.current-temp');
const weatherCondition = document.querySelector('.weather');
const searchBtn = document.getElementById('search-btn');
const cityName = document.getElementById('city-name');

async function getCurrentWeather(cityName = 'Delhi') {
    try {
        const currentWeatherJSON = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric`);

        const currentWeatherData = await currentWeatherJSON.json();
        console.log(currentWeatherData);

        // updating data on page
        if (currentWeatherData.cod === 200) {
            city.innerText = currentWeatherData.name;
            weatherCondition.innerText = currentWeatherData?.weather[0]?.main;
            currentTemp.innerHTML = `${currentWeatherData.main.temp} <sup>o</sup>C`;
        }
        else {
            throw new Error(`${currentWeatherData.message}`)
        }
    }
    catch (err) {
        console.error(err);
    }

}

getCurrentWeather();

// *** Refresh page with newData ***
searchBtn.addEventListener('click', () => {
    if (cityName.value !== '') {
        getCurrentWeather(cityName.value);
        getFiveDaysForecast(cityName.value);
    }
});


// ***** Activity 4: Displaying a 5-Day Forecast *****
// *** Task 7: Use the 'fetch' API to get a 5-day weather forecast from the public weather API. Log the response data to the console.

// *** Task 8: Parse the forecast data and display the temperature and weather condition for each day in the forecast on the web page. 
async function getFiveDaysForecast(cityName = 'Delhi') {
    const jsonData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric`);

    const data = await jsonData.json();
    
    if (data.cod == 200) {
        // ** Filter only unique Days data **
        const regex = /\b\d{4}-\d{2}-\d{2}\b/g;

        const filteredData = data.list.filter((item, idx, arr) => {
            let matchDate = item.dt_txt.match(regex);

            // match with current and nextData
            if (idx < arr.length - 1) {
                let NextMatch = arr[idx + 1].dt_txt.match(regex);

                if (`"${NextMatch}"` !== `"${matchDate}"`) {
                    return true;
                }
                else {
                    return false;
                }
            }

            return true;
        });

        // create and add data
        const dayReports = document.querySelectorAll('.day-report');

        dayReports.forEach((item, idx) => {
            item.children[0].setAttribute('src', `http://openweathermap.org/img/w/${filteredData[idx].weather[0].icon}.png`);

            item.children[1].innerHTML = `${filteredData[idx].main.temp} <sup>o</sup>C`;
            item.children[2].innerText = filteredData[idx].weather[0].description;
            item.children[3].innerText = filteredData[idx].dt_txt.match(regex);
        })
        console.log(dayReports)
        console.log(filteredData);
    }

    console.log(data);
}

getFiveDaysForecast();


// ***** Activity 5: Enhancing the UI *****
// *** Task 9: Add icons or images to represent different weather conditions (e.g., sunny, rainy, cloudy) based on the weather API. Log the response data to the console.

// *** Task 10: Add CSS animations or transitions to make the weather app more interactive and visually appealing.



