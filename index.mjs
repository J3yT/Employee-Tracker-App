import mysql from "mysql2"
import inquirer from "inquirer"

const pool = mysql.createPool({
      host: "localhost",
      user: "root",
      database: "employee_db",
      waitForConnections: true,
      password: "rootroot",
      connectionLimit: 10,
      maxIdle: 10,
      idleTimeout: 60000,
      queueLimit: 0
    });

    const promisePool = pool.promise();

    const [rows,fields] = await promisePool.query("SELECT * from role");

    console.log(rows)