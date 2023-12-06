# Folder Structure
The backend folder follows a standard Django file structure. With a configure directory
`/config`, a fixtures directionry for test files `/fixtures`, and several Django apps like
`/accounts`, `/notifications`, etc. which implement a feature. Most apps have tests written in 
`/<APP_NAME>/tests.py`. Notably, `/notifications` and `/ranking` configure websockets and have
additional `consumers.py` and `routing.py`, in additional to views and urls. 

    .
    ├── config                  # Configuration dir for Django
    │   ├── __init__.py                 
    │   ├── asgi.py
    │   ├── celery,py
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py   
    ├── fixtures                # Fixture dir for test database entries        
    │   ├── dev.yaml
    │   └── prod.yaml
    ├── accounts                # A Django app: A feature      
    │   ├── __init__.py                 
    │   ├── adapter.py
    │   ├── admin.py
    │   ├── apps.py
    │   ├── models.py
    │   ├── permission.py
    │   ├── serializers.py
    │   ├── tests.py
    │   ├── urls.py
    │   └── views.py   
    ├── notifications           # Another Django app           
    │   ├── __init__.py                 
    │   ├── admin.py
    │   ├── apps.py
    │   ├── consumers.py
    │   ├── models.py
    │   ├── permission.py
    │   ├── routing.py
    │   ├── serializers.py
    │   ├── service.py
    │   ├── signals.py
    │   ├── tests.py
    │   ├── urls.py
    │   └── views.py                 
    ├── ...                     # More Django apps 
    ├── service                     
    │   └── rating.py           # Trueskill rating service
    ├── build_files.sh
    ├── docker-compose.yml
    ├── Dockerfile
    ├── manage.py
    ├── Pipfile
    ├── Pipfile.lock
    ├── requirments.txt
    ├── vercel.json
    └── ...


