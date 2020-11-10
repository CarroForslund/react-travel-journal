import React, { useState, useEffect } from 'react';
import Modal from './components/modal';
import Button from './components/button';
import Store from './Store';
import Input from './components/form/input';
import Select from './components/form/select';
import Textarea from './components/form/textarea';

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

    //  WHY DO I NEED TO DO THIS WHEN I UPDATE THE STATE?!?
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
        <h1>My Travel Journal</h1>
        <Button text="Add new trip" onClick={openModal} />

        <form onSubmit={saveTrip}>

          <Input label="Title of travel" type="text" value={title} save={saveTitle}/>
          <Select label="Select country" value={country} onChange={saveCountry} optionsLabel="Country" options={countries} />
          <Textarea label="Description" value={description} onChange={saveDescription}/>

          <button type="submit">Save Trip</button>
        </form>
        { modalOpen ? <Modal close={closeModal}/> : null }
      </div>
    </Store.Provider>
  );
}

export default App;
