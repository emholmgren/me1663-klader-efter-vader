import { useState, useEffect } from 'react';
import styles from '../styles/Message.module.css'

// Function that determines weather and avatar's mood.
// Returns an appropriate message for speech bubble.
export default function Message({ weatherData, avatarMood }) {

  // Fetch weatherdata
  const temperature = weatherData?.temperature || null;
  const weatherCode = weatherData?.weather || null;

  // Fetch avatars mood
  const mood = avatarMood || null;

  // Message
  const [message, setMessage] = useState("Hämta plats för att spela!");

  console.log("mood:" + mood);

  // Change mood according to chosen clothes
  useEffect(() => {

    if (mood === "happy.png") {
      setMessage("Tack för hjälpen! 😍");
    } else if (temperature !== null) {
      // Rain
      if (weatherCode === "Duggregn" || weatherCode === "Regn" || weatherCode === "Regnskurar") {
        setMessage("Oj, det regnar! ☔");
      }
        // Temperature below 10°C
        else if (temperature < 10) {
          setMessage("Oj, det är kallt! ❄️");
        }
        // Temperature above 20°C
        else if (temperature > 20) {
          setMessage("Oj, det är varmt! 🔥");
        }
      }
  }, [weatherData, avatarMood]); // Update when weather or chosen clothes changes


    return (
        <div className={styles.speechBubble}>
          <p>{message}</p>
        </div>
      );
    }
