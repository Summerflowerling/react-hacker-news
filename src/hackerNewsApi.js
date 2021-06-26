import axios from "axios"
import React from "react";
import "regenerator-runtime/runtime"

export const baseUrl = `https://hacker-news.firebaseio.com/v0/`
export const newStoryId = `${baseUrl}newstories.json`
export const storyUrl = `${baseUrl}item/`

/*GET request for ID*/
export const getStoryId = async () => {
    const result = await axios.get(newStoryId)
        .then(data => {
            console.log("checking data", data)
            return data.data
        })
    console.log("This is result", result)
    return result
}

/*GET request for sotry*/
export const getStory = async (id) => {
    const result = await axios.get(`${storyUrl + id}.json`)
        .then(storyData => {
            console.log("This is the story", storyData)
            return storyData
        })
    console.log("This is the result in get story", result)
    return result
}


