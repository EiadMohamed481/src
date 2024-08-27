const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

// Initialize SQLite database (in-memory for temporary usage)
const db = new sqlite3.Database(":memory:");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

// Helper function to check if a table is a child of a parent table
function isChildTable(tableName, parentTable) {
  // Dummy implementation; replace with actual logic
  return tableName.startsWith(parentTable);
}

// GET request handler
app.get("/", (req, res) => {
  if (req.query.table && req.query.action_type) {
    const tableName = req.query.table;
    const userName = req.query.username || null;
    const actionType = req.query.action_type;

    let sql = "";

    // Handle action types and SQL queries
    if (userName) {
      if (isChildTable(tableName, "fresh_lead")) {
        sql = `SELECT f.*, i.* FROM fresh_lead AS f LEFT JOIN ${tableName} AS i ON f.id = i.id WHERE f.send_to = ?`;
      } else if (isChildTable(tableName, "direct_lead")) {
        sql = `SELECT d.*, i.* FROM direct_lead AS d LEFT JOIN ${tableName} AS i ON d.id = i.id WHERE d.send_to = ?`;
      } else {
        sql = `SELECT * FROM ${tableName} WHERE send_to = ?`;
      }
    } else {
      if (isChildTable(tableName, "fresh_lead")) {
        sql = `SELECT f.*, i.* FROM fresh_lead AS f LEFT JOIN ${tableName} AS i ON f.id = i.id`;
      } else if (isChildTable(tableName, "direct_lead")) {
        sql = `SELECT d.*, i.* FROM direct_lead AS d LEFT JOIN ${tableName} AS i ON d.id = i.id`;
      } else {
        sql = `SELECT * FROM ${tableName}`;
      }
    }

    db.all(sql, [userName], (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
      } else {
        res.json(rows);
      }
    });
  } else {
    res.status(400).json({ error: "Table name or action type not provided" });
  }
});

// POST request handler
app.post("/", (req, res) => {
  const data = req.body;

  if (data.action_type) {
    if (data.action_type === "get_username") {
      db.get(
        "SELECT username FROM login_history WHERE time = (SELECT MAX(time) FROM login_history)",
        (err, row) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: "Database error" });
          } else {
            res.json({ username: row ? row.username : null });
          }
        }
      );
    } else if (data.action_type === "send_username") {
      db.run(
        "INSERT INTO login_history (username) VALUES (?)",
        [data.username],
        (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: "Database error" });
          } else {
            res.status(200).json({ success: true });
          }
        }
      );
    }
  } else if (data.username && data.password) {
    if (data.user_type) {
      if (data.action === "ADD") {
        db.run(
          "INSERT INTO users (username, password, status) VALUES (?, ?, ?)",
          [data.username, data.password, data.user_type],
          (err) => {
            if (err) {
              console.error(err);
              res.status(500).json({ error: "Database error" });
            } else {
              res.status(200).json({ success: true });
            }
          }
        );
      } else if (data.action === "REMOVE") {
        db.run(
          "DELETE FROM users WHERE username = ?",
          [data.username],
          (err) => {
            if (err) {
              console.error(err);
              res.status(500).json({ error: "Database error" });
            } else {
              res.status(200).json({ success: true });
            }
          }
        );
      }
    } else {
      db.get(
        "SELECT * FROM users WHERE username = ?",
        [data.username],
        (err, row) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: "Database error" });
          } else if (row && row.password === data.password) {
            db.run(
              "INSERT INTO login_history (username) VALUES (?)",
              [data.username],
              (err) => {
                if (err) {
                  console.error(err);
                  res.status(500).json({ error: "Database error" });
                } else {
                  res.json({
                    status: "success",
                    message: "Authentication successful",
                    user_status: row.status,
                  });
                }
              }
            );
          } else {
            res.status(401).json({ error: "Authentication failed" });
          }
        }
      );
    }
  } else if (data.first_name) {
    let sql = "";
    if (data.action === "ADD") {
      sql = `INSERT INTO ${data.customers_type} (first_name, last_name, country, city, zip_code, phone_number, phone_number_2, email, notes, send_to) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      db.run(
        sql,
        [
          data.first_name,
          data.last_name,
          data.country,
          data.city,
          data.zip_code,
          data.phone_number,
          data.phone_number_2,
          data.email,
          data.notes,
          data.send_to,
        ],
        function (err) {
          if (err) {
            console.error(err);
            res.status(500).json({ error: "Database error" });
          } else {
            const id = this.lastID;
            db.run(
              `INSERT INTO ${data.customers_type}${data.interesting} (id) VALUES (?)`,
              [id]
            );
            db.run(
              `INSERT INTO ${data.customers_type}${data.Answering} (id) VALUES (?)`,
              [id]
            );
            res.status(200).json({ success: true });
          }
        }
      );
    } else if (data.action === "EDIT") {
      sql = `UPDATE ${data.customers_type} SET first_name = ?, country = ?, city = ?, phone_number = ?, send_to = ? WHERE id = ?`;
      db.run(
        sql,
        [
          data.first_name,
          data.country,
          data.city,
          data.phone_number,
          data.send_to,
          data.id,
        ],
        (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: "Database error" });
          } else {
            res.status(200).json({ success: true });
          }
        }
      );
    } else if (data.action === "REMOVE") {
      db.run(
        `DELETE FROM ${data.customers_type} WHERE id = ?`,
        [data.id],
        (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: "Database error" });
          } else {
            res.status(200).json({ success: true });
          }
        }
      );
    }
  } else {
    res.status(400).json({ error: "Missing required fields" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
