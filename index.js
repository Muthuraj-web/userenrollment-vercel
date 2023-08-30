// Import packages
const express = require("express");
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/.well-known/com.apple.remotemanagement", (req, res) => {
  // Simulating input stream data
  const responseText =
    '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://muthuraj-14527.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZxvtMtAlFHdMt3uvB4o34pfOC%2BdzoBLEzN31VWG7%2B2IiDBLUsIkNKHL5AFHpXxj9KmV7iqZP%2FPnZ88bvJxvWL0rQxwGRFdCV48btXTsS6UEgv4m%2B9Y%3D&templateToken=e94c2f413ec46f783dc9d0fb9f3c4c0c"}]}';
  const inputStream = Buffer.from(responseText);

  const responseHeaders = {
    "Content-Type": "application/json",
    "Content-Length": inputStream.length
  };

  console.log(inputStream.length);
  res.writeHead(200, responseHeaders);

  // Process the input stream and send it as the response
  res.write(inputStream);
  res.end();
});

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
