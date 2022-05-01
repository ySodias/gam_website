from sqlalchemy import DateTime, func
from backend.config.core import db

class Dominio(db.Model):
    __tablename__ = 'tb_dominio'
    id = db.Column(db.Integer, primary_key=True)
    nm_dominio = db.Column(db.String, unique=True, nullable=False)
    created_at = db.Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = db.Column(DateTime(timezone=True), onupdate=func.now())


    def __init__(self, id = None, nm_dominio = None, created_at=None, updated_at = None):
        self.id = id
        self.nm_dominio = nm_dominio
        self.created_at = created_at
        self.updated_at = updated_at

def create_db():
    db.create_all()

create_db()