//we use synchronous version
//top level code executed once we strat the program so in that matter it doesnt matter at all if it blocks the execution because it happens only once


const fs=require('fs');
const http=require('http');
const url=require('url');
const port=8000;

const data=fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataOb= JSON.parse(data);

const server= http.createServer((req, res)=>{
  const pathName=req.url;

  if(pathName ==='/'||pathName ==='/overview'){
    res.end('This is the overview');
  }
  else if(pathName==='/product'){
    res.end('This is the product');
  }
  else if(pathName=='/api'){
    
    res.writeHead(200,{'Content-type':'application/json'});
    res.end(data);//what we want to send back is the data directly and the data is a string transformed into an object using json.parse
   ;//__dirname=directory name*/

  }
  else{
    res.writeHead(404,{
      'Content-type':'text/html',
      'my-own-header': 'hello-world'
    });
    res.end('<h1>page not found</h1>');
  }
});//callback function executed twice
server.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to requests on port ${port}`);
});//local host has this address as default
//local host simply means the computer the program is currently running in.
//the app deosnt stop right away so we can listen to requests.
