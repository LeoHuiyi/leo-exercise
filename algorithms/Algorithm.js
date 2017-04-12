/**
 * Created by leo on 2017/3/24/0024.
 */


function recurFib(n) {
    if(n < 2) {
        return n
    }else {
        return recurFib(n - 1) + recurFib(n - 2)
    }
}

function dynFib(n) {
    if(n === 1 || n === 2) {
        return 1
    }else {
        const val = [0, 1, 2]
        let i = 3
        for(; i <= n; i++) {
            val[i] = val[i - 1] + val[i - 2]
        }
        return val[n - 1]
    }
}

function iterFib(n) {
    let last = 1, nextLast = 1, result = 1
    for(let i = 2; i < n; i++) {
        result = last + nextLast
        nextLast = last
        last = result
    }
    return result
}

console.log(recurFib(10))
console.log(dynFib(10))
console.log(iterFib(10))

function lcs(word1, word2) {
    let max = 0, index = 0, i, j
    const lcsArr = [], word1Len = word1.length, word2Len = word2.length

    for(i = 0; i <= word1Len; i++) {
        lcsArr[i] = []
        for(j = 0; j <= word2Len; j++) {
            lcsArr[i][j] = 0
        }
    }

    for(i = 0; i <= word1Len; i++) {
        for(j = 0; j <= word2Len; j++) {
            if(i === 0 || j === 0) {
                lcsArr[i][j] = 0
            }else {
                if(word1[i - 1] === word2[j - 1]) {
                    lcsArr[i][j] = lcsArr[i - 1][j - 1] + 1
                }else {
                    lcsArr[i][j] = 0
                }
            }
            if(max < lcsArr[i][j]) {
                max = lcsArr[i][j]
                index = i
            }
        }
    }

    if(max === 0) {
        return ''
    }else {
        let str = ''
        for(i = index - max; i < index; i++) {
            str += word1[i]
        }
        return str
    }
}

console.log(lcs('oleotcwhahah', 'waleotcwahahah'))

function max(a, b) {
    return a > b ? a : b
}

function knapsack(capacity, size, value, n) {
    if(n === 0 || capacity === 0) {
        return 0
    }
    if(size[n - 1] > capacity) {
        return knapsack(capacity, size, value, n - 1)
    }else {
        return max(
            value[n - 1] + knapsack(capacity - size[n - 1], size, value, n - 1),
            knapsack(capacity, size, value, n - 1)
        )
    }
}

function dKnapsack(capacity, size, value, n) {
    const k = []
    for(let i = 0; i <= n; i++) {
        k[i] = []
        for(let w = 0; w <= capacity; w++) {
            if(i === 0 || w === 0) {
                k[i][w] = 0
            }else if(size[i - 1] <= w) {
                k[i][w] = max(
                    value[i - 1] + k[i - 1][w - size[i - 1]],
                    k[i - 1][w]
                )
            }else {
                k[i][w] = k[i - 1][w]
            }
        }
    }
    // console.log(k)
    return k[n][capacity]
}

console.log(knapsack(16, [3, 4, 7, 8, 9], [4, 5, 10, 11, 13], 5))
console.log(dKnapsack(16, [3, 4, 7, 8, 9], [4, 5, 10, 11, 13], 5))

function makeChange(origAmt, coins) {
    let remainAmt = 0
    if(origAmt % .25 < origAmt) {
        coins[3] = parseInt(origAmt / .25)
        remainAmt = origAmt % .25
        origAmt = remainAmt
    }
    if(origAmt % .1 < origAmt) {
        coins[2] = parseInt(origAmt / .1)
        remainAmt = origAmt % .1
        origAmt = remainAmt
    }
    if(origAmt % .05 < origAmt) {
        coins[1] = parseInt(origAmt / .05)
        remainAmt = origAmt % .05
        origAmt = remainAmt
    }
    coins[0] = parseInt(origAmt / .01)
}

function showChange(coins) {
    if(coins[3] > 0) {
        console.log("25美分的数量 - " + coins[3] + " - " + coins[3] * .25)
    }
    if(coins[2] > 0) {
        console.log("10美分的数量 - " + coins[2] + " - " + coins[2] * .10)
    }
    if(coins[1] > 0) {
        console.log("5美分的数量 - " + coins[1] + " - " + coins[1] * .05)
    }
    if(coins[0] > 0) {
        console.log("1美分的数量 - " + coins[0] + " - " + coins[0] * .01)
    }
}

const coins = []
makeChange(.63, coins)
// console.log(coins)
showChange(coins)

function ksack(values, weights, capacity) {
    let load = 0, i = 0, w = 0, r
    while(load < capacity && i < 4){
        if(weights[i] <= (capacity - load)){
            w += values[i]
            load += weights[i]
        }else {
            r = (capacity - load) / weights[i]
            w += r * values[i]
            load += weights[i]
        }
        i++
    }

    return w
}

console.log(ksack([50, 140, 60, 60], [5, 20, 10, 12], 30))