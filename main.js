const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // duplicate won't be added

console.log("set: ", mySet); //{1, 2, 3}

// Map example
const myMap = new Map();

myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");

console.log("Map: ", myMap); //Outputs: Map {'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3'}
