import useStore from '../../../store/fruits';
import React, { useRef } from 'react'


export default function Fruits() {

    const inputRef = useRef(); 

    const { fruits, addFruits }  = useStore()
    const addNew = () => {
        addFruits(inputRef.current.value)
        inputRef.current.value = ""
    }

    return (
        <div className="text-center p-2 mt-[20px] shadow-lg bg-rose-200 rounded-full p-4">
            <h1> I have { fruits.length } in my basket </h1> 
            <p> Add a new Fruit </p>

            <div className="flex space-x-4 mx-auto w-[300px] justify-between">
                <input ref={ inputRef } className="p-2"/>
                <button className="p-2 bg-sky-500" onClick={ addNew } > Add a fruit </button> 
            </div>

            <div className="shadow-lg bg-gray-100 w-[500px] mx-auto mt-[20px] p-2">
                { fruits.map((item, index) => {
                    return (
                        <p key={ index }> { item } </p> 
                    )
                
                }) }
            </div>
        </div>
    )
}