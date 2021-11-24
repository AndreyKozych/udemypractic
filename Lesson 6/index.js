function getPeople(handshake) {
    let hands = 0;
    let peoples = 0;

    while (hands < handshake) {
        peoples++;
        hands += peoples;
    }
    return peoples;
}

console.log( getPeople(1) ); // 1
console.log( getPeople(3) ); // 2
console.log( getPeople(6) ); // 3
console.log( getPeople(10) ); // 4
console.log( getPeople(15) ); // 5
console.log( getPeople(120) ); // ?

