import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PirateForm from '../components/PirateForm';
import PirateList from '../components/PirateList'
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"


const Main = (props) => {
    const [loaded, setLoaded] = useState(false)
    const [pirates, setPirates] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then(res => {
                setPirates(res.data)
                setLoaded(true)
            })
            .catch(err => console.error(err))
    }, [loaded])

    const removeFromDom = pirateId => {
        setPirates(pirates.filter(pirate => pirate._id !== pirateId));
    }


    return (
        <div className='flex flex-col justify-center'> 
        <h1 className='text-2xl font-bold text-center bg-orange-300 p-5'> Pirate Crew</h1>
            <Link to={'/pirates/new'} className="hover:underline  hover:scale-105 text-blue-400 text-center mx-auto font-bold my-3 border-2 px-2 border-blue-400 rounded"> Add An Pirate </Link>
            {loaded && <PirateList pirates={pirates} removeFromDom={removeFromDom} />}

        </div>
    )
}


export default Main


