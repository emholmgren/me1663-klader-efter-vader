import { useState } from 'react';
import axios from 'axios';

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import Avatar from "../components/Avatar";
import ClothesMenu from "../components/ClothesMenu";
import WeatherDisplay from "../components/WeatherDisplay";

import { mapWeatherCode } from "../utils/weatherCodeMapper";
import { getBackgroundClass } from "../utils/backgroundClassGetter";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [backgroundClass, setBackgroundClass] = useState("default-bg");
  const [clothes, setClothes] = useState([]);

  const fetchWeather = async () => {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(async (position) => {

        const { latitude, longitude } = position.coords;

        // Fetch weather data
        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        const weatherJson = await weatherResponse.json();

        // Isolate weathercode
        const weatherCode = weatherJson.current_weather.weathercode;

        // Translate weathercode
        const weatherDescription = mapWeatherCode(weatherCode);
        const newBackgroundClass = getBackgroundClass(weatherCode);
        setBackgroundClass(newBackgroundClass);

        // Fetch location name
        /*const locationResponse = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const locationJson = await locationResponse.json();*/

        setWeatherData({
          temperature: weatherJson.current_weather.temperature,
          weather: weatherDescription.description,
          /*city: locationJson.address.city || locationJson.address.village || "Okänd plats",*/
        });

      });

    }
  };

  // Update background
  //const backgroundClass = weatherData ? getBackgroundClass(weatherData.weather) : "default-bg";

  console.log("Weather data:", weatherData);
  console.log("Bakgrundsklass:", backgroundClass);

  return (
    <div className={`container ${backgroundClass}`}>

      <Head>
        <title>Kläder efter väder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="weather">
          <WeatherDisplay weatherData={weatherData} />
          <button onClick={fetchWeather}>Hämta väder</button>
        </div>
        <Header title="Hjälp pandan att välja rätt kläder!"/>
        <Avatar weatherData={weatherData} clothes={clothes} />
        <ClothesMenu setClothes={setClothes} clothes={clothes} />
      </main>

      <Footer />
    </div>
  );
}
