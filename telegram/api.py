import requests
import json
from requests_toolbelt.multipart.encoder import MultipartEncoder
import base64
class MYApiBorsSite():

   
        
    
    def GetToken(self):
        url = "http://127.0.0.1:8000/api/token/"
        payload = "{\n\t\"username\":\"virux\",\n\t\"password\":\"<PASS>\"\n}"
        data ={
            "username":"virux",
            "password":"<PASSWORD>"
        }
        headers = {
        'content-type': "application/json",
        'cache-control': "no-cache",
        }
        response = requests.request("POST", url, data=json.dumps(data), headers=headers)
        # print(response.text)
        token = json.loads(response.text)
        # print(type(response.status_code))
        if response.status_code ==200:
            return token['access']
        else: 
            return ''
        
    def CreateTwit(self,data):
        url = "http://127.0.0.1:8000/api/twit"
        print('apiData :::::::: ',data)
        if data['image_path']:
            print('injam')
            with open(data['image_path'], "rb") as image_file:
                encoded_string_img = base64.b64encode(image_file.read())
                # print(encoded_string)
                multipart_data = MultipartEncoder(
                    fields={
                            # a file upload field
                            'image': encoded_string_img,
                            # plain text fields
                            'description': data['description'].encode('utf-8'), 
                            'category': '1',
                            'company_channel_id' : str(data['channel_id']),
                        }
                )
        else: 
            
            print('elsam')
            multipart_data = MultipartEncoder(
                    fields={
                            # a file upload field
                            'image': None,
                            # plain text fields
                            'description': data['description'].encode('utf-8'), 
                            'category': '1',
                            'company_channel_id' : str(data['channel_id']),
                        }
                )
            print('end of else channel id ',data['channel_id'])
        print('heeerreeeee')
        # print('multipart_data::::',multipart_data)
        response = requests.post(url, data=multipart_data,
                        headers={'Content-Type': multipart_data.content_type,
                                    'Authorization' : 'Bearer {}'.format(data['token'])
                                })


        print(response.text)
        
    


# apibors = MYApiBorsSite()
# token = apibors.GetToken()
# data = {
#         'description' : 'سلام تست است',
#         'image_path' : '',
#         'channel_id' : '1357234041',
#         'token' : token
#     }
# apibors.CreateTwit(data)
