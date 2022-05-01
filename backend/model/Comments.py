from sqlalchemy import DateTime, func
from backend.config.core import db
from backend.model.Post import Post
from backend.model.User import User


class Comments(db.Model):
    __tablename__ = 'tb_comments'
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(
        db.Integer,
        db.ForeignKey(User.id, ondelete='CASCADE'),
        nullable=False)
    id_post = db.Column(
        db.Integer,
        db.ForeignKey(Post.id, ondelete='CASCADE'),
        nullable=False)
    desc = db.Column(db.String, nullable=False)
    created_at = db.Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = db.Column(DateTime(timezone=True), onupdate=func.now())

    def __init__(self, id = None, id_user = None, id_post = None,
                 desc = None, created_at = None, updated_at = None):
        self.id = id
        self.id_user = id_user
        self.id_post = id_post
        self.desc = desc
        self.created_at = created_at
        self.updated_at = updated_at

def create_db():
    db.create_all()

create_db()