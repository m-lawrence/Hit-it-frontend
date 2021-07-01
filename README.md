# Hit It

Hit It is an app designed to help independent musicians plan and organize their tours. A user (band/musician) can sign in with their email and password. They will land on their profile page which features their band information and a list of their tours (past, present, and furture) and they also have the ability to create new tours. Within those tours, users are able to add, edit, or delete shows and show information. On the venue page, users are able to search for venues based on location and filter those venues based on venue type. This page features a map with icons indicating individual venues. The icons are clickable and feature a pop up which gives some venue information. On the bands page, users can search for bands based on location and can be directed to that band's profile page to find more information about the band. Finally, the calls page allows users to 'make a call', or advertise that they need help booking a show in a given location. Alternately, it also allows users to view calls in their location that they may want to respond to.

## Installation

1. Clone this repository
2. Run 'npm install' in the project directory
3. Clone the backend repo to your machine and follow those instructions
4. Ensure that you have succesfully started the Rails server
5. Run 'npm start'

## Usage

Sign in to the app using any of the seeded users' email and password

Click on a tour to be directed to the tour show page or click 'create new tour' to fill out the modal form to start a new tour.

Once on a tour show page you may:
    -click 'add a show' to fill out the modal form to add a new show to the tour
    -view all tour shows
    -click the plus sign on a show to view more details and present the options to edit or delete the show
    -delete a show
    -edit show information

Use the navbar to direct to the venues page
    -type a location into the search bar to pull up venues in that location on the map
    -click icon on map to show pop up information about the venue
    -filter venues by type
    -view list of venues
    -click plus sign on venue card to show more information about the venue

Use navbar to direct to bands page
    -use search bar to look for bands in a specific location
    -view list of bands 
    -click 'band page' on a card to direct to that band's profile page

Use navbar to direct to calls page
    -view calls in a specific location
    -click a card to see more information
    -click 'band page' on a card to be directed to that band's profile page
    -use search bar to view calls in a specific location
    -click plus sign icon in top right corner to fill out modal form to create a new call

Use navbar to logout


## Notes

Due to current data limitiations only the following locations are searchable:

venues: Asheville, Atlanta, Athens, Chattanooga, Raleigh, Richmond, Washington DC, Brooklyn, Nashville, Philidelphia 

bands: Asheville, Athens, Philidelphia, Brooklyn, Washington DC, Chattanooga

calls: Asheville, Athens
    -unless you create a new call in a new location

