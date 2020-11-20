import React, { useReducer, useState, useEffect } from 'react';
import countriesReducer from './components/reducers/countriesReducer';
import H1 from './components/elements/h1';
import Modal from './components/elements/modal';
import {StyledButton} from './components/elements/button';
import Input from './components/form/input';
import Select from './components/form/select';
import Textarea from './components/form/textarea';

function App() {
  const [countries, dispatch] = useReducer(countriesReducer, []);
  const [modalOpen, setModalOpen] = useState(false);
  const [trips, setTrips] = useState([]);

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    return(
      fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(response => { dispatch({type: 'storeCountries', countries: response}) })
    )
  },[]);

  function saveName(e){
    setName(e.target.value);
  }
  function saveCountry(e){
    setCountry(e.target.value);
  }
  function saveDescription(e){
    setDescription(e.target.value);
  }

  function saveTrip(e){
    e.preventDefault();
    console.log(e.target);
    setTrips([...trips, {
      name: name,
      country: country,
      description: description,
    }]);
    setName("");
    setCountry("");
    setDescription("");

    //  WHY DO I NEED TO DO THIS WHEN I UPDATE THE STATE?!?
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  }

  function toggleModal(){
    setModalOpen(!modalOpen);
  }

  return (
      <>
        <H1 text="My Travel Journal" />
        <StyledButton onClick={toggleModal}>Add new trip</StyledButton>
        { modalOpen &&
          <Modal>
            <form onSubmit={saveTrip}>
                <Input label="Name trip" type="text" value={name} save={saveName}/>
                <Select label="Select country" value={country} options={countries} save={saveCountry} />
                <Textarea label="Description" value={description} save={saveDescription}/>
                <StyledButton type="submit">Add trip</StyledButton>
                <StyledButton onClick={toggleModal}>Cancel</StyledButton>
            </form>
          </Modal> }
      </>
  );
}

export default App;
