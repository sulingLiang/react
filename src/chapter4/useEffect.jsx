import React, { useState, useEffect } from 'react';

const UseEffectDemo = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = 'count:' + count
  })
  return (
    <div>
      <button onClick={() => {setCount(count + 1)}}>useEffect add</button>
      <p>count: {count}</p>
    </div>
  )
}
export default UseEffectDemo;