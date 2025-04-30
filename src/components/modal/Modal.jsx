
import ReactDOM from 'react-dom';

// sniped 'rfc' and intro
import './Modal.css';



export default function Modal({children, handleTancar}) {
  return ReactDOM.createPortal((
    <div className="modal-fons">
        <div className="modal">
            {children}
            <button onClick={handleTancar}>Tancar</button>
        </div>
    </div>
  ), document.body)
}
