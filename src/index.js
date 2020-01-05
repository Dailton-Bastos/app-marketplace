const server = require('./server');
const PORT = 3000;

server.listen(process.env.PORT || PORT);
