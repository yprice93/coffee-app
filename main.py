# todos = []


def get_todos():
    with open("file/todos.txt", "r") as file:
        todos = file.readlines()
    return todos


while True:
    user_action = input("Type add, edit, show, complete, or quit: ")
    user_action = user_action.strip()

    if user_action.startswith("add"):
        todo = user_action[4:] + "\n"

        todos = get_todos()

        todos.append(todo.title())

        with open("file/todos.txt", "w") as file:
            file.writelines(todos)

    elif user_action.startswith("show"):
        todos = get_todos()

        for index, item in enumerate(todos):
            item = item.strip("\n")
            print(f"{index + 1} - {item}")
    elif user_action.startswith("edit"):
        try:
            number = int(user_action[5:]) - 1

            new_todo = input("Enter a new todo: ")
            todos[number] = new_todo.title() + "\n"

            todos = get_todos()
        except ValueError:
            print("Your command is not valid")
            continue

    elif user_action.startswith("complete"):
        try:
            index = int(user_action[9:]) - 1

            todos = get_todos()

            todos.pop(index)

            with open("file/todos.txt", "w") as file:
                file.writelines(todos)

            print(f"Task #{index+1} completed")
        except IndexError:
            print("There is no item with that number.")
            continue
    elif "quit" in user_action:
        break
    # else:
    #     print("Unknown command")

print("Bye!")
