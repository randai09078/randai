#!/bin/bash
cd randapi/randai
#pip install -U g4f
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
#python manage.py runserver 192.168.99.58:8000
