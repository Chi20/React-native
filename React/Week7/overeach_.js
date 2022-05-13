let arr=[1,2,3,4,5,6,7]
function visitor(e,index){

    console.log(('square='+ e*e + '  index:[' + index +']'));
}

function forEach(arr,visitor){
    if(typeof visitor !='function'){
        throw new
            TypeError(visitor +' is not a function');
    }
    let newarr=Object(this);
    for(let k=0;k<newarr.length;k++){
        if(k in newarr) visitor.call(newarr[k],k);
    }
}

arr.forEach(visitor);

function predicate(e){
    if(e<3){
        return true;
    }else return false;
 }
 
 
 function every(arr,predicate){
     if(typeof predicate !='function'){
         throw new
             TypeError(predicate +' is not a function');
     }
     let newarr=arr;
     for(let k=0;k<newarr.length;k++){
         judge[k]=predicate(newarr[k]);
     }
     if(judge.indexOf(false)!=-1) return false;
     else return true;
 }
 
 function some(arr,predicate){
     if(typeof predicate !='function'){
         throw new
             TypeError(predicate +' is not a function');
     }
     let newarr=arr;
     for(let k=0;k<newarr.length;k++){
         judge[k]=predicate(newarr[k]);
     }
     if(judge.indexOf(true)!=-1) return true;
     else return false;
 }

 console.log("*".repeat(30))
 var arr2=[0,2,3,4]
 
if(arr2.every(predicate))
console.log("Every function return true")
else console.log("Every function return false")

if(arr2.some(predicate))
console.log("Some function return true")
else console.log("Every function return false")