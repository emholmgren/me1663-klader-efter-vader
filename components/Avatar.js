import { useState, useEffect } from 'react';
import styles from '../styles/Avatar.module.css'
import { clothesOptions } from './ClothesMenu'; // Determine z-index of clothes

// Funciton that receives data about current weather and clothing items selected by user
// Sets a default mood for avatar, and upon game starting turns sad
// Checks if user selects correct clothing combinations suitable for current weather
// Using clothes not suitable is not allowed
// When correct combination, avatar turns happy
// Returns component with avatar image and selected clothing items in front of avatar
export default function Avatar({ weatherData, selectedClothes }) {

  // Initial mood
  const [avatarMood, setAvatarMood] = useState("default.png");

  // Control weatherdata
  const temperature = weatherData?.temperature || null;
  const weatherCode = weatherData?.weather || null;

  // Define clothing combinations
  const requiredClothesForCold = ["boots.png", "coat.png"];
  const additionalColdClothes = ["gloves.png", "hat.png", "scarf.png"];
  const requiredClothesForHot = ["shorts.png"];
  const requiredClothesForRainy = ["raincoat.png", "boots.png"];

  // Change mood according to chosen clothes
  useEffect(() => {

    console.log("Weather data:", weatherData);

    if (temperature !== null) {
      let requiredClothes = [];
      let invalidClothes = [];
      let isComboCorrect = false;

      // Log för felsökning
    console.log("Current weatherCode:", weatherCode);
    console.log("Selected clothes:", selectedClothes);

    // Rain
    if (weatherCode === "Duggregn" || weatherCode === "Regn" || weatherCode === "Regnskurar") {
      requiredClothes = requiredClothesForRainy;
      invalidClothes = ["shorts.png"];
      
      isComboCorrect =
        requiredClothes.every(item => selectedClothes.includes(item)) &&
        !selectedClothes.some(item => invalidClothes.includes(item));
    }

      // Temperature below 10°C
      else if (temperature < 10) {
        requiredClothes = [...requiredClothesForCold];
        invalidClothes = ["shorts.png", "raincoat.png"];

        // Make sure at least one additional item is chosen (gloves, hat, scarf)
        const hasAdditionalColdClothing = additionalColdClothes.some(item => selectedClothes.includes(item));
        isComboCorrect = 
          requiredClothes.every(item => selectedClothes.includes(item)) && hasAdditionalColdClothing &&
          !selectedClothes.some(item => invalidClothes.includes(item));
      }

      // Temperature above 20°C
      else if (temperature > 20) {
        requiredClothes = requiredClothesForHot;
        invalidClothes = [
          "boots.png",
          "coat.png",
          "gloves.png",
          "hat.png",
          "scarf.png",
          "raincoat.png"
        ];

        isComboCorrect = 
          requiredClothes.every(item => selectedClothes.includes(item)) && 
          !selectedClothes.some(item => invalidClothes.includes(item));
      }

      // Log för resultat
    console.log("Is combination correct?", isComboCorrect);

      // Set avatar based on if combination is correct
      setAvatarMood(isComboCorrect ? "happy.png" : "sad.png");
    }
  }, [weatherData, selectedClothes]); // Update when weather or chosen clothes changes


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
