import json
import requests


response = requests.get('https://api.chucknorris.io/jokes/random')
print(response)
# data = json.loads(response.txt)
import os