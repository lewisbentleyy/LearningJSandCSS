class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        brackets = {
            ')': '(',
            ']': '[',
            '}': '{',
        }
        for i in s:
            if i in brackets:
                if len(stack) == 0:
                    return False
                if stack.pop() != brackets[i]:
                    return False
            else:
                stack.append(i)
        return False if len(stack) > 0 else True
