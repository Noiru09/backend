const fs=require('fs');
const http=require('http');
const server= http.createServer((req, res)=>{
  res.end('Hello from the server');
});
server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to requests on port 8000')
})//local host has this address as default
//local host simply means the computer the program is currently running in.
