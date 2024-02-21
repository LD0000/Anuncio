import React, { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListingDetails from './ListingDetails';
import Home from './Home';

function App() {
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState({
    bedrooms: '',
    bathrooms: '',
    parking: '',
    priceMin: '',
    priceMax: ''
  });

  useEffect(() => {
    fetch('/public/data.json')
      .then(response => response.json())
      .then(data => setListings(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Real Estate Listings</h1>
      <div>
        <h2>Filters</h2>
        <label>
          Bedrooms:
          <input type="text" name="bedrooms" value={filters.bedrooms} onChange={handleChange} />
        </label>
        <label>
          Bathrooms:
          <input type="text" name="bathrooms" value={filters.bathrooms} onChange={handleChange} />
        </label>
        <label>
          Parking:
          <input type="text" name="parking" value={filters.parking} onChange={handleChange} />
        </label>
        <label>
          Min Price:
          <input type="text" name="priceMin" value={filters.priceMin} onChange={handleChange} />
        </label>
        <label>
          Max Price:
          <input type="text" name="priceMax" value={filters.priceMax} onChange={handleChange} />
        </label>
      </div>
      <div>
        <h2>Listings</h2>
        <ul>
          {listings.map(listing => (
            <li key={listing.Id}>
              <img src={listing.ThumbnailURL} alt={listing.Title} />
              <h3>{listing.Title}</h3>
              <p>Location: {listing.Location}</p>
              <p>Bedrooms: {listing.Bedrooms}</p>
              <p>Bathrooms: {listing.Bathrooms}</p>
              <p>Price: ${listing['Sale Price']}</p>
              <button>View Details</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/listing/:id" component={ListingDetails} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
export default App;
