// READ CONFIG.PROPERTIES
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('../config.properties');

// Import Class
const hitsFunctions = require("./src/Functions/hits")
const AxiosController = require('./src/Controller/axios.controller');
const Database = require('./src/Controller/mysql.controller');

// Functions
const lastHitsSave = async (URL, dbConfig) => {
  const hitsFunctionsOBJ = new hitsFunctions(URL);
  const [URL_QUERY,  PAYLOAD] = await hitsFunctionsOBJ.getLasHits()
  //const axiosControllerObj = new AxiosController(URL);
  console.log(URL_QUERY, PAYLOAD)

  // DATABASE CONEXION

  const db = new Database(dbConfig);
  db.connect();

  db.query('').then(results => {
      console.log('La solución es:', results[0].solution);
  }).catch(error => {
      console.error('Error:', error);
  }).finally(() => {
      db.end();
  });

};


/////////////////////////////////////////////////////////////////

const URL = properties.get('CTP_URL');
const dbConfig = {
  host: properties.get('DB_HOST'),
  user: properties.get('DB_USER'),
  password: properties.get('DB_PASS'),
  database: properties.get('DB_DATABASE')
};

lastHitsSave(URL,dbConfig)











