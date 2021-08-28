import  mongoose from 'mongoose';
export default () => {
  function connect() {
    mongoose.connect('mongodb://localhost:27017/dwitter',{ useNewUrlParser: true, useUnifiedTopology:true} , function(err) {
      if (err) {
        console.error('mongodb connection error', err);
      }
      console.log('mongodb connected');
    });
  }
  connect();
  mongoose.connection.on('disconnected', connect);
};