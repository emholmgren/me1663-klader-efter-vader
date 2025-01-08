import { useState, useEffect } from 'react';
import styles from '../styles/Avatar.module.css'
import { clothesOptions } from './ClothesMenu'; // Determine z-index of clothes

/*
-----------------------------------------------------------------------------------
Avatar()
-----------------------------------------------------------------------------------
* Receives data about current weather and clothing items selected by user.
* Sets a default mood for avatar, and upon game starting turns sad.
* Checks if user selects correct clothing combinations suitable for current weather.
* Using clothes not suitable is not allowed.
* When user has chosen correct combination of clothes, avatar turns happy.
* Returns component with avatar image and selected clothing items in front of avatar
-----------------------------------------------------------------------------------
*/
export default function Avatar({ weatherData, selectedClothes, setAvatarMood }) {

  // Initial avatar mood and image
  const [localAvatarMood, setLocalAvatarMood] = useState("default.png");

  // Define allowed clothing combinations
  const requiredClothesForCold = ["boots.png", "coat.png"];
  const additionalColdClothes = ["gloves.png", "hat.png", "scarf.png"];
  const requiredClothesForHot = ["shorts.png"];
  const requiredClothesForRainy = ["raincoat.png", "boots.png"];

  // Control if weather data is fetched
  const temperature = weatherData?.temperature || null;
  const weatherCode = weatherData?.weather || null;

  // Change mood according to chosen clothes and weather
  useEffect(() => {

    // Start if weather is fetched
    if (temperature !== null) {

      // Variables to list allowed clothing options
      let requiredClothes = [];
      let invalidClothes = [];
      let isComboCorrect = false; // Keeps avatar sad until combo is correct

    // If rain
    if (weatherCode === "DUGGREGN 🌧️" || weatherCode === "REGN 🌧️" || weatherCode === "REGNSKURAR 🌧️") {
      requiredClothes = requiredClothesForRainy;
      invalidClothes = ["shorts.png"];
      isComboCorrect = // Check if selection follows allowed clothes
        requiredClothes.every(item => selectedClothes.includes(item)) &&
        !selectedClothes.some(item => invalidClothes.includes(item));
    }

      // If temperature below 10°C
      else if (temperature < 10) {
        requiredClothes = [...requiredClothesForCold];
        invalidClothes = ["shorts.png", "raincoat.png"];

        // Make sure at least one additional item is chosen (gloves, hat, scarf)
        const hasAdditionalColdClothing = additionalColdClothes.some(item => selectedClothes.includes(item));

        isComboCorrect = 
          requiredClothes.every(item => selectedClothes.includes(item)) && hasAdditionalColdClothing &&
          !selectedClothes.some(item => invalidClothes.includes(item));
      }

      // If temperature above 20°C
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

      // Set avatar based on if combination is correct
      const mood = isComboCorrect ? "happy.png" : "sad.png";
      setLocalAvatarMood(mood);
      setAvatarMood(mood); // Send to parent
    }
  }, [weatherData, selectedClothes]); // Update when weather or chosen clothes changes

    return (
        <div className={styles.avatar}>
          <img src={`/avatars/${localAvatarMood}`} alt="avatar" style={{ width: "100%" }} />
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
