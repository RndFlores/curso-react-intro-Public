import React from 'react';
import "./TodoSearch.css";

function TodoSearch() {
  return(
    <input className="TodoSearch" placeholder="Buscar TODO"
    onChange={(event)=>{
      console.log('Escribiste en TodoSearch')
      console.log(event) 
      console.log(event.target.value)      
    }}
    />
  );

}

export { TodoSearch }; 