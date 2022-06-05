from backend.repository.user_repository import UserRepository
from backend.utils.format_util import FormatUtil

user_repository = UserRepository()
format_util = FormatUtil()

class UserService():

    def get_user(self, params=None):
        if params:
            res = user_repository.find_users(params)
            try:
                res = format_util.format_obj_response_db(res)
            except:
                return res.append(None)
        else:
            res = user_repository.find_users()
            if res:
                res = [x.__dict__ for x in res]
                res = format_util.format_list_obj(res)
        return (res, 200) if len(res) > 0 else None

    def get_user_by_id(self, params):
        if params.get('id'):
            res = user_repository.find_users_by_id(params)
            if res:
                res = [x.__dict__ for x in res]
                res = format_util.format_list_obj(res)
            else:
                return res.append(None)
        return (res, 200) if res[0] != None else None

    def post_user(self, data):
        response = user_repository.insert_user(data)
        return response

    def put_user(self, data):
        user = self.get_user_by_id(data['data'])
        response = user_repository.update_user(data['data']) if user else ('User Not Found', 404)
        return response

    def delete_user(self, data):
        user = self.get_user_by_id(data)
        response = user_repository.delete_user(user) if user else ('User Not Found', 404)
        return response

