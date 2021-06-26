import React, { useEffect, useState } from "react";
import "App.css";
import getStoryId from "./hackerNewsApi";
//Import Components
import Nav from "./Nav";

const App = () => {
  const [storyId, setStoryId] = useState([]);
  useEffect(() => {
    getStoryId()
      .then(returnedData => setStoryId(returnedData))
  }, [])

  return (
    < div >
      <div>
        <h5>{JSON.stringify(storyId)}</h5>
      </div>
    </div >)

};

export default App