export default function Textarea(props){
    return(
        <div>
            <label>
                {props.label}<br />
                <textarea
                    value={props.value}
                    onChange={props.save}
                />
            </label>    
        </div>
         
    );
}