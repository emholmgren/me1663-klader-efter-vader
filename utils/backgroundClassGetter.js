// Determine background class based on weather code
export function getBackgroundClass(code) {
    if (code === 0) return "clear-sky";
    if ([1, 2, 3].includes(code)) return "cloudy";
    if ([45, 48].includes(code)) return "foggy";
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "rainy";
    if ([71, 73, 75, 77].includes(code)) return "snowy";
    if ([95, 96, 99].includes(code)) return "thunderstorm";
    return "default-bg";
  }
