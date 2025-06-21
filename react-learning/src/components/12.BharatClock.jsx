import React, { useEffect, useState } from 'react'

export default function BharatClock() {

    // const time = new Date();
    // console.log(time.toLocaleDateString())
    // console.log(time.toLocaleTimeString())

    //Basicaly we want everytime we can see the current updated time without loading off the page for getting fresh time.SO to achive this we can use setIntervalTimer() with 1 scond gap so that it will get updated again gain in 1 second, we use useState to achive this.


    //Another Example can be giving current rate of doller, current price of any stock data(sensex, gold, nifty rate) etc, where we can use this functionalityy.

    const [CurrentTime, setCurrentTime] = useState(new Date());
    console.log("Current time painted...")

    useEffect(()=>{

      const setIntervalID = setInterval(()=>{
            setCurrentTime(new Date())
        }, 1000)

        return ()=>{
          clearInterval(setIntervalID);
          console.log("Interal has been Cancelled");
        }

    }, [])


  return (
    <center>

        <h1>This Is Bharat Clock : -</h1>
        <h2>Current Time is : {CurrentTime.toLocaleTimeString()}</h2>

    
    </center>
  )
}
