from telethon import TelegramClient

# Use your own values from my.telegram.org
api_id = 22703059
api_hash = 'e61d8d8fb6f1aa3c47cefdfdcc59592d'

# The first parameter is the .session file name (absolute paths allowed)
# with TelegramClient('anon', api_id, api_hash) as client:
#     client.loop.run_until_complete(client.send_message('me', 'Hello, myself!'))





import uuid
# from telethon import TelegramClientugjhfhgghg
import asyncio

## Run the following 2 lines if using Google Colab
import nest_asyncio
nest_asyncio.apply()

session_name= 'session1'
channel_invite_link = 't.me/GiveVPN'

async def func():
    async with TelegramClient('anon', api_id, api_hash) as client:
        print("111111")
        entity = await client.get_entity(channel_invite_link)
        print("entity")
        messages = []
        # Download images from last 10 messages
        async for m in client.iter_messages(entity, reverse=False, limit=2): 
            messages.append(m)
            print("append")

        for m in reversed(messages):
            print(await m.download_media(f"image/{uuid.uuid1()}"))

asyncio.run(func())