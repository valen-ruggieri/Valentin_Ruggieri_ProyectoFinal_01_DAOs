const options = require("../config/configSQL");
const knex = require("knex");
const initTable = require("../controllers/initsSQL");
const database = knex(options.sqlite3);

class SQLClass {
  constructor(tableName, schemaTableName) {
    this.database = database;
    this.table = tableName;
    this.schemaTable = schemaTableName;
  }

  async initSQL() {
    await initTable("Users");
    await initTable("Products");
    await initTable("Cart");
    await initTable("Chat");
  }

  async getAll() {
    try {
      const all = await this.database.from(this.table).select("*");

      return all;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getById(id) {
    try {
      let one = await this.database
        .from(this.table)
        .select("*")
        .where("_id", id);
      one = one[0];
      return one;
    } catch (error) {
      throw new Error(err);
    }
  }

  async countAll() {
    try {
      const all = await this.database.count().from(this.table);
      return all[0]["count(*)"];
    } catch (error) {
      throw new Error(err);
    }
  }
  async create(doc) {
    try {
      await this.initSQL();
      await this.database(this.table).insert(doc);
    } catch (error) {
      throw new Error(error);
    }
  }
  async deleteById(id) {
    try {
      await this.database.from(this.table).where("_id", id).del();
    } catch (error) {
      throw new Error(err);
    }
  }

  async deleteAll() {
    try {
      await this.database(this.table).del();
    } catch (error) {
      throw new Error(error);
    }
  }
  async updateById(id, doc) {
    try {
      await this.database(this.table).where("_id", id).update(doc);
    } catch (error) {
      throw new Error(err);
    }
  }
}

module.exports = SQLClass;
