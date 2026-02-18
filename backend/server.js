const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/", authRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
