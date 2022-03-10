const numMap = new Map();
for (let i = 0; i < 100; i++) {
    numMap.set(i, null);
}
console.log(numMap);
for (let key of numMap.keys()) {
    if (key % 5 === 0 && key % 3 === 0) {
        console.log(`${key} I can believe in that!`);
    }
    else if (key % 5 === 0) {
        console.log(`${key} Oops, here is 5`);
    }
    else if (key % 3 === 0) {
        console.log(`${key} Devided by tree`);
    }
}
const flat = [
    ["36", "не приватизирован", "4 собственника", "Парковая"],
    ["45", "приватизирован", "3 собственника", "Луговая"],
    ["56", "не приватизирован", "1 собственник", "Луговая"],
    ["56", "приватизирован", "5 собственников", "Ленина"],
    ["25", "не приватизирован", "2 собственника", "Ленина"]
];
const flatForSergey = () => {
    flat.forEach(item => {
        const [houseArea, , , street] = item;
        if (houseArea === '56' || street == 'Ленина') {
            console.log(`${item} true`);
        }
    });
};
flatForSergey();
//# sourceMappingURL=index.js.map