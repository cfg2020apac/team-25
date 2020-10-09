const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

admin.initializeApp();
// const db = admin.firestore();
const app = express();
app.use(cors());

//handler imports
const { helloWorld, whoAreWe } = require('./handlers/helloWorld');
const volunteersByGender = require('./handlers/volunteersByGender');

//routes
app.get('/', helloWorld);
app.post('/who/', whoAreWe);
app.get('/volunteersByGender', volunteersByGender);

exports.api = functions.https.onRequest(app);
