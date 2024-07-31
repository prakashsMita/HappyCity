const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 8081;

// Enable CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

// Parse JSON bodies
app.use(bodyParser.json());

// Create connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mysql-prakashs',
  database: 'happycityy'
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
    process.exit(1); // Exit process if unable to connect
  }
  console.log('MySQL connected...');
});

// Route to get all visitors
app.get('/visitorlist', (req, res) => {
  console.log('Received request for /visitorlist');
  const sql = 'SELECT * FROM visitorlist';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ error: 'Database query error' });
    }
    res.json(results);
  });
});

// Route to get a particular visitor
app.get('/visitorlist/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM visitorlist WHERE id = ?';
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ error: 'Database query error' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Visitor not found' });
    }
    res.json(results[0]);
  });
});

// Route to delete a visitor by ID
app.delete('/visitorlist/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM visitorlist WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Database deletion error:', err);
      return res.status(500).json({ error: 'Database deletion error' });
    }
    res.json({ message: 'Visitor deleted' });
  });
});

// Route to add a new visitor
app.post('/visitorlist', (req, res) => {
  const { visitorName, manaipirivu, VistDate, vistTime, occ, address, num, totalcount, feedback, associateName, travelName, drMob, kmDetails, associateDirectorName, associateDirectorSign } = req.body;
  console.log('Received data:', req.body);

  const sql = 'INSERT INTO visitorlist (visitorName, manaipirivu, VistDate, vistTime, occ, address, num, totalcount, feedback, associateName, travelName, drMob, kmDetails, associateDirectorName, associateDirectorSign) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [visitorName, manaipirivu, VistDate, vistTime, occ, address, num, totalcount, feedback, associateName, travelName, drMob, kmDetails, associateDirectorName, associateDirectorSign];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Database insertion error:', err);
      return res.status(500).json({ error: err.message });
    }
    console.log('Insert result:', result);
    res.json({ message: 'New visitor added', id: result.insertId });
  });
});

// Route to update a visitor by ID
app.put('/visitorlist/:id', (req, res) => {
  const id = req.params.id;
  const { visitorName, manaipirivu, VistDate, vistTime, occ, address, num, totalcount, feedback, associateName, travelName, drMob, kmDetails, associateDirectorName, associateDirectorSign } = req.body;

  if (!visitorName) {
    return res.status(400).json({ error: 'visitorName is required' });
  }

  const sql = 'UPDATE visitorlist SET visitorName = ?, manaipirivu = ?, VistDate = ?, vistTime = ?, occ = ?, address = ?, num = ?, totalcount = ?, feedback = ?, associateName = ?, travelName = ?, drMob = ?, kmDetails = ?, associateDirectorName = ?, associateDirectorSign = ? WHERE id = ?';
  const values = [visitorName, manaipirivu, VistDate, vistTime, occ, address, num, totalcount, feedback, associateName, travelName, drMob, kmDetails, associateDirectorName, associateDirectorSign, id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Database update error:', err);
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Visitor not found' });
    }
    res.json({ message: 'Visitor updated' });
  });
});


// Route to handle login
app.post('/login', (req, res) => {
  const { visitorEmail, visitorPassword } = req.body;
  console.log('Received data:', req.body);

  // Validate input
  if (!visitorEmail || !visitorPassword) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Insert credentials into the login table
  const sql = 'INSERT INTO login (visitorEmail, visitorPassword) VALUES (?, ?)';
  const values = [visitorEmail, visitorPassword];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Database insertion error:', err);
      return res.status(500).json({ error: 'Database insertion error' });
    }
    console.log('Insert result:', result);
    res.json({ message: 'Login credentials added', id: result.insertId });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
