<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="frontend/assets/rank-it-logo.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">A competitive community for badminton amateurs</h3>

  <p align="center">
    <a href="https://www.loom.com/share/8231eda517c74f6ba1e316eed79b14a0">View Demo</a>
  </p>
</div>

# Project Description
RankIt uses a Django backend server written in Python with a PostgreSQL relational database and a Reat Native mobile frontend written in 
Typescript, with a Redux store to manage state variables. All the Django files are under `/backend` and all the React Native files are
under `/frontend`. Between the two, it uses HTTP and Websockets to communicate. For information about the folder structure, 
there is a README each in both directories to further explain that.
# Getting Started

### 1. Run the backend server locally

Download the package and virtual environment manager `pipenv`.
```bash
pip install pipenv
```

Install the requirements from `backend/Pipfile`.
```bash
cd backend
pipenv install
```
Install redis
```bash
brew install redis
redis-server
```

Activate the virtual environment and run.
```bash
pipenv shell
(backend) export DJANGO_DATABASE=no-docker
(backend) python manage.py runserver
(backend) exit # deactivate virtual environment
```

### (Alternatively) Run the backend server in Docker with PostgreSQL

Get Docker and ensure Docker daemon is running. Run container in detached mode and force build.
```bash
cd backend
docker-compose up -d --build 
```

Check Django server at http://127.0.0.1:8000/
```bash
docker-compose logs # to debug
docker-compose down # to stop and remove all containers
```


### 2. Run the frontend on an IOS simulator

```bash
cd frontend
npm install
npx expo start
i  # for opening on IOS simulator
```

### (Optionally) Build the frontend app on Expo (web)
Build with Metro bundler
```bash
cd frontend
npx expo export --platform web
npx serve dist  # build bundle in `dist` folder
```
