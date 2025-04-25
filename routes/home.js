const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {
  console.log('Headers:', req.headers);

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdm.manageengine.in/mdm/client/v1/enroll?encapiKey=PHtE6r0MFODoiG588kMB7aPpFpbxM9wm%2Bu00L1JPuYlBAqRQTk1S%2Ft4tkTTk%2BB4uXaRCEvaZydlhsbzKuu%2FWJz3vYW8dXWqyqK3sx%2FVYSPOZ86260EFLs1k%3D&templateToken=ec433e208bacdd058fcd2f1f372cf81e"}]}'
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
