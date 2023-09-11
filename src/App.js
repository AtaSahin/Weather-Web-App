import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("Istanbul");
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = "928b916fd33a31ae13bc9f5c43fee8af";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setError(null);
      })
      .catch((error) => {
        setError("Location not found");
        setData({});
      });
  }, [location]);

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      setLocation(event.target.value);
    }
  };

  return (
    <div className="App">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          type="text"
          color="white"
        ></input>
        <button onClick={() => setLocation(location)}>Search</button>
      </div>
      {error && <p>{error}</p>}
      {data && data.name && (
        <div className="container">
          <div className="top">
            <div className="location">
              <p>
                {data.name}, {data.sys.country}
              </p>
            </div>
            <div className="temp">
              <h1 className="bold">{Math.round(data.main.temp - 273.15)}°C</h1>
            </div>
            <div className="description">
              <p>{data.weather[0].description}</p>
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              <p>{Math.round(data.main.feels_like - 273.15)}°C</p>
              <p>Feels Like</p>
              <div className="humidity">
                <p>{data.main.humidity}%</p>
                <p>Humidity</p>
              </div>
              <div className="wind">
                <p>{data.wind.speed} m/s</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
