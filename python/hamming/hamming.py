
def check_length(*args):
    if not all(len(args[0]) == len(_arg) for _arg in args[1:]):
        raise ValueError("All parameters must be the same length.")
    pass

def compute(string1, string2):
    check_length(string1, string2)
    return sum(x[0] != x[1] for x in zip(string1, string2))
