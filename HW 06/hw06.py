UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC_LETTERS="abcdefghijklmnopqrstuvwxyz"
NUMBERS="1234567890"
def valid(password):
    if (len([x for x in password if x in UC_LETTERS]) != 0):
        if (len([x for x in password if x in LC_LETTERS]) != 0):
            if (len([x for x in password if x in NUMBERS]) !=0):
                print "Valid Password"
                return True
            print "Invalid Password"
            return False
        print "Invalid Password"
        return False

def strength(pwd):
	uppers = [x for x in pwd if x in UC_LETTERS]
	lowers = [x for x in pwd if x in LC_LETTERS]
	num = [x for x in pwd if x in NUMBERS]
	score = 0.0;
	if ((len(uppers) + len(lowers) + len(num)) != len(pwd)):
		score += 5.0
	score += len(uppers)*.75
	score += len(num)*.5
	print score
valid("12345YESno")
strength("12345YESno")
