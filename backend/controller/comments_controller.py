from flask import request
from flask_restful import Resource

from backend.service.comments_service import CommentsService

comments_service = CommentsService()

class CommentsController(Resource):

    def get(self):
        params = request.args
        response = comments_service.get_comments(params)
        return response if response else ('Comments Not Found', 404)

    def post(self):
        request_data = request.get_json()
        response = comments_service.post_commentso(request_data)
        return response

    def put(self):
        request_data = request.get_json()
        response = comments_service.put_comments(request_data)
        return response

    def delete(self):
        request_data = request.get_json()
        response = comments_service.delete_comments(request_data)
        return response
