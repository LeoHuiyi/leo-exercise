/**
 * Created by leo on 2017/3/17/0017.
 */

class CArray {
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

    insert(elems) {
        this.data[this.pos++] = elems
    }

    log() {
        console.log(this.data.slice())
    }

    static swap(arr, index1, index2) {
        let temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp
        temp = null
    }

    bubbleSort() {
        const data = this.data, len = data.length
        for(let outer = len; outer >= 2; outer--) {
            for(let inner = 1; inner <= outer - 1; inner++) {
                if(data[inner - 1] > data[inner]) {
                    CArray.swap(data, inner - 1, inner)
                }
            }
        }
    }

    selecttionSort() {
        const data = this.data, len = data.length
        let min, inner
        for(let outer = 0; outer <= len - 2; outer++) {
            min = outer
            for(inner = outer + 1; inner <= len - 1; inner++) {
                if(data[inner] < data[min]) {
                    min = inner
                }
            }
            min !== inner && CArray.swap(data, outer, min)
        }
    }

    insertionSort() {
        const data = this.data, len = data.length
        let temp, inner
        for(let outer = 1; outer < len; outer++) {
            temp = data[outer]
            inner = outer
            while(inner > 0 && data[inner - 1] > temp) {
                data[inner] = data[inner - 1]
                --inner
            }
            outer !== inner && (data[inner] = temp)
        }
    }

    shellSort(gap = [5, 3, 1]) {
        const data = this.data, gapLen = gap.length
        for(let g = 0; g < gapLen; g++) {
            innerSort(data, gap[g])
        }

        function innerSort(array, gap = 1) {
            let current, len = array.length, index
            for(let i = gap; i < len; i++) {
                index = i
                current = array[i]
                while(index > 0 && array[index - gap] > current) {
                    array[index] = array[index - gap]
                    index -= gap
                }
                index !== i && (array[index] = current)
            }
            return array
        }
    }

    mergeSort() {
        function _mergeSort(array) {
            const len = array.length
            if(len < 2) {
                return array
            }
            const m = len >> 1,
                left = array.slice(0, m),
                right = array.slice(m)

            return merge(_mergeSort(left), _mergeSort(right))
        }

        function merge(left, right) {
            const res = []
            let item
            while(left.length && right.length) {
                item = left[0] <= right[0] ? left.shift() : right.shift()
                res.push(item)
            }
            return res.concat(left.length ? left : right)
        }

        this.data = _mergeSort(this.data)
    }

    mergeSort1() {
        const data = this.data, len = data.length
        let left, right, step = 1
        while(step < len) {
            left = 0
            right = step
            while(right + step <= len) {
                mergeArray(data, left, left + step, right, right + step)
                left = right + step
                right = left + step
            }
            if(right < len) {
                mergeArray(data, left, left + step, right, len)
            }
            step *= 2
        }

        function mergeArray(arr, leftStart, leftStop, rightStart, rightStop) {
            const leftLen = leftStop - leftStart + 1,
                rightLen = rightStop - rightStart + 1,
                leftArr = [], rightArr = []
            let k, i
            k = rightStart
            for(i = 0; i < rightLen; i++) {
                rightArr[i] = arr[k]
                k++
            }
            k = leftStart
            for(i = 0; i < leftLen; i++) {
                leftArr[i] = arr[k]
                k++
            }
            leftArr[leftLen - 1] = Infinity
            rightArr[rightLen - 1] = Infinity
            let m = 0, n = 0
            for(k = leftStart; k < rightStop; k++) {
                if(leftArr[m] <= rightArr[n]) {
                    arr[k] = leftArr[m]
                    m++
                }else {
                    arr[k] = rightArr[n]
                    n++
                }
                // console.log(arr[k], k)
            }
        }
    }

    quickSort(data) {
        function _quickSort(arr) {
            const len = arr.length
            if(len < 2) {
                return arr
            }
            const pivot = arr[0], left = [], right = []
            for(let i = 1; i < len; i++) {
                if(arr[i] > pivot) {
                    right.push(arr[i])
                }else {
                    left.push(arr[i])
                }
            }
            return _quickSort(left).concat(pivot, _quickSort(right))
        }
        if(data){
            return _quickSort(data)
        }else{
            this.data = _quickSort(this.data)
        }
    }

