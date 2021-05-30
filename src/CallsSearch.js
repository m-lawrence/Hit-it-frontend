import React from 'react';

function CallsSearch({ callSearch, setCallSearch, setCallSearchText}) {
    
    function handleCallSearch(e) {
        e.preventDefault()
        setCallSearchText(callSearch)
    }
    
    
    return (
      <div className="callsSearchDiv">
          <form onSubmit={handleCallSearch}>
            <input className="callSearchInput" type="text" placeholder="Location" value={callSearch} onChange={(e) => setCallSearch(e.target.value)}></input>
            <input className="callSearchBtn" type="submit"></input>
          </form>
      </div>
    );
  }
  
  export default CallsSearch;