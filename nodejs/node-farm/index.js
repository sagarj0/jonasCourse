const fs = require("fs");

const http = require("http");

//////////////////////
/////FILES
// const { text } = require("node:stream/consumers");

// const hello = "hello world";
// console.log(hello);

// console.log(fs);

// const textIn = fs.readFileSync("nodejs/node-farm/txt/input.txt", "utf-8");

// console.log(textIn);

// console.log("Current working directory:", process.cwd());

// const textOut = `hello there guys i am currently learning nodejs `;

// fs.writeFileSync("nodejs/node-farm/txt/input.txt", textOut + textIn);

// console.log("written");
// helo guys i am currently learn]  ing nodejs

// non blocking asynchronous way

// fs.readFile("nodejs/node-farm/txt/start.txt", "utf-8", (err, data) => {
// console.log(data);
// });

// console.log("will read file");

//////////////////////////
///SERVER
const server = http.createServer((req, res) => {
  res.end("hello from the server");
});

server.listen(8000, "127.0.0.1 ", () => {
  console.log("listening to the port 8000");
});
