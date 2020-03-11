import React, { createContext } from 'react';

const Context = createContext(90);

const ContextParent = () => {
  const obj = {
    name: 'Katy',
    age: 18
  }
  return (
    <Context.Provider value={obj}>
      <ContextChild />
    </Context.Provider>
  )
}

const ContextChild = () => {
  return (
    <Context.Consumer>
      {obj => 
        <div>context
          <div>name: {obj.name}</div>
          <div>age: {obj.age}</div>
        </div>
      }
    </Context.Consumer>
  )
}

export default ContextParent
