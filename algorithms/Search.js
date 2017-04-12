/**
 * Created by leo on 2017/3/22/0022.
 */

class Search {
    constructor(numElems) {
        this.data = []
        this.pos = 0
        this.numElems = numElems
        this.init()
    }

    init() {
        for(let i = 0; i < this.numElems; i++) {
            this.data.push(i)
        }
    }

    setData() {
        const randIndex = this.numElems, sameData = []
        let val
        for(let i = 0; i < this.numElems; i++) {
            val = Math.floor(Math.random() * (randIndex))
            if(sameData.indexOf(val) === -1) {
                this.data[i] = val
                sameData.push(val)
            }else {
                i--
            }
        }
    }

    clear() {
        this.data = []
    }

    log() {
        console.log(this.data.slice())
    }
    
    static swap(arr, index1, index2){
        let temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp
        temp = null
    }

    find(item){
        const data = this.data, len = data.length
        for(let i = 0; i < len; i++){
            if(data[i] === item){
                return i
            }
        }
        return -1
    }

    find1(item){
        const data = this.data, len = data.length
        for(let i = 0; i < len; i++){
            if(data[i] === item){
                if(i > len * 0.2){
                    Search.swap(data, i, 0)
                }
                return i
            }
        }
        return -1
    }

    findMin(){
        const data = this.data, len = data.length
        let min = data[0]
        for(let i = 1; i < len; i++){
            if(min > data[i]){
                min = data[i]
            }
        }
        return min
    }

    findMax(){
        const data = this.data, len = data.length
        let max = data[0]
        for(let i = 1; i < len; i++){
            if(max < data[i]){
                max = data[i]
            }
        }
        return max
    }

    binSearch(item){
        const data = this.data
        let left = 0, right = data.length, mid
        if(item < data[left]){
            return -1
        }
        if(item > data[right - 1]){
            return -1
        }
        while(left <= right){
            mid = Math.floor((left + right) / 2)
            if(data[mid] < item){
                left = mid + 1
            }else if(data[mid] > item){
                right = mid - 1
            }else{
                return mid
            }
        }
        return -1
    }
}

const search = new Search(10)
// search.setData()
search.log()
console.log(search.binSearch(7))
// console.log(search.find(1))
// console.log(search.find1(7))
// search.log()
// console.log(search.find1(7))
// search.log()
// console.log(search.findMin())
// console.log(search.findMax())