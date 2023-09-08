import json

with open("questions.json", 'r') as file:
    content = file.read()
    
data = json.loads(content)

print(data)