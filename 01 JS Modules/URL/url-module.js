import url from "url";

// Parsing URL
const myUrl = "https://www.example.com:8080/pathname/?search=test#hash";
const parsedUrl = new URL(myUrl);

console.log("Parsed URL : ", parsedUrl);
console.log("Hostname : ", parsedUrl.hostname); 
console.log("Pathname : ", parsedUrl.pathname); 
console.log("Params : ", parsedUrl.searchParams.get('search')); 

// Creating URL
const urlObject = {
  protocol: "https",
  hostname: "www.example.com",
  port: 8080,
  pathname: "/path/to/resource",
  query: { name: "John", age: 30 },
};

// Format the URL object
const formattedUrl = url.format(urlObject);

console.log("Formatted URL : ", formattedUrl);
