import React from 'react'

export default function DespessesLlista({despeses, handleClick}) {
  return (
    <>
{
    despeses.map((despesa, index)=>(
      <React.Fragment key={despesa.id}>
        <h2>{index+1} - {despesa.concepte}</h2>
        <button onClick={() => handleClick(despesa.id)}>Eliminar despesa</button>
      </React.Fragment>
    ))
}
    </>
  )
}
