/**
 * Created by leo on 2017/3/6/0006.
 */


function HashTable() {
    this.table = new Array(137)
    // this.buildChains()
    this.values = []
}

HashTable.prototype.simpleHash = function(data) {
    let total = 0
    for(let i = 0, len = data.length; i < len; ++i) {
        total += data.charCodeAt(i)
    }
    return total % this.table.length
}

HashTable.prototype.betterHash = function(data) {
    const H = 37
    let total = 0
    for(let i = 0, len = data.length; i < len; ++i) {
        total += H * total + data.charCodeAt(i)
    }
    total = total % this.table.length
    if(total < 0){
        total += this.table.length - 1
    }

    return parseInt(total)
}

HashTable.prototype.buildChains = function() {
    const table = this.table
    for(let i = 0, len = table.length; i < len; i++){
        table[i] = []
    }
}

HashTable.prototype.put = function(key, data) {
    this.table[this.betterHash(key)] = data
}

HashTable.prototype.get = function(key) {
    return this.table[thsi.betterHash(key)]
}

HashTable.prototype.put1 = function(key, data) {
    let pos = this.betterHash(key)
    let index = 0
    const table = this.table
    while(table[pos][index] !== undefined){
        index += 2
    }
    table[pos][index] = key
    table[pos][index + 1] = data
}

HashTable.prototype.get1 = function(key) {
    let pos = this.betterHash(key)
    let index = 0
    const table = this.table
    while(table[pos][index] != undefined){
        if(table[pos][index] === key){
            return table[pos][index + 1]
        }
        index += 2
    }
    return undefined
}

HashTable.prototype.put2 = function(key, data) {
    let pos = this.betterHash(key)
    const table = this.table
    while(this.table[pos] !== undefined){
        pos ++
    }
    table[pos] = data
    this.values[pos] = key
}

HashTable.prototype.get2 = function(key) {
    let pos = this.betterHash(key)
    const values = this.values
    while(values[pos] !== undefined){
        if(values[pos] === key){
            return this.table[pos]
        }
        pos ++
    }
    return undefined
}

HashTable.prototype.log = function() {
    const table = this.table, len = table.length
    for(let i = 0; i < len; ++i) {
        if(table[i] !== undefined) {
            console.log(i, table[i])
        }
    }
}

const someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]

const hTable = new HashTable()
for(let i = 0, len = someNames.length; i < len; ++i){
    hTable.put2(i, someNames[i])
}

console.log(hTable.get2(8))

// hTable.log()