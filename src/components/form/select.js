export default function Select(props){
    return(
        <label>
            {props.label}
            <select 
              onChange={props.onChange}
              value={props.value}
            >
                <option value="" disabled>{props.optionsLabel}</option>
                {props.options.map(option => {
                    for (const [key, value] of Object.entries(option)) {
                        return <option key={value} value={value}>{value}</option>
                    } 
                })}
            </select>
        </label>
    );
}