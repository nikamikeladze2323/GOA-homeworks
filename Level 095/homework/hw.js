const fun = (my_list) => {
    let result_list = []
    for (let i = 0; i < my_list.length; i++) {
        if (my_list[i] % 2 !== 0) {
            result_list.push(my_list[i])
        }
    }
    return result_list
}

console.log(fun([12, 233, 4594, 112, 111]))