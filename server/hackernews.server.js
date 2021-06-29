
import React from "react";
import "regenerator-runtime/runtime"
import { useEffect, useState } from "react";
const fetch = require('node-fetch')

export const baseUrl = `/api/v1/search?query=foo&tags=story`
export const Story = ()=>{
    const  [info, setInfo] = useState([])

    useEffect(()=>{
       getData()
     
    }, []);

    const getData = ()=>{
        const response = fetch(baseUrl)
        .then(response=> {return (response.json())})
        .then(data=> setInfo(data))
    }

    console.log(info)
    return (      
        <div>
            <p>Message from Story</p>
            <p>{JSON.stringify(info)}</p>
        </div>
    )


}

