const server = require("./server")

const port = 4000;

server.listen(port, () => console.log(`___ Running on port ${port} ___`));