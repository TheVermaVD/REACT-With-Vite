import React, { useEffect, useState } from "react";
import { useFetch } from "./18.CustomHook";

export default function LearnFetchDataWithCustomHook() {
  const [myData] = useFetch("https://jsonplaceholder.typicode.com/users");
  // console.log(myData);

  //using a another endpoint to fetch data without using custom hook -

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res) => setData(res.users)); //Remember to call 'res.users' here not outside.
  }, []);

  //  console.log("Data :", data);

  console.log(data);

  return (
    <>
      <div>FetchDataWithCustomHook</div>

      <ul>
        {myData.length !== 0 &&
          myData.map((item, index) => (
            <li key={index}>
              Id : {item.id} and name : {item.name} and email : {item.email}
            </li>
          ))}
      </ul>

      <div>FetchDataWithCustomHook - 2</div>

      <ul>
        {data.length !== 0 &&
          data.map((item) => (
            <li>
              ID : {item.id} and firstName : {item.firstName} and lastName :{" "}
              {item.lastName} and age
            </li>
          ))}
      </ul>
    </>
  );
}
