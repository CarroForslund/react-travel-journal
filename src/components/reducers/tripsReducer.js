const tripsReducer = ( trips, action ) => {
    switch (action.type) {
        case 'add':
            return [...trips, action.trip];
        default:
            throw new Error("Unhandled action type: " + action.type);
    }
}
export default tripsReducer;