// Translate weather code into text description
export function mapWeatherCode(code) {
    if (code === 0) return { description: "KLART ☀️" };
    if ([1, 2, 3].includes(code)) return { description: "MOLN ☁️" };
    if ([45, 48].includes(code)) return { description: "DIMMA 🌫️" };
    if ([51, 53, 55].includes(code)) return { description: "DUGGREGN 🌧️" };
    if ([61, 63, 65].includes(code)) return { description: "REGN 🌧️" };
    if ([71, 73, 75, 77].includes(code)) return { description: "SNÖ ❄️" };
    if ([80, 81, 82].includes(code)) return { description: "REGNSKURAR 🌧️" };
    if ([95, 96, 99].includes(code)) return { description: "ÅSKA 🌩️" };
    return { description: "OKÄNT" };
  }
