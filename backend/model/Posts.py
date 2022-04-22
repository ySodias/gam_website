from sqlalchemy import DateTime
import datetime
import main

db = main.db

class Post(db.Model):
    __tablename__ = 'tb_post'
    id = db.Column(db.Integer, primary_key=True)
    src_img = db.Column(db.String)
    id_dominio = db.Column(
        db.Integer,
        db.ForeignKey('tb_dominio.id', ondelete='CASCADE'),
        nullable=False)
    id_user = db.Column(
        db.Integer,
        db.ForeignKey('tb_user.id', ondelete='CASCADE'),
        nullable=False)
    title = db.Column(db.String)
    desc = db.Column(db.String)
    created_at = db.Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(DateTime, default=datetime.datetime.utcnow)

    def __init__(self):
        self.id = None
        self.src_img = None
        self.id_dominio = None
        self.id_user = None
        self.desc = None
        self.created_at = None
        self.updated_at = None

def create_db():
    db.create_all()

create_db()
