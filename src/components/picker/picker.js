import React from 'react';
import './picker.css';

export const Picker = ({color, indexColor, handleClick, countIncrement}) => {
    let class_name = color + ' picker';

    return (
        <div className={class_name}  onClick={(e) => {
            countIncrement();
            handleClick(indexColor)
        }}></div>
    );
}
