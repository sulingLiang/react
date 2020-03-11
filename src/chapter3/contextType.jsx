import React, { createContext } from 'react'

const MyContext = createContext()

class ContextParent extends React.Component {
  render() {
    return (
      <MyContext.Provider value={'hello Kitty'}>
        <ContextChild />
      </MyContext.Provider>
    )
  }
}

class ContextChild extends React.Component {
  static contextType = MyContext
  render() {
    const context = this.context
    return (
      <div>contextType: {context}</div>
    )
  }
}

export default ContextParent;