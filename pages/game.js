import { useState } from 'react';

import Head from 'next/head'
import Navbar from '../components/Navbar';
import Header from '@components/Header'
import Footer from '@components/Footer'

import WeatherDisplay from "../components/WeatherDisplay";
import Message from "../components/Message";
import Avatar from "../components/Avatar";
import ClothesMenu from "../components/ClothesMenu";

import { mapWeatherCode } from "../utils/weatherCodeMapper";
import { getBackgroundClass } from "../utils/backgroundClassGetter";

export default function Home() {
  
  const [avatarMood, setAvatarMood] = useState("default.png");

  const [weatherData, setWeatherData] = useState(null);
  const [backgroundClass, setBackgroundClass] = useState("default-bg");
  const [selectedClothes, setSelectedClothes] = useState([]);

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
        const locationResponse = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const locationJson = await locationResponse.json();

        setWeatherData({
          temperature: weatherJson.current_weather.temperature,
          weather: weatherDescription.description,
          city: locationJson.address.city || locationJson.address.village || "Okänd plats",
        });

      });

    }
  };

  return (
    <div>

      <Head>
        <title>Kläder efter väder</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
      </Head>

      <Navbar />

      <main>

        <div className={`${backgroundClass}`}>
          <div className="container weather">
            <button onClick={fetchWeather}>HÄMTA VÄDER</button>
            <WeatherDisplay weatherData={weatherData} />
          </div>

          <div className="container">
            <Message weatherData={weatherData} selectedClothes={selectedClothes} avatarMood={avatarMood} />
          </div>

          <div className="container">
            <Avatar weatherData={weatherData} selectedClothes={selectedClothes} setAvatarMood={setAvatarMood} />
          </div>
        </div>

        <div className="container">
          <ClothesMenu selectedClothes={selectedClothes} setSelectedClothes={setSelectedClothes} />
        </div>

      </main>

      <Footer />
    </div>
  );
}
