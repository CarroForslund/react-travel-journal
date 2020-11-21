export default function Input(props){
    return(
        <div>
            <label>
                {props.label}<br/>
                <input
                    type={props.type}
                    value={props.title}
                    onChange={props.save}
                    required
                />
            </label>
        </div>
        
    );
}