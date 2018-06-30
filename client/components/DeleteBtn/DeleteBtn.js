import React from 'react';
import './DeleteBtn.css";

const DeletBtn = props => (
    <span className='delete-btn' onClick={props.onClick}> X </span>
);

export default DeleteBtn;
