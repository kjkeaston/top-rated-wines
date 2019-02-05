# Top Rated Wines
Thanks for checking out my repo! This MERN app is using a data set obtained from [Kaggle](https://www.kaggle.com/)

![Example app screenshot](/example_screenshot.png "Title")

## Features
* Full CRUD app
  * Using combination of axios and fetch for create, read, update, delete
  * Pop-up modal for creating, editing, deleting
* [jQWidgets](https://www.jqwidgets.com/) jqxGrid for the wine table display
* Server-side pagination limiting results to 20 wines per page
* Export current table data to CSV
* Pop-up modal for testing checkmark clicks of parent elements and their respective children

## Setup to Run
* clone repository
* cd into cloned directory
* run `npm install` from within directory to install the required dependencies 
* run `npm start` from root directory
 * this should fire up the frontend on PORT:3000 and the backend on PORT:8080
* Open a new tab within the current terminal session (new tab should still be in root)
* cd into `backend` from root
* run `node db/seed.js` to seed your local database with the wine data from the CSV 
* run `mongod` to fire up the MongoBD database
* visit `http://localhost:3000/` in your browser to see the running app

### Sending Feedback
I am always open to [your feedback](https://github.com/kjkeaston/top-rated-wines/issues).
