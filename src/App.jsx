import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import MUI1 from './MUI1'
import Info from './WeatherApp/Info'
import SearchBox from './WeatherApp/SearchBox'
import WeatherApp from './WeatherApp/WeatherApp'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Material UI Partice */}
      {/* <MUI1 /> */}
      <WeatherApp />
    </>
  )
}

export default App
