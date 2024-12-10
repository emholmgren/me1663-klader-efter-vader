import styles from '../styles/ClothesMenu.module.css'

const clothesOptions = ["boots.png", "coat.png", "gloves.png", "hat.png", "raincoat.png", "scarf.png", "shorts.png", "sunglasses.png", "tshirt.png", "umbrella.png"];

export default function ClothesMenu({ setClothes, clothes }) {
  const toggleClothing = (clothing) => {
    setClothes((prevClothes) =>
      prevClothes.includes(clothing)
        ? prevClothes.filter((c) => c !== clothing)
        : [...prevClothes, clothing]
    );
  };

  return (
    <div className={styles.clothingmenu}>
      {clothesOptions.map((clothing, index) => (
        <img
          key={index}
          src={`/clothes/${clothing}`}
          alt={clothing}
          onClick={() => toggleClothing(clothing)}
        />
      ))}
    </div>
  );
}
