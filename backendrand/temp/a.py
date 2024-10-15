import requests

models = [
    {
      "id": "gpt-3",
      "object": "model",
      "created": 0,
      "owned_by": "OpenAI"
    },
    {
      "id": "gpt-3.5-turbo",
      "object": "model",
      "created": 0,
      "owned_by": "OpenAI"
    },
    {
      "id": "gpt-4o",
      "object": "model",
      "created": 0,
      "owned_by": "OpenAI"
    },
    {
      "id": "gpt-4o-mini",
      "object": "model",
      "created": 0,
      "owned_by": "OpenAI"
    },
    {
      "id": "gpt-4",
      "object": "model",
      "created": 0,
      "owned_by": "OpenAI"
    },
    {
      "id": "gpt-4-turbo",
      "object": "model",
      "created": 0,
      "owned_by": "OpenAI"
    },
    {
      "id": "meta-ai",
      "object": "model",
      "created": 0,
      "owned_by": "Meta"
    },
    {
      "id": "llama-2-13b",
      "object": "model",
      "created": 0,
      "owned_by": "Meta Llama"
    },
    {
      "id": "llama-3",
      "object": "model",
      "created": 0,
      "owned_by": "Meta Llama"
    },
    {
      "id": "llama-3-8b",
      "object": "model",
      "created": 0,
      "owned_by": "Meta Llama"
    },
    {
      "id": "llama-3-70b",
      "object": "model",
      "created": 0,
      "owned_by": "Meta Llama"
    },
    {
      "id": "llama-3.1",
      "object": "model",
      "created": 0,
      "owned_by": "Meta Llama"
    },
    {
      "id": "llama-3.1-8b",
      "object": "model",
      "created": 0,
      "owned_by": "Meta Llama"
    },
    {
      "id": "llama-3.1-70b",
      "object": "model",
      "created": 0,
      "owned_by": "Meta Llama"
    },
    {
      "id": "llama-3.1-405b",
      "object": "model",
      "created": 0,
      "owned_by": "Meta Llama"
    },
    {
      "id": "llama-3.2-11b",
      "object": "model",
      "created": 0,
      "owned_by": "Meta Llama"
    },
    {
      "id": "llama-3.2-90b",
      "object": "model",
      "created": 0,
      "owned_by": "Meta Llama"
    },
    {
      "id": "llamaguard-7b",
      "object": "model",
      "created": 0,
      "owned_by": "Meta Llama"
    },
    {
      "id": "llamaguard-2-8b",
      "object": "model",
      "created": 0,
      "owned_by": "Meta Llama"
    },
    {
      "id": "mistral-7b",
      "object": "model",
      "created": 0,
      "owned_by": "Mistral"
    },
    {
      "id": "mixtral-8x7b",
      "object": "model",
      "created": 0,
      "owned_by": "Mistral"
    },
    {
      "id": "mixtral-8x22b",
      "object": "model",
      "created": 0,
      "owned_by": "Mistral"
    },
    {
      "id": "mistral-nemo",
      "object": "model",
      "created": 0,
      "owned_by": "Mistral"
    },
    {
      "id": "mixtral-8x7b-dpo",
      "object": "model",
      "created": 0,
      "owned_by": "NousResearch"
    },
    {
      "id": "hermes-3",
      "object": "model",
      "created": 0,
      "owned_by": "NousResearch"
    },
    {
      "id": "yi-34b",
      "object": "model",
      "created": 0,
      "owned_by": "NousResearch"
    },
    {
      "id": "phi_3_medium-4k",
      "object": "model",
      "created": 0,
      "owned_by": "Microsoft"
    },
    {
      "id": "phi-3.5-mini",
      "object": "model",
      "created": 0,
      "owned_by": "Microsoft"
    },
    {
      "id": "gemini",
      "object": "model",
      "created": 0,
      "owned_by": "Google DeepMind"
    },
    {
      "id": "gemini-pro",
      "object": "model",
      "created": 0,
      "owned_by": "Google DeepMind"
    },
    {
      "id": "gemini-flash",
      "object": "model",
      "created": 0,
      "owned_by": "Google DeepMind"
    },
    {
      "id": "gemma-2b",
      "object": "model",
      "created": 0,
      "owned_by": "Google"
    },
    {
      "id": "gemma-2b-9b",
      "object": "model",
      "created": 0,
      "owned_by": "Google"
    },
    {
      "id": "gemma-2b-27b",
      "object": "model",
      "created": 0,
      "owned_by": "Google"
    },
    {
      "id": "gemma-2",
      "object": "model",
      "created": 0,
      "owned_by": "Google"
    },
    {
      "id": "gemma-2-27b",
      "object": "model",
      "created": 0,
      "owned_by": "Google"
    },
    {
      "id": "claude-2",
      "object": "model",
      "created": 0,
      "owned_by": "Anthropic"
    },
    {
      "id": "claude-2.1",
      "object": "model",
      "created": 0,
      "owned_by": "Anthropic"
    },
    {
      "id": "claude-3",
      "object": "model",
      "created": 0,
      "owned_by": "Anthropic"
    },
    {
      "id": "claude-3-opus",
      "object": "model",
      "created": 0,
      "owned_by": "Anthropic"
    },
    {
      "id": "claude-3-sonnet",
      "object": "model",
      "created": 0,
      "owned_by": "Anthropic"
    },
    {
      "id": "claude-3-haiku",
      "object": "model",
      "created": 0,
      "owned_by": "Anthropic"
    },
    {
      "id": "claude-3.5",
      "object": "model",
      "created": 0,
      "owned_by": "Anthropic"
    },
    {
      "id": "claude-3.5-sonnet",
      "object": "model",
      "created": 0,
      "owned_by": "Anthropic"
    },
    {
      "id": "reka-core",
      "object": "model",
      "created": 0,
      "owned_by": "Reka AI"
    },
    {
      "id": "blackbox",
      "object": "model",
      "created": 0,
      "owned_by": "Blackbox AI"
    },
    {
      "id": "command-r+",
      "object": "model",
      "created": 0,
      "owned_by": "CohereForAI"
    },
    {
      "id": "dbrx-instruct",
      "object": "model",
      "created": 0,
      "owned_by": "Databricks"
    },
    {
      "id": "gigachat",
      "object": "model",
      "created": 0,
      "owned_by": "gigachat"
    },
    {
      "id": "sparkdesk-v1.1",
      "object": "model",
      "created": 0,
      "owned_by": "iFlytek"
    },
    {
      "id": "qwen",
      "object": "model",
      "created": 0,
      "owned_by": "Qwen"
    },
    {
      "id": "qwen-1.5-7b",
      "object": "model",
      "created": 0,
      "owned_by": "Qwen"
    },
    {
      "id": "qwen-1.5-14b",
      "object": "model",
      "created": 0,
      "owned_by": "Qwen"
    },
    {
      "id": "qwen-1.5-72b",
      "object": "model",
      "created": 0,
      "owned_by": "Qwen"
    },
    {
      "id": "qwen-1.5-110b",
      "object": "model",
      "created": 0,
      "owned_by": "Qwen"
    },
    {
      "id": "qwen-2-72b",
      "object": "model",
      "created": 0,
      "owned_by": "Qwen"
    },
    {
      "id": "glm-3-6b",
      "object": "model",
      "created": 0,
      "owned_by": "Zhipu AI"
    },
    {
      "id": "glm-4-9b",
      "object": "model",
      "created": 0,
      "owned_by": "Zhipu AI"
    },
    {
      "id": "glm-4",
      "object": "model",
      "created": 0,
      "owned_by": "Zhipu AI"
    },
    {
      "id": "yi-1.5-9b",
      "object": "model",
      "created": 0,
      "owned_by": "01-ai"
    },
    {
      "id": "solar-1-mini",
      "object": "model",
      "created": 0,
      "owned_by": "Upstage"
    },
    {
      "id": "solar-10-7b",
      "object": "model",
      "created": 0,
      "owned_by": "Upstage"
    },
    {
      "id": "solar-pro",
      "object": "model",
      "created": 0,
      "owned_by": "Upstage"
    },
    {
      "id": "pi",
      "object": "model",
      "created": 0,
      "owned_by": "Inflection"
    },
    {
      "id": "deepseek",
      "object": "model",
      "created": 0,
      "owned_by": "DeepSeek"
    },
    {
      "id": "llava-13b",
      "object": "model",
      "created": 0,
      "owned_by": "Yorickvp"
    },
    {
      "id": "wizardlm-2-7b",
      "object": "model",
      "created": 0,
      "owned_by": "WizardLM"
    },
    {
      "id": "wizardlm-2-8x22b",
      "object": "model",
      "created": 0,
      "owned_by": "WizardLM"
    },
    {
      "id": "minicpm-llama-3-v2.5",
      "object": "model",
      "created": 0,
      "owned_by": "OpenBMB"
    },
    {
      "id": "lzlv-70b",
      "object": "model",
      "created": 0,
      "owned_by": "Lzlv"
    },
    {
      "id": "openchat-3.6-8b",
      "object": "model",
      "created": 0,
      "owned_by": "OpenChat"
    },
    {
      "id": "phind-codellama-34b-v2",
      "object": "model",
      "created": 0,
      "owned_by": "Phind"
    },
    {
      "id": "dolphin-2.9.1-llama-3-70b",
      "object": "model",
      "created": 0,
      "owned_by": "Cognitive Computations"
    },
    {
      "id": "grok-2",
      "object": "model",
      "created": 0,
      "owned_by": "x.ai"
    },
    {
      "id": "grok-2-mini",
      "object": "model",
      "created": 0,
      "owned_by": "x.ai"
    },
    {
      "id": "sonar-online",
      "object": "model",
      "created": 0,
      "owned_by": "Perplexity AI"
    },
    {
      "id": "sonar-chat",
      "object": "model",
      "created": 0,
      "owned_by": "Perplexity AI"
    },
    {
      "id": "mythomax-l2-13b",
      "object": "model",
      "created": 0,
      "owned_by": "Perplexity AI"
    },
    {
      "id": "cosmosrp",
      "object": "model",
      "created": 0,
      "owned_by": "Pawan"
    },
    {
      "id": "sdxl",
      "object": "model",
      "created": 0,
      "owned_by": "Stability AI"
    },
    {
      "id": "sd-3",
      "object": "model",
      "created": 0,
      "owned_by": "Stability AI"
    },
    {
      "id": "playground-v2.5",
      "object": "model",
      "created": 0,
      "owned_by": "Playground AI"
    },
    {
      "id": "flux",
      "object": "model",
      "created": 0,
      "owned_by": "Flux AI"
    },
    {
      "id": "flux-realism",
      "object": "model",
      "created": 0,
      "owned_by": "Flux AI"
    },
    {
      "id": "flux-anime",
      "object": "model",
      "created": 0,
      "owned_by": "Flux AI"
    },
    {
      "id": "flux-3d",
      "object": "model",
      "created": 0,
      "owned_by": "Flux AI"
    },
    {
      "id": "flux-disney",
      "object": "model",
      "created": 0,
      "owned_by": "Flux AI"
    },
    {
      "id": "flux-pixel",
      "object": "model",
      "created": 0,
      "owned_by": "Flux AI"
    },
    {
      "id": "flux-4o",
      "object": "model",
      "created": 0,
      "owned_by": "Flux AI"
    },
    {
      "id": "flux-schnell",
      "object": "model",
      "created": 0,
      "owned_by": "Flux AI"
    },
    {
      "id": "dalle",
      "object": "model",
      "created": 0,
      "owned_by": ""
    },
    {
      "id": "dalle-2",
      "object": "model",
      "created": 0,
      "owned_by": ""
    },
    {
      "id": "dalle-3",
      "object": "model",
      "created": 0,
      "owned_by": ""
    },
    {
      "id": "dalle-mini",
      "object": "model",
      "created": 0,
      "owned_by": ""
    },
    {
      "id": "emi",
      "object": "model",
      "created": 0,
      "owned_by": ""
    },
    {
      "id": "any-dark",
      "object": "model",
      "created": 0,
      "owned_by": ""
    },
    {
      "id": "prodia",
      "object": "model",
      "created": 0,
      "owned_by": ""
    }
  ]


