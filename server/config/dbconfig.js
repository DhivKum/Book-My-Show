const mongoose = require('mongoose');

const dbUrl = 'mongodb+srv://dhivyacool95:THptqxsQSPT4KGa6@dhivyaorg.o1zph.mongodb.net/?retryWrites=true&w=majority&appName=DhivyaOrg';

mongoose.connect(dbUrl);

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('Database connected successfully');
})

connection.on('error', (err) => {
    console.error('Database connection error:', err);
});

module.exports = connection;