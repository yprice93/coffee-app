user_prompt = "Enter a todo (when you are done, type 'q'):"


todos = []

while True:
    todo = input(user_prompt)
    if todo in ("q", "quit", "", "exit"):
        break
    else:
        todos.append(todo)

for todo in todos:
    print(todo)
