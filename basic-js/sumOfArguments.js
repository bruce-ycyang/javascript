function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = items[0]
    return items.reduce((a, b) => a + b);
}

const output = sum(1, 2, 3, 4);
const output1 = sum([1, 2, 3, 4])
console.log(output);
console.log(output1);