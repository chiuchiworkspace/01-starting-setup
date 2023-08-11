import React, { useState } from 'react';
import LectureDate from './LectureDate';
import './LectureClass.css';

function LectureClass(props) {
    const [title, setTitle] = React.useState(props.title);

    function clickHandler() {
        setTitle("updated");
    } 
    return (
        <div className='expense-item'>
            <LectureDate date={props.date}></LectureDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Set Title</button>
        </div> 
    );
}

export default LectureClass;
