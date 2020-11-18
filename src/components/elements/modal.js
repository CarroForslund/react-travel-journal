import { createPortal } from 'react-dom';
import Button from './button';
import Input from './../form/input';
import Select from './../form/select';
import Textarea from './../form/textarea';
import SubmitButton from './../form/submit-button';


const modalRoot = document.getElementById('modal-root');

export default function Modal(props){
    return createPortal(
        // element to render:
        <div>
             <form onSubmit={props.saveTrip}>
                <Input label="Name trip" type="text" name="name" />
                <Select label="Select country" name="country" options={props.options} />
                <Textarea label="Description" name="description"/>
                <SubmitButton text="Save Trip"/>
            </form>
            <Button text="Close" onClick={props.close} />
        </div>,
        // mount this portal to:
        modalRoot,
    );
}