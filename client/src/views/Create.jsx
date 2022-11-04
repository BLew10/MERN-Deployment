import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PirateForm from '../components/PirateForm';
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"


const Create = (props) => {
    const navigate = useNavigate()
    const [loaded, setLoaded] = useState(false)
    const [pirates, setPirates] = useState([])
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then(res => {
                setPirates(res.data)
                setLoaded(true)
            })
    }, [loaded])

    const newPirate = (pirate) => {
        axios.post('http://localhost:8000/api/pirates/new', {
            ...pirate
        })
            .then(res => {
                console.log(res.data.message)
                if (res.data.message === "Captain already exists") {
                    setErrors([res.data.message])
                } else {
                    navigate('/')
                }
                // console.log(res)
                // navigate('/pirates')
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
        // .catch(err=>console.log(err))
        setLoaded(false)
    }

    return (
        <div>
            <h1 className='text-2xl font-bold text-center bg-orange-400 p-5 mb-3'> Add A New Pirate</h1>
            <PirateForm onSubmitProp={newPirate} initialPirateName="" initialImgUrl="" initialTreasureChests={0} initialCatchPhrase="" initialPosition="" initialPegLeg={true} initialEyePatch={true} initialHookHand={true} errors={errors} />
            <div className='flex justify-center'>
            <Link to={"/"}  className="text-black font-bold bg-slate-400 px-5 py-3 rounded hover:underline hover:scale-105 my-3">Back to Crew</Link>
            </div>

        </div>
    )
}


export default Create


