import './App.css';
import React, { useMemo, useState } from 'react';
import AddBreach from './components/AddBeach';
import NewBeach from './components/NewBeach';
import Form from './components/Form';


function App() {
  

  
  return(
    <div>
       

      <AddBreach/>
      <Form/>
      <NewBeach/>
    </div>
  )
}

export default App;
