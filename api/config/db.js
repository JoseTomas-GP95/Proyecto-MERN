const mongoose = require('mongoose');
require("dotenv").config({ path: "variables.env" }); // para usar variable en el env


const conectarDB = async () =>  {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log("DB conectada")
  }
  catch (error) {
    console.log(error);
    process.exit(1); // Sirve que en caso de haber un error, detener la app
  }
}

module.exports = conectarDB;