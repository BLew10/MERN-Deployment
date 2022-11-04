import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"

import PirateForm from '../components/PirateForm';


const Update = (props) => {
    const { id } = useParams()
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])
    //keep track of what is being typed via useState hook
    const [pirate, setPirate] = useState({})

    //handler when the form is submitted

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res => {
                setPirate({...res.data[0]})
                setLoaded(true)
            })
    }, []);

    const updatePirate = (pirate) => {
        axios.put(`http://localhost:8000/api/pirates/${id}`, {
            ...pirate
        })
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors
                const errorArr = []

                for (const key in errorResponse) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
        // }

    }
    //onChange to update firstName and lastName
    return (

        <div>
            <h1 className='text-2xl font-bold text-center bg-orange-400 p-5 mb-3'> Edit {pirate.pirateName}'s Profile</h1>
            <div className='flex justify-between w-1/2 mx-auto'>
            <Link to={"/"} className=" font-bold bg-cyan-500 text-white hover:scale-105 p-3 rounded">Crew Board</Link>
            <Link to={`/pirates/${id}`} className="font-bold bg-yellow-500 text-white hover:scale-105 p-3 rounded">Back {pirate.pirateName}'s' Profile</Link>
            </div>
            <div className='flex justify-center mx-auto items-centers my-3'> <span className='inline basis-1/4 object-fit flex justify-center mx-auto items-centers'><img src={pirate.imageUrl} alt=""className="rounded-md w-1/2" /></span></div>
            {loaded && <PirateForm onSubmitProp={updatePirate} initialPirateName={pirate.pirateName} initialImgUrl={pirate.imageUrl} initialTreasureChests={pirate.treasureChests} initialCatchPhrase={pirate.catchPhrase} initialPosition={pirate.position} initialPegLeg={pirate.pegLeg} initialEyePatch={pirate.eyePatch} initialHookHand={pirate.hookHand} errors={errors} />}

        </div>
    )
}

export default Update
