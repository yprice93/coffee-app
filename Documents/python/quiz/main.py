import json

with open("questions.json", 'r') as file:
    content = file.read()
    
data = json.loads(content)

score = 0
for question in data:
    print(question["question_text"])
    for index, alternative in enumerate(question["alternatives"]):
        print(index +1 , "-", alternative)
    question['user_choise'] = int(input("Enter your answer: "))
    if question['user_choise'] == question["correct_answer"]:
        score += 1

print(f"Your score is: {score} / {len(data)}")