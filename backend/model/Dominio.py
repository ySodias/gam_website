import main

db = main.db

class Dominio(db.Model):
    __tablename__ = 'tb_dominio'
    id = db.Column(db.Integer, primary_key=True)
    nm_dominio = db.Column(db.String, unique=True)

    def __init__(self):
        self.id = None
        self.nm_dominio = None

def create_db():
    db.create_all()

create_db()
