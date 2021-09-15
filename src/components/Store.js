import React, {useContext, useReducer} from 'react'


const initialState = {
    list: []
  }
  const Store = createContext(initialState);
  
  
  //Provider: conectar entre si diferentes componentes 
  function reducer(state, action) {
    switch (action.type) {
      case 'update-list':
        return { ...state, list: action.list }
      case 'add-item':
        const newList = state.list;
        newList.push(action.item);
        return { ...state, list: newList }
      default:
        return state;
    }
  }
  
const StoreProvider = ({children}) => {
    const [state,dispatch]=useReducer(reducer, initialState);
    //dipatch: metodo que nos permite enviar o modificar los cambios que se quieren que se pasen en el sistem
    return 
      <Store.Provider value={{state,dispatch}}>
        {children}
      </Store.Provider>
}

export default StoreProvider;