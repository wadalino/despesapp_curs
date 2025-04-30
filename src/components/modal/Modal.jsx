// sniped 'rfc' and intro
import './Modal.css';

export default function Modal(children) {
  return (
    <div className="modal-fons">
        <div className="modal">
            {children}
        </div>
    </div>
  )
}
