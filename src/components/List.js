import React, {useContext, useReducer} from 'react'



const List = () => {

    //Store: Almacen donde se guardaran los estados internos de una app
    const {dispatc, state } = useContext(store);

    return (

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">¿Está completada?</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.list.map(todo =>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    )
                }
            </tbody>
        </table>

        
    )

    

}

export default List;
