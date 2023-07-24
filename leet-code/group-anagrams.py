class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        result = []
        for element in strs:
            flag = False
            for check in result:
                if(sorted(element) == sorted(check[0])):
                    flag = True
                    check.append(element)
                    break
            if flag == False:
                result.append([element])
            if result == []:
                result.append([element])
            
        return result





    print(groupAnagrams(0,["eat","tea","tan","ate","nat","bat"]))