    quickSort1() {
        const data = this.data, newData = [], stack = [data.slice()]
        let temp, i, len, pivot, left, right
        while(stack.length) {
            temp = stack.pop()
            len = temp.length
            if(len < 2) {
                newData.push(temp[0])
            }else {
                pivot = temp[0]
                left = []
                right = []
                for(i = 1; i < len; i++) {
                    if(pivot > temp[i]) {
                        right.push(temp[i])
                    }else {
                        left.push(temp[i])
                    }
                }
                left.length > 0 && stack.push(left)
                stack.push([pivot])
                right.length > 0 && stack.push(right)
            }
        }
        this.data = newData
    }

    heapSort() {
        const data = this.data
        let i, len = data.length
        for(i = len >> 1; i >= 0; i--) {
            heapAdjust(data, i, len)
        }
        for(i = len - 1; i > 0; i--) {
            CArray.swap(data, 0, i)
            heapAdjust(data, 0, --len)
        }

        function heapAdjust(arr, i, len) {
            const left = 2 * i + 1, right = 2 * i + 2
            let largest = i
            if(left < len && arr[largest] < arr[left]) {
                largest = left
            }
            if(right < len && arr[largest] < arr[right]) {
                largest = right
            }
            if(largest !== i) {
                CArray.swap(arr, i, largest)
                heapAdjust(arr, largest, len)
            }
        }
    }

    countSort() {
        const data = this.data, len = data.length, tempLen = len, temp = new Array(tempLen)
        let index = 0
        for(let i = 0; i < len; i++) {
            if(!temp[data[i]]) {
                temp[data[i]] = 0
            }
            temp[data[i]]++
        }

        for(let j = 0; j < tempLen; j++) {
            while(temp[j] > 0) {
                data[index++] = j
                temp[j]--
            }
        }
    }

    bucketSort(bucketSize = 5){
        const data = this.data, len = data.length
        let i = 1, min = data[0], max = min
        while(i++ < len){
            if(data[i] < min){
                min = data[i]
            }else if(data[i] > max){
                max = data[i]
            }
        }
        let bucketCount = ~~((max - min) / bucketSize) + 1,
            bucket = []
        for(i = 0; i < bucketCount; i++){
            bucket[i] = []
        }
        for(i = 0; i < len; i++){
            bucket[~~((data[i] - min) / bucketSize)].push(data[i])
        }
        data.length = 0
        for(i = 0; i < bucket.length; i++){
            bucket[i] = this.quickSort(bucket[i])
            for(let j = 0; j < bucket[i].length; j++){
                data.push(bucket[i][j])
            }
        }
    }

    radixSort(){
        const data = this.data, len = data.length
        let bucket = [], unit = 10, base = 1, max
        max = String(Math.max(...data)).length
        for(let i = 0; i < max; i++, base *= 10, unit *= 10){
            let j, index
            for(j = 0; j < len; j++){
                index = ~~((data[j] % unit) / base)
                // console.log(data[j], index, unit, base)
                if(bucket[index] === undefined){
                    bucket[index] = []
                }
                bucket[index].push(data[j])
            }
            let pos = 0, value, bLen = bucket.length
            for(j = 0; j < bLen; j++){
                if(bucket[j] !== undefined){
                    while((value = bucket[j].shift()) !== undefined){
                        data[pos++] = value
                    }
                }
            }
        }
    }

    checkData() {
        if(this.data.length !== this.numElems){
            throw new Error(`失败`)
        }
        this.data.forEach((item, i) => {
            if(item !== i) {
                throw new Error(`失败`)
            }
        })
        console.log('成功')
    }

    static test(funs, num) {
        const sortTimeArr = []
        let str
        funs.forEach((item, i) => {
            const nums = new CArray(num), fun = nums[item]
            let startTimer, endTimer
            if(fun && typeof fun === 'function') {
                nums.setData()
                startTimer = window.performance.now()
                // nums.log()
                fun.call(nums)
                endTimer = window.performance.now()
                console.log(`${item}: 个数：${num}个。共用：${endTimer - startTimer}毫秒`)
                sortTimeArr.push({
                    name: item,
                    time: endTimer - startTimer
                })
                nums.checkData()
                // nums.log()
            }
        })
        str = sortTimeArr.sort((a, b) => {
            return a.time - b.time
        }).reduce((cur, next) => {
            return cur += `${next.name}->${next.time} `
        }, '')
        console.log(str)
    }
}

// let numElements = 100;
// const myNums = new CArray(numElements);
// myNums.setData();
// myNums.log()
// myNums.radixSort()
// myNums.log()
// myNums.checkData()
CArray.test(['bubbleSort', 'selecttionSort', 'insertionSort', 'shellSort', 'mergeSort', 'mergeSort1', 'quickSort', 'quickSort1', 'heapSort', 'countSort', 'bucketSort', 'radixSort'], 10000)