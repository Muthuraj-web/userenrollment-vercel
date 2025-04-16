const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {
  console.log('Headers:', req.headers);

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://sathish-win1.csez.zohocorpin.com:9383/mdm/client/v1/enroll?encapiKey=fa87c319&templateToken=3efcca65907b5f5dcd136a36cb0e7925"}]}'
  const inputStream = Buffer.from(responseText);

  const responseHeaders = {
    "Content-Type": "application/json",
    "Content-Length": inputStream.length
  };

  console.log(inputStream.length);
  res.writeHead(200, responseHeaders);

  res.write(inputStream);
  res.end();
});

module.exports = router;
