const colors = [
    'red','blue','white','black','indigo','violet','green']

colors.forEach((col, index) => console.log(col,index))

let lengths = []
colors.forEach((col) => lengths.push(col.length))
//console.log(lengths)

lengths = colors.map((col) => col.length)//一步完成上面两句才能干完的事情
//console.log(lengths)

const reversed = colors.reduce((acc, col)=>{ //对每个执行元素执行操作，reduce顺序是从左到右，push是加在列表后面，unshift是加在列表前面
    acc.unshift(col)
    return acc
},[])

console.log(reversed)

reversed2 = colors.reduceRight((acc,col)=>{
    acc.push(col)
    return acc
},[])

console.log(reversed2)

const count = colors.reduce((acc,col)=> acc+=1 , 0 )
console.log(count)

const numbers = [
    0,1,1,2,3,5,8,13,21,34,55,87
]

const squared = numbers.map(n =>n*n)
console.log(squared)

const total = numbers.reduce((sum,n) => sum += n , 0)//0 is seed to decide type

//console.log(total)

const evens = numbers.filter(n => n % 2 ===0)

// console.log(evens)

function* fibonacci() { //* ->generator function 
    let current = 0 , next = 1
    while(true){
        yield current;
        [current, next] = [next , current + next]//copared to python assignment

    }
}

const limit = 79
for(let iter = fibonacci(),i = limit;i > 0 ;i--){
    console.log(iter.next().value)//lazy execution,memory-wise and cpu-wise
}