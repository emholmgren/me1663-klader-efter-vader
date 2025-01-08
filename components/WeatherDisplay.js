import styles from '../styles/WeatherDisplay.module.css';

export default function WeatherDisplay({ weatherData }) {
    return (
      <div className={styles.weatherDisplay}>
        <p className={styles.city}>{weatherData.city}</p>
        <div className={styles.weatherDetails}>
          <p>{weatherData.temperature}°C</p>
          <p>{weatherData.weather}</p>
        </div>
      </div>
    );
  }
