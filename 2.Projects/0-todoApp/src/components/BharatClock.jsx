import React from 'react'

export default function BharatClock() {


    const time = new Date()

   const currentDate = time.toLocaleDateString()
   const currentTime = time.toLocaleTimeString()



  return (

    <center>

        {/* Clock-Heading - */}
        <b>Bharat Clock</b>

        {/* CLock Slogan */}
        <i className='block'>This is the clock shows the time in Bharat at all times!! </i>

        {/* clock Time */}
        <p>Current Time : {currentDate} - {currentTime}</p>

    </center>

  )
}
