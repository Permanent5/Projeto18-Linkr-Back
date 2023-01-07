import { connection } from "../database/db.js";

export function uniqueEmailValidation(email) {
  return connection.query("SELECT * FROM users WHERE email=$1", [email]);
}

export function createUser(username, email, hashPassword, photo) {
  return connection.query(
    `INSERT INTO users (username, email, password, photo) 
          VALUES ($1, $2, $3, $4);`,
    [username, email, hashPassword, photo]
  );
}

export function findUser(email, password) {
  return connection.query(
    "SELECT * FROM users WHERE email=$1 AND password=$2",
    [email, password]
  );
}

export function getOtherUserPosts(id) {
  return connection.query(`SELECT (link, text) FROM posts WHERE user_id = $1;`, [
    id,
  ]);
}
