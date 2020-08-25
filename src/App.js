import React from 'react';
import Searchbox from "./Searchbox";
import Currentinfo from './Currentinfo';
import Currentweather from './Currentweather';
import Forecast from './Forecast';




import './Searchbox.css';
import './Currentinfo.css';
import './Currentweather.css';
import './Forecast.css';

function App() {
  return (
      <div className="App container">
        
          <Searchbox />
          <Currentinfo />
          <Currentweather />
          <Forecast />
          <small><a href="https://github.com/Katarina175/react-weather-app-project" target="blank">Open-source code</a> by Katarina Avedaño
          </small>

      </div>
    
    
  );
}

export default App;
