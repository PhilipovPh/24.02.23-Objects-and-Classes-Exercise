function employees(data) {
    let res = [];
    for (let name of data) {
        let myInfo = {
            name: name,
            personalNumber: name.lenght
        }
    res.push(myInfo);
    }

    for (let obj of res) {
        console.log(`Name: ${obj.name} --- Personal Number: ${obj.personalNumber}`);
    }

}

employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ]);