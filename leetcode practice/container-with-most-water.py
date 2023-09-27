class Solution:
    def maxArea(self, height) -> int:
        max_area = 0
        l, r = 0, len(height) - 1
        while l < r:
            max_area = max((r - l + 1) * min(height[l], height[r]), max_area)
            if height[l] > height[r]:
                r-=1
            elif height[l] < height[r]:
                l+=1
            else:
                if height[l+1] > height[r-1]:
                    l+=1
                else:
                    r-=1
        return max_area