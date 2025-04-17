const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL DB connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'KAnanda@427', // update if needed
  database: 'edusupply', // make sure this matches your DB
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Existing /api/register route (DO NOT remove)
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.error('Error during registration:', err);
      res.status(500).json({ message: 'Registration failed' });
    } else {
      res.json({ message: 'Registration successful' });
    }
  });
});

// ✅ New /login route added
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error('Login error:', err);
      return res.status(500).json({ success: false, message: 'Server error' });
    }

    if (results.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'Invalid email or password' });
    }
  });
});

app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
