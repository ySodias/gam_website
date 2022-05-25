from flask import request
from flask_restful import Resource
from backend.service.post_service import PostService

post_service = PostService()

class PostController(Resource):

    def get(self):
        params = request.args
        response = post_service.get_post(params)
        return response if response else ('Post Not Found', 404)

    def post(self):
        request_data = request.get_json()
        response = post_service.post_post(request_data)
        return response

    def put(self):
        request_data = request.get_json()
        response = post_service.put_post(request_data)
        return response

    def delete(self):
        request_data = request.get_json()
        response = post_service.delete_post(request_data)
        return response

class InteratorsController(Resource):

    def get(self):
        params = request.args
        response = post_service.get_interators(params)
        return response if response else 500