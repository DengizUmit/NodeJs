const express = require('express');
const app = express();

// validatorjs
const validator = require('validatorjs');

// knex
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: process.cwd() + '/data' + '/db.sq3',
    },
    useNullAsDefault: true
});

async function InitDatabaseMigration() {
    console.log("Migration start");
    await knex.schema.createTableIfNotExists('tweets', (table) => {
        table.increments('id').primary();
        table.string('tweet');
        table.string('username');
        // created_at
        table.timestamp('created_at').defaultTo(knex.fn.now);
    });
    console.log("Migration end");
}

InitDatabaseMigration();

// json
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Get main page
app.get('/', (req, res) => {
  res.send('Main')
});

// Get /tweets - Return all tweets
app.get('/', (req, res) => {
    
});

// Get /tweets/:id - Return a specific tweet
app.get('/', (req, res) => {
    
});

// Post /tweets - Create a new tweet
app.post('/', (req, res) => {
    
});

// Put /tweets/:id - Update a tweet
app.put('/', (req, res) => {
    
});

// Delete /tweets/:id - Delete a tweet
app.delete('/', (req, res) => {
    
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
});