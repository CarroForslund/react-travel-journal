import { createPortal } from 'react-dom';
import { StyledModal } from './modal';

const modalRoot = document.getElementById('modal-root');

const styles = {
    background: 'rgba(0, 0, 0, .6)',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '100',
}

export default function ModalWrapper(props){
    
    return createPortal(

        // element to render:
        <div style={styles}>
            <StyledModal>
                {props.children}
            </StyledModal>
        </div>,
        
        // mount this portal to:
        modalRoot,
        
    );
}