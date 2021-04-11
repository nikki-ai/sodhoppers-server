# Sodhoppers Final Capstone App
## Description
This is a web application that will provide users with a way to schedule lawn care services and from an admin perspective will provide a neat way to schedule clients via a drag and drop kanban style dashboard.
## Link to Live App & Repos
- Live App:
  - https://sodhoppers.vercel.app/
- Server Repo:
  - https://github.com/nikki-ai/sodhoppers-server
- Client Repo:
  - https://github.com/nikki-ai/sodhoppers-client
## Application Features
User Stories

- Homepage with about 

- Contact us page

- Services page lists all offered services w/ desc.

- Services page with scheduling functionality

- When requesting a service input name, phone number, email, etc.


Admin Stories

- Log in page

- Kanban style dashboard with drag and drop functionality
 Potential Client, Contacted, Scheduled, Complete

- Potential Client auto populates with clients who scheduled 
 a service

- Color code kanban based on service client wants

## Screenshots

Homepage - ![image](https://user-images.githubusercontent.com/72418388/114317996-71ea7d00-9ad0-11eb-8878-8e6d2b2240ee.png)

Services Page - ![image](https://user-images.githubusercontent.com/72418388/114318026-9d6d6780-9ad0-11eb-84fe-4543427a18bb.png)

Admin Dashboard - ![image](https://user-images.githubusercontent.com/72418388/114318043-b70eaf00-9ad0-11eb-8577-b9ffd3cfbe3c.png)

## Tech Stacks Used
- Front-end technologies
  - Javascript frameworks
  - CSS grid
  - React
  - Deployed via Vercel
- Back-end technologies
  - Node.js
  - RESTful Api
  - Deployed via Heroku
- Data Persistence
  - PostgreSQL
## Setup
To setup the application
1. Fork and clone the project to your machine
2. `npm install`. This will also install the application _Cypress.io_ for running browser integration tests
The project expects you have the Spaced repetition API project setup and running on http://localhost:8000.
Find instructions to setup the API here https://github.com/Thinkful-Ed/spaced-repetition-api.
## Running project
This is a `create-react-app` project so `npm start` will start the project in development mode with hot reloading by default.
## Running the tests
This project uses [Cypress IO](https://docs.cypress.io) for integration testing using the Chrome browser.
Cypress has the following expectations:
- You have cypress installed (this is a devDependency of the project)
- You have your application running at http://localhost:3000.
  - You can change the address of this expectation in the `./cypress.json` file.
- Your `./src/config.js` is using http://localhost:8000/api as the `API_ENDPOINT`
To start the tests run the command:
```bash
npm run cypress:open
```
On the first run of this command, the cypress application will verify its install. Any other runs after this, the verification will be skipped.
The command will open up the Cypress application which reads tests from the `./cypress/integration/` directory. You can then run individual tests by clicking on the file names or run all tests by clicking the "run all tests" button in the cypress GUI.
Tests will assert against your running localhost client application.
You can also start all of the tests in the command line only (not using the GUI) by running the command:
```bash
npm run cypress:run
```
This will save video recordings of the test runs in the directory `./cypress/videos/`.

