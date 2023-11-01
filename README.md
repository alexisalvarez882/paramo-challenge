## API Automation Project

## Overview
* This is a simple project to perform API Automation tests.
* API : https://www.balldontlie.io/home.html#players
* **Skills:** Api Test Automation, Modular Design
* **Languages:** JavaScript/ Node.JS
* **SCM:** Git
* **Build/Dependency Management:** npm
* **API Testing Frameworks:** Jest, Supertest
* **Assertion Lib:** Chai, Expect
* **Formatter Lib:** Eslint
* **Reports:** Allure

## Setup
* Install latest [Node.JS](https://nodejs.org/en/download/)
* Open Terminal and Navigate to Project Directory
* Run `$ npm install`

## Run Tests 
* To run tests just run command `$ npm run tests` (specified in package.json file)
    
## Reports
* To open an HTML report just run the command npm run report after the execution finishes

## Test Plan
The target of this project is to validate the "Games" endpoints, here is a list of scenarios that should be automated to guarantee the quality of the Restful Api : 

- Games
  - Get all games successfully
  - Get a specific game successfully
  - Get a specific game with a wrong id
  - Get a specific game with no id
  - Get all games with page and per_page attributes in zero value
  - Get all games with a wrong date format
  - Get all games with a wrong team id
  - Get all games with an empty team_ids array
  - Get all games with no start date
  - Get all games with no end date
