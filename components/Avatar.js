import { useState, useEffect } from 'react';
import styles from '../styles/Avatar.module.css'
import { clothesOptions } from './ClothesMenu'; // Determine z-index of clothes

export default function Avatar({ weatherData, selectedClothes }) {
  // let avatarMood = "default.png";

    /*if (weatherData) {
      const { temperature, weather } = weatherData;
      if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weather)) {
        avatarMood = "wet.png";
      } else {
        avatarMood = "sad.png";
      }
    }*/

    const [avatarMood, setAvatarMood] = useState("default.png"); // Initial mood

    // Control weatherdata
  const temperature = weatherData?.temperature || null;
  const weatherCode = weatherData?.weathercode || null;

  // Define clothing combinations
  const requiredClothesForCold = ["boots.png", "coat.png"];
  const additionalColdClothes = ["gloves.png", "hat.png", "scarf.png"];
  const requiredClothesForHot = ["shorts.png"];
  const requiredClothesForRainy = ["raincoat.png", "boots.png"];

  useEffect(() => {
    if (temperature !== null) {
      let requiredClothes = [];
      let isComboCorrect = false;

      // Temperatur under 10°C
      if (temperature < 10) {
        requiredClothes = [...requiredClothesForCold];
        // Kontrollera om minst ett av de extra plaggen är valt (gloves, hat, scarf)
        const hasAdditionalColdClothing = additionalColdClothes.some(item => selectedClothes.includes(item));
        isComboCorrect = requiredClothes.every(item => selectedClothes.includes(item)) && hasAdditionalColdClothing;
      }
      // Temperatur över 25°C
      else if (temperature > 25) {
        requiredClothes = requiredClothesForHot;
        isComboCorrect = requiredClothes.every(item => selectedClothes.includes(item));
      }
      // Regn
      else if (weatherCode === 51 || weatherCode === 53 || weatherCode === 61 || weatherCode === 63) { // exempel på regn
        requiredClothes = requiredClothesForRainy;
        isComboCorrect = requiredClothes.every(item => selectedClothes.includes(item));
      }

      // Sätt avataren beroende på om kombinationen är korrekt
      setAvatarMood(isComboCorrect ? "happy.png" : "sad.png");
    }
  }, [weatherData, selectedClothes]); // Uppdatera när vädret eller valda kläder ändras



    return (
        <div className={styles.avatar}>
          <img src={`/avatars/${avatarMood}`} alt="avatar" style={{ width: "100%" }} />
          {selectedClothes.map((clothing, index) => (
            <img
              key={index}
              src={`/clothes/${clothing}`}
              alt={`clothing-${index}`}
              style={{ width: "100%", position: "absolute", left: 0, zIndex: clothesOptions.indexOf(clothing) }}
            />
          ))}
        </div>
      );
    }
