import axios from "axios"
import React from "react";
import "regenerator-runtime/runtime"

export const baseUrl = `https://hacker-news.firebaseio.com/v0/`
export const newStoryId = `${baseUrl}newstories.json`
export const storyUrl = `${baseUrl}item/`

/*GET request*/
const getStoryId = async () => {
    const result = await axios.get(newStoryId)
        .then(data => {
            console.log("checking data", data)
            return data.data
        })
    console.log("This is result", result)
    return result
}

export default getStoryId