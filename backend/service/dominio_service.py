from backend.repository.dominio_repository import DominioRepository
from backend.utils.format_util import FormatUtil

dominio_repository = DominioRepository()
format_util = FormatUtil()

class DominioService():
    def get_dominio(self, params):
        if params.get('nm_dominio'):
            res = dominio_repository.find_dominio(params)
            try:
                res = format_util.format_obj_response_db(res)
            except:
                return res.append(None)
        else:
            res = dominio_repository.find_dominio()
            if res:
                res = [x.__dict__ for x in res]
                res = format_util.format_list_obj(res)
        return (res, 200) if res[0] != None else None

    def get_dominio_by_id(self, params):
        res = []
        if params.get('id'):
            res = dominio_repository.find_dominio_by_id(params)
            if res:
                res = [x.__dict__ for x in res]
                res = format_util.format_list_obj(res)
            else:
                return res.append(None)
        return (res, 200) if res[0] != None else None

    def post_dominio(self, data):
        response = dominio_repository.insert_dominio(data)
        return response

    def put_dominio(self, data):
        dominio = self.get_dominio_by_id(data)
        response = dominio_repository.update_dominio(data) if dominio else ('Dominio Not Found', 404)
        return response

    def delete_dominio(self, data):
        dominio = self.get_dominio_by_id(data)
        response = dominio_repository.delete_dominio(dominio) if dominio else ('Dominio Not Found', 404)
        return response
