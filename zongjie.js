<1>
设有n个正整数，将他们连接成一排，组成一个最大的多位整数。
如:n=3时，3个整数13,312,343,连成的最大整数为34331213。
如:n=4时,4个整数7,13,4,246连接成的最大整数为7424613。
var __readline = require('readline-sync')
__readline.setDefaultOptions({prompt: ''})
var read_line = __readline.prompt
var print = console.log

var rl=require('readline').createInterface(process.stdin,process.stdout);
var n=-1;
var input=[];
rl.on('line',function(line){
if(n==-1){
n=line.trim();
}else{
input.push(line.split(' '));
console.log(input[0].sort(function(a,b){if(a+b>b+a){return -1}else{return 1}}).join(''));
}
})

<2>

var line = readline();
line = line.split(' ').reverse().join(' ‘);
print(line);

<3>美团云面试编程题：
var __readline = require('readline-sync')
__readline.setDefaultOptions({prompt: ''})
var read_line = __readline.prompt
var print = console.log

//const num = read_line().split(' ');
obj={a:{b:{c:'c',d:'d'},e:{f:{},g:{}}},h:{i:{},j:{k:'k'}}};
function printLevel(value){
    const result = [];

    function print (value,level){
        const keys = Object.keys(value);
        if(!result[level]) {
            result[level]=[];
        }
        result[level].push(...keys);
        for (let key in keys){//可以用for of ,就不需要value[result[level][key]]了，可以直接value[key]
            if(typeof value[result[level][key]] === 'object' ){
            
                print(value[result[level][key]],level+1);
            }
        }
    }
    print(value,0);
    return result;
}
console.log(printLevel(obj));

注：一定要是level+1而不能是++level：递归，level+1，虽然level穿进去level+1，但是level本身不变，同层元素递归时level和上一个兄弟节点同一个level；
                                但是++level，level本身就变了，那个下个兄弟节点的level就不同了；
<4>
网格走法数目（递归）：https://www.nowcoder.com/practice/e27b9fc9c0ec4a17a5064fb6f5ab13e4tpId=85&tqId=29883&tPage=1&rp=1&ru=/ta/2017test&qru=/ta/2017test/question-ranking


<5>两个有序链表合并。
http://blog.csdn.net/esir82/article/details/61929523
//将l2合并到l1
var mergeTwoLists = function(l1, l2) {
  //遍历l2链表，将元素一一插入l1
while(l2){
    //先前的l1元素
var prev = null;
    //当前的l1元素
var cur = l1;
    //遍历l1链表，找到可插入l2元素的位置
while(cur && l2.val > cur.val){
      //记录先前的l1元素
prev = cur;
      //记录当前的l1元素
cur = cur.next;
}
    //生成新的节点
    //注意：并没有利用l2已有的节点
var newNode = new ListNode(l2.val);
    //插入新节点
    //新节点的next指向当前的l1元素
newNode.next = cur;
    //如果是在l1链表中间插入
    //或者说新节点有前驱
if(prev){
      //先前元素的next指向新节点
prev.next = newNode;
}//如果新节点插在链表头部
else{
l1 = newNode;
}
l2 = l2.next;
}
  //返回l1
return l1;
};

<5>二叉树镜像
function Mirror(root)
{
    // write code here
    if(root == null){
        return;
    }else{
        var temp = root.right;
        root.right = root.left;
        root.left = temp;
        Mirror(root.left);
        Mirror(root.right);
        return root;
    }
}
<6>


/*function ListNode(x){
this.val = x;
this.next = null;
}*/
function deleteDuplication(pHead)
{
  if(pHead === null){
return null;
}
if(pHead !== null && pHead.next === null){
return pHead;
}
var first={
val :-1,
next:pHead
}
var cur = pHead;
var pre = first;

while(cur!==null && cur.next!==null){
if(cur.val===cur.next.val){
var val = cur.val;
while(cur!==null && cur.val === val ){
cur = cur.next;
pre.next = cur;
}

}
else{
pre = cur;
cur = cur.next;

}
}
return first.next;
}

<7>链表中环的入口节点
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    // write code here
    var cur = pHead,lt;
    var arr = {};
    while(cur!==null){
        lt = cur.val;
        if(!arr[lt]){
            arr[lt] = 1;//注意是arr[cur.val]而不是arr[cur]
            cur = cur.next;
        }else{
            return cur;
        }
    }
}
<8>输入一个链表，从尾到头打印链表每个节点的值
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    var list = [],lt;
    var cur =head;
    while(cur != null){
        lt = cur.val;
        list.unshift(lt);//pop和push是从数组尾部移出和推入；unshift和shift是从数组头部推入或移出；
        cur = cur.next;
    }
    return list;
}
https://www.w3cplus.com/javascript/array-part-3.html

<9>变态条台阶题
 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
function jumpFloorII(number)
{
    // write code here
   if (number === 1)
        return 1;
    if (number === 2)
        return 2;
    return 2*jumpFloorII(number-1)
}

<10>

<11>
输入一棵二叉树，判断该二叉树是否是平衡二叉树。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot){
    var deep = 0;
    if(pRoot==null) return 0;
    var left = TreeDepth(pRoot.left);
    var right = TreeDepth(pRoot.right);
    depth = Math.max(left,right)+1;
    return depth;
}
function IsBalanced_Solution(pRoot)
{
    // write code here
    if(!pRoot) return true;
    var left = TreeDepth(pRoot.left);
    var right = TreeDepth(pRoot.right);
    if(Math.abs(right-left)>1) return false;
    
    return IsBalanced_Solution(pRoot.left)&&IsBalanced_Solution(pRoot.right);
}

<12>

function FindContinuousSequence(sum)
{
    // write code here
    var start=1,end = 2;
    var array = [1,2];
    var ans = [];
    var sumTemp = 0;
    if(sum<3) return [];
    while(start<=Math.ceil(sum/2)){
        var sumTemp = (start+end)*(end-start+1)/2;
        if(sumTemp==sum){
            ans.push(array.concat());
            array.shift();
            start++;
            end++;
            array.push(end);
        }else if(sumTemp>sum){
            array.shift();
            start++;
        }else if(sumTemp<sum){
            end++;
            array.push(end);
        }
    }
    return ans;
}



<13>

(乘积最小就是两个数差距最大)
function FindNumbersWithSum(array, sum)
{
    // write code here
    var l = 0,
        r = array.length - 1,
        res = [];
    var al = 0, ar = 0;
    while(l < r){
        al = array[l];
        ar = array[r];
        if(al + ar == sum){
            res.push(al , ar);
            break;
        }else if(al + ar > sum){
            r --;
        }else {
            l ++;
        }
    }
    return res;
}
<14>

<15>

<16>

<17>

<18>
