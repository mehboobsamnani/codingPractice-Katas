var str = "aabbddeffghhh";


var arr = {
    "a" : 2,
    "b":  1,
    "c" : 3,
    "d" : 1,
    "e" : 4
}

Object.entries(arr).sort(([,a],[,b]) => { debugger; return a[1] - b[1] })

