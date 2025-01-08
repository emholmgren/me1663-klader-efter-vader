// Next library
import { useState } from 'react';
import Head from 'next/head'

// Own components
import Navbar from '@components/Navbar';
import WeatherDisplay from "@components/WeatherDisplay";
import Message from "@components/Message";
import Avatar from "@components/Avatar";
import ClothesMenu from "@components/ClothesMenu";
import Footer from '@components/Footer'

// Other own functions
import { mapWeatherCode } from "../utils/weatherCodeMapper";
import { getBackgroundClass } from "../utils/backgroundClassGetter";

/*
-----------------------------------------------------------------------------------
Home()
-----------------------------------------------------------------------------------
* Fethces browser location, coordinates and weather information with Open Meteo API.
* Translates weather code from numbers to text.
* Updates background class, which changes background image in styles/globals.css.
* Fetches location name with Nominatim API.
* Collects temperature, weather description and location in weatherData.
-----------------------------------------------------------------------------------
*/
export default function Home() {

  // Default state variables to be updated with interaction
  const [backgroundClass, setBackgroundClass] = useState("default-bg");
  const [weatherData, setWeatherData] = useState(null);
  const [avatarMood, setAvatarMood] = useState("default.png");
  const [selectedClothes, setSelectedClothes] = useState([]);
  const [hasFetchedWeather, setHasFetchedWeather] = useState(false); // New state

  // Fetch location and weather information
  const fetchWeather = async () => {

    // If user shares location
    if (navigator.geolocation) {

      // Get current position
      navigator.geolocation.getCurrentPosition(async (position) => {

        const { latitude, longitude } = position.coords; // Get coordinates

        // Fetch weather data from Open Meteo API
        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        const weatherJson = await weatherResponse.json(); // Parse response

        // Isolate code for weather description
        const weatherCode = weatherJson.current_weather.weathercode;
        const weatherDescription = mapWeatherCode(weatherCode); // Translate from number to text format

        // Update background class, changed in styles/globals.css
        const newBackgroundClass = getBackgroundClass(weatherCode);
        setBackgroundClass(newBackgroundClass);

        // Fetch location name with Nominatim API
        const locationResponse = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const locationJson = await locationResponse.json(); // Parse response

        // Update weatherData
        setWeatherData({
          temperature: weatherJson.current_weather.temperature,
          weather: weatherDescription.description,
          city: locationJson.address.city || locationJson.address.village || "Okänd plats",
        });

        setHasFetchedWeather(true); // Set to true after fetching weather
      });

    }
  };

  return (
    <div>

      <Head>
        <title>Spela - Klä Mig Rätt</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet"/>
      </Head>

      <Navbar />

      <main>

        <div className={`${backgroundClass}`}>
          <div className="weatherDisplay">
            {!hasFetchedWeather ? (
              <button onClick={fetchWeather} className="weatherButton">HÄMTA VÄDER</button>
            ) : (
              <WeatherDisplay weatherData={weatherData} />
            )}
          </div>

            <Message weatherData={weatherData} selectedClothes={selectedClothes} avatarMood={avatarMood} />

          <div>
            <Avatar weatherData={weatherData} selectedClothes={selectedClothes} setAvatarMood={setAvatarMood} />
          </div>
        </div>

        <div>
        {hasFetchedWeather && (
          <ClothesMenu selectedClothes={selectedClothes} setSelectedClothes={setSelectedClothes} />
        )}
        </div>

      </main>

      <Footer />
    </div>
  );
}
