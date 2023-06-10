const { Console } = require('console');
const fs= require('fs');
//blocking,synchronous code
/*const txtin=fs.readFileSync('./input.txt','utf-8');
console.log(txtin);

const txtwr= 'This is all we know:' +`${txtin}`+"\n Created on"+`${Date.now()}`;
//can be any javascript expression w)ithin {}, like numbers etc.
fs.writeFileSync('./output.txt',txtwr);
console.log('File has been written');*/
//unblocking,asynchronous code
fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{
    fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
        console.log(data2);
        fs.readFile('./txt/append.txt','utf-8',(err,data3)=>{
            console.log(data3);

            fs.writeFile('./txt/final.txt',+`${data2}`+'\n'+`${data3}`,'utf-8',err=>{
                console.log('Files have beem written')
            })
        });
    });//reads file in the background
});//Second readfile depends on the first one
console.log('Will read file');