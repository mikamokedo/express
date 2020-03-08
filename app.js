const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


mongoose
.connect('mongodb://localhost/apiproject', { useNewUrlParser: true })
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log('err'));



var morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
const user = require('./routes/user');

//router
app.use('/user',user)




//catch 404 error
app.use((req,res,next) =>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});


//error handele function
app.use((req,res,next) =>{
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;
    res.status(status).json({
        error: {
            message : error.message
        }
    })
})


const port = app.get('port') || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))




