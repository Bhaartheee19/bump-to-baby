const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../db");

const router = express.Router();

/* ================= Signup ================= */
router.post("/signup", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }

  // password encrypt
  const hashedPassword = bcrypt.hashSync(password, 10);

  const sql = "INSERT INTO users (email, password) VALUES (?, ?)";

  db.query(sql, [email, hashedPassword], (err, result) => {
    if (err) {
      console.error("❌ DB Error:", err);
      return res.status(500).json({ message: "Error creating user" });
    }
    res.json({ message: "User registered successfully", userId: result.insertId });
  });
});

/* ================= Login ================= */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error" });

    if (result.length === 0) return res.status(401).json({ message: "User not found" });

    const user = result[0];

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    res.json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
      },
    });
  });
});

/* ================= Helper Functions ================= */
function calculatePregnancyWeek(lmp) {
  const lmpDate = new Date(lmp);
  const today = new Date();
  const diffTime = today - lmpDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return Math.floor(diffDays / 7);
}

function getTrimester(week) {
  if (week <= 12) return "1st";
  if (week <= 27) return "2nd";
  return "3rd";
}

/* ================= Personal Details ================= */
router.post("/personal-details", (req, res) => {
  const {
    user_id,
    full_name,
    dob,
    age,
    gender,
    lmp,
    expected_due_date
  } = req.body;

  if (!user_id || !lmp) {
    return res.status(400).json({ error: "user_id or lmp missing" });
  }

  const pregnancy_week = calculatePregnancyWeek(lmp);
  const trimester = getTrimester(pregnancy_week);

  const sql = `
    INSERT INTO personal_details
    (user_id, full_name, dob, age, gender, lmp, pregnancy_week, trimester, expected_due_date)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      user_id,
      full_name,
      dob,
      age,
      gender,
      lmp,
      pregnancy_week,
      trimester,
      expected_due_date
    ],
    (err) => {
      if (err) {
        console.error("❌ DB error:", err);
        return res.status(500).json({ error: err.sqlMessage });
      }
      res.json({
        message: "Personal details saved successfully",
        pregnancy_week,
        trimester
      });
    }
  );
});


/* ================= User Name ================= */
router.get("/user/:userId", (req, res) => {
  const { userId } = req.params;

  const sql = `
    SELECT full_name
    FROM personal_details
    WHERE user_id = ?
    ORDER BY id DESC
    LIMIT 1
  `;

  db.query(sql, [userId], (err, result) => {
    if (err) {
      console.error("❌ DB error:", err);
      return res.status(500).json({ message: "DB error" });
    }

    if (result.length === 0) {
      return res.json({ full_name: "" });
    }

    res.json({
      full_name: result[0].full_name,
    });
  });
});

/* ================= Pregnancy Status ================= */
router.get("/pregnancy/status/:userId", (req, res) => {
  const { userId } = req.params;

  const sql = `
    SELECT expected_due_date
    FROM personal_details
    WHERE user_id = ?
    ORDER BY id DESC
    LIMIT 1
  `;

  db.query(sql, [userId], (err, result) => {
    if (err) return res.status(500).json({ message: "DB error" });

    if (result.length === 0)
      return res.status(404).json({ message: "No pregnancy data found" });

    const dueDate = new Date(result[0].expected_due_date);
    const today = new Date();

    const TOTAL_DAYS = 280; // 40 weeks

    const daysRemaining = Math.ceil(
      (dueDate - today) / (1000 * 60 * 60 * 24)
    );

    const daysCompleted = TOTAL_DAYS - daysRemaining;
    const currentWeek = Math.max(1, Math.ceil(daysCompleted / 7));

    let trimester = "1st";
    if (currentWeek > 12 && currentWeek <= 27) trimester = "2nd";
    if (currentWeek > 27) trimester = "3rd";

    res.json({
      currentWeek,
      trimester,
      daysRemaining
    });
  });
});

module.exports = router; 