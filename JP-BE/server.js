const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const dashboardData = require("../JP-FE/src/mockData/dashboardData.js");
const products = require("../JP-FE/src/mockData/orderData.js");
const sidebar = require("../JP-FE/src/mockData/sidebardata.js");

app.get("/api/dashboard", (req, res) => {
  res.json(dashboardData);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/sidebar", (req, res) => {
  res.json(sidebar);
});

app.listen(port, () => {
  console.log(`Mock API server running at http://localhost:${port}`);
});
