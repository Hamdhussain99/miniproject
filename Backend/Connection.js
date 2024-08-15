
const mongoose = require('mongoose');

const url = "mongodb+srv://hamdhussain99:hamd9945@cluster0.27inodd.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0"

// asynchronous function - promise object
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.log(err);
    
});

module.exports = mongoose;