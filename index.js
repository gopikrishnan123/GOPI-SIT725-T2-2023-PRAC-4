let express = require('express');
let application = express();
let port = process.env.port || 3000;

application.use(express.static(__dirname + '/'));

application.get('/addNum', (req, res)=>{
    let n1 = req.query.n1;
    let n2 = req.query.n1;
    let sum = parseInt(n1) + parseInt(n2);
    let successMessage = {statusCode:200, message:'Success', data:sum}
    res.send(successMessage)
})

application.get('/', (req, res)=>{
    res.render('index.html')
})

application.listen(port, ()=>{
    console.log('Started');
});