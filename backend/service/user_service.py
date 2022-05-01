from backend.repository.user_repository import UserRepository

user_repository = UserRepository()

class UserService():

    def get_user(self, params=None):
        if params:
            resp = user_repository.find_users(params)
            res = format_obj_users(resp)
        else:
            resp = user_repository.find_users()
            res = [x.__dict__ for x in resp]
            for idx, r in enumerate(res):
                if '_sa_instance_state' in r:
                    del r['_sa_instance_state']
                if r['created_at'] or r['updated_at']:
                    res[idx]['created_at'] = str(res[idx].get('created_at'))
                    res[idx]['updated_at'] = str(res[idx].get('updated_at'))
        return res if res else 'User Not Found', 404

    def post_user(self, data):
        response = user_repository.insert_user(data)
        return response

    def put_user(self, data):
        user = self.get_user(data)
        if user:
            response = user_repository.update_user(data)
        return response

    def delete_user(self, data):
        user = self.get_user(data)
        if user:
            response = user_repository.delete_user(user)
        return response

def format_obj_users(obj):
    res = []
    for idx, i in enumerate(range(len(obj))):
        res.append([x.__dict__ for x in obj[idx]])
        if idx > 0:
            if res[idx - 1] == res[idx]:
                del res[idx]
    for idx, r in enumerate(res):
        if '_sa_instance_state' in r[0]:
            del res[idx][0]['_sa_instance_state']
        if r[0]['created_at'] or r[0]['updated_at']:
            res[idx][0]['created_at'] = str(res[idx][0].get('created_at'))
            res[idx][0]['updated_at'] = str(res[idx][0].get('updated_at'))
    return res