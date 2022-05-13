class LinkList{
    constructor(){
        this.head = null;
        this.last=this.head

    }
    add(value){
        const nv = new node(value, null)
        if(this.head === null){
            this.head = nv
        }else{
            this.last.next = nv
        }
        this.last = nv
        return this
    }
    remove(value){
        for(let curr = this.head, prev =null;
             curr !== null;
             prev = curr, curr = curr.next){
                 if(curr.value === value){
                     if(prev === null){
                         this.head = curr.next
                     }else{
                         prev.next = curr.next
                     }
                 }
             }
            
            return this
    }

    get(index){
        for(let curr = this.head,i=0;
            curr !== null;
            curr = curr.next, i++){
                if( i === index){
                    return curr.value
                }
            }
            return undefined
    }
    toString(){
        let repr = '['
        for (let curr = this.head; curr !== null; curr = curr.next){
            repr += curr.value
            if(curr.next !== null){
                repr += ','
            }
        }
        return repr + ']'

    }
}

class node {
    constructor(value,next){
        this.value = value
        this.next = next  
    }
}

module.exports=LinkList;