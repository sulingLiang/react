import React, { useState, useEffect, useRef } from 'react'

const useRefDemo = () => {
  const [count, setCount] = useState(0)
  const time = useRef()
  useEffect(() => {
    time.current = setInterval(() => 
      setCount((count) => count + 1)
    ,1000)
  }, [])

  useEffect(() => {
    if(count >= 3) {
      clearInterval(time.current)
    }
  })
  return (
    <div>
      <p>useRef count: {count}</p>
    </div>
  )
}
export default useRefDemo