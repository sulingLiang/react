import React, { useState, useCallback, useEffect } from 'react'

const useSize = () => {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])
  useEffect(() => {
    window.addEventListener('resize', onResize, false)
    return () => {
      window.removeEventListener('resize', onResize, false)
    }
  })
  return size;
}

const useCounter = (defaultCount) => {
  const [count, setCount] = useState(defaultCount)
  const decrease = () => {
    setCount(count - 1)
  }
  const increase = () => {
    setCount(count + 1)
  }
  return [count, {increase, decrease}]
}

const CustomHookDemo = () => {
  const [count, changeCount] = useCounter(10)
  const size = useSize()
  return (
    <div>
      <p>count: {count}</p>
      <p>{size.width}*{size.height}</p>
      <button onClick={changeCount.increase}>增加</button>
      <button onClick={changeCount.decrease}>减少</button>
    </div>
  )
}


export default CustomHookDemo