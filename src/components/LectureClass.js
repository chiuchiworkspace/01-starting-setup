import React from 'react';
import LectureDate from './LectureDate';
import './LectureClass.css';

function LectureClass(props) {
    
    return (
        <div className='expense-item'>
            <LectureDate date={props.date}></LectureDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div> 
    );
}

export default LectureClass;
