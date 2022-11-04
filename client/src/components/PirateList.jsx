import React from 'react'
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"
import DeleteButton from './DeleteButton'

const PirateList = (props) => {

    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/pirates/${id}`)
    }




    return (
        <div>

            <div className='flex flex-col justify-start items-center w-1/2 mx-auto mt-4'>
                {props.pirates.map(pirate => <p className='w-full flex justify-around items-center my-3'>
                    <span className='inline basis-1/4 object-fit'><img src={pirate.imageUrl} alt=""className="rounded-md w-1/2" /></span><span className='basis-1/4'>{pirate.pirateName} | <span className='text-slate-500 font-bold'>{pirate.position}</span></span>  <button className='p-1 bg-orange-500 rounded text-white font-bold hover:scale-105' id={pirate._id} onClick={(e) => { handleClick(e.target.id) }}>View Profile</button>  <DeleteButton className ="basis-1/4"successfulCallback={() => props.removeFromDom(pirate._id)} id={pirate._id} /></p>)}
            </div>
        </div>
    )
}

export default PirateList