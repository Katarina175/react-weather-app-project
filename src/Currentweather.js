import React from "react";

export default function Currentweather() {
  return (
    <div className="Currentweather">
      <div className="row">
        <div className="col-3 pl-5 pr-0">
          <div className="Weathertemperature">
            <span id="Currenttemp">90</span>
            <span id="Degrees">
              <a href="/">°F</a> | <a href="/">°C</a>
            </span>
          </div>
          <div className="Weatherdetails">
            <ul>
              <li>Wind: 5 mph</li>
              <li>Humidity: 20%</li>
            </ul>
          </div>
        </div>
        <div className="col-3 pr-2 pl-4">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt ="weathericon"/>
        </div>
        <div className="col-6" id="Weathersaying">
          "...say hello to great weather today!"
        </div>
      </div>
    </div>
  );
}