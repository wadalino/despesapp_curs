
import ReactDOM from 'react-dom';

// sniped 'rfc' and intro
import './Modal.css';



export default function Modal({children, handleTancar, esVorera}) {
  return ReactDOM.createPortal((
    <div className="modal-fons">
        <div className="modal" style={
            {
                border: esVorera 
                    ? "4px solid #ff5500" 
                    : '4px solid #a1a330'
            }
        }>
            {children}
            <button onClick={handleTancar} 
                    className={
                        esVorera ? "boto-vorera"
                                 : ""
                    }>Tancar</button>
        </div>
    </div>
  ), document.body)
}
