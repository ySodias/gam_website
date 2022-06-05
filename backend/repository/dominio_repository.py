from sqlalchemy import update, delete

from backend.model.Dominio import Dominio

dominio = Dominio()

class DominioRepository():

    def find_dominio_by_id(self, params):
        if params.get('id') != None:
            query = Dominio.query.filter(Dominio.id == params.get('id'))
            resp = [x for x in query]
            return resp
        else:
            return None

    def find_dominio(self, params=None):
        if params:
            list_query = []
            if params.get('nm_dominio') != None:
                query = Dominio.query.filter(Dominio.nm_dominio == params.get('nm_dominio')).all()
                list_query.append(query)
            resp = [x for x in list_query]
        else:
            resp = Dominio.query.all()
        return resp

    def insert_dominio(self, body):
        try:
            dominio.nm_dominio = body.get('nm_dominio')
            session.add(dominio)
            session.commit()
            response = 'Dominio Created', 201
        except Exception as e:
            session.rollback()
            response = e.args, 500
        return response

    def update_dominio(self, body):
        try:
            stm = (
                update(Dominio).
                    where(Dominio.id == body.get('id')).
                    values(body)
            )
            session.execute(stm)
            session.commit()
            response = body
        except Exception as e:
            session.rollback()
            response = e.args, 500
        return response

    def delete_dominio(self, body):
        try:
            stm = (
                delete(Dominio).
                    where(Dominio.id == body[0][0][0]['id'])
            )
            session.execute(stm)
            session.commit()
            response = f"{body[0][0][0]['nm_dominio']} deleted with sucess", 200
        except Exception as e:
            session.rollback()
            response = e.args, 500

        return response

