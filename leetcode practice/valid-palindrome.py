class Solution:
    def isPalindrome(self, s: str) -> bool:
        new_s = ''
        for i in s.lower():
            if i.isalpha():
                new_s+=i
        for i in range(len(new_s)):
            if (new_s[i]!=new_s[len(new_s)-1-i]):
                return False
            if (i==len(new_s)-1-i):
                break
        return True