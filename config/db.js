

var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const mongoatlasUrl = "mongodb://localhost:27017/iot_demo";
mongoose.connect(mongoatlasUrl, {
useNewUrlParser: true,
useUnifiedTopology: true,
retryWrites: false
})
.then(() => console.log('Connection to CosmosDB successful'))
.catch((err) => console.error(err));

