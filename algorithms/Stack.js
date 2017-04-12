!(function() {
    function Stack() {
        this.data = []
        this.top = 0
    }

    Stack.prototype.push = function(element) {
        this.data[this.top++] = element
    }

    Stack.prototype.pop = function() {
        return this.data[--this.top]
    }

    Stack.prototype.peek = function() {
        return this.data[this.top - 1]
    }

    Stack.prototype.length = function() {
        return this.top
    }

    Stack.prototype.clear = function() {
        this.top = 0
    }

    Stack.prototype.log = function() {
        console.log(this.data)
    }

    // const stack = new Stack()
    // stack.push(1)
    // stack.push(3)
    // stack.push(4)
    // stack.log()
    // console.log(stack.pop())
    // stack.log()
    // stack.push(5)
    // console.log(stack.peek())
    // stack.push(6)
    // stack.log()

    function mulBase(num, base) {
        const s = new Stack()
        do {
            s.push(num % base)
            console.log(num, num % base)
            num = Math.floor(num /= base)
            console.log(num)
        }while(num > 0)
        let converted = ""
        while(s.length() > 0) {
            converted += s.pop()
        }
        console.log(converted)
        return converted
    }

    // mulBase(13, 2)

    function factorial(n) {
        if(n === 0) {
            return 1;
        }else {
            return n * factorial(n - 1);
        }
    }

    // factorial(5)

    function leo(str) {
        const len = str.length, s = new Stack()
        let i = 0, curStr
        for(; i < len; i++){
            curStr = str[i]
            if(curStr === '('){
                s.push(i)
            }else if(curStr === ')'){
                s.pop()
            }
        }

        const data = []
        while(s.length() > 0){
            data.push(s.pop())
        }

        console.log(data)
    }

    leo('2.3 + ((23 / 12 + (3.14159×0.24')
}())

