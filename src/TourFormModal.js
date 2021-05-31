import React, { useState } from 'react'

function TourFormModal ({ setNewTourClicked, currentUser, addNewTour }){
    const [name, setName] = useState("")
    const [image, setImage] = useState("")

    function handleNewTourSubmit(e) {
        e.preventDefault()
        
        const newTour = {
            name,
            image,
            band_user_id: currentUser.id
        }

        fetch('http://localhost:3000/tours', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTour)
        })
            .then(res => res.json())
            .then(addNewTour)

            setNewTourClicked(false)
    }

    function handleClosingModal() {
        setNewTourClicked(false)
    }

    return (
        <div className="tour-form-modal">
            <div className="tour-form-modal-content">
                <button onClick={handleClosingModal} type="button" className="btn-close" aria-label="Close"></button>
                <div className="tour-form-modal-header">
                    <h4 className="tour-form-modal-title">Start planning a new tour!</h4>
                </div>
                
                <div className="tour-form-modal-body">
                    <div className="input-group">
                        <form onSubmit={handleNewTourSubmit}>
                         <label className="tourNameLabel">Name: </label>
                         <input className="tourNameInput" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input><br></br><br></br><br></br>
                         <label className="tourImgLabel">Image URL: </label>
                         <input className="tourImgInput" type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)}></input><br></br><br></br><br></br>
                         <button type="submit" className="bottom-btn">Create tour</button>
                     </form>
                    </div>
                        
                        
                </div>

            </div>
        </div>
        

    )
}

export default TourFormModal