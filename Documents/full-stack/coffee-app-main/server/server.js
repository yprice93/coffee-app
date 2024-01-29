// const express = require("express");
// const cors = require("cors");
// const { createProxyMiddleware } = require("http-proxy-middleware");

// const app = express();
// const port = 8000;

// app.use(cors());
// app.use(express.json());

// app.get("/message", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
const express = require("express");
const axios = require("axios");

const app = express();

const API_KEY = "AIzaSyANWsxQFJo4Q1DznbWperqnxelO7UB5bVk";

const url = "https://places.googleapis.com/v1/places:searchText";

const data = {
  textQuery: "cafe in austin texas",
  includedTypes: ["cafe"],
  // locationRestriction: {
  //   circle: {
  //     center: {
  //       latitude: 53.54992,
  //       longitude: 10.00678,
  //     },
  //     radius: 500,
  //   },
  // },
};

const headers = {
  "Content-Type": "application/json",
  "X-Goog-Api-Key": API_KEY,
  "X-Goog-FieldMask": "places.displayName",
};

app.use("/api/maps/geolocation", async (req, res) => {
  const headers = { "Content-Type": "application/json" };
  const data = {
    considerIp: "false",
    wifiAccessPoints: [
      {
        macAddress: "3c:37:86:5d:75:d4",
        signalStrength: -35,
        signalToNoiseRatio: 0,
      },
      {
        macAddress: "94:b4:0f:fd:c1:40",
        signalStrength: -35,
        signalToNoiseRatio: 0,
      },
    ],
  };
  try {
    const response = await axios.post(
      `https://www.googleapis.com/geolocation/v1/geolocate?key=${API_KEY}`,
      data,
      { headers }
    );
  } catch (error) {
    console.log(error.message);
  }
});

app.use("/api/maps/textsearch", async (req, res) => {
  try {
    const response = await axios.post(url, data, { headers });
    const result = res.json(response.data);
    console.log(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
