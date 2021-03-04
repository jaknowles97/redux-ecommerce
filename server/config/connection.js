  
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:8279000AK@cluster0.psc0s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;