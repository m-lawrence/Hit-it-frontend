import React, {useState} from 'react';
import SingleCall from './SingleCall';
import addIcon from './add_icon.png';
import CallFormModal from './CallFormModal';

function Calls({ calls, loggedInUser }) {
    const [modalClicked, setModalClicked] = useState(false)

   

    const callsByUserLocation = calls.filter(call => {
        return call.location === loggedInUser[0].location
    })

    const callsArr = callsByUserLocation.map(call => {
        return <SingleCall key={call.id} call={call} />
    })

    function handleModalClick() {
        setModalClicked(true)
    }

    return (
      <div className="callsContainer">
          <div className="addIconDiv">
            <img className="addIcon" src={addIcon} onClick={handleModalClick}/>
            {modalClicked && <CallFormModal setModalClicked={setModalClicked}/>}
          </div>
        <h1 className="callsHeader">Calls for {loggedInUser[0].location}</h1>
        <div className="callsDiv">
            {callsArr}
        </div>
      </div>
    );
  }
  
  export default Calls;