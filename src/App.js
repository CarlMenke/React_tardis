import './App.css';
import React , {useState} from 'react'

function App() {

  const DivOne = (props) => {
    return (
        <div>       
          <DivTwo handleClick = {props.handleClick} /> 
        </div>
    )
  }
    const DivTwo = (props) => {
      return (
          <div>       
            <DivThree tardis = {tardisOne} handleClick = {props.handleClick} /> 
            <DivThree tardis = {tardisTwo} handleClick = {props.handleClick} /> 
          </div>
      )
    }
    const DivThree = (props) => {
      return (
          <div> {console.log(props.tardis.num)}      
            <h3 onClick = {() => {props.handleClick(props.tardis)}}>{props.tardis.taco}</h3>
          </div>
      )
    }

  const [tardisOne, manageTardisOne] = useState({
    taco: 'Time and Relative Dimension in Space',
    caps: false,
    num: 1
  })
  const [tardisTwo, manageTardisTwo] = useState({
    taco: 'Time and Relative Dimension in Space',
    caps: false,
    num: 2
  })

  {console.log('tardis one: ', tardisOne)}
  {console.log('tardis two: ', tardisTwo)}


  const handleClick = (tardis) => {

      if(tardis.num === 1){
      if(tardis.caps){
        let newTardis = {}
        newTardis.taco = tardis.taco.toUpperCase()
        newTardis.caps = false;
        newTardis.num = tardis.num;
        manageTardisOne(newTardis)
      }else {
        let newTardis = {};
        newTardis.taco = tardis.taco.toLowerCase()
        newTardis.caps = true;
        newTardis.num = tardis.num;
        manageTardisOne(newTardis)
      }
    }else{
      if(tardis.caps){
        let newTardis = {}
        newTardis.taco = tardis.taco.toUpperCase()
        newTardis.caps = false;
        newTardis.num = tardis.num;
        manageTardisTwo(newTardis)
      }else {
        let newTardis = {};
        newTardis.taco = tardis.taco.toLowerCase()
        newTardis.caps = true;
        newTardis.num = tardis.num;
        manageTardisTwo(newTardis)
      }
    }
}


  return(
    <div className="App">
      <DivOne handleClick = {handleClick} /> 
    </div>
  );
}


export default App;
