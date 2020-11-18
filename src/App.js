import React, { useReducer, useState, useEffect } from 'react';
import countriesReducer from './components/reducers/countriesReducer';
import H1 from './components/elements/h1';
import Modal from './components/elements/modal';
import Button from './components/elements/button';
import Store from './Store';


function App() {
  const [countries, dispatch] = useReducer(countriesReducer, []);
  const [modalOpen, setModalOpen] = useState(false);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    return(
      fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(response => { dispatch({type: 'storeCountries', countries: response}) })
    )
  },[]);

  function saveTrip(e){
    e.preventDefault();
    setTrips([...trips, {
      title: e.target.title,
      country: e.target.country,
      description: e.target.description,
    }]);
  }

  function openModal(){
    setModalOpen(true);
  }

  function closeModal(){
    setModalOpen(false);
  }

  return (
    <Store.Provider value={{trips, add: saveTrip }} >
      <div>
        <H1 text="My Travel Journal" />
        <Button text="Add new trip" onClick={openModal} />
        { modalOpen ? <Modal close={closeModal} saveTrip={saveTrip} options={countries} /> : null }
      </div>
    </Store.Provider>
  );
}

export default App;
