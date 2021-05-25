import React, {useState} from 'react';
import SingleCall from './SingleCall';
import addIcon from './add_icon.png';
import CallFormModal from './CallFormModal';

function Calls({ calls }) {
    const [modalClicked, setModalClicked] = useState(false)

    const callsArr = calls.map(call => {
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
        <h1 className="callsHeader">Calls</h1>
        <div className="callsDiv">
            {callsArr}
        </div>
      </div>
    );
  }
  
  export default Calls;