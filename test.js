const qs = require('querystring');

let string = "this is 한글 쿼리";
let encodedStr = qs.escape(string);

console.log(encodedStr);