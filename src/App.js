import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Person from "./Person";

const App = () => {
  const [data, setData] = useState(); // where to store the returned data
  const [error, setError] = useState(null); // where to store the coming errors
  useEffect(() => {
    let result1 = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data))
      .catch((error) => setError(error));
  }, []);
  return (
    <div>
      <div className="list">
        {data?.map((el, i) => (
          <Person key={i} el={el} coleur={i} />
        ))}
      </div>
    </div>
  );
};
export default App;
