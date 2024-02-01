const mysql = require('mysql');

class Database {
    constructor(config) {
        this.connection = mysql.createConnection(config);
    }

    connect() {
        this.connection.connect(error => {
            if (error) {
                console.error('Error al conectar a la base de datos:', error);
                throw error;
            }
            console.log('Conexión a la base de datos establecida');
        });
    }

    query(sql, values) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, values, (error, results, fields) => {
                if (error) {
                    console.error('Error al ejecutar la consulta:', error);
                    return reject(error);
                }
                resolve(results);
            });
        });
    }

    end() {
        this.connection.end(error => {
            if (error) {
                console.error('Error al cerrar la conexión a la base de datos:', error);
                throw error;
            }
            console.log('Conexión a la base de datos cerrada');
        });
    }
}

module.exports = Database;