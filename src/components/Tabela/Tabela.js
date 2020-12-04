import React, {useEffect, useState} from 'react';
import api from '../../services/api';



const Tabela = (props) => {
    const [pedidos, setPedidos] = useState([{descricao:""}]);
    var index = 1;
  
    useEffect(() => {
      api.get('pedido').then(response => {
        setPedidos(response.data);
      });
  
    },[props.novoPedido]);
    return(
        <div>
            <table class="table mt-5">
                <thead class="thead-dark">
                    <tr>
                      <th scope="col">Pedidos</th>
                    </tr>
                </thead>
              <tbody>
                
                { pedidos.map(item => (<tr><th> {index++}- {item.descricao} </th></tr> )) }
                
              </tbody>
            </table>
        </div>
    );
}

export default Tabela;