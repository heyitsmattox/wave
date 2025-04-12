import db from "../database/db.js";

const usersController =  {
  fetchUsers: async (req, res) => {
    try {
      const { rows } = await db.query('SELECT * FROM users');
      console.log("✅ Users in table:", rows);
    } catch (err) {
      console.error("❌ Failed to fetch users:", err);
    }
  }


  // createUsers: async (req, res) => {
  //   const { id, email, password } = req.body;
  //   const query = `INSERT INTO users (id, email, password) VALUES ($1, $2, $3)`
  // }
};

export default usersController;