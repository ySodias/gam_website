from sqlalchemy import update, delete
from backend.config.core import session
from backend.model.User import User

user = User()

class UserRepository():

    def find_users(self, params=None):
        if params:
            list_query = []
            if params.get('username') != None:
                query = User.query.filter(User.username == params.get('username')).all()
                list_query.append(query)
            if params.get('id') != None:
                query = User.query.filter(User.id == params.get('id')).all()
                list_query.append(query)
            if params.get('email_adress') != None:
                query = User.query.filter(User.email_adress == params.get('email_adress')).all()
                list_query.append(query)
            resp = [x for x in list_query]
        else:
            resp = User.query.all()
        return resp

    def insert_user(self, body):
        try:
            user.username = body.get('username')
            user.email_adress = body.get('email_adress')
            user.photo = body.get('photo')
            session.add(user)
            session.commit()
            response = 'User Created', 201
        except Exception as e:
            response = e.args, 500
        return response

    def update_user(self, body):
        try:
            stm = (
                update(User).
                where(User.username == body.get('username')).
                values(body)
            )
            session.execute(stm)
            session.commit()
            response = body
        except Exception as e:
            response = e.args, 500
        return response

    def delete_user(self, body):
        try:
            stm = (
                delete(User).
                where(User.id == body[0][0]['id'])
            )
            session.execute(stm)
            session.commit()
            response = f"{body[0][0]['username']} deleted with sucess", 200
        except Exception as e:
            response = e.args, 500

        return response
