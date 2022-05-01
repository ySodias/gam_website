from sqlalchemy import DateTime, func
from backend.config.core import db
from backend.model.Dominio import Dominio
from backend.model.User import User


class Post(db.Model):
    __tablename__ = 'tb_post'
    id = db.Column(db.Integer, primary_key=True)
    src_img = db.Column(db.String, nullable=False)
    id_dominio = db.Column(
        db.Integer,
        db.ForeignKey(Dominio.id, ondelete='CASCADE'),
        nullable=False)
    id_user = db.Column(
        db.Integer,
        db.ForeignKey(User.id, ondelete='CASCADE'),
        nullable=False)
    title = db.Column(db.String, nullable=False)
    desc = db.Column(db.String, nullable=False)
    created_at = db.Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = db.Column(DateTime(timezone=True), onupdate=func.now())

    def __init__(self, id = None, src_img = None,
                 id_dominio = None, id_user = None,
                 desc = None, created_at = None, updated_at = None):
        self.id = id
        self.src_img = src_img
        self.id_dominio = id_dominio
        self.id_user = id_user
        self.desc = desc
        self.created_at = created_at
        self.updated_at = updated_at

def create_db():
    db.create_all()

create_db()