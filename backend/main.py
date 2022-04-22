from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import enviroments

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = enviroments.DB_CONN
db = SQLAlchemy(app)

@app.route('/')
def create_table():
    return''

if __name__ == '__main__':
    app.run()