# Pull base image of python version
FROM python:3.11

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory within Docker container
WORKDIR /backend-docker

# Install dependencies in Docker container
COPY Pipfile Pipfile.lock /backend-docker/
RUN pip install pipenv && pipenv install --system

# Copy project files to Docker container file system
COPY . /backend-docker/