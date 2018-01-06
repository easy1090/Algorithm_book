//使用es6的generator来计算小于1000的所有斐波那契数；
function* fibonacci(){
    let [ prev ,cur ]= [ 0, 1 ];
    for(;;){
        [prev, cur] = [cur, prev+cur];
        yield cur;
    }
}

for(let key of fibonacci()){
    if(key<1000){
        console.log(key)
    }
}