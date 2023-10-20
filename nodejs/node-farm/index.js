const fs = require("fs");

const http = require("http");

const url = require("url");

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

const data = fs.readFileSync("./dev-data/data.json", "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  console.log(pathName);

  if (pathName === "/overview" || pathName === "/") {
    res.end("This is overview");
  } else if (pathName === "/product") {
    res.end("This is product");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1 style = color:red >Page not found</h1>");
  }
  // res.end("hello from the server");
});

server.listen(8000, () => {
  console.log("listening to the port 8000");
});
