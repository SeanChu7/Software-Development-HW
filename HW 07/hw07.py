def repeat(s):
    def again(n):
        result =""
        for x in range(n):
            result+=s
        return result
    return repeat

r1 = repeat("hello")
r2 = repeat("goodbye")
