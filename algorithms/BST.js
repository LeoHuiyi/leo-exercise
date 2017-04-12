/**
 * Created by leo on 2017/3/5/0005.
 */
!(function() {
    function Node(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }

    function BST() {
        this.root = null
    }

    BST.prototype.insertNode = function(data) {
        const node = new Node(data)
        if(!this.root) {
            this.root = node
        }else {
            let current = this.root
            while(true) {
                if(current.data > data) {
                    if(current.left === null) {
                        current.left = node
                        break
                    }
                    current = current.left
                }else if(current.data < data) {
                    if(current.right === null) {
                        current.right = node
                        break
                    }
                    current = current.right
                }else {
                    throw Error(`current data: ${JSON.stringify(current)} same data ${data}`)
                }
            }
        }
    }

    BST.prototype.find = function(data) {
        let current = this.root
        while(true) {
            if(data === current.data) {
                return current
            }
            current = data < current.data ? current.left : current.right
            if(current === null) {
                return null
            }
        }
    }

    BST.prototype.preOrder = function preOrder(node, callback = (node) => {
        console.log(node.data)
    }) {
        if(node !== null) {
            callback(node)
            preOrder(node.left, callback)
            preOrder(node.right, callback)
        }
    }

    BST.prototype.inOrder = function inOrder(node) {
        if(node !== null) {
            inOrder(node.left)
            console.log(node.data)
            inOrder(node.right)
        }
    }

    BST.prototype.postOrder = function inOrder(node) {
        if(node !== null) {
            inOrder(node.left)
            inOrder(node.right)
            console.log(node.data)
        }
    }

    BST.prototype.getMin = function(node = this.root) {
        current = node
        while(current.left !== null) {
            current = current.left
        }
        return current
    }

    BST.prototype.getMax = function() {
        current = this.root
        while(current.right !== null) {
            current = current.right
        }
        return current
    }

    BST.prototype.log = function() {
        console.log(JSON.stringify(this.root, null, 4))
    }

    BST.prototype.remove = function(data) {
        removeNode.call(this, this.root, data)
    }

    function removeNode(node, data) {
        if(node == null) {
            return null
        }
        if(data == node.data) {
            if(node.left == null && node.right == null) {
                return null
            }
            if(node.left == null) {
                return node.right
            }
            if(node.right == null) {
                return node.left
            }
            const tempNode = this.getMin(node.right)
            node.data = tempNode.data
            node.right = removeNode.call(this, node.right, tempNode.data)
            return node
        }
        else if(data < node.data) {
            node.left = removeNode.call(this, node.left, data)
            return node
        }
        else {
            node.right = removeNode.call(this, node.right, data)
            return node
        }
    }

    BST.prototype.count = function() {
        let count = 0
        this.preOrder(this.root, ()=>{
            count ++
        })
        console.log(count)
    }

    const bst = new BST()
    bst.insertNode(5)
    bst.insertNode(2)
    bst.insertNode(3)
    bst.insertNode(4)
    bst.insertNode(3.5)
    bst.insertNode(4.5)
    bst.insertNode(2.5)
    bst.insertNode(2.4)
    bst.insertNode(7)
    bst.insertNode(1)
    bst.insertNode(9)
    // bst.log()
    // console.log(bst.find(1))
    // bst.inOrder(bst.root)
    // bst.preOrder(bst.root)
    // bst.postOrder(bst.root)
    // console.log(bst.getMin())
    // console.log(bst.getMax())
    // bst.remove(2)
    bst.log()
    bst.count()

    var preOrderUnRecur = function(node) {
        if(!node) {
            throw new Error('Empty Tree')
        }
        var stack = []
        stack.push(node)
        while(stack.length !== 0) {
            node = stack.pop()
            console.log(node.data)
            if(node.right) stack.push(node.right)
            if(node.left) stack.push(node.left)
        }
    }

    var inOrderUnRecur = function(node) {
        if(!node) {
            throw new Error('Empty Tree')
        }
        var stack = []
        while(stack.length !== 0 || node) {
            if(node) {
                stack.push(node)
                node = node.left
            }else {
                node = stack.pop()
                console.log(node.data)
                node = node.right
            }
        }
    }

    var posOrderUnRecur = function(node) {
        if(node) {
            var s1 = []
            var s2 = []
            s1.push(node)
            while(s1.length !== 0) {
                node = s1.pop()
                s2.push(node)
                if(node.left) {
                    s1.push(node.left)
                }
                if(node.right) {
                    s1.push(node.right)
                }
            }
            while(s2.length !== 0) {
                console.log(s2.pop().data);
            }
        }
    }
    // preOrderUnRecur(bst.root)
    // inOrderUnRecur(bst.root)
}())
