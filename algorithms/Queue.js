/**
 * Created by leo on 2017/3/5/0005.
 */
!(function() {
    function Queue() {
        this.data = []
    }

    Queue.prototype.enqueue = function(element) {
        this.data.push(element)
    }

    Queue.prototype.dequeue = function() {
        return this.data.shift()
    }

    Queue.prototype.front = function() {
        return this.data[0]
    }

    Queue.prototype.back = function() {
        return this.data[this.data.length - 1]
    }

    Queue.prototype.log = function() {
        console.log(this.data)
    }

    Queue.prototype.empty = function() {
        if(this.data.length === 0) {
            return true
        }else {
            return false
        }
    }

    Queue.prototype.count = function() {
        return this.data.length
    }

    // const queue = new Queue()
    // queue.enqueue(1)
    // queue.enqueue(2)
    // queue.enqueue(4)
    // queue.log()
    // queue.dequeue()
    // queue.log()

    function Duque() {
        this.data = []
    }

    Duque.prototype.enduque = function(node) {
        this.data.push(node)
    }

    Duque.prototype.deduque = function() {
        return this.data.shift()
    }

    Duque.prototype.unshiftduque = function(node) {
        this.data.unshift(node)
    }

    Duque.prototype.popduque = function() {
        return this.data.pop()
    }

    Duque.prototype.log = function() {
        console.log(this.data)
    }

    Duque.prototype.newDeduque = function() {
        let data = this.data, index = 0, curNode = data[index]
        for(let i = 1, len = data.length; i < len; i++){
            if(data[i].code > curNode.code){
                curNode = data[i]
                index = i
            }
        }
        console.log(curNode, index)
        return this.data.splice(index, 1)
    }

    function node(data, code) {
        this.data = data
        this.code = code
    }

    const duque = new Duque()
    duque.enduque(new node(1, 3))
    duque.enduque(new node(1, 4))
    duque.enduque(new node(1, 2))
    duque.enduque(new node(1, 1))
    duque.log()
    duque.newDeduque()
    duque.log()
    duque.newDeduque()
    duque.log()
    // duque.log()
    // duque.enduque(2)
    // duque.log()
    // duque.deduque()
    // duque.log()
    // duque.deduque()
    // duque.log()
    // duque.unshiftduque(3)
    // duque.log()
    // duque.unshiftduque(4)
    // duque.log()
    // duque.popduque()
    // duque.log()



}())