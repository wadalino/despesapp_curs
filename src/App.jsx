// to use fragment we need to use React module
// NOTE es una manera de fugir de tenir un element pare i poder utilitzar estils 
//      es pot utilitzar de forma abreujada eliminant el div (com a Titol.jsx)
import React, { useState, useEffect } from 'react';
import './App.css';
import Titol from './components/titol/Titol';
// NOTE per que s'importi automaticament recordar que al crearlo <Modal (intro)
import Modal from './components/modal/Modal';
import DespesaLlista from './components/despessesLlista/DespessesLlista';
import DespesaForm from './components/despesaForm/DespesaForm';


// ESTATS


function App() {
  //let titol = "Benvinguts al Curs";
  const [mostrarDespeses, setMostrarDespeses] = useState(true);
  const [mostrarModal, setMostraModal] = useState(false);
  const [filtrarPerQuantia, setFiltrarPerQuantia] = useState(false);

  console.log(setMostraModal);


  const subtitol = "Curs de React and Firebase";

  

  useEffect(() => {
    setDespeses((despesesPrevies) => {
      if (filtrarPerQuantia)
        return despesesPrevies.filter((despesa) => despesa.quantia > 10.00)
      else
        return despesesPrevies;
    })
  }
  , [filtrarPerQuantia])

  const afegirDespesa = (despesa) => {
    setDespeses((despesesPrevies) => {
      return [...despesesPrevies, despesa];
  })

  setMostraModal(false)
};

  const [despeses, setDespeses] = useState([
    {concepte: "dinar", quantia: 2.3, pagatPer: "Joan"},
    {concepte: "compra", quantia: 72.3, pagatPer: "Natalia"},
    {concepte: "ordinador", quantia: 7.3, pagatPer: "Joan"},
    {concepte: "chuches", quantia: 2.3, pagatPer: "Joan"},
    {concepte: "llum", quantia: 52.3, pagatPer: "Natalia"},
    {oncepte: "hipoteca", quantia: 202.3, pagatPer: "Natalia"},
  ]);

  console.log(mostrarDespeses);



  const handleClick = (id) => {
    // console.log(id);
    
    // NOTE problema perque l'estat previ pot haver canviar 
    // sempre s'ha de treballar amb un estat previ -> bones practiques de React
    // FIXME 
    // setDespeses( despeses.filter( (despesa) => despesa.id !== id )); 
    setDespeses(
      (despesesPrevies) => {
        return despesesPrevies.filter( (despesa) => despesa.id !== id )
      }
    )

  }

  const handleTancar = () => {
    setMostraModal(false);
  }
  

  return (
    <div>

      <Titol titol="Benvinguts al curs" subtitol={subtitol} />

      { !mostrarDespeses && (
        <div>
          <button onClick={() => setMostrarDespeses(true)}>Mostrar despeses</button>
        </div>
      )
      }

      { mostrarDespeses && (
        <div>
          <button onClick={() => setMostrarDespeses(false)}>Ocultar despeses</button>
        </div>
      )
      }

      { mostrarDespeses && <DespesaLlista despeses = {despeses} handleClick={handleClick}/>
        
        
      
      }

      { mostrarModal && <Modal handleTancar = {handleTancar} >
        <DespesaForm afegirDespesa={afegirDespesa} />
      </Modal>}
      
      <div>
        <br />
        <button onClick={() => setMostraModal(true)}>Afegir Despesa</button>
      </div>

      <div>
      <button onClick={() => setFiltrarPerQuantia(true)}>Filtrar</button>

      </div>

    </div>
  )
}

export default App
