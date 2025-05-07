import './DespesaForm.css'
import { useState } from 'react';

export default function DespesaForm({ afegirDespesa }) {
  const [concepte, setConcepte] = useState("");
  const [quantia, setQuantia] = useState("");
  const [pagatPer, setPagatPer] = useState("");



  const resetFrom = () => {
    setConcepte("");
    setQuantia("");
    setPagatPer("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const despesa = {
      concepte: concepte, 
      quantia: quantia, 
      pagatPer: pagatPer,
      id: Math.floor.apply(Math.random() * 1000)
    }
    console.log(despesa);

    afegirDespesa(despesa);

    resetFrom();
  };
  

  return (
    <form className='despesa-form' onSubmit={handleSubmit}>
        <label>
            <span>Concepte</span>
            <input type="text" onChange={(e) => setConcepte(e.target.value)} value={concepte} />
        </label>

        <label>
            <span>Quantia</span>
            <input type="text"  onChange={(e) => setQuantia(e.target.value)} value={quantia}/>
        </label>

        <label>
            <span>Pagat per</span>
            <select onChange={(e) => {setPagatPer(e.target.value)}}>
              <option value="joan">joan</option>
              <option value="pere">pere</option>
              <option value="ines">ines</option>
              <option value="pepito">pepito</option>

            </select>
        </label>



        <button>Desar</button>
        
    </form>
  )
}
