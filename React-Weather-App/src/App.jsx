import React, { useEffect, useState } from "react";
import "./App.css"; 

function App() {
  const [city, setCity] = useState("Karachi");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = (cityName) => {
    setLoading(true);
    setError("");
    setWeather(null);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=2f567e77a9babdb9ef54f8faa085c865`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("City not found!");
        }
        return res.json();
      })
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getWeather(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      getWeather(city);
    }
  };

  return (
    <div className="app">
      <h1 className="title">🌦 Weather App</h1>

      {}
      <form onSubmit={handleSearch} className="search-box">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>

      {}
      {loading && <p className="loading">⏳ Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="card">
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <h3>{weather.main.temp}°C</h3>
          <p>{weather.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬 Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;
