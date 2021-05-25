import React, { useState } from 'react'

function CallFormModal ({ setModalClicked, loggedInUser, addNewCall }){
    const [callFormData, setCallFormData] = useState({
        date: "",
        location: "",
        time: "",
        venue_name: "",
        details: ""
    })

    
    function handleCloseModal() {
        setModalClicked(false)
    }

    function handleCallFormChange(e) {
        setCallFormData({...callFormData, 
            [e.target.name] : e.target.value
        })
    }

    function handleCallSubmit(e) {
        e.preventDefault()
      
        const newCall = {
            date: callFormData.date,
            location: callFormData.location,
            time: callFormData.time,
            venue_name: callFormData.venue_name,
            details: callFormData.details,
            band_user_id: loggedInUser[0].id
        }

        fetch('http://localhost:3000/calls', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCall)
        })
            .then(r => r.json())
            .then(addNewCall)

            setModalClicked(false)
    }

    return (
        <div className="call-form-modal">
            <div className="call-form-modal-content">
                <button onClick={handleCloseModal} type="button" className="btn-close" aria-label="Close"></button>
                <div className="call-form-modal-header">
                    <h4 className="call-form-modal-title">Make a call to local bands</h4>
                </div>
                
                <div className="call-form-modal-body">
                    <div className="input-group">
                        <form onSubmit={handleCallSubmit}>
                            <label>Location: </label>
                            <input type="text" name="location" value={callFormData.location} onChange={handleCallFormChange}></input><br></br><br></br>
                            <label>Date: </label>
                            <input type="date" name="date" value={callFormData.date} onChange={handleCallFormChange}></input><br></br><br></br>
                            <label>Time: </label>
                            <input type="time" name="time" value={callFormData.time} onChange={handleCallFormChange}></input><br></br><br></br>
                            <label>Venue: </label>
                            <input type="text" name="venue_name" value={callFormData.venue_name} onChange={handleCallFormChange}></input><br></br><br></br>
                            <label>More Info: </label>
                            <input type="text" name="details" value={callFormData.details} onChange={handleCallFormChange}></input><br></br><br></br>
                            <button type="submit" className="bottom-btn">Make the call!</button>
                        </form>
                    </div>
                        
                        
                </div>

            </div>
        </div>
        

    )
}

export default CallFormModal