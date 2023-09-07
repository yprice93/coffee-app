def get_todos(filepath="file/todos.txt"):
    """
    Read a text file and return the list of to-dos from the file
    """
    with open(filepath, "r") as file:
        todos = file.readlines()
    return todos

def write_todos(todos, filepath="file/todos.txt"):
    """Write the todos in the list into the todos file"""
    with open(filepath, "w") as file:
        file.writelines(todos)

