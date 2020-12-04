import React, {useEffect,useState} from 'react';
import api from '../../services/api';



const TxbSaida = (props) => {

  const [pedidos, setPedidos] = useState([{descricao:""}]);
  var index = 1;

  useEffect(() => {
    api.get('pedido').then(response => {
      setPedidos(response.data);
    });

  },[props.novoPedido]);


    return(
      <div className="form-group">
      <label htmlFor="formGroupExampleInput">Painel de Pedidos</label>
            <textarea
              readOnly 
              className="form-control"
              id="formGroupExampleInput" 
              placeholder="Painel de Pedidos"
              rows="10"
              cols="50" 
              value={pedidos.map(item => ( `Pedido-${index++} ${item.descricao} `))}
            > 
            </textarea>
      </div>
    );
}

export default TxbSaida;