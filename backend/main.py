from flask_restful import Api
from backend.controller.user_controller import UserControler
from config.core import app

api = Api(app)

def set_urls():
    api.add_resource(UserControler, '/users')
    app.run()

if __name__ == '__main__':
    set_urls()