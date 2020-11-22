import React, { useReducer, useState, useEffect, useCallback, useMemo } from 'react';
import countriesReducer from './components/reducers/countriesReducer';
import H1 from './components/elements/h1';
import ModalWrapper from './components/elements/modal-wrapper';
import { StyledButton } from './components/elements/button';
import Input from './components/form/input';
import Select from './components/form/select';
import Textarea from './components/form/textarea';
import { useStore } from './StoreContext';
import DisplayTrips from './components/DisplayTrips';

function App() {
  const [countries, dispatch] = useReducer(countriesReducer, []);
  const {trips, dispatchTrips} = useStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const tripAmount = useMemo(()=>{return trips.length}, [trips]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(response => { dispatch({type: 'storeCountries', countries: response}) })
  },[]);

  const saveName = useCallback((e)=>{
    setName(e.target.value);
  }, []);
  const saveCountry = useCallback((e)=>{
    setCountry(e.target.value);
  }, []);
  const saveDescription = useCallback((e) =>{
    setDescription(e.target.value);
  }, []);

  function saveTrip(e){

    e.preventDefault();

    dispatchTrips({
      type: "add",
      trip: {
        name: name,
        country: country,
        description: description,
      },
      trips
    });

    setName("");
    setCountry("");
    setDescription("");

    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );

    toggleModal();
  }

  function toggleModal(){
    setModalOpen(!modalOpen);
  }

  return (
      <>
        <H1 text="My Travel Journal" />
        <p>Number of trips: {tripAmount}</p>
        <StyledButton onClick={toggleModal}>Add new trip</StyledButton>
        { trips.length > 0 && <DisplayTrips />}
        { modalOpen &&
          <ModalWrapper>
            <form onSubmit={saveTrip}>
                <Input label="Name trip" type="text" value={name} save={saveName}/>
                <Select label="Select country" value={country} options={countries} save={saveCountry} />
                <Textarea label="Description" value={description} save={saveDescription}/>
                <StyledButton type="submit">Add trip</StyledButton>
                <StyledButton onClick={toggleModal}>Cancel</StyledButton>
            </form>
          </ModalWrapper> }
      </>
  );
}

export default App;
