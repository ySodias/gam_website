from flask import request
from flask_restful import Resource
from backend.service.user_service import UserService

user_service = UserService()

class UserControler(Resource):

    def get(self):
        params = request.args
        response = user_service.get_user(params)
        return response if response else ('User Not Found', 404)

    def post(self):
        request_data = request.get_json()
        response = user_service.post_user(request_data)
        return response

    def put(self):
        request_data = request.get_json()
        response = user_service.put_user(request_data)
        return response

    def delete(self):
        request_data = request.args
        response = user_service.delete_user(request_data)
        return response