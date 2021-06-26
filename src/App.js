import React, { useEffect, useState } from "react";
import "App.css";
import { getStoryId } from "./hackerNewsApi";
import { getStory } from "./hackerNewsApi"
import { StoryComponent } from "./storyComponent";

const App = () => {
  return (
    <StoryComponent />
  )
};

export default App