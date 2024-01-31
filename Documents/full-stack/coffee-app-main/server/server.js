const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Set up a proxy for the Google Places API
app.use(
  "/google-api",
  createProxyMiddleware({
    target: "https://places.googleapis.com",
    changeOrigin: true,
    pathRewrite: {
      "^/google-api": "", // remove the '/google-api' path prefix
    },
  })
);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
