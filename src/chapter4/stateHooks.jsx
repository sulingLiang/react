import React, { useState } from 'react'

const StateHook = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>count: {count}</p>
    </div>
  )
}

export default StateHook
