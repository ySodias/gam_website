class FormatUtil():
    def format_obj_response_db(self, obj):
        res = []
        for idx, i in enumerate(range(len(obj))):
            res.append([x.__dict__ for x in obj[idx]])
            if idx > 0:
                if res[idx - 1] == res[idx]:
                    del res[idx]
        res = self.format_list_obj(res)
        return res

    def format_list_obj(self, obj):
        for idx, r in enumerate(obj):
            try:
                if '_sa_instance_state' in r[0]:
                    del obj[idx][0]['_sa_instance_state']
                if r[0]['created_at'] or r[0]['updated_at']:
                    obj[idx][0]['created_at'] = str(obj[idx][0].get('created_at'))
                    obj[idx][0]['updated_at'] = str(obj[idx][0].get('updated_at'))
            except:
                if '_sa_instance_state' in r:
                    del obj[idx]['_sa_instance_state']
                if r['created_at'] or r['updated_at']:
                    obj[idx]['created_at'] = str(obj[idx].get('created_at'))
                    obj[idx]['updated_at'] = str(obj[idx].get('updated_at'))
        return obj