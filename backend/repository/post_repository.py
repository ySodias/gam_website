from flask import session
from sqlalchemy import update, delete

from backend.model.Post import Post

post = Post()

class PostRepository():

    def find_post(self, params=None):
        if params:
            list_query = []
            if params.get('title') != None:
                query = Post.query.filter(Post.title == params.get('title')).all()
                list_query.append(query)
            if params.get('id_user') != None:
                query = Post.query.filter(Post.id_user == params.get('id_user')).all()
                list_query.append(query)
            if params.get('id') != None:
                query = Post.query.filter(Post.id == params.get('id')).all()
                list_query.append(query)
            if params.get('id_dominio') != None:
                query = Post.query.filter(Post.id_dominio == params.get('id_dominio')).all()
                list_query.append(query)
            resp = [x for x in list_query]
        else:
            resp = Post.query.all()
        return resp

    def find_post_by_id(self, params):
        if params.get('id') != None:
            query = Post.query.filter(Post.id == params.get('id'))
            resp = [x for x in query]
            return resp
        else:
            return None


    def insert_post(self, body):
        try:
            post.title = body.get('title')
            post.desc = body.get('desc')
            post.id_dominio = body.get('id_dominio')
            post.id_user = body.get('id_user')
            post.src_img = body.get('src_img')
            session.add(post)
            session.commit()
            response = 'Post Created', 201
        except Exception as e:
            session.rollback()
            response = e.args, 500
        return response

    def update_post(self, body):
        try:
            stm = (
                update(Post).
                where(Post.title == body.get('title')).
                values(body)
            )
            session.execute(stm)
            session.commit()
            response = body
        except Exception as e:
            session.rollback()
            response = e.args, 500
        return response

    def delete_post(self, body):
        try:
            stm = (
                delete(Post).
                where(Post.id == body[0][0][0]['id'])
            )
            session.execute(stm)
            session.commit()
            response = f"{body[0][0][0]['title']} deleted with sucess", 200
        except Exception as e:
            session.rollback()
            response = e.args, 500
        return response