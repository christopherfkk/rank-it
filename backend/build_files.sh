# build_files.sh
pip install pipenv && pipenv install && pipenv shell

# make migrations
python3.9 manage.py migrate
python3.9 manage.py loaddata prod.yaml
python3.9 manage.py collectstatic
