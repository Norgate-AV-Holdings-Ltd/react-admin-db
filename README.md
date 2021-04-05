# React-Admin-DB

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The aim of this project is to provide an easy to use web interface to manage a database of users, sources and rooms,
and to provide standard REST API calls in order to query the database collections.

It has been developed with the primary intention of being used with AMX/Crestron control systems in the AV industry.

## How to use

The application is built to run in a Docker container which runs on port 3000. You will need to have Docker and Docker Compose
installed to use this application.

The application is still in the development stage and as such the Docker container is currently running a development build.

### Clone the repo

`git clone https://github.com/Norgate-AV-Holdings-Ltd/react-admin-db.git && cd react-admin-db`

### Switch to the develop branch

`git checkout develop`

### Spin up the Docker container

`docker-compose up`

### View in browser

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
