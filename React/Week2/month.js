// 	var ary = "WWWWWWWWWWWWBWWWWWWWWWWWWBBB";
// //		var ary = "WWWWWWWWWWWW";
// 	var obj = {};
// 	var i = 0;

// 	for(i = 0; i < ary.length; i++)
// 	{
// 		key = ary[i];//创建对应字母的键
// 		if(obj[key])//如果有这个字母
// 		{
// 			if (ary[i]===ary[i+1]){//且这个字母和后一个字母相同
// 			    obj[key]++;
// //			    console.log(ary[i]+ary[i+1])
// 			}
// 			else{//如果不同
// 			    obj[key]++;
// 			    process.stdout.write(obj[key]+key)
// //			    console.log(obj[key]+key);
// //			    console.log(key);
// 			    obj[key]=0;
// 			}
// 		}
// 		else//如果没有
// 		{
// 			//对象中没有这个字母,把字母加到对象中
// 			obj[key] = 1;
// 			if(ary[i]!==ary[i+1]) {process.stdout.write(key)
// 			obj[key] = 0;}
// 		}
// 	}


// var str = "12WB12W3B"
// arr=str.split(
// console.log(arr)
var str='12WB'
var ary=[]
for(i = 0; i < str.length; i++){
var asc1 = str.charCodeAt(i);
var asc2 = str.charCodeAt(i+1);
if(((asc1>=65&&asc1<=90)||(asc1>=97&&asc1<=122))&&((asc2>=65&&asc2<=90)||(asc2>=97&&asc2<=122))){
    ary+=str[i];
    ary+=1;
}
else{
    ary+=str[i]}
}
console.log(ary)

var parts = ary.match(/[0-9]+|[a-zA-z]+/g)
//var parts = date.match(/[0-9]+|[a-zA-z]+/g)
console.log(parts)
for(i = 0; i < parts.length; i++){
	if((i+1)%2==0) {count =Number(parts[i-1])
		while(count--){
		process.stdout.write(parts[i])}}

}