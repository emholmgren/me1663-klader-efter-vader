// Translate weather code into text description
export function mapWeatherCode(code) {
    if (code === 0) return { description: "Klar himmel" };
    if ([1, 2, 3].includes(code)) return { description: "Molnigt" };
    if ([45, 48].includes(code)) return { description: "Dimma" };
    if ([51, 53, 55].includes(code)) return { description: "Duggregn" };
    if ([61, 63, 65].includes(code)) return { description: "Regn" };
    if ([71, 73, 75, 77].includes(code)) return { description: "Snö" };
    if ([80, 81, 82].includes(code)) return { description: "Regnskurar" };
    if ([95, 96, 99].includes(code)) return { description: "Åskstorm" };
    return { description: "Okänt väder" };
  }
