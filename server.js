const connect  = require('connect');
const serveStatic = require('serve-static');
const livereload = require('livereload');

const server = connect();

server.use(serveStatic(__dirname));

server.listen(3000);

const live_server = livereload.createServer();
live_server.watch([__dirname]);