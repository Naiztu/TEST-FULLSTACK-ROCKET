import { createPool } from "mysql2/promise";
import "dotenv/config";

console.log(process.env.MYSQL_PASSWORD);

export const pool = createPool({
  host: process.env.MYSQL_HOST || "",
  user: process.env.MYSQL_USER || "",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "",
});

export async function createTable() {
  const sql = `
      CREATE TABLE users_test_joseangelricomendieta (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL, 
        secondName VARCHAR(255),
        lastName VARCHAR(255) NOT NULL,
        secondLastName VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        dateBirth DATE NOT NULL,

        PRIMARY KEY (id)
    );
  `;

  try {
    const [rows] = await pool.execute(sql);
    console.log("Table created successfully");
    console.log(rows);
  }
  catch (err) {
    console.log(err);
  }

}
