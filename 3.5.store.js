function storeInvent(store, orderStore) {
    let myStore = {};
    rotation(store);
    rotation(orderStore);

    for (let product of Object.keys(myStore)) {
        console.log(`${product} -> ${myStore[product]}`);
    }

    function rotation(data) {
        for (let i = 0; i < data.length; i += 2) {
            let name = data[i];
            let quantity = Number(data[i + 1]);

            if (myStore.hasOwnProperty(name)) {
                myStore[name] += quantity;
            } else {
                myStore[name] = quantity;
            }
        }
    }
}