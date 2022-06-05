from sqlalchemy import update, delete

from backend.model.Comments import Comments

comments = Comments()

class CommentsRepository():

    def find_comments_by_id(self, params):
        if params.get('id') != None:
            query = Comments.query.filter(Comments.id == params.get('id'))
            resp = [x for x in query]
            return resp
        else:
            return None

    def find_comments(self, params=None):
        if params:
            list_query = []
            if params.get('id_post') != None:
                query = Comments.query.filter(Comments.id_post == params.get('id_post')).all()
                list_query.append(query)
            if params.get('id') != None:
                query = Comments.query.filter(Comments.id == params.get('id'))
                list_query.append(query)
            if params.get('id_user')!= None:
                query = Comments.query.filter(Comments.id_user == params.get('id_user'))
                list_query.append(query)
            if params.get('id_post') != None and params.get('id_user')!= None:
                query = Comments.query.filter(Comments.id_post == params.get('id_post') and Comments.id_user == params.get('id_user')).all()
                list_query.append(query)
            resp = [x for x in list_query]
        else:
            resp = Comments.query.all()
        return resp

    def insert_comments(self, body):
        try:
            comments.id_post = body.get('id_post')
            comments.desc = body.get('desc')
            comments.id_user = body.get('id_user')
            session.add(comments)
            session.commit()
            response = 'Comments Created', 201
        except Exception as e:
            session.rollback()
            response = e.args, 500
        return response

    def update_comments(self, body):
        try:
            stm = (
                update(Comments).
                    where(Comments.id == body.get('id')).
                    values(body)
            )
            session.execute(stm)
            session.commit()
            response = body
        except Exception as e:
            session.rollback()
            response = e.args, 500
        return response

    def delete_comments(self, body):
        try:
            stm = (
                delete(Comments).
                    where(Comments.id == body[0][0]['id'])
            )
            session.execute(stm)
            session.commit()
            response = 'deleted with sucess', 200
        except Exception as e:
            session.rollback()
            response = e.args, 500

        return response