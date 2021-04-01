import React from 'react';


const Button = (props) =>{
    return (
        <>
        <button style={{ backgroundColor:props.bcolor }} onClick={props.onSelect}>{props.text}</button>
        </>
    );
}


export default Button;