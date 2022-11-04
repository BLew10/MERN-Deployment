import React, { useState } from 'react'
import axios from 'axios';
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"


const PirateForm = (props) => {
    const navigate = useNavigate()
    const { initialPirateName, initialImgUrl, initialTreasureChests, initialCatchPhrase, initialPosition, initialPegLeg, initialEyePatch, initialHookHand, onSubmitProp, errors } = props
    const [pirate, setPirate] = useState({
        pirateName: initialPirateName,
        imageUrl: initialImgUrl,
        treasureChests: initialTreasureChests,
        catchPhrase: initialCatchPhrase,
        position: initialPosition,
        pegLeg: initialPegLeg,
        eyePatch: initialEyePatch,
        hookHand: initialHookHand
    });
    //handler when the form is submitted

    const changeHandler = (e) => {
        if (e.target.name === "pegLeg") {
            pirate[e.target.name] = !pirate.pegLeg
            setPirate({ ...pirate })
        } else if (e.target.name === "eyePatch") {
            pirate[e.target.name] = !pirate.eyePatch
            setPirate({ ...pirate })
        } else if (e.target.name === "hookHand") {
            pirate[e.target.name] = !pirate.hookHand
            setPirate({ ...pirate })
        } else {
            setPirate({ ...pirate, [e.target.name]: e.target.value })
            console.log(pirate)
        }
    }

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        console.log(pirate)
        onSubmitProp(pirate)
    }



    return (
        <form onSubmit={onSubmitHandler} className="w-fit mx-auto p-5 bg-orange-400 rounded">
            {errors.map((err, index) => <p className='text-red-500 font-bold bg-white' key={index}>{err}</p>)}
            <p>
                <label className=' font-bold'>Name: </label><br />
                <input className='border-2 border-slate-300 rounded' type="text" onChange={(e) => changeHandler(e)} value={pirate.pirateName} name="pirateName" />
                {/* {errors ? <p className='text-red-500 font-bold' >{errors[0].message}</p> : null } */}
            </p>
            <p>
                <label className=' font-bold'>Image URL: </label><br />
                <input className='border-2 border-slate-300 rounded' type="text" onChange={(e) => changeHandler(e)} value={pirate.imageUrl} name="imageUrl" />
            </p>
            <p>
                <label className=' font-bold'>Treasure Chest(s): </label><br />
                <input className='border-2 border-slate-300 rounded' type="number" onChange={(e) => changeHandler(e)} value={pirate.treasureChests} name="treasureChests" />
            </p>
            <p>
                <label className=' font-bold'>Catch Phrase: </label><br />
                <input className='border-2 border-slate-300 rounded' type="text" onChange={(e) => changeHandler(e)} value={pirate.catchPhrase} name="catchPhrase" />
            </p>
            <p>
                <label>Position: </label><br />
                <select name="position" id="position" onChange={(e) => changeHandler(e)} value={pirate.position}>
                    <option value="" hidden>Please Select a Position</option>
                    <option value="First Mate">First Mate</option>
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Bootswain">Bootswain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                    <option value="Captain">Captain</option>
                </select>
            </p>
            <p className='my-2'>
                <label className=' font-bold'>Accessories: </label><br />
                <div className='flex flex-col justify-start items-center'>
                    <p className='flex justify-between w-1/2'><input className="accent-[#000000]" type="checkbox" name="pegLeg" id="pegLeg" onClick={(e) => changeHandler(e)} defaultChecked={pirate.pegLeg} /><label className='text-white' htmlFor="">Peg Leg</label></p>
                    <p className='flex justify-between w-1/2'><input className="accent-[#000000]" type="checkbox" name="eyePatch" id="eyePatch" onClick={(e) => changeHandler(e)} defaultChecked={pirate.eyePatch} /><label className='text-white' htmlFor="">Eye Patch</label></p>
                    <p className='flex justify-between'><input className="accent-[#000000]" type="checkbox" name="hookHand" id="hookHand" onClick={(e) => changeHandler(e)} defaultChecked={pirate.hookHand} /><label className='text-white' htmlFor="">Hook Hand</label></p>
                </div>
            </p>
            <div className='flex justify-between'>
                <input className='p-1 bg-black text-white font-bold hover:scale-105 rounded' type="submit" />
                <button className='p-1 bg-white text-black font-bold hover:scale-105 rounded' onClick={() => navigate('/')}>Cancel</button>
            </div>
        </form>
    )
}

export default PirateForm