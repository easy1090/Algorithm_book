//从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
var a =new TreeNode(1);
a.left = new TreeNode(2);
a.right = new TreeNode(3);
a.left.left = new TreeNode(4)
a.left.right = new TreeNode(5);
a.right.left = new TreeNode(6);

function Print(pRoot)
{
    // write code here
    if(!pRoot) {return pRoot;}
    var hang =[];
    function addHang( node, n ){
        
        if (!hang[n]){
            hang[n] = [];
        }
        hang[n].push(node.val);
        if( node.left !== null ){
            addHang( node.left, n+1);
        }
		if( node.right !== null ){
            addHang( node.right, n+1);
        }
        return 0;
    }
    addHang(pRoot,0);
	return hang;
}
let res = Print(a);
console.log(res);