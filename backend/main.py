from flask_restful import Api

from controller.comments_controller import CommentsController
from controller.dominio_controller import DominioControler
from controller.likes_controller import LikesController
from controller.post_controller import PostController, InteratorsController
from controller.user_controller import UserControler
from config.core import app

api = Api(app)

def set_urls():
    api.add_resource(UserControler, '/users')
    api.add_resource(DominioControler, '/dominio')
    api.add_resource(PostController, '/posts')
    api.add_resource(CommentsController, '/comments')
    api.add_resource(LikesController, '/likes')
    api.add_resource(InteratorsController, '/interators')
    app.run()

if __name__ == '__main__':
    set_urls()