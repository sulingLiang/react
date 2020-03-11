import React, { Component, PureComponent, memo } from 'react'

class MemoDemo extends Component {
  state = {
    count: 1,
    name: 'Katy',
    person: {
      age: 18
    }
  }
  handleClick () {
    let tempAge = this.state.person.age + 1;
    let tempPerson = Object.assign({}, this.state.person, {age: tempAge});
    this.setState({
      person: tempPerson
    })
    
  }
  render () {
    let { count, name, person } = this.state
    return (
      <div>
        <button onClick={() => this.handleClick()}>add</button>
        <p>count: {count}</p>
        <BarDemo name={name}/>
        <FooDemo person={person}/>
      </div>
      
    )
  }
}

class BarDemo extends PureComponent {
  // shouldComponentUpdate(nextProps, nextStates) {
  //   if(nextProps.name === this.props.name){
  //     return false;
  //   }
  //   return true
  // }
  render() {
    console.log('Bar render')
    return (
      <div>
        name: {this.props.name}
      </div>
    )
  }
}

const FooDemo = memo((props) => {
  console.log('Foo render')
  return (
  <div>age: {props.person.age}</div>
  )
})
export default MemoDemo