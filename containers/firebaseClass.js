const databaseFR = require("../config/configFirestore");
class FirebaseClass {
  constructor(collectionName) {
    this.db = databaseFR;
    this.collection = this.db.collection(collectionName);
  }
  async getAll() {
    try {
      const all = await this.collection.get();
      return all.docs.map((doc) => ({ _id: doc.id, ...doc.data() }));
    } catch (error) {
      throw new Error(err);
    }
  }
  async getById(id) {
    try {
      const one = await this.collection.doc(id).get();
      return one.data();
    } catch (error) {
      throw new Error(err);
    }
  }

  async countAll() {
    try {
      const all = await this.collection.get();
      return all.docs.length;
    } catch (error) {
      throw new Error(err);
    }
  }
  async create(doc) {
    try {
      const newDoc = await this.collection.add(doc);
      return newDoc.id;
    } catch (error) {
      throw new Error(err);
    }
  }
  async deleteById(id) {
    try {
      await this.collection.doc(id).delete();
    } catch (error) {
      throw new Error(err);
    }
  }
  async deleteAll() {
    try {
      const all = await this.collection.get();
      all.docs.map((doc) => doc.ref.delete());
    } catch (error) {
      throw new Error(err);
    }
  }
  async updateById(id, doc) {
    try {
      const docUpdate = await this.collection.doc(id).update(doc);
      return docUpdate;
    } catch (error) {
      throw new Error(err);
    }
  }
}

module.exports = FirebaseClass;
