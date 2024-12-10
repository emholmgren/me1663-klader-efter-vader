import styles from '../styles/WeatherDisplay.module.css'

export default function WeatherDisplay({ weatherData }) {
    if (!weatherData) return <div>Hämta väderinfo för att spela...</div>;
  
    return (
      <div className={styles.weatherDisplay}>
        <h3>{weatherData.city}</h3>
        <p>{weatherData.temperature}°C</p>
        <p>{weatherData.weather}</p>
      </div>
    );
  }
