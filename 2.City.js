function city(input) {
    for (let cityInfo of input) {
        let [town, latitude, longitude] = cityInfo.split(' | ')
        let myCity = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(myCity);
    }
}
city(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])

JSON.s