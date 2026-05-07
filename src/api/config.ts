const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

if (!OPENWEATHER_API_KEY) {
  throw new Error("Missing VITE_OPENWEATHER_API_KEY environment variable.");
}

export const API_CONFIG = {
  BASE_URL: "https://api.openweathermap.org/data/2.5",
  GEO: "https://api.openweathermap.org/geo/1.0",
  API_KEY: OPENWEATHER_API_KEY,
  DEFAULT_PARAMS: {
    units: "metric",
    appid: OPENWEATHER_API_KEY,
  },
};
