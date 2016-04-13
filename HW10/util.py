import sqlite3
from os import listdir
from os.path import isfile, join
import md5, time

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
@wrapper
def add(filename, username, content):
        if not isfile(join('tables/',filename)):
                file = open('tables/' + filename, 'w+')
                new = sqlite3.connect('tables/' + filename)
                c = new.cursor()
                q = "CREATE TABLE content (user text, content text)"
                c.execute(q)
                new.commit()
                file.close()
        conn = sqlite3.connect('tables/' + filename)
        c = conn.cursor()

        TEMPLATE="INSERT INTO content VALUES ('%(user)s', '%(content)s')"
        q = TEMPLATE%({'user':username, 'content':content})
        c.execute(q)
        conn.commit()
@wrapper
def getTables():
        onlyfiles=[f for f in listdir('tables/') if isfile(join('tables/',f))]
        return onlyfiles

@wrapper
def authenticate(uname, pword):
    m = md5.new()
    m.update(pword)
    f = open("tables/users.txt",'r')
    for line in f.readlines():
        if uname == line.split(',')[0] and m.hexdigest() == line.split(',')[1].strip():
            f.close()
            return True
    f.close()
    return False
@exectime
@wrapper
def register(uname,pword):
    m=md5.new()
    m.update(pword)
    f = open("tables/users.txt", 'r')
    for line in f.readlines():
        if uname == line.split(',')[0]:
            return False
    f.close()
    f = open("tables/users.txt",'a')
    f.write("%(user)s,%(phash)s\n"%({"user":uname,"phash":m.hexdigest()}))
    f.close()
    return True
@wrapper
def getposts(title):
        conn = sqlite3.connect('tables/%s.db'%title)
        c = conn.cursor()
        out = ""
        q = 'SELECT user, content FROM content'
        info = c.execute(q).fetchall()
        conn.commit()
        return info
@wrapper
def gettitles():
    titles = []
    for f in listdir('tables/'):
        if f.find('.db') >= 0:
            titles.append(f[:-3])
    return titles
