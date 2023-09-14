class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        numsDict = {}
        for i in nums:
            if i in numsDict:
                return True
            else:
                numsDict[i] = i
        return False