company_templets =  {
    "name": "",
    "label": "",
    "is_active": False,
    "description": "",
    "img_url": "",
    "website_url": ""
}

url_company = "http://127.0.0.1:8000/api/company-ai/"

payload_template = {
    "code": "",
    "label": "",
    "type_service": "text",
    "is_active": True,
    "is_stream": False,
    "is_web_search": False,
    "is_allow_image": False,
    "state": "Running",
        "company_ai": {
            "id": 3,
            "name": "",
            "label": "",
            "is_active": True,
            "description": "",
            "img_url": "",
            "website_url": "",
            "created_at": "2024-01-14T14:05:18.573505Z",
            "updated_at": "2024-01-14T14:05:18.573630Z"
        },
    "description": "",
        "api_owner": {
            "code": "gpt4all",
            "api_options": [],
            "type_service": "text",
            "type_price": "free",
            "label": "Gpt 4 all",
            "is_active": True,
            "state": "Running",
            "notes": "",
            "version": "",
            "created_at": "2024-01-13T14:54:37.965633Z",
            "updated_at": "2024-01-13T14:54:37.965711Z",
            "api_options_id": []
        },
    "company_ai_id": 3,
    "api_owner_id": "gpt4all",
    "provider": [],
    "languages": ["en", "ar"]
}
url = "http://127.0.0.1:8000/api/model"
method = "POST"
import json
import os
base_dir = "payloads"

for model in models:
    owner = model['owned_by'] if model['owned_by'] else "Other"
    owned_by_dir = os.path.join(base_dir, owner)
    os.makedirs(owned_by_dir, exist_ok=True)
    payload = payload_template.copy()  
    payload['code'] = model['id']  
    modified_id = model['id'].replace('-', ' ')
    payload['label'] = modified_id.capitalize() 

    file_name = f"{owned_by_dir}/{model['id']}.json" 
    with open(file_name, 'w') as json_file:
        json.dump(payload, json_file, indent=4)  

