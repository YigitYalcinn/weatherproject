# CLIMETABLE // WeatherProject

CLIMETABLE is a modern and responsive weather application built with React, TypeScript, and Vite.

Users can search for any city, view current weather details, check the 5-day forecast, get weather data based on their current location, switch between light/dark themes, and save favorite cities.

The project uses the OpenWeather API and is deployed on Vercel.

## Live Demo

[View Live Project](https://weatherprojectdeployment.vercel.app)

## Features

- City-based weather search
- Location-based weather data
- Real-time current weather information
- 5-day weather forecast
- Temperature, humidity, and wind speed details
- Favorite cities feature
- Light/dark theme support
- Fully responsive modern UI
- User-friendly error handling
- Fast and lightweight structure with Vite

## Tech Stack

- React
- TypeScript
- Vite
- OpenWeather API
- Vercel

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/YigitYalcinn/weatherproject.git
cd weatherproject
```

2. Install dependencies:

```bash
npm install
```

3. Create your local environment file:

```bash
cp .env.example .env
```

4. Add your OpenWeather API key to `.env`:

```bash
VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
```

5. Start the development server:

```bash
npm run dev
```

The app runs locally at `http://localhost:5173`.

## Environment Variables

This project expects:

```bash
VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
```

Do not commit `.env`. Vite exposes `VITE_` variables to the browser bundle, so this keeps the key out of GitHub source code but does not make it secret from users of the running frontend app.

## What I Learned

While building this project, I practiced:

- Fetching and managing data from an external API
- Working with multiple weather endpoints
- Managing user input and application state in React
- Implementing location-based features
- Creating a light/dark theme structure
- Building reusable components
- Improving responsive UI design
- Deploying a frontend project with Vercel

## Possible Improvements

- Add hourly weather forecast
- Add weather alerts
- Add multi-language support
- Improve animations and micro-interactions
- Add unit selection for Celsius/Fahrenheit
