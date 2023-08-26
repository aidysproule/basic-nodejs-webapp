const http = require('http');
const randomstring = require("randomstring");
const random_name = require('node-random-name');
const slugify = require('slugify');

const express = require('express');
const app = express();

var httpString;

const server = http.createServer((req,res) => {
    httpString = randomstring.generate() + "\n";
    httpString = httpString+ random_name() + "\n";
    httpString = httpString+ slugify(httpString,"-") + "\n";
    httpString = httpString+ "Hey Dave!"+ "\n";
    httpString = httpString+ "Hey Pete!"+ "\n";
    res.end(httpString);
});

 

server.listen(8000, '0.0.0.0', ()=> {
    console.log('Listening for requests on port 8000');
})

app.get('/', function (req, res) {
    httpString = randomstring.generate() + "\n";
    httpString = httpString+ random_name() + "\n";
    httpString = httpString+ slugify(httpString,"-") + "\n";
    httpString = httpString+ "Hey Bob!"+ "\n";
    httpString = httpString+ "Hey Sue!"+ "\n";
    res.end(httpString);
    httpString=""
  })

  app.get('/name', function (req, res) {
    httpString = httpString+ random_name() + "\n";
    res.end(httpString);
    httpString=""
  })

  app.get('/password', function (req, res) {
    httpString = randomstring.generate() + "\n";
    res.end(httpString);
    httpString=""
  })

  app.listen(3000,() =>{
    console.log('Express is listening on port 3000');
  })