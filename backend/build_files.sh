# build_files.sh
pipenv install && pipenv shell

# make migrations
python manage.py migrate
python manage.py loaddata prod.yaml
python manage.py collectstatic
