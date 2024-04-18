let data = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number)

const n = data[0]
const m = data[1]

let visited = []
for (let cnt=0; cnt <= n; cnt++) {
    visited.push(0)
}

let result = ''
function backTrack(cnt,obj) {
    if (cnt === m) {
        let memory = ''
        for (let num = 0; num < m; num++) {
            memory += obj[num]
            if (num !== n-1) {
                memory += ' '
            }
        }
        memory += '\n'
        return result += memory
    }

    for (let number = 1; number <= n; number ++) {
        if (visited[number] === 0) {
            // 방문한적이없는경우
            visited[number] = 1
            backTrack(cnt + 1, obj + [number])
            visited[number] = 0
        } else {
            continue
        }
    }
}

backTrack(0,[])
console.log(result)
