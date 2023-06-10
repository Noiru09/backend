const fs=require('fs');
const http=require('http');
const url=require(url);
const server= http.createServer((req, res)=>{
  console.log(req.url);
  res.end('Hello from the server');
});
server.listen(5500,'127.0.0.1',()=>{
    console.log('Listening to requests on port 8000')
})//local host has this address as default
//local host simply means the computer the program is currently running in.
//the app deosnt stop right away so we can listen to requests.
 