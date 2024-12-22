import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router' // wha se jo v loader data dale h usko yha use karne k lie ye hook hai 


function Github() {
     const data = useLoaderData()

    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/harshrajjj")
    //     .then(response => response.json())
    //     .then(data => useState(data))
    // },[])


    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>
            Github Followers : {data?.followers}
            <img src="{data?.avtar_url}" alt="Git Picture" width={300} />
        </div>
    )
}

export default Github


export const githubinfoLoader= async () => {
    const response = await fetch("https://api.github.com/users/harshrajjj")
    return  response.json();
}