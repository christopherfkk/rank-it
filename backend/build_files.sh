# build_files.sh
pip install pipenv && pipenv install && pipenv shell

# make migrations
python manage.py migrate
python manage.py loaddata prod.yaml
python manage.py collectstatic
