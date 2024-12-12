import express from 'express';
import mysql from 'mysql2';

const app = express(),
      PORT = process.env.PORT || 3000;

const connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'sql_inject'
});

app.use(express.json());

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.post('/login', (req, res) => {
  const { login, pass } = req.body,
	query = `SELECT * FROM users WHERE login='${login}'  AND pass='${pass}'`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
