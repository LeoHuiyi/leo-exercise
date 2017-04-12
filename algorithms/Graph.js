/**
 * Created by leo on 2017/3/12/0012.
 */


class Vertex{
    constructor(label){
        this.label = label
    }
}

class Graph{
    constructor(v){
        this.vertices = v
        this.edges = 0
        this.adj = {}
        // for(let i = 0, len = this.vertices; i < len; i++){
        //     this.adj[i] = []
        //     // this.adj[i].push('')
        // }
    }

    addEdge(v, w){
        if(!this.adj[v]){
            this.adj[v] = []
        }
        if(!this.adj[w]){
            this.adj[w] = []
        }
        this.adj[v].push(w)
        this.adj[w].push(v)
        this.edges ++
    }

    log(){
        const adj = this.adj
        for(let [key, val] of Object.entries(adj)){
            // console.log(`${key} ->`)
            for(let i = 0, len = val.length; i < len; i++){
                console.log(`${key} -> ${val[i]}`)
            }
        }
    }

    //深度遍历
    dfs(v, marked = {}, edgeTo = {}){
        marked[v] = true
        if(this.adj[v] !== undefined){
            console.log("Visited vertex:  " + v)
        }
        for(let val of Object.values(this.adj[v])){
            if(!marked[val]){
                edgeTo[val] = v
                this.dfs(val, marked, edgeTo)
            }
        }
        return {edgeTo, marked}
    }

    bfs(s){
        const queue = [], marked = {}, edgeTo = {}
        queue.push(s)
        let v
        marked[s] = true
        while(queue.length){
            v = queue.shift()
            if(v !== undefined){
                console.log("Visisted vertex:  " + v)
            }
            for(let val of Object.values(this.adj[v])){
                if(!marked[val]){
                    edgeTo[val] = v
                    marked[val] = true
                    queue.push(val)
                }
            }
        }
        return {edgeTo, marked}
    }

    pathTo(from, to, top){
        const {edgeTo, marked} = this.bfs(top)
        if (!marked[to]) {
            return false
        }
        const path = []
        for (let i = to; i !== from; i = edgeTo[i]) {
            if(i !== undefined){
                path.push(i)
            }else {
                return false
            }
        }
        path.push(from)
        return path
    }

    static showPath(path){
        if(path && path.length){
            let str = ''
            while(path.length > 0){
                if(path.length > 1){
                    str += `${path.pop()} -> `
                }else{
                    str += path.pop()
                }
            }
            console.log(str)
        }else{
            throw new Error('not find path')
        }
    }

}


const g = new Graph(5)
// g.addEdge(0, 1);
// g.addEdge(0, 2);
// g.addEdge(1, 3);
// g.addEdge(2, 4);
// const path = g.pathTo(0, 4, 0)
// console.log(path)
// Graph.showPath(path)
// console.log(g.dfs(0))
// console.log(g.bfs(0))
g.addEdge('a', 'b');
g.addEdge('a', 'c');
g.addEdge('c', 'd');
g.addEdge('b', 'e');
const path = g.pathTo('a', 'c', 'a')
console.log(path)
Graph.showPath(path)
// console.log(g.dfs('a'))
// console.log(g.bfs('a'))
// g.log();




// function Graph(v) {
//     this.vertices = v;
//     this.vertexList = [];
//     this.edges = 0;
//     this.adj = [];
//     for (var i = 0; i < this.vertices; ++i) {
//         this.adj[i] = [];
//         this.adj[i].push("");
//     }
//     this.addEdge = addEdge;
//     this.marked = [];
//     for (var i = 0; i < this.vertices; ++i) {
//         this.marked[i] = false;
//     }
//     this.edgeTo = [];
//     this.topSortHelper = topSortHelper;
//     this.topSort = topSort;
// }
// function topSort() {
//     var stack = [];
//     var visited = [];
//     for (var i = 0; i < this.vertices; i++ ) {
//         visited[i] = false;
//     }
//     for ( var i = 0; i < this.vertices; i++ ) {
//         if (visited[i] == false ) {
//             this.topSortHelper(i, visited, stack);
//         }
//     }
//     console.log(stack)
//     for (var i = 0; i < stack.length; i++ ) {
//         if (stack[i] !== undefined && stack[i] !== false){
//             console.log(this.vertexList[stack[i]]);
//         }
//     }
// }
// function topSortHelper(v, visited, stack) {
//     visited[v] = true;
//     for(var w in this.adj[v]) {
//         if (!visited[w]) {
//             this.topSortHelper(this.adj[v][w], visited, stack);
//         }
//     }
//     stack.push(v);
// }
// function addEdge(v, w) {
//     this.adj[v].push(w);
//     this.adj[w].push(v);
//     this.edges++;
// }
//
// g = new Graph(6);
// g.addEdge(1, 2);
// g.addEdge(2, 5);
// g.addEdge(1, 3);
// g.addEdge(1, 4);
// g.addEdge(0, 1);
// g.vertexList = ["CS1", "CS2", "Data Structures",
//     "Assembly Language", "Operating Systems",
//     "Algorithms"];
// g.topSort();






