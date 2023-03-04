function dictionary(data) {
    let myList = {}

    for (let line of data) {
        let obj = JSON.parse(line);
        let keys = Object.keys(obj);
        let key = keys[0];
        myList[key] = obj[key];
    }

    sortKey = Object.keys(myList).sort((a, b) => a.localeCompare(b));
    for (let key of sortKey) {
        console.log(`Term: ${key} => Definition: ${myList[key]}`);
    }
}

