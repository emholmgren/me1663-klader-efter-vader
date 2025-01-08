# Klä Mig Rätt © 2025 All Rights Reserved

### Authors: Elli Kaltsidou, Emily Holmgren, Iana Brandis
This web application was created for the course **ME1663 - Digital Prototyputveckling HT 2024** at Blekinge Tekniska Högskola.

**The aim of the project** was to practice data collection via API, and visualising this in some matter.
We have chosen to create a weather webapp for children (ages 4-6) that represents the weather changes in text, the mood of an avatar and the environment around them.

## Project Structure

### Framework
This is a [`Next.js`](https://nextjs.org/) v15 project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and hosted on [`Netlify`](https://kladereftervader.netlify.app/).

### /components
Holds components to be reused across pages or shorten code for complex pages.
Recurring components include **Navbar.js** and **Footer.js** that are used on all pages for the webapp.
The remaining components **Avatar.js**, **ClothesMenu.js**, **Message.js** and **WeatherDisplay.js** are used for the page **/pages/game.js** to simplify the complexity and length of code.

### /pages
Includes four pages:

* **index.js** - Landing page with a hero text, avatar image and CTA-button.

* **parent-tips.js** - Simple text material with information for parents.

* **weather-facts.js** - Simple text material with weather facts for kids. Planned to be made interactive with sounds and animations.

* **game.js** - Contains the heart of the web application.

### Game.js
Contains CTA, API calls, visualisation and user interaction.
Consists of a Home() function with set variables. Asks user to share location, which is used to fetch current local weather description, temperature and city name. The weather data is used to update the background image, weather display, avatar mood and clothing requirements. The user interaction builds on selecting clothes from a menu to change the avatar's clothes and changing their mood from sad to happy.

### /public
Images used in this project. Separates the images in categories /avatars, /backgrounds and /clothes.

### /styles
Stylesheets for global elements and components.

### /utils
Isolated functions to translate weather data to other formats.

## Run the app locally

If you want to run the app locally on your computer, run the development server in the terminal:

```bash
npm run dev
# or
yarn dev
```

Open [`http://localhost:3000`](http://localhost:3000) with your browser to see the result.
