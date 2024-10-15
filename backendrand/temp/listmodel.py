# import g4f
# from g4f.Provider import IterProvider, ProviderType
# for model in g4f.models._all_models:
#     print(model)
#     print(g4f.models.ModelUtils.convert[model].best_provider.get_dict[0])

import requests

def make_g4f_request(prompt):
    url = "https://g4f-fhj0.onrender.com/v1/chat/completions"
    
    body = {
        "model": "claude-3.5-sonnet",
        "stream": True,
        "messages": [
            {"role": "assistant", "content": prompt}
        ]
    }
    
    response = requests.post(url, json=body)
    json_response = response.json().get('choices', [])
    
    for choice in json_response:
        content = choice.get('message', {}).get('content', '')
        if content:
            print(content)

if __name__ == "__main__":
    prompt = "What is a spring application?"
    make_g4f_request(prompt)
    
    
    
    
    import requests
import json

API_KEY = "1"
BASE_URL = "https://g4f-fhj0.onrender.com/v1"

def stream_chat_completion():
    url = f"{BASE_URL}/chat/completions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {API_KEY}"
    }
    data = {
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": "write a poem about a tree"}],
        "stream": True
    }

    with requests.post(url, headers=headers, json=data, stream=True) as response:
        response.raise_for_status()
        for line in response.iter_lines():
            if line:
                try:
                    json_data = json.loads(line.decode('utf-8').split('data: ')[1])
                    content = json_data['choices'][0]['delta'].get('content')
                    if content:
                        print(content, end='', flush=True)
                except (json.JSONDecodeError, IndexError, KeyError):
                    print("p", line)
                    continue

if __name__ == "__main__":
    stream_chat_completion()