const express = require('express');
const app = express();
const router = require('./router/router.js');
var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use('/login', router);

app.listen(80, () => {
    console.log('Connected 80 port');
});