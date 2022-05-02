from flask_restful import Api

from backend.controller.dominio_controller import DominioControler
from backend.controller.user_controller import UserControler
from config.core import app

api = Api(app)

def set_urls():
    api.add_resource(UserControler, '/users')
    api.add_resource(DominioControler, '/dominio')
    app.run()

if __name__ == '__main__':
    set_urls()