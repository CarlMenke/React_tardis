import './App.css';
import React , {useState, useEffect} from 'react'

function App() {

  const [tardis, manageTardis] = useState({
    taco: 'Time and Relative Dimension in Space',
    caps: false,
  })

  useEffect(() => {
    //Runs only on the first render
  }, [tardis]);

  const handleClick = () => {
    if(tardis.caps){
      console.log('inside handle click funcbiton caps true')
      console.log(tardis)
      let newTardis = {}
      newTardis.taco = tardis.taco.toUpperCase()
      newTardis.caps = false;
      manageTardis(newTardis)
      console.log(tardis)
    }else {
      console.log('inside handle click funcbiton caps false')
      console.log(tardis)
      let newTardis = {};
      newTardis.taco = tardis.taco.toLowerCase()
      newTardis.caps = true;
      manageTardis(newTardis)
      console.log(tardis)
    }
  }


  return (
    <div className="App">
      <h3 onClick = {handleClick}>{tardis.taco}</h3>
    </div>
  );
}

export default App;
