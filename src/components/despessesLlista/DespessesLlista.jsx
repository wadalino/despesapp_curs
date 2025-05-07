import React from 'react'
import estils from './DespessesLlista.module.css'

export default function DespessesLlista({despeses, handleClick}) {
  return (
    <div>
{
    despeses.map((despesa, index)=>(
      <div key={despesa.id} className={estils.targeta}>
        <h2><span className="">{index+1} </span>- {despesa.concepte}</h2>
        <p>{despesa.pagatPer}</p>
        <p>{despesa.quantia}</p>
        <button onClick={() => handleClick(despesa.id)}>Eliminar despesa</button>
      </div>
    ))
}
    </div>
  )
}
