#!/bin/bash
cd randapi/randai
#pip install -U g4f
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
#python manage.py runserver 192.168.99.58:8000
