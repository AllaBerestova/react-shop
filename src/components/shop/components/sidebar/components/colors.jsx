import React, {useState} from "react";

export const Colors = () => {
    const [selectedColors, setSelectedColors] =useState([
        {
            id:1,
            name: 'Black',
            completed: false
        },
        {
            id:2,
            name: 'Blue',
            completed: false
        },
        {
            id:3,
            name: 'Red',
            completed: false
        },
        {
            id:4,
            name: 'Yellow',
            completed: false
        },
        {
            id:5,
            name: 'Green',
            completed: false
        }

    ])

    const handleColors = (colorId) => {
        const updateColors = selectedColors.map((color) => {
            if(color.id === colorId){
                return{
                    ...color,
                    completed: !color.completed
                }
            }
            return color
        })
        setSelectedColors(updateColors)
        
    }

    return <>
        <div className="sidebar-title">Colors</div>
        <div className="sidebar-content">
            <div className="colors" >
            {selectedColors.map((color) => (
                    <div className="color" key={color.id}>
                    <input 
                    type="checkbox" 
                    className="color-checkbox" 
                    id={color.name}
                    checked={color.completed}
                    onChange={() => handleColors(color.id)}
                    />
                    <label 
                    htmlFor={color.name} 
                    className="color-name">{color.name}
                    </label>
                </div>
            )) }
            </div>
        </div>
    </>
}