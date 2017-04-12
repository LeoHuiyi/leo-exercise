/**
 * Created by leo on 2017/3/8/0008.
 */


function Set(sort) {
    this.data = []
    this.sort = sort || ((a, b)=>{
        return a > b
    })
}

Set.prototype.contains = function(data) {
    if(this.data.indexOf(data) > -1) {
        return true
    }else {
        return false
    }
}

Set.prototype.higher = function(elem) {
    const data = this.data
    let currData = null
    for(let i = 0, len = data.length; i < len; i++) {
        if(data[i] > elem && (currData === null || currData > data[i])) {
            currData = data[i]
        }
    }
    return currData
}

Set.prototype.lower = function(elem) {
    const data = this.data
    let currData = null
    for(let i = 0, len = data.length; i < len; i++) {
        if(data[i] < elem && (currData === null || currData < data[i])) {
            currData = data[i]
        }
    }
    return currData
}

Set.prototype.add = function(data) {
    if(this.data.indexOf(data) === -1) {
        this.data.push(data)
        this.data.sort(this.sort)
        return true
    }else {
        return false
    }
}

Set.prototype.remove = function(data) {
    let pos = this.data.indexOf(data)
    if(pos > -1) {
        this.data.splice(pos, 1)
        return true
    }else {
        return false
    }
}

//并集
Set.prototype.union = function(set) {
    const tempSet = new Set()
    let i, len
    for(i = 0, len = this.data.length; i < len; i++) {
        tempSet.add(this.data[i])
    }
    for(i = 0, len = set.data.length; i < len; i++) {
        tempSet.add(set.data[i])
    }
    return tempSet
}

//交集
Set.prototype.intersect = function(set) {
    const tempSet = new Set()
    let i, len
    for(i = 0, len = this.data.length; i < len; i++) {
        if(set.contains(this.data[i])) {
            tempSet.add(this.data[i])
        }
    }
    return tempSet
}

Set.prototype.size = function() {
    return this.data.length
}

//子集（判断该集合是否为子集）
Set.prototype.subSet = function(set) {
    if(this.size() > set.size()) {
        return false
    }else {
        for(let i = 0, len = this.data.length; i < len; i++) {
            if(!set.contains(this.data[i])) {
                return false
            }
        }
        return true
    }
}

//补集（属于当前集合但不属于第二个集合）
Set.prototype.difference = function(set) {
    const tempSet = new Set()
    for(let i = 0, len = this.data.length; i < len; i++) {
        if(!set.contains(this.data[i])) {
            tempSet.add(this.data[i])
        }
    }
    return tempSet
}

Set.prototype.log = function() {
    console.log(this.data)
}

class Node{
    constructor(elem){
        this.elem = elem
        this.next = null
    }
}

class LList{
    constructor(){
        this.head = new Node('head')
        this.length = 1
    }

    find(elem){
        let currNode = this.head
        while(currNode !== null){
            if(elem === currNode.elem){
                return currNode
            }
            currNode = currNode.next
        }

        throw new Error(`not find ${elem}`)
    }

    findPrev(elem){
        let currNode = this.head
        while(currNode.next !== null){
            if(currNode.next.elem === elem){
                return currNode
            }
            currNode = currNode.next
        }

        throw new Error(`nor fin ${elem}`)
    }

    insert(elem, item){
        const findNode = this.find(item)
        if(findNode){
            const newNode = new Node(elem)
            newNode.next = findNode.next
            findNode.next = newNode
            this.length ++
        }
    }

    remove(elem){
        const prevNode = this.findPrev(elem)
        if(prevNode){
            prevNode.next = prevNode.next.next
            this.length --
        }
    }

    each(cb){
        let currNode = this.head
        while(currNode){
            if(typeof cb === 'function'){
                cb(currNode)
            }
            currNode = currNode.next
        }
    }

    len(){
        return this.length
    }

    log(){
        let currNode = this.head
        while(currNode !== null){
            console.log(currNode.elem)
            currNode = currNode.next
        }
        console.log(this.length)
    }
}

const list = new LList()
list.insert('aaa', 'head')
list.insert('bbb', 'head')
list.insert('ccc', 'head')
// list.log()
list.each((node)=>{
    console.log(node.elem)
})
list.remove('bbb')
list.log()

const test = new Set()
test.add(1)
// test.log()
test.add(2)
// test.log()
test.add(-1)
test.add(-3)
test.add(4)
test.add(3)
test.log()
console.log(test.higher(2))
console.log(test.lower(4))
// const cis = new Set();
// cis.add("Mike");
// cis.add("Clayton");
// cis.add("Jennifer");
// cis.add("Raymond");
// const dmp = new Set();
// dmp.add("Raymond");
// dmp.add("Cynthia");
// dmp.add("Jonathan");
// dmp.add("Clayton");
// const it = cis.union(dmp);
// const inter = cis.intersect(dmp);
// const diff = cis.difference(dmp)
// it.log()
// inter.log()
// diff.log()
// console.log(inter.subSet(cis))
// console.log(dmp.subSet(cis))

// const names = new Set()
// names.add("David");
// names.add("Jennifer");
// names.add("Cynthia");
// names.add("Mike");
// names.add("Raymond");
// names.log()
// console.log(names.add('David'))
// names.log()
// console.log(names.add('leo'))
// names.log()
// console.log(names.remove('aaa'))
// names.log()
// console.log(names.remove('David'))
// names.log()
