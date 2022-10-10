import React, { useState } from 'react'

export default function CountFunctionComponent() {
  const [count, setCount] = useState(0)


  let handlerMinus = () => {
    let currentCount = count
    currentCount--
    setCount(currentCount)
  }
  let handlerPlus = () => {
    let currentCount = count
    currentCount++
    setCount(currentCount)
  }

  return (
    <div>
      <h1>Count</h1>
      <div>
        <button onClick={handlerMinus}>Count -</button>
        <button onClick={handlerPlus}>Count +</button>
      </div>
      <div>{count}</div>
    </div>
  )
}
