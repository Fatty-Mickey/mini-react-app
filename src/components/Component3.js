import React, { useState } from 'react'

export default function Component3() {
    const [count, setCount] = useState(0)
    const [comments, setComment] = useState([])

    let myRef = React.createRef()

    let handler = () => {
        let currentCount = count
        currentCount++
        setCount(currentCount)
    }
    let addComment = () => {
        let currentComment = myRef.current.value
        let updateComments = [...comments, currentComment]
        setComment(updateComments)
        myRef.current.value = ''
    }
    return (
        <div>
            <h1>State</h1>
            <div>
                <button onClick={handler}>Count +</button>
            </div>
            <div>{count}</div>
            <div><textarea ref={myRef}></textarea></div>
            <div>
                <button onClick={addComment}>Add comment</button>
            </div>
            <div>
                <ul>
                    {comments.map((item, index) => <li key={index}> {item}</li>)}
                </ul>
            </div>
        </div>
    )
}
