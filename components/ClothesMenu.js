import React, { useState } from 'react';
import styles from '../styles/ClothesMenu.module.css'

const clothesOptions = [
  "boots.png",
  "coat.png",
  "gloves.png",
  "hat.png",
  "raincoat.png",
  "scarf.png",
  "shorts.png"
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
    <div className={styles.carousel}>

      <button className={styles.navButton} onClick={prevPage}>
        ←
      </button>

      <div className={styles.clothingmenu}>
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
      </div>

      <button className={styles.navButton} onClick={nextPage}>
        →
      </button>

    </div>
  );
}
