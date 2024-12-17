

export default function WeatherDisplay({ weatherData }) {
    if (!weatherData) return <p>Hämta plats för att spela...</p>;
  
    return (
      <div>
        <p>{weatherData.city}</p>
        <p>{weatherData.temperature}°C</p>
        <p>{weatherData.weather}</p>
      </div>
    );
  }
