const FirebaseClass = require("../../containers/firebaseClass");

class FirebaseUser extends FirebaseClass{

        constructor(){
            super('Users')
        }


}

module.exports= FirebaseUser;