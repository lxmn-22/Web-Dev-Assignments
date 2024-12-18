import React, { useEffect } from 'react'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'


const Weather = () => {

    // Add API from open weather.
    
  return (
    <div className='place-self-center p-10 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex flex-col items-center'>
        <div className='flex items-center gap-2'>
            <input className='h-12 border-none outline-none rounded-full pl-5 bg-[#ebfffc] text-lg text-[#626262]' type="text" placeholder='Search' />
            <img className='w-12 p-3 rounded-full bg-[#ebfffc] cursor-pointer' src={search_icon} alt="search-icon" />
        </div>
        <img className='w-36 mx-8 my-0' src={clear_icon} alt="clear-icon" />
        <p className='text-[#fff] text-7xl leading-none'>16°C</p>
        <p className='text-[#fff] text-4xl'>London</p>

        <div className='w-full flex mt-10 text-[#fff] justify-between'>
            <div className='flex items-start gap-3 text-xl'>
                <img className='w-6 mt-2.5' src={humidity_icon} alt="humidity-icon" />
                <div>
                    <p>91%</p>
                    <span className='block text-xl'>Humidity</span>
                </div>
            </div>

            <div className='flex items-start gap-3 text-xl'>
                <img className='w-6 mt-2.5' src={wind_icon} alt="wind-icon" />
                <div>
                    <p>3.6 Km/h</p>
                    <span className='block text-xl'>Wind Speed</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather