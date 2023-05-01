function clone(obj, map = new Map()) {
    if (typeof obj !== 'object' || obj === null) return obj
    if (map.get(obj)) {
        return map.get(obj)
    }
    let target = {}
    map.set(obj, target)

    if (obj instanceof Map) {
        target = new Map()
        obj.forEach((v, k) => {
            const v1 = clone(v, map)
            const k1 = clone(k, map)
            target.set(k1, v1)
        })
    }

    if (obj instanceof Set) {
        target = new Set()
        obj.forEach(v => {
            const v1 = clone(v, map)
            target.add(v1)
        })
    }

    if (obj instanceof Array) {
        target = obj.map(item => clone(item, map))
    }

    // 对象情况
    for (let key in obj) {
        const val = clone(obj[key], map)
        target[key] = val
    }

    return target
}

module.exports = clone;