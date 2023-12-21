import React, {useState} from "react";

function App (){

  useState("Sabina");
  const [name, setName] = useState("Sabina");
  const [roll, setRoll] = useState('126');
  const handleClick = ()=>{
    setName("Hello World");
    setRoll(108);
  }
  return(<React.Fragment>
    <h1>{name}</h1>
    <h2>{roll}</h2>
    <button type="button" onClick={handleClick}>Change Me</button>
  </React.Fragment>)
}

export default App;