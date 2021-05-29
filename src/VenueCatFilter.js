import React from 'react';

function VenueCatFilter({ setSelectedVenueCategory }) {

    function handleVenueCatChange(e) {
        setSelectedVenueCategory(e.target.value)
    }

    return (
      <div className="venueFilterDiv">
        <label>Type of venue: </label><br></br><br></br>
            <select className="select" onChange={handleVenueCatChange}>
                <option value="All">All</option>
                <option value="Dive Bar">Dive bar</option>
                <option value="Record Store">Record Store</option>
                <option value="Small">Small (less than 200 ppl)</option>
                <option value="Medium">Medium (200-1050 ppl)</option>
                <option value="Brewery">Brewery</option>
                <option value="Theater">Theater</option>
                <option value="Outdoor">Outdoor</option>
                <option value="DIY">DIY</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Other">Other</option>
            </select>
      </div>
    );
  }
  
  export default VenueCatFilter;