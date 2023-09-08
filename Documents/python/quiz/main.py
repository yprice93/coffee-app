import json

with open("questions.json", 'r') as file:
    content = file.read()
    
data = json.loads(content)

score = 0
for question in data:
    print(question["question_text"])
    for index, alternative in enumerate(question["alternatives"]):
        print(index +1 , "-", alternative)
    question['user_choice'] = int(input("Enter your answer: "))
    if question['user_choice'] == question["correct_answer"]:
        score += 1

for index, question in enumerate(data):
    print(f"You chose for question {index+1} was {question['user_choice']}, but the correct answer was {question['correct_answer']}.")

print(f"Your score is: {score} / {len(data)}")