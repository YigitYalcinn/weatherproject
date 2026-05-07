# CLIMETABLE // WeatherProject

CLIMETABLE is a small weather app I built with React, TypeScript, and Vite.

It supports city search, current location weather, a 5-day forecast, theme switching, and favorite cities.

Weather data comes from the OpenWeather API. The project is deployed on Vercel.

## Live Demo

[View Live Project](https://weatherprojectdeployment.vercel.app)

## Features

- City-based weather search
- Location-based weather data
- Current weather information
- 5-day weather forecast
- Temperature, humidity, and wind speed details
- Favorite cities feature
- Light/dark theme support
- Responsive layout
- Loading and error states

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

Create a `.env` file in the project root and add:

```bash
VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
```

The `.env` file is ignored by Git. Since this is a Vite frontend project, variables starting with `VITE_` are still included in the browser build.

## What I Learned

While building this project, I practiced:

- Fetching and managing data from an external API
- Working with multiple weather endpoints
- Managing user input and application state in React
- Implementing location-based features
- Creating a light/dark theme structure
- Building reusable components
- Improving the responsive layout
- Deploying a frontend project with Vercel

## Possible Improvements

- Add hourly weather forecast
- Add weather alerts
- Add multi-language support
- Improve animations and micro-interactions
- Add unit selection for Celsius/Fahrenheit
