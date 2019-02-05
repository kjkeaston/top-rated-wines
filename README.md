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
* type `company-miner`, followed by `[file path]`, followed by a supported command, followed by command argument
* **Example** `$ company-miner /Users/kyleeaston/Desktop/company_data.json locate TX`
* Run tests with `npm test`
