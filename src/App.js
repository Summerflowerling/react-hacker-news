import React, { useEffect, useState } from "react";
import "App.css";
import {Story} from "../server/hackernews.server"


const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Story/>
    </div>
  )
};

export default App