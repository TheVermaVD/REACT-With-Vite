/*

#Data Fetch : Fetch means kuch utha kar lana.
#API Means : An adresss from where we can get/fetch JSON formate data, mostly.

#Fetch Function : It is js function to fetch API for network requests and It is promise-based function which retuns a Promise with response object.

To fetch API data from Server or dummy server, we use dummyJson website and we use fetch() method to get our data from server -

fetch("<API_URL>") //fetch() method retuns an Promise
.then(res=> res.json()) //res.json() method also returns an Promise, to resolve again we do .then() method chaining.

.then(res=> console.log(res)); //Get the result
.catch(err=> console.log(err)) ; //In Case any error happening resolving the promises.

Note: Here, fetch(1st, 2nd) ; 2nd argument where we can excessively apply Headers of request i.e HTTP methods for various HTTP mehthod call, Default method is GET, i.e method:'GET' 

#useEffect() : This hook mostly use for network call coz this hook takes an function, and we can dertermind when this function gonna run on either state changes or only once render on component get rendered.

useEffect() handles side effects like data fetching from network or event listners.

without second parameter in useEffect(), it runs automatically after every render of component bydefault.

By provding a depencies array as second argument, we can controll useEffect only run when specified vaariables changes. An empty array means runs useEffect once.

Note: [<props>] : suppose our fetch API url we getting as props data from parent component, then we pass tht prop variable as depencecies to second parameter, that states It must render on Initial render as well as re-renders when there is any change in props value than privious i.e get modified.

#useEffect() Second Argument :-

[] --> Run at Initial Render only.

..nothing/ommit.. ---> Run at Intial Render ---> Run after every re-render everytime.

[data] ----> Run at Intial Render  ---> Run after every render if data has changed since last rendered.



Multiples useEffect() hook can be used in single component for organizing different side effects seperately.

-----------------------------------------------------------------
// Handling Loading State i.e Spinner : Since we know API call i.e network call initial take some seconds for tht duration our UI is waiting for result so we can show a 'Loading Spinner' to user to wait tht your data ie UI is loading dont go anywhere.

// How to setLoading Spinner : We use a useState() to hold initial spinner value as 'false' when
    

-----------------------------------------------------------------

useEffect() Hook Cleanup : It is used when we want that if our component is gonna die means when user get neviate to other component then this useEffect() Cleanup function will call and we can able to perform any task for component related like if user hit the API call but it's taking some time so user went to other tab so ideally we can stop the API call as UI of the previous component got die ie componentWillUnmount() and again when componentDidMount then again our useEffect() api call get starts. SO in this way we can improve our app performance.

So we add useEffect() cleanup function by including a function or arrow function to be return to the useEffect() hook, at the end of the useEffect Hook.

Note : with cleanup funtion we can cancel anything for the component like API call, if user change the tab or some data modied so API call will get stop and then starts.

useEffect(()=>{


    
    return ()=> console.log("Cleanup function get runned...");

    }, [])

Advantage : Returning a function  from 'useEffect' allows for cleanup, ideal for removing event listeners.

Example of Cleanup in Real time : 

a) API cleanup : calling Cleanup when user move to other page, then stop calling API call, interrupt it in mid.

b) Set timer cleanup : Like in realtime clock, current Cricket score, stock rate.



*/

import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function LearnDataFetch() {
  //Without useEffect,Fetchin API data from server : Can run but the problem is that it runs on everytimes i.e everytime it call network call when ever this component will render again.

  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false);

  // useEffect(()=>{

  //     console.log("Fetch Started..");
  //     setFetching(true);

  //     fetch('https://dummyjson.com/products')
  //     .then(res=> res.json())
  //     .then(res=> {
  //         console.log("Fetch Running..");
  //         setFetching(false);

  //         setData(res.products);

  //     })
  //     .catch(console.error);

  //     console.log("Fetch Ended..");
  //     setFetching(true);

  //     return ()=> console.log("Cleanup function get runned...")

  // },[])

  // Advance uses of useEffect() : where we cancel the API call i.e API cleanup, whenever component will unmount i.e DIE, and we use AbortController() Constructor function to achive this -

  // AbortController interface i.e AbortController() constructor :  It is constructor object use to abort one or more Web requests as and when desired. We can create a new AbortController object using the AbortController() constructor.
  //
  //
  // Communicating with an asynchronous operation is done using an AbortSignal object.

  //abortController object provides 'single' property by which we can fetch our API data via abosortsingal object, this can be pass as second 'argument' to fetch method; Note second argument of fetch() method takes an object.

  //abortController object also provides 'abort' method by which anytime we can cancel API call i.e abort the single of abortcontroller object.

  useEffect(() => {
    const abortController = new AbortController();
    // console.log(controller); //gets an object having major two : 'signal' property and 'abort' method.

    const abortSignal = abortController.signal;

    console.log("API Call started..");
    //API CALL -
    fetch("https://dummyjson.com/products", { abortSignal })
      .then((res) => res.json())
      .then((res) => setData(res.products))
      .catch(console.error);

    //API CALL Cleanup  -
    return () => {
      abortController.abort();
      console.log("API call has been cancelled!");
    };
  }, []);

  return (
    <>
      <h2>The Fetch Data from API Call IS : </h2>
      {fetching && <LoadingSpinner />}
      {!fetching && data.length === 0 && (
        <h3> There are No Posts Available!!</h3>
      )}

      <ul>
        {!fetching &&
          data.map((item, index) => (
            <div key={index}>
              <li>
                Title is : {item.title} with id : {item.id}
              </li>
              <p>
                Image is : <img src={item.images[0]} width={200} alt="" />
              </p>
            </div>
          ))}
      </ul>
    </>
  );
}
