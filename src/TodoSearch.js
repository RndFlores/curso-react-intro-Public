import React from 'react';
import "./TodoSearch.css";

function TodoSearch() {

  //herramienta de react
  const [searchValue, setSearchValue]=React.useState('');// no sloamente se consume tmb se actualiza

  console.log('Los usuarios buscan: ' + searchValue);
  return(
    <input className="TodoSearch" placeholder="Buscar TODO"
    value ={searchValue}
    onChange={(event)=>{
      console.log('Escribiste en TodoSearch')
      // console.log(event) 
      // console.log(event.target.value)
      setSearchValue(event.target.value);      
    }}
    />
  );

}

export { TodoSearch }; 