import React, { useMemo, useState } from 'react';
import { BiTrash } from 'react-icons/bi'

const praias = [
    'Joaquina',
    'Campeche',
    'Jurere',
    'Ingleses',
    'Lagoinha da Ponta das Canas',
    'Armaįão',
    'Mole'
  ]
  
  const props = ({onClickDelete, onClickComments}) => {
  
  }
  
  function App() {
  const [busca, setBusca] = useState ('');
  
  const praiasFiltradas = useMemo(() => {
    const lowerBusca = busca.toLowerCase();
    return praias
    praias
    .filter((praias) => praias.toLowerCase().includes(lowerBusca));
  }, [busca])
  
    return (
      <div>
        <input type="text"
        value={busca}
        onChange={(ev) => setBusca(ev.target.value)}/>
        <ul>
          {praias.map((praias) =>(
            <li key={praias}>{praias}</li>
          ))}
        </ul>
        <AddBreach/>
      </div>
    );
  }
  
  export default AddBreach