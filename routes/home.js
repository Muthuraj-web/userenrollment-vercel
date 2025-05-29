const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {
  console.log('Headers:', req.headers);

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdmios-lin1.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw%2BtMpLwluKNN%2B17Ess0oIMNnzNndUdQ2t3hw7Xvr6LiDBGA8IrPvrDtlYa%2Fno4rv3CuH7PO%2FO1bpgc7cpvDOspFBwGRFdCV48btXTsF%2Fhe1KV5%2FtA%3D&templateToken=2421798ed3d3522bb35bb03cead3c9c0"}]}'
  const inputStream = Buffer.from(responseText);

  const responseHeaders = {
    "Content-Type": "application/json"
  };

  console.log(inputStream.length);
  res.writeHead(200, responseHeaders);

  res.write(inputStream);
  res.end();
});

module.exports = router;
