var arrString = 'abcdaabc';
var tt = arrString.split('').reduce(function(res, cur) {
   console.log("",cur,end='');
   if(res)
   res[cur] ? res[cur] ++ : res[cur] = 1
// console.log("res",res);
    return res;
}, {})
console.log(tt);

// arr.forEach(function(item,index,arr){
// 	console.log("元素："+item+" 索引："+index+" 整个数组："+arr);
// })