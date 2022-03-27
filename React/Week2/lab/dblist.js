function Dblist(){
    function Node(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }

//properties
    this.head = null;
    this.tail = null;
    this.length = 0;

//method
    this.push = function (element){

        let newNode = new Node(element);
        if(this.length == 0){
            this.head = newNode;
            this.tail = newNode;
        }else{

            this.tail.next = newNode;
            newNode.prev = this.tail; 
            this.tail = newNode;
        }

        this.length++;
    }
   this.unshift = function (element){

        let newNode = new Node(element);
        if(this.length == 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
 
            this.head.prev = newNode;
            newNode.next = this.head; 
            this.head = newNode;
        }

        this.length++;
    }
    this.shift = function (){
        let current =  this.head;
        if(this.length==1)
        {
            this.head = null
            this.tail = null
        }
        else{
            let newhead=this.head.next
            newhead.prev = null
            this.head = newhead
        }
        
        this.length-=1
        return current.data
    }
   this.pop = function (){
        let current =  this.tail;
        let newtail = this.tail.prev
        newtail.next = null
        this.tail = newtail
        this.length-=1
        return current.data
    }
    this.forwardString = function (){   

        let current = this.tail;
        let objString = '';
        while(current){
           objString += current.data + ' ';
           current  =  current.prev;
        }
        return objString;
    }

    this.backwardString = function(){

        let current = this.head;
        let objString = '';
        while(current){
            objString += current.data + ' ';
            current = current.next;
        }
    return objString;
    }

    this.toString = function(){

           return  this.backwardString();
    }


    this.isEmpty = function(){
        return this.length == 0;
    }

    this.size = function(){
        return this.length;
    }

    this.getHead = function(){
        return this.head.data;
    }
    this.getTail = function(){
        return this.tail.data;
    }




}
let list = new Dblist();
        list.push('aaaa');
        list.push('bbbb');
        list.push('cccc');
        list.unshift('dddd')
        console.log(`the elem poped is :${list.pop()}`)
        console.log(`the elem shifted is :${list.shift()}`)
        
        // console.log(list);
        // console.log(list.forwardString());
        console.log(list.backwardString());

        console.log(list.size());
        console.log(list.getHead());
        console.log(list.getTail());
        