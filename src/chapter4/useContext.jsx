import React, {useState, createContext, useContext} from 'react';

const MyContext = createContext();

const useContextDemo = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>useContext add</button>
      <p>count:{count}</p>
      <MyContext.Provider value={count}>
        <Foo />
        <Bar />
      </MyContext.Provider>
    </div>
  )
}

const Foo = () => {
  return (
    <div>
      <MyContext.Consumer>
        {count => <div>Foo: {count}</div>}
      </MyContext.Consumer>
    </div>
  )
}

const Bar = () => {
  const context = useContext(MyContext)
  return (
    <div>
      Bar: {context}
    </div>
  )
}
export default useContextDemo