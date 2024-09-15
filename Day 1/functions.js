function printHelloWorld() {
    console.log("Hello World");
}

function delayedPrint() {
    setTimeout(() => {
        console.log("Delayed Hello World");
    }, 1000);
}

// Run both functions at the same time
printHelloWorld();
delayedPrint();

