from flask import request
from flask_restful import Resource

from service.dominio_service import DominioService

dominio_service = DominioService()

class DominioControler(Resource):

    def get(self):
        params = request.args
        response = dominio_service.get_dominio(params)
        return response if response else ('Dominio Not Found', 404)

    def post(self):
        request_data = request.get_json()
        response = dominio_service.post_dominio(request_data)
        return response

    def put(self):
        request_data = request.get_json()
        response = dominio_service.put_dominio(request_data)
        return response

    def delete(self):
        request_data = request.get_json()
        response = dominio_service.delete_dominio(request_data)
        return response
