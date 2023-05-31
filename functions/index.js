const {app} = require("./src/config/app");
const functions = require("firebase-functions/v2");
functions.setGlobalOptions({maxInstances: 1});

exports.app = functions.https.onRequest(app);
