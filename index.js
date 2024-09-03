const http = require('http') 

const hostname = '127.0.0.1'

const port = 3000

//crear un servidor con el estado 200 y texto plano 
const server = http.createServer((req,res)=>{
    res.statusCode = 200; //ok 
    res.setHeader('content-Type', 'text-plain')
    res.end('servidor funcionando en node \n')
}); 
// mandar llamar el servidor 
server.listen(port, hostname,()=>{
    console.log('el servidor node esta corriendo en http://127.0.0.1:3000')
})