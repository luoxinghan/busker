export const sortImmutableList = (sortItem, as) => {
    return function (m, n) {
        let a = m.get(sortItem);
        let b = n.get(sortItem);
        if (as){
            return a - b;
        }
        return b - a;
    }
};

export const sortJsArray = (sortItem, as) => {
    return function (m, n) {
        let a = m[sortItem];
        let b = n[sortItem];
        if (as) {
            return a - b;
        }
        return b - a;
    }
};

export const findImmutableJSList = (findItem, findData) => {
    console.log(findItem);
    return function (x) {
        return x.get(findItem) === findData;
    }
};

export const deleteObjectNull = (values) => {
    for (const key in values) {              // 去除对象内多余的空值key
        if (values[key] === '' || typeof values[key] === "undefined") {
            delete values[key]
        }
    }
    return values;
};