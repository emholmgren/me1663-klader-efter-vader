import styles from '../styles/Avatar.module.css'

export default function Avatar({ weatherData, selectedClothes }) {
    let avatarMood = "default.png";

    if (weatherData) {
      const { temperature, weather } = weatherData;
      if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weather)) {
        avatarMood = "wet.png";
      } else {
        avatarMood = "sad.png";
      }
    }

    return (
        <div className={styles.avatar}>
          <img src={`/avatars/${avatarMood}`} alt="avatar" style={{ width: "100%" }} />
          {selectedClothes.map((clothing, index) => (
            <img
              key={index}
              src={`/clothes/${clothing}`}
              alt={`clothing-${index}`}
              style={{ width: "100%", position: "absolute", left: 0 }}
            />
          ))}
        </div>
      );
    }
