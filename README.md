# Basketball Schedules App

This webpage is an interactive schedule for a local elementary basketball league. A user can easily navigate the page to view the league rules, each location (and address) for games, add new locations, view the entire league schedule, view the schedule for an individual team, add scores to a game once played, and toggle the view to see the full schedule or just future games. 

## The Back Story

This year, my child played travel basketball for the first time. Throughout the season, the parents were consistently annoyed with the layout of the league's website. It appears to be written in simple html with no formatting. Because of this, navigating the page and finding needed information required scrolling through everything and hoping not to miss any important information. 

This project build is designed with coaches and parents in mind. It is set up to locate necessary information easily and intuitively. It uses client-side routing to navigate through the page in a logical manner.

## Getting Started
The data for the league is stored in db.json. To access this data, the user will need to use a JSON server. To start the server, run `npm run server` in the terminal.

Next, to start the actual page, run `npm start` in a new terminal.

## Features
The user can:

* view the league information and rules **"/"**

* view the location information **"/locations"** 


* add new locations on the new location form  **"/locations/new"**

* view the entire league schedule **"/schedule"**

* add scores after a game has been played **"/schedule"**

* view a specific team's schedule by clicking it's link at the top of the page **"/schedule/:id"**

* toggle between viewing the entire schedule or just viewing unplayed games **"/schedule"** and **"/schedule/:id"**





