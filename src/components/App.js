import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {

  let [state, setState] = useState("")
  let [data, setData] = useState("")

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products)
        setData(data.products)
        setState("fetched");
      })
      .catch((error) =>
        console.error("Error fetching data:", error)
      );
  }, []);

  return (
  <div>
    {/* Do not remove the main div */}
      {
        data &&
        data.map(ele => (
          <pre>{JSON.stringify(ele)}</pre>
        ))
      }
  </div>);
};

export default App;
