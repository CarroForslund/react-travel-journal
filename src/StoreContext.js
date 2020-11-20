import { createContext, useContext, useState } from 'react';

const StoreContext = createContext(null);

export function StoreProvider(props){
    const [trips, setTrips] = useState([]);
    return (
        <StoreContext.Provider value={{trips, setTrips}}>
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