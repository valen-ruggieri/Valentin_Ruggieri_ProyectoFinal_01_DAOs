const knex = require("knex");
const options = require("../config/configSQL");
const database = knex(options.sqlite3);
const initTable = async (tableForInit) => {
  if (tableForInit === "Cart") {
    await database.schema.hasTable(tableForInit).then(async (exists) => {
      if (!exists) {
        return await database.schema.createTable(tableForInit, (table) => {
          table.increments("_id").primary();
          table.string("titulo");
          table.string("descripcion");
          table.integer("timestamp");
          table.integer("precio");
          table.string("img");
          table.string("codigo");
        });
      }
    });
  } else if (tableForInit === "Chat") {
    await database.schema.hasTable(tableForInit).then(async (exists) => {
      if (!exists) {
        await database.schema.createTable(tableForInit, (table) => {
          table.string("autor");
          table.string("date");
          table.string("text");
        });
      }
    });
  } else if (tableForInit === "Products") {
    await database.schema.hasTable(tableForInit).then(async (exists) => {
      if (!exists) {
        return await database.schema.createTable(tableForInit, (table) => {
          table.increments("_id").primary();
          table.string("titulo");
          table.string("descripcion");
          table.integer("timestamp");
          table.integer("precio");
          table.string("img");
          table.string("codigo");
        });
      }
    });
  } else if (tableForInit === "Users") {
    await database.schema.hasTable(tableForInit).then(async (exists) => {
      if (!exists) {
        return await database.schema.createTable(tableForInit, (table) => {
          table.increments("_id").primary();
          table.string("userName");
          table.string("email");
          table.string("password");
          table.string("userType");
        });
      }
    });
  }
};

module.exports = initTable;
