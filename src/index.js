import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [mensaje, setMensaje] = useState('');

  const [contador, setContador] = useState(0);

  useEffect(() => {console.log("render")}, []);

  return (
    <div>
      <input onChange={e => setMensaje(e.target.value)} />
      <label>{mensaje}</label>
      <button onClick={()=>{alert("El mensaje es: "+ mensaje)}}>Save</button>

      <hr/>

    <h2>contador: {contador}</h2>
    <button onClick={()=>setContador(contador+1)}>Incrementar</button>
    </div>
      
  );
}

root.render(
    <Counter />
)