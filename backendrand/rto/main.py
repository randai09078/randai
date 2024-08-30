import json
import time
import random
import string
import requests
import logging
import types
from typing             import List, Union, Any, Dict, AnyStr
from flask        import Flask, request,  Response, stream_with_context
from flask_cors   import CORS
from g4f          import ChatCompletion
import g4f
app = Flask(__name__)
CORS(app)


@app.route('/chat/completions', methods=['GET'])
def chat_completions():
    params = {
    "model": "gpt-4",
    "messages": [
  
        {"role": "user", "content": '''مرحبا راند
إليك الصورة التالية التي تعرض الشطر الأيمن من قفصي الصدري بأشعة X ,

بإعتبار أنك نموذج ذكاء إصطناعي كبير قادر على تحليل الصور وتحديد الأنماط ، وبحكم خلفيتك الواسعة في الطب والعلوم الصحية ،
قم بتقديم وصف دقيق للحالة الموجودة معللاً سبب حدوث ذلك'''},
    ],
    "stream": True,
    "image": open("/home/mohammed/Projects/backendrand/randapi/randai/image.jpg", "rb"),
    "provider": "Bing",
}

    response = ChatCompletion.create(**params)
    return Response(stream_with_context(generate()), mimetype='text/event-stream')