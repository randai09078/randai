from g4f.client import Client

client = Client()
response = client.images.generate(
  model="gemini",
    prompt="a white siamese cat",

)
image_url = response.data[0].url
print("image_url", image_url)
print("response.data", response.data)

import g4f

response = g4f.ChatCompletion.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Say this is a test"}],

 provider='Bing',
)
for message in response:
    print(message, flush=True, end='')