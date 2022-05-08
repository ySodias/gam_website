from backend.repository.post_repository import PostRepository
from backend.utils.format_util import FormatUtil

post_repository = PostRepository()
format_util = FormatUtil()

class PostService():

    def get_post(self, params=None):
        if params:
            res = post_repository.find_post(params)
            try:
                res = format_util.format_obj_response_db(res)
            except:
                return res.append(None)
        else:
            res = post_repository.find_post()
            if res:
                res = [x.__dict__ for x in res]
                res = format_util.format_list_obj(res)
        return (res, 200) if res[0] != None else None

    def get_post_by_id(self, params):
        res = []
        if params.get('id'):
            res = post_repository.find_post_by_id(params)
            if res:
                res = [x.__dict__ for x in res]
                res = format_util.format_list_obj(res)
            else:
                return res.append(None)
        return (res, 200) if res[0] != None else None

    def post_post(self, data):
        response = post_repository.insert_post(data)
        return response

    def put_post(self, data):
        post = self.get_post(data)
        response = post_repository.update_post(data) if post else ('Post Not Found', 404)
        return response

    def delete_post(self, data):
        post = self.get_post(data)
        response = post_repository.delete_post(post) if post else ('Post Not Found', 404)
        return response
