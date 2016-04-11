import time
def wrapper( f ):
   def inner( *arg ):
       s = ""
       s += f.func_name
       s += ":"
       s += str(arg)
       print s
       return f(*arg)
   return inner




def exectime(f):
    start = time.time()
    def inner(*arg):
        return f(*arg)
    end = time.time()
    print "execution time:" +str(end-start)
    return inner

@exectime
def test(n):
    if (n <= 2):
        return 1
    else:
        return test(n-1) + test(n-2)
    

print test(5)
