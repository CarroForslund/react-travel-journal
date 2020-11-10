import React, { useState, useEffect } from 'react';
import H1 from './components/elements/h1';
import Modal from './components/elements/modal';
import Button from './components/elements/button';
import Store from './Store';
import Input from './components/form/input';
import Select from './components/form/select';
import Textarea from './components/form/textarea';
import SubmitButton from './components/form/submit-button';

function App() {
  const [countries, setCountries] = useState([{name: "USA"}, {name: "UK"}, {name: "Sweden"}, {name: "Greece"}]);
  const [modalOpen, setModalOpen] = useState(false);
  const [trips, setTrips] = useState([]);
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    console.log('hello useEffect');
    getCountries();
  },[]);

  function getCountries(){
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(response => { setCountries(response) });
  }

  function saveTitle(e){
    setTitle(e.target.value);
  }
  function saveCountry(e){
    setCountry(e.target.value);
  }
  function saveDescription(e){
    setDescription(e.target.value);
  }
  function saveTrip(e){
    e.preventDefault();
    setTrips([...trips, {
      title: {title},
      country: {country},
      description: {description},
    }]);
    setTitle("");
    setCountry("");
    setDescription("");

    //  WHY DO I NEED TO DO THIS On INPUT WHEN I ALREADY HAS UPDATED THE STATE?!?
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  }

  function openModal(){
    console.log('open Modal');
    setModalOpen(true);
  }

  function closeModal(){
    setModalOpen(false);
  }

  return (
    <Store.Provider
      value={{trips, add: saveTrip }}
    >
      <div>
        <H1 text="My Travel Journal" />
        <Button text="Add new trip" onClick={openModal} />

        <form onSubmit={saveTrip}>
          <Input label="Title of travel" type="text" value={title} save={saveTitle}/>
          <Select label="Select country" value={country} onChange={saveCountry} options={countries} />
          <Textarea label="Description" value={description} onChange={saveDescription}/>
          <SubmitButton text="Save Trip"/>
        </form>
        { modalOpen ? <Modal close={closeModal}/> : null }
      </div>
    </Store.Provider>
  );
}

export default App;
