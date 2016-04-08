def union(l1,l2):
    combined =[]
    combined+= [x for x in l1 if x not in combined]
    combined+= [x for x in l2 if x not in combined]
    return combined

print(union(["1","2","3"],["5","A","C"]))

def intersect(l1,l2):
	return [x for x in l1 if x in l2 ]

print(intersect(["1","2","3"], ["2"]))

def diff(l1,l2):
    return [x for x in l1 if x not in l2]
    
print(diff(["1","2","3"], ["2"]))

def symdiff(l1,l2):
	return diff(union(l1,l2),intersect(l1,l2))

print(symdiff(["1","2","3"], ["2","3","4"]))

def cartprod(l1,l2):
	return [(x,y) for x in l1 for y in l2]

print (cartprod(["1","2"],["red","white", "1"]))
