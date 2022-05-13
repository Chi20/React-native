// const LinkedList = require('./linked_list.js')

// const list = new LinkedList()
// list.add(5)
//     .add(7)
//     .add(9)
//     .add('red')
//     .add(7)

// console.log(list.toString())

// list.remove(7)
// list.remove(9)

// console.log(list.toString())

// console.log(list.get(1))

const BinaryTree =  require('./binary_tree.js')

const tree = new BinaryTree()

tree.add(5)
    .add(7)
    .add(1)
    .add(12)
    .add(9)
    .add(7)
    .add(99)
    .add(-1)
    .add(0)
    .add(-100)

console.log(tree.toString())

tree.remove(5)
    .remove(-100)
    .remove(0)

console.log(tree.toString())

console.log(tree.search(0))
console.log(tree.search(99))