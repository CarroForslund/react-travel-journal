import { createPortal } from 'react-dom';
import Button from './button';

const modalRoot = document.getElementById('modal-root');

export default function Modal(props){
    return createPortal(
        // element to render:
        <div>
             <h1>Hello Modal</h1>
            <Button text="Close" onClick={props.close} />
        </div>,
        // mount this portal to:
        modalRoot,
    );
}