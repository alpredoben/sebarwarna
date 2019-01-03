import React from 'react';
import Picker from '../picker/picker';
import './colorpicker.css';


const ColorPicker = ({ colors, clickHandle, incrementCount }) => {
    let pickers = colors.map((c, i) => {
        return (
        <Picker 
            color={c} 
            key={"picker_" + c} 
            indexColor={i} 
            handleClick={clickHandle}
            countIncrement={incrementCount} 
        />
        )
    }); 

    return (
        <div className="pickers">
            {pickers}
        </div>
    );
}

export default ColorPicker;