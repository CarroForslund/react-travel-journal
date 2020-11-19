import React, { useReducer, useState, useEffect } from 'react';
import countriesReducer from './components/reducers/countriesReducer';
import H1 from './components/elements/h1';
import Modal from './components/elements/modal';
import Button from './components/elements/button';
import Store from './Store';
import Input from './components/form/input';
import Select from './components/form/select';
import Textarea from './components/form/textarea';
import SubmitButton from './components/form/submit-button';


function App() {
  const [countries, dispatch] = useReducer(countriesReducer, []);
  const [trips, setTrips] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

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

  function saveTrip(e){
    e.preventDefault();

    setTrips([...trips, {
      name: {name},
      country: {country},
      description: {description},
    }]);

    setName("");
    setCountry("");
    setDescription("");

    //  WHY DO I NEED TO DO THIS WHEN I UPDATE THE STATE?!?
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  }

  function saveName(e){
    setName(e.target.value);
  }
  function saveCountry(e){
    setCountry(e.target.value);
  }
  function saveDescription(e){
    setDescription(e.target.value);
  }

  function toggleModal(){
    setModalOpen(!modalOpen);
  }

  return (
    <Store.Provider value={{trips, add: saveTrip }} >
      <div>
        <H1 text="My Travel Journal" />
        <Button text="Add new trip" onClick={toggleModal} />
        { modalOpen && 
        <Modal close={toggleModal} saveTrip={saveTrip} options={countries} >
            <form onSubmit={saveTrip}>
                <Input label="Name trip" type="text" value={name} save={saveName} />
                <Select label="Select country" value={country} save={saveCountry} options={countries} />
                <Textarea label="Description" value={description} save={saveDescription}/>
                <SubmitButton text="Save Trip"/>
            </form>
        </Modal>}
      </div>
    </Store.Provider>
  );
}

export default App;
