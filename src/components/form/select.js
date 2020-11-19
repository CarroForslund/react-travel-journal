export default function Select(props){
    return(
        <label>
            {props.label}
            <select value={props.value}>
                {props.options.countries && props.options.countries.map(option => {
                    for (const [key, value] of Object.entries(option)) {
                        return <option key={value} name={key} value={value}>{value}</option>
                    } 
                    return null;
                })}
            </select>
        </label>
    );
}