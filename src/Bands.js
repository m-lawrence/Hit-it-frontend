import React, { useState } from 'react';
import BandGenreFilter from './BandGenreFilter';
import SingleBand from './SingleBand';

function Bands({ bands, setGenreSelect, genreSelect }) {
    const [bandSearch, setBandSearch] = useState("")
    const [bandSearchText, setBandSearchText] = useState("asheville")
    
    const bandsArr = bands.map(band => {
        return <SingleBand key={band.id} band={band}/>
    })

    const bandsByLocation = bandsArr.filter(band => {
        return band.props.band.location.toLowerCase().includes(bandSearchText.toLocaleLowerCase())
    })

    const bandsByGenreFilter = bandsByLocation.filter(band => {
        if(genreSelect === "All") {
            return band
        } else {
        return band.props.band.genre.toLowerCase().includes(genreSelect.toLocaleLowerCase())
        }
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
                <BandGenreFilter setGenreSelect={setGenreSelect}/>
            </div>
            <div className="bandListDiv">
                {bandsByGenreFilter}
            </div>
      </div>
    );
  }
  
  export default Bands;