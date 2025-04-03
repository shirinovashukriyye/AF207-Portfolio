

const arr = [
    {
        id: 1,
        name: "Ibad",
        age: 29

    },
    {
        id: 2,
        name: "Xumar",
        age: 30
    },
    {
        id: 3,
        name: "Shukriyya",
        age: 31
        
    }

]

for (let i = 0; i < arr.length; i++) {
    if(arr[i].id ===1 ){
        console.log("30dan kiçikdir")
        continue;
    } else if(arr[i].id  ===2) {
        console.log("30 a beraberdir")
        continue;
    } else {
        console.log("30dan boyukdur")
        break;
    }
}
