#!/bin/bash

service nginx start
python -m http.server --directory ./static --bind 0.0.0.0 8000 & echo $! > http_server.pid
python /home/user/app/randapi/randai/manage.py runserver 0.0.0.0:7860
pkill -F http_server.pid
rm http_server.pid


# #!/bin/bash
# cd randai
# #pip install -U g4f
# python manage.py makemigrations
# python manage.py migrate
# python manage.py runserver
# #python manage.py runserver 10.2.99.12:8000
