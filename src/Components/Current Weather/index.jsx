import { useEffect, useState } from "react";
import { LuWind } from "react-icons/lu";
import { FaTemperatureHigh } from "react-icons/fa";
import style from "./style.module.css";

function CurrentWeather() {
  const [weather, setWeather] = useState(null);
  const [windSpeedUnit, setWindSpeedUnit] = useState("M/s");
  const [temperatureUnit, setTemperatureUnit] = useState("°С");

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=49.9808&longitude=36.2527&current=temperature_2m,is_day,wind_speed_10m&forecast_days=1"
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((err) => console.log(err));
  }, []);

  const handleWindSpeedUnitChange = (unit) => {
    setWindSpeedUnit(unit);
  };

  const handleTemperatureUnitChange = (unit) => {
    setTemperatureUnit(unit);
  };
  return (
    <>
      <form>
        <label>
          <div>
            <span>Wind speed unit:</span>
            <select onChange={(e) => handleWindSpeedUnitChange(e.target.value)}>
              <option value="M/s">M/s</option>
              <option value="Km/h">Km/h</option>
            </select>
            <span>Temperature Unit</span>
            <select
              onChange={(e) => handleTemperatureUnitChange(e.target.value)}
            >
              <option value="°С">°С</option>
              <option value="°F">°F</option>
            </select>
          </div>
          <div>
            <span>Current Weather</span>
            <p>
              <LuWind />
              {weather && weather.current.wind_speed_10m} {windSpeedUnit}
            </p>
            <p>
              <FaTemperatureHigh />
              {weather && weather.current.temperature_2m} {temperatureUnit}
            </p>
          </div>
        </label>
      </form>
    </>
  );
}

export default CurrentWeather;
