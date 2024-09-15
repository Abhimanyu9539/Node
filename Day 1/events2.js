const EventEmmiter = require('events');
const celebrity = new EventEmmiter();


// Subscribe to celebrity event for observer 1 
celebrity.on('race',  (result) => {
    if (result === "win")
    {
        console.log("You Win!");
    }
})


// Observer 2 
celebrity.on('race',  (result) => {
    if (result === "lost"){

    console.log("You lost!");
    }
})

celebrity.emit('race', 'win');
celebrity.emit('race','lost');
