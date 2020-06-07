//Back end code for personal web page
//By:Hayden Mirza

//Modules
const express = require('express');
let app = express();

//Host static content
app.use(express.static('public'));

//Run server
app.listen(3000);
console.log("Server running on port 3000");