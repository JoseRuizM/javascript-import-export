import http from 'http';
//const http = require('http'); this will work without type: module on the package.json
import { add } from "./math.js";

console.log('works!');
console.log(add(4,9));