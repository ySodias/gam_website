from flask import request
from flask_restful import Resource
from backend.service.post_service import PostService

user_post = PostService()

class PostController(Resource):

    def get(self):
        params = request.args
        response = user_post.get_post(params)
        return response if response else ('Post Not Found', 404)

    def post(self):
        request_data = request.get_json()
        response = user_post.post_post(request_data)
        return response

    def put(self):
        request_data = request.get_json()
        response = user_post.put_post(request_data)
        return response

    def delete(self):
        request_data = request.get_json()
        response = user_post.delete_post(request_data)
        return response