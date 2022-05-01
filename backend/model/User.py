from sqlalchemy import DateTime, func
from backend.config.core import db


class User(db.Model):
    __tablename__ = 'tb_user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    email_adress = db.Column(db.String, unique=True, nullable=False)
    photo = db.Column(db.String, nullable=False)
    created_at = db.Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = db.Column(DateTime(timezone=True), onupdate=func.now())

    def __init__(self, id=None, username=None, email_adress=None, photo=None, created_at=None, updated_at = None):
        self.id = id
        self.username = username
        self.email_adress = email_adress
        self.photo = photo
        self.created_at = created_at
        self.updated_at = updated_at

def create_db():
    db.create_all()


create_db()