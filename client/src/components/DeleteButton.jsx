import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const { id, successfulCallback } = props

    const deletePirate = () => {
        axios.delete(`http://localhost:8000/api/pirates/${id}`)
            .then(res => {
                successfulCallback(id)
                console.log("im here")
            })
            .catch(err => console.error(err));


    }
    return (
            <button className='p-1 bg-red-500 font-bold text-white rounded hover:scale-105' onClick={deletePirate}>Walk the Plank</button>
    )
}

export default DeleteButton