from backend.repository.comments_repository import CommentsRepository
from backend.utils.format_util import FormatUtil

comments_repository = CommentsRepository()
format_util = FormatUtil()

class CommentsService():
    def get_comments(self, params):
        if params.get('id_post'):
            res = comments_repository.find_comments(params)
            try:
                res = format_util.format_obj_response_db(res)
            except:
                return res.append(None)
        else:
            res = comments_repository.find_comments()
            if res:
                res = [x.__dict__ for x in res]
                res = format_util.format_list_obj(res)
        return (res, 200) if res[0] != None else None

    def get_dominio_by_id(self, params):
        res = []
        if params.get('id'):
            res = comments_repository.find_comments_by_id(params)
            if res:
                res = [x.__dict__ for x in res]
                res = format_util.format_list_obj(res)
            else:
                return res.append(None)
        return (res, 200) if res[0] != None else None

    def post_commentso(self, data):
        response = comments_repository.insert_comments(data)
        return response

    def put_comments(self, data):
        comments = self.get_dominio_by_id(data)
        response = comments_repository.update_comments(data) if comments else ('Comments Not Found', 404)
        return response

    def delete_comments(self, data):
        comments = self.get_dominio_by_id(data)
        response = comments_repository.delete_comments(comments) if comments else ('Comments Not Found', 404)
        return response
