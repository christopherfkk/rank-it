## Run the backend server locally

Download the package and virtual environment manager `pipenv`.
```bash
pip install pipenv
```

Install the requirements from `backend/Pipfile`.
```bash
cd backend
pipenv install
```

Activate the virtual environment and run.
```bash
pipenv shell
(backend) export DJANGO_DATABASE=no-docker
(backend) python manage.py runserver
(backend) exit # deactivate virtual environment
```

## Run the backend server in Docker with PostgreSQL

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

## Run the frontend app on Expo
Download Expo app on App Store.
```bash
cd frontend
npm install
npx expo start # Use camera to scan QR code
```