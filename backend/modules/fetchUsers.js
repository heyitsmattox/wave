import db from "../database/db.js";

async function fetchUsers() {
  try {
    const { rows } = await db.query('SELECT * FROM users');
    console.log("✅ Users in table:", rows);
  } catch (err) {
    console.error("❌ Failed to fetch users:", err);
  }
}

fetchUsers();