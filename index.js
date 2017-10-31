// index.js

import moment from 'moment';

console.log("Hello from 2017 JavaScript!");
console.log(moment().startOf('day').fromNow());

var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);
