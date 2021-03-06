"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = require("./firebase");
const firestore_1 = require("./firestore");
const realtime_1 = require("./realtime");
const firebaseHelper = new firebase_1.FirebaseHelper();
const firestoreHelper = new firestore_1.FirestoreHelper();
const realtimeHelper = new realtime_1.RealtimeHelper();
exports.firebase = firebaseHelper;
exports.firestore = firestoreHelper;
exports.realtime = realtimeHelper;
//# sourceMappingURL=index.js.map