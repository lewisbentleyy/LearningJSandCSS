class Solution:
    def carFleet(self, target: int, position, speed):
        
        pos_speed = [[p,s] for p,s in zip(position, speed)]
        
        stack = []
        for position, speed in sorted(pos_speed)[::-1]:
            stack.append((target-position)/speed)
            if len(stack) > 1 and stack[-1]<stack[-2]:
                stack.pop()
        return len(stack)