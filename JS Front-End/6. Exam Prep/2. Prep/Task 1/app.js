function solve(lst) {
    let lstProducts = lst.shift();
    let products = lstProducts.split("!")

    for (const obj of lst) {
        let data = obj.split(" ");
        let command = data[0];
        if (command === "Urgent") {
            let item = data[1];
            if (!products.includes(item)) {
                products.unshift(item);
            }
        } else {
            if (command === "Unnecessary") {
                let item = data[1];

                if (products.includes(item)) {
                    let checker = products.indexOf(item);
                    products.splice(checker, 1);
                }
            } else {
                if (command === "Correct") {
                    let oldItem = data[1];
                    let newItem = data[2];
                    if (products.includes(oldItem)) {
                        let checker = products.indexOf(oldItem);
                        products.splice(checker, 1, newItem);
                    }
                } else {
                    if (command === "Rearrange") {
                        let item = data[1];

                        if (products.includes(item)) {
                            let checker = products.indexOf(item);
                            let pending = products.splice(checker, 1);
                            products.push(pending)

                        }
                    } else {
                        if (command === "Go") {
                            console.log(products.join(', '))
                        }
                    }
                }
            }
        }
    }
    
}


solve(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])