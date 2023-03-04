function inventory(data) {
    let res = [];

    for (let line of data) {
        let [name, level, items] = line.split(` / `);
        let heros = {
            name: name,
            level: Number(level),
            items: items.split(`, `)
        }
        res.push(heros)
    }
    res.sort((heroA, heroB) => heroA.level - heroB.level)

    for (let heros of res) {
        console.log(`Hero: ${heros.name}`);
        console.log(`level => ${heros.level}`);
        console.log(`items => ${heros.items.join(', ')}`);
    }
}
inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])