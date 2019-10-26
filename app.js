var express = require('express');

const app = express();

app.use('',express.static('./'))

app.listen(3000,function(){
    console.log('已监听3000端口')
})