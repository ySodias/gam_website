from flask import request
from flask_restful import Resource

from backend.service.likes_service import LikesService

likes_service = LikesService()

class LikesController(Resource):

    def get(self):
        params = request.args
        response = likes_service.get_like(params)
        return response if response else ('Likes Not Found', 404)

    def post(self):
        request_data = request.get_json()
        response = likes_service.post_like(request_data)
        return response

    def put(self):
        request_data = request.get_json()
        response = likes_service.put_likes(request_data)
        return response
