const mongoose = require("mongoose");

class MongoDBClass {
  constructor(collectionName, docSchema) {
    this.collection = mongoose.model(collectionName, docSchema);
  }
  async getAll() {
    try {
      const all = await this.collection.find().lean();
      return all;
    } catch (error) {
      throw new Error(err);
    }
  }

  async getById(id) {
    try {
      const one = await this.collection.findById(id).lean();
      return one;
    } catch (error) {
      throw new Error(err);
    }
  }

  async countAll() {
    try {
      const all = await this.collection.find().count();
      return all;
    } catch (error) {
      throw new Error(err);
    }
  }
  async create(doc) {
    try {
      await this.collection.create(doc);
    } catch (error) {
      throw new Error(err);
    }
  }
  async deleteById(id) {
    try {
      const one = await this.collection.findById(id).deleteOne();
    } catch (error) {
      throw new Error(err);
    }
  }
  async deleteAll() {
    try {
      const all = await this.collection.deleteMany();
    } catch (error) {
      throw new Error(err);
    }
  }
  async updateById(id, doc) {
    try {
      const one = await this.collection.findByIdAndUpdate(id, doc);
    } catch (error) {
      throw new Error(err);
    }
  }
}

module.exports = MongoDBClass;
