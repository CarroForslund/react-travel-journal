export default function Textarea(props){
    return(
        <label>
            {props.label}
            <textarea
                value={props.value}
                onChange={props.onChange}
            />
        </label>     
    );
}