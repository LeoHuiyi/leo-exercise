/**
 * Created by leo on 2017/3/6/0006.
 */


function Node(element) {
    this.element = element
    this.next = null
    this.prev = null
}

function LList() {
    this.head = new Node('head')
    this.curr = this.head
}

LList.prototype.find = function(item) {
    let currNode = this.head
    while(currNode !== null){
        if(currNode.element === item){
            return currNode
        }
        currNode = currNode.next
    }
    throw new Error(`not find item: ${item}`)
}

LList.prototype.insert = function(newItem, item) {
    let newNode = new Node(newItem)
    const currNode = this.find(item)
    if(currNode){
        newNode.next = currNode.next
        if(currNode.next){
            currNode.next.prev = newNode
        }
        newNode.prev = currNode
        currNode.next = newNode
    }
}

LList.prototype.log = function() {
    let currNode = this.head
    while(currNode !== null){
        console.log(currNode.element, currNode.prev, currNode.next)
        currNode = currNode.next
    }
}

LList.prototype.findPrev = function(item) {
    let prevNode = this.head
    while(prevNode !== null){
        if(prevNode.next !== null && prevNode.next.element === item){
            return prevNode
        }
        prevNode = prevNode.next
    }
    throw new Error(`not find prevNode: ${item}`)
}

LList.prototype.remove = function(item) {
    let currNode = this.find(item)
    if(currNode){
        currNode.prev.next = currNode.next
        if(currNode.next !== null){
            currNode.next.prev = currNode.prev
        }
        currNode.prev = null
        currNode.next = null
    }
}

LList.prototype.finLast = function() {
    let currNode = this.head
    while(currNode.next !== null){
        currNode = currNode.next
    }
    return currNode
}

LList.prototype.dispReverse = function() {
    let currNode = this.finLast()
    while(currNode.prev !== null){
        console.log(currNode.element)
        currNode = currNode.prev
    }
}

LList.prototype.advance = function(n) {
    let curr = this.curr
    while(n--){
        if(curr.next !== null){
            curr = curr.next
        }else {
            break
        }
    }
    this.curr = curr
}

LList.prototype.back = function(n) {
    let curr = this.curr
    while(n--){
        if(curr.prev !== null){
            curr = curr.prev
        }else{
            break
        }
    }
    this.curr = curr
}

LList.prototype.show = function() {
    console.log(this.curr)
}

// const llist = new LList()
// llist.insert("Conway", "head")
// llist.insert("Russellville", "Conway")
// llist.insert("Alma", "Russellville")
// llist.insert("aaa", "Russellville")
// console.log(llist.find('head'))
// console.log(llist.findPrev('Russellville'))
// llist.log()
// llist.advance(100)
// llist.show()
// llist.back(20)
// llist.show()
// console.log(llist.finLast())
// llist.dispReverse()
// console.log('--------------------')
// llist.remove('Alma')
// llist.log()
// console.log(llist.finLast())
// llist.dispReverse()



function BList() {
    this.head = new Node('head')
    this.head.next = this.head
    this.curr = this.head
    this.length = 0
}

BList.prototype.find = function(item) {
    let currNode = this.head
    if(currNode.element === item){
        return currNode
    }
    currNode = currNode.next
    while(currNode !== this.head){
        if(currNode.element === item){
            return currNode
        }
        currNode = currNode.next
    }
    throw new Error(`not find item: ${item}`)
}

BList.prototype.insert = function(newItem, item) {
    let currNode = this.find(item)
    // console.log(currNode)
    if(currNode){
        let newNode = new Node(newItem)
        newNode.next = currNode.next
        currNode.next = newNode
        this.length++
    }
}

BList.prototype.findPrev = function(item) {
    let currNode = this.head
    if(currNode.element === item){
        return currNode
    }
    while(currNode.next !== this.head){
        if(currNode.next.element === item){
            return currNode
        }
        currNode = currNode.next
    }

    throw new Error(`not findPrev item: ${item}`)
}

BList.prototype.remove = function(item) {
    if(item === this.head.element){
        throw new Error(`not remove head`)
    }
    let prevNode = this.findPrev(item)
    // console.log(prevNode)
    if(prevNode){
        prevNode.next = prevNode.next.next
        this.length--
    }
}

BList.prototype.advance = function(n) {
    let curr = this.curr
    if(curr === this.head){
        curr = curr.next
    }
    while(n--){
        if(curr.next === this.head){
            curr = curr.next.next
        }else {
            curr = curr.next
        }
    }
    console.log(curr)
    this.curr = curr
}

BList.prototype.log = function() {
    let currNode = this.head
    console.log(currNode.element, currNode.next.element)
    currNode = currNode.next
    while(currNode !== this.head){
        console.log(currNode.element, currNode.next.element)
        currNode = currNode.next
    }
}

BList.prototype.len = function() {
    console.log(this.length)
}

const blist = new BList()
blist.insert("Conway", "head")
blist.insert("Russellville", "Conway")
blist.insert("Alma", "Russellville")
blist.insert("aaa", "Russellville")
blist.log()
blist.advance(1)
blist.len()
console.log('--------------------')
blist.remove('Conway')
blist.len()
blist.log()

