import React from 'react'

function CallFormModal ({ setModalClicked }){

    function handleCloseModal() {
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
                        <form>
                            <label>Location: </label>
                            <input type="text" name="location"></input><br></br><br></br>
                            <label>Date: </label>
                            <input type="date" name="date"></input><br></br><br></br>
                            <label>Time: </label>
                            <input type="time" name="time"></input><br></br><br></br>
                            <label>Venue: </label>
                            <input type="text" name="venue-name"></input><br></br><br></br>
                            <label>More Info: </label>
                            <input type="text" name="details"></input><br></br><br></br>
                        </form>
                    </div>
                        
                        <button className="bottom-btn">Make the call!</button>
                </div>

            </div>
        </div>
        

    )
}

export default CallFormModal