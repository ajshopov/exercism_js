function transform(legacy) {
    let newFormat = {};
    let letterGroupings = Object.values(legacy);
    let points = [];
    for (let key in legacy) {
        points.push(+key)
    }

    letterGroupings.forEach((group, index) => {
        group.forEach(letter => {
            newFormat[letter.toLowerCase()] = points[index];
        });
    });

    // legacy { 1: ['A'] }
    // newFormat["a"] = 1;
    return newFormat;
}

export { transform };