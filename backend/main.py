from flask_restful import Api

from backend.controller.comments_controller import CommentsController
from backend.controller.dominio_controller import DominioControler
from backend.controller.likes_controller import LikesController
from backend.controller.post_controller import PostController
from backend.controller.user_controller import UserControler
from config.core import app

api = Api(app)

def set_urls():
    api.add_resource(UserControler, '/users')
    api.add_resource(DominioControler, '/dominio')
    api.add_resource(PostController, '/posts')
    api.add_resource(CommentsController, '/comments')
    api.add_resource(LikesController, '/likes')
    app.run()

if __name__ == '__main__':
    set_urls()