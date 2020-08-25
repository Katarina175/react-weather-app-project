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
        
        
      
    </div>
  );
}

export default App;
