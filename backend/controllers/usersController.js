import db from "../database/db.js";
import createHttpError from "http-errors";

const usersController =  {
  fetchUsers: async (req, res, next) => {
    try {
      const { rows } = await db.query('SELECT * FROM users');
      console.log("Users in table:", rows);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
    next();
  },
  createUsers: async (req, res, next) => {
    //deconstruct email and password from req.body
    const { email, password } = req.body;
    //Good knowledge to think about the benefits of parameterized SWL queries
    //i.e prevents SQL injection
    const command = `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *`;
    const values = [email, password];
    try {
      //db.query contains a "rows" property within the object
      const newUser = await db.query(command, values);
      //rows is an array
      //res.locals is an object from express to store our new data between middleware
      res.locals.newUser = newUser.rows[0]; 
      //our new property should be available to any middleware now
      return next();
    } catch (err) {
      console.error("Error creating user:", err);
      return next(createHttpError(400, 'Could not create user in usersController'));
    }
    //add next function once we add another middleware
  },
};

export default usersController;