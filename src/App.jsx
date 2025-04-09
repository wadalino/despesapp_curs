import './App.css';

function App() {
  
  const titol = "Benvinguts al Curs";
  const subTitol = "React & Firebase";
  const web = "http://www.menorca.info";

  return (
    <div>
      <h2>{ titol }</h2>
      <p>{ subTitol }</p>
      <p>La data d'avui és: {new Date().toDateString() }</p>
      <p>Número aleatòri: { Math.random() * 100 }</p>
      <a href={ web }>Visita Es Diari</a>
    </div>
  )
}

export default App
