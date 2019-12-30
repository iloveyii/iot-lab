import * as functions from 'firebase-functions';
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

export const sensor_data = functions.https.onRequest(async (request, response) => {
    var db = admin.database();
    var ref = db.ref("mydb");
    ref.on("value", function(snapshot) {
        console.log(snapshot.val());
        return response.send(snapshot.val())
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
});
