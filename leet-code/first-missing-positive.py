class Solution(object):
    def firstMissingPositive(self, nums):
        result = 0
        nums = sorted(nums)
        hold = 0
        for i in nums:
            if i < 1:
                continue
            elif hold == 0 and i == 1:
                hold = i
                continue
            elif i-hold == 1:
                continue
            else:
                return hold+1
                
            
                


        return nums[-1]+1
        
    nums = [1,2,0]
    print(firstMissingPositive(0, nums))