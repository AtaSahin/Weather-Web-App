import React, { useState } from "react";
import Landing from "./components/Landing";
import index from "./index.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&id=524901&appid=928b916fd33a31ae13bc9f5c43fee8af`;

  const searchLocation = (event) => {
    if (event.key === "Enter")
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  };

  return (
    <div className="App">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          onKeyPress={searchLocation}
          type="text"
        ></input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1 className="bold">20 C</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>24 C</p>
            <p>Feels Like</p>
            <div className="humidity">
              <p>20%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p>20 km/h</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
