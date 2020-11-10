export default function Input(props){
    return(
        <label>
            {props.label}
            <input
                type={props.type}
                value={props.title}
                onChange={props.save}
            />
        </label>
    );
}