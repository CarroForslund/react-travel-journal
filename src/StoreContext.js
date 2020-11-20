import { createContext, useContext, useReducer } from 'react';
import tripsReducer from './components/reducers/tripsReducer';

const StoreContext = createContext(null);

export function StoreProvider(props){
    const [trips, dispatchTrips] = useReducer(tripsReducer, []);

    return (
        <StoreContext.Provider value={{trips, dispatchTrips}}>
            {props.children}
        </StoreContext.Provider>
    );
}

export function useStore(){
    const context = useContext(StoreContext);
    if(!context){
        throw new Error('useStore must be used within a StoreProvider.');
    }
    return context;
}