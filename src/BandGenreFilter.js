import React, { useState } from 'react';

function BandGenreFilter({ bandsByLocation }) {
    const [genreSelect, setGenreSelect] = useState("All")

    function handleBandGenreChange(e) {
        setGenreSelect(e.target.value)
    }

    const bandsByGenre = bandsByLocation.filter(band => {
        return band.props.band.genre.toLowerCase().includes(genreSelect.toLocaleLowerCase())
    })

    return (
      <div className="bandGenreFilterDiv">
        <label>Genre: </label><br></br><br></br>
            <select className="select" onChange={handleBandGenreChange}>
                <option value="All">All</option>
                <option value="Garage">Garage</option>
                <option value="Punk">Punk</option>
                <option value="Americana">Americana</option>
                <option value="Alternative">Alternative</option>
                <option value="Metal">Metal</option>
                <option value="Country">Country/Folk</option>
                <option value="Electronic">Electronic</option>
                <option value="Rock">Rock</option>
                <option value="Noise">Noise</option>
                <option value="Experimental">Experimental</option>
                <option value="Rockabilly">Rockabilly</option>
                <option value="Indie">Indie</option>
                <option value="Acoustic">Acoustic</option>
                <option value="Pop">Pop</option>
                <option value="Hip hop">Hip hop</option>
                <option value="World">World</option>
                <option value="RB">R&B</option>
                <option value="Latin">Latin</option>
                <option value="Lo-fi">Lo-fi</option>
            </select>
      </div>
    );
  }
  
  export default BandGenreFilter;