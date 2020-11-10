import React, { useState } from 'react';
import Modal from './components/modal';
import Button from './components/button';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [trips, setTrips] = useState([]);
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");

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
    setTrips(trips.concat([{
      title: {title},
      country: {country},
      description: {description},
    }]));
    setTitle("");
    setCountry("");
    setDescription("");
  }

  function openModal(){
    console.log('open Modal');
    setModalOpen(true);
    return <Modal />
  }
  function closeModal(){
    setModalOpen(false);
  }

  return (
    <div>
      <h1>My Travel Journal</h1>
      <Button text="Add new trip" onClick={openModal} />
      <form onSubmit={saveTrip}>
        <label>
          Title of travel
        <input
          type='text'
          value={title}
          onChange={saveTitle}
        />
        </label>
        <label>
          Select country
          <select 
            onChange={saveCountry}
            defaultValue={country}
          >
            <option value="" disabled>Country</option>
            <option value="usa">USA</option>
            <option value="thailand">Thailand</option>
            <option value="uk">UK</option>
          </select>
        </label>

        <label>
          Description
          <textarea
            value={description}
            onChange={saveDescription}
          />
        </label>
        <button type="submit">Save Trip</button>
      </form>
      { modalOpen ? <Modal close={closeModal}/> : null }
    </div>
    
  );
}

export default App;
