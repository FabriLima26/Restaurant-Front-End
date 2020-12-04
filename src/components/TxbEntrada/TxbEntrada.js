import React from 'react';



const TxbEntrada = (props) => {




    return(
        <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Fazer Pedido</label>
            <input type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Fazer Pedido"
                maxLength="80"
                onChange={props.entrada}
                onKeyPress={props.entrada}
                onKeyUp={props.entrada}  
            />
        </div>
    );
}

export default TxbEntrada;