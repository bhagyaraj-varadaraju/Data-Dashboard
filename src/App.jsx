import { useState, useEffect } from 'react'
import DashBoard from './Components/DashBoard'
import NavBar from './Components/NavBar'
import SummaryCard from './Components/SummaryCard'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailsPage from './Components/DetailsPage'

function App() {
  const [list, setList] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Gainesville,%20FL?key=XKKMWMH6AHD9PSC6KJ3U27WTE&include=days&elements=id,temp,feelslikemin,tempmin,datetime,moonphase,sunrise,sunset,moonrise,moonset,description,visibility,conditions");
      const json = await response.json();
      
      console.log(json);
      setList(json);
    };

    fetchWeatherData().catch(console.error);

  }, []);

  const App1 = ({list}) => (
    list ? <><div className="App-row">
      <SummaryCard title="Location" value={list.address}/>
      <SummaryCard title="Sun Rise" value={list.days[0].sunrise}/>
      <SummaryCard title="Minimum Temperature" value={list.days[0].tempmin}/>
    </div>
    <DashBoard list={list} />
    </> : null
  );

  return (
    <div className="App">
    <NavBar />  
    <BrowserRouter>
      <Routes>
        <Route exact path='/:date' Component={() => <DetailsPage list={list?.days} />} />
        <Route exact path='/' Component={() => <App1 list={list}/>} />
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
