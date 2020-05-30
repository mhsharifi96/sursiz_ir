from telethon import TelegramClient, events
import configparser
from pprint import pprint
from api import MYApiBorsSite

# import logging
# logging.basicConfig(level=logging.DEBUG)
# # For instance, show only warnings and above
# logging.getLogger('telethon').setLevel(level=logging.WARNING)

# Reading Configs
config = configparser.ConfigParser()
config.read("config.ini")

# Setting configuration values
api_id = config['Telegram']['api_id']
api_hash = config['Telegram']['api_hash']

api_hash = str(api_hash)

phone = config['Telegram']['phone']
username = config['Telegram']['username']


def CreatePost(text,image_path=None):
    print('create post : ',text,image_path)



client = TelegramClient(username, api_id, api_hash)
client.start()
print('1234')
destination_channel_username='https://t.me/rovzenews'
entity=     client.get_entity(destination_channel_username)
file_name = ''
title = ''
text = ''
image_path = ''
channel = ['https://t.me/signalrantiii',
'https://t.me/boorsakhbar',
'https://t.me/burseposetiive',
'https://t.me/chartsahm',
'https://t.me/boursekade',
'https://t.me/seke_dollar_bours',
'https://t.me/burs_signal',
'https://t.me/joinchat/AAAAAFGSvpgVICdACG1wgQ',
'https://t.me/sursiztestbot']


# func=lambda e: e.is_channel and not e.is_group
@client.on(events.NewMessage(func=lambda e: e.is_channel and not e.is_group))
async def my_event_handler(event):
    MyApi = MYApiBorsSite()
    data = {
        'description' : '',
        'image_path' : '',
        'channel_id' : '',
        'token' : ''
    }
    print('123')
    data['token'] = MyApi.GetToken()
    data['channel_id'] = event.message.to_id.channel_id
    # print(event.is_channel())
    # if event.is_channel():
    # if event.audio:
    # print(event)
    # if event.photo : 
    #     print(event.raw_text)
    #     await client.download_media(event.photo,'downloads/')
    if event.media  :
        print('has media')
        if event.photo :
            print('photo')
            data['description'] = event.raw_text
            print(event.raw_text)
            # print(event.photo)
            image_path = await client.download_media(event.photo,'downloads/')
            data['image_path'] = image_path
            MyApi.CreateTwit(data)
            
            
            
            print('----------***-----------')
        if event.web_preview: 
            data['description'] = event.raw_text
            
            print(event.raw_text)
            print(event.media)
            MyApi.CreateTwit(data)

            # CreatePost()
    
    else : 
        data['description'] = event.raw_text
        print('hant nmedai')
        MyApi.CreateTwit(data)
    
    
    

        
    
    # await client.send_message(entity='-1357234041',message=event.raw_text)
    # await client.send_message(entity,event.raw_text)
    # if event.audio :
    #     print('text',event.raw_text)
    #     print('audio : ',event.audio)
    #     print(event.document.mime_type)
    #     print(event.document.attributes)
    #     # print(event.document.attributes)
    #     if hasattr(event.document.attributes[0],'file_name') :
    #         file_name = event.document.attributes[0].file_name
    #     else: 
    #         file_name = event.document.attributes[1].file_name
        
        
    #     print(' befor download file Name : ',file_name)
    #     print('donwnload file start')
    #     await client.download_media(event.audio,'downloads/')
    #     print('end download file')
    #     print(' after download download file Name : ',file_name)
    # elif event.video:

    #     if hasattr(event.document.attributes[0],'file_name') :
    #         file_name = event.document.attributes[0].file_name
    #     else: 
    #         file_name = event.document.attributes[1].file_name
    #     print('text',event.raw_text)
    #     print(file_name)
    #     await client.download_media(event.video,'downloads/')
    # else:
    #     print('im in else')



client.start()
client.run_until_disconnected()


# megagroups (supergroups) are channels too, so we need `not e.is_group`
# this lambda takes the event, which has these boolean properties
# @bot.on(events.NewMessage(func=lambda e: e.is_channel and not e.is_group))
# async def my_event_handler(event):
#     print(event.stringify())