import { pool } from "../db/connection.js";
/**
 * The function `getUsers` retrieves all rows from the `users_test_joseangelricomendieta` table in a
 * database.
 * @returns The function `getUsers` is returning the rows fetched from the
 * `users_test_joseangelricomendieta` table in the database.
 */

export const getUsers = async () => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM users_test_joseangelricomendieta;"
    );
    return rows;
  } catch (err) {
    throw { err };
  }
};

/**
 * The above function creates a new user in a MySQL database table.
 * @param newUser - The `newUser` parameter is an object that contains the following properties:
 * `name`, `secondName`, `lastName`, `secondLastName`, `dateBirth`, `email`, `phone`.
 * @returns the number of rows affected by the INSERT statement.
 */
export const createUser = async (newUser) => {
  try {
    const [rows] = await pool.execute(
      "INSERT INTO users_test_joseangelricomendieta (name, secondName, lastName, secondLastName, dateBirth, email, phone) VALUES (?, ?, ?, ?, ?, ?, ?);",
      [
        newUser.name,
        newUser.secondName,
        newUser.lastName,
        newUser.secondLastName,
        newUser.dateBirth,
        newUser.email,
        newUser.phone,
      ]
    );
    return rows;
  } catch (err) {
    throw { err };
  }
};
