//请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。

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
for( let i= 0; i<res.length; i++ ){
    if(i%2 !== 0){
        res[i] = res[i].reverse();
    }
}
console.log(res);