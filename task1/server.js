const MyThingy = require('./MyThingy');


let mt = new MyThingy();
mt.connect().then((thingy) => console.log(thingy))