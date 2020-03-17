import React, { useState, useMemo, useCallback, memo } from 'react'

const useMemoDemo = () => {
  const [count, setCount] = useState(0)
  const double = useMemo(() => {
    return count * 2
  }, [count])
  const handleClick = useCallback(() => {
    console.log('click')
  }, [])
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>useMemo add</button>
      <p>count: {count}</p>
      <Foo count={double} handleClick={handleClick}/>
    </div>
  )
}
const Foo = memo((props) => {
  console.log('foo render')
  return (
    <div onClick = {props.handleClick}>Foo组件:{props.count}</div>
  )
})
export default useMemoDemo