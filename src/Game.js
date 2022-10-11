import React from 'react'

export default function Game({ percentage, step, question, onClickVariant }) {
    

    return (
        <>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((item, index) => <li onClick={() => { onClickVariant (index)}} key={index}>{item}</li>)}
            </ul>
        </>
    );
}
