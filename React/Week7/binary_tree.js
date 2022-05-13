class BinaryTree{
    constructor(){
        this.root = null
    }
    
    add(value){
        const insertNode =(subtree , value )=> {
            if( subtree === null){
                return new node(value)
            }else{
                if(value < subtree.value){
                    subtree.left = insertNode(subtree.left , value)
                } else if(value > subtree.value){
                    subtree.right = insertNode(subtree.right , value)
                }else{
                    //do nothing as value already exists
                }
            }
            return subtree
        }
        this.root = insertNode(this.root,value)
        return this
    }

    remove(value){
        const findMin = (subtree) =>{
            while(subtree.left !== null){
                return findMin(subtree.left)
            }
            return subtree.value
        }
        const deleteNode = (subtree, value) =>{
            if(subtree !== null){
                if(value <subtree.value){
                    subtree.left = deleteNode(subtree.left, value)
                }else if(value > subtree.value){
                    subtree.right = deleteNode(subtree.right,value)
                }else{
                    if(subtree.left === null && subtree.right === null){
                        //case 1  :leaf node
                        return null
                    }else if (subtree.left === null){
                        //case 2 : no left sub-tree
                        return subtree.right
                    }else if(subtree.right  === null){
                        //case 2： no right sub-tree
                        return subtree.left
                    }else{
                        // case 3 : has both sub-trees
                        subtree.value = findMin(subtree.right)
                        subtree.right = deleteNode(subtree.right,subtree.value)
                    }

                }

            }
            return subtree
        }
        this.root = deleteNode(this.root , value)
        return this
    }


    search(value){
        const dfs = (subtree) =>{
            if(subtree ===null){
                return false
            }
            if (subtree.value <value){
                return dfs(subtree.right)
            }else if(subtree.value > value){
                return dfs(subtree.left)
            }else {
                return true
            }
        }
        return dfs(this.root)
    }
    
    toSrting(){
        //In-order travseral
        const dfs  = (subtree, repr) =>{
            if(subtree !== null){
                repr = dfs(subtree.left , repr)
                if(repr.length !== 1){
                    repr += ','
                }
                repr+=subtree.value
                repr = dfs(subtree.right,repr)
            }
            return repr
        }
        return dfs(this.root,'[')+']'
    }
}

class node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
module.exports = BinaryTree