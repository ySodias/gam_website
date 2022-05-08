from sqlalchemy import update, delete

from backend.config.core import session
from backend.model.Dominio import Dominio
from backend.model.Likes import Likes

likes = Likes()


class LikesRepository():

    def find_likes_by_id(self, params):
        if params.get('id') != None:
            query = Likes.query.filter(Likes.id == params.get('id'))
            resp = [x for x in query]
            return resp
        else:
            return None

    def find_likes(self, params=None):
        if params:
            list_query = []
            if params.get('id_post') != None:
                query = Likes.query.filter(Likes.id_post == params.get('id_post')).all()
                list_query.append(query)
            if params.get('id_user') != None:
                query = Likes.query.filter(Likes.id_user == params.get('id_user')).all()
                list_query.append(query)
            if params.get('active') != None:
                query = Likes.query.filter(Likes.active == params.get('active')).all()
                list_query.append(query)
            if params.get('id_post') != None and params.get('id_user')!= None:
                query = Likes.query.filter(Likes.id_post == params.get('id_post') and Likes.id_user == params.get('id_user')).all()
                list_query.append(query)
            resp = [x for x in list_query]
        else:
            resp = Likes.query.all()
        return resp

    def insert_likes(self, body):
        try:
            likes.id_post = body.get('id_post')
            likes.id_user = body.get('id_user')
            likes.active = body.get('active')
            session.add(likes)
            session.commit()
            response = 'Like Created', 201
        except Exception as e:
            session.rollback()
            response = e.args, 500
        return response

    def update_likes(self, body):
        try:
            stm = (
                update(Likes).
                    where(Likes.id == body.get('id')).
                    values(body)
            )
            session.execute(stm)
            session.commit()
            response = body
        except Exception as e:
            session.rollback()
            response = e.args, 500
        return response