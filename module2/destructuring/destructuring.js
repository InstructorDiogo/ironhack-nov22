
let destructureObj = (obj) => {
    let objArr = []
    Object.values(obj).forEach(any => {
        if (any instanceof Array) {
            objArr = [...objArr, ...destructureArray(any)]
        }
        else if (any instanceof Object) {
            objArr = [...objArr, ...destructureObj(any)]
        }
        else {
            objArr.push(any)
        }
    })
    return objArr
}

let destructureArray = (obj) => {
    let arr = []
    for (let any of obj) {
        if (any instanceof Array) {
            arr = [...arr, ...destructureArray(any)]
        }
        else if (any instanceof Object) {
            arr = [...arr, ...destructureObj(any)]
        }
        else {
            arr.push(any)
        }
    }
    return arr
}

let destroy = (...anything) => {
    let anythingDestroyed = []
    anything.forEach(any => {
        if (any instanceof Array) {
            anythingDestroyed = [...anythingDestroyed, ...destructureArray(any)]
        }
        else if (any instanceof Object) {
            anythingDestroyed = [...anythingDestroyed, ...destructureObj(any)]
        }
    })
    console.log(anythingDestroyed)
}

destroy({ a: 2 }, [2, 5], { x: 5, f: { i: 10, l: 20, arr: [{ obj: "a", val: [2, "3"] }, 3] } })
