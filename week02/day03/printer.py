# - Create a function called `printer`
#   which prints the input parameters
#   (can have multiple number of arguments)

def printer(*args):
    print(*args)

printer(4, 5, 6, "sometext")
