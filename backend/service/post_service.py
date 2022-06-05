from backend.repository.post_repository import PostRepository
from backend.repository.user_repository import UserRepository
from backend.service.comments_service import CommentsService
from backend.service.likes_service import LikesService
from backend.service.user_service import UserService
from backend.utils.format_util import FormatUtil

post_repository = PostRepository()
comments_service = CommentsService()
likes_service = LikesService()
format_util = FormatUtil()
user_service = UserService()

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
                for idx, r in enumerate(res):
                    res_user = user_service.get_user_by_id({'id': r['id_user']})
                    res[idx].update({'user': res_user[0][0]})
                    try:
                        res_interator = self.get_interators({'id_post': r['id']})
                        if (type(res_interator) is dict):
                            res[idx].update({'interator': res_interator})
                        else:
                            pass
                    except:
                        pass
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

    def get_interators(self, id_post):
        try:
            data = {"id_post": id_post['id_post']}
            list_comments = comments_service.get_comments(data)
            list_likes = likes_service.get_like(data)
            data = {
                "id_post": data['id_post'],
                "likes": len(list_likes),
                "comments": len(list_comments)
            }
            return data
        except Exception as e:
            return (e.args, 500)
