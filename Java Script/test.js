function asyncExample() {
    console.log("We're calculating the first 10,000 prime numbers.");
    const asyncArr = [2];
    let AsyncNumber = 3;
    while (asyncArr.length < 10000) {
        for (let i = 2; i < AsyncNumber; i++) {
            if (AsyncNumber % i === 0) {
                AsyncNumber++;
                break;
            }
            if (i === AsyncNumber - 1) {
                asyncArr.push(AsyncNumber);
                AsyncNumber++;
                break;
            }
        }
    }
    return Promise.resolve(asyncArr);
}
asyncExample().then(function(value) {
    console.log(`We're calculated the first ${value.length} prime numbers`)
})
console.log("This line is printed during the calculation")