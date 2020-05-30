# import requests

# url = "http://127.0.0.1:8000/api/twit"

# payload = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"description\"\r\n\r\n{}\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"category\"\r\n\r\n1\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"company\"\r\n\r\n1\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"image\"; filename=\"1.jpg\"\r\nContent-Type: image/jpeg\r\n\r\n\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--".format("سلام خوبی چه خبری باشه !!!".encode("utf-8"))
# data = {
#             'description' : "سلام خوبی ".encode('utf-8'),
#             'company' : 1,
#             'category' : 1,
#             'image' : open('1.jpg','rb').read()
#         }
# print(payload)
# headers = {
#     'content-type': "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
#     'cache-control': "no-cache",
    
#     }

# response = requests.request("POST", url, data=data, headers=headers)

# print(response.text)

import requests
from requests_toolbelt.multipart.encoder import MultipartEncoder
import base64
url = "http://127.0.0.1:8000/api/twit"
with open("downloads/1.jpg", "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read())
    # print(encoded_string)
    multipart_data = MultipartEncoder(
        fields={
                # a file upload field
                'image': encoded_string,
                # plain text fields
                'description': '  من اخر تونستم واش دارم ایول سلام'.encode('utf-8'), 
                'category': '1',
                'company' : '2',
            }
        )

response = requests.post(url, data=multipart_data,
                  headers={'Content-Type': multipart_data.content_type})


print(response.text)