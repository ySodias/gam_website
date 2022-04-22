from sqlalchemy import DateTime
import datetime
import main
from model import Posts
from model.Posts import Post
from model.User import User

db = main.db

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
    created_at = db.Column(DateTime, default=datetime.datetime.utcnow, nullable=False)
    updated_at = db.Column(DateTime, default=datetime.datetime.utcnow, nullable=False)

    def __init__(self):
        self.id = None
        self.id_user = None
        self.id_post = None
        self.desc = None
        self.created_at = None
        self.updated_at = None

def create_db():
    db.create_all()

create_db()