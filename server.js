const index = require(".");

require('dotenv').config({path:'variables.env'});

index.set('port', process.env.port || 1234);
const server = index.listen(index.get('port'), () => {
    console.log("Servidor Rodando na Porta: "+ server.address().port);
})

const senha = "lapis";
const usuario = "administrador";

