class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        max_sum = nums[0]
        cur_sum = 0

        for num in nums:
            cur_sum += num
            max_sum = max(max_sum, cur_sum)
            cur_sum = max(cur_sum, 0)

        return max_sum
    
    print(maxSubArray(None, [-2,1,-3,4,-1,2,1,-5,4]))