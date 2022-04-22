from sqlalchemy import create_engine, MetaData, Table, DateTime
import datetime
import main

db = main.db

class User(db.Model):
    __tablename__ = 'tb_user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True)
    email_adress = db.Column(db.String, unique=True)
    photo = db.Column(db.String, nullable=False)
    created_at = db.Column(DateTime, default=datetime.datetime.utcnow, nullable=False)
    updated_at = db.Column(DateTime, default=datetime.datetime.utcnow, nullable=False)

    def __init__(self):
        self.id = None
        self.username = None
        self.email_adress = None
        self.photo = None
        self.created_at = None
        self.updated_at = None

def create_db():
    db.create_all()

create_db()
