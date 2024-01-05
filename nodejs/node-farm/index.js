const fs = require("fs");

const http = require("http");

const url = require("url");

//////////////////////
/////FILES
// const { text } = require("node:stream/consumers");

// const hello = "hello world";
// console.log(hello);

// console.log(fs);

// const textIn = fs.readFileS ync("nodejs/node-farm/txt/input.txt", "utf-8");

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
const tempOverview = fs.readFileSync(
  "./templates/template-overview.html",
  "utf-8"
);
const tempCard = fs.readFileSync("./templates/template-card.html", "utf-8");
const tempProduct = fs.readFileSync(
  "./templates/template-product.html",
  "utf-8"
);

const data = fs.readFileSync("./dev-data/data.json", "utf-8");

const dataObj = JSON.parse(data);

// console.log(dataObj);

const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);

  output = output.replace(/{%IMAGE%}/g, product.image);

  output = output.replace(/{%PRICE%}/g, product.price);

  output = output.replace(/{%FROM%}/g, product.from);

  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);

  output = output.replace(/{%QUANTITY%}/g, product.quantity);

  output = output.replace(/{%DESCRIPTION%}/g, product.description);

  output = output.replace(/{%ID%}/g, product.id);

  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  return output;
};

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  console.log(url.parse(req.url, true));

  //OVERVIEW PAGE
  if (pathname === "/overview" || pathname === "/") {
    res.writeHead(200, { "Content-type": "text/html" });

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");
    const output = tempOverview.replace("{%PRODUCT_CARD%}", cardsHtml);

    res.end(output);
  }
  ///PRODUCT PAGE
  else if (pathname === "/product") {
    res.writeHead(200, { "Content-type": "text/html" });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);

    res.end(output);
  }
  //API
  else if (pathname === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  }

  //NOT FOUND
  else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1 style = color:red >Page not found</h1>");
  }
  // res.end("hello from the server");
});

server.listen(8000, () => {
  console.log("listening to the port 8000");
});
