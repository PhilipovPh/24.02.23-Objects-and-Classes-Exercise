function catalogue(data) {
    let cat = {};

    for (let line of data) {
        let [name, price] = line.split(' : ');
        cat[name] = Number(price);
    }

    let sortKeys = Object.keys(cat).sort((a, b) => a.localeCompare(b));

    let groupChar = '';

    for (let key of sortKeys) {
        let name = key;
        if (groupChar !== name[0]) {
            groupChar = name[0];
            console.log(groupChar);
        }
        let price = cat[key];
        console.log(`${key}: ${price}`);
    }

}