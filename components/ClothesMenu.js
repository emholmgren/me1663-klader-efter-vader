import React, { useState } from 'react';

// List of src for clothing images
// !Important: The order determines Z-index (order of layers)
export const clothesOptions = [
  "boots.png",
  "shorts.png",
  "gloves.png",
  "coat.png",
  "raincoat.png",
  "hat.png",
  "scarf.png",
];

/*
-----------------------------------------------------------------------------------
ClothesMenu()
-----------------------------------------------------------------------------------
* Sets up a limited number of slots for clothing images to be visible in the clothing menu.
* Uses indeces to allow user to move down the list of clothes to be visible.
* Controls which clothing items user selects.
* If the avatar already is wearing the item, it is removed - otherwise added to avatar.
* Blocks user from stacking several coats by replacing with the latest selected coat.
* Returns previous and next button, and maps out clothing menu images and statuses.
-----------------------------------------------------------------------------------
*/
export default function ClothesMenu({ selectedClothes, setSelectedClothes }) {

  // Set up visible clothing items
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  // Function that moves 5 next spaces in clothing menu
  const nextPage = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % clothesOptions.length);
  };

  // Function that moves 5 previous spaces in clothing menu
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

  // Restart the list to not run out of clothes
  if (visibleClothes.length < itemsPerPage) {
    visibleClothes.push(
      ...clothesOptions.slice(0, itemsPerPage - visibleClothes.length)
    );
  }

  // Function to add or remove clothes from character
  const toggleClothing = (item) => {

    // Not allowed to use coat and raincoat at the same time
    const jackets = ["coat.png", "raincoat.png"];

    // If avatar is wearing another coat, replace with the last selected
    if (jackets.includes(item)) {

      const hasOtherJacket = selectedClothes.some(
        (clothing) => jackets.includes(clothing) && clothing !== item
      );

      if (hasOtherJacket) {
        setSelectedClothes([
          ...selectedClothes.filter((clothing) => !jackets.includes(clothing)),
          item,
        ]);
        return;
      }
    }

    // If avatar is wearing selected clothing item, remove it - otherwise add it on
    if (selectedClothes.includes(item)) {
      setSelectedClothes(selectedClothes.filter((clothing) => clothing !== item));
    } else {
      setSelectedClothes([...selectedClothes, item]);
    }

  };

  return (

      <div className="clothesMenuWrapper">

        <button onClick={prevPage} className="menuButton">
          🡨
        </button>

        <div className="carousel">
          {visibleClothes.map((clothing, index) => (
            <img
              key={index}
              src={`/clothes/${clothing}`}
              alt={clothing}
              onClick={() => toggleClothing(clothing)}
              className={`carouselImage ${
                selectedClothes.includes(clothing) ? "selected" : ""
              }`}
            />
          ))}
        </div>

        <button onClick={nextPage} className="menuButton">
          🡪
        </button>

      </div>

  );
}
