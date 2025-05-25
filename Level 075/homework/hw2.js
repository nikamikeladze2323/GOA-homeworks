// 3) შექმენით ობიექტი user , ამ ობიექტში შეინახე შესაბამისი key-ები , for in - ციკლის  გამოყენებით გადაუარე თითოეულ key-ს და გამოსახე console-ში //

function objects(obj) {
    const keys = Object.keys(obj);
    
    for (i = 0; i < keys.length; i++) {
        console.log(keys[i]);
    }
}

const obj = {
    name: "Nikolozi",
    age: 25,
    country: "Georgia"
};

objects(obj);
