class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        count_dict = {}
        for i in s:
            if (i in count_dict):
                count_dict[i] += 1
            else:
                count_dict[i] = 1
        for i in t:
            if (i not in count_dict):
                return False
            count_dict[i] -= 1
        for k in count_dict:
            if (count_dict[k] != 0):
                return False
        return True
    