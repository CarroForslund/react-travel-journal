import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export default function Modal(props){
    return createPortal(
        // element to render:
        <div>
            {props.children}
        </div>,
        // mount this portal to:
        modalRoot,
    );
}