import React, {useState} from 'react';
import SingleCall from './SingleCall';
import addIcon from './add_icon.png';
import CallFormModal from './CallFormModal';
import CallsSearch from './CallsSearch';

function Calls({ calls, loggedInUser, addNewCall }) {
    const [modalClicked, setModalClicked] = useState(false)
    const [callSearch, setCallSearch] = useState("")
    const [callSearchText, setCallSearchText] = useState(loggedInUser[0].location)

   

    const callsByUserLocation = calls.filter(call => {
        return call.location.toLowerCase().includes(callSearchText.toLowerCase())
    })

    const callsArr = callsByUserLocation.map(call => {
        return <SingleCall key={call.id} call={call} loggedInUser={loggedInUser}/>
    })

    const callsByDate = callsArr.sort((a,b) => Date.parse(a.props.call.date) - Date.parse(b.props.call.date))

    function handleModalClick() {
        setModalClicked(true)
    }

    return (
      <div className="callsContainer">
          <div className="addIconDiv">
            <img className="addIcon" src={addIcon} onClick={handleModalClick}/>
            {modalClicked && <CallFormModal setModalClicked={setModalClicked} loggedInUser={loggedInUser} addNewCall={addNewCall}/>}
          </div>
        <h1 className="callsHeader">Calls for {callSearchText}</h1>
        <CallsSearch callSearch={callSearch} setCallSearch={setCallSearch} setCallSearchText={setCallSearchText}/>
        <div className="callsDiv">
            {callsArr}
        </div>
      </div>
    );
  }
  
  export default Calls;