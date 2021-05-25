import React from 'react';

function CallsSearch({ callSearch, setCallSearch, setCallSearchText}) {
    
    function handleCallSearch(e) {
        e.preventDefault()
        setCallSearchText(callSearch)
    }
    
    
    return (
      <div className="callsSearchDiv">
          <form onSubmit={handleCallSearch}>
            <label>Search</label>
            <input type="text" placeholder="Location" value={callSearch} onChange={(e) => setCallSearch(e.target.value)}></input>
            <input type="submit"></input>
          </form>
      </div>
    );
  }
  
  export default CallsSearch;