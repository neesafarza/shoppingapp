const sqlite3 = require('sqlite3').verbose();

module.exports.DatabaseProcessor = class {
    constructor () {
        this.connect()
    }

    connect () {
        if (!this.db) {
        this.db = new sqlite3.Database('./shoppingapp.db', (err) => {
            if (err) {
              console.error(err.message);
              throw err;
            } else {
            console.log('Connected to the shoppingapp database.');                
            }
          }); }
    }

    select (table) {
        let query = `SELECT * FROM ${table}`;
        return new Promise((resolve, reject) => {
            this.db.all(query, [], (err, row) => {
                if(err) {
                    console.error(err);
                    reject(err);
                }
                resolve(row);
            });
        });
    }
}

