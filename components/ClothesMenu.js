import React, { useState } from 'react';
import styles from '../styles/ClothesMenu.module.css'

// List of src for clothing images, Important: The order determines Z-index (order of layers)
export const clothesOptions = [
  "boots.png",
  "shorts.png",
  "gloves.png",
  "coat.png",
  "raincoat.png",
  "hat.png",
  "scarf.png",
];

export default function ClothesMenu({ selectedClothes, setSelectedClothes }) {

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  // Move to next page
  const nextPage = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % clothesOptions.length);
  };

  // Move to previous page
  const prevPage = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex - 1 + clothesOptions.length) % clothesOptions.length
    );
  };

  // Clothes that are showed
  const visibleClothes = clothesOptions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  if (visibleClothes.length < itemsPerPage) {
    visibleClothes.push(
      ...clothesOptions.slice(0, itemsPerPage - visibleClothes.length)
    );
  }

  // Function to add or remove clothes from character
  const toggleClothing = (item) => {
    if (selectedClothes.includes(item)) {
        setSelectedClothes(selectedClothes.filter((clothing) => clothing !== item)); // Remove item from list
    } else {
        setSelectedClothes([...selectedClothes, item]); // Add item to list
    }
};

  return (

      <div className={styles.clothingmenu}>
      <button onClick={prevPage} className={styles.navButton}>←</button>
        {visibleClothes.map((clothing, index) => (
          <img
            key={index}
            src={`/clothes/${clothing}`}
            alt={clothing}
            onClick={() => toggleClothing(clothing)}
            className={`${styles.clothingItem} ${
              selectedClothes.includes(clothing) ? styles.selected : ""
            }`}
          />
        ))}
        <button onClick={nextPage} className={styles.navButton}>→</button>
      </div>

  );
}
