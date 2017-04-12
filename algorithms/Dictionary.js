/**
 * Created by leo on 2017/3/6/0006.
 */


function Dictionary() {
    this.data = []
}

Dictionary.prototype.add = function(key, val) {
    this.data[key] = val
}

Dictionary.prototype.add1 = function(key) {
    if(this.data[key]) {
        this.data[key]++
    }else {
        this.data[key] = 1
    }
}

Dictionary.prototype.find = function(key) {
    return this.data[key]
}

Dictionary.prototype.remove = function(key) {
    delete this.data[key]
}

Dictionary.prototype.log = function() {
    for(let [key, val] of Object.entries(this.data)) {
        console.log(key, val)
    }
}
Dictionary.prototype.count = function() {
    return Object.keys(this.data).length
}

Dictionary.prototype.clear = function() {
    for(let key of Object.keys(this.data)) {
        delete this.data[key]
    }
}

Dictionary.prototype.show = function() {
    for(let key of Object.keys(this.data).sort()){
        console.log(key, this.data[key])
    }
}

// const pbook = new Dictionary();
// pbook.add("Mike","123");
// pbook.add("David", "345");
// pbook.add("Cynthia", "456");
// pbook.log()
// console.log(pbook.count())
// console.log(`-------------------`)
// pbook.remove("David");
// console.log(pbook.count())
// pbook.log()
// pbook.clear()
// console.log(pbook.count())

const words = new Dictionary()

function read(word) {
    const arr = word.split(' '), len = arr.length
    for(let i = 0; i < len; i++) {
        words.add1(arr[i])
    }
    words.log()
    console.log('-----------------')
    words.show()
}

read('the brown fox jumped over the blue fox')
