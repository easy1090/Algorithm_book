// 请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical2(root1,root2){
    if(root1==null&&root2==null){
        return true;
    }
    if(root1==null||root2==null){
        return false;
    }
    if(root1.val!=root2.val){
        return false;
    }
    return isSymmetrical2(root1.left,root1.right)&&isSymmetrical2(root2.left,root2.right);
}

function isSymmetrical(pRoot)
{
    // write code here
 	isSymmetrical2(pRoot,pRoot);
}