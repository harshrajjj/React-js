import React from 'react'
import { useParams } from 'react-router'  /// id niklne k lie url params use kie 

function User() {
    const {id} = useParams() // use params phly import kie h then hum use kie hai then /:id p call lga hoga then yha params m aaya then hum yha se usko nikl lie hai
    return (
        <div className='bg-gray-600 text-white p-4 text-center text-4xl'>User : {id}</div>
    )
}

export default User
