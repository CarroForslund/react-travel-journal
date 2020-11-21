export default function Select(props){
    return(
        <div>
            <label>
                {props.label}<br/>
                <select value={props.country} defaultValue="" onChange={props.save} required>
                <option disabled value=""></option>
                    {props.options.countries && props.options.countries.map(option => {
                        for (const [key, value] of Object.entries(option)) {
                            return <option key={value} value={value}>{value}</option>
                        } 
                        return null;
                    })}
                </select>
            </label>
        </div>
    );
}