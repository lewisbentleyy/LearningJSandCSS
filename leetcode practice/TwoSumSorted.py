class Solution:
    def twoSum(self, numbers, target: int):
        p1, p2 = 0, len(numbers)-1
        while numbers[p1]+numbers[p2]!=target:
            if p1+p2 > target:
                p2-=1
            elif p1+p2<target:
                p1+=1
        return [p1+1, p2+1]
                