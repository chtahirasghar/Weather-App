import React from 'react'
import { useState } from 'react'
import Info from './Info'
import SearchBox from './SearchBox'

export default function WeatherApp() {
    const [weInfo, setWeInfo] = useState({})
    let updateWeInfo = (newInfo) => {
        setWeInfo(newInfo)
    }

    return (
        <>
            <h1 style={{ textAlign: 'center', color: '#3f51b5' }}>Weather App by LogicGeni</h1>
            <SearchBox updateInfo={updateWeInfo} />
            <Info info={weInfo} />
        </>
    )
}
