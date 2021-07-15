import React, { useState } from 'react';
import BandGenreFilter from './BandGenreFilter';
import SingleBand from './SingleBand';

function Bands({ bands }) {
    const [bandSearch, setBandSearch] = useState("")
    const [bandSearchText, setBandSearchText] = useState("asheville")
    
    const bandsArr = bands.map(band => {
        return <SingleBand key={band.id} band={band}/>
    })

    const bandsByLocation = bandsArr.filter(band => {
        return band.props.band.location.toLowerCase().includes(bandSearchText.toLocaleLowerCase())
    })

    function handleBandSearchSubmit(e) {
        e.preventDefault()
        setBandSearchText(bandSearch)
    }

    return (
        <div className="bandsMainContainer">
            <div className="bandsSearchContainer">
                <form className="searchbar" onSubmit={handleBandSearchSubmit}>
                    <input
                        className="bandSearchInput"
                        type="text"
                        id="search"
                        placeholder="Location"
                        value={bandSearch}
                        onChange={(e) => setBandSearch(e.target.value)}
                    />
                    <button className="bandSearchBtn" type="submit">Search</button>
                </form>
            </div>
            <div>
                <BandGenreFilter />
            </div>
            <div className="bandListDiv">
                {bandsByLocation}
            </div>
      </div>
    );
  }
  
  export default Bands;