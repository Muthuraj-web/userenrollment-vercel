const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdmios-lin1.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw4tMIexFDQY9novRwv0NcGaCqenttLRDlziVuDvezThTBJU8YkY%2F3PsFMSrXZr8vnGv3vAOKezbphP7Zg9Ce8pEhwGRFdCV48btXTsTalfgP5%2Bq9I%3D&templateToken=c33ab3683f824aad7100becdf288c349"}]}';
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
