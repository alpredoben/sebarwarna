import React from 'react';
import './cell.css'

const MyCell = ({ color, size }) => {
    let class_name = "cell-" + size + " " + color;
    return (
        <div className={class_name}></div>
    )
}

export default MyCell;