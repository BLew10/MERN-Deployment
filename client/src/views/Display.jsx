import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"

const Display = (props) => {
    const [pirate, setPirate] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res => {
                setPirate(res.data[0])
                console.log(res.data, "**8")
            })
            .catch(err => console.error(err))
    }, [])
    const handleClick = (e) => {
        if (e.target.name === "pegLeg") {
            pirate[e.target.name] = !pirate.pegLeg
            setPirate({ ...pirate })
        } else if (e.target.name === "eyePatch") {
            pirate[e.target.name] = !pirate.eyePatch
            setPirate({ ...pirate })
        } else if (e.target.name === "hookHand") {
            pirate[e.target.name] = !pirate.hookHand
            setPirate({ ...pirate })
        }
        axios.put(`http://localhost:8000/api/pirates/${id}`, {
            ...pirate
        })
    }

    return (
        <div className='flex flex-col justify-start items-center w-1/4 mx-auto bg-orange-400 rounded my-3 p-3'>
            <p className='my-1 font-bold text-3xl'>{pirate.pirateName}</p>
            <img src={pirate.imageUrl} alt="" />
            <p className='flex justify-between w-4/5 my-1'> <span className='font-bold'>Catch Phrase:</span> <span>{pirate.catchPhrase}</span></p>
            <p className='flex justify-between w-4/5 my-1'><span className='font-bold'>Treasure Chests:</span>  <span>{pirate.treasureChests}</span></p>
            <p className='flex justify-between w-4/5 my-1'> <span className='basis-1/2'><span className='font-bold'>Peg Leg:</span> <span>{pirate.pegLeg ? "Yes" : "No"} </span></span><button name="pegLeg" onClick={(e) => handleClick(e)} className='px-3 bg-indigo-500 text-white font-bold rounded-md basis-1/2'>{pirate.pegLeg ? "Remove Peg Leg" : "Add Peg Leg"}</button></p>
            <p className='flex justify-between w-4/5 my-1'> <span className='basis-1/2'><span className='font-bold'>Eye Patch:</span> <span>{pirate.eyePatch ? "Yes" : "No"} </span></span><button name="eyePatch" onClick={(e) => handleClick(e)} className='px-3 bg-indigo-500 text-white font-bold rounded-md basis-1/2'>{pirate.eyePatch ? "Remove Eye Patch" : "Add Eye Patch"}</button></p>
            <p className='flex justify-between w-4/5 my-1'> <span className='basis-1/2'><span className='font-bold'>Hand Hook:</span> <span>{pirate.hookHand ? "Yes" : "No"} </span></span><button name="hookHand" onClick={(e) => handleClick(e)} className='px-3 bg-indigo-500 text-white font-bold rounded-md basis-1/2'>{pirate.hookHand ? "Remove Hook Hand" : "Add Hook Hand"}</button></p>


            <div className='flex justify-between w-4/5 my-1'>
                <Link to={`/pirates/${id}/edit`} className="text-white font-bold bg-black p-3 rounded hover:underline hover:scale-105">Edit Everything</Link>
                <Link to={"/"}  className="text-black font-bold bg-white p-3 rounded hover:underline hover:scale-105">Back to Crew</Link>
            </div>
        </div>
    )
}

export default Display