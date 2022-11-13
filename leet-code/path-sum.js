/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */


 class Node {
    constructor(val){
        this.val=val;
        this.right=null;
        this.left=null;
    }
}

 var hasPathSum = function(root, targetSum) {
    if(root == null) return false;
    if(root.left == null && root.right == null && root.val == targetSum) return true;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

var flatArrayToTree = function(arr) {
    if(arr.length == 0) return null;
    let root = new Node(arr[0]);
    let queue = [root];
    let i = 1;
    while(queue.length > 0) {
        let node = queue.shift();
        if(i < arr.length) {
            if(arr[i] != null) {
                node.left = new Node(arr[i]);
                queue.push(node.left);
            }
            i++;
        }
        if(i < arr.length) {
            if(arr[i] != null) {
                node.right = new Node(arr[i]);
                queue.push(node.right);
            }
            i++;
        }
    }
    return root;
}


    

var root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22

console.log(flatArrayToTree(root));

console.log(hasPathSum(root, targetSum))