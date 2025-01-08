import { useState, useEffect } from 'react';
import styles from '../styles/Message.module.css'

/*
-----------------------------------------------------------------------------------
Message()
-----------------------------------------------------------------------------------
* Determines current weather and avatar's mood.
* Returns appropriate message in speech bubble.
-----------------------------------------------------------------------------------
*/
export default function Message({ weatherData, avatarMood }) {

  // Control that data is fetched
  const temperature = weatherData?.temperature || null;
  const weatherCode = weatherData?.weather || null;
  const mood = avatarMood || null;

  // Set variable with default message
  const [message, setMessage] = useState("HÄMTA VÄDER FÖR ATT SPELA! 🌞");

  // Change mood according to chosen clothes
  useEffect(() => {

    if (mood === "happy.png") {

      setMessage("TACK! 😍");

    } else if (temperature !== null) {

      // Rain
      if (weatherCode === "DUGGREGN 🌧️" || weatherCode === "REGN 🌧️" || weatherCode === "REGNSKURAR 🌧️") {
        setMessage("OJ, DET REGNAR! ☔");
      }

        // Temperature below 10°C
        else if (temperature < 10) {
          setMessage("OJ, DET ÄR KALLT! ❄️");
        }

        // Temperature above 20°C
        else if (temperature > 20) {
          setMessage("OJ, DET ÄR VARMT! 🔥");
        }
      }
  }, [weatherData, avatarMood]); // Update when weather or chosen clothes changes


    return (
        <div className={styles.speechBubble}>
          <p>{message}</p>
        </div>
      );
    }
