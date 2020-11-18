const countriesReducer = ( countries, action ) => {
    switch (action.type) {
        case 'storeCountries':
            return {...countries, countries: action.countries};
        default:
            throw new Error("Unhandled action type: " + action.type);
    }
}
export default countriesReducer;