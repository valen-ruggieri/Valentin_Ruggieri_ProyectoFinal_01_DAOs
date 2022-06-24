const mongoose = require('mongoose')


class mongoClass{




    constructor(collectionName,docSchema){
        this.collection = mongoose.model(collectionName,docSchema)
    }

}