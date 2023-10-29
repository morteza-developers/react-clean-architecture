var express = require("express");
var path = require("path");
const env = require("dotenv").config({ path: "./.env.production" });
var app = express();
const port = 3005;
const baseUrl=env.parsed.PUBLIC_URL
function getIPAddress() {
  var interfaces = require("os").networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];

    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
      )
        return alias.address;
    }
  }
  return "0.0.0.0";
}

app.use(`${baseUrl}/static`, express.static("build/static"));
// app.use(`${baseUrl}/*`, express.static("build"));

app.get(`${baseUrl}*`, function (req, res) {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(port, () => {
  console.log(
    `server is running on http://${getIPAddress()}:${port}${baseUrl}`
  );
});
