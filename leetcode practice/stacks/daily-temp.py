class Solution:
    def dailyTemperatures(self, temperatures):
        res = [0]*len(temperatures)
        stack = []
        
        for i, v in enumerate(temperatures):
            while stack and stack[-1][1] < v:
                res[stack[-1][0]] = i - stack[-1][0]
                stack.pop() 
            stack.append([i, v])
        return res