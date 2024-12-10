import styles from '../styles/Avatar.module.css'

export default function Avatar({ weatherData, clothes }) {
    let avatarMood = "default.png";

    if (weatherData) {
        const { temperature, weather } = weatherData;
        if (temperature < 5 || [61, 63, 65].includes(weather)) {
            avatarMood = "sad.png"; // Cold or rain
        } else if (temperature > 30) {
            avatarMood = "sweating.png"; // Very hot
        }
    }

    return (
        <div className={styles.avatar}>
          <img src={`/avatars/${avatarMood}`} alt="avatar" style={{ width: "100%" }} />
          {clothes.map((clothing, index) => (
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
