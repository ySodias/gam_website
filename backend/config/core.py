from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import Session

from backend.config import enviroments

app = Flask(__name__)
app.secret_key = "gam.com"
app.config['SQLALCHEMY_DATABASE_URI'] = enviroments.DB_CONN
db = SQLAlchemy(app)
engine = create_engine(enviroments.DB_CONN)
session = Session(engine)

