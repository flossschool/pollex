from flask import Flask
from flask_cors import CORS
from os import getenv

app = Flask(__name__, instance_relative_config=True)

app.config.from_object('config.default')
if getenv('FLASK_ENV') == 'production': app.config.from_object('config.production')
if getenv('FLASK_ENV') == 'development': app.config.from_object('config.development')
app.config.from_pyfile('config.py')

# CORS policy
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

from app.database import db

# Init database
db.init_app(app)

# Import modules
from app.views.auth import auth_module
from app.views.polls import polls_module

# Register Blueprints
app.register_blueprint(auth_module)
app.register_blueprint(polls_module)
