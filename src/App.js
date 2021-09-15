import './App.css';
import List from './components/List'
import React, {useContext, useReducer,useEffect} from 'react'
import StoreProvider from './components/Store';

//UseReducer, función de react que ayuda a administrar el reduce, logica para los estados y el dipactg

const HOST_API = "http://localhost:8080/api"

function App() {

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    fetch(HOST_API+"/todos")
    .then(response=> response.json())
    .then((list)=>{
      dispatch({type:"update-list", list})
    },[state.list.length,dispatch])

  });

  return (
    <div className="App">
        <StoreProvider>
            <List />
        </StoreProvider>
    </div>
  );
}



export default App;
