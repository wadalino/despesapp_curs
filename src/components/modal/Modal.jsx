// sniped 'rfc' and intro
import './Modal.css';

export default function Modal(props) {
  return (
    <div className="modal-fons">
        <div className="modal">
            {props.children}
        </div>
    </div>
  )
}
