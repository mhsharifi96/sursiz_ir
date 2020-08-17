
# from websocket import create_connection
# import json

# headers = json.dumps({'Date': 'Tue, 04 Aug 2020 16:56:47 GMT',
# 'Connection': 'upgrade',
# 'Upgrade': 'websocket',
# 'Sec-WebSocket-Accept': 'g9UcJnxns/yyURBVZYcFl7owjWg==',
# 'Sec-WebSocket-Extensions': 'permessage-deflate',
# 'Sec-WebSocket-Protocol' : 'js.lightstreamer.com',
# 'Sec-WebSocket-Version': 13,
# 'Server': 'nginx',
# })

# headers2 = {
#     "Accept-Encoding": "gzip, deflate, br",
#     "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
#     "Cache-Control": "no-cache",
#     "Connection": "Upgrade",
#     "Host": "push.sahamyab.com",
#     "Origin": "https://www.sahamyab.com",
#     "Pragma": "no-cache",
#     "Sec-WebSocket-Extensions": "permessage-deflate; client_max_window_bits",
#     "Sec-WebSocket-Key": "tMnk0gqLSnIYBZXWAwJicw==",
#     "Sec-WebSocket-Protocol": "js.lightstreamer.com",
#     "Sec-WebSocket-Version": 13,
#     "Upgrade": "websocket",
#     "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36"
# }

# ws = create_connection('wss://push.sahamyab.com/lightstreamer', header=headers2)
# # response = ws.recv_data_frame()
# # print(response)


# while True:
#     ws.recv()


import asyncio
import websockets

async def hello():
    uri = "wss://push.sahamyab.com/lightstreamer"
    async with websockets.connect(uri) as websocket:
        

        await websocket.send()
        

        greeting = await websocket.recv()
        print(f"< {greeting}")

asyncio.get_event_loop().run_until_complete(hello())
