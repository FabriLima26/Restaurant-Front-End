import React, { useState} from 'react';
import axios from 'axios';

import './App.css';
import TxbSaida from './components/TxbSaida/TxbSaida';
import TxbEntrada from './components/TxbEntrada/TxbEntrada';
import BtnEnviar from './components/BtnEnviar/BtnEnviar';
import Tabela from './components/Tabela/Tabela';



function App() {

  const [entrada, setEntrada] = useState();
  const [novoPedido, setNovoPedido] = useState(0);

  function handleEntrada(event)
  {
    setEntrada(event.target.value);
  }

   async function fazerPedido(event)
  {
    var a = novoPedido;
    a++;
    event.preventDefault();

    var data = {
      descricao:entrada
    }

    
    await axios.post('https://localhost:5001/v1/pedido', data);

    setNovoPedido(a);

    alert(data.descricao);
  }

  return (
    <div className="App">
      <div className="container text-center mt-5 mb-5">

        <form onSubmit={fazerPedido}>

          < TxbSaida novoPedido={novoPedido}/>

          < TxbEntrada entrada={handleEntrada} />

          < BtnEnviar />

          < Tabela novoPedido={novoPedido} />

        </form>
      </div>
    </div>
  );
}

export default App;
