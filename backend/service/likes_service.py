from backend.repository.likes_repository import LikesRepository
from backend.utils.format_util import FormatUtil

likes_repository = LikesRepository()
format_util = FormatUtil()

class LikesService():
    def get_like(self, params):
        if params:
            res = likes_repository.find_likes(params)
            try:
                res = format_util.format_obj_response_db(res)
            except:
                return res.append(None)
        else:
            res = likes_repository.find_likes()
            if res:
                res = [x.__dict__ for x in res]
                res = format_util.format_list_obj(res)
        return (res, 200) if res[0] != None else None

    def get_like_by_id(self, params):
        res = []
        if params.get('id'):
            res = likes_repository.find_likes_by_id(params)
            if res:
                res = [x.__dict__ for x in res]
                res = format_util.format_list_obj(res)
            else:
                return res.append(None)
        return (res, 200) if res[0] != None else None

    def post_like(self, data):
        like = self.get_like(data)
        try:
            if not like:
                response = likes_repository.insert_likes(data)
                return response
            else:
                response = self.put_likes(data)
                return response
        except Exception as e:
            return e.args, 500

    def put_likes(self, data):
        likes = self.get_like_by_id(data)
        if data.get('id_user') == likes[0][0]['id_user'] and data.get('id_post') == likes[0][0]['id_post'] :
            response = likes_repository.update_likes(data) if likes else ('Dominio Not Found', 404)
            return response
        else:
            return f"You can't edit User and Post of a Like", 403

