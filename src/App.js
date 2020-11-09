import React, { useState, useEffect } from 'react';

function App() {
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

  return (
    <div>
      <h1>My Travel Journal</h1>
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
      {/* {trips.map((trip) => {
        return (<div key={trip.title}>
          <h2>{trip.title}</h2>
          <h3>{trip.country}</h3>
          <p>{trip.description}</p>
        </div>)
      })} */}
    </div>
    
  );
}

export default App;
