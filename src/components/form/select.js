export default function Select(props){
    return(
        <label>
            {props.label}
            <select value={props.country} onChange={props.save} required>
            <option disabled selected></option>
                {props.options.countries && props.options.countries.map(option => {
                    for (const [key, value] of Object.entries(option)) {
                        return <option key={value} value={value}>{value}</option>
                    } 
                    return null;
                })}
            </select>
        </label>
    );
}