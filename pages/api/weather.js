import axios from 'axios';

export default async function handler(req, res) {

    //const { location } = req.query;

    try {

        // Endpoint: Fetch weather
        const response = await axios.get(
            `https://api.open-meteo.com/v1/forecast`,
            {
                params: {
                    latitude: lat,
                    longitude: lon,
                    current_weater: true,
                },
            });

        const weatherData = response.data.current_weather;

        res.json({
            temperature: weatherData.temperature,
            weatherCode: weatherData.weathercode,
        });

    } catch (error) {
        res.status(500).json({ error: "Kunde inte hämta väderdata" });
    }
};
