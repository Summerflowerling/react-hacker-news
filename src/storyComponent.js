import React, { useEffect, useState } from "react";
import "App.css";
import { getStoryId } from "./hackerNewsApi";
import { getStory } from "./hackerNewsApi"

export const StoryComponent = () => {
    const [storyId, setStoryId] = useState([]);
    useEffect(() => {
        getStoryId()
            .then(returnedData => {
                setStoryId(returnedData)
                getStory(27641389)

            })
    }, [])

    return (
        < div >
            <div>
                <h5>{JSON.stringify(storyId)}</h5>
            </div>
        </div >)

};