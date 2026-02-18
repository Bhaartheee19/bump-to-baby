const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "bala@1930",
  database: "medical_app",
});

db.connect((err) => {
  if (err) {
    console.error("❌ DB error:", err);
  } else {
    console.log("✅ MySQL Connected");
  }
});

module.exports = db;
