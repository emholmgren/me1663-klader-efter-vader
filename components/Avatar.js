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
  const weatherCode = weatherData?.weathercode || null;

  // Define clothing combinations
  const requiredClothesForCold = ["boots.png", "coat.png"];
  const additionalColdClothes = ["gloves.png", "hat.png", "scarf.png"];
  const requiredClothesForHot = ["shorts.png"];
  const requiredClothesForRainy = ["raincoat.png", "boots.png"];

  // Change mood according to chosen clothes
  useEffect(() => {
    if (temperature !== null) {
      let requiredClothes = [];
      let invalidClothes = [];
      let isComboCorrect = false;

      // Temperature below 10°C
      if (temperature < 10) {
        requiredClothes = [...requiredClothesForCold];

        // Wrong clothes for cold weather
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

        // Wrong clothes for hot weather
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

      // Rain
      else if (weatherCode === 51 || weatherCode === 53 || weatherCode === 61 || weatherCode === 63) { // exempel på regn
        requiredClothes = requiredClothesForRainy;

        // Wrong clothes for hot weather
        invalidClothes = ["shorts.png"];

        isComboCorrect = 
          requiredClothes.every(item => selectedClothes.includes(item)) && 
          !selectedClothes.some(item => invalidClothes.includes(item));
      }

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
