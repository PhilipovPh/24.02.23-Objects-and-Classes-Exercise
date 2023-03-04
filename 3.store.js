function storeProvision(store, orderStore) {
    let myStore = {};
    for (let i = 0; i < store.length; i += 2) {
        let name = store[i];
        let quantity = Number(store[i + 1]);
        myStore[name] = quantity;
    }

    for (let i = 0; i < orderStore.length; i += 2) {
        let name = orderStore[i];
        let quantity = Number(orderStore[i + 1]);
        if (myStore.hasOwnProperty(name)) {
            myStore[name] += quantity;
        } else {
            myStore[name] = quantity;
        }
    }

    for (let product of Object.keys(myStore)) {
        console.log(`${product} -> ${myStore[product]}`);
    }
}
