import db from "../database/db.js";
import createHttpError from "http-errors";

const usersController =  {
  fetchUsers: async (req, res) => {
    try {
      const { rows } = await db.query('SELECT * FROM users');
      console.log("✅ Users in table:", rows);
    } catch (err) {
      console.error("❌ Failed to fetch users:", err);
    }
  },


  createUsers: async (req, res, next) => {
    const { id, email, password } = req.body;
    const command = `INSERT INTO users (id, email, password) VALUES ($1, $2, $3)`

    const values = [id, email, password ];
    try {
      const newUser = await db.query(command, values);
      res.locals.newUser = newUser.rows[0]._id; 
      return next()
    } catch(err) {
      return next(createHttpError(400, 'Could not create user in usersController'))
    }
  },
};

export default usersController;