function doSomething() {
    console.log(33333);
}
console.log(22222);

setTimeout(doSomething, 5000)
setTimeout(function () {
    console.log('I am very lazy')
}, 2000)
setInterval(() => {
    console.log('doing it')
}, 4000);
for (let i = 0; i < 6; i++) {
    setTimeout(() => {
        console.log('Number', i)
    },i*  2000);
    
}

console.log(44444);
console.log(55555);
console.log(66666);
console.log(77777);