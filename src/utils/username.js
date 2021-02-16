const ADJECTIVES = ['boundless','plausible','sleepy','electronic','dangerous','slim','purple'];

const OBJECTS = ['puddle','piano','window','bowl','socks','brocolli','chalk']

function genRandomUsername(){
    const adj = ADJECTIVES[parseInt(Math.random()*7)];
    const obj = OBJECTS[parseInt(Math.random()*7)];
    return `${adj}-${obj}`;
}

module.exports = {
    genRandomUsername
}