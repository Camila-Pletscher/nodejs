const array = [78, 4, 50, 10, 1];
console.log(array);


for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
        if(array[j] > array[j + 1]){
            [array[j], array[j + 1]] = [array[j + 1], array[j]]
        }
    }
    
}

console.log(array);