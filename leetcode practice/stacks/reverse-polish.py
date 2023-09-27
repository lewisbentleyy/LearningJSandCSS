class Solution:
    def evalRPN(self, tokens) -> int:
        
        stack = []
        
        
        def add():
            val1 = stack.pop()
            val2 = stack.pop()
            stack.append(val1+val2)
        
        def subtract():
            val1 = stack.pop()
            val2 = stack.pop()
            stack.append(val2-val1)
        
        def multiply():
            val1 = stack.pop()
            val2 = stack.pop()
            stack.append(val1*val2)
        
        def divide():
            val1 = stack.pop()
            val2 = stack.pop()
            stack.append(val2//val1)
            
        opperands = {
            '+': add,
            '-':subtract,
            '*':multiply,
            '/':divide,
        }
        
        for i in tokens:
            if i in opperands:
                opperands[i]()
            else:
                stack.append(int(i))
        return stack[-1]
        